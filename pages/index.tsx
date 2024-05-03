import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { DrupalBlock, DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import classNames from "classnames"

import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { BlockBanner } from "components/block--banner"
import { NodeArticleCardAlt } from "components/node--article--card-alt"
import { NodeRecipeCard } from "components/node--recipe--card"
import { NodeObjectCard } from "components/node--collection-object--card"

import NonSSRWrapper from "../components/non-ssr-wrapper"

interface IndexPageProps extends LayoutProps {
  banner: DrupalBlock
  promotedObjects: DrupalNode[]
  promotedArticles: DrupalNode[]
  promotedRecipes: DrupalNode[]
  context: GetStaticPropsContext
}

export default function IndexPage({
  banner,
  context,
  promotedObjects,
  promotedArticles,
  promotedRecipes,
  menus,
  blocks,
}: IndexPageProps) {
  console.log(context);
  
  const { t } = useTranslation('common')

  return (
    <NonSSRWrapper>
      <Layout meta={{ title: t("home") }} menus={menus} blocks={blocks}>
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
        {promotedObjects?.length ? (
          <div className="container py-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {promotedObjects.map((node) => (
                <NodeObjectCard node={node} key={node.id} />
              ))}
            </div>
          </div>
        ) : null}
        {/* {promotedRecipes?.length ? (
          <div className="container py-8">
            <p className="py-10 font-serif text-3xl text-center text-text">
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
      .addPageLimit(1)
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

  const [banner] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>(
    "block_content--banner_block",
    context,
    {
      params: getParams("block_content--banner_block")
        .addFilter("info", "Umami Home Banner")
        .addPageLimit(1)
        .getQueryObject(),
    }
  )

  return {
    props: {
      ...(await getGlobalElements(context)),
      context,
      banner,
      promotedObjects,
      promotedArticles,
      promotedRecipes,
    },
  }
}
