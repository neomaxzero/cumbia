import message from '../utils/message';
import callFnWithValues from './utils/caller';
const parseActions = (element, fnActions) => {
    const dataActionAttr = 'data-action';
    const actions = element.querySelectorAll(`[${dataActionAttr}]`);
    actions.forEach((actionElement) => {
        const actionName = actionElement.getAttribute(dataActionAttr) || 'default_action_name';
        if (actionName === 'submit') {
            if (element.tagName !== 'FORM') {
                return message.error('Trying to handle submit handler outside of form');
            }
            element.addEventListener('submit', callFnWithValues(element, fnActions, actionName, { prevent: true }));
            return;
        }
        if (actionElement.tagName === 'INPUT') {
            actionElement.addEventListener('change', callFnWithValues(element, fnActions, actionName, { prevent: false }));
            return;
        }
        actionElement.addEventListener('click', callFnWithValues(element, fnActions, actionName, { prevent: false }));
    });
};
export default parseActions;
