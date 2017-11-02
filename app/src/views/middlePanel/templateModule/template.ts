import { Component, ViewChild ,Output,EventEmitter} from '@angular/core';
import { TextService } from '../../../service/text.service';
import { ColorPickerService } from 'angular2-color-picker';

@Component({
    selector: '[templateModule]',
    template: ` 
                        <h5 class="heading display-inline">Template Setting</h5>
                        <div class="clearfix mt-10 display-inline">
                        <button class="btn" (click)=chooseImageForBg($event)>Choose Bg Image</button>
                        <div class="vertical-seperator"></div>
                        <span #pickerBox [(colorPicker)]="color" (colorPickerChange)="closePicker($event)"
                            [cpPosition]="'right'" 
                            [style.backgroundColor]="color"
                            [cpPositionOffset]="'50%'"
                            [cpPositionRelativeToArrow]="true" class="temp-back-color icon" [cpPresetColors]="colorArray"
                            [cpOKButton]="true"
                            [cpSaveClickOutside]="true"
                            [cpOKButtonClass]= "'btn btn-primary btn-xs'"
                            [cpFallbackColor] = "color"
                            ><i  class="sprite-img"></i></span>
                        <!--button class="temp-back-color btn icon" (click)=setTemplateBgcolor($event)><i  class="sprite-img"></i></button-->
                        <div selectBox class="temp-opacity-sec" [defaultOptionValue]="'Opacity'" (change)="updateOpacity($event)"></div>
                        <div class="vertical-seperator"></div>
                        <!--div class="temp-bg-setting">
                            <linkAsButton [parentClass]="''" [applyClass]="'blankT btn'" [btnText]="'Blank'" (click)=setTemplateBg($event)></linkAsButton>
                            <linkAsButton [parentClass]="'ml5'" [applyClass]="'CommonT btn'" [btnText]="'Common'" (click)=setTemplateBg($event)></linkAsButton>
                            <linkAsButton [parentClass]="'ml5'" [applyClass]="'FunT btn'" [btnText]="'Fun'" (click)=setTemplateBg($event)></linkAsButton>
                        </div-->
                        <!--div class="inputSize"> 
                            <span>Size</span>
                            <input type="text" class="width" [(ngModel)]="tempWidth"><input type="text" class="height" [(ngModel)]="tempHeight">
                             <linkAsButton [parentClass]="'display-inline m-0'" [applyClass]="'goSize btn'" [btnText]="'Go'" (click)=setTemplateDimension($event)></linkAsButton>
                        </div-->
                        <!--button class="btn temp-aspect-ratio" (click)=setTemplateSize($event)>1:1</button>
                        <button class="btn temp-aspect-ratio" (click)=setTemplateSize($event)>5:4</button>
                        <button class="btn temp-aspect-ratio" (click)=setTemplateSize($event)>4:3</button>
                        <button class="btn temp-aspect-ratio" (click)=setTemplateSize($event)>3:2</button>
                        <button class="btn temp-aspect-ratio" (click)=setTemplateSize($event)>2:5</button>
                        <div class="vertical-seperator"></div-->
                         <div class="inputSize"> 
                            <span>Size</span>
                            <input type="text" class="width" [(ngModel)]="tempWidth"><input type="text" class="height" [(ngModel)]="tempHeight">
                            <div selectBox class="conversion-box display-inline" [defaultOptionValue]="'Select Type'" (change)="setDimensionType($event)"></div>
                            <button class="goSize btn" (click)=setTemplateDimension($event)>Go</button>
                        </div>
                        <!--div class="zoom">
                            <label>Zoom</label>
                            <md-slider (input)="onRangeChanged($event)"  min="{{minSliderValue}}" max="{{maxSlidervalue}}" value="{{defaultsliderValue}}"></md-slider>
                            <input type="text" class="zoomInput" [(ngModel)]="tempZoomWidth">
                         </div-->
                        <div class="vertical-seperator"></div>
                        <div selectBox class="scale-box" [defaultOptionValue]="'Scale'" (change)="setScale($event)"></div>

                        </div>

    `
})

export class templateModuleComponent {
    tempatePanelTitle = "Text";
    dimensionstatus = 'Pixels';
    private color: string = "#fff";
    scaleCount = 1;
    opacityValue: any = 0.8;
    tempWidth: any = 740;
    tempHeight: any = 740;

    handlerRef: any;
    designcontainerRef: any;
    currentObjRef: any;

