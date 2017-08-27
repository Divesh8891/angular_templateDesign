import { Component, Input } from '@angular/core';

@Component({
    selector: 'linkAsButton',
    template: ` 
    <div  [class]=parentClass><a href="javascript:void(0)" class="{{applyClass}}">{{btnText}}</a></div>
    `
})

export class buttonComponent {
    @Input() applyClass: any;
    @Input() btnText: any;
    @Input() parentClass: any;
}