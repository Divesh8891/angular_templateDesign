import { Component, Output, EventEmitter, Input, ViewChildren } from '@angular/core';
import { TextService } from '../../../service/text.service';

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
                        <button class="color btn icon" (click)=applyColor($event)><i  class="sprite-img"></i></button>
                        <!--button class="stroke-color btn  icon" (click)=applyColor($event)>Stroke Color</button-->
                        <button class="back-color btn  icon" (click)=applyBgColor($event)><i class="sprite-img"></i></button>
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
    containerRef :any;
    me = this;
    updateFontS(event: any) {
        this.updateTextcurrentObj('fontSize', event.target.value + 'px');
    }
    updateLineHeight(event: any) {
        this.updateTextcurrentObj('lineHeight', event.target.value + 'px')
    }
    updateOpacity(event: any) {
        this.updateTextcurrentObj('background-color', this._textService.hexToRgbA(this.colorBoxRef.dataset.cValue, parseFloat(event.target.value) * 100))
    }
    updateFontFamliy(event: any) {
        this.updateTextcurrentObj('fontFamily', event.target.value)
    }
    updateStrokeWidth(event: any) {
        this.updateTextcurrentObj("textShadow",this._textService.colorBoxRef.nativeElement.dataset['textShadow'] + ' 0px 0px ' + event.target.value + 'px')
    }
    applyColor(event: any) {
        this.updateColorBoxObj("color");
    }
    applyStrokeColor(event: any) {
        this.updateColorBoxObj("textShadow");
    }

    applyBgColor(event: any) {
        this.updateColorBoxObj("backgroundColor");
    }
    updateColorBoxObj(property: any) {
       this._textService.colorBoxRef.nativeElement.dataset['call'] = property;
       this._textService.colorBoxRef.nativeElement.style.display = 'block';
    }

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
        console.log(this._textService.currentObj)
        let oldFontValue = parseInt(this._textService.currentObj.nativeElement.style[property])
        this._textService.currentObj.nativeElement.style[property] = value;
        if(property =='fontSize'){
            let objWidth = Math.round((parseInt(this._textService.currentObj.nativeElement.style.width) * parseInt(this._textService.designcontainerRef.nativeElement.style.width))/100);
            console.log(objWidth,oldFontValue)
            let newWidthValue = this._textService.pixelToPercentage(((parseInt(value) * objWidth)/oldFontValue), this._textService.designcontainerRef.nativeElement.style["width"]);
            console.log(newWidthValue)
            this._textService.currentObj.nativeElement.style.width = newWidthValue
        }
        this._textService.setSliderValue(this._textService.currentObj.nativeElement.offsetWidth, 'minV');
        this._textService.handlerRef.nativeElement.style.width = this._textService.currentObj.nativeElement.offsetWidth + 10 + 'px';
        this._textService.handlerRef.nativeElement.style.height = this._textService.currentObj.nativeElement.offsetHeight + 10 + 'px';
    }
    
    ngAfterViewChecked() {
        //console.log(this._textService.currentObj)
        // this.currentObj = this._textService.currentObj.nativeElement;
        // this._textService.handlerRef.nativeElement = this._textService.handlerRef.nativeElement;
       //this._textService.colorBoxRef.nativeElement = this._textService.colorBoxRef.nativeElement;
        // this._textService.designcontainerRef.nativeElement = this._textService.designcontainerRef.nativeElement;
        

    }
    constructor(private _textService: TextService) {
    }

}