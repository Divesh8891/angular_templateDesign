import { Component, Output, EventEmitter, Input, ViewChildren } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: 'text-module',
    template: ` 
                  <section class="TextModule col-xs-12 p-0 module">
                        <h2 id="textValhidden">fsdfs</h2>
                        <h5 class="option-heading col-xs-12 m-0 p-0">{{textPanelTitle}}</h5>
                        <div class="seperator"></div>
                        <my-textArea></my-textArea>
                        <div class="seperator"></div>
                        <select-box [parentClass]="'font-sec col-xs-6'" [defaultOptionValue]="'Font-size'" (change)="updateFontS($event)"></select-box>
                        <select-box [parentClass]="'line-height-sec col-xs-6'" [defaultOptionValue]="'line-height'" (change)="updateLineHeight($event)"></select-box>
                        <select-box [parentClass]="'font-famliy-sec col-xs-6'" [defaultOptionValue]="'Font-famliy'" (change)="updateFontFamliy($event)"></select-box>
                        <select-box [parentClass]="'stroke-width-sec col-xs-6'" [defaultOptionValue]="'stroke-width'" (change)="updateStrokeWidth($event)"></select-box>
                        <div class="seperator"></div>
                        <linkAsButton [parentClass]="'color-sec col-xs-6'" [applyClass]="'color btn btn-lrg'" [btnText]="'Color'" (click)=applyColor($event)></linkAsButton>
                        <linkAsButton [parentClass]="'stroke-color-sec col-xs-6'" [applyClass]="'stroke-color btn btn-lrg'" [btnText]="'Stroke color'" (click)=applyStrokeColor($event)></linkAsButton>
                        <linkAsButton [parentClass]="'back-color-sec col-xs-6'" [applyClass]="'back-color btn btn-lrg'" [btnText]="'Background color'" (click)=applyBgColor($event)></linkAsButton>
                        <select-box [parentClass]="'opacity-width-sec col-xs-5'" [defaultOptionValue]="'Opacity'" (change)="updateOpacity($event)"></select-box>
                        <div class="seperator"></div>
                        <linkAsButton [parentClass]="'b align-opt col-xs-4'" [applyClass]="'bold btn btn-lrg'" [btnText]="'B'" (click)=applyBold($event)></linkAsButton>
                        <linkAsButton [parentClass]="'i align-opt col-xs-4'" [applyClass]="'italic btn btn-lrg'" [btnText]="'I'" (click)=applyItalic($event)></linkAsButton>
                        <linkAsButton [parentClass]="'u align-opt col-xs-4'" [applyClass]="'underline btn btn-lrg'" [btnText]="'U'" (click)=applyUnderline($event)></linkAsButton>
                    </section>
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

        this.currentObj.nativeElement.style[property] = value;
        this.handlerRef.nativeElement.style.width = this.currentObj.nativeElement.offsetWidth + 10 + 'px';
        this.handlerRef.nativeElement.style.height = this.currentObj.nativeElement.offsetHeight + 10 + 'px';
    }
    constructor(private _textService: TextService) {
    }

}