"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leftPanelComponent = (function () {
    function leftPanelComponent() {
    }
    leftPanelComponent = __decorate([
        core_1.Component({
            selector: 'left-panel',
            template: " \n                <section class=\"option-panel col-xs-3\">\n                    <text-module></text-module>\n                    <image-module></image-module>\n                    <template-module></template-module>\n                    <alignment-module></alignment-module>\n                    \n                    \n                </section>\n            "
        })
    ], leftPanelComponent);
    return leftPanelComponent;
}());
exports.leftPanelComponent = leftPanelComponent;
//# sourceMappingURL=leftPanel.js.map