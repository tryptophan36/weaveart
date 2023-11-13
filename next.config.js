/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["warp-contracts-plugin-signature"],
  output: "export",
  
};

module.exports = nextConfig;
