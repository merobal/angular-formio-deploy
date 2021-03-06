/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T, V
 */
export function ComponentOptions() { }
if (false) {
    /** @type {?|undefined} */
    ComponentOptions.prototype.validate;
}
/**
 * @record
 */
export function FormioRefreshValue() { }
if (false) {
    /** @type {?|undefined} */
    FormioRefreshValue.prototype.property;
    /** @type {?|undefined} */
    FormioRefreshValue.prototype.value;
    /** @type {?|undefined} */
    FormioRefreshValue.prototype.form;
    /** @type {?|undefined} */
    FormioRefreshValue.prototype.submission;
}
/**
 * @record
 */
export function AccessSetting() { }
if (false) {
    /** @type {?} */
    AccessSetting.prototype.type;
    /** @type {?} */
    AccessSetting.prototype.roles;
}
/**
 * @record
 */
export function FormioForm() { }
if (false) {
    /** @type {?|undefined} */
    FormioForm.prototype.title;
    /** @type {?|undefined} */
    FormioForm.prototype.display;
    /** @type {?|undefined} */
    FormioForm.prototype.name;
    /** @type {?|undefined} */
    FormioForm.prototype.path;
    /** @type {?|undefined} */
    FormioForm.prototype.type;
    /** @type {?|undefined} */
    FormioForm.prototype.project;
    /** @type {?|undefined} */
    FormioForm.prototype.template;
    /** @type {?|undefined} */
    FormioForm.prototype.components;
    /** @type {?|undefined} */
    FormioForm.prototype.tags;
    /** @type {?|undefined} */
    FormioForm.prototype.access;
    /** @type {?|undefined} */
    FormioForm.prototype.submissionAccess;
}
/**
 * @record
 */
export function AlertsOptions() { }
if (false) {
    /** @type {?} */
    AlertsOptions.prototype.submitMessage;
}
/**
 * @record
 */
export function ErrorsOptions() { }
if (false) {
    /** @type {?} */
    ErrorsOptions.prototype.message;
}
var FormioError = /** @class */ (function () {
    function FormioError(message, component) {
        this.message = message;
        this.component = component;
    }
    return FormioError;
}());
export { FormioError };
if (false) {
    /** @type {?} */
    FormioError.prototype.message;
    /** @type {?} */
    FormioError.prototype.component;
}
/**
 * @record
 */
export function FormioHookOptions() { }
if (false) {
    /** @type {?} */
    FormioHookOptions.prototype.beforeSubmit;
}
/**
 * @record
 */
export function FormioOptions() { }
if (false) {
    /** @type {?|undefined} */
    FormioOptions.prototype.errors;
    /** @type {?|undefined} */
    FormioOptions.prototype.alerts;
    /** @type {?|undefined} */
    FormioOptions.prototype.disableAlerts;
    /** @type {?|undefined} */
    FormioOptions.prototype.i18n;
    /** @type {?|undefined} */
    FormioOptions.prototype.fileService;
    /** @type {?|undefined} */
    FormioOptions.prototype.hooks;
}
/**
 * @record
 */
export function FormioCustomComponentInfo() { }
if (false) {
    /** @type {?} */
    FormioCustomComponentInfo.prototype.type;
    /** @type {?} */
    FormioCustomComponentInfo.prototype.selector;
    /** @type {?|undefined} */
    FormioCustomComponentInfo.prototype.emptyValue;
    /** @type {?|undefined} */
    FormioCustomComponentInfo.prototype.extraValidators;
    /** @type {?|undefined} */
    FormioCustomComponentInfo.prototype.editForm;
}
/**
 * @record
 * @template T
 */
export function FormioCustomComponent() { }
if (false) {
    /** @type {?} */
    FormioCustomComponent.prototype.value;
    /** @type {?} */
    FormioCustomComponent.prototype.valueChange;
    /** @type {?} */
    FormioCustomComponent.prototype.disabled;
}
