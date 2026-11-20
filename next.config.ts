import type { NextConfig } from "next";

// "export" gera um site estático (pasta "out"): hospedagem grátis e rápida.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
