import { useEffect, useState } from "react"
import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useRouter } from "next/router"
import { DrupalBlock, DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import classNames from "classnames"

import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { FormattedText } from "components/formatted-text"
import { BlockBanner } from "components/block--banner"
import { NodeArticleCardAlt } from "components/node--article--card-alt"
import { NodeRecipeCard } from "components/node--recipe--card"
import { NodeObjectCard } from "components/node--collection-object--card"

import NonSSRWrapper from "../components/non-ssr-wrapper"
import { use } from "react"

interface IndexPageProps extends LayoutProps {
  banner: DrupalBlock
  welcomeText: DrupalBlock
  promotedObjects: DrupalNode[]
  promotedArticles: DrupalNode[]
  promotedRecipes: DrupalNode[]
}

export default function IndexPage({
  banner,
  welcomeText,
  promotedObjects,
  promotedArticles,
  promotedRecipes,
  menus,
  blocks,
}: IndexPageProps) {
  const router = useRouter()
  const { t } = useTranslation('common')
  const multiMode = blocks?.mainSiteSettings?.field_multi_object_mode
  const mainObject = promotedObjects[0].path.alias || null
  

  // in a useEffect, check if blocks.multiMode is true
  // if blocks.multiMode is false, then shallow route to the url of the first promotedObject node
  useEffect(() => {
    if (multiMode === false && mainObject) {
      router.push(mainObject)
    }
  }, [router.asPath])



  return (
    <NonSSRWrapper>
      <Layout 
        meta={{ title: t("home") }} 
        menus={menus} 
        blocks={blocks} 
        mainObject={mainObject}
        // additionalContent={additionalContent}
      >
        {/* <BlockBanner block={banner} /> */}
        {/* <div className="container grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          {promotedArticles?.length
            ? promotedArticles.map((node, index) => (
                <NodeArticleCardAlt
                  node={node}
                  key={node.id}
                  className={classNames({
                    "col-span-1 sm:col-span-2 lg:col-span-1": index === 0,
                    "flex-col-reverse space-y-0 gap-4": index !== 0,
                  })}
                />
              ))
            : null}
        </div> */}
        {multiMode && promotedObjects?.length ? (
          <div className="container py-8 ox-max-width">
            <div className="py-10 font-sans text-3xl ">
              <FormattedText text={welcomeText.body.processed} />
            </div>
            <div className="p-6 font-sans text-2xl text-black rounded-2xl bg-white/75 inline-block mb-12 shadow-lg">
              <FormattedText text={welcomeText.field_choose_an_object_text} />
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {promotedObjects.map((node) => (
                <NodeObjectCard node={node} key={node.id} />
              ))}
            </div>
          </div>
        ) : null}
        {/* {promotedRecipes?.length ? (
          <div className="container py-8">
            <p className="py-10 font-sans text-3xl text-center text-text">
              {t(
                "explore-recipes-across-every-type-of-occasion-ingredient-and-skill-level"
              )}
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              {promotedRecipes.map((node) => (
                <NodeRecipeCard node={node} key={node.id} />
              ))}
            </div>
          </div>
        ) : null} */}
      </Layout>
    </NonSSRWrapper>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const promotedArticles = await drupal.getResourceCollectionFromContext<
    DrupalNode[]
  >("node--article", context, {
    params: getParams("node--article", "card")
      .addFilter("promote", "1")
      .addPageLimit(3)
      .addSort("created", "DESC")
      .getQueryObject(),
  })

  const promotedObjects = await drupal.getResourceCollectionFromContext<
    DrupalNode[]
  >("node--collection_object", context, {
    params: getParams("node--collection_object", "card")
      .addSort("created", "DESC")
      .addPageLimit(10)
      .getQueryObject(),
  })

  const promotedRecipes = await drupal.getResourceCollectionFromContext<
    DrupalNode[]
  >("node--recipe", context, {
    params: getParams("node--recipe", "card")
      .addSort("created", "DESC")
      .addPageLimit(4)
      .getQueryObject(),
  })

  // Fetch the Welcome Text block.
  const [welcomeText] = await drupal.getResourceCollectionFromContext<
    DrupalBlock[]
  >("block_content--choose_an_object_text", context, {
    params: getParams("block_content--site_settings")
      .addFilter("info", "Welcome Text Main")
      .addPageLimit(1)
      .getQueryObject(),
  })

  const [banner] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
    "block_content--banner_block",
    context,
    {
      params: getParams("block_content--banner_block")
        .addFilter("info", "Umami Home Banner")
        .addPageLimit(1)
        .getQueryObject(),
    }
  );

  // Ensure banner is not undefined
  const safeBanner = banner !== undefined ? banner : null;
  
  return {
    props: {
      ...(await getGlobalElements(context)),
      banner: safeBanner,
      welcomeText,
      promotedObjects,
      promotedArticles,
      promotedRecipes,
    },
  }
}
