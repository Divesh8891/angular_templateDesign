"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var textAreaComponent = (function () {
    function textAreaComponent() {
        this.textAreaClass = 'js-text-val text-val';
        this.textPlaceholder = 'Add Text';
    }
    textAreaComponent.prototype.addtext = function (event) {
        alert(this.textAreaValue);
    };
    textAreaComponent = __decorate([
        core_1.Component({
            selector: 'my-textArea',
            template: " <div class=\"col-xs-12\">\n                    <textarea [placeholder]=\"textPlaceholder\" [class]=\"textAreaClass\" [(ngModel)]= \"textAreaValue\"></textarea>\n                    <a href=\"javascript:void(0);\" class=\"btn btn-lrg\" (click)=\"addtext($event)\">Add</a>\n                </div>"
        })
    ], textAreaComponent);
    return textAreaComponent;
}());
exports.textAreaComponent = textAreaComponent;
//# sourceMappingURL=textArea.js.map