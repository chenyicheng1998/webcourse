import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

const acceptedOperations = ["sum", "difference"];

app.get("/", (c) => {
  if (
    !c.req.query("number1") || !c.req.query("number2") ||
    !acceptedOperations.includes(c.req.query("operation"))
  ) {
    return c.text("Invalid parameters.");
  }

  const operation = c.req.query("operation");
  const number1 = Number(c.req.query("number1"));
  const number2 = Number(c.req.query("number2"));

  if (operation === "sum") {
    return c.text(`${number1 + number2}`);
  } else {
    return c.text(`${number1 - number2}`);
  }
});

export default app;