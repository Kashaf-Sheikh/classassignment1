import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
  remotePatterns: [
{
  protocol: 'http',
  hostname: 'image.jpg'
}

  ]
}
};

export default nextConfig;
