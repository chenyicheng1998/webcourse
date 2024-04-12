const handleRequest = (request) => {
    const url = new URL(request.url);
  
    if (url.pathname === "/" && request.method === "GET") {
      return new Response("Hi there!");
    } else if (url.pathname === "/congrats" && request.method === "GET") {
      const params = url.searchParams;
      const heroOfTheDay = params.get("heroOfTheDay");
      return new Response(`Congrats, ${heroOfTheDay}!`);
    } else if (url.pathname === "/lol" && request.method === "DIDNOT") {
      return new Response("What kind of tree fits in your hand? A palm tree.");
    } else {
      return new Response("Not here.");
    }
  };
  
  Deno.serve(handleRequest);