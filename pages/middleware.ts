// import { NextResponse } from "next/server";

// // you can do this manually or use a library like accept-language-parser
// import parser from "accept-language-parser";

// const PUBLIC_FILE = /\.(.*)$/;

// export async function middleware(req) {
//   if (
//     req.nextUrl.pathname.startsWith("/_next") ||
//     req.nextUrl.pathname.includes("/api/") ||
//     PUBLIC_FILE.test(req.nextUrl.pathname)
//   ) {
//     return;
//   }

//   const acceptLanguageHeader = req.headers.get("accept-language");
//   const locale = parser.pick(["de", "en"], acceptLanguageHeader);

//   if (req.nextUrl.locale !== locale) {
//     return NextResponse.redirect(
//       new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
//     );
//   }
// }