import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Inline the small stylesheet into the HTML so it is not a render-blocking request.
  experimental: { inlineCss: true },
  images: {
    formats: ["image/avif", "image/webp"],
    // 55 and 70 are used for full-bleed hero photos that sit under a dark overlay.
    qualities: [55, 70, 75],
  },
};

export default nextConfig;
