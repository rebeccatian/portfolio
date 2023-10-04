/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/source'
      },
      {
        test: /\.node/,
        use: 'raw-loader'
      })

      return config
  },
}
