import { Component, Output, EventEmitter, Input, ViewChildren, ViewChild } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: '[textModule]',
    template: ` 
                        <h2 id="textValhidden">fsdfs</h2>
                        <h5 class="heading">{{textPanelTitle}}</h5>
                        <div class="seperator"></div>
                        <div textArea></div>
                        <div class="seperator"></div>
                        <div selectBox class="font-famliy-sec select-box "  [defaultOptionValue]="'Font-famliy'" (change)="updateFontFamliy($event)"></div>
                                                  <div class="seperator"></div>
<div class="font-size-wrappper">
                            <h5 class="m0">font-size</h5>
                            <div class="fontSizeSlider">
                                <md-slider class="custom-slider" (input)="onfontSizeChanged($event)"  min="{{minfontSizeSlidervalue}}" max="{{maxfontSizeSlidervalue}}" value="{{inputfontSizeValue}}"></md-slider>
                            </div>
                            <input type="number" placeholder="top" class="fontS" (input)="onfontSizeChangedFromInput($event)" [(ngModel)]="inputfontSizeValue">
                        </div>
                         <div class="line-height-wrappper">
                            <h5 class="m0">line-Gap</h5>
                            <div class="lineHeightSlider">
                                <md-slider class="custom-slider" (input)="onLineHChanged($event)"  min="{{minlineHeightSlidervalue}}" max="{{maxlineHeightSlidervalue}}" value="{{inputlineHeightValue}}"></md-slider>
                            </div>
                            <input type="number" placeholder="lineH" class="lineH" (input)="onLineHChangedFromInput($event)" [(ngModel)]="inputlineHeightValue">
                        </div>
                        <!--div selectBox class="font-sec select-box" [defaultOptionValue]="'Font-size'" (change)="updateFontS($event)"></div>
                        <div selectBox class="line-height-sec select-box ml5" [defaultOptionValue]="'line-height'" (change)="updateLineHeight($event)"></div-->
                        <!--div selectBox class="stroke-width-sec select-box ml5" [defaultOptionValue]="'stroke-width'" (change)="updateStrokeWidth($event)"></div-->
                        <div class="seperator"></div>
                        
                        <span #pickerTextColorBox [(colorPicker)]="textColor" (colorPickerChange)="closeTextPicker($event)"
                            [cpPosition]="'right'"
                            [style.backgroundColor]="textColor"
                            [cpPositionOffset]="'50%'"
                            [cpPositionRelativeToArrow]="true" class="text-color icon" [cpPresetColors]="colorArray"
                            [cpOKButton]="true"
                            [cpSaveClickOutside]="true"
                            [cpOKButtonClass]= "'btn btn-primary btn-xs'"
                            ></span>
                            <!--button class="color btn icon" (click)=applyColor($event)><i  class="sprite-img"></i></button>
                            <button class="stroke-color btn  icon" (click)=applyColor($event)>Stroke Color</button>
                            <button class="back-color btn  icon" (click)=applyBgColor($event)><i class="sprite-img"></i></button-->

                          <span #pickerBgBox [(colorPicker)]="color" (colorPickerChange)="closeTextBgPicker($event)"
                            [cpPosition]="'right'"
                            [style.backgroundColor]="color"
                            [cpPositionOffset]="'50%'"
                            [cpPositionRelativeToArrow]="true" class="text-back-color icon" [cpPresetColors]="colorArray"
                            [cpOKButton]="true"
                            [cpSaveClickOutside]="true"
                            [cpOKButtonClass]= "'btn btn-primary btn-xs'"
                            ><i  class="sprite-img"></i></span>
                        <div selectBox class="opacity-width-sec select-box" [defaultOptionValue]="'Opacity'" (change)="updateOpacity($event)"></div>
                        <div class="seperator"></div>
                        <button class="bold btn text-font-effect" (click)=applyBold($event)>B</button>
                        <button class="italic btn text-font-effect" (click)=applyItalic($event)>I</button>
                        <button class="underline btn text-font-effect" (click)=applyUnderline($event)>U</button>
                        <div class="seperator"></div>
                        <button class="lower-case btn text-transform" (click)=applyTextTransform($event) data-transform="lowercase">tt</button>
                        <button class="upper-case btn text-transform" (click)=applyTextTransform($event) data-transform="uppercase">TT</button>
                        <button class="camel-case btn text-transform" (click)=applyTextTransform($event) data-transform="capitalize">Tt</button>
                        <div class="seperator"></div>
                        <button class="text-left btn text-align" (click)=applyTextAlign($event) data-align="left">left</button>
                        <button class="text-middle btn text-align" (click)=applyTextAlign($event) data-align="center">mid</button>
                        <button class="text-right btn text-align" (click)=applyTextAlign($event) data-align="right">right</button>
    `
})

