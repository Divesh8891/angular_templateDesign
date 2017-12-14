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
var leftPanelComponent = (function () {
    function leftPanelComponent(_textService) {
        this._textService = _textService;
        this.panelActive = "text";
    }
    leftPanelComponent.prototype.showPanel = function (event, panel) {
        this.panelActive = panel;
        panel == 'Text' && (this.transValue = 0);
        panel == 'Image' && (this.transValue = -209);
        panel == 'Shape' && (this.transValue = -418);
        this.moduleWrapper.nativeElement.children[0].style['transform'] = 'translate(' + this.transValue + 'px,0px)';
    };
    leftPanelComponent.prototype.ngOnInit = function () {
        console.log("left-init");
        this._textService.moduleContainerController(this.moduleWrapper);
    };
    return leftPanelComponent;
}());
__decorate([
    core_1.ViewChild('moduleWrapper'),
    __metadata("design:type", Object)
], leftPanelComponent.prototype, "moduleWrapper", void 0);
leftPanelComponent = __decorate([
    core_1.Component({
        selector: '[leftModule]',
        template: " <!--button class=\"checkout btn\" (click)=checkOut($event)>Add to Cart</button-->\n                <div class=\"panel-action-wrapper\">            \n                    <button class=\"btn btn-text\" [class.active]=\"panelActive=='Text'\" (click)=\"showPanel($event,'Text')\">Text</button>\n                    <button class=\"btn btn-image\" [class.active]=\"panelActive=='Image'\" (click)=\"showPanel($event,'Image')\">Image</button>\n                    <button class=\"btn btn-image\" [class.active]=\"panelActive=='Shape'\" (click)=\"showPanel($event,'Shape')\">Shapes</button>\n                    <button class=\"btn btn-image\" [class.active]=\"panelActive=='Clipart'\" (click)=\"showPanel($event,'Image')\">Clipart</button>\n                </div>\n                <div class=\"module-wrapper\" #moduleWrapper>\n                    <div class=\"module-outter\">\n                        <section class=\"text-module module bg-grey\" textModule #textModuleWrapper></section>\n                        <section class=\"image-module module bg-grey\" imageModule #imageModuleWrapper></section>\n                        <section class=\"shape-module module bg-grey\" shapeModule #shapeModuleWrapper></section>\n                    </div>\n                </div>\n                \n                \n                "
    }),
    __metadata("design:paramtypes", [text_service_1.TextService])
], leftPanelComponent);
exports.leftPanelComponent = leftPanelComponent;
//# sourceMappingURL=leftPanel.js.map