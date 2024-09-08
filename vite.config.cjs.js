import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: {
        Cube: path.resolve(__dirname, 'src/components/Cube/index.jsx'),
        Hexagona: path.resolve(__dirname, 'src/components/Hexagona/index.jsx'),
        CrazyArch: path.resolve(__dirname, 'src/components/CrazyArch/index.jsx'),
        Rippling: path.resolve(__dirname, 'src/components/Rippling/index.jsx'),
      },
      formats: ['cjs'],
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
