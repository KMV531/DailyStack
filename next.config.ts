/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: ["./messages/en.json", "./messages/fr.json"],
  },
});

const nextConfig: NextConfig = {
  // config options here
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default withNextIntl(nextConfig);

/*
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // config options here
  reactCompiler: true,
};

export default nextConfig;
*/
