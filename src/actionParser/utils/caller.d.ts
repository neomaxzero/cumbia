import { ComponentActions } from '../..';
export declare type CallerValues = {
    prevent: boolean;
};
declare const callFnWithValues: (element: HTMLElement, fnActions: ComponentActions, actionName: string, { prevent }: CallerValues) => (e: Event) => void;
export default callFnWithValues;
