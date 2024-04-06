/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  basePath: "",
  reactStrictMode: true,
  images: { unoptimized: true },
});
