"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var text_service_1 = require("../../service/text.service");
var angular2_color_picker_1 = require("angular2-color-picker");
var colorBoxComponent = (function () {
    function colorBoxComponent(cpService, _textService) {
        this.cpService = cpService;
        this._textService = _textService;
        this.color = "#127bdc";
    }
    colorBoxComponent.prototype.pickcolor = function (event) {
        this.currentObj = this._textService.currentObj;
        console.log(event);
        var styleProp = this.elements.nativeElement.dataset['call'];
        var pickedColorValue = this._textService.hexToRgbA(event.target.dataset['colorvalue'], 80);
        this.elements.nativeElement.dataset['cValue'] = event.target.dataset['colorvalue'];
        // console.log(pickedColorValue)
        if (this.elements.nativeElement.dataset['module'] === "") {
            if (styleProp === 'textShadow') {
                this.elements.nativeElement.dataset['textShadow'] = pickedColorValue;
                this.currentObj.nativeElement.style[styleProp] = this.elements.nativeElement.dataset['textShadow'] + ' 0px 0px ' + this.currentObj.nativeElement.style['strokeWidth'];
            }
            else {
                this.currentObj.nativeElement.style[styleProp] = pickedColorValue;
            }
            event.target.offsetParent.style.display = 'none';
        }
        else {
            this.designcontainerRef = this._textService.designcontainerRef;
            this.designcontainerRef.nativeElement.firstElementChild.attributes['data-bg'].value = '';
            // console.log(this.hexToRgbA(event.target.dataset['colorvalue']), styleProp)
            this.designcontainerRef.nativeElement.firstElementChild.style[styleProp] = pickedColorValue;
            this.elements.nativeElement.dataset['module'] = '';
        }
        this.closeColorBox();
    };
    colorBoxComponent.prototype.chooseValueFormPicker = function (event) {
        console.log(event);
    };
    colorBoxComponent.prototype.closeColorBox = function () {
        this.colorBoxObj = this._textService.colorBoxRef;
        this.colorBoxObj.nativeElement.style.display = "none";
    };
    colorBoxComponent.prototype.ngOnInit = function () {
        this.colorArray = ["#000000", "#54585A", "#9fcece", "#8E9089", "#C7C9C7", "#f5d56c", "#347574", "#FFFFFF", "#CB333B", "#E53C2E", "#FF3EB3", "#C5299B", "#F57EB6", "#FABBCB", "#D9C89E", "#F9E547", "#FFB81C", "#FF6A13", "#FDDA24", "#B58500", "#7B4931", "#9D2235", "#7E2D40", "#006747", "#8EDD65", "#154734", "#00843D", "#827A04", "#9ADBE8", "#3EB1C8", "#0254A2", "#003087", "#13294B", "#CBA3D8", "#3D0182"];
        this._textService.setColorBoxRef(this.elements);
    };
    __decorate([
        core_1.ViewChild('colorBox'),
        __metadata("design:type", Object)
    ], colorBoxComponent.prototype, "elements", void 0);
    __decorate([
        core_1.ViewChild('allColorBox'),
        __metadata("design:type", Object)
    ], colorBoxComponent.prototype, "allColorBox", void 0);
    colorBoxComponent = __decorate([
        core_1.Component({
            selector: 'color-box',
            template: "\n  <ul class=\"custom-color-picker\" data-call=\"dasd\" data-module=\"\" data-cValue=\"\" #colorBox>\n    <li *ngFor=\"let colorVal of colorArray\">\n      <span [style.backgroundColor]=\"colorVal\"  [attr.data-colorValue]=\"colorVal\" (click)=\"pickcolor($event)\"></span>\n    </li>\n    <li>\n<span #ignoredInput [(colorPicker)]=\"color\" \n      [cpPosition]=\"'right'\"\n      [style.color]=\"color\"\n      [cpPositionOffset]=\"'50%'\"\n      [cpPositionRelativeToArrow]=\"true\" class=\"more-color\" [cpPresetColors]=\"colorArray\"\n       [cpOKButton]=\"true\"\n       [cpSaveClickOutside]=\"false\"\n       [cpOKButtonClass]= \"'btn btn-primary btn-xs'\"\n\n        \n      >Open Picker</span>\n\n\n      <!--a class=\"more-color pull-right\" (click)=\"openColorPicker($event)\">More color</a-->\n      <a class=\"default pull-left\" href=\"javascript:void(0)\" (click)=\"closeColorBox()\">No color</a>\n    </li>\n  </ul>\n\n                    \n     "
        }),
        __metadata("design:paramtypes", [angular2_color_picker_1.ColorPickerService, text_service_1.TextService])
    ], colorBoxComponent);
    return colorBoxComponent;
}());
exports.colorBoxComponent = colorBoxComponent;
//# sourceMappingURL=colorBox.js.map