    @ViewChild('pickerBox') public pickerBox: any;
    @Output() onfolderChoose = new EventEmitter();
    closePicker(event: any) {
        this.designcontainerRef.firstElementChild.style["background-color"] = this._textService.hexToRgbA(event, this.opacityValue);
    }
    chooseImageForBg(){
        this.onfolderChoose.emit("helolo")
    }
    updateDesignObj(newW: any, newH: any) {
        // this.tempWidth = newW;
        // this.tempHeight = newH;
        let userArray = this._textService.objArray;
        let oldW = parseInt(this.designcontainerRef.style['width']);
        let oldH = parseInt(this.designcontainerRef.style["height"])
        let designObjs = this.designcontainerRef.children[0].children;

        let me = this;
        for (let i = 0; i < designObjs.length; i++) {
            let currentObj = designObjs[i];
            let imgWidth = userArray[i].width;
            let imgRatio = parseFloat(userArray[i].ratio);
            let calculatedW = Math.round((imgWidth / oldW) * newW);
            // console.log(newH, calculatedW, imgRatio);
            userArray[i].width = (calculatedW);
            userArray[i].height = calculatedW / imgRatio;
            if (currentObj.dataset['type'] === 'image') {
                currentObj.style['width'] = this._textService.pixelToPercentage(userArray[i].width, newW);
                currentObj.style['height'] = userArray[i].height + 'px';
                this._textService.setSliderValue(calculatedW, 'minV');
                this._textService.setSliderValue(newW, 'maxV');
                let objLeft = currentObj.style['left'] === '' ? 0 : parseInt(currentObj.style['left'])
                let objTop = currentObj.style['top'] === '' ? 0 : parseInt(currentObj.style['top'])
                if ((newH < userArray[i].height) || newW < calculatedW) {
                    this._textService.setImageDimension(currentObj, newW, newH, userArray[i]);
                }
                this._textService.setAlignmentValue(Math.round((objLeft * newW) / 100), 'left');
                this._textService.setAlignmentValue(Math.round((objTop * newH) / 100), 'top');
            }
            else {
                let fontSize: any = ((parseInt(currentObj.style['fontSize']) / oldW) * 100).toFixed(1);
                currentObj.style['fontSize'] = (fontSize * newW) / 100 + 'px';
                currentObj.style['lineHeight'] = (fontSize * newW) / 100 + 'px';

                this._textService.setSliderValue(calculatedW, 'minV');
                this._textService.setSliderValue(newW, 'maxV');
                let objLeft = currentObj.style['left'] === '' ? 0 : parseInt(currentObj.style['left'])
                let objTop = currentObj.style['top'] === '' ? 0 : parseInt(currentObj.style['top'])
                this._textService.setAlignmentValue(Math.round((objLeft * newW) / 100), 'left');
                this._textService.setAlignmentValue(Math.round((objTop * newH) / 100), 'top');
                this.handlerRef.style.left = ((objLeft * newW) / 100) - 5 + 'px';
                this.handlerRef.style.top = ((objTop * newW) / 100) - 5 + 'px';

            }
            if (currentObj.id == userArray[i].id) {
                if (newW > newH) {
                    this._textService.setSliderValue(newH, 'maxV');
                }
            }
        }
        setTimeout(function () {
            if (me.currentObjRef != undefined) {
                me.handlerRef.style.width = me.currentObjRef.offsetWidth + 10 + 'px';
                me.handlerRef.style.height = me.currentObjRef.offsetHeight + 10 + 'px';
                me.handlerRef.style.left = parseInt(me.currentObjRef.offsetLeft) - 5 + 'px';
                me.handlerRef.style.top = parseInt(me.currentObjRef.offsetTop) - 5 + 'px';
            }
        }, 100)
    }
    setTemplateBg(event: any) {
        this.designcontainerRef.firstElementChild.attributes['data-bg'].value = event.target.innerHTML.toLowerCase();
    }
    updateOpacity(event: any) {
        this.opacityValue = event.target.value;
        this.designcontainerRef.firstElementChild.style['background-color'] = this._textService.hexToRgbA(this.pickerBox.nativeElement.attributes[1].value, parseFloat(event.target.value));
    }
    setDimensionType(event: any) {
        this.dimensionstatus = event.target.value
    }
    setScale(event: any) {
        this.scaleCount = event.target.value;
        this.setTemplateDimension();
    }
    setTemplateDimension() {
        let localW = 0, localH = 0
        if (this.dimensionstatus == 'Inches') {
            localW = this.tempWidth * 96 * this.scaleCount
            localH = this.tempHeight * 96 * this.scaleCount
        }
        else {
            localW = this.tempWidth * this.scaleCount
            localH = this.tempHeight * this.scaleCount
        }
        this.updateDesignObj(localW, localH);
        this.designcontainerRef.style['width'] = localW + 'px';
        this.designcontainerRef.style['height'] = localH + 'px';
    }

    constructor(private cpService: ColorPickerService, private _textService: TextService) { }
    ngOnInit() {
        this._textService.designContainerController('get').subscribe(
            data => {
                this.designcontainerRef = data;
                this.designcontainerRef = this.designcontainerRef.nativeElement
            });
        this._textService.currentObjController('getCurrentObj', '', '').subscribe(
            data => {
                if (this.currentObjRef == undefined) {
                    this.currentObjRef = undefined
                }
                else {
                    this.currentObjRef = this.currentObjRef.nativeElement
                }
            });
        this._textService.currentObjController('getHandlerObj', '', '').subscribe(
            data => {
                this.handlerRef = data;
                this.handlerRef = this.handlerRef.nativeElement
            });

    }
}