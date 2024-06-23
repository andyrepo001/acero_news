/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API_URL: "http://api.localaceronews.com/",
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
