/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
        }
      ]
    });
    return config;
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
};

export default nextConfig;
