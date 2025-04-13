export const mfConfig = {
  name: "cart",
  filename: "remoteEntry.js",
  remotes: {
    mdfdapp1: "mdfdapp1@http://localhost:5001/remoteEntry.js",
    mdfdapp2: "mdfdapp2@http://localhost:5002/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
