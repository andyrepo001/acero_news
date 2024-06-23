/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API_URL: "https://newsaccess.anvildynamics.xyz/",
    SERVER_API_KEY: "MzgzXzE3MTczMzE4MzU2NDdfMzQw",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localanews.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
