import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { eslint } from "rollup-plugin-eslint";

export default {
  input: './src/main.js',
  output: {
    file: './public/js/main.min.js',
    format: 'iife',
    name: 'bundle'
  },
  plugins: [
    resolve(),
    eslint({
      eslint: [
        'src/styles/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
}