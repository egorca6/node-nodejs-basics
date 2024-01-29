import { createWriteStream } from "node:fs";
import { stdin } from "node:process";
const write = async () => {
  const output = createWriteStream("src/streams/files/fileToWrite.txt");
  stdin.pipe(output);
  console.log("Enter some text");
};

await write();
