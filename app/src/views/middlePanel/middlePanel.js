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
var MiddlePanelComponent = (function () {
    function MiddlePanelComponent(_textService) {
        this._textService = _textService;
        this.modalImgSrc = '';
    }
    MiddlePanelComponent.prototype.sendBack = function () {
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
    MiddlePanelComponent.prototype.bringFront = function () {
        var $currentObj = this._textService.currentObj.nativeElement;
        var $currentObjId = $currentObj.id;
        var $nextID = $currentObj.nextSibling;
        var $container = this._textService.designcontainerRef.nativeElement.children[0];
        var $lastChildId = $container.lastElementChild.getAttribute('id');
        if ($lastChildId != $currentObjId) {
            $container.insertBefore($nextID, $currentObj);
        }
    };
    MiddlePanelComponent.prototype.sendforward = function () {
        var $currentObj = this._textService.currentObj.nativeElement;
        var $currentObjId = $currentObj.id;
        var $container = this._textService.designcontainerRef.nativeElement.children[0];
        var $firstChildId = $container.firstElementChild.getAttribute('id');
        var $prevID = $container.firstElementChild;
        if ($firstChildId != $currentObjId) {
            $container.insertBefore($currentObj, $prevID);
        }
    };
    MiddlePanelComponent.prototype.bringForward = function () {
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
    MiddlePanelComponent.prototype.showPreview = function () {
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
    MiddlePanelComponent.prototype.saveImage = function () {
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
    MiddlePanelComponent.prototype.deleteNode = function () {
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
    ], MiddlePanelComponent.prototype, "modal", void 0);
    __decorate([
        core_1.ViewChild('downloadImgCont'),
        __metadata("design:type", Object)
    ], MiddlePanelComponent.prototype, "downloadImgCont", void 0);
    MiddlePanelComponent = __decorate([
        core_1.Component({
            selector: '[middleModule]',
            template: " \n                <section class=\"template-module bg-grey\" templateModule></section>\n                <section class=\"design-section display-inline\" designContainer></section>\n                <div class=\"popup-body\"><div id=\"img-out\" #modal><img  src=\"{{modalImgSrc}}\"/></div></div>\n                <section class=\"downloadImgCont\" #downloadImgCont></section>\n        \n                        \n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], MiddlePanelComponent);
    return MiddlePanelComponent;
}());
exports.MiddlePanelComponent = MiddlePanelComponent;
//# sourceMappingURL=MiddlePanel.js.map