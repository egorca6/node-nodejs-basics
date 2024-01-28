import { readdir } from "node:fs/promises";
const list = async () => {
  // Write your code here
  try {
    const files = await readdir("fs/files");
    for (const file of files) console.log(file);
  } catch (err) {
    console.error("FS operation failed");
  }
};

await list();
