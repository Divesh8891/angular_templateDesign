import { Component, ViewChild } from '@angular/core';
import { TextService } from '../../service/text.service';
@Component({
    selector: '[rightModule]',
    template: ` 
                        <h5 class="heading">{{AlignmnetPanelTitle}}</h5>
                        <div class="seperator"></div> 
                        <!--linkAsButton [parentClass]="'l align-opt col-xs-4'" [applyClass]="'leftA btn btn-lrg'" [btnText]="'L'" (click)=leftAlignment($event)></linkAsButton>
                        <linkAsButton [parentClass]="'m align-opt col-xs-4'" [applyClass]="'mid btn btn-lrg'" [btnText]="'M'" (click)=middleAlignment($event)></linkAsButton>
                        <linkAsButton [parentClass]="'r align-opt col-xs-4'" [applyClass]="'right btn btn-lrg'" [btnText]="'R'" (click)=rightAlignment($event)></linkAsButton-->
                        <div class="left-align">
                            <label>Left</label>
                            <div class="leftSlider">
                                <md-slider class="custom-slider" (input)="onRangeChanged($event)"  min="{{minSliderValue}}" max="{{maxSlidervalue}}" value="{{defaultsliderValue}}"></md-slider>
                            </div>
                            <input type="text" placeholder="Left" class="leftP" [(ngModel)]="inputLeftValue" >
                        </div>
                        <div class="top-align">
                            <label>Top</label>
                            <div class="topSlider">
                                <md-slider (input)="onRangeChanged($event)"  min="{{minSliderValue}}" max="{{maxSlidervalue}}" value="{{defaultsliderValue}}"></md-slider>
                            </div>
                            <input type="text" placeholder="top"class="topP" [(ngModel)]="inputTopValue">
                        </div>
                        <div class="text-center align-center">
                         <linkAsButton [parentClass]="'display-inline'" [applyClass]="'btn'" [btnText]="'HCenter'" (click)=horizontalC($event)></linkAsButton>
                         <linkAsButton [parentClass]="'display-inline'" [applyClass]="'btn'" [btnText]="'VCenter'" (click)=verticallyC($event)></linkAsButton>
                        </div>
                        <div class="seperator"></div>
                        <div class="width-align"  [attr.data-min]="inputWidthValue" [attr.data-max]="inputMaxWidthValue">
                            <h5>Width </h5>
                            <input type="text" placeholder="Min" class="widthA" [(ngModel)]="inputMinWidthValue" value={{inputMinWidthValue}}>
                             <div class="widthSlider">
                                <md-slider (input)="onRangeChanged($event)"  min="{{minSliderValue}}" max="{{maxSlidervalue}}" value="{{defaultsliderValue}}"></md-slider>
                            </div>     
                            <input readonly placeholder="Max" type="text" class="widthA" [(ngModel)]="inputMaxWidthValue" value={{inputMaxWidthValue}}>
                        </div>
                        <div class="seperator"></div>
                            <ul class="list-inline align-action">
                                <li><linkAsButton [parentClass]="''" [applyClass]="'btn'" [btnText]="'Send Back'"  (click)=sendBack($event)></linkAsButton></li>
                                <li><linkAsButton [parentClass]="''" [applyClass]="'btn'" [btnText]="'Send Backward'"  (click)=sendforward($event)></linkAsButton></li>
                                <li><linkAsButton [parentClass]="''" [applyClass]="'btn'" [btnText]="'Bring front'"  (click)=bringFront($event)></linkAsButton></li>
                                <li><linkAsButton [parentClass]="''" [applyClass]="'btn'" [btnText]="'Bring Backward'"  (click)=bringForward($event)></linkAsButton></li>
                             </ul>
                        <div class="seperator"></div>
                        <ul class="list-inline obj-action">
                                <li><linkAsButton [parentClass]="''" [applyClass]="'delete btn'" [btnText]="'Delete'"  (click)=deleteNode($event)></linkAsButton></li>
                                <li><linkAsButton [parentClass]="''" [applyClass]="'preview btn'" [btnText]="'Preview'"  (click)=showPreview($event)></linkAsButton></li>
                                <li><linkAsButton [parentClass]="''" [applyClass]="'save btn'" [btnText]="'Save'"  (click)=saveImage($event)></linkAsButton></li>
                        </ul>
    `
})

