import * as React from "react"
import Link from "next/link"
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
    multiMode: DrupalBlock
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
  const multiMode = blocks?.multiMode?.field_multi_object_mode || false
  console.log(currentObject);
  

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
          <div className="flex justify-start md:justify-center h-8">
            {chatMode ? (
              <div className="px-4 py-3 mt-4 md:mt-7 font-serif text-xl text-black rounded-2xl shadow shadow-md bg-white/75 inline-flex m-0 absolute">
                You are chatting with:&nbsp;<span className="text-primary">{currentObject}</span>
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
            <a className="inline-flex justify-start">
              <Logo className={classNames(
                " text-primary transition-all",
                  {
                    "w-36 h-12 lg:h-14 lg:w-40": chatMode,
                    "w-72 h-24 lg:h-32 lg:w-96": !chatMode,
                  } 
                )}
              />
              <span className="sr-only">{siteConfig.name}</span>
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
            "max-h-0 transition-all pe-4 md:pe-0 ",
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
  background: linear-gradient(0deg, rgba(63, 94, 251, 0) -20%, rgba(255, 216, 208, 1) 100%);
  background: linear-gradient(0deg, rgba(193,118,170,1) 10%, rgba(247,216,208,.8) 90%);
  // if chatmode is true, use a different background gradient
  background: ${props => props.chatmode ? "linear-gradient(0deg, rgba(193,118,170,.7) 0%, rgba(193,118,170,.9) 10%, rgba(247,216,208,1) 90%)" : "linear-gradient(0deg, rgba(63, 94, 251, 0) -20%, rgba(255, 216, 208, 1) 100%)"};
`
