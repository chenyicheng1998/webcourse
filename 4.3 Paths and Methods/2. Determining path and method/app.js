import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const app = new Hono();

app.get("*", (c) => c.text(`${c.req.method} ${c.req.path}`));

Deno.serve(app.fetch);