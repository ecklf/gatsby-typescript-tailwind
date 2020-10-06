const tailwindcss = require(`tailwindcss`)

module.exports = {
  plugins: [
    tailwindcss(`./tailwind.config.js`),
    // If you want to use autoprefixer, use a pre v8 version or wait for the gatsby plugin to be updated for v8 plugins
    // require(`autoprefixer`),
    require(`cssnano`)({
      preset: `default`,
    }),
  ],
}
