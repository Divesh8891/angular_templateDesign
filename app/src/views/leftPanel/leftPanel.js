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
var leftPanelComponent = (function () {
    function leftPanelComponent() {
        this.childTitle = 'This text is passed to child';
    }
    leftPanelComponent.prototype.ngAfterViewInit = function () {
        console.log(this.alignmentRef);
    };
    __decorate([
        core_1.ViewChild('alignment', { read: core_1.ElementRef }),
        __metadata("design:type", core_1.ElementRef)
    ], leftPanelComponent.prototype, "alignmentRef", void 0);
    leftPanelComponent = __decorate([
        core_1.Component({
            selector: '[leftPanel]',
            template: " \n                <section class=\"ImageModule col-xs-12 p-0 module\" imageModule></section>\n                <section class=\"TextModule col-xs-12 p-0 module\" textModule></section>\n                <color-box></color-box>\n            "
        })
    ], leftPanelComponent);
    return leftPanelComponent;
}());
exports.leftPanelComponent = leftPanelComponent;
//# sourceMappingURL=leftPanel.js.map