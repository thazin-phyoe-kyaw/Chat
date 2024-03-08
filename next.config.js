// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   images: {
//     domains: ["uploadthing.com", "utfs.io"],
//   },
//   webpack: (
//     config,
//     { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
//   ) => {
//     config.module.rules.push({
//       test: /\.mjs$/,
//       include: /node_modules/,
//       type: "javascript/auto",
//     });
//     return config;
//   },
// };

// module.exports = nextConfig;
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  // workboxOptions: {
  //   disableDevLogs: true,

  // },
  runtimeCaching: [
    {
      urlPattern: /^https?.*/, // Change the regex to match the routes you want
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "http-cache",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
      },
    },
  ],
  workboxOptions: {
    maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // Set limit to 10 MB

    disableDevLogs: true,
  },
  // ... other options you like
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploadthing.com", "utfs.io"],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    return config;
  },
};

module.exports = withPWA(nextConfig);
