import { ComponentActions } from 'types/cumbiaTypes';
import message from '../utils/message';
import callFnWithValues from './utils/caller';

const parseActions = (element: HTMLElement, fnActions: ComponentActions) => {
  const dataActionAttr = 'data-action';

  const actions = element.querySelectorAll(`[${dataActionAttr}]`);

  actions.forEach((actionElement: HTMLElement) => {
    const actionName =
      actionElement.getAttribute(dataActionAttr) || 'default_action_name';
    const actionType = actionElement.getAttribute('type');

    if (actionName === 'submit' || actionType === 'submit') {
      if (element.tagName !== 'FORM') {
        return message.error(`Trying to handle submit handler in an element different than a FORM: ${element}` );
      }

      element.addEventListener(
        'submit',
        callFnWithValues(element, fnActions, actionName, { prevent: true }),
      );

      return;
    }

    if (actionElement.tagName === 'INPUT') {
      actionElement.addEventListener(
        'change',
        callFnWithValues(element, fnActions, actionName, { prevent: false }),
      );

      return;
    }

    actionElement.addEventListener(
      'click',
      callFnWithValues(element, fnActions, actionName, { prevent: false }),
    );
  });
};

export default parseActions;
