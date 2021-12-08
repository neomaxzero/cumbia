const logPrefix = '🎼 Cumbia:';
const error = (msg) => console.error(`${logPrefix} ${msg}`);
const warn = (msg) => console.warn(`${logPrefix} ${msg}`);
const info = (msg) => console.info(`${logPrefix} ${msg}`);
export default { error, warn, info };
