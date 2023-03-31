/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    SERVER_ADDRESS : "http://localhost:8080"
  }
}

module.exports = nextConfig
