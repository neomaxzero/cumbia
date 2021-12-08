import parseValues from './utils/parseValues';
const parseLifecycle = (instance, element) => {
    const values = parseValues(element);
    if (instance.init) {
        instance.init(values);
    }
};
export default parseLifecycle;
