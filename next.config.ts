import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/green-carpentry",
  images: { unoptimized: true },
};

export default nextConfig;
