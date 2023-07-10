import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: process.env.SHOPIFY_STOREFRONT_DOMAIN_NAME,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN,
})

export default client
