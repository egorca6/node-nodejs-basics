import { createReadStream } from "node:fs";
import { stdout } from "node:process";
const { createHash } = await import("node:crypto");
const calculateHash = async () => {
  const hash = createHash("sha256");
  const input = createReadStream("src/hash/files/fileToCalculateHashFor.txt");
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
