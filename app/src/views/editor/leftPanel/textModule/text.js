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
var text_service_1 = require("../../../../service/text.service");
var textModuleComponent = (function () {
    function textModuleComponent(_textService) {
        this._textService = _textService;
        this.textPanelTitle = "Text";
        this.minfontSizeSlidervalue = 10;
        this.maxfontSizeSlidervalue = 100;
        this.defaultfontSizeSlidervalue = this.inputfontSizeValue;
        this.opacityValue = '1';
        this.me = this;
        this.color = "#ffffff";
        this.textColor = "#000000";
        this.minlineHeightSlidervalue = 10;
        this.maxlineHeightSlidervalue = 100;
        this.defaultlineHeightSlidervalue = this.inputlineHeightValue;
    }
    textModuleComponent.prototype.onfontSizeChanged = function (event) {
        if (this.currentObjRef != undefined) {
            this.inputfontSizeValue = event.value;
            this.updateTextcurrentObj('fontSize', event.value + 'px');
            this.updateTextcurrentObj('lineHeight', event.value + 'px');
            this._textService.setAlignmentValue(event.value, 'lineH');
        }
    };
    textModuleComponent.prototype.onfontSizeChangedFromInput = function (event) {
        if (this.currentObjRef != undefined) {
            this._textService.setAlignmentValue(event.target.value, 'font-size');
            this._textService.setAlignmentValue(event.target.value, 'lineH');
            this.updateTextcurrentObj('fontSize', event.target.value + 'px');
        }
    };
    textModuleComponent.prototype.updateOpacity = function (event) {
        this.opacityValue = event.target.value;
        this.currentObjRef.style['background-color'] = this._textService.hexToRgbA(this.pickerBgBox.nativeElement.attributes[1].value, parseFloat(this.opacityValue));
    };
    textModuleComponent.prototype.updateFontFamliy = function (event) {
        this.updateTextcurrentObj('fontFamily', event.target.value);
    };
    textModuleComponent.prototype.applyBold = function (event) {
        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active');
            this.updateTextcurrentObj('fontWeight', 400);
        }
        else {
            event.target.classList.add('active');
            this.updateTextcurrentObj('fontWeight', 700);
        }
    };
    textModuleComponent.prototype.applyItalic = function (event) {
        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active');
            this.updateTextcurrentObj('fontStyle', 'normal');
        }
        else {
            event.target.classList.add('active');
            this.updateTextcurrentObj('fontStyle', 'italic');
        }
    };
    textModuleComponent.prototype.applyUnderline = function (event) {
        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active');
            this.updateTextcurrentObj('textDecoration', '');
        }
        else {
            event.target.classList.add('active');
            this.updateTextcurrentObj('textDecoration', 'underline');
        }
    };
    textModuleComponent.prototype.applyTextTransform = function (event) {
        this.currentObjRef.style['text-transform'] = event.target.dataset['transform'];
    };
    textModuleComponent.prototype.applyTextAlign = function (event) {
        this.currentObjRef.style['text-align'] = event.target.dataset['align'];
    };
    textModuleComponent.prototype.updateTextcurrentObj = function (property, value) {
        // console.log(this.currentObjRef)
        var oldFontValue = parseInt(this.currentObjRef.style[property]);
        this.currentObjRef.style[property] = value;
        if (property == 'fontSize') {
            var newWidthValue = Math.round(((parseInt(this.currentObjRef.style.width) * parseInt(value)) / oldFontValue));
            this.currentObjRef.style.width = newWidthValue + '%';
        }
        // console.log(this.currentObjRef.offsetWidth)
        this._textService.setSliderValue(this.currentObjRef.offsetWidth, 'minV');
        this.handlerParentRef.style.width = this.currentObjRef.offsetWidth + 10 + 'px';
        this.handlerParentRef.style.height = this.currentObjRef.offsetHeight + 10 + 'px';
    };
    textModuleComponent.prototype.closeTextBgPicker = function (event) {
        if (this.currentObjRef != undefined)
            this.currentObjRef.style.backgroundColor = this._textService.hexToRgbA(event, this.opacityValue);
    };
    textModuleComponent.prototype.horizontalC = function () {
        var currentObjW = parseInt(this.currentObjRef.style['width']);
        var objLet = Math.round((100 - currentObjW) / 2);
        this.currentObjRef.style['left'] = Math.round((objLet * parseInt(this.designcontainerRef.style["width"])) / 100) + 'px';
        this.handlerParentRef.style.left = parseInt(this.currentObjRef.style['left']) - 5 + 'px';
    };
    textModuleComponent.prototype.verticallyC = function () {
        var currentObjW = parseInt(this.handlerParentRef.style['height']);
        var containerH = parseInt(this.designcontainerRef.style["height"]);
        var objTop = Math.round((containerH - currentObjW - 5) / 2);
        this.currentObjRef.style.top = objTop + 'px';
        this.handlerParentRef.style["top"] = objTop - 5 + 'px';
    };
    textModuleComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("text-init");
        this.designcontainerRef = this._textService.designcontainerRef.nativeElement;
        this._textService.currentObjController('getCurrentObj', '', '').subscribe(function (data) {
            _this.currentObjRef = data;
            if (_this.currentObjRef == undefined) {
                _this.currentObjRef = undefined;
            }
            else {
                //console.log(this.currentObjRef)
                _this.currentObjRef = _this.currentObjRef.nativeElement;
            }
        });
        this._textService.currentObjController('getHandlerParentObj', '', '').subscribe(function (data) {
            _this.handlerParentRef = data;
            _this.handlerParentRef = _this.handlerParentRef.nativeElement;
        });
        this._textService.getFontSize().subscribe(function (data) {
            var me = _this;
            if (_this.currentObjRef != undefined) {
                setTimeout(function () {
                    me.inputfontSizeValue = data;
                }, 100);
            }
        });
        this._textService.getLineH().subscribe(function (data) {
            var me = _this;
            if (_this.currentObjRef != undefined) {
                setTimeout(function () {
                    me.inputlineHeightValue = data;
                }, 100);
            }
        });
    };
    return textModuleComponent;
}());
__decorate([
    core_1.ViewChild('pickerBgBox'),
    __metadata("design:type", Object)
], textModuleComponent.prototype, "pickerBgBox", void 0);
textModuleComponent = __decorate([
    core_1.Component({
        selector: '[textModule]',
        template: " \n                        <h2 id=\"textValhidden\">fsdfs</h2>\n                        <h5 class=\"heading\">{{textPanelTitle}}</h5>\n                        <div class=\"seperator\"></div>\n                        <div textArea></div>\n                        <div class=\"seperator\"></div>\n                        <div selectBox class=\"font-famliy-sec select-box \"  [defaultOptionValue]=\"'Font-famliy'\" (change)=\"updateFontFamliy($event)\"></div>\n                                                  <div class=\"seperator\"></div>\n                        <div class=\"font-size-wrappper\">\n                            <h5 class=\"m0\">font-size</h5>\n                            <div class=\"fontSizeSlider\">\n                                <md-slider class=\"custom-slider\" (input)=\"onfontSizeChanged($event)\"  min=\"{{minfontSizeSlidervalue}}\" max=\"{{maxfontSizeSlidervalue}}\" value=\"{{inputfontSizeValue}}\"></md-slider>\n                            </div>\n                            <input type=\"number\" placeholder=\"top\" class=\"fontS\" (input)=\"onfontSizeChangedFromInput($event)\" [(ngModel)]=\"inputfontSizeValue\">\n                        </div>\n                         <!--div class=\"line-height-wrappper\">\n                            <h5 class=\"m0\">line-Gap</h5>\n                            <div class=\"lineHeightSlider\">\n                                <md-slider class=\"custom-slider\" (input)=\"onLineHChanged($event)\"  min=\"{{minlineHeightSlidervalue}}\" max=\"{{maxlineHeightSlidervalue}}\" value=\"{{inputlineHeightValue}}\"></md-slider>\n                            </div>\n                            <input type=\"number\" placeholder=\"lineH\" class=\"lineH\" (input)=\"onLineHChangedFromInput($event)\" [(ngModel)]=\"inputlineHeightValue\">\n                        </div-->\n                        <!--div selectBox class=\"font-sec select-box\" [defaultOptionValue]=\"'Font-size'\" (change)=\"updateFontS($event)\"></div>\n                        <div selectBox class=\"line-height-sec select-box ml5\" [defaultOptionValue]=\"'line-height'\" (change)=\"updateLineHeight($event)\"></div-->\n                        <!--div selectBox class=\"stroke-width-sec select-box ml5\" [defaultOptionValue]=\"'stroke-width'\" (change)=\"updateStrokeWidth($event)\"></div-->\n                        <div class=\"seperator\"></div>\n                        \n                        <!--span #pickerTextColorBox [(colorPicker)]=\"textColor\" (colorPickerChange)=\"closeTextPicker($event)\"\n                            [cpPosition]=\"'right'\"\n                            [style.backgroundColor]=\"textColor\"\n                            [cpPositionOffset]=\"'50%'\"\n                            [cpPositionRelativeToArrow]=\"true\" class=\"text-color icon\" [cpPresetColors]=\"colorArray\"\n                            [cpOKButton]=\"true\"\n                            [cpSaveClickOutside]=\"true\"\n                            [cpOKButtonClass]= \"'btn btn-primary btn-xs'\"\n                            ></span-->\n                            <!--button class=\"color btn icon\" (click)=applyColor($event)><i  class=\"sprite-img\"></i></button>\n                            <button class=\"stroke-color btn  icon\" (click)=applyColor($event)>Stroke Color</button>\n                            <button class=\"back-color btn  icon\" (click)=applyBgColor($event)><i class=\"sprite-img\"></i></button-->\n\n                          <span #pickerBgBox [(colorPicker)]=\"color\" (colorPickerChange)=\"closeTextBgPicker($event)\"\n                            [cpPosition]=\"'right'\"\n                            [style.backgroundColor]=\"color\"\n                            [cpPositionOffset]=\"'50%'\"\n                            [cpPositionRelativeToArrow]=\"true\" class=\"text-back-color icon\" [cpPresetColors]=\"colorArray\"\n                            [cpOKButton]=\"true\"\n                            [cpSaveClickOutside]=\"true\"\n                            [cpOKButtonClass]= \"'btn btn-primary btn-xs'\"\n                            ><i  class=\"sprite-img\"></i></span>\n\n                        <div selectBox class=\"opacity-width-sec select-box\" [defaultOptionValue]=\"'Opacity'\" (change)=\"updateOpacity($event)\"></div>\n                        <div class=\"seperator\"></div>\n                        <div class=\"text-center align-center\">\n                        <button class=\"btn\" (click)=horizontalC($event)>HCenter</button>\n                        <button class=\"btn\" (click)=verticallyC($event)>VCenter</button>\n                        </div>\n                        <div class=\"seperator\"></div>\n                    \n                        <button class=\"bold btn text-font-effect\" (click)=applyBold($event)>B</button>\n                        <button class=\"italic btn text-font-effect\" (click)=applyItalic($event)>I</button>\n                        <button class=\"underline btn text-font-effect\" (click)=applyUnderline($event)>U</button>\n                        <div class=\"seperator\"></div>\n                        <button class=\"lower-case btn text-transform\" (click)=applyTextTransform($event) data-transform=\"lowercase\">tt</button>\n                        <button class=\"upper-case btn text-transform\" (click)=applyTextTransform($event) data-transform=\"uppercase\">TT</button>\n                        <button class=\"camel-case btn text-transform\" (click)=applyTextTransform($event) data-transform=\"capitalize\">Tt</button>\n                        <div class=\"seperator\"></div>\n                        <button class=\"text-left btn text-align\" (click)=applyTextAlign($event) data-align=\"left\">left</button>\n                        <button class=\"text-middle btn text-align\" (click)=applyTextAlign($event) data-align=\"center\">mid</button>\n                        <button class=\"text-right btn text-align\" (click)=applyTextAlign($event) data-align=\"right\">right</button>\n    "
    }),
    __metadata("design:paramtypes", [text_service_1.TextService])
], textModuleComponent);
exports.textModuleComponent = textModuleComponent;
//# sourceMappingURL=text.js.map