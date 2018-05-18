const http = require('http');

const PORT = 6008;

const server = http.createServer((req, res) => {
  res.end('helloworld');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server listening on port ${server.address().port}`);
});
