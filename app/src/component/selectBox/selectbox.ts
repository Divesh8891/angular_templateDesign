import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: '[selectBox]',
    template: `
      <select name="filter" [(ngModel)]="textfilter">
         <option value="0">{{defaultOptionValue}}</option>
         <option value="{{optionValue}}" *ngFor="let optionValue of optionArray" [attr.selected]="optionValue==textfilter?true:null">{{optionValue}}</option>
      </select>
     `
})

export class selectBoxComponent implements OnInit {
    optionArray: any[];
    textfilter: any;
    @Input() parentClass: any;
    @Input() defaultOptionValue: any;

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
            this.textfilter = this.optionArray[3];
        } if (this.defaultOptionValue == 'Opacity') {
            this.optionArray = [0.1, 0.3, 0.5, 0.8, 1];
            this.textfilter = this.optionArray[3];
        }
        if (this.defaultOptionValue == 'Select Type') {
            this.optionArray = ['Pixels','Inches'];
            this.textfilter = this.optionArray[0];
        }
         if (this.defaultOptionValue == 'Select Scale') {
            this.optionArray = [1,2,3,4,5,6,7,8];
            this.textfilter = this.optionArray[0];
        }

    }
}
