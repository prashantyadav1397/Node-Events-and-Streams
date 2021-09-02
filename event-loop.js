const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

// setting the thread pool size
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log("timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));
fs.readFile("test-file.txt", () => {
  console.log("I/O finished \n-----------------------------");
  setTimeout(() => console.log("timer 2 finished"), 0);
  setTimeout(() => console.log("timer 3 finished"), 1000);
  setImmediate(() => console.log("Immediate 2 finished"));
  process.nextTick(() => console.log("Process.nextTick()"));

  crypto.pbkdf2Sync("P@ssw0rd@123/,;[!`~qw3rt", "salt", 100000, 1024, "sha512");
  console.log("Password 1 encrypted. Time Elapsed: ", Date.now() - start);

  crypto.pbkdf2(
    "P@ssw0rd@123/,;[!`~qw3rt",
    "salt",
    100000,
    1024,
    "sha512",
    () => {
      console.log("Password 2 encrypted. Time Elapsed: ", Date.now() - start);
    }
  );
  crypto.pbkdf2(
    "P@ssw0rd@123/,;[!`~qw3rt",
    "salt",
    100000,
    1024,
    "sha512",
    () => {
      console.log("Password 3 encrypted. Time Elapsed: ", Date.now() - start);
    }
  );
  crypto.pbkdf2(
    "P@ssw0rd@123/,;[!`~qw3rt",
    "salt",
    100000,
    1024,
    "sha512",
    () => {
      console.log("Password 4 encrypted. Time Elapsed: ", Date.now() - start);
    }
  );
});
console.log("Hello from the top level code");
