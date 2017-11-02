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
var selectBoxComponent = (function () {
    function selectBoxComponent() {
    }
    selectBoxComponent.prototype.ngOnInit = function () {
        if (this.defaultOptionValue == 'Font-size') {
            this.optionArray = [12, 15, 18, 20, 24, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 58, 60, 65];
            this.textfilter = this.optionArray[0];
        }
        if (this.defaultOptionValue == 'line-height') {
            this.optionArray = [12, 15, 18, 20, 24, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 58, 60, 65];
            this.textfilter = this.optionArray[0];
        }
        if (this.defaultOptionValue == 'Font-famliy') {
            this.optionArray = ["Quicksand", "SourceSansPro", "Arial", "impact", "urban", "Archive", "Semi-Coder-Regular"];
            this.textfilter = this.optionArray[0];
        }
        if (this.defaultOptionValue == 'stroke-width') {
            this.optionArray = [0.5, 0.8, 1, 1.5, 1.8, 2, 3, 4, 5, 8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 45, 48];
            this.textfilter = this.optionArray[3];
        }
        if (this.defaultOptionValue == 'Opacity') {
            this.optionArray = [0.1, 0.3, 0.5, 0.8, 1];
            this.textfilter = this.optionArray[3];
        }
        if (this.defaultOptionValue == 'Select Type') {
            this.optionArray = ['Pixels', 'Inches'];
            this.textfilter = this.optionArray[0];
        }
        if (this.defaultOptionValue == 'Scale') {
            this.optionArray = [1, 2, 3, 4, 5, 6, 7, 8];
            this.textfilter = this.optionArray[0];
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], selectBoxComponent.prototype, "parentClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], selectBoxComponent.prototype, "defaultOptionValue", void 0);
    selectBoxComponent = __decorate([
        core_1.Component({
            selector: '[selectBox]',
            template: "\n      <select name=\"filter\" [(ngModel)]=\"textfilter\">\n         <option value=\"0\">{{defaultOptionValue}}</option>\n         <option value=\"{{optionValue}}\" *ngFor=\"let optionValue of optionArray\" [attr.selected]=\"optionValue==textfilter?true:null\">{{optionValue}}</option>\n      </select>\n     "
        })
    ], selectBoxComponent);
    return selectBoxComponent;
}());
exports.selectBoxComponent = selectBoxComponent;
//# sourceMappingURL=selectBox.js.map