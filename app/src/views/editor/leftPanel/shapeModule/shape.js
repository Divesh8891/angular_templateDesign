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
var text_service_1 = require("../../../../service/text.service");
var shapeModuleComponent = (function () {
    function shapeModuleComponent(_textService) {
        this._textService = _textService;
    }
    shapeModuleComponent.prototype.loadOnProduct = function (event) {
        var a = new Date();
        this.randomNumber = a.getTime();
        var ratio = (parseInt(event.target.width) / parseInt(event.target.height)).toFixed(1);
        this._textService.setObjArray({
            'id': this.randomNumber,
            'oriWidth': event.target.naturalWidth,
            'oriHeight': event.target.naturalHeight,
            'ratio': ratio,
            'width': event.target.naturalWidth,
            'height': event.target.naturalHeight,
            'value': event.target.attributes[0].value,
            'type': 'shape',
            'rotate': 0
        });
        setTimeout(function () {
            var userArray = this._textService.objArray;
            var currentImage = this.designcontainerRef.children[1].lastElementChild;
            console.log(currentImage);
            var currentW = this.designcontainerRef.style.width;
            var currentH = this.designcontainerRef.style.height;
            this._textService.setImageDimension(currentImage, '', '', userArray[userArray.length - 1], this.designcontainerRef);
        }.bind(this), 500);
    };
    shapeModuleComponent.prototype.ngOnInit = function () {
        console.log("shape-init");
        this.designcontainerRef = this._textService.designcontainerRef.nativeElement;
    };
    return shapeModuleComponent;
}());
shapeModuleComponent = __decorate([
    core_1.Component({
        selector: '[shapeModule]',
        template: " <div>\n                   <img src=\"app/assets/images/Shapes/circle.png\" (click)=\"loadOnProduct($event)\"/> \n                </div>\n                <div>\n                    <img src=\"app/assets/images/Shapes/circle.png\" /> \n                </div>\n                      "
    }),
    __metadata("design:paramtypes", [text_service_1.TextService])
], shapeModuleComponent);
exports.shapeModuleComponent = shapeModuleComponent;
//# sourceMappingURL=shape.js.map