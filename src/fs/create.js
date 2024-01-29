import { writeFile } from "node:fs";
import { access } from "node:fs/promises";
const create = async () => {
  let fileContent = "I am fresh and young";
  var filepath = "src/fs/files/fresh.txt";

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
