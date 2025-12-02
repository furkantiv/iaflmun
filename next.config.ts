import type { NextConfig } from "next";

// For custom domains, NEXT_PUBLIC_BASE_PATH should be empty or unset
// Only use basePath if explicitly set and not empty
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const useBasePath = repoBasePath && repoBasePath !== "";

const nextConfig: NextConfig = {
  // Only set basePath if explicitly provided (for GitHub Pages without custom domain)
  // For custom domains like iaflmun.com, leave this undefined
  basePath: useBasePath ? repoBasePath : undefined,
  assetPrefix: useBasePath ? repoBasePath : undefined,
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
