import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Pizzaria Army",
  "/pizzas": "Sabores de pizza"
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log("servidor escutando");
});
