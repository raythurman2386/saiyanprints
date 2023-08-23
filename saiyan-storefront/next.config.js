const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  experimental: {
    serverActions: true,
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "saiyanprint-server.s3.amazonaws.com",
      "localhost",
      "medusa-server-testing.s3.amazonaws.com",
    ],
  },
})

// console.log("next.config.js", JSON.stringify(module.exports, null, 2))
