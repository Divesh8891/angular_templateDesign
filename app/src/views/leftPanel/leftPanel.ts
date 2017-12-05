import { Component, ViewChild, ElementRef } from '@angular/core';
import { TextService } from '../../service/text.service';

@Component({
    selector: '[leftModule]',
    template: ` <!--button class="checkout btn" (click)=checkOut($event)>Add to Cart</button-->
                <div class="panel-action-wrapper">            
                    <button class="btn btn-text" [class.active]="panelActive=='text'" (click)="showPanel($event,'Text')">Text</button>
                    <button class="btn btn-image" [class.active]="panelActive=='image'" (click)="showPanel($event,'Image')">Image</button>
                    <button class="btn btn-image" [class.active]="panelActive=='shape'" (click)="showPanel($event,'Shape')">Shapes</button>
                    <button class="btn btn-image" [class.active]="panelActive=='clipart'" (click)="showPanel($event,'Image')">Clipart</button>
                </div>
                <div class="module-wrapper" #moduleWrapper>
                    <div class="module-outter">
                        <section class="text-module module bg-grey" textModule #textModuleWrapper></section>
                        <section class="image-module module bg-grey" imageModule #imageModuleWrapper></section>
                        <section class="shape-module module bg-grey" shapeModule #shapeModuleWrapper></section>
                    </div>
                </div>
                
                
                `
})

export class leftPanelComponent {
    handlerParentRef: any;
    modalImgSrc: any = '';
    panelActive: any = "text";
   
    @ViewChild('moduleWrapper') public moduleWrapper: any;

   
    showPanel(event: any, panel: any) {
        if (panel === 'Text') {
            this.panelActive = "text";
            this.moduleWrapper.nativeElement.children[0].style['transform'] = 'translate(0px,0px)';
        }
        if (panel === 'Image') {
            this.panelActive = "image";
            console.log(this.moduleWrapper)
            this.moduleWrapper.nativeElement.children[0].style['transform'] = 'translate(-209px,0px)';
        }
        if (panel === 'Shape') {
            this.panelActive = "shape";
            this.moduleWrapper.nativeElement.children[0].style['transform'] = 'translate(-418px,0px)';
        }

    }
    
    constructor(private _textService: TextService) { }

    ngOnInit() {
        console.log("left-init");
        this._textService.moduleContainerController(this.moduleWrapper);

        this._textService.currentObjController('getHandlerParentObj', '', '').subscribe(
            data => {
                this.handlerParentRef = data;
                this.handlerParentRef = this.handlerParentRef.nativeElement
            });
    }

}