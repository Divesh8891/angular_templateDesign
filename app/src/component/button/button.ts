import { Component, Input } from '@angular/core';

@Component({
    selector: 'linkAsButton',
    template: `<a href="javascript:void(0)" class="{{applyClass}}">{{btnText}}</a>`
})

export class buttonComponent {
    @Input() applyClass: any;
    @Input() btnText: any;
    @Input() parentClass: any;
}