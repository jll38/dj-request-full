import { fileHandler } from "bun";

const PORT = 3000;

const serve = fileHandler("./build");

Bun.serve({
  fetch(req) {
    return serve(req);
  },
  port: PORT,
});

console.log(`React app being served on http://localhost:${PORT}`);
