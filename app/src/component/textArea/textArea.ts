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
    currentObj : any;
    users: User[] = [];

    ngOnInit() {
        this._textService.dataString$.subscribe(
            data => {
                this.currentObj = data;
            });


    }

    addtext(event: any) {
        let a = new Date();
        this.randomNumber = a.getTime();
        this.users.push(new User(this.textAreaValue, this.randomNumber));
        this.textAreaValue === '' ? alert(this.textAreaValue) : this._textService.setTextValue(this.users);
    }

    constructor(private _textService: TextService) { }

}

export class User {
    constructor(
        public text: any,
        public randomNumber: number) {
    }
}