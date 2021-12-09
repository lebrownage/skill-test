module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/v3/:path*',
          destination: 'https://haveibeenpwned.com/:path*',
        },
      ]
    },
}