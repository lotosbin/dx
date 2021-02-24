import { args as _args, blue, bold, Command, parse } from "./dept.ts";

const program = new Command("dx");

program
  .version("0.0.1")
  .option("-c, --config <FILE>", "load configuration file")
  .option("-c, --config <FILE>", "load configuration file")
  .option("-v, --verbose", "enable verbose mode");

program.parse(_args);
