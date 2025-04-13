export const mfConfig = {
  name: "mdfdapp2",
  filename: "remoteEntry.js",
  remotes: {
    mdfdapp1: "mdfdapp1@http://localhost:5001/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