export class textModuleComponent {

    inputfontSizeValue: any;
    minfontSizeSlidervalue: any = 10;
    maxfontSizeSlidervalue: any = 100;
    defaultfontSizeSlidervalue: any = this.inputfontSizeValue;

    inputlineHeightValue: any;
    minlineHeightSlidervalue: any = 10;
    maxlineHeightSlidervalue: any = 100;
    defaultlineHeightSlidervalue: any = this.inputlineHeightValue;


    textPanelTitle = "Text";
    opacityValue: any = '1'
    me = this;
    private color: string = "#ffffff";
    private textColor: string = "#000000";


    handlerRef: any;
    designcontainerRef: any;
    currentObjRef: any;

    @ViewChild('pickerBgBox') public pickerBgBox: any;

    onfontSizeChanged(event: any) {
        if (this.currentObjRef != undefined) {
            this.inputfontSizeValue = event.value;
            this.updateTextcurrentObj('fontSize', event.value + 'px');
            this.updateTextcurrentObj('lineHeight', event.value + 'px')
            this._textService.setAlignmentValue(event.value, 'lineH');
        }
    }
    onfontSizeChangedFromInput(event: any) {
        if (this.currentObjRef != undefined) {
            this._textService.setAlignmentValue(event.target.value, 'font-size');
            this._textService.setAlignmentValue(event.target.value, 'lineH');
            this.updateTextcurrentObj('fontSize', event.target.value + 'px');

        }

    }
    onLineHChanged(event: any) {
        if (this.currentObjRef != undefined) {
            this.inputlineHeightValue = event.value;
            this.updateTextcurrentObj('lineHeight', event.value + 'px')
        }
    }
    onLineHChangedFromInput(event: any) {
        if (this.currentObjRef != undefined) {
            this._textService.setAlignmentValue(event.target.value, 'lineH');
            this.updateTextcurrentObj('lineHeight', event.target.value + 'px');

        }

    }
    updateFontS(event: any) {
        this.updateTextcurrentObj('fontSize', event.target.value + 'px');
    }
    updateLineHeight(event: any) {
        this.updateTextcurrentObj('lineHeight', event.target.value + 'px')
    }
    updateOpacity(event: any) {
        this.opacityValue = event.target.value;
        this.currentObjRef.style['background-color'] = this._textService.hexToRgbA(this.pickerBgBox.nativeElement.attributes[1].value, parseFloat(this.opacityValue));
    }
    updateFontFamliy(event: any) {
        this.updateTextcurrentObj('fontFamily', event.target.value)
    }
    // updateStrokeWidth(event: any) {
    //     this.updateTextcurrentObj("textShadow", this._textService.colorBoxRef.nativeElement.dataset['textShadow'] + ' 0px 0px ' + event.target.value + 'px')
    // }
    // applyColor(event: any) {
    //     this.updateColorBoxObj("color");
    // }
    // applyStrokeColor(event: any) {
    //     this.updateColorBoxObj("textShadow");
    // }

