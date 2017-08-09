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

    addtext(event: any) {
        this.textAreaValue === '' ? alert(this.textAreaValue) : this._textService.setTextValue(this.textAreaValue);
    }

    constructor(private _textService: TextService) { }

}