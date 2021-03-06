import { ComponentInstance } from 'types/cumbiaTypes';
import parseValues from './utils/parseValues';

const parseLifecycle = (instance: ComponentInstance, element: HTMLElement) => {
  const values = parseValues(element);
  if (instance.init) {
    instance.init(values);
  }
};

export default parseLifecycle;
