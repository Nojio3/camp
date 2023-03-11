/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Hot Reload
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1200,
      aggregateTimeout: 500,
      ignored: ["node_modules"],
    };
    return config;
  },
};

module.exports = nextConfig;
