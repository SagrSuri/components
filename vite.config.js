import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  const buildOptions = {
    lib: {
      entry: {
        Cube: path.resolve(__dirname, 'src/components/Cube/index.jsx'),
        Hexagona: path.resolve(__dirname, 'src/components/Hexagona/index.jsx'),
        CrazyArch: path.resolve(__dirname, 'src/components/CrazyArch/index.jsx'),
        Rippling: path.resolve(__dirname, 'src/components/Rippling/index.jsx'),
      },
      name: 'sagarsuri',
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
  };

  // Config for ES and CJS formats
  const buildEsAndCjs = {
    ...buildOptions,
    build: {
      ...buildOptions.lib,
      formats: ['es', 'cjs'],
    }
  };

  // Config for UMD format
  const buildUmd = {
    ...buildOptions,
    build: {
      ...buildOptions.lib,
      formats: ['umd'],
    }
  };

  if (isProduction) {
    return [buildEsAndCjs, buildUmd];
  } else {
    return {
      build: {
        ...buildOptions.lib,
        formats: ['es', 'cjs'],
      },
      plugins: [react()]
    };
  }
});
