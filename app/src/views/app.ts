import { Component, Input, ViewChild } from '@angular/core';
import { TextService } from '../service/text.service';

@Component({
    selector: 'my-app',
    template: ` 

    <div class="wrapper container p-0">
        <custom-header></custom-header>
        <div class="wrapper-inner col-xs-12" style="min-height: 891px;">
            <div class="row">
                <section class="option-panel p-0" leftPanel></section>
                <div class="middle-section" middlePanel></div>
                <section class="alignment-module  p-0 module" alignmentModule></section>
            </div>
        </div>
         <section class="imageGen" #imageGen>
             <img id="canvasPNG" class="downloadable">
         </section>
    </div>
    `
})

export class AppComponent {
    canvanElem: any;
    @ViewChild('imageGen') public canvasElemRef: any;

    ngOnInit() {
        this._textService.setCanvasElem(this.canvasElemRef)
    }
    
    constructor(private _textService: TextService) { }

}