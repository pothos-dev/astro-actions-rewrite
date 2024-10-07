import { defineMiddleware } from "astro:middleware"

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, searchParams } = context.url
  if (pathname == "/") {
    // return context.rewrite(`/hidden?${searchParams}`)
    return next(`/hidden?${searchParams}`)
  }
  return next()
})
