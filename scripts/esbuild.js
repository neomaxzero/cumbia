const writeVersion = require('./writeVersion');
const yargs = require('yargs');

const argv = yargs.option('dev', {
  type: 'boolean',
}).argv;

writeVersion();

require('esbuild')
  .build({
    entryPoints: ['src/cumbia.ts'],
    bundle: true,
    outfile: 'cumbia.js',
    format: 'esm',
    minify: !argv.dev,
    sourcemap: argv.dev,
    watch: argv.dev,
  })
  .catch(() => process.exit(1));

console.info('Ready to GO! Lets keep it up team.');
