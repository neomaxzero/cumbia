const fs = require("fs");
const { version } = require("../package.json");
const path = require('path');

const getLine = (version) => `export const version = '${version}';`;

const writeVersion = () => {
    const file = path.join(__dirname, "../src/_version.ts");
  fs.writeFileSync(file, getLine(version));
};

module.exports =  writeVersion;
