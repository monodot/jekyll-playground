module.exports = {
  // This is a modification from Tailwind's default config; it uses
  // an array instead of an object.
  // See: https://github.com/mhanberg/jekyll-postcss/issues/21
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-import'),
  ],
};
