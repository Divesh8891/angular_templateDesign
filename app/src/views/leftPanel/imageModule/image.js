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
var text_service_1 = require("../../../service/text.service");
var imageModuleComponent = (function () {
    // setAspectRaion() {
    //     console.log("setAspectRatio")
    //     let $currentObj = this._textService.currentObj.nativeElement;
    //     let objArray = this._textService.objArray;
    //     let currentObjElememtID = parseInt(this._textService.currentObj.nativeElement.id);
    //     for (let j = 0; j < objArray.length; j++) {
    //         console.log()
    //         if (objArray[j].id == currentObjElememtID) {
    //             $currentObj.style["height"] = objArray[j].width * objArray[j].ratio + 'px';
    //             this._textService.handlerRef.nativeElement.style.height = (objArray[j].width * objArray[j].ratio) + 10 + 'px';
    //             objArray[j].height = objArray[j].width * objArray[j].ratio;
    //         }
    //     }
    // }
    function imageModuleComponent(_textService) {
        this._textService = _textService;
        this.imagePanelTitle = "Image";
        this.customClass = "custom-image col-xs-12";
    }
    imageModuleComponent.prototype.onRemoved = function (event) {
        console.log(event);
    };
    imageModuleComponent.prototype.onUploadFinished = function (data) {
        var me = this;
        this._textService.setSliderValue(data.imageDimension.width, 'minV');
        this._textService.setSliderValue(parseInt(this._textService.designcontainerRef.nativeElement.style.width), 'maxV');
        var a = new Date();
        this.randomNumber = a.getTime();
        var ratio = (parseInt(data.imageDimension.width) / parseInt(data.imageDimension.height)).toFixed(1);
        this._textService.setTextValue({ 'text': '', 'randomNumber': this.randomNumber, 'imgSrc': data.fileHolder.src });
        this._textService.updateObjArray({ 'id': this.randomNumber, 'oriWidth': data.imageDimension.width, 'oriHeight': data.imageDimension.height, 'width': data.imageDimension.width, 'height': data.imageDimension.height, 'ratio': ratio });
        setTimeout(function () {
            // console.log(me._textService.designcontainerRef.nativeElement.children[0].lastElementChild)
            var userArray = me._textService.objArray;
            var currentImage = me._textService.designcontainerRef.nativeElement.children[0].lastElementChild;
            var currentW = me._textService.designcontainerRef.nativeElement.style.width;
            var currentH = me._textService.designcontainerRef.nativeElement.style.height;
            me._textService.setImageDimension(currentImage, '', '', userArray[userArray.length - 1]);
        }, 100);
    };
    imageModuleComponent.prototype.handleImageLoad = function (event) {
        console.log(event);
    };
    imageModuleComponent = __decorate([
        core_1.Component({
            selector: 'image-module',
            template: " \n                  <section class=\"ImageModule col-xs-12 p-0 module\">\n                        <h5 class=\"option-heading col-xs-12 m-0 p-0\">{{imagePanelTitle}}</h5>\n                        <div class=\"seperator\"></div>\n                        <image-upload class={{customClass}} [max]=\"100\" [buttonCaption]=\"'Select Images'\" [extensions]=\"['jpeg','jpg','png','gif']\" (onFileUploadFinish)=\"onUploadFinished($event)\"></image-upload>\n                         <!--linkAsButton [parentClass]=\"'col-xs-12'\" [applyClass]=\"'set-aspect-ratio btn btn-lrg'\" [btnText]=\"'Set Aspect Ratio'\"  (click)=setAspectRaion($event)></linkAsButton-->\n                    </section>\n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], imageModuleComponent);
    return imageModuleComponent;
}());
exports.imageModuleComponent = imageModuleComponent;
//# sourceMappingURL=image.js.map