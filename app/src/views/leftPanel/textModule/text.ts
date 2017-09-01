import { Component, Output, EventEmitter, Input, ViewChildren, ViewChild } from '@angular/core';
import { TextService } from '../../../service/text.service';
import { ColorPickerService } from 'angular2-color-picker';

@Component({
    selector: '[textModule]',
    template: ` 
                        <h2 id="textValhidden">fsdfs</h2>
                        <h5 class="heading">{{textPanelTitle}}</h5>
                        <div class="seperator"></div>
                        <div textArea></div>
                        <div class="seperator"></div>
                        <div selectBox class="font-sec select-box" [defaultOptionValue]="'Font-size'" (change)="updateFontS($event)"></div>
                        <div selectBox class="line-height-sec select-box ml5" [defaultOptionValue]="'line-height'" (change)="updateLineHeight($event)"></div>
                        <div selectBox class="font-famliy-sec select-box "  [defaultOptionValue]="'Font-famliy'" (change)="updateFontFamliy($event)"></div>
                        <div selectBox class="stroke-width-sec select-box ml5" [defaultOptionValue]="'stroke-width'" (change)="updateStrokeWidth($event)"></div>
                        <div class="seperator"></div>
                        <span #pickerTextColorBox [(colorPicker)]="textColor" (colorPickerChange)="closeTextPicker($event)"
                            [cpPosition]="'right'"
                            [style.backgroundColor]="textColor"
                            [cpPositionOffset]="'50%'"
                            [cpPositionRelativeToArrow]="true" class="text-color btn icon" [cpPresetColors]="colorArray"
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
                            [cpPositionRelativeToArrow]="true" class="text-back-color btn icon" [cpPresetColors]="colorArray"
                            [cpOKButton]="true"
                            [cpSaveClickOutside]="true"
                            [cpOKButtonClass]= "'btn btn-primary btn-xs'"
                            ><i  class="sprite-img"></i></span>
                        <div selectBox class="opacity-width-sec select-box" [defaultOptionValue]="'Opacity'" (change)="updateOpacity($event)"></div>
                        <div class="seperator"></div>
                        <button class="bold btn text-font-effect" (click)=applyBold($event)>B</button>
                        <button class="italic btn text-font-effect" (click)=applyItalic($event)>I</button>
                        <button class="underline btn text-font-effect" (click)=applyUnderline($event)>U</button>
    `
})

export class textModuleComponent {

    textPanelTitle = "Text";
    currentObj: any;
    colorBoxRef: any;
    handlerRef: any;
    containerRef: any;
    opacityValue:any = '1'
    me = this;
    private color: string = "#ffffff";
    private textColor: string = "#000000";
    @ViewChild('pickerBgBox') public pickerBgBox: any;

    updateFontS(event: any) {
        this.updateTextcurrentObj('fontSize', event.target.value + 'px');
    }
    updateLineHeight(event: any) {
        this.updateTextcurrentObj('lineHeight', event.target.value + 'px')
    }
    updateOpacity(event: any) {
        this.opacityValue = event.target.value;
        this._textService.currentObj.nativeElement.style['background-color'] = this._textService.hexToRgbA(this.pickerBgBox.nativeElement.attributes[1].value, parseFloat(this.opacityValue));
    }
    updateFontFamliy(event: any) {
        this.updateTextcurrentObj('fontFamily', event.target.value)
    }
    updateStrokeWidth(event: any) {
        this.updateTextcurrentObj("textShadow", this._textService.colorBoxRef.nativeElement.dataset['textShadow'] + ' 0px 0px ' + event.target.value + 'px')
    }
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
    updateTextcurrentObj(property: any, value: any) {
        //console.log(this._textService.currentObj)
        let oldFontValue = parseInt(this._textService.currentObj.nativeElement.style[property])
        this._textService.currentObj.nativeElement.style[property] = value;
        if (property == 'fontSize') {
            let objWidth = Math.round((parseInt(this._textService.currentObj.nativeElement.style.width) * parseInt(this._textService.designcontainerRef.nativeElement.style.width)) / 100);
            //console.log(objWidth,oldFontValue)
            let newWidthValue = this._textService.pixelToPercentage(((parseInt(value) * objWidth) / oldFontValue), this._textService.designcontainerRef.nativeElement.style["width"]);
            //console.log(newWidthValue)
            this._textService.currentObj.nativeElement.style.width = newWidthValue
        }
        this._textService.setSliderValue(this._textService.currentObj.nativeElement.offsetWidth, 'minV');
        this._textService.handlerRef.nativeElement.style.width = this._textService.currentObj.nativeElement.offsetWidth + 10 + 'px';
        this._textService.handlerRef.nativeElement.style.height = this._textService.currentObj.nativeElement.offsetHeight + 10 + 'px';
    }
    closeTextPicker(event: any) {
        if (this._textService.currentObj != undefined) this._textService.currentObj.nativeElement.style.color = event
    }
    closeTextBgPicker(event: any) {
        if (this._textService.currentObj != undefined) this._textService.currentObj.nativeElement.style.backgroundColor = this._textService.hexToRgbA(event, this.opacityValue)

    }

    ngAfterViewChecked() {
        // console.log(this._textService)
        // this.currentObj = this._textService.currentObj.nativeElement;
        // this._textService.handlerRef.nativeElement = this._textService.handlerRef.nativeElement;
        //this._textService.colorBoxRef.nativeElement = this._textService.colorBoxRef.nativeElement;
        // this._textService.designcontainerRef.nativeElement = this._textService.designcontainerRef.nativeElement;


    }
    constructor(private cpService: ColorPickerService, private _textService: TextService) {
    }

}