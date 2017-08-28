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
    updateFontS(event: any) {
        this.updateTextcurrentObj('fontSize', event.target.value + 'px');

    }
    updateLineHeight(event: any) {
        this.updateTextcurrentObj('lineHeight', event.target.value + 'px')
    }
    updateOpacity(event: any) {
        this.updateTextcurrentObj('opacity', event.target.value)
    }
    updateFontFamliy(event: any) {
        this.updateTextcurrentObj('fontFamily', event.target.value)
    }
    updateStrokeWidth(event: any) {
        this.colorBoxRef = this._textService.colorBoxRef;
        this.updateTextcurrentObj("textShadow", this.colorBoxRef.nativeElement.dataset['textShadow'] + ' 0px 0px ' + event.target.value + 'px')
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
    updateColorBoxObj(property: any) {
        this.colorBoxRef = this._textService.colorBoxRef;
        this.colorBoxRef.nativeElement.dataset['call'] = property;
        this.colorBoxRef.nativeElement.style.display = 'block';
    }
    updateTextcurrentObj(property: any, value: any) {
        this.currentObj = this._textService.currentObj;
        this.handlerRef = this._textService.handlerRef;
        console.log(this.currentObj.nativeElement.style['width'])
        this.currentObj.nativeElement.style[property] = value;
        console.log(this.currentObj.nativeElement.style['width'])

        this._textService.setSliderValue(this.currentObj.nativeElement.offsetWidth, 'minV');
        

        this.handlerRef.nativeElement.style.width = this.currentObj.nativeElement.offsetWidth + 10 + 'px';
        this.handlerRef.nativeElement.style.height = this.currentObj.nativeElement.offsetHeight + 10 + 'px';
    }
    constructor(private _textService: TextService) {
    }

}