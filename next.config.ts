import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets a production build run against its own output directory while
  // `next dev` is still serving from .next — set NEXT_DIST_DIR to opt in.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
};

export default nextConfig;
