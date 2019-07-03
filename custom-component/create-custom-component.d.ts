import { BuilderInfo } from "formiojs";
import { FormioCustomComponentInfo, FormioCustomElement } from "../formio.common";
export declare function createCustomFormioComponent(customComponentOptions: FormioCustomComponentInfo): {
    new (component: any, options: any, data: any): {
        id: string;
        type: string;
        element: HTMLElement;
        _value: any;
        _customElement: FormioCustomElement;
        readonly defaultSchema: import("formiojs").ExtendedComponentSchema<any>;
        readonly emptyValue: string;
        elementInfo(): import("formiojs").ElementInfo;
        build(): void;
        getValue(): any;
        setValue(value: any): void;
        createLabel(container: HTMLElement): void;
        on(event: string, cb: Function, internal: boolean): any;
        off(event: string): void;
        emit(event: string, data: Object): void;
        addEventListener(obj: HTMLElement, type: string, func: Function, persistent: boolean): any;
        removeEventListener(obj: Object, type: any): any;
        destroy(full: boolean): void;
        appendTo(element: any, container: any): any;
        prependTo(element: HTMLElement, container: HTMLElement): any;
        removeChildFrom(element: HTMLElement, container: HTMLElement): any;
        ce(type: string, attr?: Object, children?: string | HTMLElement | (string | HTMLElement)[]): HTMLElement;
        appendChild(element: any, child: any): any;
        maskPlaceholder(mask: HTMLElement): string;
        setInputMask(input: HTMLElement, inputMask: string, placeholder: boolean): void;
        t(text: string, params: Object): string;
        text(text: any): Text;
        attr(element: HTMLElement, attr: Object): void;
        hasClass(element: any, className: string): boolean;
        addClass(element: HTMLElement, className: string): any;
        removeClass(element: HTMLElement, className: string): any;
        empty(element: HTMLElement): void;
        iconClass(name: string, spinning: boolean): string;
        getIcon(name: string): HTMLElement;
        evalContext(additional: any): any;
        interpolate(string: any, data: any): any;
        evaluate(func: any, args: any, ret: any, tokenize: any): any;
        hook(): any;
    };
    editForm: import("formiojs").ExtendedComponentSchema<any>[];
    schema(): import("formiojs").ExtendedComponentSchema<any>;
    readonly builderInfo: BuilderInfo;
};
