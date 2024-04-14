import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";


import * as songController from "./songController.js";


const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

// app.get("/", (c) => {
// //   return c.html(eta.render("index.eta"));
// });

app.get("/", songController.listSongs);

app.post("/songs", songController.addSongAndListSongs);




// app.post("/songs", (c) => {
//   return c.html(eta.render("index.eta"));
// });



export default app;
