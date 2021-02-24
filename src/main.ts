import {args as _args, blue, bold, copy, parse, Command} from "./deps.ts";

const program = new Command('dx')

program
    .version('0.0.1')
    .option('-c, --config <FILE>', 'load configuration file')
    .option('-t, --template <type>', 'template name,[cli|mini]')
    .option('-n, --name <type>', 'project name')
    .option("-v, --verbose", 'enable verbose mode')
    .command('g <type> [name]')
    .description('generate file, m - module,mw - middleware')
    .action((type: string, name: string) => {
        console.log(`generate ${type} ${name}`);

    });

program.parse(_args)
program.on('--help', () => {
    console.log('');
    console.log('Example call:');
    console.log('  $ dx --help');
    console.log('  $ dx --template cli-cmd --name cli');
});
if (program.template != null && program.name != null) {
    console.log(`copy template ${program.template} to ./${program.name}`)
    copy(`./templates/${program.template}`, `./${program.name}`)
}
