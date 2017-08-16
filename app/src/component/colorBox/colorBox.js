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
var colorBoxComponent = (function () {
    function colorBoxComponent(_textService) {
        this._textService = _textService;
    }
    colorBoxComponent.prototype.pickcolor = function (event) {
        this.currentObj = this._textService.currentObj;
        var styleProp = this.elements.nativeElement.dataset['call'];
        var pickedColorValue = event.target.style.backgroundColor;
        if (styleProp === 'textShadow') {
            this.elements.nativeElement.dataset['textShadow'] = pickedColorValue;
            // console.log(this.currentObj)
            // console.log(this.currentObj.nativeElement.style['strokeWidth'])
            this.currentObj.nativeElement.style[styleProp] = this.elements.nativeElement.dataset['textShadow'] + ' 0px 0px ' + this.currentObj.nativeElement.style['strokeWidth'];
        }
        else {
            this.currentObj.nativeElement.style[styleProp] = pickedColorValue;
        }
        event.target.offsetParent.style.display = 'none';
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
    colorBoxComponent = __decorate([
        core_1.Component({
            selector: 'color-box',
            template: "\n  <ul class=\"custom-color-picker\" data-call=\"dasd\" #colorBox>\n    <li *ngFor=\"let colorVal of colorArray\">\n      <span [style.backgroundColor]=\"colorVal\"  (click)=\"pickcolor($event)\"></span>\n    </li>\n    <li>\n      <a href=\"javascript:text.openColorPicker()\" class=\"more-color pull-right\">More color</a>\n      <a class=\"default pull-left\" href=\"javascript:void(0)\" (click)=\"closeColorBox()\">No color</a>\n    </li>\n  </ul>\n                    \n     "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], colorBoxComponent);
    return colorBoxComponent;
}());
exports.colorBoxComponent = colorBoxComponent;
//# sourceMappingURL=colorBox.js.map