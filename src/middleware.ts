import { defineMiddleware } from "astro:middleware"

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, searchParams } = context.url
  if (pathname == "/action") {
    return next(`/with-action?${searchParams}`)
  }
  if (pathname == "/post") {
    return next(`/with-post?${searchParams}`)
  }
  return next()
})
