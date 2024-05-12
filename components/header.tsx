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
  additionalContent?: any
}

export function Header({ menus, blocks, additionalContent, mainObject }: HeaderProps) {
  const [showMenu, setShowMenu] = React.useState<Boolean>(false)
  const multiMode = blocks?.multiMode?.field_multi_object_mode || false
  console.log(multiMode);
  

  return (
    <StyledHeader className="">
      <div className="container">
        <div className="grid items-center justify-between grid-cols-3 pt-4 md:pt-6">
          <div>
          </div>
          <div className="flex justify-center">
          </div>
          <div className="flex justify-end">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
      <div className="container relative flex-wrap items-center justify-between pt-0 pb-6 lg:pt-0 lg:pb-10">
        <Link href="/" passHref legacyBehavior={true}>
          <a className="inline-flex justify-start">
            <Logo className="w-72 h-24 text-primary lg:h-32 lg:w-96 " />
            <span className="sr-only">{siteConfig.name}</span>
          </a>
        </Link>
        <button
          className="absolute transition-all border border-transparent right-0 md:right-4 me-1 top-4 p-2 link-button"
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
const StyledHeader = styled.header`
  position: relative;
  background: linear-gradient(0deg, rgba(63, 94, 251, 0) -20%, rgba(255, 216, 208, 1) 100%);
`
