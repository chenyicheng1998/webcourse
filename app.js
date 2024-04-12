const handleRequest = () => {
    return new Response("Hello world!");
  };
  
  Deno.serve(handleRequest);