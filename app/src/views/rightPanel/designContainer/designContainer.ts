import { Component, ViewChild, Input } from '@angular/core';
import { TextService } from '../../../service/text.service';
import { NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent } from 'angular2-grid';

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
    public config: any[];
    textAreaVal: any;
    public currentObj: any;

    @ViewChild('handler') private textHandler: any;


    ngOnInit() {
        this._textService.dataString$.subscribe(
            data => {
                this.textAreaVal = data;
            });


    }
    textNodeEvent(event: any) {
        console.log(event)
        this.currentObj = event;
        this.textHandler.nativeElement.style.display = 'block';

        this.textHandler.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.textHandler.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.textHandler.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.textHandler.nativeElement.style.top = event.target.offsetTop - 5 + 'px';
        console.log(this.currentObj)

    }

    private gridConfig: NgGridConfig = <NgGridConfig>{
        'draggable': true,
        'resizable': true
    };

    onDrag(index: number, event: NgGridItemEvent,item:any): void {
 console.log(index,event,item)
        // console.log(this.currentObj)
        // this.currentObj.style.left = event.left + 5 + 'px';
        // this.currentObj.style.top = event.top + 5 + 'px';
    }
    onDragStop(index: number, event: NgGridItemEvent,item:any) {
        console.log(index,event,item)
        // this.currentObj.style.left = event.left + 5 + 'px';
        // this.currentObj.style.top = event.top + 5 + 'px';
    }

    onResize(index: number, event: NgGridItemEvent): void {
        console.log(event)
    }



    constructor(private _textService: TextService) {
        const conf = [{ 'dragHandle': '.handle' }];
        this.config = conf;

    }

}