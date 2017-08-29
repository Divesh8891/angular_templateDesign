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
        this.objArraySource = new Subject_1.Subject();
        this.sliderMinValue = new Subject_1.Subject();
        this.sliderMaxValue = new Subject_1.Subject();
        this.leftAlignmentValue = new Subject_1.Subject();
        this.topAlignmentValue = new Subject_1.Subject();
        this.users = [];
        this.objArray = [];
        this.setImageDimension = function (currentObj, containerW, containerH, objArray) {
            console.log("setdimension");
            // console.log(currentObj, containerW, containerH, objArray)
            var maxWidth = parseInt(containerW); // Max width for the image
            var maxHeight = parseInt(containerH); // Max height for the image
            if (containerW === '') {
                maxWidth = parseInt(this.designcontainerRef.nativeElement.style.width); // Max width for the image
            }
            if (containerH === '') {
                maxHeight = parseInt(this.designcontainerRef.nativeElement.style.height);
            }
            var localCurrentObj = currentObj;
            // console.log(maxWidth,maxHeight)
            var ratio = 0; // Used for aspect ratio
            var width = objArray.width; // Current image width
            var height = objArray.height; // Current image height
            // console.log((maxWidth), maxHeight, width, height);
            if (width > maxWidth) {
                ratio = maxWidth / width; // get ratio for scaling image
                localCurrentObj.style["width"] = this.pixelToPercentage(maxWidth, maxWidth);
                localCurrentObj.style["height"] = this.pixelToPercentage((height * ratio), maxHeight);
                height = height * ratio; // Reset height to match scaled image
                width = width * ratio; // Reset width to match scaled image
            }
            // Check if current height is larger than max
            if (height > maxHeight) {
                ratio = maxHeight / height; // get ratio for scaling image
                localCurrentObj.style["width"] = this.pixelToPercentage((width * ratio), maxWidth);
                localCurrentObj.style["height"] = this.pixelToPercentage(maxHeight, maxHeight);
                width = width * ratio; // Reset width to match scaled image
                height = height * ratio; // Reset height to match scaled image
            }
            console.log(width, height);
            objArray.width = width;
            objArray.height = height;
            // this.textHandler.nativeElement.style.width = parseInt(localCurrentObj.offsetWidth) + 10 + 'px';
            // this.textHandler.nativeElement.style.height = parseInt(localCurrentObj.offsetHeight) + 10 + 'px';
        };
    }
    TextService.prototype.setTextValue = function (data) {
        var me = this;
        this.users.push(new User(data.text, data.randomNumber, data.imgSrc, data.width, data.height, data.ratio));
        this.dataStringSource.next(me.users);
    };
    TextService.prototype.getTextValue = function () {
        return this.dataStringSource.asObservable();
    };
    TextService.prototype.updateObjArray = function (data) {
        var me = this;
        this.objArray.push(new objArray(data.id, data.oriWidth, data.oriHeight, data.oriWidth, data.oriHeight, data.ratio));
        this.objArraySource.next(me.objArray);
        console.log(this.objArray);
    };
    TextService.prototype.getObjArray = function () {
        return this.objArraySource.asObservable();
    };
    TextService.prototype.setSliderValue = function (data, type) {
        if (type === 'minV') {
            this.sliderMinValue.next(data);
        }
        if (type === 'maxV') {
            this.sliderMaxValue.next(data);
        }
    };
    TextService.prototype.setAlignmentValue = function (data, type) {
        // let alignData = {}
        // alignData[type] = data;
        if (type === 'left') {
            // alignData["containerWidth"] = parseInt(this.designcontainerRef.nativeElement.style.width) - this.currentObj.nativeElement.offsetWidth;
            this.leftAlignmentValue.next(data);
        }
        if (type === 'top') {
            // alignData["containerHeight"] = parseInt(this.designcontainerRef.nativeElement.style.height) - this.currentObj.nativeElement.offsetHeight;
            this.topAlignmentValue.next(data);
        }
    };
    TextService.prototype.getSliderMinValue = function () {
        return this.sliderMinValue.asObservable();
    };
    TextService.prototype.getSliderMaxValue = function () {
        return this.sliderMaxValue.asObservable();
    };
    TextService.prototype.getLeftAlignment = function () {
        return this.leftAlignmentValue.asObservable();
    };
    TextService.prototype.getTopAlignment = function () {
        return this.topAlignmentValue.asObservable();
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
    TextService.prototype.pixelToPercentage = function (objVal, containerVal) {
        return (Math.round((parseInt(objVal) / parseInt(containerVal)) * 100)) + '%';
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
var objArray = (function () {
    function objArray(id, oriWidth, oriHeight, width, height, ratio) {
        this.id = id;
        this.oriWidth = oriWidth;
        this.oriHeight = oriHeight;
        this.width = width;
        this.height = height;
        this.ratio = ratio;
    }
    return objArray;
}());
exports.objArray = objArray;
//# sourceMappingURL=text.service.js.map