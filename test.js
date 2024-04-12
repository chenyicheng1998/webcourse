const handleRequest = (request) => {
    let message = "I am unsure what I should do here!";
    if (request.method === "GET") {
      message = "Retrieving information, are you?";
    } else if (request.method === "POST") {
      message = "Posting information, are you?";
    } else if (request.method === "Alohomora") {
      message = "Magicking, are you?";
    }
  
    return new Response(message);
  };
  
  Deno.serve(handleRequest);