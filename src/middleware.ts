import { defineMiddleware } from "astro:middleware"

export const onRequest = defineMiddleware(async (context, next) => {
  console.log("Incoming request", context.request.method, context.url.href)
  const { pathname, search } = context.url
  if (pathname == "/action") {
    return next(`/with-action${search}`)
  }
  if (pathname == "/post") {
    return next(`/with-post${search}`)
  }
  return next()
})
