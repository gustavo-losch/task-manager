# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

**Requirements:**

 1. Node.js
 2. Vite (for React)
 3. Tailwind CSS
 4. Lucide Icons



**Instructions for starting**

- Install [**Vite**](https://vite.dev/guide/) for _React_ with variant _JavaScript_ on the project directory.
 - Start the **Vite React** server
```shell
npm create vite@5.5.2 .
npm install
npm run dev
```

- Install [**TailwindCSS**](https://tailwindcss.com/docs/installation/using-vite) for Vite
```shell
npm install tailwindcss @tailwindcss/vite
```
Add this code `to vite.config.js`
```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(), react()
  ],
})
```
Add this code to `index.css`
```css
@import "tailwindcss";
```
And reboot the server:
```shell
npm run dev
```

- Install [**Lucide**](https://lucide.dev/guide/packages/lucide-react) for React
```shell
npm install lucide-react
```

---
1:03:55