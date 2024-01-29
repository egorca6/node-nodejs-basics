import { readdir } from "node:fs/promises";
import { mkdir, copyFile, access } from "node:fs/promises";
const copy = async () => {
  try {
    await access("src/fs/files");
    await mkdir("src/fs/files_copy", { recursive: false });
    const files = await readdir("src/fs/files");
    for (const file of files) {
      const sourcePath = `src/fs/files/${file}`;
      const destPath = `src/fs/files_copy/${file}`;
      await copyFile(sourcePath, destPath);
    }
  } catch (err) {
    if (err.code === "EEXIST") {
      console.error(
        'FS operation failed: Directory "files_copy" already exist'
      );
    } else {
      console.log(`FS operation failed: Directory "files" doesn't exists `);
    }
  }
};

await copy();
