Bun.serve({
  fetch(req) {
    debugger
    console.log(req.url);
    return new Response(`Hello World`);
  },
});
