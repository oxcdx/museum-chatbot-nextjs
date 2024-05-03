import Link from "next/link"
import { useRouter } from "next/router"
import classNames from "classnames"

import config from "site.config"

export function LocaleSwitcher({ ...props }) {
  const { locales, asPath, locale: currentLocale } = useRouter()

  console.log("locale", currentLocale);
  

  if (!locales || locales.length < 2) {
    return null
  }

  return (
    <nav {...props}>
      <ul className="flex space-x-4">
        {locales.map((locale) => (
          <li 
            key={locale}
            className={classNames(
              locale === currentLocale ? "border-b" : ""
            )}
          >
            <Link href={asPath} locale={locale} passHref legacyBehavior={true}>
              <a
                data-cy={`local-switcher-${locale}`}
                className={classNames(
                  locale === currentLocale ? "font-semibold" : "font-normal"
                )}
              >
                {config.locales[locale]}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
