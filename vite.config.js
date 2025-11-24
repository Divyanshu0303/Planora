import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // agar React use ho raha hai

export default defineConfig({
  base: '/Planora/', // GitHub Pages ke liye required
  plugins: [react()],
});
