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
var angular2_color_picker_1 = require("angular2-color-picker");
var designContainer = (function () {
    function designContainer(cpService, _textService) {
        this.cpService = cpService;
        this._textService = _textService;
        this.windowScrollTopY = 0;
        this.windowScrollTopX = 0;
        this.count = 0;
        this.curDown = false;
        this.actionType = "";
        this.color = "#000";
        this.minScaleValue = 1;
        this.maxScaleValue = 2;
        this.defaultfontSizeSlidervalue = this.inputScaleValue;
    }
    designContainer.prototype.onScaleChanged = function (event) {
        console.log(this._textService.designcontainerRef);
        this._textService.designcontainerRef.nativeElement.style['transform'] = 'scale(' + event.value + ')';
    };
    designContainer.prototype.openAlignmentPanel = function (type, event) {
        event.stopPropagation();
        if (type === 'open') {
            this.alignmentPanel.nativeElement.style.display = "block";
        }
        else {
            this.alignmentPanel.nativeElement.style.display = "none";
        }
    };
    designContainer.prototype.sendBack = function () {
        var $currentObj = this.currentObjRef;
        var $prevID = $currentObj.previousElementSibling;
        var $currentObjId = $currentObj.id;
        console.log("sendBack" + $prevID);
        var $container = this.designTooSec.nativeElement.children[1];
        var $firstChildId = $container.firstElementChild.getAttribute('id');
        // console.log($firstChildId, $currentObjId)
        if ($firstChildId != $currentObjId) {
            $currentObj.remove();
            $container.insertBefore($currentObj, $prevID);
        }
    };
    designContainer.prototype.bringFront = function () {
        var $currentObj = this.currentObjRef;
        var $currentObjId = $currentObj.id;
        var $nextID = $currentObj.nextElementSibling;
        console.log("bringFront" + $nextID);
        var $container = this.designTooSec.nativeElement.children[1];
        var $lastChildId = $container.lastElementChild.getAttribute('id');
        if ($lastChildId != $currentObjId) {
            $container.insertBefore($nextID, $currentObj);
        }
    };
    designContainer.prototype.sendforward = function () {
        var $currentObj = this.currentObjRef;
        var $currentObjId = $currentObj.id;
        var $container = this.designTooSec.nativeElement.children[1];
        var $firstChildId = $container.firstElementChild.getAttribute('id');
        var $prevID = $container.firstElementChild;
        console.log("sendforward" + $prevID);
        if ($firstChildId != $currentObjId) {
            $container.insertBefore($currentObj, $prevID);
        }
    };
    designContainer.prototype.bringForward = function () {
        var $currentObj = this.currentObjRef;
        var $currentObjId = $currentObj.id;
        console.log(this.designTooSec);
        var $container = this.designTooSec.nativeElement.children[1];
        var $lastChildId = $container.lastElementChild.getAttribute('id');
        if ($lastChildId != $currentObjId) {
            $container.insertAdjacentHTML('beforeend', '<div id="two">two</div>');
            var $prevID = $container.lastElementChild;
            console.log("bringForward" + $prevID);
            $container.insertBefore($currentObj, $prevID);
            $prevID.remove();
        }
    };
    designContainer.prototype.deleteNode = function () {
        var ObjArray = this._textService.objArray;
        var currentObjElememtID = this.currentObjRef.id;
        for (var j = 0; j < ObjArray.length; j++) {
            if (ObjArray[j].id == currentObjElememtID) {
                ObjArray.splice(j, 1);
                break;
            }
        }
        this.handlerWrapper.nativeElement.style.display = 'none';
    };
    designContainer.prototype.closeTextPicker = function (event) {
        if (this.currentObjRef != undefined)
            this.currentObjRef.style.color = event;
    };
    designContainer.prototype.textNodeEvent = function (event) {
        var currentImagewidth = 0;
        this.handlerWrapper.nativeElement.children[1].style.display = "block";
        this.handlerWrapper.nativeElement.style.display = 'block';
        var objArray = this._textService.objArray;
        for (var i = 0; i < this.elements._results.length; i++) {
            if (event.target.id === this.elements._results[i].nativeElement.id) {
                this.currentObjRef = this.elements._results[i];
                currentImagewidth = objArray[i].width;
                // this.currentObjRef.style['zIndex']=
            }
        }
        this.handlerWrapper.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.handlerWrapper.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.handlerWrapper.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.handlerWrapper.nativeElement.style.top = event.target.offsetTop - 5 + 'px';
        this.handlerWrapper.nativeElement.children[0].style.left = event.target.offsetLeft - 5 + 'px';
        this.handlerWrapper.nativeElement.children[0].style.top = event.target.offsetTop - 5 + 'px';
        this._textService.currentObjController('set', this.currentObjRef, this.handlerWrapper);
        this.currentObjRef.style.width = this._textService.pixelToPercentage((event.target.offsetWidth), this.designTooSec.nativeElement.style["width"]);
        this.currentObjRef.style.left = event.target.offsetLeft + 'px';
        this.currentObjRef.style.top = event.target.offsetTop + 'px';
        this.currentObjRef.className = "textNative";
        this._textService.setSliderValue(currentImagewidth, 'minV');
        this._textService.setAlignmentValue(event.target.offsetLeft, 'left');
        this._textService.setAlignmentValue(event.target.offsetTop, 'top');
        //console.log(this.currentObjRef)
        this._textService.setAlignmentValue(parseInt(this.currentObjRef.style.fontSize), 'font-size');
        var title = event.target.dataset.title;
        title == 'Text' && (this.moduleRef.nativeElement.children[0].style['transform'] = 'translate(-209px,0px)');
    };
    designContainer.prototype.imgNodeEvent = function (event) {
        this.handlerWrapper.nativeElement.children[1].style.display = "none";
        this.handlerWrapper.nativeElement.style.display = 'block';
        //this.textHandler.nativeElement.style.display = 'block';
        var objArray = this._textService.objArray;
        var currentImagewidth = 0;
        for (var i = 0; i < this.elements._results.length; i++) {
            if (event.target.id === this.elements._results[i].nativeElement.id) {
                this.currentObjRef = this.elements._results[i];
                currentImagewidth = objArray[i].width;
            }
        }
        this.handlerWrapper.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.handlerWrapper.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.handlerWrapper.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.handlerWrapper.nativeElement.style.top = event.target.offsetTop - 5 + 'px';
        this.handlerWrapper.nativeElement.children[0].style.left = event.target.offsetLeft - 5 + 'px';
        this.handlerWrapper.nativeElement.children[0].style.top = event.target.offsetTop - 5 + 'px';
        this.currentObjRef.nativeElement.style.left = event.target.offsetLeft + 'px';
        this.currentObjRef.nativeElement.style.top = event.target.offsetTop + 'px';
        this._textService.currentObjController('set', this.currentObjRef, this.handlerWrapper);
        this.currentObjRef.style.width = this._textService.pixelToPercentage((event.target.offsetWidth), this.designTooSec.nativeElement.style["width"]);
        this._textService.setSliderValue(currentImagewidth, 'minV');
        this._textService.setSliderValue(parseInt(this.designTooSec.nativeElement.style["width"]), 'maxV');
        // this._textService.setAlignmentValue(event.target.offsetLeft, 'left');
        // this._textService.setAlignmentValue(event.target.offsetTop, 'top');
        if (parseInt(this.designTooSec.nativeElement.style["width"]) > parseInt(this.designTooSec.nativeElement.style["height"])) {
            this._textService.setSliderValue(parseInt(this.designTooSec.nativeElement.style["height"]), 'maxV');
        }
        var title = event.target.dataset.title;
        title == 'Image' && (this.moduleRef.nativeElement.children[0].style['transform'] = 'translate(-209px,0px)');
        title == 'Shape' && (this.moduleRef.nativeElement.children[0].style['transform'] = 'translate(-418px,0px)');
    };
    designContainer.prototype.getPos = function (event) {
        var textHandler = this.handlerWrapper.nativeElement.style.display;
        var me = this;
        if (textHandler == 'block') {
            // console.log(event.left)
            me.currentObjRef.style.left = event.left + 'px';
            me.currentObjRef.style.top = event.top + 'px';
            me._textService.setAlignmentValue(event.left, 'left');
            me._textService.setAlignmentValue(event.top, 'top');
            // this.textHandler.nativeElement.style.left = event.left - 5 + 'px';
            //this.textHandler.nativeElement.style.top = event.top - 5 + 'px';
            this.handlerWrapper.nativeElement.style.left = event.left - 5 + 'px';
            this.handlerWrapper.nativeElement.style.top = event.top - 5 + 'px';
        }
    };
    designContainer.prototype.onhandlerClick = function (event) {
        // let textHandler = this.handlerWrapper.nativeElement.style.display;
        // // this.count++;
        // console.log(this.currentObjRef.offsetLeft,event)
        // if (textHandler == 'block') {
        //     this.currentObjRef.style.left = this.currentObjRef.offsetLeft + 'px';
        //     this.currentObjRef.style.top = this.currentObjRef.offsetTop + 'px';
        // }
    };
    designContainer.prototype.onhandlerdbClick = function (event) {
        this.handlerWrapper.nativeElement.style.display = 'none';
        this._textService.currentObjController('set', '', '');
    };
    designContainer.prototype.createDublicate = function () {
        var objArray = this._textService.objArray;
        var currentObjElememtID = this.currentObjRef.id;
        var a = new Date();
        var randomNumber = a.getTime();
        var $container = this.designTooSec.nativeElement.children[1];
        var me = this;
        for (var j = 0; j < objArray.length; j++) {
            //console.log(j, objArray[j].id, currentObjElememtID)
            if (objArray[j].type == 'text' && objArray[j].id == currentObjElememtID) {
                this._textService.setObjArray({
                    'id': randomNumber,
                    'oriWidth': objArray[j].oriWidth,
                    'oriHeight': objArray[j].oriHeight,
                    'ratio': objArray[j].ratio,
                    'width': objArray[j].width,
                    'height': objArray[j].height,
                    'value': objArray[j].value,
                    'type': 'text',
                    'rotate': objArray[j].rotate
                });
                this.rotate = objArray[j].rotate;
            }
            if (objArray[j].type == 'image' && objArray[j].id == currentObjElememtID) {
                this._textService.setObjArray({
                    'id': randomNumber,
                    'oriWidth': objArray[j].oriWidth,
                    'oriHeight': objArray[j].oriHeight,
                    'ratio': objArray[j].ratio,
                    'width': objArray[j].width,
                    'height': objArray[j].height,
                    'value': objArray[j].value,
                    'type': 'image',
                    'rotate': objArray[j].rotate
                });
                this.rotate = objArray[j].rotate;
            }
        }
        setTimeout(function () {
            if (me.currentObjRef.dataset.type == 'text') {
                $container.lastElementChild.style['color'] = me.currentObjRef.style['color'];
                $container.lastElementChild.style['background-color'] = me.currentObjRef.style['background-color'];
                $container.lastElementChild.style['line-height'] = me.currentObjRef.style['line-height'];
                $container.lastElementChild.style['text-align'] = me.currentObjRef.style['text-align'];
                $container.lastElementChild.style['text-transform'] = me.currentObjRef.style['text-transform'];
                $container.lastElementChild.style['font-family'] = me.currentObjRef.style['font-family'];
                $container.lastElementChild.style['font-size'] = me.currentObjRef.style['font-size'];
                $container.lastElementChild.style['font-weight'] = me.currentObjRef.style['font-weight'];
            }
            $container.lastElementChild.style['height'] = me.currentObjRef.style.height;
            $container.lastElementChild.style['width'] = me.currentObjRef.style.width;
            $container.lastElementChild.style['transform'] = 'rotate(' + me.rotate + 'deg)';
        }, 200);
    };
    designContainer.prototype.updateScroll = function (event) {
        this.windowScrollTopY = event.path[1].scrollY;
        this.windowScrollTopX = event.path[1].scrollX;
    };
    designContainer.prototype.updateMove = function (event) {
        if (this.curDown === true) {
            var marL = this.designTooSec.nativeElement.offsetParent.parentElement.offsetLeft + this.designTooSec.nativeElement.offsetLeft;
            var eventX = event.x < event.offsetX ? event.offsetX : event.x;
            marL = eventX + this.windowScrollTopX - marL - parseInt(this.currentObjRef.style.left) - 15;
            var marT = this.designTooSec.nativeElement.offsetParent.offsetTop + this.designTooSec.nativeElement.offsetTop;
            marT = event.y + this.windowScrollTopY - marT - parseInt(this.currentObjRef.style.top) - 15;
            if (this.actionType === "width") {
                //console.log("width", event.offsetX, this.designTooSec.nativeElement.offsetParent.parentElement.offsetLeft, this.designTooSec.nativeElement.offsetLeft, this.currentObjRef.style.top, marL)
                this.handlerWrapper.nativeElement.style.width = marL + 10 + 'px';
                this.currentObjRef.style.width = this._textService.pixelToPercentage(marL, this.designTooSec.nativeElement.style["width"]);
            }
            if (this.actionType === "height") {
                //  console.log("height", event.offsetY)
                if (this.currentObjRef.dataset.type === "text") {
                    this.currentObjRef.style['line-height'] = marT + 'px';
                }
                else {
                    this.currentObjRef.style.height = marT + 'px';
                }
                this.handlerWrapper.nativeElement.style.height = marT + 10 + 'px';
            }
            if (this.actionType === "resize") {
                this.handlerWrapper.nativeElement.style.width = marL + 10 + 'px';
                this.currentObjRef.style.width = this._textService.pixelToPercentage(marL, this.designTooSec.nativeElement.style["width"]);
                if (this.currentObjRef.dataset.type === "text") {
                    this.currentObjRef.style['lineHeight'] = marT + 'px';
                }
                else {
                    this.currentObjRef.style.height = marT + 'px';
                }
                this.handlerWrapper.nativeElement.style.height = marT + 10 + 'px';
            }
            if (this.actionType === "rotate") {
                this.currentObjRef.style['transform'] = 'rotate(' + event.offsetX + 'deg)';
                this.rotate = event.offsetX;
            }
            var ObjArray = this._textService.objArray;
            var currentObjElememtID = this.currentObjRef.id;
            for (var j = 0; j < ObjArray.length; j++) {
                if (ObjArray[j].id == currentObjElememtID) {
                    ObjArray[j].width = this.currentObjRef.style['width'];
                    ObjArray[j].height = this.currentObjRef.style['height'];
                    ObjArray[j].rotate = this.rotate;
                }
            }
        }
    };
    designContainer.prototype.updateDown = function (event) {
        this.curDown = true;
        this.actionType = event.target.dataset.type;
        //console.log("down", event.offsetX, event.offsetY)
    };
    designContainer.prototype.updateUp = function (event) {
        this.curDown = false;
    };
    designContainer.prototype.ngOnInit = function () {
        var _this = this;
        console.log("design-init");
        this._textService.getObjArray().subscribe(function (data) {
            _this.localObjArray = data;
        });
        this._textService.currentObjController('getCurrentObj', '', '').subscribe(function (data) {
            console.log(_this.currentObjRef);
            if (_this.currentObjRef == undefined) {
                _this.currentObjRef = undefined;
            }
            else {
                _this.currentObjRef = _this.currentObjRef.nativeElement;
            }
        });
        this._textService.designContainerController(this.designTooSec);
        console.log(this._textService.moduleRef);
        this.moduleRef = this._textService.moduleRef.nativeElement;
    };
    return designContainer;
}());
__decorate([
    core_1.ViewChild('imageModuleComponent'),
    __metadata("design:type", Object)
], designContainer.prototype, "imageModule", void 0);
__decorate([
    core_1.ViewChild('handler'),
    __metadata("design:type", Object)
], designContainer.prototype, "textHandler", void 0);
__decorate([
    core_1.ViewChild('handlerWrapper'),
    __metadata("design:type", Object)
], designContainer.prototype, "handlerWrapper", void 0);
__decorate([
    core_1.ViewChild('alignmentPanel'),
    __metadata("design:type", Object)
], designContainer.prototype, "alignmentPanel", void 0);
__decorate([
    core_1.ViewChild('designTooSec'),
    __metadata("design:type", Object)
], designContainer.prototype, "designTooSec", void 0);
__decorate([
    core_1.ViewChildren('xyz'),
    __metadata("design:type", Object)
], designContainer.prototype, "elements", void 0);
__decorate([
    core_1.ViewChild('pickerBgBox'),
    __metadata("design:type", Object)
], designContainer.prototype, "pickerBgBox", void 0);
designContainer = __decorate([
    core_1.Component({
        selector: '[designContainer]',
        templateUrl: 'app/src/views/html/designContainer.html'
    }),
    __metadata("design:paramtypes", [angular2_color_picker_1.ColorPickerService, text_service_1.TextService])
], designContainer);
exports.designContainer = designContainer;
//# sourceMappingURL=designContainer.js.map