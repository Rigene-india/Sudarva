/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site drives its own DOM via the original script.js; double-invoking
  // effects in strict mode would double-boot it, so we disable it.
  reactStrictMode: false,
};

export default nextConfig;
