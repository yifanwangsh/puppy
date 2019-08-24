const path = require("path");
const CracoAntDesignPlugin = require("craco-antd");

// Don't open the browser during developmet
process.env.BROWSER = "none";

module.exports = {
  reactScriptsPath: path.join(
    __dirname,
    "node_modules/@react-workspaces/react-scripts"
  ),
  plugins: [
    {
      plugin: CracoAntDesignPlugin
    }
  ],
  // webpack: {
  //   alias: {
  //     "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./icons.js") // Remove once antd-icons fix their imports
  //   }
  // }
};
