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
    }
    TextService.prototype.setTextValue = function (data) {
        this.nodeArray = data;
        this.dataStringSource.next(data);
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
    TextService = __decorate([
        core_1.Injectable()
    ], TextService);
    return TextService;
}());
exports.TextService = TextService;
//# sourceMappingURL=text.service.js.map