declare module "_version" {
    export const version = "0.0.4";
}
declare module "utils/message" {
    const _default: {
        error: (msg: string) => void;
        warn: (msg: string) => void;
        info: (msg: string) => void;
    };
    export default _default;
}
declare module "actionParser/utils/parseValues" {
    import { BindedValues } from "cumbia";
    const parseValues: (element: HTMLElement) => BindedValues;
    export default parseValues;
}
declare module "actionParser/utils/caller" {
    import { ComponentActions } from "cumbia";
    export type CallerValues = {
        prevent: boolean;
    };
    const callFnWithValues: (element: HTMLElement, fnActions: ComponentActions, actionName: string, { prevent }: CallerValues) => (e: Event) => void;
    export default callFnWithValues;
}
declare module "actionParser/data-action" {
    import { ComponentActions } from "cumbia";
    const parseActions: (element: HTMLElement, fnActions: ComponentActions) => void;
    export default parseActions;
}
declare module "actionParser/data-key" {
    import { ComponentActions } from "cumbia";
    const parseKey: (element: HTMLElement, fnActions: ComponentActions) => void;
    export default parseKey;
}
declare module "actionParser/lifecycle" {
    import { ComponentInstance } from "cumbia";
    const parseLifecycle: (instance: ComponentInstance, element: HTMLElement) => void;
    export default parseLifecycle;
}
declare module "cumbia" {
    export type ActionArgs = {
        [key: string]: any | HTMLElement;
    };
    export type ComponentActions = {
        [key: string]: (t: ActionArgs) => void;
    };
    export interface ComponentInstance {
        actions?: ComponentActions;
        init?: (t: BindedValues) => void;
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
    export const componentFactory: Map<string, ComponentFactory>;
    const addComponents: (components: Array<ComponentFactory>) => void;
    export default addComponents;
}
