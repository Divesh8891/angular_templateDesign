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
var FileDropDirective = FileDropDirective_1 = (function () {
    function FileDropDirective() {
        this.isFileOver = new core_1.EventEmitter();
        this.fileDrop = new core_1.EventEmitter();
    }
    FileDropDirective.prototype.onDragOver = function (event) {
        var dataTransfer = FileDropDirective_1.getDataTransfer(event);
        if (!FileDropDirective_1.hasFiles(dataTransfer.types)) {
            return;
        }
        dataTransfer.dropEffect = 'copy';
        event.preventDefault();
        this.isFileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        this.isFileOver.emit(false);
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var dataTransfer = FileDropDirective_1.getDataTransfer(event);
        if (!FileDropDirective_1.hasFiles(dataTransfer.types)) {
            return;
        }
        event.preventDefault();
        var files = this.filterFiles(dataTransfer.files);
        event.preventDefault();
        this.isFileOver.emit(false);
        this.fileDrop.emit(files);
    };
    FileDropDirective.prototype.filterFiles = function (files) {
        if (!this.accept || this.accept.length === 0) {
            return files;
        }
        var acceptedFiles = [];
        for (var i = 0; i < files.length; i++) {
            for (var j = 0; j < this.accept.length; j++) {
                if (FileDropDirective_1.matchRule(this.accept[j], files[i].type)) {
                    acceptedFiles.push(files[i]);
                    break;
                }
            }
        }
        return acceptedFiles;
    };
    FileDropDirective.matchRule = function (rule, candidate) {
        return new RegExp("^" + rule.split("*").join(".*") + "$").test(candidate);
    };
    FileDropDirective.getDataTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    FileDropDirective.hasFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        if (types.contains) {
            return types.contains('Files');
        }
        return false;
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], FileDropDirective.prototype, "accept", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "isFileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileDrop", void 0);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AnalyserNode]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragLeave", null);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
FileDropDirective = FileDropDirective_1 = __decorate([
    core_1.Directive({
        selector: '[fileDrop]'
    })
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;
var FileDropDirective_1;
//# sourceMappingURL=file-drop.directive.js.map