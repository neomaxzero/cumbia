import message from '../../utils/message';
import parseValues from './parseValues';
const callFnWithValues = (element, fnActions, actionName, { prevent }) => (e) => {
    const fnTobind = fnActions[actionName];
    if (prevent) {
        e.preventDefault();
    }
    if (!fnTobind) {
        return message.warn(`Action -->"${actionName}"<-- not defined in component.`);
    }
    const values = parseValues(element);
    fnTobind(values);
};
export default callFnWithValues;
