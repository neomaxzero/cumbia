declare module "example/counter/components/todo/messages" {
    export enum MESSAGES {
        ADD_TODO = "ADD_TODO"
    }
    export type MESSAGES_TYPE = {
        [MESSAGES.ADD_TODO]: string;
    };
}
declare module "src/_version" {
    export const version = "0.0.10";
}
declare module "src/utils/message" {
    const _default: {
        error: (msg: any) => void;
        warn: (msg: any) => void;
        info: (msg: any) => void;
    };
    export default _default;
}
declare module "src/types/cumbiaTypes" {
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
        name: string;
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
declare module "src/actionParser/utils/parseValues" {
    import { BindedValues } from "src/types/cumbiaTypes";
    const parseValues: (element: HTMLElement) => BindedValues;
    export default parseValues;
}
declare module "src/actionParser/utils/caller" {
    import { ComponentActions } from "src/types/cumbiaTypes";
    export type CallerValues = {
        prevent: boolean;
    };
    const callFnWithValues: (element: HTMLElement, fnActions: ComponentActions, actionName: string, { prevent }: CallerValues) => (e: Event) => void;
    export default callFnWithValues;
}
declare module "src/actionParser/data-action" {
    import { ComponentActions } from "src/types/cumbiaTypes";
    const parseActions: (element: HTMLElement, fnActions: ComponentActions) => void;
    export default parseActions;
}
declare module "src/actionParser/data-key" {
    import { ComponentActions } from "src/types/cumbiaTypes";
    const parseKey: (element: HTMLElement, fnActions: ComponentActions) => void;
    export default parseKey;
}
declare module "src/actionParser/lifecycle" {
    import { ComponentInstance } from "src/types/cumbiaTypes";
    const parseLifecycle: (instance: ComponentInstance, element: HTMLElement) => void;
    export default parseLifecycle;
}
declare module "src/core/pubsub" {
    export const on: (topic: string, fn: any) => void;
    type emitterType = <T>(topic: string, message: T) => void;
    export const emit: emitterType;
    const _default_1: {
        on: (topic: string, fn: any) => void;
        emit: emitterType;
    };
    export default _default_1;
}
declare module "src/core/componentExecutor" {
    import { ComponentFactory } from "src/types/cumbiaTypes";
    const componentExecutor: (element: HTMLElement, componentFactory: Map<string, ComponentFactory>, name: string) => void;
    export default componentExecutor;
}
declare module "src/core/createApp" {
    import { ComponentFactory } from "src/types/cumbiaTypes";
    import { CumbiaOptions } from "src/types/cumbiaTypes";
    export const initialisedComponent: Map<HTMLElement, boolean>;
    export const componentFactory: Map<string, ComponentFactory>;
    const createApp: (options: CumbiaOptions) => void;
    export default createApp;
}
declare module "src/utils/components/debug" {
    const debug: (components: Array<HTMLElement>) => void;
    export default debug;
}
declare module "src/cumbia" {
    import { ComponentFactory } from "src/types/cumbiaTypes";
    import { CumbiaOptions } from "src/types/cumbiaTypes";
    import debug from "src/utils/components/debug";
    const addComponents: (components: Record<string, ComponentFactory>, options: CumbiaOptions) => void;
    export { debug };
    export default addComponents;
}
