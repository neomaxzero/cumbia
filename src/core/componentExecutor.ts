import parseActions from "../actionParser/data-action";
import parseKey from "../actionParser/data-key";
import parseLifecycle from "../actionParser/lifecycle";
import { ComponentFactory } from "types/cumbiaTypes";
import message from "../utils/message";

const componentExecutor = (
  element: HTMLElement,
  componentFactory: Map<string, ComponentFactory>,
  name: string
): void => {
  const cleanName = name.trim();
  console.log(cleanName);

  if (!componentFactory.has(cleanName)) {
    return message.warn(`Component -->"${cleanName}"<-- was not found.`);
  }

  const fnComponent = componentFactory.get(cleanName);

  if (!fnComponent) {
    return message.error("Undefined component");
  }

  const instanceComponent = fnComponent({ el: element });

  parseLifecycle(instanceComponent, element);

  if (instanceComponent?.actions) {
    parseActions(element, instanceComponent.actions);
    parseKey(element, instanceComponent.actions);
  }
};

export default componentExecutor;
