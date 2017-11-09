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
var image_service_1 = require("../image.service");
var FileHolder = (function () {
    function FileHolder(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
    }
    return FileHolder;
}());
exports.FileHolder = FileHolder;
var ImageUploadComponent = (function () {
    function ImageUploadComponent(imageService) {
        this.imageService = imageService;
        this.max = 100;
        this.preview = true;
        this.withCredentials = false;
        this.isPending = new core_1.EventEmitter();
        this.onFileUploadFinish = new core_1.EventEmitter();
        this.onRemove = new core_1.EventEmitter();
        this.files = [];
        this.showFileTooLargeMessage = false;
        this.fileCounter = 0;
        this.isFileOver = false;
        this.buttonCaption = 'Select Images';
        this.dropBoxMessage = 'Drop your images here!';
        this.pendingFilesCounter = 0;
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        if (!this.fileTooLargeMessage) {
            this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
        }
        this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map(function (ext) { return 'image/' + ext; }) : ['image/*'];
    };
    ImageUploadComponent.prototype.fileChange = function (files) {
        var remainingSlots = this.countRemainingSlots();
        var filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
        if (this.url && filesToUploadNum != 0) {
            this.isPending.emit(true);
        }
        this.fileCounter += filesToUploadNum;
        this.showFileTooLargeMessage = false;
        this.uploadFiles(files, filesToUploadNum);
    };
    ImageUploadComponent.prototype.deleteFile = function (file) {
        var index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.fileCounter--;
        this.inputElement.nativeElement.value = '';
        this.onRemove.emit(file);
    };
    ImageUploadComponent.prototype.deleteAll = function () {
        var _this = this;
        this.files.forEach(function (f) { return _this.onRemove.emit(f); });
        this.files = [];
        this.fileCounter = 0;
        this.inputElement.nativeElement.value = '';
    };
    ImageUploadComponent.prototype.fileOver = function (isOver) {
        this.isFileOver = isOver;
    };
    ImageUploadComponent.prototype.onLoadFile = function (event) {
        var img = new Image();
        img.onload = function (scope) {
        };
        //img.src = event.target.result;
    };
    ImageUploadComponent.prototype.uploadFiles = function (files, filesToUploadNum) {
        var _this = this;
        var _loop_1 = function (i) {
            var file = files[i];
            if (this_1.maxFileSize && file.size > this_1.maxFileSize) {
                this_1.showFileTooLargeMessage = true;
                return "continue";
            }
            var img = document.createElement('img');
            img.src = window.URL.createObjectURL(file);
            var reader = new FileReader();
            reader.addEventListener('load', function (event) {
                var fileHolder = new FileHolder(event.target.result, file);
                _this.uploadSingleFile(fileHolder);
                _this.files.push(fileHolder);
            }, false);
            reader.readAsDataURL(file);
        };
        var this_1 = this;
        for (var i = 0; i < filesToUploadNum; i++) {
            _loop_1(i);
        }
    };
    ImageUploadComponent.prototype.onResponse = function (response, fileHolder) {
        fileHolder.serverResponse = response;
        fileHolder.pending = false;
        console.log("51");
        this.onFileUploadFinish.emit(fileHolder);
        if (--this.pendingFilesCounter == 0) {
            this.isPending.emit(false);
        }
    };
    ImageUploadComponent.prototype.uploadSingleFile = function (fileHolder) {
        var _this = this;
        if (this.url) {
            this.pendingFilesCounter++;
            fileHolder.pending = true;
            this.imageService
                .postImage(this.url, fileHolder.file, this.headers, this.partName, this.withCredentials)
                .subscribe(function (response) { return _this.onResponse(response, fileHolder); }, function (error) {
                _this.onResponse(error, fileHolder);
                _this.deleteFile(fileHolder);
            });
        }
        else {
            console.log("6");
            this.onFileUploadFinish.emit(fileHolder);
        }
    };
    ImageUploadComponent.prototype.countRemainingSlots = function () {
        return this.max - this.fileCounter;
    };
    return ImageUploadComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ImageUploadComponent.prototype, "max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ImageUploadComponent.prototype, "url", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ImageUploadComponent.prototype, "headers", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ImageUploadComponent.prototype, "preview", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ImageUploadComponent.prototype, "maxFileSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ImageUploadComponent.prototype, "withCredentials", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ImageUploadComponent.prototype, "partName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ImageUploadComponent.prototype, "isPending", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ImageUploadComponent.prototype, "onFileUploadFinish", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ImageUploadComponent.prototype, "onRemove", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ImageUploadComponent.prototype, "buttonCaption", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ImageUploadComponent.prototype, "dropBoxMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ImageUploadComponent.prototype, "fileTooLargeMessage", void 0);
__decorate([
    core_1.Input('extensions'),
    __metadata("design:type", Array)
], ImageUploadComponent.prototype, "supportedExtensions", void 0);
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", core_1.ElementRef)
], ImageUploadComponent.prototype, "inputElement", void 0);
ImageUploadComponent = __decorate([
    core_1.Component({
        selector: 'image-uploads',
        templateUrl: './image-upload.component.html',
        styleUrls: ['./image-upload.component.css']
    }),
    __metadata("design:paramtypes", [image_service_1.ImageService])
], ImageUploadComponent);
exports.ImageUploadComponent = ImageUploadComponent;
//# sourceMappingURL=image-upload.component.js.map