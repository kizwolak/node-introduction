var http = require("http");
var url = require("url");
var fs = require("fs");
var events = require("events");
var formidable = require("formidable");
var dt = require("./myfirstmodule");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end("Hello world!");
  })
  .listen(8080);

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(8081);

fs.appendFile("mynewfile1.txt", "Hello, content!", (err) => {
  if (err) throw err;
  console.log("saved!");
});

fs.open("mynewfile2.txt", "w", (err, file) => {
  if (err) throw err;
  console.log("Saved!");
});

fs.writeFile("mynewfile1.txt", "Hello replacement!", (err) => {
  if (err) throw err;
  console.log("Saved!");
});

fs.appendFile("mynewfile1.txt", " This is my text.", (err) => {
  if (err) throw err;
  console.log("Updated!");
});

fs.unlink("mynewfile2.txt", (err) => {
  if (err) throw err;
  console.log("File deleted!");
});

fs.rename("mynewfile1.txt", "myrenamedfile.txt", (err) => {
  if (err) throw err;
  console.log("File renamed!");
});

var rs = fs.createReadStream("myrenamedfile.txt");
rs.on("open", () => console.log("The file is open"));

var eventEmitter = new events();
var myEventHandler = () => console.log("I hear a scream!");

eventEmitter.on("scream", myEventHandler);

eventEmitter.emit("scream");
