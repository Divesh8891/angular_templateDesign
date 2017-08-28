import { Component, Input, ViewChild } from '@angular/core';
import { TextService } from '../service/text.service';

@Component({
    selector: 'my-app',
    template: ` 

    <div class="wrapper">
        <custom-header></custom-header>
        <div class="wrapper-inner">
            <section class="left-module" leftModule></section>
            <div class="middle-module" middleModule></div>
            <section class="right-module  bg-grey" rightModule></section>
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