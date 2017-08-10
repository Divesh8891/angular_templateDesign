import { Component, ViewChild, ViewChildren, Input } from '@angular/core';
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
                        <div class="handler" #handler [(ngGridItem)]="config" (onResize)="onResize(i, $event)" (onDrag)="onDrag(i, $event)"></div>
                     </div>
                </section>
                
    `
})

export class designContainer {
    public config: any[];
    textAreaVal: any;
    public currentObj: any;
    currentObjArr: currentElem[] = [];
    @ViewChild('handler') private textHandler: any;
    @ViewChildren('xyz') elements: any;

    ngOnInit() {
        this._textService.dataString$.subscribe(
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
                this.currentObjArr.push(new currentElem(this.currentObj));
                this._textService.setCurrentObj(this.currentObjArr);
            }
        }
        this.textHandler.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.textHandler.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.textHandler.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.textHandler.nativeElement.style.top = event.target.offsetTop - 5 + 'px';
    }

    private gridConfig: NgGridConfig = <NgGridConfig>{
        'draggable': true,
        'resizable': true
    };

    onDrag(index: number, event: NgGridItemEvent, item: any): void {
        this.currentObj.nativeElement.style.left = event.left + 5 + 'px';
        this.currentObj.nativeElement.style.top = event.top + 5 + 'px';
        this.textHandler.nativeElement.style.display = 'none';

    }
    onDragStop(index: number, event: NgGridItemEvent, item: any) {
        this.currentObj.nativeElement.style.left = event.left + 5 + 'px';
        this.currentObj.nativeElement.style.top = event.top + 5 + 'px';
    }

    onResize(index: number, event: NgGridItemEvent): void {
        console.log(event)
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