/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API_URL: "http://api.localaceronews.com/",
    SERVER_API_KEY: "MzgzXzE3MTczMzE4MzU2NDdfMzQw",
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "news.anvildynamics.xyz",
      // },
      {
        hostname: "localanews.com",
      },
    ],
  },
};

module.exports = nextConfig;

// newsaccess.anvildynamics.xyz/
