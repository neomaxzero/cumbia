import message from './utils/message';

type ActionArgs = {
  [key: string]: any | HTMLElement;
};

type ComponentActions = {
  [key: string]: (t: ActionArgs) => void;
};

interface Component {
  name: string;
  actions: ComponentActions;
}

type ComponentFactory = ({ el: HTMLElement }) => Component;

export const componentFactory = new Map<string, ComponentFactory>();

const dataComponentAttr = 'data-component';

type actionableObject = {
  el: HTMLElement;
  value: string;
};

type BindedValues = {
  [key: string]: actionableObject;
};

const parseValues = (element: HTMLElement): BindedValues => {
  const dataValueAttr = 'data-value';
  const bindedValues: BindedValues = {};

  const values = element.querySelectorAll(`[${dataValueAttr}]`);

  values.forEach((valueElement: HTMLElement) => {
    const nameDefined =
      valueElement.getAttribute(dataValueAttr) || 'default_name';
    const value = valueElement.innerHTML;
    //TODO: Can we get a boolean or a integer from the value property of an element?

    bindedValues[nameDefined] = { el: valueElement, value };
  });

  return bindedValues;
};

const parseActions = (element: HTMLElement, fnActions: ComponentActions) => {
  const dataActionAttr = 'data-action';
  const bindedAction: BindedValues = {};

  const actions = element.querySelectorAll(`[${dataActionAttr}]`);

  actions.forEach((actionElement: HTMLElement) => {
    const actionName =
      actionElement.getAttribute(dataActionAttr) || 'default_action_name';

    actionElement.addEventListener('click', () => {
      const fnTobind = fnActions[actionName];

      if (!fnTobind) {
        return message.warn(
          `Action -->"${actionName}"<-- not defined in component.`,
        );
      }

      const values: BindedValues = parseValues(element);
      fnTobind(values);
    });
  });
};

const createApp = () => {
  const htmlComponents = document.querySelectorAll(`[${dataComponentAttr}]`);

  htmlComponents.forEach((element: HTMLElement) => {
    const name = element.getAttribute(dataComponentAttr) || '';

    if (!componentFactory.has(name)) {
      return message.warn(`Component -->"${name}"<-- not found.`);
    }

    const fnComponent = componentFactory.get(name);

    console.log(fnComponent);

    if (!fnComponent) {
      return message.error('Undefined component');
    }

    const instanceComponent = fnComponent({ el: element });

    console.log(instanceComponent);
    if (instanceComponent?.actions) {
      parseActions(element, instanceComponent.actions);
    }

    // fnAction(element);
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
