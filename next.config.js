/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'Portfolio'; 

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? `/${Portfolio}` : '',
  assetPrefix: isGitHubPages ? `/${Portfolio}/` : '',
  trailingSlash: true,
};

module.exports = nextConfig;
