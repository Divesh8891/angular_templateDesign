import { Component } from '@angular/core';

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
        alert(this.textAreaValue);
    }

}