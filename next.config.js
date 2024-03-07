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
  workboxOptions: {
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
