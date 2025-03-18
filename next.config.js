/** @ts-ignore */
const nextConfig = {
  eslint:{
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bignlean.shellcode.cloud",
      },
    ],
  },
};

module.exports = nextConfig;
