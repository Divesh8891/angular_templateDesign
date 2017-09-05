import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { TextService } from '../../service/text.service';

@Component({
    selector: '[textArea]',
    template: ` 
                    <textarea [placeholder]="textPlaceholder" [class]="textAreaClass" [(ngModel)]= "textAreaValue" (input)="updateText($event)"></textarea>
                    <button class="btn btn-lrg" (click)="addtext($event)">Add</button>
                    <p #dummyText style="visibility:hidden;position:absolute;top:-100%" class="m0">{{textAreaValue}}</p>
                `
})

export class textAreaComponent {
    textAreaValue: any;
    textAreaClass = 'js-text-val text-val';
    textPlaceholder = 'Add Text';
    randomNumber: any;
    textWidth: any;
    textHeight: any;

    
    handlerRef: any;
    designcontainerRef: any;
    currentObjRef: any;

    @ViewChild('dummyText') public dummyText: any;

    addtext(event: any) {
        this.textWidth = this.dummyText.nativeElement.offsetWidth;
        this.textHeight = this.dummyText.nativeElement.offsetHeight;
        let a = new Date();
        this.randomNumber = a.getTime();
        let ratio = this.textWidth / this.textHeight
        this.textAreaValue === '' ? alert(this.textAreaValue) : this._textService.setObjArray({
            'id': this.randomNumber,
            'oriWidth': this.textWidth,
            'oriHeight': this.textHeight,
            'ratio': ratio,
            'width': this.textWidth,
            'height': this.textHeight,
            'value': this.textAreaValue,
            'type': 'text'
        });

        this._textService.setSliderValue(this.textWidth, 'minV');
        this._textService.setSliderValue(parseInt(this.designcontainerRef.style.width), 'maxV');
    }
    updateText(event: any) {
        //console.log(event)


        let currentObj = this.currentObjRef;
        if (currentObj != undefined) {
            let handlerRef = this.handlerRef;
            this.textWidth = this.dummyText.nativeElement.offsetWidth;
            this.textHeight = this.dummyText.nativeElement.offsetHeight;

            let objArray = this._textService.objArray;
            let currentObjElememtID = currentObj.id;

            for (let j = 0; j < objArray.length; j++) {
                if (objArray[j].type == 'text' && objArray[j].id == currentObjElememtID) {
                    objArray[j].value = event.target.value;
                    objArray[j].width = this.textWidth;
                    this._textService.setSliderValue(objArray[j].width, 'minV');
                    currentObj.style.width = this._textService.pixelToPercentage((this.textWidth), this.designcontainerRef.style["width"])
                    handlerRef.style.width = objArray[j].width + 12 + 'px';
                }
            }


        }
    }

    constructor(private _textService: TextService) { }
    ngOnInit() {
       
       this._textService.designContainerController('get').subscribe(
            data => {
                this.designcontainerRef = data;
                this.designcontainerRef = this.designcontainerRef.nativeElement
            });
        this._textService.currentObjController('getCurrentObj', '', '').subscribe(
            data => {
                this.currentObjRef = data;
                if (this.currentObjRef == undefined) {
                    this.currentObjRef = undefined
                }
                else {
                    this.currentObjRef = this.currentObjRef.nativeElement
                }
            });
        this._textService.currentObjController('getHandlerObj', '', '').subscribe(
            data => {
                this.handlerRef = data;
                this.handlerRef = this.handlerRef.nativeElement
            });


    }

}

