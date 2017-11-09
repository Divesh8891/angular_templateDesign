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
    // ngDoCheck() {
    //     console.log("ngDoCheck")
    //     console.log(this._textService)
    // }
    // ngAfterContentInit() {
    //     console.log("ngAfterContentInit")
    //     console.log(this._textService)
    // }
    // ngAfterContentChecked() {
    //     console.log("ngAfterContentChecked")
    //     console.log(this._textService)
    // }
    // ngAfterViewInit() {
    //     console.log("ngAfterViewInit")
    //     console.log(this._textService)
    // }
    // ngAfterViewChecked() {
    //     console.log("ngAfterViewChecked")
    //     console.log(this._textService)
    // }
    // ngOnDestroy() {
    //     console.log("ngOnDestroy")
    //     console.log(this._textService)
    // }
    function AppComponent(_textService) {
        this._textService = _textService;
    }
    // ngOnChanges() {
    //     console.log("onchange")
    //     console.log(this._textService)
    // }
    AppComponent.prototype.ngOnInit = function () {
        //   this._textService.setCanvasElem(this.canvasElemRef)
        // console.log("ngOnInit")
        // console.log(this._textService)
        // console.log(this._textService.currentObj)
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: " \n\n    <div class=\"wrapper\">\n        <custom-header></custom-header>\n        <div class=\"wrapper-inner\">\n            <section class=\"left-module\" leftModule></section>\n            <div class=\"middle-module\" middleModule></div>\n            <section class=\"right-module  bg-grey\" rightModule></section>\n        </div>\n     \n    </div>\n\n    "
    }),
    __metadata("design:paramtypes", [text_service_1.TextService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map