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
        let oldW = parseInt(this.designcontainerRef.nativeElement.style['width']);
        let designObjs = this.designcontainerRef.nativeElement.children[0].children;
        let me = this;
        for (let i = 0; i < designObjs.length; i++) {
            let fontSize: any = ((parseInt(designObjs[i].style['fontSize']) / oldW) * 100).toFixed(1);
            designObjs[i].style['fontSize'] = (fontSize * newW) / 100 + 'px';
            if (designObjs[i].dataset['type'] === 'image') {
                console.log(designObjs[i].offsetWidth);
                designObjs[i].style['height'] = (designObjs[i].offsetWidth * parseInt(designObjs[i].dataset['ratio'])) + 'px';
            }
        }
        setTimeout(function () {
            me.currentObj = me._textService.currentObj;
            me.handlerRef = me._textService.handlerRef;
            me.handlerRef.nativeElement.style.width = me.currentObj.nativeElement.offsetWidth + 10 + 'px';
            me.handlerRef.nativeElement.style.height = me.currentObj.nativeElement.offsetHeight + 10 + 'px';
            me.handlerRef.nativeElement.style.left = parseInt(me.currentObj.nativeElement.offsetLeft) - 5 + 'px';
            me.handlerRef.nativeElement.style.top = parseInt(me.currentObj.nativeElement.offsetTop) - 5 + 'px';

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
        
        this.designcontainerRef.nativeElement.style['width'] = this.tempWidth + 'px';
        this.designcontainerRef.nativeElement.style['height'] = this.tempHeight + 'px';

    }

    constructor(private _textService: TextService) { }

}