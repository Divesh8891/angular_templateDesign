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
var http_1 = require("@angular/http");
var EditorComponent = (function () {
    function EditorComponent(http, _textService) {
        this.http = http;
        this._textService = _textService;
        this.currentId = "";
        this.productColor = "";
    }
    EditorComponent.prototype.prodConfirm = function () {
        console.log(this._textService.designcontainerRef.nativeElement);
        this.showPreview();
        this.modalWrapper.nativeElement.style.display = "block";
        this.modalOverlay.nativeElement.style.display = "block";
    };
    EditorComponent.prototype.closeModal = function () {
        this.modalWrapper.nativeElement.style.display = "none";
        this.modalOverlay.nativeElement.style.display = "none";
    };
    EditorComponent.prototype.saveImage = function () {
        var me = this;
        me.handlerParentRef.style.display = "block" ? me.handlerParentRef.style.display = 'none' : '';
        html2canvas(this._textService.designcontainerRef.nativeElement).then(function (canvas) {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            a.download = 'template.png';
            a.click();
            // me.handlerParentRef.style.display = 'block';
            me.closeModal();
        }.bind(this));
    };
    EditorComponent.prototype.showPreview = function () {
        var me = this;
        console.log(me.handlerParentRef);
        me.handlerParentRef == undefined ? alert('Design your cap') : me.handlerParentRef.style.display = 'none';
        html2canvas(this._textService.designcontainerRef.nativeElement).then(function (canvas) {
            me.modalImgSrc = canvas.toDataURL("image/jpeg");
            me.handlerParentRef != undefined ? me.handlerParentRef.style.display = 'block' : '';
        });
    };
    EditorComponent.prototype.updateMove = function (event) {
        this.cursorx = ("X" + event.x + ",offesetX" + event.offsetX);
        this.cursory = ("Y" + event.y + ",offsetY" + event.offsetY);
        // console.log("doc",event)
    };
    EditorComponent.prototype.showInfo = function (obj) {
        this.productHoverOption.nativeElement.className = "product-hover-option-show";
        if (this.productHoverOption.nativeElement.className == 'product-hover-option-show' && obj.type == "mouseenter") {
            this.productHoverOption.nativeElement.style.top = obj.target.offsetTop + "px";
            this.productHoverOption.nativeElement.style.left = obj.target.offsetLeft + "px";
            this.currentId = obj.target.id;
            console.log(obj.relatedTarget.dataset.color);
            if (obj.relatedTarget != null) {
                this.productColor = obj.relatedTarget.dataset.color == undefined ? [] : obj.relatedTarget.dataset.color.split(",");
            }
        }
        else {
            this.productHoverOption.nativeElement.className = "product-hover-option";
        }
    };
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("product-detail--init");
        console.log("app");
        this.http.get('../app/assets/product.json').subscribe(function (res) {
            _this.productObj = res.json();
        });
        this._textService.currentObjController('getHandlerParentObj', '', '').subscribe(function (data) {
            _this.handlerParentRef = data;
            _this.handlerParentRef = _this.handlerParentRef.nativeElement;
        });
    };
    return EditorComponent;
}());
__decorate([
    core_1.ViewChild('productHoverOption'),
    __metadata("design:type", Object)
], EditorComponent.prototype, "productHoverOption", void 0);
__decorate([
    core_1.ViewChild('modalOverlay'),
    __metadata("design:type", Object)
], EditorComponent.prototype, "modalOverlay", void 0);
__decorate([
    core_1.ViewChild('modalWrapper'),
    __metadata("design:type", Object)
], EditorComponent.prototype, "modalWrapper", void 0);
EditorComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/src/views/editor/editor.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, text_service_1.TextService])
], EditorComponent);
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=editor.js.map