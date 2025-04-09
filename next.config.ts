import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "upbeat-stoat-959.convex.cloud", protocol: "https" },
      { hostname: "wary-anaconda-29.convex.cloud", protocol: "https" },
      { hostname: "incredible-manatee-241.convex.cloud", protocol: "https" },
      { hostname: "rare-shepherd-107.convex.cloud", protocol: "https" }, // تمت إضافته هنا ✅
    ],
  },
};

export default nextConfig;
