/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '/vpffltldk_hq', // GANTI dengan nama repository GitHub kamu
  reactStrictMode: true,
  output: 'export', // penting untuk menjadikan static site
});
