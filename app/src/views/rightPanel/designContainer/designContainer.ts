import { Component, ViewChild, ViewChildren, Input, Output, EventEmitter } from '@angular/core';
import { TextService } from '../../../service/text.service';
import { NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent } from 'angular2-grid';

@Component({
    selector: 'designContainer',
    template: ` 
                <section class="design-section col-xs-12">
                    <div [ngGrid]="gridConfig" class="desgin-tool-sec" style="width: 780px; height: 780px;">
                        <section class="desgin-inner" data-bg="blank">
                         <p #xyz class="textNative" id="{{text.randomNumber}}" (click)="textNodeEvent($event,text)" style="font-size: 18px;" *ngFor="let text of textAreaVal">{{text.text}}</p>
                        </section>
                        <div class="handler" #handler [(ngGridItem)]="config" (onResize)="onResize(i, $event)" (onChangeAny)="onChangeAny(i, $event)" (onDrag)="onDrag(i, $event)" ></div>
                     </div>
                </section>
                
    `
})

export class designContainer {
    public config: any[];
    textAreaVal: any;
    public currentObj: any;
    currentObjArr: currentElem[] = [];

    @ViewChild('handler') public textHandler: any;
    @ViewChildren('xyz') elements: any;

    ngOnInit() {
        this._textService.getTextValue().subscribe(
            data => {
                this.textAreaVal = data;
            });


    }

    textNodeEvent(event: any) {
        this.textHandler.nativeElement.style.display = 'block';

        for (let i = 0; i < this.elements._results.length; i++) {
            console.log(this.elements._results[i].nativeElement.id)
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

    private gridConfig: NgGridConfig = <NgGridConfig>{
        'draggable': true,
        'resizable': true

    };
    onDrag(index: number, event: NgGridItemEvent, item: any): void {
      
        let me = this;
        setTimeout(function () {
            console.log(me.currentObj.nativeElement.style)
            me.currentObj.nativeElement.style.left = event.left + 5 + 'px';
            me.currentObj.nativeElement.style.top = event.top + 5 + 'px';
            me.textHandler.nativeElement.style.width = me.currentObj.nativeElement.offsetWidth + 10 + 'px';
            me.textHandler.nativeElement.style.height = me.currentObj.nativeElement.offsetHeight + 10 + 'px';
            me.textHandler.nativeElement.style.left = me.currentObj.nativeElement.style.left - 5 + 'px';
            me.textHandler.nativeElement.style.top = me.currentObj.nativeElement.style.top - 5 + 'px';
            me.textHandler.nativeElement.style.display = 'block';

        }, 100)
    }
    onChangeAny(index: number, event: NgGridItemEvent, item: any): void {
        console.log(event)

        let me = this;
        setTimeout(function () {
            console.log(me.currentObj.nativeElement.style)
            me.currentObj.nativeElement.style.left = event.left + 5 + 'px';
            me.currentObj.nativeElement.style.top = event.top + 5 + 'px';
            me.textHandler.nativeElement.style.width = me.currentObj.nativeElement.offsetWidth + 10 + 'px';
            me.textHandler.nativeElement.style.height = me.currentObj.nativeElement.offsetHeight + 10 + 'px';
            me.textHandler.nativeElement.style.left = me.currentObj.nativeElement.style.left - 5 + 'px';
            me.textHandler.nativeElement.style.top = me.currentObj.nativeElement.style.top - 5 + 'px';
            me.textHandler.nativeElement.style.display = 'block';

        }, 100)
    }


    onResize(index: number, event: NgGridItemEvent): void {
        console.log("resioze")
    }

    constructor(private _textService: TextService) {
        const conf = [{ 'dragHandle': '.handle' }];
        this.config = conf;

    }

}
export class currentElem {
    constructor(
        public elem: any) {
    }
}