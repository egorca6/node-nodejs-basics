// n should be received from main thread
import { parentPort, workerData } from "node:worker_threads";
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
  parentPort.postMessage(result);
};
const { n } = workerData;

const result = nthFibonacci(n);
sendResult(result);
