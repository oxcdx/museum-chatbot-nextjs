import { useState, useEffect } from "react"
import { GetStaticPathsResult, GetStaticPropsResult } from "next"
import { useRouter } from "next/router"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { DrupalNode, DrupalTaxonomyTerm } from "next-drupal"

import { PageProps } from "types"
import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { BlockBanner } from "components/block--banner"
import { NodeArticle, NodeArticleProps } from "components/node--article"
import { NodeRecipe } from "components/node--recipe"
import { NodeObject } from "components/node--collection_object"
import { NodePage } from "components/node--page"
import {
  TaxonomyTermRecipeCategory,
  TaxonomyTermRecipeCategoryProps,
} from "components/taxonomy-term--recipe-category"
import {
  TaxonomyTermTags,
  TaxonomyTermTagsProps,
} from "components/taxonomy-term--tags"

import NonSSRWrapper from "components/non-ssr-wrapper"

const RESOURCE_TYPES = [
  "node--page",
  "node--article",
  "node--recipe",
  "node--collection_object",
  "taxonomy_term--recipe_category",
  "taxonomy_term--tags",
]

interface ResourcePageProps extends LayoutProps, PageProps {
  resource: DrupalNode | DrupalTaxonomyTerm
  additionalContent: {
    featuredArticles?: DrupalNode[]
    featuredObjects?: DrupalNode[]
    termContent?: DrupalNode[]
  }
}

export default function ResourcePage({
  resource,
  additionalContent,
  menus,
  blocks,
}: ResourcePageProps) {
  // console.log("resource", resource);
  
  const router = useRouter()
  // add a useState to store whether chat mode is active
  const [chatMode, setChatMode] = useState<boolean>(false)
  const [safeToToggle, setSafeToToggle] = useState<boolean>(false)

  const [exitModalOpen, setExitModalOpen] = useState(false)

  const handleExitModal = (b: boolean) => {
    setExitModalOpen(b)
  }

  useEffect(() => {
    if (safeToToggle) return
    setTimeout(() => {
      setSafeToToggle(true)
    }, 2000)
  }, [])
  // useEffect to chack if the route has ?chat=true
  // if the route has ?chat=true, set chat mode to true
  // if the route doesnt have ?chat=true, set chat mode to false
  useEffect(() => {
    if (router.asPath.includes("?chat=true")) {
      // wait for it to be safe to toggle
      if (!safeToToggle) return
      //check if the chat mode is already true
      if (chatMode === true) return
      setChatMode(true)
    } else {
      // wait for it to be safe to toggle
      if (!safeToToggle) return
      //check if the chat mode is already false
      if (chatMode === false) return
      setChatMode(false)
    }
  }, [router.asPath, safeToToggle])
  // a function to toggle chat mode
  const toggleChatMode = (mode: boolean): void => {
    // console.log("toggleChatMode", mode);

    setSafeToToggle(false)
    
    setChatMode(mode);
    if (mode === true) {
      // if the route doesnt already have ?chat=true, add ?chat=true to the router current path and push the route
      if (!router.asPath.includes("?chat=true"))
        router.push(`${router.asPath}?chat=true`)
    } else {
      // if the route already has ?chat=true, remove ?chat=true from the router current path and push the route
      if (router.asPath.includes("?chat=true"))
        router.push(router.asPath.replace("?chat=true", ""))
    }

    setTimeout(() => {
      setSafeToToggle(true)
    }, 2000)
  };

  const multiMode = blocks?.mainSiteSettings?.field_multi_object_mode  
  
  if (!resource) return null

  return (
    <NonSSRWrapper>
      <Layout
        menus={menus}
        blocks={blocks}
        meta={{
          title: resource.title || resource.name,
        }}
        additionalContent={additionalContent}
        //
        chatMode={chatMode}
        currentObject={resource?.title || resource?.name || ""}
        handleExitModal={handleExitModal}
        exitModalOpen={exitModalOpen}
      >
        {resource.type === "node--collection_object" && (
          <NodeObject 
            node={resource as DrupalNode} 
            blocks={blocks} 
            toggleChatMode={toggleChatMode}
            chatMode={chatMode}
            handleExitModal={handleExitModal}
            exitModalOpen={exitModalOpen}
            safeToToggle={safeToToggle}
          />
        )}
      </Layout>
    </NonSSRWrapper>
  )
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  return {
    paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
    fallback: "blocking",
  }
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<ResourcePageProps>> {
  const path = await drupal.translatePathFromContext(context)

  // If path is not found or the resource is not one we care about,
  // return a 404.
  if (!path || !RESOURCE_TYPES.includes(path.jsonapi.resourceName)) {
    return {
      notFound: true,
    }
  }

  // Fetch the resource from Drupal.
  const resource = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    {
      params: getParams(path.jsonapi.resourceName)?.getQueryObject(),
    }
  )

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`)
  }

  // If we're not in preview mode and the resource is not published,
  // Return 404.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    }
  }

  // Fetch additional content for pages.
  let additionalContent: PageProps["additionalContent"] = {}

  if (resource.type === "node--article") {
    // Fetch featured articles.
    additionalContent["featuredArticles"] =
      await drupal.getResourceCollectionFromContext("node--article", context, {
        params: getParams("node--article", "card")
          .addFilter("id", resource.id, "<>")
          .addPageLimit(3)
          .addSort("created", "DESC")
          .getQueryObject(),
      })
  }

  if (resource.type === "node--collection_object") {
    additionalContent["featuredObjects"] =
    await drupal.getResourceCollectionFromContext("node--collection_object", context, {
      params: getParams("node--collection_object")
        .addPageLimit(2)
        .addSort("created", "DESC")
        .getQueryObject(),
    })
  }

  // if (resource.type === "taxonomy_term--recipe_category") {
  //   // Fetch the term content.
  //   additionalContent["termContent"] =
  //     await drupal.getResourceCollectionFromContext("node--recipe", context, {
  //       params: getParams("node--recipe", "card")
  //         .addSort("created", "DESC")
  //         .addFilter("field_recipe_category.id", resource.id, "IN")
  //         .getQueryObject(),
  //     })
  // }

  // if (resource.type === "taxonomy_term--tags") {
  //   // Fetch the term content.
  //   // Tags can show both recipes and articles.
  //   additionalContent["termContent"] = [
  //     ...(await drupal.getResourceCollectionFromContext(
  //       "node--recipe",
  //       context,
  //       {
  //         params: getParams("node--recipe", "card")
  //           .addSort("created", "DESC")
  //           .addFilter("field_tags.id", resource.id, "IN")
  //           .getQueryObject(),
  //       }
  //     )),
  //     ...(await drupal.getResourceCollectionFromContext(
  //       "node--article",
  //       context,
  //       {
  //         params: getParams("node--article", "card")
  //           .addSort("created", "DESC")
  //           .addFilter("field_tags.id", resource.id, "IN")
  //           .getQueryObject(),
  //       }
  //     )),
  //   ]
  // }

  return {
    props: {
      ...(await getGlobalElements(context)),
      resource,
      additionalContent,
    },
  }
}
