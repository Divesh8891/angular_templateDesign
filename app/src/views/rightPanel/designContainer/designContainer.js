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
        this.gridConfig = {
            'draggable': true,
            'resizable': true
        };
        var conf = [{ 'dragHandle': '.handle' }];
        this.config = conf;
    }
    designContainer.prototype.ngOnInit = function () {
        var _this = this;
        this._textService.dataString$.subscribe(function (data) {
            _this.textAreaVal = data;
        });
    };
    designContainer.prototype.textNodeEvent = function (event) {
        console.log(event);
        this.currentObj = event;
        this.textHandler.nativeElement.style.display = 'block';
        this.textHandler.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.textHandler.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.textHandler.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.textHandler.nativeElement.style.top = event.target.offsetTop - 5 + 'px';
        console.log(this.currentObj);
    };
    designContainer.prototype.onDrag = function (index, event, item) {
        console.log(index, event, item);
        // console.log(this.currentObj)
        // this.currentObj.style.left = event.left + 5 + 'px';
        // this.currentObj.style.top = event.top + 5 + 'px';
    };
    designContainer.prototype.onDragStop = function (index, event, item) {
        console.log(index, event, item);
        // this.currentObj.style.left = event.left + 5 + 'px';
        // this.currentObj.style.top = event.top + 5 + 'px';
    };
    designContainer.prototype.onResize = function (index, event) {
        console.log(event);
    };
    __decorate([
        core_1.ViewChild('handler'),
        __metadata("design:type", Object)
    ], designContainer.prototype, "textHandler", void 0);
    designContainer = __decorate([
        core_1.Component({
            selector: 'designContainer',
            template: " \n                <section class=\"design-section col-xs-12\">\n                    <div [ngGrid]=\"gridConfig\" class=\"desgin-tool-sec\" style=\"width: 780px; height: 780px;\">\n                        <section class=\"desgin-inner\" data-bg=\"blank\">\n                         <p class=\"textNative\" id=\"{{text.randomNumber}}\" (click)=\"textNodeEvent($event)\" style=\"font-size: 18px;\" *ngFor=\"let text of textAreaVal\">{{text.text}}</p>\n                        </section>\n                        <div class=\"handler\" #handler [(ngGridItem)]=\"config\" (onResize)=\"onResize(i, $event)\" (onDrag)=\"onDrag(i, $event)\"></div>\n                     </div>\n                </section>\n                \n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], designContainer);
    return designContainer;
}());
exports.designContainer = designContainer;
//# sourceMappingURL=designContainer.js.map