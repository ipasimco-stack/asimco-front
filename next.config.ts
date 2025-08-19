import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["asimco.ir", 'kavoshpardazesh.ir', "raymandnet.ir", "samannetware.ir", "hadishpishro.ir"],
  },
};

export default nextConfig;
