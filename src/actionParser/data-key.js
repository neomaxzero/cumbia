import callFnWithValues from './utils/caller';
const parseKey = (element, fnActions) => {
    const dataActionAttr = 'data-action-key';
    const actions = element.querySelectorAll(`[${dataActionAttr}]`);
    actions.forEach((actionElement) => {
        const actionName = actionElement.getAttribute(dataActionAttr) || 'default_action_name';
        actionElement.addEventListener('keyup', callFnWithValues(element, fnActions, actionName, { prevent: false }));
    });
};
export default parseKey;
