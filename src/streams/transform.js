import { Transform } from "node:stream";
import { stdin, stdout } from "node:process";

const Reverse = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, String(chunk).split("").reverse().join(""));
  },
});

const transform = async () => {
  stdin.pipe(Reverse).pipe(stdout);
  console.log("Enter some text");
};

await transform();
