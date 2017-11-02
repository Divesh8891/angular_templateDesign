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
        console.log(this.dummyText);
        this.textWidth = this.dummyText.nativeElement.offsetWidth;
        this.textHeight = this.dummyText.nativeElement.offsetHeight;
        var a = new Date();
        this.randomNumber = a.getTime();
        var ratio = this.textWidth / this.textHeight;
        this.textAreaValue === '' ? alert(this.textAreaValue) : this._textService.setObjArray({
            'id': this.randomNumber,
            'oriWidth': this.textWidth,
            'oriHeight': this.textHeight,
            'ratio': ratio,
            'width': this.textWidth,
            'height': this.textHeight,
            'value': this.textAreaValue,
            'type': 'text'
        });
        console.log(this.textWidth);
        this._textService.setSliderValue(this.textWidth, 'minV');
        this._textService.setSliderValue(parseInt(this.designcontainerRef.style.width), 'maxV');
    };
    textAreaComponent.prototype.updateText = function (event) {
        //console.log(event)
        var currentObj = this.currentObjRef;
        if (currentObj != undefined) {
            var handlerRef = this.handlerRef;
            this.textWidth = this.dummyText.nativeElement.offsetWidth;
            this.textHeight = this.dummyText.nativeElement.offsetHeight;
            var objArray = this._textService.objArray;
            var currentObjElememtID = currentObj.id;
            for (var j = 0; j < objArray.length; j++) {
                if (objArray[j].type == 'text' && objArray[j].id == currentObjElememtID) {
                    objArray[j].value = event.target.value;
                    objArray[j].width = this.textWidth;
                    this._textService.setSliderValue(objArray[j].width, 'minV');
                    currentObj.style.width = this._textService.pixelToPercentage((this.textWidth), this.designcontainerRef.style["width"]);
                    handlerRef.style.width = objArray[j].width + 12 + 'px';
                }
            }
        }
    };
    textAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._textService.designContainerController('get').subscribe(function (data) {
            _this.designcontainerRef = data;
            _this.designcontainerRef = _this.designcontainerRef.nativeElement;
        });
        this._textService.currentObjController('getCurrentObj', '', '').subscribe(function (data) {
            _this.currentObjRef = data;
            if (_this.currentObjRef == undefined) {
                _this.currentObjRef = undefined;
            }
            else {
                _this.currentObjRef = _this.currentObjRef.nativeElement;
            }
        });
        this._textService.currentObjController('getHandlerObj', '', '').subscribe(function (data) {
            _this.handlerRef = data;
            _this.handlerRef = _this.handlerRef.nativeElement;
        });
    };
    __decorate([
        core_1.ViewChild('dummyText'),
        __metadata("design:type", Object)
    ], textAreaComponent.prototype, "dummyText", void 0);
    textAreaComponent = __decorate([
        core_1.Component({
            selector: '[textArea]',
            template: " \n                    <textarea [placeholder]=\"textPlaceholder\" [class]=\"textAreaClass\" [(ngModel)]= \"textAreaValue\" (input)=\"updateText($event)\"></textarea>\n                    <button class=\"btn btn-lrg\" (click)=\"addtext($event)\">Add</button>\n                    <p #dummyText style=\"visibility:hidden;position:absolute;top:-100%\" class=\"m0\">{{textAreaValue}}</p>\n                "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], textAreaComponent);
    return textAreaComponent;
}());
exports.textAreaComponent = textAreaComponent;
//# sourceMappingURL=textArea.js.map