import { version } from "./_version";

import message from "./utils/message";
import { ComponentFactory } from "types/cumbiaTypes";
import createApp, { componentFactory } from "./core/createApp";
import { CumbiaOptions } from "types/cumbiaTypes";
import debug from "./utils/components/debug";

const addComponents = (
  components: Record<string, ComponentFactory>,
  options: CumbiaOptions
) => {
  if (!Object.keys(components).length) {
    return message.error("No components passed");
  }

  Object.keys(components).forEach((componentName:string) => {
    const component: ComponentFactory = components[componentName];

    if (!component.name) {
      return message.error(
        "Component name not defined, please give a name to your component"
      );
    }

    if (componentFactory.has(component.name)) {
      message.warn(
        `Name collision detected. ${component.name} was previously defined`
      );
    }
    componentFactory.set(component.name, component);
  });

  document.addEventListener("DOMContentLoaded", function() { 
    message.info(`Initializing ${version}`);
    createApp(options);
  });
};

export { debug };



export default addComponents;
