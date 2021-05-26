import dotenv from "dotenv";
import path from "path";
import express from "express";
import webpack, { Configuration } from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

dotenv.config();
const { NODE_ENV, PORT } = process.env;

const bootstrap = async () => {
  const app = express();

  if (NODE_ENV === "development") {
    const { default: config } = await import(
      "./../client/webpack.config.babel.js"
    );
    config.entry.unshift("webpack-hot-middleware/client");
    const compiler = webpack(config as Configuration);
    const publicPath = config.output.publicPath;

    app.use(
      webpackDevMiddleware(compiler, {
        publicPath,
        writeToDisk: (filePath) => filePath.includes(".html"),
      })
    );

    app.use(webpackHotMiddleware(compiler));
  }

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

await bootstrap();
