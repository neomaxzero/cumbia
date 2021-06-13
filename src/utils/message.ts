const errorPrefix = '🎼 Cumbia:';
const error = (msg: string) => console.error(`${errorPrefix} ${msg}`);
const warn = (msg: string) => console.warn(`${errorPrefix} ${msg}`);

export default { error, warn };
