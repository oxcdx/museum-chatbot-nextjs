import { useTranslation } from "next-i18next"
import Link from "next/link"

import { LeftArrowCircle } from "@styled-icons/boxicons-solid"

export interface BackButtonProps {
  items: {
    title: string
    url?: string
  }[]
}

export function BackButton({ items, ...props }: BackButtonProps) {
  const { t } = useTranslation()
  if (!items?.length) {
    return null
  }

  // items.unshift({
  //   title: t("home"),
  //   url: "/",
  // })

  return (
    <nav className="py-4 text-text" {...props}>
      <ol className="flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center leading-none">
            {item.url ? (
              <Link href={item.url} passHref legacyBehavior={true}>
                <a className="">
                  <span className="sr-only">{item.title}</span>
                  <LeftArrowCircle className="w-10 h-10" />
                </a>
              </Link>
            ) : (
              item.title
            )}
            
            
            {index !== items.length - 1 && (
              <svg
                className="w-3 h-3 mx-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
