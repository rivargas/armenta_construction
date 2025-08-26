import type { NextConfig } from "next";

/**
 * For GitHub Pages (project site), set BASE_PATH="/<repo-name>" at build time.
 * Example: BASE_PATH="/armenta_construction"
 * Local dev stays at "/" because BASE_PATH is unset.
 */
const base = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Produce a fully static site for GitHub Pages
  output: "export",

  // Disable Next's image optimizer (no server on Pages)
  images: { unoptimized: true },

  // Ensure assets and routes work when hosted under a subpath
  basePath: base || undefined,
  assetPrefix: base || undefined,

  // Safer for Pages’ static hosting (ensures directory-style URLs)
  trailingSlash: true,

  experimental: { typedRoutes: true }
};

export default nextConfig;
