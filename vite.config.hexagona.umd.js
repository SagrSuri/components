import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/Hexagona/index.jsx'),
      formats: ['umd'],
      fileName: (format) => `Hexagona/index.${format}.js`,
      name: 'Hexagona'  // Ensure this line is present
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
