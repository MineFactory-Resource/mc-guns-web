/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: { test: /\.md$/, use: 'raw-loader' },
};

module.exports = nextConfig;
