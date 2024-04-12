const handleRequest = (request) => {
    console.log(`Request method: ${request.method}`);
    console.log(`Request url: ${request.url}`);
    return new Response("Hello world!");
  };
  
  Deno.serve(handleRequest);