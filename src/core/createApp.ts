import componentExecutor from "./componentExecutor";
import { ComponentFactory } from "types/cumbiaTypes";

const initialisedComponent = new Map<HTMLElement, boolean>();
export const componentFactory = new Map<string, ComponentFactory>();

const dataComponentAttr = "data-component";

const componentSeparator = ",";

const createApp = (): void => {
  const htmlComponents = document.querySelectorAll(`[${dataComponentAttr}]`);

  htmlComponents.forEach((element: HTMLElement) => {
    if (initialisedComponent.has(element)) {
      return;
    } else {
      initialisedComponent.set(element, true);
    }

    const name = element.getAttribute(dataComponentAttr) || "";

    const allComponents = name.split(componentSeparator);

    allComponents.forEach((uniqueComponent) =>
      componentExecutor(element, componentFactory, uniqueComponent)
    );
  });
};

export default createApp;
