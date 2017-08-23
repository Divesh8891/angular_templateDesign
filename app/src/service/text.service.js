"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var TextService = (function () {
    function TextService() {
        this.dataStringSource = new Subject_1.Subject();
        this.sliderMinValue = new Subject_1.Subject();
        this.sliderMaxValue = new Subject_1.Subject();
        this.users = [];
    }
    TextService.prototype.setTextValue = function (data) {
        var me = this;
        this.users.push(new User(data.text, data.randomNumber, data.imgSrc, data.width, data.height, data.ratio));
        this.dataStringSource.next(me.users);
    };
    TextService.prototype.getTextValue = function () {
        return this.dataStringSource.asObservable();
    };
    TextService.prototype.setSliderValue = function (data, type) {
        if (type === 'minV') {
            this.sliderMinValue.next(data);
        }
        if (type === 'maxV') {
            this.sliderMaxValue.next(data);
        }
    };
    TextService.prototype.getSliderMinValue = function () {
        return this.sliderMinValue.asObservable();
    };
    TextService.prototype.getSliderMaxValue = function () {
        return this.sliderMaxValue.asObservable();
    };
    TextService.prototype.setCurrentObj = function (currentObjData, handlerData) {
        this.currentObj = currentObjData;
        this.handlerRef = handlerData;
    };
    TextService.prototype.setColorBoxRef = function (data) {
        this.colorBoxRef = data;
    };
    TextService.prototype.setDesigncontainerRef = function (data) {
        this.designcontainerRef = data;
    };
    TextService.prototype.setCanvasElem = function (data) {
        this.canvasElem = data;
    };
    TextService.prototype.setAspectRaion = function (currentObj, containerW, containerH) {
        console.log("setAspectRatio");
        // let $container = this.designcontainerRef.nativeElement;
        // let $currentObj = this.currentObj.nativeElement;
        var $currentObj = currentObj;
        var $containerW = parseInt(containerW);
        var $containerH = parseInt(containerH);
        var $currentObjRatio = parseFloat($currentObj.dataset['ratio']);
        // console.log($containerW, $containerH, $currentObjRatio)
        if ($containerW > $containerH) {
            $currentObj.style["width"] = this.pixelToPercentage($containerH, $containerW);
            $currentObj.dataset["width"] = $containerH;
        }
        var objW = ((parseFloat($currentObj.style.width) * $containerW) / 100).toFixed(1);
        $currentObj.style["height"] = objW / $currentObjRatio + 'px';
        $currentObj.dataset["height"] = Math.round(objW / $currentObjRatio);
        if (this.handlerRef != undefined) {
            this.handlerRef.nativeElement.style.width = parseInt($currentObj.dataset["width"]) + 10 + 'px';
            this.handlerRef.nativeElement.style.height = parseInt($currentObj.dataset["height"]) + 10 + 'px';
        }
    };
    TextService.prototype.pixelToPercentage = function (objVal, containerVal) {
        return (((parseInt(objVal) / parseInt(containerVal)) * 100).toFixed(1)) + '%';
    };
    TextService = __decorate([
        core_1.Injectable()
    ], TextService);
    return TextService;
}());
exports.TextService = TextService;
var User = (function () {
    function User(text, randomNumber, src, width, height, ratio) {
        this.text = text;
        this.randomNumber = randomNumber;
        this.src = src;
        this.width = width;
        this.height = height;
        this.ratio = ratio;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=text.service.js.map