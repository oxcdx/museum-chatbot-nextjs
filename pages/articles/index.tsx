import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"

import { DrupalJsonApiParams } from "drupal-jsonapi-params"

import { useTranslation } from "next-i18next"

import { drupal } from "lib/drupal"
import { getGlobalElements } from "lib/get-global-elements"
import { getParams } from "lib/get-params"
import { Layout, LayoutProps } from "components/layout"
import { NodeArticleCard } from "components/node--article--card"
import { PageHeader } from "components/page-header"

import NonSSRWrapper from "components/non-ssr-wrapper"

interface ArticlePageProps extends LayoutProps {
  articles: DrupalNode[]
  context: GetStaticPropsContext
  path: string
}

export default function ArticlesPage({
  articles,
  menus,
  blocks,
  context,
  path,
}: ArticlePageProps) {
  console.log("context", context);
  console.log("path", path);
  
  const { t } = useTranslation()

  return (
    <NonSSRWrapper>
      <Layout
        menus={menus}
        blocks={blocks}
        meta={{
          title: t("articles"),
        }}
      >
        <PageHeader
          heading={t("articles")}
          breadcrumbs={[
            {
              title: t("articles"),
            },
          ]}
        />
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <NodeArticleCard key={article.id} node={article} />
            ))}
          </div>
        </div>
      </Layout>
    </NonSSRWrapper>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<ArticlePageProps>> {

  const path = await drupal.translatePathFromContext(context)

  const params = new DrupalJsonApiParams()
    .addFields("node--blog_post", ["title", "path", "body", "uid"])
    .addFilter("status", "1")
    .addInclude(["uid.user_picture"])
    .addSort("created", "DESC")

  // Fetch all published articles sorted by date.
  const articles = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: params.getQueryObject(),
    }
  )

  return {
    props: {
      ...(await getGlobalElements(context)),
      context,
      path,
      articles,
    },
  }
}
