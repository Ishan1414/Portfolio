/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = ''; 

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? `` : '',
  assetPrefix: isGitHubPages ? `` : '',
  trailingSlash: true,
};

module.exports = nextConfig;
