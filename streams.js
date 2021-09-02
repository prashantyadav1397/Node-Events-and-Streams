// Streams in practice
const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution 1 - Normal File read
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  // solution 2 - Stream in action
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("Error");
  //   });
  // Solution 3 - Pipes
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readabelSource.pipe(writableDestinations)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening ..........");
});
