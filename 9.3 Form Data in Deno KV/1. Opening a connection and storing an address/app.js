import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";
import * as addressService from "./addressService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

let data = {};

app.get("/", (c) => c.html(eta.render("index.eta", data)));
app.post("/addresses", async (c) => {
  const body = await c.req.parseBody();
  await addressService.addAddress(body);
  data = body;
  return c.html(eta.render("index.eta", data));
});

Deno.serve(app.fetch);