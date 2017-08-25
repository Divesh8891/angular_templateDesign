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
    rightPanelComponent.prototype.sendBack = function () {
        var $currentObj = this._textService.currentObj.nativeElement;
        var $prevID = $currentObj.previousSibling;
        var $currentObjId = $currentObj.id;
        var $container = this._textService.designcontainerRef.nativeElement.children[0];
        var $firstChildId = $container.firstElementChild.getAttribute('id');
        if ($firstChildId != $currentObjId) {
            $currentObj.remove();
            $container.insertBefore($currentObj, $prevID);
        }
    };
    rightPanelComponent.prototype.bringFront = function () {
        var $currentObj = this._textService.currentObj.nativeElement;
        var $currentObjId = $currentObj.id;
        var $nextID = $currentObj.nextSibling;
        var $container = this._textService.designcontainerRef.nativeElement.children[0];
        var $lastChildId = $container.lastElementChild.getAttribute('id');
        if ($lastChildId != $currentObjId) {
            $container.insertBefore($nextID, $currentObj);
        }
    };
    rightPanelComponent.prototype.sendforward = function () {
        var $currentObj = this._textService.currentObj.nativeElement;
        var $currentObjId = $currentObj.id;
        var $container = this._textService.designcontainerRef.nativeElement.children[0];
        var $firstChildId = $container.firstElementChild.getAttribute('id');
        var $prevID = $container.firstElementChild;
        if ($firstChildId != $currentObjId) {
            $container.insertBefore($currentObj, $prevID);
        }
    };
    rightPanelComponent.prototype.bringForward = function () {
        var $currentObj = this._textService.currentObj.nativeElement;
        var $currentObjId = $currentObj.id;
        var $container = this._textService.designcontainerRef.nativeElement.children[0];
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
        me.handlerRef = this._textService.handlerRef;
        me.handlerRef.nativeElement.style.display = 'none';
        html2canvas(this._textService.designcontainerRef.nativeElement).then(function (canvas) {
            canvas.setAttribute("id", "canvas1");
            me._textService.canvasElem.nativeElement.appendChild(canvas);
            me.modalImgSrc = me._textService.canvasElem.nativeElement.children['canvas1'].toDataURL("image/jpeg");
            me._textService.canvasElem.nativeElement.children['canvas1'].remove(canvas);
            me.handlerRef.nativeElement.style.display = 'block';
        });
    };
    rightPanelComponent.prototype.saveImage = function () {
        var me = this;
        me.handlerRef = this._textService.handlerRef;
        me.handlerRef.nativeElement.style.display = 'none';
        html2canvas(this._textService.designcontainerRef.nativeElement).then(function (canvas) {
            canvas.setAttribute("id", "canvas1");
            me._textService.canvasElem.nativeElement.appendChild(canvas);
            me.canvasImageSrc = me._textService.canvasElem.nativeElement.children['canvas1'].toDataURL("image/jpeg");
            me._textService.canvasElem.nativeElement.children['canvasPNG'].setAttribute("src", me.canvasImageSrc);
            me._textService.canvasElem.nativeElement.children['canvas1'].remove(canvas);
            var imgElem = document.createElement("a");
            imgElem.setAttribute("src", me.canvasImageSrc);
            imgElem.className = "downloadable";
            var anchorElem = document.createElement("a");
            anchorElem.setAttribute("href", me.canvasImageSrc);
            anchorElem.setAttribute("download", "preview.jpeg");
            anchorElem.appendChild(imgElem);
            me.downloadImgCont.nativeElement.appendChild = anchorElem;
            me.downloadImgCont.nativeElement.appendChild.click();
            me.handlerRef.nativeElement.style.display = 'block';
        });
    };
    rightPanelComponent.prototype.deleteNode = function () {
        this.userArray = this._textService.users;
        var ObjArray = this._textService.objArray;
        var currentObjElememtID = this._textService.currentObj.nativeElement.id;
        for (var j = 0; j < this.userArray.length; j++) {
            if (this.userArray[j].randomNumber == currentObjElememtID && ObjArray[j].id == currentObjElememtID) {
                this.userArray.splice(j, 1);
                ObjArray.splice(j, 1);
                break;
            }
        }
        this.handlerRef = this._textService.handlerRef;
        this.handlerRef.nativeElement.style.display = 'none';
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
            template: " \n        <div class=\"col-xs-9\" >\n            <div class=\"text-center ptb-20 col-xs-12\">\n                <ul class=\"list-inline\">\n                    <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'btn'\" [btnText]=\"'Send Back'\"  (click)=sendBack($event)></linkAsButton></li>\n                    <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'btn'\" [btnText]=\"'Bring front'\"  (click)=bringFront($event)></linkAsButton></li>\n                    <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'btn'\" [btnText]=\"'Send Backward'\"  (click)=sendforward($event)></linkAsButton></li>\n                    <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'btn'\" [btnText]=\"'Bring Forward'\"  (click)=bringForward($event)></linkAsButton></li>\n                    <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'delete btn'\" [btnText]=\"'Delete'\"  (click)=deleteNode($event)></linkAsButton></li>\n                    <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'preview btn'\" [btnText]=\"'Preview'\"  (click)=showPreview($event)></linkAsButton></li>\n                    <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'save btn'\" [btnText]=\"'Save'\"  (click)=saveImage($event)></linkAsButton></li>\n                </ul>\n            </div>\n            <designContainer></designContainer>\n            <div class=\"popup-body\"><div id=\"img-out\" #modal><img  src=\"{{modalImgSrc}}\"/></div></div>\n            <section class=\"downloadImgCont\" #downloadImgCont></section>\n        </div>\n        \n                        \n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], rightPanelComponent);
    return rightPanelComponent;
}());
exports.rightPanelComponent = rightPanelComponent;
//# sourceMappingURL=rightPanel.js.map