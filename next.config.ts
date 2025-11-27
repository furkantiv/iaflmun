import type { NextConfig } from "next";

const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isProd = process.env.NODE_ENV === "production" && !!repoBasePath;

const nextConfig: NextConfig = {
  basePath: isProd ? repoBasePath : "",
  assetPrefix: isProd ? repoBasePath : "",
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
