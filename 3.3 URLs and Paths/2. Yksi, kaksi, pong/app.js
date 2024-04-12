const handleRequest = (request) => {
    const url = new URL(request.url);
    let message;
    if (url.pathname === "/one") {
      message = "yksi";
    } else if (url.pathname === "/two") {
      message = "kaksi";
    } else {
      message = "pong";
    }
  
    return new Response(message);
  };
  
  Deno.serve(handleRequest);