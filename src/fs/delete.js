import { unlink } from "node:fs";
const remove = async () => {
  // Write your code here
  unlink("src/fs/files/fileToRemove.txt", (err) => {
    if (err) {
      console.error("FS operation failed");
    } else {
      console.log("fileToRemove.txt was deleted");
    }
  });
};

await remove();
