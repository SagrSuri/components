import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: {
        demo1: path.resolve(__dirname, 'src/components/Demo1/index.js'),
        demo2: path.resolve(__dirname, 'src/components/Demo2/index.js'),
        demo3: path.resolve(__dirname, 'src/components/Demo3/index.js')
      },
      name: 'sagarsuri',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format, entryName) => `${entryName}/index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [react()]
});
