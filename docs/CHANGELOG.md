<a name="1.0.4"></a>
## [1.0.4](https://github.com/sigmaframeworks/sigma-ui-framework/compare/1.0.1...v1.0.4) (2016-10-03)

* Fixed bug for email input on chrome
* Fixed flexbox grow/shrink issue on chrome/safari
* Added fieldset wrapper

<a name="1.0.3"></a>
## [1.0.3](https://github.com/sigmaframeworks/sigma-ui-framework/compare/1.0.1...v1.0.3) (2016-10-02)

* __UIDatagrid__: Updated button-menu to allow callback for each record
* Separated date formatter to date and datetime
* Fixed dropdown z-index
* Fixed date input clear value


<a name="1.0.2"></a>
## [1.0.2](https://github.com/sigmaframeworks/sigma-ui-framework/compare/1.0.1...v1.0.2) (2016-09-30)

* Fixed various firefox issues

<a name="1.0.1"></a>
## [1.0.1](https://github.com/sigmaframeworks/sigma-ui-framework/compare/1.0.0...v1.0.1) (2016-09-30)

* Added tether library for floating dropdowns
* __UIPhone__: Fixed input formatting
* __UIButton__: Fixed `no-shadow` stylings


<a name="1.0.0"></a>
# [1.0.0](https://github.com/sigmaframeworks/sigma-ui-framework/compare/1.0.0-preview...v1.0.0) (2016-09-18)

* __UIButton__: Added `no-shadow` optional attribute
* __UIUtils__: Fixed toast message `autoHide`, 0 will disabled auto-hide
* __UIUtils__: Return `promise` for alert also
* __UIUtils__: Promise for confirm resolves with boolean 


<a name="1.0.0-preview"></a>
# 1.0.0 (2016-09-09)

* __UIButton__: Set active for selected dropdown option
* __UIButton__: Update value for dropdown type
* __UIForm__: Fixed auto-grid layout
* __UIMarkdown__: Fixed issue when value not assigned


<a name="0.0.4-beta.16"></a>
## 0.0.4-beta.16 (2016-09-09)

* __UIChart__: Removed reference to AmCharts
* __UIInput__: Fixed caret positioning
* __UICombo__, __UITag__: Fixed dropdown positioning
* __UILanguage__: Updated selected languages valueChange to accept Array, Object or Map
* Moved extra common scripts to `sigma-libs`


<a name="0.0.4-beta.6"></a>
## 0.0.4-beta.6 (2016-09-04)

* __UIChart__: Remove dependency on amCharts
* __UIDatagrid__: Fixed reset scrollTop when data-list changes
* __UIDatagrid__: Fixed calculation of table width in chrome happens before columns widths are calculated
* __UIDatagrid__: Add column summary callback option
* __UIForm__, __UIDialog__: Updated focusable element query
* __UIToolbar__: Removes `z-index`
* __Sass__: Remove inline_font_files from `_glyph.scss` and `_files.scss`, causing the css to be ~2.5MB
* Update elements with attached method having `queueMicroTask` to `queueTask`


<a name="0.0.4-beta.5"></a>
## 0.0.4-beta.5 (2016-09-01)

* __UIDisplay__: Added display input, for input styled static text display
* __UIDatagrid__: Added aurelia-ui-virtualization for big data grid
* __UIDatagrid__: Fixed sorting and resizing issues
* __UIPager__: Fixed total pages display


<a name="0.0.3-beta.4"></a>
## 0.0.3-beta.4 (2016-08-31)

* __UIHttpService__: Fixed file upload
* __UISwitch__: Added option to set on/off values
* __UILanguage__: Added ability to indicate errors
* Added language validation rule


<a name="0.0.2-beta.3"></a>
## 0.0.2-beta.3 (2016-08-30)

* Updated validation error indicator
* Fixed datagrid layout issue
* Updated stylings for button group and switch


<a name="0.0.1-beta.2"></a>
## 0.0.1-beta.2 (2016-08-29)

* Added support to use em/rem values for Dialog width/height and Data-Column widths
* Updated validation-renderer


<a name="0.0.1-beta.1"></a>
## 0.0.1-beta.1 (2016-08-23)

* Initial release
* Add chain-able framework plugin config.
* Updated UIViewport customization
* Update UIButton with dropdown menu
