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
var text_service_1 = require("../../service/text.service");
var textAreaComponent = (function () {
    function textAreaComponent(_textService) {
        this._textService = _textService;
        this.textAreaClass = 'js-text-val text-val';
        this.textPlaceholder = 'Add Text';
        this.users = [];
    }
    textAreaComponent.prototype.addtext = function (event) {
        var a = new Date();
        this.randomNumber = a.getTime();
        this.users.push(new User(this.textAreaValue, this.randomNumber));
        this.textAreaValue === '' ? alert(this.textAreaValue) : this._textService.setTextValue(this.users);
    };
    textAreaComponent = __decorate([
        core_1.Component({
            selector: 'my-textArea',
            template: " <div class=\"col-xs-12\">\n                    <textarea [placeholder]=\"textPlaceholder\" [class]=\"textAreaClass\" [(ngModel)]= \"textAreaValue\"></textarea>\n                    <a href=\"javascript:void(0);\" class=\"btn btn-lrg\" (click)=\"addtext($event)\">Add</a>\n                </div>"
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], textAreaComponent);
    return textAreaComponent;
}());
exports.textAreaComponent = textAreaComponent;
var User = (function () {
    function User(text, randomNumber) {
        this.text = text;
        this.randomNumber = randomNumber;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=textArea.js.map