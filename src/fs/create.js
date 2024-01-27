import { writeFile } from "node:fs";
import { access } from "node:fs/promises";
const create = async () => {
  // Write your code herenode -v
  let fileContent = "I am fresh and young";
  var filepath = "fs/files/fresh.txt";

  try {
    await access(filepath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      writeFile(filepath, fileContent, (writeErr) => {
        if (writeErr) throw writeErr;
        console.log("The file was successfully saved!");
      });
    } else {
      console.error("Error:", err.message);
    }
  }
};

await create();
