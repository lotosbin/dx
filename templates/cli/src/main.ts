import { args as _args, blue, bold, parse } from "./dept.ts";

console.log(blue(`generate by ${bold("dx")}`));
let alias = {
  help: "h",
  name: "n",
};
const args = parse(_args, { alias: alias });
console.log(`${args}`);
