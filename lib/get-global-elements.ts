import { GetServerSidePropsContext, GetStaticPropsContext } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { DrupalBlock, DrupalTaxonomyTerm } from "next-drupal"

import { drupal } from "lib/drupal"
import { getParams } from "lib/get-params"
import { LayoutProps } from "components/layout"

type GlobalElements = LayoutProps

// This is a helper function to fetch global elements for layout.
// This is going to be run for every pages on build.
// To make this fast, you could cache the results example on Redis.
export async function getGlobalElements(
  context: GetStaticPropsContext | GetServerSidePropsContext
): Promise<GlobalElements> {
  const menuOpts = {
    params: getParams("menu_link_content--menu_link_content").getQueryObject(),
    locale: context.locale,
    defaultLocale: context.defaultLocale,
  }

  let mainMenu, footerMenu, recipeCollections, footerPromo, disclaimer, mainSiteSettings;
  let error = null;
  
  try {
    // Fetch menu items.
    mainMenu = await drupal.getMenu("main", menuOpts)
    footerMenu = await drupal.getMenu("footer", menuOpts)
  } catch (error) {
    // Handle menu fetching errors
    mainMenu = { items: [] }
    footerMenu = { items: [] }
  }

  try {
    // Fetch recipes collections view.
    const { results } = await drupal.getView<DrupalTaxonomyTerm[]>("recipe_collections--block", {
      locale: context.locale,
      defaultLocale: context.defaultLocale,
      params: getParams("taxonomy_term--tags").addSort("name").getQueryObject(),
    })
    recipeCollections = results;
  } catch (error) {
    // Handle recipe collections fetching errors
    recipeCollections = []
  }

  try {
    // Fetch the footer promo block.
    const [promo] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>("block_content--footer_promo_block", context, {
      params: getParams("block_content--footer_promo_block")
        .addFilter("info", "Umami footer promo")
        .addPageLimit(1)
        .getQueryObject(),
    })
    footerPromo = promo !== undefined ? promo : null;
  } catch (error) {
    // Handle footer promo block fetching errors
    footerPromo = null;
  }

  try {
    // Fetch the disclaimer block.
    const [disc] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>("block_content--disclaimer_block", context, {
      params: getParams("block_content--disclaimer_block")
        .addFilter("info", "Museum Chat Disclaimer")
        .addPageLimit(1)
        .getQueryObject(),
    })
    disclaimer = disc !== undefined ? disc : null;
  } catch (error) {
    // Handle disclaimer block fetching errors
    disclaimer = null;
  }

  try {
    // Fetch the site_settings block.
    const [settings] = await drupal.getResourceCollectionFromContext<DrupalBlock[]>("block_content--site_settings", context, {
      params: getParams("block_content--site_settings")
        .addFilter("info", "Main Site Settings")
        .addPageLimit(1)
        .getQueryObject(),
    })
    mainSiteSettings = settings !== undefined ? settings : null;
  } catch (error) {
    // Handle site settings block fetching errors
    mainSiteSettings = null;
  }

  return {
    ...(await serverSideTranslations(context.locale, ["common"])),
    menus: {
      main: mainMenu ? mainMenu.items : [],
      footer: footerMenu ? footerMenu.items : [],
    },
    blocks: {
      mainSiteSettings,
      disclaimer
    }
  }
}
