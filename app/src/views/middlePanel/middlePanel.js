"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MiddlePanelComponent = (function () {
    function MiddlePanelComponent() {
        this.helpImagePopupStatus = false;
    }
    MiddlePanelComponent.prototype.openFolderOption = function (event) {
        this.helpImagePopupStatus = event;
    };
    MiddlePanelComponent.prototype.showlist = function (event) {
        this.myString = event.target.innerHTML;
    };
    // getFileNames(dir) {
    //     let results = [];
    //     _fsService.readdir(dir).forEach(function (file) {
    //         file = dir + '/' + file;
    //         results.push(file);
    //     });
    //     return results;
    // }
    MiddlePanelComponent.prototype.ngOnInit = function () {
        //,,  console.log(this._fsService)
    };
    return MiddlePanelComponent;
}());
MiddlePanelComponent = __decorate([
    core_1.Component({
        selector: '[middleModule]',
        template: " \n                <section class=\"template-module bg-grey\" templateModule (onfolderChoose)=openFolderOption($event)></section>\n                <section class=\"design-section display-inline\" designContainer></section>\n                <section class=\"help-image-popup \" #helpImagePopup (onfolderChoose)=openFolderOption($event)>\n                    <ul class=\"left-sec\">\n                        <li [class.active]=\"myString == 'Products'\"><span (click)=\"showlist($event)\">Products</span></li>\n                        <li [class.active]=\"myString == 'Shapes' \"><span (click)=\"showlist($event)\">Shapes</span></li>\n                        <li [class.active]=\"myString == 'Smilies' \"><span (click)=\"showlist($event)\">Smilies</span></li>\n                    </ul>\n                    <div class=\"right-sec\">\n                           <ul class=\"shapes\"><li data-parent=\"shapes\" class=\"active\"><img src=\"../app/assets/imageLibrary/shapes/rect.png\" /></ul>\n                    </div>\n                </section>\n        \n                        \n    "
    })
], MiddlePanelComponent);
exports.MiddlePanelComponent = MiddlePanelComponent;
//# sourceMappingURL=MiddlePanel.js.map