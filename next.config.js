const{withFrameworkConfig} = require("./framework/common/config")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  framework: {
    name: "shopify_local"
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US"
  }
}

module.exports = withFrameworkConfig(nextConfig)

console.log("confige", JSON.stringify(module.exports, null, 2))