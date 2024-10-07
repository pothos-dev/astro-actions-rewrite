import { defineAction } from "astro:actions"
import { z } from "astro:schema"

const sum = defineAction({
  accept: "form",
  input: z.object({
    a: z.number(),
    b: z.number(),
  }),
  async handler({ a, b }) {
    return a + b
  },
})

export const server = {
  sum,
}
