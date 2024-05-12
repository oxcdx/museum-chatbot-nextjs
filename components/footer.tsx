import Link from "next/link"
import {
  DrupalBlock,
  DrupalMenuLinkContent,
  DrupalTaxonomyTerm,
} from "next-drupal"
import { useTranslation } from "next-i18next"

import { MediaImage } from "components/media--image"
import { FormattedText } from "components/formatted-text"
import { MenuFooter } from "components/menu-footer"

import styled from "styled-components"

export interface FooterProps {
  menus: {
    footer: DrupalMenuLinkContent[]
  }
  blocks: {
    multiMode: DrupalBlock
  }
}

export function Footer({ menus, blocks }: FooterProps) {
  const { t } = useTranslation("common")

  return (
    <StyledFooter>
      
      {blocks.disclaimer && (
        <div className="container text-center flex flex-col space-y-4 lg:text-left lg:grid-cols-[4fr_3.5fr_2.5fr] lg:space-y-0 lg:grid justify-between py-8 text-sm text-text">
          <div>
            <FormattedText
              text={blocks.disclaimer.field_disclaimer.processed}
            />
          </div>
          <div className="col-start-3 text-end">
            <FormattedText text={blocks.disclaimer.field_copyright.processed} />
          </div>
        </div>
      )}
    </StyledFooter>
  )
}

// Styled footer component
const StyledFooter = styled.footer`
  position: relative;
  background: linear-gradient(0deg, rgb(236 147 158 / 50%) 0%, rgba(255, 216, 208, 90%) 150%);
`