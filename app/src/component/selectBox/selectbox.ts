import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'select-box',
    template: `
    <div [class]=parentClass>
      <select name="filter" [ngModel]="textfilter" (change)="onFilterChange($event)">
         <option value="0">{{defaultOptionValue}}</option>
         <option value="{{optionValue}}" *ngFor="let optionValue of optionArray">{{optionValue}}</option>
      </select>
    </div>
     `
})

export class selectBoxComponent implements OnInit {
    optionArray: any[];
    textfilter: any;
    @Input() parentClass: any;
    @Input() defaultOptionValue: any;

    onFilterChange(event: string) {
        if (this.defaultOptionValue == 'Font-size') {

        } if (this.defaultOptionValue == 'line-height') {

        } if (this.defaultOptionValue == 'font-famliy') {

        } if (this.defaultOptionValue == 'stroke-width') {

        }
    }
    ngOnInit() {
        if (this.defaultOptionValue == 'Font-size') {
            this.optionArray = [12, 15, 18, 20, 24, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 58, 60, 65];
            this.textfilter = this.optionArray[0];
        }
        if (this.defaultOptionValue == 'line-height') {
            this.optionArray = [12, 15, 18, 20, 24, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 58, 60, 65];
            this.textfilter = this.optionArray[0];
        } if (this.defaultOptionValue == 'Font-famliy') {
            this.optionArray = ["Quicksand", "SourceSansPro", "Arial", "impact", "urban", "Archive", "Semi-Coder-Regular"];
            this.textfilter = this.optionArray[0];
        } if (this.defaultOptionValue == 'stroke-width') {
            this.optionArray = [0.5, 0.8, 1, 1.5, 1.8, 2, 3, 4, 5, 8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 45, 48];
        } if (this.defaultOptionValue == 'Opacity') {
            this.optionArray = [0.1, 0.3, 0.5, 0.8, 1];
        }
        this.textfilter = this.optionArray[0];

    }
}