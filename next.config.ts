import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default withBundleAnalyzer(nextConfig);