    // applyBgColor(event: any) {
    //     this.updateColorBoxObj("backgroundColor");
    // }
    // updateColorBoxObj(property: any) {
    //     this._textService.colorBoxRef.nativeElement.dataset['call'] = property;
    //     this._textService.colorBoxRef.nativeElement.style.display = 'block';
    // }

    applyBold(event: any) {
        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active')
            this.updateTextcurrentObj('fontWeight', 400);
        }
        else {
            event.target.classList.add('active')
            this.updateTextcurrentObj('fontWeight', 700);
        }

    }
    applyItalic(event: any) {
        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active')
            this.updateTextcurrentObj('fontStyle', 'normal');
        }
        else {
            event.target.classList.add('active')
            this.updateTextcurrentObj('fontStyle', 'italic');
        }

    }
    applyUnderline(event: any) {
        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active')
            this.updateTextcurrentObj('textDecoration', '')
        }
        else {
            event.target.classList.add('active')
            this.updateTextcurrentObj('textDecoration', 'underline')
        }
    }
    applyTextTransform(event: any) {
        this.currentObjRef.style['text-transform'] = event.target.dataset['transform']
    }
    applyTextAlign(event: any) {
        this.currentObjRef.style['text-align'] = event.target.dataset['align']
    }
    updateTextcurrentObj(property: any, value: any) {
        // console.log(this.currentObjRef)
        let oldFontValue = parseInt(this.currentObjRef.style[property])
        this.currentObjRef.style[property] = value;
        if (property == 'fontSize') {
            console.log(parseInt(this.currentObjRef.style.width), value, oldFontValue)
            let newWidthValue = Math.round(((parseInt(this.currentObjRef.style.width) * parseInt(value)) / oldFontValue));
            //console.log(objWidth,oldFontValue)
            //let newWidthValue = this._textService.pixelToPercentage(((parseInt(value) * objWidth) / oldFontValue), this.designcontainerRef.style["width"]);
            console.log(newWidthValue)
            this.currentObjRef.style.width = newWidthValue + '%'
        }
        console.log(this.currentObjRef.offsetWidth)
        this._textService.setSliderValue(this.currentObjRef.offsetWidth, 'minV');
        this.handlerRef.style.width = this.currentObjRef.offsetWidth + 10 + 'px';
        this.handlerRef.style.height = this.currentObjRef.offsetHeight + 10 + 'px';
    }
    closeTextPicker(event: any) {
        if (this.currentObjRef != undefined) this.currentObjRef.style.color = event
    }
    closeTextBgPicker(event: any) {
        if (this.currentObjRef != undefined) this.currentObjRef.style.backgroundColor = this._textService.hexToRgbA(event, this.opacityValue)

    }

    constructor(private _textService: TextService) {
    }
    ngOnInit() {
        this._textService.designContainerController('get').subscribe(
            data => {
                this.designcontainerRef = data;
                this.designcontainerRef = this.designcontainerRef.nativeElement
            });
        this._textService.currentObjController('getCurrentObj', '', '').subscribe(
            data => {
                this.currentObjRef = data;
                if (this.currentObjRef == undefined) {
                    this.currentObjRef = undefined
                }
                else {
                    console.log(this.currentObjRef)

                    this.currentObjRef = this.currentObjRef.nativeElement
                }
            });
        this._textService.currentObjController('getHandlerObj', '', '').subscribe(
            data => {
                this.handlerRef = data;
                this.handlerRef = this.handlerRef.nativeElement
            });
        this._textService.getFontSize().subscribe(
            data => {
                let me = this;
                if (this.currentObjRef != undefined) {
                    setTimeout(function () {
                        me.inputfontSizeValue = data;
                    }, 100)
                }
            });
            this._textService.getLineH().subscribe(
            data => {
                let me = this;
                if (this.currentObjRef != undefined) {
                    setTimeout(function () {
                        me.inputlineHeightValue = data;
                    }, 100)
                }
            });
    }

}