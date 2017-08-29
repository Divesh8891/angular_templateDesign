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
                            <h5 class="m0">Left</h5>
                            <div class="leftSlider">
                                <md-slider class="custom-slider" (input)="onLeftChanged($event)"  min="{{minLeftSlidervalue}}" max="{{maxLeftSlidervalue}}" value="{{inputLeftValue}}"></md-slider>
                            </div>
                            <input type="text" placeholder="Left" (input)="onLeftChangedFromInput($event)" class="leftP" [(ngModel)]="inputLeftValue" >
                        </div>
                        <div class="top-align">
                            <h5 class="m0">Top</h5>
                            <div class="topSlider">
                                <md-slider class="custom-slider" (input)="onTopChanged($event)"  min="{{minTopSliderValue}}" max="{{maxTopSlidervalue}}" value="{{inputTopValue}}"></md-slider>
                            </div>
                            <input type="text" placeholder="top"class="topP" (input)="onTopChangedFromInput($event)" [(ngModel)]="inputTopValue">
                        </div>
                        <div class="text-center align-center">
                            <button class="btn" (click)=horizontalC($event)>HCenter</button>
                            <button class="btn" (click)=verticallyC($event)>VCenter</button>
                        </div>
                        <div class="seperator"></div>
                        <div class="width-align"  [attr.data-min]="inputWidthValue" [attr.data-max]="inputMaxWidthValue">
                            <h5  class="m0">Width </h5>
                             <div class="widthSlider">
                                <md-slider (input)="onWidthChanged($event)"  min="{{minWidthSlidervalue}}" max="{{maxWidthSlidervalue}}" value="{{inputMinWidthValue}}"></md-slider>
                            </div>     
                            <div class="text-center">
                                <input type="text" (input)="onWidthChangedFromInput($event)" placeholder="Min" class="widthA" [(ngModel)]="inputMinWidthValue" value={{inputMinWidthValue}}>
                                <input readonly placeholder="Max" type="text" class="widthA" [(ngModel)]="inputMaxWidthValue" value={{inputMaxWidthValue}}>
                            </div>
                        </div>
                        <div class="seperator"></div>
                            <ul class="list-inline align-action">
                                <li><button class="btn" (click)=sendBack($event)>Send Back</button></li>
                                <li><button class="btn" (click)=sendforward($event)>Send Backward</button></li>
                                <li><button class="btn" (click)=bringFront($event)>Bring front</button></li>
                                <li><button class="btn" (click)=bringForward($event)>Send Backward</button></li>
                             </ul>
                        <div class="seperator"></div>
                        <ul class="list-inline obj-action">
                            <li><button class="delete btn" (click)=deleteNode($event)>Delete</button></li>
                            <li><button class="preview btn" (click)=showPreview($event)>Preview</button></li>
                            <li><button class="save btn" (click)=saveImage($event)>Save</button></li>
                        </ul>
    `
})

export class rightPanelComponent {
    inputMinWidthValue: any;
    inputMaxWidthValue: any;
    minWidthSlidervalue: any = 0;
    maxWidthSlidervalue: any = 100;
    defaultsliderValue: any = 0;

    inputLeftValue: any;
    minLeftSlidervalue: any = 0;
    maxLeftSlidervalue: any = 100;
    defaultLeftSlidervalue: any = this.inputLeftValue;

    inputTopValue: any;
    minTopSlidervalue: any = 0;
    maxTopSlidervalue: any = 100;
    defaultTopSlidervalue: any = this.inputTopValue;

    AlignmnetPanelTitle = "Alignment";
    currentObj: any;
    handlerRef: any;


    @ViewChild('slider') public slider: any;

    ngOnInit() {
        this._textService.getSliderMaxValue().subscribe(
            data => {
                this.maxWidthSlidervalue = data;
                this.inputMaxWidthValue = data;
            });
        this._textService.getSliderMinValue().subscribe(
            data => {
                this.defaultsliderValue = data;
                this.inputMinWidthValue = data;
            });
        this._textService.getLeftAlignment().subscribe(
            data => {
                // console.log((this._textService.designcontainerRef))

                // console.log(parseInt(this._textService.designcontainerRef.nativeElement.offsetWidth),parseInt(this._textService.currentObj.nativeElement.offsetWidth))
                let me = this;
                setTimeout(function () {
                    me.inputLeftValue = data;
                    console.log(me._textService.designcontainerRef)
                    console.log(me._textService.currentObj)

                    me.maxLeftSlidervalue = parseInt(me._textService.designcontainerRef.nativeElement.offsetWidth) - parseInt(me._textService.currentObj.nativeElement.offsetWidth);
                    console.log(this.maxLeftSlidervalue)
                }, 100)
            });
        this._textService.getTopAlignment().subscribe(
            data => {
                let me = this;

                // console.log(parseInt(this._textService.designcontainerRef.nativeElement.offsetHeight), parseInt(this._textService.currentObj.nativeElement.offsetHeight))
                setTimeout(function () {
                    me.inputTopValue = data;
                    me.maxTopSlidervalue = parseInt(me._textService.designcontainerRef.nativeElement.offsetHeight) - parseInt(me._textService.currentObj.nativeElement.offsetHeight);
                    console.log(this.maxTopSlidervalue)
                }, 100)
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
    onWidthChanged(event: any) {
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
                        console.log(this._textService.designcontainerRef.nativeElement.style["width"], event.value)
                        // this.maxLeftSlidervalue = parseInt(this._textService.designcontainerRef.nativeElement.style["width"]) - event.value;
                        // this.maxTopSlidervalue = parseInt(this._textService.designcontainerRef.nativeElement.style["height"]) - (event.value / objArray[j].ratio);
                        this._textService.setAlignmentValue(event.value, 'left');
                        this._textService.setAlignmentValue((event.value / objArray[j].ratio), 'top');

                    }
                    objArray[j].width = event.value;
                }
            }
            this.handlerRef.nativeElement.style.width = this.currentObj.nativeElement.offsetWidth + 10 + 'px';
            this.handlerRef.nativeElement.style.height = this.currentObj.nativeElement.offsetHeight + 10 + 'px';

        }
    }
    onWidthChangedFromInput(event: any) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            this.currentObj.nativeElement.style['width'] = this._textService.pixelToPercentage((event.value), this._textService.designcontainerRef.nativeElement.offsetWidth);
            this.handlerRef.nativeElement.style.left = this.currentObj.nativeElement.offsetLeft - 5 + 'px';
        }

    }
    onLeftChanged(event: any) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            this.inputLeftValue = event.value;
            console.log(event.value, this._textService.designcontainerRef.nativeElement.offsetWidth)
            this.currentObj.nativeElement.style['left'] = this._textService.pixelToPercentage((event.value), this._textService.designcontainerRef.nativeElement.offsetWidth);
            this.handlerRef.nativeElement.style.left = this.currentObj.nativeElement.offsetLeft - 5 + 'px';
        }
    }
    onLeftChangedFromInput(event: any) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            if (event.target.value > this.maxLeftSlidervalue) {
                this.currentObj.nativeElement.style['left'] = this._textService.pixelToPercentage((this.maxLeftSlidervalue), this._textService.designcontainerRef.nativeElement.offsetWidth);
                this.inputLeftValue = this.maxLeftSlidervalue
                alert("value cannot be exceed from container Height " + this._textService.designcontainerRef.nativeElement.offsetWidth);
            }
            else {
                this.currentObj.nativeElement.style['left'] = this._textService.pixelToPercentage(event.target.value, this._textService.designcontainerRef.nativeElement.offsetWidth);
            }
            this.handlerRef.nativeElement.style.left = this.currentObj.nativeElement.offsetLeft - 5 + 'px';
        }
    }
    onTopChangedFromInput(event: any) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            let objH = this.currentObj.nativeElement.offsetHeight + 5;
            let containerH = parseInt(this._textService.designcontainerRef.nativeElement.style["height"])
            if (event.target.value > this.maxTopSlidervalue) {
                this.currentObj.nativeElement.style['top'] = this._textService.pixelToPercentage((this.maxTopSlidervalue), containerH);
                this.inputTopValue = this.maxTopSlidervalue
                alert("value cannot be exceed from container Height " + this.maxTopSlidervalue);
            }
            else {
                this.currentObj.nativeElement.style['top'] = this._textService.pixelToPercentage(event.target.value, containerH);
            }
            this.handlerRef.nativeElement.style.top = this.currentObj.nativeElement.offsetTop - 5 + 'px';
        }
    }
    onTopChanged(event: any) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            let containerH = parseInt(this._textService.designcontainerRef.nativeElement.style["height"])
            this.inputTopValue = event.value;
            let objH = this.currentObj.nativeElement.offsetHeight;
            this.currentObj.nativeElement.style['top'] = this._textService.pixelToPercentage((event.value), containerH);
            this.handlerRef.nativeElement.style.top = this.currentObj.nativeElement.offsetTop - 5 + 'px';
        }
    }
    constructor(private _textService: TextService) {
    }
}