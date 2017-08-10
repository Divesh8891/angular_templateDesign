import { Component } from '@angular/core';
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
                        <linkAsButton [parentClass]="'color-sec col-xs-6'" [applyClass]="'color btn btn-lrg'" [btnText]="'Color'"></linkAsButton>
                        <linkAsButton [parentClass]="'stroke-color-sec col-xs-6'" [applyClass]="'stroke-color btn btn-lrg'" [btnText]="'Stroke color'"></linkAsButton>
                        <linkAsButton [parentClass]="'back-color-sec col-xs-6'" [applyClass]="'back-color btn btn-lrg'" [btnText]="'Background color'"></linkAsButton>
                        <select-box [parentClass]="'opacity-width-sec col-xs-5'" [defaultOptionValue]="'Opacity'" (change)="updateOpacity($event)"></select-box>
                        <div class="seperator"></div>
                        <linkAsButton [parentClass]="'b align-opt col-xs-4'" [applyClass]="'bold btn btn-lrg'" [btnText]="'B'"></linkAsButton>
                        <linkAsButton [parentClass]="'i align-opt col-xs-4'" [applyClass]="'italic btn btn-lrg'" [btnText]="'I'"></linkAsButton>
                        <linkAsButton [parentClass]="'u align-opt col-xs-4'" [applyClass]="'underline btn btn-lrg'" [btnText]="'U'"></linkAsButton>
                    </section>
    `
})

export class textModuleComponent {
    textPanelTitle = "Text";
    currentObj: any;
    updateFontS(event: any) {
        this.updateTextInfo('fontSize', event.target.value+'px')
    }
     updateLineHeight(event: any) {
        this.updateTextInfo('lineHeight', event.target.value+'px')
    }
     updateOpacity(event: any) {
        this.updateTextInfo('opacity', event.target.value)
    }
     updateFontFamliy(event: any) {
        this.updateTextInfo('fontFamily', event.target.value)
    }
     updateStrokeWidth(event: any) {
        this.updateTextInfo('strokeWidth', event.target.value+'px')
    }
   
    updateTextInfo(property:any, value:any) {
        this.currentObj = this._textService.currentObj;
        this.currentObj.nativeElement.style[property] = value
    }

    ngOnInit() {
        // this.currentObj = this._textService.currentObj;

    }
    constructor(private _textService: TextService) {
    }

}