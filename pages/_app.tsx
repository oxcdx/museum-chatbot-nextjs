import * as React from "react"
import Router from "next/router"
import { syncDrupalPreviewRoutes } from "next-drupal";
import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query"
import { appWithTranslation } from "next-i18next"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

import "styles/globals.css"
import "styles/chat.css"

import localFont from 'next/font/local'

// const scto = localFont({
//   src: [
//     {
//       path: '../public/fonts/SctoGroteskARegular.otf',
//       weight: '400'
//     }
//   ],
//   variable: '--font-scto'
// })

const scto = localFont({ src: '../public/fonts/SctoGroteskARegular.otf', variable: '--font-scto'})

NProgress.configure({ showSpinner: false })

Router.events.on("routeChangeStart", function (path) {
  syncDrupalPreviewRoutes(path)
  NProgress.start()
})
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

function App({ Component, pageProps: { session, ...pageProps } }) {  
  const queryClientRef = React.useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <div className={` ${scto.variable} font-sans`}>
            <Component {...pageProps} />
          </div>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default appWithTranslation(App)
