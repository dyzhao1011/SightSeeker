import express from "express";
import axios from "axios";
import ViteExpress from "vite-express";

const {
  createProxyMiddleware,
  responseInterceptor,
} = require("http-proxy-middleware");
const GOOGLE_ENDPOINT = "https://maps.googleapis.com/";

const app = express();

app.use(
  "/map",
  createProxyMiddleware({
    target: GOOGLE_ENDPOINT,
    changeOrigin: true,
    logger: console,
    pathRewrite: {
      [`^/map`]: "maps/api/place/textsearch/json",
    },
  })
);

app.use(
  "/photo",
  createProxyMiddleware({
    target: GOOGLE_ENDPOINT,
    changeOrigin: true,
    logger: console,
    pathRewrite: {
      [`^/photo`]: "maps/api/place/photo",
    },
  })
);

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () => {
  console.log("Server is listening on port 3000...");
});
