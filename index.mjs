import http from "http";

const port = 4080;

const hostname = "192.168.0.1";

const server = http.createServer((req, res) => {
  const data = { message: "Hi There" };
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Connection", "close");
  res.statusCode(200);
  res.end(JSON.stringify(data));
});
server.listen(port, hostname, () => {
    console.log(`Server runing at http://${hostname}:${port}`)
});
