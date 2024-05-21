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
import { MediaImageSquare } from "components/media--image-square"
import { BackButton } from "components/back-button"
import { FormattedText } from "components/formatted-text"

import { LinkExternal } from "@styled-icons/boxicons-regular"
import { log } from "console"

// extend nodeobjectprops to include blocks
export interface NodeObjectProps { 
  node: DrupalNode
  blocks: {
    multiMode: DrupalBlock
  }
  chatMode: boolean
  toggleChatMode: (mode: boolean) => void
} 

export function NodeObject({ node, blocks, chatMode, toggleChatMode, ...props }: NodeObjectProps) {

  console.log(node)
  const { t } = useTranslation()

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
        {blocks?.multiMode?.field_multi_object_mode ? ( 
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
                    <a
                      type="button"
                      className="card-link"
                      onClick={() => toggleChatMode(!chatMode)}>
                      {t("start-chat")}
                    </a>
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
        <a
          type="button"
          className="card-link"
          onClick={() => toggleChatMode(!chatMode)}>
          {t("start-chat")}
        </a>
      </div>
      <div className={classNames(
        "pt-8", {
          "visible": chatMode,
          "invisible": !chatMode,
        } 
      )}>
        <ChatPanel chatMode={chatMode} />
      </div>
    </div>
  )
}
