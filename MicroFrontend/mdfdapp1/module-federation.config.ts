export const mfConfig = {
  name: "mdfdapp1",
  filename: "remoteEntry.js",
  exposes: {
    "./Header": "./src/Header.tsx",
    "./Footer": "./src/Footer.tsx",
    "./products": "./src/products.ts"
  },
  shared: ["react", "react-dom"],
};
