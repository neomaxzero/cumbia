type Initialisers = (elements: Array<HTMLElement>) => void;

type GlobalInitialisers = Array<Initialisers>

export type CumbiaOptions = {
  globalInitialisers: GlobalInitialisers
}

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
  on: (topic: string, fn: any) => void;
  emit: (topic: string, message: any) => void;
};

export type ComponentFactory = (component: Component) => ComponentInstance;
