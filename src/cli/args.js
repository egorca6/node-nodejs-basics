import { argv } from "node:process";
const parseArgs = () => {
  const args = argv.slice(2);

  for (let i = 0; i < args.length; i = i + 2) {
    let propName = args[i].replace(/^--/, "");
    const value = args[i + 1];
    console.log(`${propName} is ${value}`);
  }
};

parseArgs();
