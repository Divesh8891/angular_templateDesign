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
        this.users = [];
    }
    TextService.prototype.setTextValue = function (data) {
        var me = this;
        this.users.push(new User(data.text, data.randomNumber, data.imgSrc));
        console.log(this.users);
        this.dataStringSource.next(me.users);
    };
    TextService.prototype.getTextValue = function () {
        return this.dataStringSource.asObservable();
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
    TextService.prototype.setAspectRaion = function () {
        var $container = this.designcontainerRef.nativeElement;
        var $containerW = parseInt($container.style["width"]);
        var $containerH = parseInt($container.style["height"]);
        var $currentObj = this.currentObj;
        var $currentObjRatio = parseFloat($currentObj.nativeElement.dataset['ratio']);
        console.log($containerW, $containerH, $currentObjRatio);
        if ($containerW > $containerH) {
            $currentObj.nativeElement.style["width"] = $containerH + 'px';
        }
        console.log($currentObj.nativeElement.style["width"], $currentObjRatio);
        $currentObj.nativeElement.style["height"] = parseInt($currentObj.nativeElement.style["width"]) / $currentObjRatio + 'px';
        this.handlerRef.nativeElement.style.width = parseInt($currentObj.nativeElement.style["width"]) + 10 + 'px';
        this.handlerRef.nativeElement.style.height = parseInt($currentObj.nativeElement.style["height"]) + 10 + 'px';
    };
    TextService = __decorate([
        core_1.Injectable()
    ], TextService);
    return TextService;
}());
exports.TextService = TextService;
var User = (function () {
    function User(text, randomNumber, src) {
        this.text = text;
        this.randomNumber = randomNumber;
        this.src = src;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=text.service.js.map