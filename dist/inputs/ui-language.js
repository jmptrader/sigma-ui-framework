var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./ui-input-group", "../utils/ui-utils", "../utils/ui-application", "../utils/ui-event", "../utils/ui-constants"], function (require, exports, aurelia_framework_1, ui_input_group_1, ui_utils_1, ui_application_1, ui_event_1, ui_constants_1) {
    "use strict";
    var UILanguage = (function (_super) {
        __extends(UILanguage, _super);
        function UILanguage(element, app) {
            _super.call(this, element);
            this.value = '';
            this.languages = [];
            this.disabled = false;
            this.__errors = {};
        }
        UILanguage.prototype.attached = function () {
            var _this = this;
            _super.prototype.attached.call(this);
            ui_event_1.UIEvent.queueTask(function () {
                _this.__tethered = new ui_utils_1.Tether({
                    element: _this.__list,
                    target: _this.__input,
                    attachment: 'top left',
                    targetAttachment: 'bottom left',
                    constraints: [
                        {
                            to: 'scrollParent',
                            attachment: 'together'
                        },
                        {
                            to: 'window',
                            attachment: 'together'
                        }
                    ]
                });
                _this.languagesChanged(_this.languages);
                _this.valueChanged(_this.value);
            });
        };
        UILanguage.prototype.detached = function () {
            this.__tethered.element.remove();
            this.__tethered.destroy();
        };
        UILanguage.prototype.valueChanged = function (newValue) {
            if (newValue === null)
                return this.__value = '';
            var l = ui_utils_1._.find(this.__languages, { 'id': newValue }) || null;
            this.__value = l === null ? '' : l.name;
        };
        UILanguage.prototype.formatter = function (evt) {
        };
        UILanguage.prototype.languagesChanged = function (newValue) {
            var s = [], a = [];
            if (isEmpty(newValue)) {
                a = ui_utils_1._.clone(UILanguage.LANGUAGES);
            }
            else {
                var isMap_1 = newValue instanceof Map;
                ui_utils_1._.forEach(UILanguage.LANGUAGES, function (l) {
                    if (ui_utils_1._.isArray(newValue))
                        (newValue.indexOf(l.id) ? s.push(l) : a.push(l));
                    else if (!isMap_1)
                        (Object.keys(newValue).indexOf(l.id) > -1 ? s.push(l) : a.push(l));
                    else if (isMap_1)
                        (newValue.has(l.id) ? s.push(l) : a.push(l));
                });
            }
            this.__languages = s;
            this.__available = a;
        };
        UILanguage.prototype.clearErrors = function () {
            this.__errors = {};
        };
        UILanguage.prototype.addError = function (key) {
            this.__errors[key] = true;
        };
        UILanguage.prototype.__showFocus = function () {
            if (this.__focus)
                return this.__focus = false;
            this.__input.focus();
            this.__focus = true;
        };
        UILanguage.prototype.__gotFocus = function (show) {
            if (!show)
                return;
            this.__focus = true;
            this.__tethered.element.style.minWidth = this.__tethered.target.offsetWidth + 'px';
            this.__tethered.position();
        };
        UILanguage.prototype.__lostFocus = function () {
            var _this = this;
            setTimeout(function () { return _this.__focus = false; }, 500);
        };
        UILanguage.prototype.__add = function (lang) {
            this.__languages.push(ui_utils_1._.remove(this.__available, { 'id': lang.id })[0]);
            ui_event_1.UIEvent.fireEvent('add', this.element, lang.id);
            this.__select(lang);
            this.__focus = false;
        };
        UILanguage.prototype.__select = function (lang) {
            if (ui_event_1.UIEvent.fireEvent('beforeselect', this.element, lang.id) !== false) {
                this.value = lang.id;
                this.__value = lang.name;
                ui_event_1.UIEvent.fireEvent('select', this.element, lang.id);
            }
            this.__focus = false;
        };
        UILanguage.prototype.__remove = function (lang) {
            this.__available.push(ui_utils_1._.remove(this.__languages, { 'id': lang.id })[0]);
            if (this.__languages == null)
                this.__languages = [];
            ui_event_1.UIEvent.fireEvent('delete', this.element, lang.id);
            if (this.value == lang.id)
                this.__select(this.__languages[0] || { id: '' });
            this.__focus = false;
        };
        UILanguage.LANGUAGES = ui_constants_1.UIConstants.Languages;
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', String)
        ], UILanguage.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Object)
        ], UILanguage.prototype, "languages", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Boolean)
        ], UILanguage.prototype, "disabled", void 0);
        UILanguage = __decorate([
            aurelia_framework_1.autoinject,
            aurelia_framework_1.customElement('ui-language'), 
            __metadata('design:paramtypes', [Element, ui_application_1.UIApplication])
        ], UILanguage);
        return UILanguage;
    }(ui_input_group_1.UIInputGroup));
    exports.UILanguage = UILanguage;
});
