/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createCustomElement } from '@angular/elements';
import { Components } from 'formiojs';
import { createCustomFormioComponent } from './create-custom-component';
import { CustomTagsService } from './custom-tags.service';
/**
 * @param {?} options
 * @param {?} angularComponent
 * @param {?} injector
 * @return {?}
 */
export function registerCustomFormioComponent(options, angularComponent, injector) {
    injector.get(CustomTagsService).addCustomTag(options.selector);
    /** @type {?} */
    var complexCustomComponent = createCustomElement(angularComponent, { injector: injector });
    customElements.define(options.selector, complexCustomComponent);
    Components.setComponent(options.type, createCustomFormioComponent(options));
}
/**
 * @param {?} options
 * @param {?} angularComponent
 * @param {?} formioClass
 * @param {?} injector
 * @return {?}
 */
export function registerCustomFormioComponentWithClass(options, angularComponent, formioClass, injector) {
    injector.get(CustomTagsService).addCustomTag(options.selector);
    /** @type {?} */
    var complexCustomComponent = createCustomElement(angularComponent, { injector: injector });
    customElements.define(options.selector, complexCustomComponent);
    Components.setComponent(options.type, formioClass);
}
