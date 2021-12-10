export type ActionArgs = {
  [key: string]: any | HTMLElement;
};

export type ComponentActions = {
  [key: string]: (t: ActionArgs) => void;
};

export type ComponentInitializer = (t: BindedValues) => void;
export interface ComponentInstance {
  actions?: ComponentActions;
  init?: ComponentInitializer;
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
