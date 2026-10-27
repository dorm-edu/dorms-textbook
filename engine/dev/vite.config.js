export default { root: new URL(".", import.meta.url).pathname, server: { port: 5310, strictPort: true, fs: { allow: [".."] } } };
