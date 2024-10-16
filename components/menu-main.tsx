import classNames from "classnames"
import { DrupalMenuLinkContent, DrupalBlock } from "next-drupal"
import Link from "next/link"
import { useRouter } from "next/router"

import { LinkExternal } from "@styled-icons/boxicons-regular"

interface MenuMainProps {
  items: DrupalMenuLinkContent[]
  blocks: {
    mainSiteSettings: DrupalBlock
    disclaimer: DrupalBlock
  }
  mainObject?: string
  additionalContent?: any
}

export function MenuMain({ items, blocks, mainObject, additionalContent, ...props }: MenuMainProps) {
  const router = useRouter()
  const multiMode = blocks?.mainSiteSettings?.field_multi_object_mode || false
  const isActive = router.asPath === mainObject  

  return (
    <nav {...props}>
      <ul className="flex flex-col items-end justify-center w-full py-1 pb-10 space-y-6">
        {/* {multiMode ? additionalContent?.featuredObjects.map(
          (object) => object.path.alias === router.asPath ? (
            <li key={object.id}>
              <Link href={object.path.alias} passHref legacyBehavior={true}>
                <a
                  className={classNames(
                    "text-xl border-b-[3px] flex border-b-transparent transition-colors",
                    {
                      "border-b-primary": isActive,
                    }
                  )}
                >
                  Restart {object.title} Chat [reset arrow]
                </a>
              </Link>
            </li>
          ) : null
        ) : null} */}
        {multiMode ? (
          <li>
            <Link href={"/"} passHref legacyBehavior={true}>
              <a
                className={classNames(
                  "text-xl border-b-[3px] flex border-b-transparent transition-colors",
                  {
                    "border-b-primary": isActive,
                  }
                )}
              >
                Home
              </a>
            </Link>
          </li>
        ) : null}
        <li>
          <a href="#"
            className={classNames(
              "text-xl border-b-[3px] flex border-b-transparent transition-colors",
              {
                "border-b-primary": isActive,
              }
            )}
          >
            About
          </a>
        </li>
        <li>
          <a href="https://www.mkg-hamburg.de/"
            target="_blank"
            className={classNames(
              "text-xl border-b-[3px] flex border-b-transparent transition-colors",
              {
                "border-b-primary": isActive,
              }
            )}
          >
            MK&amp;G <LinkExternal className="ms-2 w-6 h-6" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
