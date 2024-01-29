import { rename as renameFs, stat } from "node:fs";

const rename = async () => {
  stat("src/fs/files/properFilename.md", (err, stats) => {
    if (stats) {
      console.error("FS operation failed. File already exists");
    } else {
      renameFs(
        "src/fs/files/wrongFilename.txt",
        "src/fs/files/properFilename.md",
        (err) => {
          if (err) {
            console.error(
              "FS operation failed. wrongFilename.txt  doesn't exist"
            );
          }
        }
      );
    }
  });
};

await rename();
