import * as React from "react"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import {
  DrupalBlock,
  DrupalMenuLinkContent,
  DrupalTaxonomyTerm,
} from "next-drupal"
import classNames from "classnames"

import siteConfig from "site.config"
import { Logo } from "components/logo"
import { LocaleSwitcher } from "components/locale-switcher"
import { MenuMain } from "components/menu-main"
import { MenuUser } from "components/menu-user"
import { FormSearch } from "components/form--search"

import styled from "styled-components"

export interface HeaderProps {
  menus: {
    main: DrupalMenuLinkContent[]
  }
  blocks: {
    mainSiteSettings: DrupalBlock
    disclaimer: DrupalBlock
  }
  mainObject?: string
  currentObject?: string
  additionalContent?: any
  chatMode?: boolean
}

export function Header({ 
  menus, blocks, additionalContent, mainObject, currentObject, chatMode 
}: HeaderProps) {
  const [showMenu, setShowMenu] = React.useState<Boolean>(false)
  const multiMode = blocks?.mainSiteSettings?.field_multi_object_mode || false
  const titleOverride = blocks?.mainSiteSettings?.field_site_title_override || null  

  
  const { i18n } = useTranslation();

  return (
    <StyledHeader className="fixed top-0 z-10 w-full" chatmode={chatMode ? 1 : 0}>
      <div className="container">
        <div className={classNames(
          "grid items-center grid-cols-2 md:grid-cols-3 transition-all",
          {
            "pt-4 md:pt-4": chatMode,
            "pt-4 md:pt-6": !chatMode,
          } 
        )}>
          <div className="hidden md:block">
          </div>
          <div className="flex justify-start md:justify-center h-8 ">
            {chatMode && i18n.language === "en" ? (
              <div className="px-4 py-3 -mt-1 xl:mt-2 xl2: font-sans text-xl text-black rounded-2xl shadow-lg bg-white/75 inline-flex m-0 absolute md:ms-20 lg:ms-0 max-w-sm sm:max-w-md md:max-w-sm lg:max-w-md xl:max-w-3xl 2xl:max-w-4xl">
                You are chatting with:&nbsp;<span className="uppercase">🔘 Bowl Bot</span>
              </div>
            ) : null}
          </div>
          <div className="flex justify-end">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
      <div className={classNames(
        "container relative flex-wrap items-center justify-between pt-0 lg:pt-0 transition-all",
        {
          "pb-2 lg:pb-0": chatMode,
          "pb-6 lg:pb-10": !chatMode,
        } 
      )}>
        <div className={classNames(
        "",
          {
            "invisible md:visible": chatMode,
            "": !chatMode,
          } 
        )}>
          <Link href="/" passHref legacyBehavior={true}>
            <a className="inline-flex justify-start hover:text-black">
              <Logo className={classNames(
                " text-primary transition-all",
                  {
                    "w-24 h-14 -mt-4 mb-8": chatMode,
                    "w-32 h-20 md:w-44 md:h-24 lg:h-24 lg:w-44": !chatMode,
                  } 
                )}
              />
              <span className={classNames(
                "block border-l-2 transition-all",
                  {
                    "ms-2 ps-2 lg:ms-4 lg:ps-4 -mt-4 mb-8": chatMode,
                    "ms-4 ps-4 lg:ms-8 lg:ps-8": !chatMode,
                  } 
                )}
              >
              </span>
              <span className={classNames(
                "block self-center transition-all font-sctoabc",
                  {
                    "w-16 md:w-16 lg:w-16 pe-0 text-sm -mt-4 mb-8": chatMode,
                    "w-24 pe-2 md:pe-0 md:w-28 lg:w-28 text-xl md:text-2xl lg:text-2xl": !chatMode,
                  } 
                )}
              >
                {titleOverride ? titleOverride : siteConfig.name}
              </span>
            </a>
          </Link>
        </div>
        <button
          className={classNames(
            "absolute transition-all border border-transparent right-0 md:right-4 me-1  p-2 link-button",
            {
              "top-1": chatMode,
              "top-4": !chatMode,
            } 
          )}
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            className="w-8 h-8"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <div
          className={classNames(
            "max-h-0 transition-all pe-4 md:pe-0 pb-8",
            {
              "max-h-screen visible": showMenu,
              "overflow-hidden invisible": !showMenu,
            }
          )}
        >
          <MenuMain 
            items={menus.main} 
            blocks={blocks} 
            mainObject={mainObject}
            additionalContent={additionalContent}
          />
        </div>
      </div>
    </StyledHeader>
  )
}

// styled component for the header
const StyledHeader = styled.header<{ chatmode: number }>`
  background: linear-gradient(0deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.5) 8%,rgba(255,255,255,1) 16%,rgba(255,255,255,1) 100%);
`
// background: linear-gradient(0deg, rgba(63, 94, 251, 0) -20%, rgba(255, 216, 208, 1) 100%);
// background: linear-gradient(0deg, rgba(193,118,170,1) 10%, rgba(247,216,208,.8) 90%);
// // if chatmode is true, use a different background gradient
// background: ${props => props.chatmode ? "linear-gradient(0deg, rgba(193,118,170,.7) 0%, rgba(193,118,170,.9) 10%, rgba(247,216,208,1) 90%)" : "linear-gradient(0deg, rgba(63, 94, 251, 0) -20%, rgba(255, 216, 208, 1) 100%)"};
// background: ${props => props.chatmode ? "linear-gradient(0deg, rgba(255,255,255,.7) 0%, rgba(255,255,255,.9) 10%, rgba(255,255,255,1) 90%)" : "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 70%, rgba(255,255,255,1) 100%)"};