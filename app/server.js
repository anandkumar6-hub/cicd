const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.end("Hello from Azure DevOps CI/CD Pipeline!");
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
