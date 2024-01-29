import { Worker } from "node:worker_threads";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const worker = new Worker(`${__dirname}/worker.js`, {
    workerData: { n: 7 },
  });
  worker.on("message", (result) => {
    console.log(`Result is: ${result}`);
  });

  worker.on("error", (error) => {
    console.error(`Error in worker thread: ${error}`);
  });
  worker.on("exit", (code) => {
    if (code !== 0) {
      console.error(`Worker stopped with exit code ${code}`);
    }
  });
};

await performCalculations();
