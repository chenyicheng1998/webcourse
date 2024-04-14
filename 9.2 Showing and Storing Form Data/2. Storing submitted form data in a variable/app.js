import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

let data = {};

app.get("/", (c) => c.html(eta.render("index.eta", data)));
app.post("/addresses", async (c) => {
  const body = await c.req.parseBody();
  data = body;
  return c.html(eta.render("index.eta", data));
});

Deno.serve(app.fetch);




/* RESULT:

curl -X POST -d name="My Name" -d address="My Address" localhost:8000/addresses
<!DOCTYPE html>
<html>
  <head>
    <title>Hello forms!</title>
  </head>
  <body>
    <form method="POST" action="/addresses">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" /><br/>
      <label for="address">Address:</label>
      <input type="text" id="address" name="address" /><br/>
      <input type="submit" value="Submit form" />
      </form>
      <p>Submitted name: My Name, address My Address</p>
  </body>
</html>%



curl localhost:8000
<!DOCTYPE html>
<html>
  <head>
    <title>Hello forms!</title>
  </head>
  <body>
    <form method="POST" action="/addresses">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" /><br/>
      <label for="address">Address:</label>
      <input type="text" id="address" name="address" /><br/>
      <input type="submit" value="Submit form" />
    </form>
    <p>Submitted name: My Name, address My Address</p>      
  </body>
</html>%


*/