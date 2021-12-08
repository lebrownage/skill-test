module.exports = {
  async rewrites() {
      return [
        {
          source: '/v3/:path*',
          destination: 'https://haveibeenpwned.com/api/v3/:path*',
        },
      ]
    },
}