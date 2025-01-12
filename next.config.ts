import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // Add any other Next.js config options here
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
