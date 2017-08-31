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

    ngOnChanges() {
        console.log("onchange")
        console.log(this._textService)
    }
    ngOnInit() {
        this._textService.setCanvasElem(this.canvasElemRef)
        console.log("ngOnInit")
        console.log(this._textService)
        console.log(this._textService.currentObj)
    }
    // ngDoCheck() {
    //     console.log("ngDoCheck")
    //     console.log(this._textService)

    // }
    // ngAfterContentInit() {
    //     console.log("ngAfterContentInit")
    //     console.log(this._textService)

    // }
    // ngAfterContentChecked() {
    //     console.log("ngAfterContentChecked")
    //     console.log(this._textService)
    // }
    // ngAfterViewInit() {
    //     console.log("ngAfterViewInit")
    //     console.log(this._textService)
    // }
    // ngAfterViewChecked() {
    //     console.log("ngAfterViewChecked")
    //     console.log(this._textService)
    // }
    // ngOnDestroy() {
    //     console.log("ngOnDestroy")
    //     console.log(this._textService)
    // }



    constructor(private _textService: TextService) { }

}