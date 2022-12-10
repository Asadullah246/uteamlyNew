/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // moduleNameMapper: {
  //   // '\\.(css|less)$': '<rootDir>/tests/jest/__mocks__/styleMock.js',
  //   '@next/font/(.*)': require.resolve('next/dist/build/jest/__mocks__/nextFontMock.js'),   
  // },
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,  
  }
}

module.exports = nextConfig   
