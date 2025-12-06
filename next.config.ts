import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/kadir-oguz-elektrik', // GitHub repository adınız buraya gelmeli
  images: {
    unoptimized: true, // GitHub Pages statik export için gereklidir
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
