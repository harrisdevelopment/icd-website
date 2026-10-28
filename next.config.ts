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
  async redirects() {
    return [
      // Canonical host is the apex. Vercel handles www -> apex at the domain
      // level too; this keeps it explicit and safe if the domain moves.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.inncd.com" }],
        destination: "https://inncd.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
