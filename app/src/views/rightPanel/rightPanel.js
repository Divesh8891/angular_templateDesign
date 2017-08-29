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
var rightPanelComponent = (function () {
    function rightPanelComponent(_textService) {
        this._textService = _textService;
        this.minWidthSlidervalue = 0;
        this.maxWidthSlidervalue = 100;
        this.defaultsliderValue = 0;
        this.minLeftSlidervalue = 0;
        this.maxLeftSlidervalue = 100;
        this.defaultLeftSlidervalue = this.inputLeftValue;
        this.minTopSlidervalue = 0;
        this.maxTopSlidervalue = 100;
        this.defaultTopSlidervalue = this.inputTopValue;
        this.AlignmnetPanelTitle = "Alignment";
    }
    rightPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._textService.getSliderMaxValue().subscribe(function (data) {
            _this.maxWidthSlidervalue = data;
            _this.inputMaxWidthValue = data;
        });
        this._textService.getSliderMinValue().subscribe(function (data) {
            _this.defaultsliderValue = data;
            _this.inputMinWidthValue = data;
        });
        this._textService.getLeftAlignment().subscribe(function (data) {
            // console.log((this._textService.designcontainerRef))
            // console.log(parseInt(this._textService.designcontainerRef.nativeElement.offsetWidth),parseInt(this._textService.currentObj.nativeElement.offsetWidth))
            var me = _this;
            setTimeout(function () {
                me.inputLeftValue = data;
                console.log(me._textService.designcontainerRef);
                console.log(me._textService.currentObj);
                me.maxLeftSlidervalue = parseInt(me._textService.designcontainerRef.nativeElement.offsetWidth) - parseInt(me._textService.currentObj.nativeElement.offsetWidth);
                console.log(this.maxLeftSlidervalue);
            }, 100);
        });
        this._textService.getTopAlignment().subscribe(function (data) {
            var me = _this;
            // console.log(parseInt(this._textService.designcontainerRef.nativeElement.offsetHeight), parseInt(this._textService.currentObj.nativeElement.offsetHeight))
            setTimeout(function () {
                me.inputTopValue = data;
                me.maxTopSlidervalue = parseInt(me._textService.designcontainerRef.nativeElement.offsetHeight) - parseInt(me._textService.currentObj.nativeElement.offsetHeight);
                console.log(this.maxTopSlidervalue);
            }, 100);
        });
    };
    rightPanelComponent.prototype.leftAlignment = function (event) {
        this.updateCurrentObj({ 'left': '0' });
        console.log(this.slider);
    };
    rightPanelComponent.prototype.middleAlignment = function (event) {
        var currentObjW = parseInt(this._textService.currentObj.nativeElement.style['width']);
        var objLet = Math.round((100 - currentObjW) / 2);
        this.updateCurrentObj({ 'left': objLet });
    };
    rightPanelComponent.prototype.rightAlignment = function (event) {
        var containerW = parseInt(this._textService.currentObj.nativeElement.style["width"]);
        var objLet = (100 - containerW);
        this.updateCurrentObj({ 'left': objLet });
    };
    rightPanelComponent.prototype.setAlignment = function () {
        this.currentObj = this._textService.currentObj;
        this.handlerRef = this._textService.handlerRef;
        this.currentObj.nativeElement.style['transform'] = '';
        this.currentObj.nativeElement.style['left'] = this.inputLeftValue;
        this.currentObj.nativeElement.style['top'] = this.inputTopValue;
        this.currentObj.nativeElement.style['right'] = 'auto';
        this.handlerRef.nativeElement.style.left = this.inputLeftValue;
        this.handlerRef.nativeElement.style.top = this.inputTopValue;
    };
    rightPanelComponent.prototype.setwidth = function () {
        var currentObj = this._textService.currentObj.nativeElement;
        this.handlerRef = this._textService.handlerRef;
        currentObj.style['width'] = this._textService.pixelToPercentage(this.inputMinWidthValue, this._textService.designcontainerRef.nativeElement.style["width"]);
        this._textService.setSliderValue(this.inputMinWidthValue, 'minV');
        var objArray = this._textService.objArray;
        for (var j = 0; j < objArray.length; j++) {
            if (objArray[j].id === parseInt(currentObj.id)) {
                objArray[j].width = parseInt(this.inputMinWidthValue);
                objArray[j].height = objArray[j].width * parseInt(objArray[j].ratio);
                currentObj.style['height'] = objArray[j].height + 'px';
                this.handlerRef.nativeElement.style.width = objArray[j].width + 10 + 'px';
                this.handlerRef.nativeElement.style.height = objArray[j].height + 10 + 'px';
            }
        }
    };
    rightPanelComponent.prototype.updateCurrentObj = function (propertyArray) {
        this.currentObj = this._textService.currentObj;
        this.handlerRef = this._textService.handlerRef;
        this.currentObj.nativeElement.style['left'] = propertyArray.left + '%';
        this.inputLeftValue = Math.round((propertyArray.left * parseInt(this._textService.designcontainerRef.nativeElement.style["width"])) / 100);
        this.inputTopValue = parseInt(this.handlerRef.nativeElement.style.top) + 5;
        this.handlerRef.nativeElement.style.left = this.inputLeftValue - 5 + 'px';
    };
    rightPanelComponent.prototype.onWidthChanged = function (event) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            this.inputMinWidthValue = event.value;
            var objArray = this._textService.objArray;
            var currentObjElememtID = this._textService.currentObj.nativeElement.id;
            this.currentObj.nativeElement.style['width'] = this._textService.pixelToPercentage(event.value, this._textService.designcontainerRef.nativeElement.style["width"]);
            for (var j = 0; j < objArray.length; j++) {
                console.log(objArray[j].id, this.currentObj.nativeElement.id);
                if (objArray[j].id === parseInt(this.currentObj.nativeElement.id)) {
                    if (this.currentObj.nativeElement.dataset['type'] === 'image') {
                        this.currentObj.nativeElement.style['height'] = event.value / objArray[j].ratio + 'px';
                        objArray[j].height = event.value * objArray[j].ratio;
                        console.log(this._textService.designcontainerRef.nativeElement.style["width"], event.value);
                        // this.maxLeftSlidervalue = parseInt(this._textService.designcontainerRef.nativeElement.style["width"]) - event.value;
                        // this.maxTopSlidervalue = parseInt(this._textService.designcontainerRef.nativeElement.style["height"]) - (event.value / objArray[j].ratio);
                        this._textService.setAlignmentValue(event.value, 'left');
                        this._textService.setAlignmentValue((event.value / objArray[j].ratio), 'top');
                    }
                    objArray[j].width = event.value;
                }
            }
            this.handlerRef.nativeElement.style.width = this.currentObj.nativeElement.offsetWidth + 10 + 'px';
            this.handlerRef.nativeElement.style.height = this.currentObj.nativeElement.offsetHeight + 10 + 'px';
        }
    };
    rightPanelComponent.prototype.onWidthChangedFromInput = function (event) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            this.currentObj.nativeElement.style['width'] = this._textService.pixelToPercentage((event.value), this._textService.designcontainerRef.nativeElement.offsetWidth);
            this.handlerRef.nativeElement.style.left = this.currentObj.nativeElement.offsetLeft - 5 + 'px';
        }
    };
    rightPanelComponent.prototype.onLeftChanged = function (event) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            this.inputLeftValue = event.value;
            console.log(event.value, this._textService.designcontainerRef.nativeElement.offsetWidth);
            this.currentObj.nativeElement.style['left'] = this._textService.pixelToPercentage((event.value), this._textService.designcontainerRef.nativeElement.offsetWidth);
            this.handlerRef.nativeElement.style.left = this.currentObj.nativeElement.offsetLeft - 5 + 'px';
        }
    };
    rightPanelComponent.prototype.onLeftChangedFromInput = function (event) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            if (event.target.value > this.maxLeftSlidervalue) {
                this.currentObj.nativeElement.style['left'] = this._textService.pixelToPercentage((this.maxLeftSlidervalue), this._textService.designcontainerRef.nativeElement.offsetWidth);
                this.inputLeftValue = this.maxLeftSlidervalue;
                alert("value cannot be exceed from container Height " + this._textService.designcontainerRef.nativeElement.offsetWidth);
            }
            else {
                this.currentObj.nativeElement.style['left'] = this._textService.pixelToPercentage(event.target.value, this._textService.designcontainerRef.nativeElement.offsetWidth);
            }
            this.handlerRef.nativeElement.style.left = this.currentObj.nativeElement.offsetLeft - 5 + 'px';
        }
    };
    rightPanelComponent.prototype.onTopChangedFromInput = function (event) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            var objH = this.currentObj.nativeElement.offsetHeight + 5;
            var containerH = parseInt(this._textService.designcontainerRef.nativeElement.style["height"]);
            if (event.target.value > this.maxTopSlidervalue) {
                this.currentObj.nativeElement.style['top'] = this._textService.pixelToPercentage((this.maxTopSlidervalue), containerH);
                this.inputTopValue = this.maxTopSlidervalue;
                alert("value cannot be exceed from container Height " + this.maxTopSlidervalue);
            }
            else {
                this.currentObj.nativeElement.style['top'] = this._textService.pixelToPercentage(event.target.value, containerH);
            }
            this.handlerRef.nativeElement.style.top = this.currentObj.nativeElement.offsetTop - 5 + 'px';
        }
    };
    rightPanelComponent.prototype.onTopChanged = function (event) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            var containerH = parseInt(this._textService.designcontainerRef.nativeElement.style["height"]);
            this.inputTopValue = event.value;
            var objH = this.currentObj.nativeElement.offsetHeight;
            this.currentObj.nativeElement.style['top'] = this._textService.pixelToPercentage((event.value), containerH);
            this.handlerRef.nativeElement.style.top = this.currentObj.nativeElement.offsetTop - 5 + 'px';
        }
    };
    __decorate([
        core_1.ViewChild('slider'),
        __metadata("design:type", Object)
    ], rightPanelComponent.prototype, "slider", void 0);
    rightPanelComponent = __decorate([
        core_1.Component({
            selector: '[rightModule]',
            template: " \n                        <h5 class=\"heading\">{{AlignmnetPanelTitle}}</h5>\n                        <div class=\"seperator\"></div> \n                        <!--linkAsButton [parentClass]=\"'l align-opt col-xs-4'\" [applyClass]=\"'leftA btn btn-lrg'\" [btnText]=\"'L'\" (click)=leftAlignment($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'m align-opt col-xs-4'\" [applyClass]=\"'mid btn btn-lrg'\" [btnText]=\"'M'\" (click)=middleAlignment($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'r align-opt col-xs-4'\" [applyClass]=\"'right btn btn-lrg'\" [btnText]=\"'R'\" (click)=rightAlignment($event)></linkAsButton-->\n                        <div class=\"left-align\">\n                            <h5 class=\"m0\">Left</h5>\n                            <div class=\"leftSlider\">\n                                <md-slider class=\"custom-slider\" (input)=\"onLeftChanged($event)\"  min=\"{{minLeftSlidervalue}}\" max=\"{{maxLeftSlidervalue}}\" value=\"{{inputLeftValue}}\"></md-slider>\n                            </div>\n                            <input type=\"text\" placeholder=\"Left\" (input)=\"onLeftChangedFromInput($event)\" class=\"leftP\" [(ngModel)]=\"inputLeftValue\" >\n                        </div>\n                        <div class=\"top-align\">\n                            <h5 class=\"m0\">Top</h5>\n                            <div class=\"topSlider\">\n                                <md-slider class=\"custom-slider\" (input)=\"onTopChanged($event)\"  min=\"{{minTopSliderValue}}\" max=\"{{maxTopSlidervalue}}\" value=\"{{inputTopValue}}\"></md-slider>\n                            </div>\n                            <input type=\"text\" placeholder=\"top\"class=\"topP\" (input)=\"onTopChangedFromInput($event)\" [(ngModel)]=\"inputTopValue\">\n                        </div>\n                        <div class=\"text-center align-center\">\n                            <button class=\"btn\" (click)=horizontalC($event)>HCenter</button>\n                            <button class=\"btn\" (click)=verticallyC($event)>VCenter</button>\n                        </div>\n                        <div class=\"seperator\"></div>\n                        <div class=\"width-align\"  [attr.data-min]=\"inputWidthValue\" [attr.data-max]=\"inputMaxWidthValue\">\n                            <h5  class=\"m0\">Width </h5>\n                             <div class=\"widthSlider\">\n                                <md-slider (input)=\"onWidthChanged($event)\"  min=\"{{minWidthSlidervalue}}\" max=\"{{maxWidthSlidervalue}}\" value=\"{{inputMinWidthValue}}\"></md-slider>\n                            </div>     \n                            <div class=\"text-center\">\n                                <input type=\"text\" (input)=\"onWidthChangedFromInput($event)\" placeholder=\"Min\" class=\"widthA\" [(ngModel)]=\"inputMinWidthValue\" value={{inputMinWidthValue}}>\n                                <input readonly placeholder=\"Max\" type=\"text\" class=\"widthA\" [(ngModel)]=\"inputMaxWidthValue\" value={{inputMaxWidthValue}}>\n                            </div>\n                        </div>\n                        <div class=\"seperator\"></div>\n                            <ul class=\"list-inline align-action\">\n                                <li><button class=\"btn\" (click)=sendBack($event)>Send Back</button></li>\n                                <li><button class=\"btn\" (click)=sendforward($event)>Send Backward</button></li>\n                                <li><button class=\"btn\" (click)=bringFront($event)>Bring front</button></li>\n                                <li><button class=\"btn\" (click)=bringForward($event)>Send Backward</button></li>\n                             </ul>\n                        <div class=\"seperator\"></div>\n                        <ul class=\"list-inline obj-action\">\n                            <li><button class=\"delete btn\" (click)=deleteNode($event)>Delete</button></li>\n                            <li><button class=\"preview btn\" (click)=showPreview($event)>Preview</button></li>\n                            <li><button class=\"save btn\" (click)=saveImage($event)>Save</button></li>\n                        </ul>\n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], rightPanelComponent);
    return rightPanelComponent;
}());
exports.rightPanelComponent = rightPanelComponent;
//# sourceMappingURL=rightPanel.js.map