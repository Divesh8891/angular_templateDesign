"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rightPanelComponent = (function () {
    function rightPanelComponent() {
    }
    rightPanelComponent = __decorate([
        core_1.Component({
            selector: 'right-panel',
            template: " \n        <div class=\"col-xs-9\">\n                    <div class=\"text-center ptb-20 col-xs-12\">\n                        <ul class=\"list-inline\">\n                            <li><a href=\"javascript:commonoption.alignb();\" class=\"btn\">Send Back</a></li>\n                            <li><a href=\"javascript:commonoption.alignf();\" class=\"btn\">Bring front</a></li>\n                            <li><a href=\"javascript:commonoption.alignbw();\" class=\"btn\">Send Backward</a></li>\n                            <li><a href=\"javascript:commonoption.alignfw();\" class=\"btn\">Bring Forward</a></li>\n                            <li><a href=\"javascript:commonoption.delete();\" class=\"delete btn\">Delete</a></li>\n                            <li><a href=\"javascript:commonoption.preview();\" class=\"preview btn\">Preview</a></li>\n                            <li><a href=\"javascript:commonoption.save();\" class=\"save btn\">Save</a></li>\n                        </ul>\n                    </div>\n                   <designContainer></designContainer>\n                </div>\n    "
        })
    ], rightPanelComponent);
    return rightPanelComponent;
}());
exports.rightPanelComponent = rightPanelComponent;
//# sourceMappingURL=rightPanel.js.map