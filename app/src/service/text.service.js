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
        this.designcontainerRef = "";
        this.moduleRef = "";
        this.objArrSource = new Subject_1.Subject();
        // public objArraySource = new Subject();
        this.sliderMinValue = new Subject_1.Subject();
        this.sliderMaxValue = new Subject_1.Subject();
        this.leftAlignmentValue = new Subject_1.Subject();
        this.topAlignmentValue = new Subject_1.Subject();
        this.fontSizeValue = new Subject_1.Subject();
        this.lineHeightValue = new Subject_1.Subject();
        this.temBgValue = new Subject_1.Subject();
        this.textBgValue = new Subject_1.Subject();
        this.currentObj = new Subject_1.Subject();
        this.handlerRef = new Subject_1.Subject();
        this.handlerWrapper = new Subject_1.Subject();
        this.objArray = [];
        this.setImageDimension = function (currentObj, containerW, containerH, objArray, pContainer) {
            // console.log("setdimension")
            // console.log(currentObj, containerW, containerH, objArray)
            var maxWidth = parseInt(containerW); // Max width for the image
            var maxHeight = parseInt(containerH); // Max height for the image
            if (containerW === '') {
                console.log(this);
                maxWidth = parseInt(pContainer.style.width); // Max width for the image
            }
            if (containerH === '') {
                maxHeight = parseInt(pContainer.style.height);
            }
            var localCurrentObj = currentObj;
            // console.log(maxWidth,maxHeight)
            var ratio = 0; // Used for aspect ratio
            var width = objArray.width; // Current image width
            var height = objArray.height; // Current image height
            console.log((maxWidth), maxHeight, width, height);
            if (width > maxWidth) {
                ratio = maxWidth / width; // get ratio for scaling image
                localCurrentObj.style["width"] = this.pixelToPercentage(maxWidth - 100, maxWidth);
                //localCurrentObj.style["height"] = this.pixelToPercentage((height * ratio), maxHeight);
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
    // 'id': this.randomNumber, 'oriWidth': textWidth, 'oriHeight': textHeight, 'ratio': ratio, 'width': textWidth, 
    //'height': textHeight, 'value': this.textAreaValue/imgSrc, 'type': 'text'
    TextService.prototype.setObjArray = function (data) {
        var me = this;
        this.objArray.push(new objectArray(data.id, data.oriWidth, data.oriHeight, data.ratio, data.width, data.height, data.value, data.type, data.rotate));
        this.objArrSource.next(me.objArray);
    };
    TextService.prototype.getObjArray = function () {
        return this.objArrSource.asObservable();
    };
    TextService.prototype.hexToRgbA = function (hex, opacity) {
        hex = hex.replace('#', '');
        if (hex.length == 3) {
            hex += hex;
        }
        var r = parseInt(hex.substring(0, hex.length / 3), 16);
        var g = parseInt(hex.substring(hex.length / 3, 2 * hex.length / 3), 16);
        var b = parseInt(hex.substring(2 * hex.length / 3, 3 * hex.length / 3), 16);
        var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
        return result;
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
        if (type === 'left') {
            this.leftAlignmentValue.next(data);
        }
        if (type === 'top') {
            this.topAlignmentValue.next(data);
        }
        if (type === 'font-size') {
            this.fontSizeValue.next(data);
        }
        if (type === 'lineH') {
            this.lineHeightValue.next(data);
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
    TextService.prototype.getFontSize = function () {
        return this.fontSizeValue.asObservable();
    };
    TextService.prototype.getLineH = function () {
        return this.lineHeightValue.asObservable();
    };
    TextService.prototype.currentObjController = function (type, currentObjData, handlerWrapperData) {
        if (type == 'set') {
            this.currentObj.next(currentObjData);
            this.handlerWrapper.next(handlerWrapperData);
            //console.log(handlerWrapperData)
        }
        if (type == 'getCurrentObj') {
            return this.currentObj.asObservable();
        }
        if (type == 'getHandlerParentObj') {
            return this.handlerWrapper.asObservable();
        }
    };
    TextService.prototype.designContainerController = function (data) {
        this.designcontainerRef = data;
    };
    TextService.prototype.moduleContainerController = function (data) {
        this.moduleRef = data;
    };
    TextService.prototype.pixelToPercentage = function (objVal, containerVal) {
        return (Math.round((parseInt(objVal) / parseInt(containerVal)) * 100)) + '%';
    };
    return TextService;
}());
TextService = __decorate([
    core_1.Injectable()
], TextService);
exports.TextService = TextService;
var objectArray = (function () {
    // 'id': this.randomNumber, 'oriWidth': textWidth, 'oriHeight': textHeight, 'ratio': ratio, 'width': textWidth, 
    //'height': textHeight, 'value': this.textAreaValue/imgSrc, 'type': 'text'
    function objectArray(id, oriWidth, oriHeight, ratio, width, height, value, type, rotate) {
        this.id = id;
        this.oriWidth = oriWidth;
        this.oriHeight = oriHeight;
        this.ratio = ratio;
        this.width = width;
        this.height = height;
        this.value = value;
        this.type = type;
        this.rotate = rotate;
    }
    return objectArray;
}());
exports.objectArray = objectArray;
//# sourceMappingURL=text.service.js.map