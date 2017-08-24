import { Component } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: 'template-module',
    template: ` 
                 <section class="TemplateModule col-xs-12 p-0 module">
                        <h5 class="option-heading col-xs-12 m-0 p-0">Template Setting</h5>
                        <div class="seperator"></div>

                        <div class="col-xs-12 mt-10">
                            <span>Size</span>
                            <input type="text" class="width" [(ngModel)]="tempWidth"><input type="text" class="height" [(ngModel)]="tempHeight">
                            <linkAsButton [parentClass]="'col-xs-3 pull-right m-0'" [applyClass]="'goSize btn'" [btnText]="'Go'" (click)=setTemplateDimension($event)></linkAsButton>

                        </div>
                        <linkAsButton [parentClass]="'quote_image_share col-xs-3'" [applyClass]="'btn update_canvas_size col-xs-12'" [btnText]="'1:1'" (click)=setTemplateSize($event)></linkAsButton>
                        <linkAsButton [parentClass]="'quote_image_share col-xs-3'" [applyClass]="'btn update_canvas_size col-xs-12'" [btnText]="'5:4'" (click)=setTemplateSize($event)></linkAsButton>
                        <linkAsButton [parentClass]="'quote_image_share col-xs-3'" [applyClass]="'btn update_canvas_size col-xs-12'" [btnText]="'4:3'" (click)=setTemplateSize($event)></linkAsButton>
                        <linkAsButton [parentClass]="'quote_image_share col-xs-3'" [applyClass]="'btn update_canvas_size col-xs-12'" [btnText]="'3:2'" (click)=setTemplateSize($event)></linkAsButton>
                        <linkAsButton [parentClass]="'quote_image_share col-xs-3'" [applyClass]="'btn update_canvas_size col-xs-12'" [btnText]="'8:5'" (click)=setTemplateSize($event)></linkAsButton>
                        <linkAsButton [parentClass]="'quote_image_share col-xs-3'" [applyClass]="'btn update_canvas_size col-xs-12'" [btnText]="'FB'" (click)=setTemplateSize($event)></linkAsButton>

                        <div class="seperator"></div>

                        <div class="col-xs-12">
                         <linkAsButton [parentClass]="'col-xs-3'" [applyClass]="'blankT btn'" [btnText]="'Blank'" (click)=setTemplateBg($event)></linkAsButton>
                         <linkAsButton [parentClass]="'col-xs-4 ml5'" [applyClass]="'CommonT btn'" [btnText]="'Common'" (click)=setTemplateBg($event)></linkAsButton>
                         <linkAsButton [parentClass]="'col-xs-4 ml5'" [applyClass]="'FunT btn'" [btnText]="'Fun'" (click)=setTemplateBg($event)></linkAsButton>
                        </div>
                        <div class="seperator"></div>
                         <linkAsButton [parentClass]="'back-color-sec col-xs-7'" [applyClass]="'back-color btn'" [btnText]="'Background-color'" (click)=setTemplateBgcolor($event)></linkAsButton>
                        <select-box [parentClass]="'opacity-sec col-xs-5'" [defaultOptionValue]="'Opacity'" (change)="updateOpacity($event)"></select-box>
                    </section>
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
        console.log(323)
        this.tempWidth = newW;
        this.tempHeight = newH;
        let userArray = this._textService.objArray;
        let oldW = parseInt(this.designcontainerRef.nativeElement.style['width']);
        let designObjs = this.designcontainerRef.nativeElement.children[0].children;
        console.log(userArray)

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
                if ((newH < userArray[i].height) || newW < calculatedW) {
                    this._textService.setImageDimension(currentObj, newW, newH, userArray[i]);
                }
            }
            else {
                let fontSize: any = ((parseInt(currentObj.style['fontSize']) / oldW) * 100).toFixed(1);
                currentObj.style['fontSize'] = (fontSize * newW) / 100 + 'px';

            }
            if (currentObj.id === userArray[i].id) {
                this._textService.setSliderValue(calculatedW, 'minV');
                this._textService.setSliderValue(newW, 'maxV');
                let objLeft = currentObj.style['left'] === '' ? 0 : parseInt(currentObj.style['left'])
                let objTop = currentObj.style['top'] === '' ? 0 : parseInt(currentObj.style['top'])
                this._textService.setAlignmentValue(Math.round((objLeft * newW) / 100), 'left');
                this._textService.setAlignmentValue(Math.round((objTop * newH) / 100), 'top');
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