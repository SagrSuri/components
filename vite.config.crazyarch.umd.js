import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/CrazyArch/index.jsx'),
      formats: ['umd'],
      fileName: (format) => `CrazyArch/index.${format}.js`,
      name: 'CrazyArch'  // Ensure this line is present
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
