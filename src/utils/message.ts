const logPrefix = '🎼 Cumbia:';
const error = (msg: string) => console.error(`${logPrefix} ${msg}`);
const warn = (msg: string) => console.warn(`${logPrefix} ${msg}`);
const info = (msg: string) => console.info(`${logPrefix} ${msg}`);

export default { error, warn, info };
