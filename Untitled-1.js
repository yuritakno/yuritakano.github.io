npx create-next-app@latest ecommerce-frontend --typescript

cd ecommerce-frontend

npm install tailwindcss postcss autoprefixer

npx tailwindcss init -p

// Configurar Tailwind no tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// Importar Tailwind no globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// Rodar o projeto
npm run dev
