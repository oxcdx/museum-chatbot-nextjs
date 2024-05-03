import { DrupalNode } from "next-drupal"
import { useTranslation } from "next-i18next"
import Link from "next/link"

import { MediaImage } from "components/media--image"
import { log } from "console"

interface NodeObjectCardProps {
  node: DrupalNode
}

export function NodeObjectCard({ node, ...props }: NodeObjectCardProps) { 
  const { t } = useTranslation()

  return (
    <article
      className="relative flex w-96 flex-col bg-transparent bg-clip-border text-gray-700 "
      {...props}
    >
      <div className="relative mx-0 mt-0 h-96 overflow-hidden rounded-2xl bg-clip-border text-gray-700 shadow-lg">
        <MediaImage media={node.field_main_image} width={335} height={335} objectFit={"cover"} />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="flex-1 font-serif text-[22px] text-white">{node.title}</h2>
        </div>
        {/* <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id
          ultrices tincidunt, nunc nisl tincidunt urna, id aliquam mauris nunc id
        </p> */}
      </div>
      <div className="p-6 pt-0">
        <Link href={node.path.alias} passHref legacyBehavior={true}>
          <a className="stretched-link flex justify-center items-center bg-secondary text-white w-full rounded-lg py-3 px-6 text-center align-middle font-sans font-bold uppercase">
            {t("start-chat")}
            <svg
              className="w-5 h-5 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </Link>
      </div>
    </article>
  )
}
