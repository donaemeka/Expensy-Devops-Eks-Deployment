/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://backend:8706/api/:path*",
      },
    ];
  },
};

export default nextConfig;
