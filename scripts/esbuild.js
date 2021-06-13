const yargs = require('yargs');

const argv = yargs.option('dev', {
  type: 'boolean',
}).argv;

require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist-lib/cumbia.js',
    format: 'esm',
    minify: !argv.dev,
    sourcemap: argv.dev,
    watch: argv.dev,
  })
  .catch(() => process.exit(1));

console.info('Ready to GO! Lets keep it up team.');
