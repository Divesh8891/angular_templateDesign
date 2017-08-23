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
                        <div class="col-xs-12"  [attr.data-min]="inputWidthValue" [attr.data-max]="inputMaxWidthValue">
                            <label>Width: </label>
                            <md-slider (input)="onRangeChanged($event)"  min="{{minSliderValue}}" max="{{maxSlidervalue}}" value="{{defaultsliderValue}}"></md-slider>
                            <label>Min: </label><input type="text" class="widthA" [(ngModel)]="inputMinWidthValue" value={{inputMinWidthValue}}>
                            <label>Max: </label><input type="text" class="widthA" [(ngModel)]="inputMaxWidthValue" value={{inputMaxWidthValue}}>
                            <linkAsButton [parentClass]="'col-xs-12 m-0'" [applyClass]="'goSize btn btn-lrg mt-10'" [btnText]="'GO'" (click)=setwidth($event)></linkAsButton>
                        </div>
                    </section>
    `
})

export class alignmentModuleComponent {
    maxSlidervalue: any = 100;
    minSlidervalue: any = 0;
    defaultsliderValue: any = 0;
    AlignmnetPanelTitle = "Alignment";
    currentObj: any;
    handlerRef: any;
    inputLeftValue: any;
    inputTopValue: any;
    inputMinWidthValue: any;
    inputMaxWidthValue: any;


    @ViewChild('slider') public slider: any;

    ngOnInit() {
        this._textService.getSliderMaxValue().subscribe(
            data => {
                this.maxSlidervalue = data;
                this.inputMaxWidthValue = data;
            });
        this._textService.getSliderMinValue().subscribe(
            data => {
                this.defaultsliderValue = data;
                this.inputMinWidthValue = data;
            });

    }

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
        this.currentObj.nativeElement.style['width'] = this.inputMinWidthValue + 'px';
        this._textService.setAspectRaion(this.currentObj.nativeElement, this._textService.designcontainerRef.nativeElement.style["width"], this._textService.designcontainerRef.nativeElement.style["height"]);
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
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;

        if (this.currentObj != undefined) {
            this.inputMinWidthValue = event.value;
            this.currentObj.nativeElement.style['width'] = this._textService.pixelToPercentage(event.value, this._textService.designcontainerRef.nativeElement.style["width"]);
            this.currentObj.nativeElement.style['height'] = event.value * parseInt(this.currentObj.nativeElement.dataset['ratio']) + 'px';
            this.currentObj.nativeElement.dataset['width'] = event.value;
            this.handlerRef.nativeElement.style.width = this.currentObj.nativeElement.offsetWidth + 10 + 'px';
            this.handlerRef.nativeElement.style.height = this.currentObj.nativeElement.offsetHeight + 10 + 'px';
        }
    }

    constructor(private _textService: TextService) {
    }
}