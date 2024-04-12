const handleRequest = (request) => {
  const url = new URL(request.url);
  const params = url.searchParams;

  let outcome = null;

  if (
    params.has("operation") && params.has("number1") && params.has("number2")
  ) {
    const operation = params.get("operation");
    const number1 = Number(params.get("number1"));
    const number2 = Number(params.get("number2"));

    if (operation === "sum") {
      outcome = number1 + number2;
    } else if (operation === "product") {
      outcome = number1 * number2;
    }
  }

  if (outcome) {
    return new Response(`${outcome}`);
  } else {
    return new Response("Invalid parameters.");
  }
};

Deno.serve(handleRequest);