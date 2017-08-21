import { Component, EventEmitter, Output } from '@angular/core';
import { TextService } from '../../service/text.service';

@Component({
    selector: 'my-textArea',
    template: ` <div class="col-xs-12">
                    <textarea [placeholder]="textPlaceholder" [class]="textAreaClass" [(ngModel)]= "textAreaValue"></textarea>
                    <a href="javascript:void(0);" class="btn btn-lrg" (click)="addtext($event)">Add</a>
                </div>`
})

export class textAreaComponent {
    textAreaValue: any;
    textAreaClass = 'js-text-val text-val';
    textPlaceholder = 'Add Text';
    randomNumber: any;



    addtext(event: any) {
        let a = new Date();
        this.randomNumber = a.getTime();
        this.textAreaValue === '' ? alert(this.textAreaValue) : this._textService.setTextValue({ 'text': this.textAreaValue, 'randomNumber': this.randomNumber, 'imgSrc': '' });
    }

    constructor(private _textService: TextService) { }

}

