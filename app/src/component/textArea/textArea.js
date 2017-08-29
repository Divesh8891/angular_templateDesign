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
var textAreaComponent = (function () {
    function textAreaComponent(_textService) {
        this._textService = _textService;
        this.textAreaClass = 'js-text-val text-val';
        this.textPlaceholder = 'Add Text';
    }
    textAreaComponent.prototype.addtext = function (event) {
        var a = new Date();
        this.randomNumber = a.getTime();
        this.textAreaValue === '' ? alert(this.textAreaValue) : this._textService.setTextValue({ 'text': this.textAreaValue, 'randomNumber': this.randomNumber, 'imgSrc': '' });
        var textWidth = this.dummyText.nativeElement.offsetWidth;
        var textHeight = this.dummyText.nativeElement.offsetHeight;
        var ratio = textWidth / textHeight;
        this._textService.updateObjArray({ 'id': this.randomNumber, 'oriWidth': textWidth, 'oriHeight': textHeight, 'width': textWidth, 'height': textHeight, 'ratio': ratio });
        this._textService.setSliderValue(textWidth, 'minV');
        this._textService.setSliderValue(parseInt(this._textService.designcontainerRef.nativeElement.style.width), 'maxV');
    };
    __decorate([
        core_1.ViewChild('dummyText'),
        __metadata("design:type", Object)
    ], textAreaComponent.prototype, "dummyText", void 0);
    textAreaComponent = __decorate([
        core_1.Component({
            selector: '[textArea]',
            template: " \n                    <textarea [placeholder]=\"textPlaceholder\" [class]=\"textAreaClass\" [(ngModel)]= \"textAreaValue\"></textarea>\n                    <button class=\"btn btn-lrg\" (click)=\"addtext($event)\">Add</button>\n                    <p #dummyText style=\"visibility:hidden;position:absolute;top:-100%\" class=\"m0\">{{textAreaValue}}</p>\n                "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], textAreaComponent);
    return textAreaComponent;
}());
exports.textAreaComponent = textAreaComponent;
//# sourceMappingURL=textArea.js.map