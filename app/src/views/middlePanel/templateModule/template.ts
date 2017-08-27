import { Component } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: '[templateModule]',
    template: ` 
                        <h5 class="option-heading m-0 p-0">Template Setting</h5>
                        <div class="seperator"></div>

                        <div class="clearfix mt-10">
                        <linkAsButton [parentClass]="'quote_image_share'" [applyClass]="'btn'" [btnText]="'Choose Bg Image'" (click)=chooseImageForBg($event)></linkAsButton>
                        <div class="temp-bg-setting">
                            <!--linkAsButton [parentClass]="''" [applyClass]="'blankT btn'" [btnText]="'Blank'" (click)=setTemplateBg($event)></linkAsButton>
                            <linkAsButton [parentClass]="'ml5'" [applyClass]="'CommonT btn'" [btnText]="'Common'" (click)=setTemplateBg($event)></linkAsButton>
                            <linkAsButton [parentClass]="'ml5'" [applyClass]="'FunT btn'" [btnText]="'Fun'" (click)=setTemplateBg($event)></linkAsButton-->
                            <linkAsButton [parentClass]="'back-color-sec display-inline'" [applyClass]="'back-color btn'" [btnText]="'Bg Color'" (click)=setTemplateBgcolor($event)></linkAsButton>
                            <select-box [parentClass]="'opacity-sec display-inline'" [defaultOptionValue]="'Opacity'" (change)="updateOpacity($event)"></select-box>
                        </div>
                        <!--div class="inputSize"> 
                            <span>Size</span>
                            <input type="text" class="width" [(ngModel)]="tempWidth"><input type="text" class="height" [(ngModel)]="tempHeight">
                            <linkAsButton [parentClass]="'display-inline m-0'" [applyClass]="'goSize btn'" [btnText]="'Go'" (click)=setTemplateDimension($event)></linkAsButton>
                        </div-->
                        <linkAsButton [parentClass]="'quote_image_share col-xs1-3'" [applyClass]="'btn update_canvas_size col-xs-12'" [btnText]="'1:1'" (click)=setTemplateSize($event)></linkAsButton>
                        <linkAsButton [parentClass]="'quote_image_share col-xs1-3'" [applyClass]="'btn update_canvas_size col-xs-12'" [btnText]="'5:4'" (click)=setTemplateSize($event)></linkAsButton>
                        <linkAsButton [parentClass]="'quote_image_share col-xs1-3'" [applyClass]="'btn update_canvas_size col-xs-12'" [btnText]="'4:3'" (click)=setTemplateSize($event)></linkAsButton>
                        <linkAsButton [parentClass]="'quote_image_share col-xs1-3'" [applyClass]="'btn update_canvas_size col-xs-12'" [btnText]="'3:2'" (click)=setTemplateSize($event)></linkAsButton>
                        <!--linkAsButton [parentClass]="'quote_image_share col-xs1-3'" [applyClass]="'btn update_canvas_size col-xs-12'" [btnText]="'8:5'" (click)=setTemplateSize($event)></linkAsButton-->
                        <!--linkAsButton [parentClass]="'quote_image_share col-xs1-3'" [applyClass]="'btn update_canvas_size col-xs-12'" [btnText]="'FB'" (click)=setTemplateSize($event)></linkAsButton-->
                        <div class="zoom">
                            <md-slider (input)="onRangeChanged($event)"  min="{{minSliderValue}}" max="{{maxSlidervalue}}" value="{{defaultsliderValue}}"></md-slider>
                        </div>
                        </div>

    `
})

export class templateModuleComponent {
    tempatePanelTitle = "Text";
    designcontainerRef: any;
    colorBoxRef: any;
    tempWidth: any;
    tempHeight: any;
    handlerRef: any;
    currentObj: any;