export class rightPanelComponent {
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
        this._textService.getLeftAlignment().subscribe(
            data => {
                this.inputLeftValue = data;
            });
        this._textService.getTopAlignment().subscribe(
            data => {
                this.inputTopValue = data;
            });


    }

    leftAlignment(event: any) {
        this.updateCurrentObj({ 'left': '0' });
        console.log(this.slider)
    }
    middleAlignment(event: any) {
        let currentObjW = parseInt(this._textService.currentObj.nativeElement.style['width'])
        let objLet = Math.round((100 - currentObjW) / 2);
        this.updateCurrentObj({ 'left': objLet });

    }
    rightAlignment(event: any) {
        let containerW = parseInt(this._textService.currentObj.nativeElement.style["width"]);
        let objLet = (100 - containerW);
        this.updateCurrentObj({ 'left': objLet });
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
        let currentObj = this._textService.currentObj.nativeElement;
        this.handlerRef = this._textService.handlerRef;

        currentObj.style['width'] = this._textService.pixelToPercentage(this.inputMinWidthValue, this._textService.designcontainerRef.nativeElement.style["width"]);
        this._textService.setSliderValue(this.inputMinWidthValue, 'minV');
        let objArray = this._textService.objArray;
        for (let j = 0; j < objArray.length; j++) {
            if (objArray[j].id === parseInt(currentObj.id)) {
                objArray[j].width = parseInt(this.inputMinWidthValue);
                objArray[j].height = objArray[j].width * parseInt(objArray[j].ratio);
                currentObj.style['height'] = objArray[j].height + 'px';
                this.handlerRef.nativeElement.style.width = objArray[j].width + 10 + 'px';
                this.handlerRef.nativeElement.style.height = objArray[j].height + 10 + 'px';
            }
        }
    }
    updateCurrentObj(propertyArray: any) {
        this.currentObj = this._textService.currentObj;
        this.handlerRef = this._textService.handlerRef;

        this.currentObj.nativeElement.style['left'] = propertyArray.left + '%';
        this.inputLeftValue = Math.round((propertyArray.left * parseInt(this._textService.designcontainerRef.nativeElement.style["width"])) / 100);
        this.inputTopValue = parseInt(this.handlerRef.nativeElement.style.top) + 5;
        this.handlerRef.nativeElement.style.left = this.inputLeftValue - 5 + 'px';

    }
    onRangeChanged(event: any) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;

        if (this.currentObj != undefined) {
            this.inputMinWidthValue = event.value;
            let objArray = this._textService.objArray;
            let currentObjElememtID = this._textService.currentObj.nativeElement.id;
            this.currentObj.nativeElement.style['width'] = this._textService.pixelToPercentage(event.value, this._textService.designcontainerRef.nativeElement.style["width"]);
            for (let j = 0; j < objArray.length; j++) {
                console.log(objArray[j].id, this.currentObj.nativeElement.id)
                if (objArray[j].id === parseInt(this.currentObj.nativeElement.id)) {
                    if (this.currentObj.nativeElement.dataset['type'] === 'image') {
                        this.currentObj.nativeElement.style['height'] = event.value / objArray[j].ratio + 'px';
                        objArray[j].height = event.value * objArray[j].ratio;
                    }
                    objArray[j].width = event.value;
                }
            }
            this.handlerRef.nativeElement.style.width = this.currentObj.nativeElement.offsetWidth + 10 + 'px';
            this.handlerRef.nativeElement.style.height = this.currentObj.nativeElement.offsetHeight + 10 + 'px';
        }
    }

    constructor(private _textService: TextService) {
    }
}