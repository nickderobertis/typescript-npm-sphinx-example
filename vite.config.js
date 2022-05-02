const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  root: path.resolve(__dirname, './dev-src'),
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'typescript-npm-sphinx-example',
      fileName: (format) => `typescript-npm-sphinx-example.${format}.js`
    },
    outDir: path.resolve(__dirname, './dist'),
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {}
      }
    }
  }
})