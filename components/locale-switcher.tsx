import Link from "next/link"
import { useRouter } from "next/router"
import classNames from "classnames"

import config from "site.config"
import { pathMapping } from "../utils/path-mapping"

export function LocaleSwitcher({ ...props }) {
  const { locales, asPath, locale: currentLocale } = useRouter()  

  if (!locales || locales.length < 2) {
    return null
  }

  const getLocalizedPath = (path, targetLocale) => {
    for (const [key, value] of Object.entries(pathMapping)) {
      if (value[currentLocale] === path) {
        return value[targetLocale];
      }
    }
    return path; // Fallback to the same path if no mapping is found
  };

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
            <Link 
              href={getLocalizedPath(asPath, locale)}
              locale={locale} 
              passHref 
              legacyBehavior={true}
            >
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
