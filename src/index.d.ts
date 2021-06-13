export declare type ActionArgs = {
    [key: string]: any | HTMLElement;
};
export declare type ComponentActions = {
    [key: string]: (t: ActionArgs) => void;
};
export interface ComponentInstance {
    actions: ComponentActions;
}
export declare type actionableObject = {
    el: HTMLElement;
    value: string;
};
export declare type BindedValues = {
    [key: string]: actionableObject;
};
export declare type Component = {
    el: HTMLElement;
};
export declare type ComponentFactory = (component: Component) => ComponentInstance;
export declare const componentFactory: Map<string, ComponentFactory>;
declare const addComponents: (components: Array<ComponentFactory>) => void;
export default addComponents;
