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
var text_service_1 = require("../service/text.service");
var AppComponent = (function () {
    function AppComponent(_textService) {
        this._textService = _textService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._textService.setCanvasElem(this.canvasElemRef);
    };
    __decorate([
        core_1.ViewChild('imageGen'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "canvasElemRef", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n\n    <div class=\"wrapper container p-0\">\n        <custom-header></custom-header>\n        <div class=\"wrapper-inner col-xs-12\" style=\"min-height: 891px;\">\n            <div class=\"row\">\n                <section class=\"option-panel p-0\" leftPanel></section>\n                <div class=\"middle-section\" middlePanel></div>\n                <section class=\"alignment-module  p-0 module\" alignmentModule></section>\n            </div>\n        </div>\n         <section class=\"imageGen\" #imageGen>\n             <img id=\"canvasPNG\" class=\"downloadable\">\n         </section>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map