    setTemplateSize(event: any) {
        this.getDesignContainerRef();
        if (event.target.innerHTML === "1:1") {
            this.updateDesignObj(400, 400);
            this.designcontainerRef.nativeElement.style['width'] = '400px';
            this.designcontainerRef.nativeElement.style['height'] = '400px';

        }
        if (event.target.innerHTML === "5:4") {
            this.updateDesignObj(500, 400);
            this.designcontainerRef.nativeElement.style['width'] = '500px';
            this.designcontainerRef.nativeElement.style['height'] = '400px';

        }
        if (event.target.innerHTML === "4:3") {
            this.updateDesignObj(400, 300);
            this.designcontainerRef.nativeElement.style['width'] = '400px';
            this.designcontainerRef.nativeElement.style['height'] = '300px';

        }
        if (event.target.innerHTML === "3:2") {
            this.updateDesignObj(300, 200);
            this.designcontainerRef.nativeElement.style['width'] = '300px';
            this.designcontainerRef.nativeElement.style['height'] = '200px';

        }
        if (event.target.innerHTML === "8:5") {
            this.updateDesignObj(800, 500);
            this.designcontainerRef.nativeElement.style['width'] = '800px';
            this.designcontainerRef.nativeElement.style['height'] = '500px';

        }
        if (event.target.innerHTML === "FB") {
            this.updateDesignObj(780, 780);
            this.designcontainerRef.nativeElement.style['width'] = '768px';
            this.designcontainerRef.nativeElement.style['height'] = '768px';

        }
    }
    updateDesignObj(newW: any, newH: any) {
        this.getDesignContainerRef();
        this.tempWidth = newW;
        this.tempHeight = newH;
        let userArray = this._textService.objArray;
        let oldW = parseInt(this.designcontainerRef.nativeElement.style['width']);
        let designObjs = this.designcontainerRef.nativeElement.children[0].children;

        let me = this;
        for (let i = 0; i < designObjs.length; i++) {
            let currentObj = designObjs[i];
            let imgWidth = userArray[i].width;
            let imgRatio = parseFloat(userArray[i].ratio);
            let calculatedW = Math.round((imgWidth / oldW) * newW);
            // console.log(newH, calculatedW, imgRatio);

            userArray[i].width = (calculatedW);
            userArray[i].height = calculatedW * imgRatio;
            if (currentObj.dataset['type'] === 'image') {
                currentObj.style['width'] = this._textService.pixelToPercentage(userArray[i].width, newW);
                currentObj.style['height'] = userArray[i].height + 'px';
                this._textService.setSliderValue(calculatedW, 'minV');
                this._textService.setSliderValue(newW, 'maxV');
                let objLeft = currentObj.style['left'] === '' ? 0 : parseInt(currentObj.style['left'])
                let objTop = currentObj.style['top'] === '' ? 0 : parseInt(currentObj.style['top'])
                this._textService.setAlignmentValue(Math.round((objLeft * newW) / 100), 'left');
                this._textService.setAlignmentValue(Math.round((objTop * newH) / 100), 'top');
                if ((newH < userArray[i].height) || newW < calculatedW) {
                    this._textService.setImageDimension(currentObj, newW, newH, userArray[i]);
                }
            }
            else {
                let fontSize: any = ((parseInt(currentObj.style['fontSize']) / oldW) * 100).toFixed(1);
                currentObj.style['fontSize'] = (fontSize * newW) / 100 + 'px';
                this._textService.setSliderValue(calculatedW, 'minV');
                this._textService.setSliderValue(newW, 'maxV');
                let objLeft = currentObj.style['left'] === '' ? 0 : parseInt(currentObj.style['left'])
                let objTop = currentObj.style['top'] === '' ? 0 : parseInt(currentObj.style['top'])
                this._textService.setAlignmentValue(Math.round((objLeft * newW) / 100), 'left');
                this._textService.setAlignmentValue(Math.round((objTop * newH) / 100), 'top');
                console.log(this._textService.currentObj)
            }
           
        }
        setTimeout(function () {

            me.currentObj = me._textService.currentObj;
            me.handlerRef = me._textService.handlerRef;
            if (me.currentObj != undefined) {
                me.handlerRef.nativeElement.style.width = me.currentObj.nativeElement.offsetWidth + 10 + 'px';
                me.handlerRef.nativeElement.style.height = me.currentObj.nativeElement.offsetHeight + 10 + 'px';
                me.handlerRef.nativeElement.style.left = parseInt(me.currentObj.nativeElement.offsetLeft) - 5 + 'px';
                me.handlerRef.nativeElement.style.top = parseInt(me.currentObj.nativeElement.offsetTop) - 5 + 'px';
            }
        }, 100)

    }
    setTemplateBg(event: any) {
        this.getDesignContainerRef();
        this.designcontainerRef.nativeElement.firstElementChild.attributes['data-bg'].value = event.target.innerHTML.toLowerCase();

    }
    getDesignContainerRef() {

        this.designcontainerRef = this._textService.designcontainerRef;

    }
    setTemplateBgcolor() {
        this.colorBoxRef = this._textService.colorBoxRef;
        this.colorBoxRef.nativeElement.dataset['call'] = 'backgroundColor';
        this.colorBoxRef.nativeElement.dataset['module'] = 'template';
        this.colorBoxRef.nativeElement.style.display = 'block';
    }
    updateOpacity(event: any) {
        this.designcontainerRef.nativeElement.style['opacity'] = event.target.value;
    }
    setTemplateDimension(event: any) {
        this.getDesignContainerRef();
        this.updateDesignObj(this.tempWidth, this.tempHeight);
        this.designcontainerRef.nativeElement.style['width'] = this.tempWidth + 'px';
        this.designcontainerRef.nativeElement.style['height'] = this.tempHeight + 'px';

    }

    constructor(private _textService: TextService) { }

}