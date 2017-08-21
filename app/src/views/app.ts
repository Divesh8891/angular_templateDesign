import { Component, Input, ViewChild } from '@angular/core';
import { designContainer } from '../../src/views/rightPanel/designContainer/designContainer';
import { TextService } from '../service/text.service';

@Component({
    selector: 'my-app',
    template: ` 

    <div class="wrapper container">
        <custom-header></custom-header>
        <div class="wrapper-inner col-xs-12" style="min-height: 891px;">
            <div class="row">
                 <left-panel></left-panel>
                 <right-panel></right-panel>
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