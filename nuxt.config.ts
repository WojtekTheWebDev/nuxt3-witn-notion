import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  css: ["@/assets/css/main.css"],

  runtimeConfig: {
    apiSecret: process.env.API_SECRET,
    rootPageId: "364e4900a19b426982022b22d2515791",
  },
});
