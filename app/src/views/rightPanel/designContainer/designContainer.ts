import { Component, ViewChild } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: 'designContainer',
    template: ` 
                <section class="design-section col-xs-12">
                    <div [ngGrid]="gridConfig" class="desgin-tool-sec" style="width: 780px; height: 780px;">
                        <section class="desgin-inner" data-bg="blank">
                         <p class="textNative" id="{{text.randomNumber}}" (click)="textNodeEvent($event)" style="font-size: 18px;" *ngFor="let text of textAreaVal">{{text.text}}</p>
                        </section>
                        <div class="handler" #handler [(ngGridItem)]="config" (onResize)="onResize(i, $event)" (onDrag)="onDrag(i, $event)"></div>
                     </div>
                </section>
    `
})

export class designContainer {
    textAreaVal: any;
    @ViewChild('handler') private textHandler: any;

    ngOnInit() {
        this._textService.dataString$.subscribe(
            data => {
                this.textAreaVal = data;
            });


    }
    textNodeEvent(event: any) {
        console.log(event.target.offsetWidth);
        console.log(this.textHandler)
        this.textHandler.nativeElement.style.display = 'block';

        this.textHandler.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.textHandler.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.textHandler.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.textHandler.nativeElement.style.top = event.target.offsetTop - 5 + 'px';


    }
    constructor(private _textService: TextService) { }

}