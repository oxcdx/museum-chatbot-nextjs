import classNames from "classnames"
import { DrupalMenuLinkContent, DrupalBlock } from "next-drupal"
import Link from "next/link"
import { useRouter } from "next/router"

interface MenuMainProps {
  items: DrupalMenuLinkContent[]
  blocks: {
    mainSiteSettings: DrupalBlock
  }
}

export function MenuMain({ items, blocks, ...props }: MenuMainProps) {
  const router = useRouter()
  const multiMode = blocks?.mainSiteSettings?.field_multi_object_mode || false

  return (
    <nav {...props}>
      <ul className="flex flex-col items-end justify-center w-full py-1 space-y-6">
        {items.map((item) => {
          const isActive =
            router.asPath === item.url ||
            `/${router.locale}${router.asPath === "/" ? "" : router.asPath}` ===
              item.url ||
            (item.url !== "/" ? router.asPath.indexOf(item.url) === 0 : false)

          return (
            <li key={item.id}>
              <Link href={item.url} passHref legacyBehavior={true}>
                <a
                  className={classNames(
                    "text-xl border-b-[3px] flex border-b-transparent transition-colors",
                    {
                      "border-b-primary": isActive,
                    }
                  )}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
