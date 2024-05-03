import { Meta, MetaProps } from "components/meta"
import { PreviewAlert } from "components/preview-alert"
import { Header, HeaderProps } from "components/header"
import { Footer, FooterProps } from "components/footer"
import { TailwindIndicator } from "components/tailwind-indicator"

import styled from "styled-components"

export interface LayoutProps extends HeaderProps, FooterProps {
  meta?: MetaProps
  menus: HeaderProps["menus"] & FooterProps["menus"]
  children?: React.ReactNode
}

export function Layout({ meta, menus, blocks, children }: LayoutProps) {
  return (
    <>
      <Meta {...meta} />
      <FullHeightContainer className="flex flex-col min-h-screen">
        <div className="gradient-container">
          <div className="gradient"></div>
        </div>
        <PreviewAlert />
        <Header menus={{ main: menus.main }} />
        <main className="flex-1 pb-10 relative">
          {children}
        </main>
        {/* No footer for now */}
        {/* <Footer menus={{ footer: menus.footer }} blocks={blocks} /> */}
      </FullHeightContainer>
      <TailwindIndicator />
    </>
  )
}

//styled main component
const FullHeightContainer = styled.div`
  position: relative;
  .gradient-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .gradient {
    position: relative;
    top: -40px;
    left: -40px;
    width: calc(100% + 80px);
    height: calc(100% + 80px);
    overflow: hidden;
    background-color: #ff8a00;
    background-image: conic-gradient(
      from 10deg at 50% 60%, 
      #fc466b, 
      #3f5efb 60%, 
      #fc466b);
    &:after {
      content: '';
      position: absolute;
      inset: 0%;
      backdrop-filter: blur(40px);
      overflow: hidden;
      -webkit-mask: linear-gradient(90deg, black 50%, #ffffff11);
    }
  }
`
