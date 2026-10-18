import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    localPatterns: [
      {
        pathname: "/images/**",
      },
    ],
  },
  // The bare domain served a full duplicate of the site; send it to www.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "urbanmds.com" }],
        destination: "https://www.urbanmds.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
