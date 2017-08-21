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
var designContainer = (function () {
    function designContainer(_textService) {
        this._textService = _textService;
        this.count = 0;
        this.setImageDimension = function () {
            var maxWidth = parseInt(this.designTooSec.nativeElement.style["width"]); // Max width for the image
            var maxHeight = parseInt(this.designTooSec.nativeElement.style["height"]); // Max height for the image
            // console.log(maxWidth,maxHeight)
            console.log(this.currentObj);
            var ratio = 0; // Used for aspect ratio
            var width = this.currentObj.nativeElement["width"]; // Current image width
            var height = this.currentObj.nativeElement["height"]; // Current image height
            this.currentObj.nativeElement.dataset['ratio'] = width / height;
            // console.log((maxWidth), maxHeight, width, height);
            if (width > maxWidth) {
                ratio = maxWidth / width; // get ratio for scaling image
                this.currentObj.nativeElement.style["width"] = maxWidth + 'px';
                this.currentObj.nativeElement.style["height"] = height * ratio + 'px';
                height = height * ratio; // Reset height to match scaled image
                width = width * ratio; // Reset width to match scaled image
            }
            // Check if current height is larger than max
            if (height > maxHeight) {
                ratio = maxHeight / height; // get ratio for scaling image
                this.currentObj.nativeElement.style["width"] = width * ratio + 'px';
                this.currentObj.nativeElement.style["height"] = maxHeight + 'px';
                width = width * ratio; // Reset width to match scaled image
                height = height * ratio; // Reset height to match scaled image
            }
            this.textHandler.nativeElement.style.width = parseInt(this.currentObj.nativeElement.style["width"]) + 10 + 'px';
            this.textHandler.nativeElement.style.height = parseInt(this.currentObj.nativeElement.style["height"]) + 10 + 'px';
        };
    }
    designContainer.prototype.ngOnInit = function () {
        var _this = this;
        this._textService.getTextValue().subscribe(function (data) {
            _this.textAreaVal = data;
        });
        this._textService.setDesigncontainerRef(this.designTooSec);
    };
    designContainer.prototype.textNodeEvent = function (event) {
        this.textHandler.nativeElement.style.display = 'block';
        for (var i = 0; i < this.elements._results.length; i++) {
            console.log(event.target.id, this.elements._results[i].nativeElement.id);
            if (event.target.id === this.elements._results[i].nativeElement.id) {
                this.currentObj = this.elements._results[i];
            }
        }
        this.textHandler.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.textHandler.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.textHandler.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.textHandler.nativeElement.style.top = event.target.offsetTop - 5 + 'px';
        this._textService.setCurrentObj(this.currentObj, this.textHandler);
    };
    designContainer.prototype.imgNodeEvent = function (event) {
        this.textHandler.nativeElement.style.display = 'block';
        for (var i = 0; i < this.elements._results.length; i++) {
            if (event.target.id === this.elements._results[i].nativeElement.id) {
                this.currentObj = this.elements._results[i];
            }
        }
        this.textHandler.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.textHandler.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.textHandler.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.textHandler.nativeElement.style.top = event.target.offsetTop - 5 + 'px';
        this._textService.setCurrentObj(this.currentObj, this.textHandler);
        this.setImageDimension();
    };
    designContainer.prototype.getPos = function (event) {
        var handlerRef = this.textHandler.nativeElement.style.display;
        if (handlerRef == 'block') {
            this.currentObj.nativeElement.style.left = event.left + 5 + 'px';
            this.currentObj.nativeElement.style.top = event.top + 5 + 'px';
        }
    };
    designContainer.prototype.onhandlerClick = function (event) {
        var handlerRef = this.textHandler.nativeElement.style.display;
        this.count++;
        if (handlerRef == 'block' && this.count == 2) {
            this.textHandler.nativeElement.style.display = 'none';
            this.count = 0;
        }
    };
    designContainer.prototype.onResizeEnd = function (event) {
        console.log('Element was resized', event);
    };
    __decorate([
        core_1.ViewChild('imageModuleComponent'),
        __metadata("design:type", Object)
    ], designContainer.prototype, "imageModule", void 0);
    __decorate([
        core_1.ViewChild('handler'),
        __metadata("design:type", Object)
    ], designContainer.prototype, "textHandler", void 0);
    __decorate([
        core_1.ViewChild('designTooSec'),
        __metadata("design:type", Object)
    ], designContainer.prototype, "designTooSec", void 0);
    __decorate([
        core_1.ViewChildren('xyz'),
        __metadata("design:type", Object)
    ], designContainer.prototype, "elements", void 0);
    designContainer = __decorate([
        core_1.Component({
            selector: 'designContainer',
            template: " \n                <section class=\"design-section col-xs-12\">\n                    <div class=\"desgin-tool-sec\" style=\"width: 780px; height: 780px;\" #designTooSec>\n                        <section class=\"desgin-inner\" data-bg=\"blank\">\n                        <ng-container *ngFor=\"let text of textAreaVal\">\n                          <p #xyz *ngIf=\"text.text!=''\" class=\"textNative\" data-type=\"text\" id=\"{{text.randomNumber}}\" (click)=\"textNodeEvent($event,text)\" style=\"font-size: 18px;\" >{{text.text}}</p>\n                         <img #xyz *ngIf=\"text.src!=''\" class=\"imgNative\" data-type=\"image\" data-ratio=\"\"  id=\"{{text.randomNumber}}\" (click)=\"imgNodeEvent($event,img)\" src={{text.src}}/>\n                        </ng-container>\n                        </section>\n                        <div class=\"handler cube\" #handler  [ng2-draggable]=\"true\" (handlerClick)=\"onhandlerClick($event)\" (postions)=getPos($event)></div>\n                     </div>\n                </section>\n             \n                \n              \n                \n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], designContainer);
    return designContainer;
}());
exports.designContainer = designContainer;
//# sourceMappingURL=designContainer.js.map