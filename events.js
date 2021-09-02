const EventEmitter = require("events");
const http = require("http");

// accessing the eventEmitter using the instance object
// const myEmitter = new EventEmitter();

// class based events - extending the EventEmitter class

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();
// Observer
myEmitter.on("newSale", () => console.log("there was a new sale"));
// Observer
myEmitter.on("newSale", () => {
  console.log("Customer Name: Azon");
});
// Observer
myEmitter.on("newSale", (stock) => {
  console.log("there are ", `${stock}`, " items left in stock");
});

// Emitter
myEmitter.emit("newSale", 9);

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request 1 received");
  res.end("request 1 received");
});

server.on("request", (req, res) => {
  console.log("request 2 received");
});

server.on("close", () => {
  console.log("closing server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log(" Listening to incoming requests");
});
