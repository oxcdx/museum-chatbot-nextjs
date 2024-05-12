import classNames from "classnames"
import { DrupalMenuLinkContent, DrupalBlock } from "next-drupal"
import Link from "next/link"
import { useRouter } from "next/router"

import { LinkExternal } from "@styled-icons/boxicons-regular"

interface MenuMainProps {
  items: DrupalMenuLinkContent[]
  blocks: {
    multiMode: DrupalBlock
  }
  mainObject?: string
  additionalContent?: any
}

export function MenuMain({ items, blocks, mainObject, additionalContent, ...props }: MenuMainProps) {
  const router = useRouter()
  const multiMode = blocks?.multiMode?.field_multi_object_mode || false
  const isActive = router.asPath === mainObject

  console.log(additionalContent);
  

  return (
    <nav {...props}>
      <ul className="flex flex-col items-end justify-center w-full py-1 space-y-6">
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
                All Objects
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
            Project Info
          </a>
        </li>
        <li>
          <a href="#"
            className={classNames(
              "text-xl border-b-[3px] flex border-b-transparent transition-colors",
              {
                "border-b-primary": isActive,
              }
            )}
          >
            MK&amp;G Online Collection <LinkExternal className="ms-2 w-6 h-6" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
