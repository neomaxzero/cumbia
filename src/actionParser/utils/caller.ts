import { ComponentActions } from 'types/cumbiaTypes';
import message from '../../utils/message';
import parseValues from './parseValues';

export type CallerValues = {
  prevent: boolean;
};

const callFnWithValues =
  (
    element: HTMLElement,
    fnActions: ComponentActions,
    actionName: string,
    { prevent }: CallerValues,
  ) =>
  (e: Event) => {
    const fnTobind = fnActions[actionName];

    if (prevent) {
      e.preventDefault();
    }

    if (!fnTobind) {
      return message.warn(
        `Action -->"${actionName}"<-- not defined in component.`,
      );
    }

    const values = parseValues(element);

    fnTobind(values);
  };

export default callFnWithValues;
