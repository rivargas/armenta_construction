import type { NextConfig } from "next";

const base = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: base || undefined,
  assetPrefix: base || undefined,
  trailingSlash: true,

  // ⬇️ moved out of experimental for Next 15
  typedRoutes: true,
};

export default nextConfig;
