/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'standalone',
  basePath: isProd ? '/obsenv-management' : undefined,
}

export default nextConfig
