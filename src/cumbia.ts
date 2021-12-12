import { version } from "./_version";

import message from "./utils/message";
import { ComponentFactory } from "types/cumbiaTypes";
import createApp, { componentFactory } from "./core/createApp";
import { CumbiaOptions } from "types/cumbiaTypes";

const addComponents = (components: Array<ComponentFactory>, options: CumbiaOptions) => {
  if (!components.length) {
    message.error("No components passed");
  }

  components.forEach((component: ComponentFactory) => {
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

  createApp(options);
};

message.info(`Initializing ${version}`);

export default addComponents;
