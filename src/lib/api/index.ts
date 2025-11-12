import ky from "ky"

import { env } from "../../env"

const BASE_URL = env.VITE_APP_API_URL

export const api = ky.create({
  prefixUrl: BASE_URL,
  headers: {
    Authorization: `Bearer ${env.VITE_APP_API_CREDENTIAL}`,
    "Content-Type": "application/json;charset=utf-8",
  },
})
