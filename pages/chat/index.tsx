import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next"
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

interface ChatPageProps {
  additionalContent?: {
    featuredArticles?: DrupalNode[]
    featuredObjects?: DrupalNode[]
    termContent?: DrupalNode[]
  }
  menus: any
  blocks: any
}

export default function ChatPage({
  menus,
  blocks,
}: ChatPageProps) {
  return (
    <NonSSRWrapper>
      <Layout
        menus={menus}
        blocks={blocks}
      >
      </Layout>
    </NonSSRWrapper>
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<ChatPageProps>> {

  return {
    props: {
      ...(await getGlobalElements(context)),
    },
  }
}