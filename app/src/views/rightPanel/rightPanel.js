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
        this.modalImgSrc = '';
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
            var me = _this;
            if (_this.currentObjRef != undefined) {
                setTimeout(function () {
                    me.inputLeftValue = data;
                    me.maxLeftSlidervalue = parseInt(me.designcontainerRef.offsetWidth) - parseInt(me.currentObjRef.offsetWidth);
                }, 100);
            }
        });
        this._textService.getTopAlignment().subscribe(function (data) {
            var me = _this;
            if (_this.currentObjRef != undefined) {
                setTimeout(function () {
                    me.inputTopValue = data;
                    me.maxTopSlidervalue = parseInt(me.designcontainerRef.offsetHeight) - parseInt(me.currentObjRef.offsetHeight);
                }, 100);
            }
        });
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
    rightPanelComponent.prototype.horizontalC = function () {
        var currentObjW = parseInt(this.currentObjRef.style['width']);
        var objLet = Math.round((100 - currentObjW) / 2);
        this.updateCurrentObj({ 'left': objLet });
    };
    rightPanelComponent.prototype.verticallyC = function () {
        var currentObjW = parseInt(this.handlerRef.style['height']);
        var containerH = parseInt(this.designcontainerRef.style["height"]);
        var currentObj = this.currentObjRef;
        var objTop = Math.round((containerH - currentObjW - 5) / 2);
        this.handlerRef.style["top"] = objTop - 5 + 'px';
        currentObj.style.top = this._textService.pixelToPercentage((objTop), this.designcontainerRef.style["height"]);
        ;
        this.inputTopValue = parseInt(this.handlerRef.style.top);
    };
    rightPanelComponent.prototype.setwidth = function () {
        var currentObj = this.currentObjRef;
        currentObj.style['width'] = this._textService.pixelToPercentage(this.inputMinWidthValue, this.designcontainerRef.style["width"]);
        this._textService.setSliderValue(this.inputMinWidthValue, 'minV');
        var objArray = this._textService.objArray;
        for (var j = 0; j < objArray.length; j++) {
            if (objArray[j].id === parseInt(currentObj.id)) {
                objArray[j].width = parseInt(this.inputMinWidthValue);
                objArray[j].height = objArray[j].width * parseInt(objArray[j].ratio);
                currentObj.style['height'] = objArray[j].height + 'px';
                this.handlerRef.style.width = objArray[j].width + 10 + 'px';
                this.handlerRef.style.height = objArray[j].height + 10 + 'px';
            }
        }
    };
    rightPanelComponent.prototype.updateCurrentObj = function (propertyArray) {
        this.currentObjRef.style['left'] = propertyArray.left + '%';
        this.inputLeftValue = Math.round((propertyArray.left * parseInt(this.designcontainerRef.style["width"])) / 100);
        this.inputTopValue = parseInt(this.handlerRef.style.top) + 5;
        this.handlerRef.style.left = this.inputLeftValue - 5 + 'px';
    };
    rightPanelComponent.prototype.onWidthChanged = function (event) {
        // console.log(this.currentObjRef)
        if (this.currentObjRef != undefined) {
            this.inputMinWidthValue = event.value;
            var objArray = this._textService.objArray;
            var currentObjElememtID = this.currentObjRef.id;
            this.currentObjRef.style['width'] = this._textService.pixelToPercentage(event.value, this.designcontainerRef.style["width"]);
            for (var j = 0; j < objArray.length; j++) {
                // console.log(objArray[j].id, this.currentObjRef.id)
                if (objArray[j].id === parseInt(this.currentObjRef.id)) {
                    if (objArray[j].type === 'image') {
                        this.currentObjRef.style['height'] = event.value / objArray[j].ratio + 'px';
                        objArray[j].height = event.value * objArray[j].ratio;
                    }
                    this._textService.setAlignmentValue(this.currentObjRef.offsetLeft, 'left');
                    this._textService.setAlignmentValue(this.currentObjRef.offsetTop, 'top');
                    objArray[j].width = event.value;
                }
            }
            this.handlerRef.style.width = this.currentObjRef.offsetWidth + 10 + 'px';
            this.handlerRef.style.height = this.currentObjRef.offsetHeight + 10 + 'px';
        }
    };
    rightPanelComponent.prototype.onWidthChangedFromInput = function (event) {
        if (this.currentObjRef != undefined) {
            this.currentObjRef.style['width'] = this._textService.pixelToPercentage((parseInt(event.target.value)), this.designcontainerRef.offsetWidth);
            this.handlerRef.style.width = parseInt(event.target.value) + 10 + 'px';
        }
    };
    rightPanelComponent.prototype.onLeftChanged = function (event) {
        if (this.currentObjRef != undefined) {
            this.inputLeftValue = event.value;
            // console.log(event.value, this.designcontainerRef.offsetWidth)
            this.currentObjRef.style['left'] = this._textService.pixelToPercentage((event.value), this.designcontainerRef.offsetWidth);
            this.handlerRef.style.left = this.currentObjRef.offsetLeft - 5 + 'px';
        }
    };
    rightPanelComponent.prototype.onLeftChangedFromInput = function (event) {
        if (this.currentObjRef != undefined) {
            if (event.target.value > this.maxLeftSlidervalue) {
                this.currentObjRef.style['left'] = this._textService.pixelToPercentage((this.maxLeftSlidervalue), this.designcontainerRef.offsetWidth);
                this.inputLeftValue = this.maxLeftSlidervalue;
                alert("value cannot be exceed from container Height " + this.designcontainerRef.offsetWidth);
            }
            else {
                this.currentObjRef.style['left'] = this._textService.pixelToPercentage(event.target.value, this.designcontainerRef.offsetWidth);
            }
            this.handlerRef.style.left = this.currentObjRef.offsetLeft - 5 + 'px';
        }
    };
    rightPanelComponent.prototype.onTopChangedFromInput = function (event) {
        if (this.currentObjRef != undefined) {
            var objH = this.currentObjRef.offsetHeight + 5;
            var containerH = parseInt(this.designcontainerRef.style["height"]);
            if (event.target.value > this.maxTopSlidervalue) {
                this.currentObjRef.style['top'] = this._textService.pixelToPercentage((this.maxTopSlidervalue), containerH);
                this.inputTopValue = this.maxTopSlidervalue;
                alert("value cannot be exceed from container Height " + this.maxTopSlidervalue);
            }
            else {
                this.currentObjRef.style['top'] = this._textService.pixelToPercentage(event.target.value, containerH);
            }
            this.handlerRef.style.top = this.currentObjRef.offsetTop - 5 + 'px';
        }
    };
    rightPanelComponent.prototype.onTopChanged = function (event) {
        if (this.currentObjRef != undefined) {
            var containerH = parseInt(this.designcontainerRef.style["height"]);
            this.inputTopValue = event.value;
            var objH = this.currentObjRef.offsetHeight;
            this.currentObjRef.style['top'] = this._textService.pixelToPercentage((event.value), containerH);
            this.handlerRef.style.top = this.currentObjRef.offsetTop - 5 + 'px';
        }
    };
    rightPanelComponent.prototype.sendBack = function () {
        var $currentObj = this.currentObjRef;
        var $prevID = $currentObj.previousSibling;
        var $currentObjId = $currentObj.id;
        var $container = this.designcontainerRef.children[0];
        var $firstChildId = $container.firstElementChild.getAttribute('id');
        if ($firstChildId != $currentObjId) {
            $currentObj.remove();
            $container.insertBefore($currentObj, $prevID);
        }
    };
    rightPanelComponent.prototype.bringFront = function () {
        var $currentObj = this.currentObjRef;
        var $currentObjId = $currentObj.id;
        var $nextID = $currentObj.nextSibling;
        var $container = this.designcontainerRef.children[0];
        var $lastChildId = $container.lastElementChild.getAttribute('id');
        if ($lastChildId != $currentObjId) {
            $container.insertBefore($nextID, $currentObj);
        }
    };
    rightPanelComponent.prototype.sendforward = function () {
        var $currentObj = this.currentObjRef;
        var $currentObjId = $currentObj.id;
        var $container = this.designcontainerRef.children[0];
        var $firstChildId = $container.firstElementChild.getAttribute('id');
        var $prevID = $container.firstElementChild;
        if ($firstChildId != $currentObjId) {
            $container.insertBefore($currentObj, $prevID);
        }
    };
    rightPanelComponent.prototype.bringForward = function () {
        var $currentObj = this.currentObjRef;
        var $currentObjId = $currentObj.id;
        var $container = this.designcontainerRef.children[0];
        var $lastChildId = $container.lastElementChild.getAttribute('id');
        if ($lastChildId != $currentObjId) {
            $container.insertAdjacentHTML('beforeend', '<div id="two">two</div>');
            var $prevID = $container.lastElementChild;
            $container.insertBefore($currentObj, $prevID);
            $prevID.remove();
        }
    };
    rightPanelComponent.prototype.showPreview = function () {
        var me = this;
        me.handlerRef.style.display = 'none';
        html2canvas(this.designcontainerRef).then(function (canvas) {
            me.modalImgSrc = canvas.toDataURL("image/jpeg");
            me.handlerRef.style.display = 'block';
        });
    };
    rightPanelComponent.prototype.saveImage = function () {
        var me = this;
        me.handlerRef.style.display = 'none';
        html2canvas(this.designcontainerRef).then(function (canvas) {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            a.download = 'template.png';
            a.click();
            me.handlerRef.style.display = 'block';
        });
    };
    rightPanelComponent.prototype.deleteNode = function () {
        var ObjArray = this._textService.objArray;
        var currentObjElememtID = this.currentObjRef.id;
        for (var j = 0; j < ObjArray.length; j++) {
            if (ObjArray[j].id == currentObjElememtID) {
                ObjArray.splice(j, 1);
                break;
            }
        }
        this.handlerRef.style.display = 'none';
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", Object)
    ], rightPanelComponent.prototype, "modal", void 0);
    __decorate([
        core_1.ViewChild('downloadImgCont'),
        __metadata("design:type", Object)
    ], rightPanelComponent.prototype, "downloadImgCont", void 0);
    __decorate([
        core_1.ViewChild('slider'),
        __metadata("design:type", Object)
    ], rightPanelComponent.prototype, "slider", void 0);
    rightPanelComponent = __decorate([
        core_1.Component({
            selector: '[rightModule]',
            template: " \n                        <h5 class=\"heading\">{{AlignmnetPanelTitle}}</h5>\n                        <div class=\"seperator\"></div> \n                        <!--linkAsButton [parentClass]=\"'l align-opt col-xs-4'\" [applyClass]=\"'leftA btn btn-lrg'\" [btnText]=\"'L'\" (click)=leftAlignment($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'m align-opt col-xs-4'\" [applyClass]=\"'mid btn btn-lrg'\" [btnText]=\"'M'\" (click)=middleAlignment($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'r align-opt col-xs-4'\" [applyClass]=\"'right btn btn-lrg'\" [btnText]=\"'R'\" (click)=rightAlignment($event)></linkAsButton-->\n                        <div class=\"left-align\">\n                            <h5 class=\"m0\">Left</h5>\n                            <div class=\"leftSlider\">\n                                <md-slider class=\"custom-slider\" (input)=\"onLeftChanged($event)\"  min=\"{{minLeftSlidervalue}}\" max=\"{{maxLeftSlidervalue}}\" value=\"{{inputLeftValue}}\"></md-slider>\n                            </div>\n                            <input type=\"text\" placeholder=\"Left\" (input)=\"onLeftChangedFromInput($event)\" class=\"leftP\" [(ngModel)]=\"inputLeftValue\" >\n                        </div>\n                        <div class=\"top-align\">\n                            <h5 class=\"m0\">Top</h5>\n                            <div class=\"topSlider\">\n                                <md-slider class=\"custom-slider\" (input)=\"onTopChanged($event)\"  min=\"{{minTopSliderValue}}\" max=\"{{maxTopSlidervalue}}\" value=\"{{inputTopValue}}\"></md-slider>\n                            </div>\n                            <input type=\"text\" placeholder=\"top\"class=\"topP\" (input)=\"onTopChangedFromInput($event)\" [(ngModel)]=\"inputTopValue\">\n                        </div>\n                        <div class=\"text-center align-center\">\n                            <button class=\"btn\" (click)=horizontalC($event)>HCenter</button>\n                            <button class=\"btn\" (click)=verticallyC($event)>VCenter</button>\n                        </div>\n                        <div class=\"seperator\"></div>\n                        <div class=\"width-align\"  [attr.data-min]=\"inputWidthValue\" [attr.data-max]=\"inputMaxWidthValue\">\n                            <h5  class=\"m0\">Width </h5>\n                             <div class=\"widthSlider\">\n                                <md-slider (input)=\"onWidthChanged($event)\"  min=\"{{minWidthSlidervalue}}\" max=\"{{maxWidthSlidervalue}}\" value=\"{{inputMinWidthValue}}\"></md-slider>\n                            </div>     \n                            <div class=\"text-center\">\n                                <input type=\"text\" (input)=\"onWidthChangedFromInput($event)\" placeholder=\"Min\" class=\"widthA\" [(ngModel)]=\"inputMinWidthValue\" value={{inputMinWidthValue}}>\n                                <input readonly placeholder=\"Max\" type=\"text\" class=\"widthA max\" [(ngModel)]=\"inputMaxWidthValue\" value={{inputMaxWidthValue}}>\n                            </div>\n                        </div>\n                        <div class=\"seperator\"></div>\n                        <div class=\"align-action\">\n                            <i class=\"sprite-img sendBack\" (click)=sendBack($event) title=\"Send Back\"></i>\n                            <i class=\"sprite-img bringFront\" (click)=bringFront($event) title=\"Bring Front\"></i>\n                            <i class=\"sprite-img sendBackword\" (click)=sendforward($event) title=\"Send Backward\"></i>\n                            <i class=\"sprite-img bringForward\" (click)=bringForward($event) title=\"Bring Forward\"></i>\n                        </div>\n                                                <div class=\"seperator\"></div>\n\n                        <div class=\"obj-action text-center\">\n                            <i class=\"sprite-img delete\" (click)=deleteNode($event) title=\"Delete\"></i>\n                            <i class=\"sprite-img preview\" (click)=showPreview($event) title=\"Preview\"></i>\n                            <i class=\"sprite-img save\" (click)=saveImage($event)  title=\"Save\"></i>\n                        </div>\n                            <!--ul class=\"list-inline align-action\">\n                                <li><button class=\"btn\" (click)=sendBack($event)>Send Back</button></li>\n                                <li><button class=\"btn\" (click)=sendBack($event)>Send Backward</button></li>\n                                <li><button class=\"btn\" (click)=bringFront($event)>Bring front</button></li>\n                                <li><button class=\"btn\" (click)=bringForward($event)>Send Forward</button></li>\n                             </ul>\n                        <div class=\"seperator\"></div>\n                        <ul class=\"list-inline obj-action\">\n                            <li><button class=\"delete btn\" (click)=deleteNode($event)>Delete</button></li>\n                            <li><button class=\"preview btn\" (click)=showPreview($event)>Preview</button></li>\n                            <li><button class=\"save btn\" (click)=saveImage($event)>Save</button></li>\n                        </ul-->\n                          <div class=\"popup-body\"><div id=\"img-out\" #modal><img  src=\"{{modalImgSrc}}\"/></div></div>\n                <section class=\"downloadImgCont\" #downloadImgCont></section>\n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], rightPanelComponent);
    return rightPanelComponent;
}());
exports.rightPanelComponent = rightPanelComponent;
//# sourceMappingURL=rightPanel.js.map