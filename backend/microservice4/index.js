const http = require('http');

const server = http.createServer((req, res) => {

  console.log(`Request received at ${new Date().toISOString()}: ${req.method} ${req.url}`);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from the beautiful Microservice 4!\n');
});

const PORT = 3004;
server.listen(PORT, () => {
  console.log(`Microservice 4 running on http://localhost:${PORT}`);
});
