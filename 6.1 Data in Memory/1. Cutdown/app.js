import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

let count = 3;

app.get("/", (c) => {
  let message = "Kaboom!";
  if (count > 0) {
    message = `${count}`;
    count--;
  }

  return c.text(message);
});

export default app;