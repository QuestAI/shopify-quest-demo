/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SHOPIFY_STOREFRONT_API_TOKEN: 'your-secret-token',
    SHOPIFY_STOREFRONT_DOMAIN_NAME: 'your-store.shopify.com',
  },
}

module.exports = {
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/i,
      issuer: /.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
