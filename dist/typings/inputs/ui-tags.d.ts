import { UIListBehaviour } from "./ui-listing";
export declare class UITags extends UIListBehaviour {
    __tagInput: any;
    __ignoreChange: any;
    __subscribeSearch: any;
    __tags: any[];
    __onlyAvailable: boolean;
    constructor(element: Element);
    /**
     * @property    value
     * @type        string
     */
    value: string;
    /**
     * @property    checked
     * @type        boolean
     */
    checked: boolean;
    /**
     * @property    disabled
     * @type        boolean
     */
    disabled: boolean;
    /**
     * @property    readonly
     * @type        boolean
     */
    readonly: boolean;
    /**
     * @property    prefix-icon
     * @type        string
     */
    prefixIcon: string;
    /**
     * @property    prefix-text
     * @type        string
     */
    prefixText: string;
    /**
     * @property    suffix-icon
     * @type        string
     */
    suffixIcon: string;
    /**
     * @property    suffix-text
     * @type        string
     */
    suffixText: string;
    /**
     * @property    button-icon
     * @type        string
     */
    buttonIcon: string;
    /**
     * @property    button-text
     * @type        string
     */
    buttonText: string;
    /**
     * @property    help-text
     * @type        string
     */
    helpText: string;
    /**
     * @property    placeholder
     * @type        string
     */
    placeholder: string;
    /**
     * @property    dir
     * @type        string
     */
    dir: string;
    /**
     * @property    option
     * @type        string
     */
    options: any;
    /**
     * @property    value-property
     * @type        string
     */
    valueProperty: string;
    /**
     * @property    display-property
     * @type        string
     */
    displayProperty: any;
    /**
     * @property    icon-property
     * @type        string
     */
    iconProperty: any;
    /**
     * @property    icon-class
     * @type        string
     */
    iconClass: any;
    /**
     * @property    empty-text
     * @type        string
     */
    emptyText: string;
    bind(): void;
    attached(): void;
    detached(): void;
    valueChanged(newValue: any): void;
    optionsChanged(newValue: any): void;
    readonlyChanged(): void;
    disable(disabled?: any): void;
    __select(item: any): void;
    __deselect(item: any): void;
    __clicked($event: any): void;
    __gotFocus(show: any): void;
    __lostFocus(): void;
    inputClicked(evt: any): void;
    formatter(): string;
    __scrollIntoView(): void;
}
