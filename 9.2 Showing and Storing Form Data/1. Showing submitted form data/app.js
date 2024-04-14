import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.7.4/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

app.get("/", (c) => c.html(eta.render("index.eta")));
app.post("/addresses", async (c) => {
  const body = await c.req.parseBody();
  return c.html(eta.render("index.eta", body));
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



OR
It is also possible to enter the data that is sent to the server as a single string, 
as outlined in the next example. The + symbol indicates a space, 
while & separates submitted form elements from each other.


curl -X POST -d "name=My+Another+Name&address=My+Another+Address" localhost:8000/addresses
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
      <p>Submitted name: My Another Name, address My Another Address</p>
  </body>
</html>%

*/