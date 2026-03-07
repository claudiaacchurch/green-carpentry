import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/green-carpentry",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/green-carpentry",
  },
  images: { unoptimized: true },
};

export default nextConfig;
