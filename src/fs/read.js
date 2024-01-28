import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const read = async () => {
  async function logFile() {
    try {
      const filePath = resolve("fs/files/fileToRead.txt");
      const contents = await readFile(filePath, { encoding: "utf8" });
      console.log(contents);
    } catch (err) {
      console.error("FS operation failed");
    }
  }
  logFile();
};

await read();
