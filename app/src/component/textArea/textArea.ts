import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { TextService } from '../../service/text.service';

@Component({
    selector: 'my-textArea',
    template: ` <div class="col-xs-12">
                    <textarea [placeholder]="textPlaceholder" [class]="textAreaClass" [(ngModel)]= "textAreaValue"></textarea>
                    <a href="javascript:void(0);" class="btn btn-lrg" (click)="addtext($event)">Add</a>
                    <p #dummyText style="visibility:hidden">{{textAreaValue}}<p>
                </div>`
})

export class textAreaComponent {
    textAreaValue: any;
    textAreaClass = 'js-text-val text-val';
    textPlaceholder = 'Add Text';
    randomNumber: any;

    @ViewChild('dummyText') public dummyText: any;

    addtext(event: any) {
        let a = new Date();
        this.randomNumber = a.getTime();
        this.textAreaValue === '' ? alert(this.textAreaValue) : this._textService.setTextValue({ 'text': this.textAreaValue, 'randomNumber': this.randomNumber, 'imgSrc': '' });
        let textWidth = this.dummyText.nativeElement.offsetWidth;
        let textHeight = this.dummyText.nativeElement.offsetHeight;
        let ratio = textWidth / textHeight
        this._textService.updateObjArray({ 'id': this.randomNumber, 'oriWidth': textWidth, 'oriHeight': textHeight, 'width': textWidth, 'height': textHeight, 'ratio': ratio })
        this._textService.setSliderValue(textWidth, 'minV');
        this._textService.setSliderValue(parseInt(this._textService.designcontainerRef.nativeElement.style.width), 'maxV');
    }

    constructor(private _textService: TextService) { }

}

