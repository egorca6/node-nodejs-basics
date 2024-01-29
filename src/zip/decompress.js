import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";

const decompress = async () => {
  const gunzip = createGunzip();
  const source = createReadStream("src/zip/files/archive.gz");
  const destination = createWriteStream("src/zip/files/fileDecompress.txt");

  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error("An error occurred during decompression:", err);
      process.exitCode = 1;
    } else {
      console.log("Complete!");
    }
  });
};

await decompress();
