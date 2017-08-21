import { Component, ViewChild } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: 'alignment-module',
    template: ` 
                <section class="AlignmentModule col-xs-12 p-0 module">
                        <h5 class="option-heading col-xs-12 m-0 p-0">{{AlignmnetPanelTitle}}</h5>
                        <div class="seperator"></div> 
                        <linkAsButton [parentClass]="'l align-opt col-xs-4'" [applyClass]="'leftA btn btn-lrg'" [btnText]="'L'" (click)=leftAlignment($event)></linkAsButton>
                        <linkAsButton [parentClass]="'m align-opt col-xs-4'" [applyClass]="'mid btn btn-lrg'" [btnText]="'M'" (click)=middleAlignment($event)></linkAsButton>
                        <linkAsButton [parentClass]="'r align-opt col-xs-4'" [applyClass]="'right btn btn-lrg'" [btnText]="'R'" (click)=rightAlignment($event)></linkAsButton>
                        <div class="seperator"></div>
                        <div class="col-xs-12">
                            <label>L : </label><input type="text" class="leftP" [(ngModel)]="inputLeftValue" ><label>T : </label><input type="text" class="topP" [(ngModel)]="inputTopValue">
                            <linkAsButton [parentClass]="'col-xs-3 pull-right m-0'" [applyClass]="'goSize btn'" [btnText]="'GO'" (click)=setAlignment($event)></linkAsButton>
                        </div>
                        <div class="seperator"></div>
                        <div class="col-xs-12">
                            <label>w : </label><input type="text" class="widthA" [(ngModel)]="inputWidthValue">
                            <linkAsButton [parentClass]="'col-xs-3 pull-right m-0'" [applyClass]="'goSize btn'" [btnText]="'GO'" (click)=setwidth($event)></linkAsButton>
                        </div>
                           <md-slider (input)="onRangeChanged($event)"  min="{{minSliderValue}}" max="{{maxSlidervalue}}"></md-slider>
                    </section>
    `
})

export class alignmentModuleComponent {
    maxSlidervalue: number = 100;
    minSlidervalue: number = 1;

    AlignmnetPanelTitle = "Alignment";
    currentObj: any;
    handlerRef: any;
    inputLeftValue: any;
    inputTopValue: any;
    inputWidthValue: any;

    @ViewChild('slider') public slider: any;
    leftAlignment(event: any) {
        this.updateCurrentObj({ 'left': '0px', 'right': 'auto', 'transform': '' });
        console.log(this.slider)
    }
    middleAlignment(event: any) {
        this.updateCurrentObj({ 'left': '50%', 'right': 'auto', 'transform': 'translateX(-50%)' });

    }
    rightAlignment(event: any) {
        this.updateCurrentObj({ 'left': 'auto', 'right': '0', 'transform': '' });
    }

    setAlignment() {
        this.currentObj = this._textService.currentObj;
        this.handlerRef = this._textService.handlerRef;
        this.currentObj.nativeElement.style['transform'] = '';
        this.currentObj.nativeElement.style['left'] = this.inputLeftValue;
        this.currentObj.nativeElement.style['top'] = this.inputTopValue;
        this.currentObj.nativeElement.style['right'] = 'auto';
        this.handlerRef.nativeElement.style.left = this.inputLeftValue;
        this.handlerRef.nativeElement.style.top = this.inputTopValue;
    }
    setwidth() {
        this.currentObj = this._textService.currentObj;

        this.currentObj.nativeElement.style['width'] = this.inputWidthValue + 'px';
        this._textService.setAspectRaion();
    }
    updateCurrentObj(propertyArray: any) {
        this.currentObj = this._textService.currentObj;
        this.handlerRef = this._textService.handlerRef;

        this.currentObj.nativeElement.style['left'] = propertyArray.left;
        this.currentObj.nativeElement.style['right'] = propertyArray.right;
        this.currentObj.nativeElement.style['transform'] = propertyArray.transform;
        this.handlerRef.nativeElement.style.left = propertyArray.left;
        this.handlerRef.nativeElement.style.right = propertyArray.right;
        this.handlerRef.nativeElement.style['transform'] = propertyArray.transform;

        this.inputLeftValue = propertyArray.left;
        this.inputTopValue = this.currentObj.nativeElement.style.top;

    }
    onRangeChanged(event: any) {
        this.inputWidthValue = event.value;
    }
    constructor(private _textService: TextService) {
    }
}