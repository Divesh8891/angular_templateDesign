import { Component, ViewChild, ElementRef } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: '[leftModule]',
    template: ` <!--button class="checkout btn" (click)=checkOut($event)>Add to Cart</button-->
                <div class="panel-action-wrapper">            
                    <button class="btn btn-text" [class.active]="panelActive=='Text'" (click)="showPanel($event,'Text')">Text</button>
                    <button class="btn btn-image" [class.active]="panelActive=='Image'" (click)="showPanel($event,'Image')">Image</button>
                    <button class="btn btn-image" [class.active]="panelActive=='Shape'" (click)="showPanel($event,'Shape')">Shapes</button>
                    <button class="btn btn-image" [class.active]="panelActive=='Clipart'" (click)="showPanel($event,'Image')">Clipart</button>
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
    panelActive: any = "text";
    transValue: any;
    @ViewChild('moduleWrapper') public moduleWrapper: any;

    showPanel(event: any, panel: any) {
        this.panelActive = panel;
        panel == 'Text' && (this.transValue = 0);
        panel == 'Image' && (this.transValue = -209);
        panel == 'Shape' && (this.transValue = -418);
        this.moduleWrapper.nativeElement.children[0].style['transform'] = 'translate(' + this.transValue + 'px,0px)';
    }
    constructor(private _textService: TextService) { }
    ngOnInit() {
        console.log("left-init");
        this._textService.moduleContainerController(this.moduleWrapper);
    }

}