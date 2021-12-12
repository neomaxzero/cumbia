declare module "_version" {
    export const version = "0.0.5";
}
declare module "utils/message" {
    const _default: {
        error: (msg: string) => void;
        warn: (msg: string) => void;
        info: (msg: string) => void;
    };
    export default _default;
}
declare module "types/cumbiaTypes" {
    type Initialisers = (elements: Array<HTMLElement>) => void;
    type GlobalInitialisers = Array<Initialisers>;
    export type CumbiaOptions = {
        globalInitialisers: GlobalInitialisers;
    };
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
}
declare module "actionParser/utils/parseValues" {
    import { BindedValues } from "types/cumbiaTypes";
    const parseValues: (element: HTMLElement) => BindedValues;
    export default parseValues;
}
declare module "actionParser/utils/caller" {
    import { ComponentActions } from "types/cumbiaTypes";
    export type CallerValues = {
        prevent: boolean;
    };
    const callFnWithValues: (element: HTMLElement, fnActions: ComponentActions, actionName: string, { prevent }: CallerValues) => (e: Event) => void;
    export default callFnWithValues;
}
declare module "actionParser/data-action" {
    import { ComponentActions } from "types/cumbiaTypes";
    const parseActions: (element: HTMLElement, fnActions: ComponentActions) => void;
    export default parseActions;
}
declare module "actionParser/data-key" {
    import { ComponentActions } from "types/cumbiaTypes";
    const parseKey: (element: HTMLElement, fnActions: ComponentActions) => void;
    export default parseKey;
}
declare module "actionParser/lifecycle" {
    import { ComponentInstance } from "types/cumbiaTypes";
    const parseLifecycle: (instance: ComponentInstance, element: HTMLElement) => void;
    export default parseLifecycle;
}
declare module "core/pubsub" {
    export const on: (topic: string, fn: any) => void;
    export const emit: (topic: string, message: any) => void;
    const _default_1: {
        on: (topic: string, fn: any) => void;
        emit: (topic: string, message: any) => void;
    };
    export default _default_1;
}
declare module "core/componentExecutor" {
    import { ComponentFactory } from "types/cumbiaTypes";
    const componentExecutor: (element: HTMLElement, componentFactory: Map<string, ComponentFactory>, name: string) => void;
    export default componentExecutor;
}
declare module "core/createApp" {
    import { ComponentFactory } from "types/cumbiaTypes";
    import { CumbiaOptions } from "types/cumbiaTypes";
    export const initialisedComponent: Map<HTMLElement, boolean>;
    export const componentFactory: Map<string, ComponentFactory>;
    const createApp: (options: CumbiaOptions) => void;
    export default createApp;
}
declare module "cumbia" {
    import { ComponentFactory } from "types/cumbiaTypes";
    import { CumbiaOptions } from "types/cumbiaTypes";
    const addComponents: (components: Array<ComponentFactory>, options: CumbiaOptions) => void;
    export default addComponents;
}
