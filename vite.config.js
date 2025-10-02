import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: '/React-Senac/' //Exclusivo para o gitHub Pages -> quando for usar ele localmente tem que comentar essa linha
})
