const path = require("path");

module.exports = {
  mode: "production",
  entry: "./toDo.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
};

