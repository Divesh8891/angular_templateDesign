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
        this.modalImgSrc = '';
    }
    rightPanelComponent.prototype.showPreview = function () {
        this.modalImgSrc = this._textService.canvasImageSrc;
    };
    rightPanelComponent.prototype.saveImage = function () {
        console.log();
        this.downloadImgCont.nativeElement.innerHtml = '<a href="' + this.modalImgSrc + '" download ><img src="' + this.modalImgSrc + '" class="downloadable"/></a>';
        //$('.downloadImgCont a')[0].click();
    };
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
            selector: 'right-panel',
            template: " \n        <div class=\"col-xs-9\" >\n            <div class=\"text-center ptb-20 col-xs-12\">\n                <ul class=\"list-inline\">\n                    <li><a href=\"javascript:commonoption.alignb();\" class=\"btn\">Send Back</a></li>\n                    <li><a href=\"javascript:commonoption.alignf();\" class=\"btn\">Bring front</a></li>\n                    <li><a href=\"javascript:commonoption.alignbw();\" class=\"btn\">Send Backward</a></li>\n                    <li><a href=\"javascript:commonoption.alignfw();\" class=\"btn\">Bring Forward</a></li>\n                    <li><a href=\"javascript:commonoption.delete();\" class=\"delete btn\">Delete</a></li>\n                    <li>\n                    <linkAsButton [parentClass]=\"''\" [applyClass]=\"'preview btn'\" [btnText]=\"'Preview'\"  (click)=showPreview($event)></linkAsButton>\n                    </li>\n                    <li>\n                     <linkAsButton [parentClass]=\"''\" [applyClass]=\"'save btn'\" [btnText]=\"'Save'\"  (click)=saveImage($event)></linkAsButton>\n                </ul>\n            </div>\n            <designContainer></designContainer>\n            <div class=\"popup-body\">\n                <div id=\"img-out\"><img  src=\"{{modalImgSrc}}\"/></div>\n            </div>\n            <section class=\"downloadImgCont\" #downloadImgCont>\n                    </section>\n        </div>\n        \n                        \n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], rightPanelComponent);
    return rightPanelComponent;
}());
exports.rightPanelComponent = rightPanelComponent;
//# sourceMappingURL=rightPanel.js.map