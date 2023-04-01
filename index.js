const http = require("http");
const https = require("https");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const options1 = {
  hostname: "example.com",
  port: 443,
  path: "/todos",
  method: "GET",
};

const req1 = https.request(options1, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });

  req1.on("error", (error) => {
    console.error(error);
  });
});

req1.end();

const data = JSON.stringify({
  todo: "Buy the milk",
});

const options = {
  hostname: "whatever.com",
  port: 443,
  path: "/todos",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req2 = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req2.on("error", (error) => {
  console.error(error);
});

req2.write(data);
req2.end();

const content = "Some content!";

fs.writeFile("test.txt", content, (err) => {
  if (err) console.error(err);
});

const content2 = "Some content!";

fs.appendFile("file.log", content2, (err) => {
  if (err) console.error(err);
});

fs.readFile("read.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
