import { Application, Context } from "./dept.ts";
import { logger } from "./logger.middleware.ts";

const app = new Application();
// Logger
app.use(logger);

// Timing
app.use(async (ctx: any, next: any) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

//hello
app.use((ctx) => {
  ctx.response.body = "Hello world!";
});

console.log("start listen 127.0.0.1:8000, http://127.0.0.1:8000");
await app.listen("127.0.0.1:8000");
