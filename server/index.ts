import dotenv from "dotenv";
import path from "path";
import express from "express";
import { createDevServer } from "./dev-server";

dotenv.config();
const { NODE_ENV, PORT } = process.env;

const bootstrap = async () => {
  const app = express();

  if (NODE_ENV === "development") {
    await createDevServer(app);
  }

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

await bootstrap();
