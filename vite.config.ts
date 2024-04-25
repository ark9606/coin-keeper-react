import { defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import 'dotenv/config'

// const APP_BASE_URL = process.env.APP_BASE_URL || '';
// console.log('APP_BASE_URL', APP_BASE_URL);

const cherryPickedKeys = [
  "APP_BASE_URL",
  "NODE_ENV",
];

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv: Record<string, string> = {};
  cherryPickedKeys.forEach(key => processEnv[key] = env[key]);
  console.log('processEnv', processEnv);

  return {
    // base: APP_BASE_URL,
    base: '',
    plugins: [react()],
    define: {
      'process.env': processEnv,
    //   'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
    //   'process.env.APP_BASE_URL': JSON.stringify(env.APP_BASE_URL)
    },
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass,
        },
      },
    },
  }
})
