import { Component, ViewChild, ViewChildren, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { TextService } from '../../../service/text.service';
import { ResizableModule } from 'angular-resizable-element'

@Component({
    selector: 'designContainer',
    template: ` 
                <section class="design-section col-xs-12">
                    <div class="desgin-tool-sec" style="width: 780px; height: 780px;" #designTooSec>
                        <section class="desgin-inner" data-bg="blank">
                         <p #xyz class="textNative" id="{{text.randomNumber}}" (click)="textNodeEvent($event,text)" style="font-size: 18px;" *ngFor="let text of textAreaVal">{{text.text}}</p>
                        </section>
                        <div class="handler cube" #handler  [ng2-draggable]="true" (postions)=getPos($event)></div>
                     </div>
                </section>
             
                
              
                
    `
})

export class designContainer {
    textAreaVal: any;
    public currentObj: any;
    modalImgSrc: any;

    @ViewChild('handler') public textHandler: any;
    @ViewChild('designTooSec') public designTooSec: any;
    @ViewChildren('xyz') elements: any;

    ngOnInit() {
        this._textService.getTextValue().subscribe(
            data => {
                this.textAreaVal = data;
            });
        this._textService.setDesigncontainerRef(this.designTooSec);

    }

    textNodeEvent(event: any) {
        this.textHandler.nativeElement.style.display = 'block';
        for (let i = 0; i < this.elements._results.length; i++) {
            if (event.target.id === this.elements._results[i].nativeElement.id) {
                this.currentObj = this.elements._results[i];
            }
        }
        this.textHandler.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.textHandler.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.textHandler.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.textHandler.nativeElement.style.top = event.target.offsetTop - 5 + 'px';
        this._textService.setCurrentObj(this.currentObj, this.textHandler);
    }
    getPos(event: any) {
        this.currentObj.nativeElement.style.left = event.left + 5 + 'px'
        this.currentObj.nativeElement.style.top = event.top + 5 + 'px';
    }
    onResizeEnd(event: any): void {
        console.log('Element was resized', event);
    }
    constructor(private _textService: TextService) { }
}
