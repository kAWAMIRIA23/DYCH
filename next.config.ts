import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // 75 is the default; 90 is used for the framed photos, where fine detail
    // such as the text in a phone notification has to stay legible.
    qualities: [75, 90],
  },
};

export default nextConfig;
