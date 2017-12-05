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
        this.AlignmnetPanelTitle = "Alignment";
        this.modalImgSrc = '';
    }
    // @ViewChild('slider') public slider: any;
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
    rightPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("right-init");
        console.log(this._textService.designcontainerRef);
        this.designcontainerRef = this._textService.designcontainerRef;
        // this._textService.getSliderMaxValue().subscribe(
        //     data => {
        //         this.maxWidthSlidervalue = data;
        //         this.inputMaxWidthValue = data;
        //     });
        // this._textService.getSliderMinValue().subscribe(
        //     data => {
        //         this.defaultsliderValue = data;
        //         this.inputMinWidthValue = data;
        //     });
        // this._textService.getLeftAlignment().subscribe(
        //     data => {
        //         let me = this;
        //         if (this.currentObjRef != undefined) {
        //             setTimeout(function () {
        //                 me.inputLeftValue = data;
        //                 me.maxLeftSlidervalue = parseInt(me.designcontainerRef.offsetWidth) - parseInt(me.currentObjRef.offsetWidth);
        //             }, 100)
        //         }
        //     });
        // this._textService.getTopAlignment().subscribe(
        //     data => {
        //         let me = this;
        //         if (this.currentObjRef != undefined) {
        //             setTimeout(function () {
        //                 me.inputTopValue = data;
        //                 me.maxTopSlidervalue = parseInt(me.designcontainerRef.offsetHeight) - parseInt(me.currentObjRef.offsetHeight);
        //             }, 100)
        //         }
        //     });
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
    return rightPanelComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", Object)
], rightPanelComponent.prototype, "modal", void 0);
__decorate([
    core_1.ViewChild('downloadImgCont'),
    __metadata("design:type", Object)
], rightPanelComponent.prototype, "downloadImgCont", void 0);
rightPanelComponent = __decorate([
    core_1.Component({
        selector: '[rightModule]',
        template: " \n                        <h5 class=\"heading\">{{AlignmnetPanelTitle}}</h5>\n                        <div class=\"seperator\"></div> \n                        <!--linkAsButton [parentClass]=\"'l align-opt col-xs-4'\" [applyClass]=\"'leftA btn btn-lrg'\" [btnText]=\"'L'\" (click)=leftAlignment($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'m align-opt col-xs-4'\" [applyClass]=\"'mid btn btn-lrg'\" [btnText]=\"'M'\" (click)=middleAlignment($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'r align-opt col-xs-4'\" [applyClass]=\"'right btn btn-lrg'\" [btnText]=\"'R'\" (click)=rightAlignment($event)></linkAsButton-->\n                        <!--div class=\"left-align\">\n                            <h5 class=\"m0\">Left</h5>\n                            <div class=\"leftSlider\">\n                                <md-slider class=\"custom-slider\" (input)=\"onLeftChanged($event)\"  min=\"{{minLeftSlidervalue}}\" max=\"{{maxLeftSlidervalue}}\" value=\"{{inputLeftValue}}\"></md-slider>\n                            </div>\n                            <input type=\"text\" placeholder=\"Left\" (input)=\"onLeftChangedFromInput($event)\" class=\"leftP\" [(ngModel)]=\"inputLeftValue\" >\n                        </div>\n                        <div class=\"top-align\">\n                            <h5 class=\"m0\">Top</h5>\n                            <div class=\"topSlider\">\n                                <md-slider class=\"custom-slider\" (input)=\"onTopChanged($event)\"  min=\"{{minTopSliderValue}}\" max=\"{{maxTopSlidervalue}}\" value=\"{{inputTopValue}}\"></md-slider>\n                            </div>\n                            <input type=\"text\" placeholder=\"top\"class=\"topP\" (input)=\"onTopChangedFromInput($event)\" [(ngModel)]=\"inputTopValue\">\n                        </div>\n                        <div class=\"text-center align-center\">\n                            <button class=\"btn\" (click)=horizontalC($event)>HCenter</button>\n                            <button class=\"btn\" (click)=verticallyC($event)>VCenter</button>\n                        </div>\n                        <div class=\"seperator\"></div>\n                        <div class=\"width-align\"  [attr.data-min]=\"inputWidthValue\" [attr.data-max]=\"inputMaxWidthValue\">\n                            <h5  class=\"m0\">Width </h5>\n                             <div class=\"widthSlider\">\n                                <md-slider (input)=\"onWidthChanged($event)\"  min=\"{{minWidthSlidervalue}}\" max=\"{{maxWidthSlidervalue}}\" value=\"{{inputMinWidthValue}}\"></md-slider>\n                            </div>     \n                            <div class=\"text-center\">\n                                <input type=\"text\" (input)=\"onWidthChangedFromInput($event)\" placeholder=\"Min\" class=\"widthA\" [(ngModel)]=\"inputMinWidthValue\" value={{inputMinWidthValue}}>\n                                <input readonly placeholder=\"Max\" type=\"text\" class=\"widthA max\" [(ngModel)]=\"inputMaxWidthValue\" value={{inputMaxWidthValue}}>\n                            </div>\n                        </div>\n                        <div class=\"seperator\"></div>\n                        <div class=\"align-action\">\n                            <i class=\"sprite-img sendBack\" (click)=sendBack($event) title=\"Send Back\"></i>\n                            <i class=\"sprite-img bringFront\" (click)=bringFront($event) title=\"Bring Front\"></i>\n                            <i class=\"sprite-img sendBackword\" (click)=sendforward($event) title=\"Send Backward\"></i>\n                            <i class=\"sprite-img bringForward\" (click)=bringForward($event) title=\"Bring Forward\"></i>\n                        </div-->\n                                                <div class=\"seperator\"></div>\n\n                        <div class=\"obj-action text-center\">\n                            <i class=\"sprite-img delete\" (click)=deleteNode($event) title=\"Delete\"></i>\n                            <i class=\"sprite-img preview\" (click)=showPreview($event) title=\"Preview\"></i>\n                            <i class=\"sprite-img save\" (click)=saveImage($event)  title=\"Save\"></i>\n                        </div>\n                            <!--ul class=\"list-inline align-action\">\n                                <li><button class=\"btn\" (click)=sendBack($event)>Send Back</button></li>\n                                <li><button class=\"btn\" (click)=sendBack($event)>Send Backward</button></li>\n                                <li><button class=\"btn\" (click)=bringFront($event)>Bring front</button></li>\n                                <li><button class=\"btn\" (click)=bringForward($event)>Send Forward</button></li>\n                             </ul>\n                        <div class=\"seperator\"></div>\n                        <ul class=\"list-inline obj-action\">\n                            <li><button class=\"delete btn\" (click)=deleteNode($event)>Delete</button></li>\n                            <li><button class=\"preview btn\" (click)=showPreview($event)>Preview</button></li>\n                            <li><button class=\"save btn\" (click)=saveImage($event)>Save</button></li>\n                        </ul-->\n                          <div class=\"popup-body\"><div id=\"img-out\" #modal><img  src=\"{{modalImgSrc}}\"/></div></div>\n                <section class=\"downloadImgCont\" #downloadImgCont></section>\n    "
    }),
    __metadata("design:paramtypes", [text_service_1.TextService])
], rightPanelComponent);
exports.rightPanelComponent = rightPanelComponent;
//# sourceMappingURL=rightPanel.js.map