import { use, useEffect, useState } from "react"
import { 
  DrupalBlock,
  DrupalNode 
} from "next-drupal"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import Link from "next/link"

import { MediaImage } from "components/media--image"
import { ChatPanel } from "components/chat-panel"
import { ChatPanelLong } from "components/chat-panel-long"
import { MediaImageSquare } from "components/media--image-square"
import { BackButton } from "components/back-button"
import { FormattedText } from "components/formatted-text"

import { LinkExternal } from "@styled-icons/boxicons-regular"
import { log } from "console"

// extend nodeobjectprops to include blocks
export interface NodeObjectProps { 
  node: DrupalNode
  blocks: {
    mainSiteSettings: DrupalBlock
    disclaimer: DrupalBlock
  }
  chatMode: boolean
  safeToToggle: boolean
  toggleChatMode: (mode: boolean) => void
  handleExitModal?: (b: boolean) => void
  exitModalOpen?: boolean
} 

export function NodeObject({ 
  node, blocks, chatMode, toggleChatMode, safeToToggle, 
  handleExitModal, exitModalOpen, ...props 
}: NodeObjectProps) {

  // console.log(node)
  const { t } = useTranslation()
  const router = useRouter();
  const { asPath } = router;

  const isLongVersion = asPath.includes('bowl-isabella-destes-majolica-service-first-long-version-2-languages') ||
                        asPath.includes('die-schuessel-aus-dem-majolika-service-der-isabella-deste-erste-lange-version-2-sprachen');

  

  // add a useEffect to catch the translation if ssr is false
  // useEffect(() => {
  //   console.log(t("start-chat"))
  // }, [t])

  return (
    <div className="container ox-max-width" {...props}>
      <div className={classNames(
          "transition-opacity duration-300 ease-in-out",
          {
            "invisible h-0": chatMode,
            "visible": !chatMode,
          } 
        )}>
        {blocks?.mainSiteSettings?.field_multi_object_mode ? ( 
          <BackButton
            items={[
              {
                title: t("back-to-collection"),
                url: "/",
              }
            ]}
          /> ) : 
          <div className="pt-8"></div>
        }
        <article 
          className="card mb-3 bg-secondary text-white ox-max-width"
          data-twe-ripple-init
          data-twe-ripple-color="light">
          <div className="row g-0">
            <div className="w-full sm:w-1/3">
              <MediaImageSquare className="max-w-full h-auto" media={node.field_main_image} width={node.field_main_image.field_media_image.resourceIdObjMeta.width || 770} height={node.field_main_image.field_media_image.resourceIdObjMeta.height || 512} />
            </div>
            <div className="w-100 sm:w-2/3 p-4">
              <div className="card-body flex flex-col justify-between h-full">
                <div>
                  <h1 className="mb-3">{node.title}</h1>
                  <FormattedText text={node.body.processed} />
                </div>
                <div className="flex flex-col justify-end align-end">
                  <div className="flex justify-end pt-6">
                  <button
                    type="button"
                    className={classNames(
                      'card-link', 'text-black',
                      { 'opacity-50 cursor-not-allowed': !safeToToggle }
                    )}
                    onClick={safeToToggle ? () => toggleChatMode(!chatMode) : undefined}
                    disabled={!safeToToggle}
                  >
                    {t("start-chat")}
                  </button>
                  </div>
                  <div className="flex justify-end pt-6">
                    <a
                      type="button"
                      className="second-card-link"
                    >
                      {t("learn-more-online-collection")}
                      <LinkExternal className="ms-2 w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className={classNames(
          "pt-12 transition-all",
          {
            "visible": chatMode,
            "invisible": !chatMode,
          } 
        )}>
      </div>
      <div className={classNames(
        "pt-8", {
          "visible": chatMode,
          "invisible": !chatMode,
        } 
      )}>
        {isLongVersion ? <ChatPanelLong chatMode={chatMode} /> : <ChatPanel chatMode={chatMode} />}
      </div>
      <div
        className={classNames(
          "fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-black bg-opacity-50",
          { "hidden": !exitModalOpen, "block": exitModalOpen }
        )}        
        id="exampleModalCenter"
        tabIndex={-1}
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog">
        <div
          className={classNames(
            "pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]",
            { "opacity-0 translate-y-[-50px]": !exitModalOpen, "opacity-100 translate-y-0": exitModalOpen }
          )} 
        >         
            <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
            <div
              className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
              <h5
                className="text-xl font-medium leading-normal text-surface dark:text-white"
                id="exampleModalCenterTitle">
                  {t("exit-chat-short-question")}
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                onClick={() => handleExitModal(false)}
                aria-label="Close">
                <span className="[&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
              </button>
            </div>

            <div className="relative p-4">
              <p>
                {t("confirm-exit")}
              </p>
            </div>

            <div
              className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
              <button
                type="button"
                className="inline-block card-link text-black bg-neutral-100"
                onClick={() => handleExitModal(false)}>
                {t("cancel")}
              </button>
              <button
                type="button"
                className={classNames(
                  'card-link', 'text-white', 'bg-black', 'ms-1', 'inline-block',
                  { 'opacity-50 cursor-not-allowed': !safeToToggle }
                )}
                onClick={safeToToggle ? () => {toggleChatMode(!chatMode); handleExitModal(false); } : undefined}
                disabled={!safeToToggle}
              >
                {t("exit-chat")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
