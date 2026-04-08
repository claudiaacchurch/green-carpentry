import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  devIndicators: false,
};

export default nextConfig;
