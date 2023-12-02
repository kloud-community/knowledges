import { route } from "./handlers/routes";

const server = Bun.serve({
  port: 8080,
  fetch: async (req): Promise<Response> => {
    console.info(`${req.method} ${req.url} | ${req.headers.get("User-Agent")}`);
    for(const [[method, path], fn] of route) {
      if(req.method === method && new URL(req.url).pathname === path) {
        const response = await fn(req);
        console.info(`   - ${response.status}`);
        return response;
      }
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`==> Server is available on http://localhost:${server.port}`)

// Type issue!
type Data = { a: { b?: string, c: number }};
const original = { a: { b: undefined, c: "123" }};
const data: Data = original;
