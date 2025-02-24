import simpleImportSort from "eslint-plugin-simple-import-sort";

const eslintConfig = {
  extends: [
    "next/core-web-vitals",  // Configuração para o Next.js
    "next/typescript",       // Configuração para o Next.js com TypeScript
  ],
  plugins: ["simple-import-sort"], // Adiciona o plugin `simple-import-sort`
  rules: {
    "simple-import-sort/imports": "error",  // Aplica a ordenação de imports
    "simple-import-sort/exports": "error",  // Aplica a ordenação de exports (opcional)
  },
};

export default eslintConfig;
