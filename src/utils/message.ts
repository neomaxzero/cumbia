const logPrefix = '🎼 Cumbia:';
const error = (msg: any) => console.error(`${logPrefix}`,msg);
const warn = (msg: any) => console.warn(`${logPrefix}`, msg);
const info = (msg: any) => console.info(`${logPrefix}`, msg);

export default { error, warn, info };
