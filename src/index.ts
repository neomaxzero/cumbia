import parseActions from './actionParser/data-action';
import parseKey from './actionParser/data-key';
import message from './utils/message';

export type ActionArgs = {
  [key: string]: any | HTMLElement;
};

export type ComponentActions = {
  [key: string]: (t: ActionArgs) => void;
};

export interface ComponentInstance {
  actions: ComponentActions;
}

export type actionableObject = {
  el: HTMLElement;
  value: string;
};

export type BindedValues = {
  [key: string]: actionableObject;
};

export type Component = {
  el: HTMLElement;
};

export type ComponentFactory = (component: Component) => ComponentInstance;

export const componentFactory = new Map<string, ComponentFactory>();

const dataComponentAttr = 'data-component';

const createApp = () => {
  const htmlComponents = document.querySelectorAll(`[${dataComponentAttr}]`);

  htmlComponents.forEach((element: HTMLElement) => {
    const name = element.getAttribute(dataComponentAttr) || '';

    if (!componentFactory.has(name)) {
      return message.warn(`Component -->"${name}"<-- not found.`);
    }

    const fnComponent = componentFactory.get(name);

    if (!fnComponent) {
      return message.error('Undefined component');
    }

    const instanceComponent = fnComponent({ el: element });

    if (instanceComponent?.actions) {
      parseActions(element, instanceComponent.actions);
      parseKey(element, instanceComponent.actions);
    }
  });
};

const addComponents = (components: Array<ComponentFactory>) => {
  components.forEach((component: ComponentFactory) => {
    if (!component.name) {
      return message.error(
        'Component name not defined, please give a name to your component',
      );
    }

    if (componentFactory.has(component.name)) {
      message.warn(
        `Name collision detected. ${component.name} was previously defined`,
      );
    }
    componentFactory.set(component.name, component);
  });

  createApp();
};

export default addComponents;
