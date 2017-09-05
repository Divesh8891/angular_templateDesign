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
                                <li><button class="btn" (click)=bringForward($event)>Send Forward</button></li>
                             </ul>
                        <div class="seperator"></div>
                        <ul class="list-inline obj-action">
                            <li><button class="delete btn" (click)=deleteNode($event)>Delete</button></li>
                            <li><button class="preview btn" (click)=showPreview($event)>Preview</button></li>
                            <li><button class="save btn" (click)=saveImage($event)>Save</button></li>
                        </ul>
                          <div class="popup-body"><div id="img-out" #modal><img  src="{{modalImgSrc}}"/></div></div>
                <section class="downloadImgCont" #downloadImgCont></section>
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

    handlerRef: any;
    designcontainerRef: any;
    currentObjRef: any;
    modalImgSrc: any = '';
    canvasImageSrc: any;
    userArray: any;
    @ViewChild('modal') public modal: any;
    @ViewChild('downloadImgCont') public downloadImgCont: any;
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
                let me = this;
                if (this.currentObjRef != undefined) {
                    setTimeout(function () {

                        me.inputLeftValue = data;
                        me.maxLeftSlidervalue = parseInt(me.designcontainerRef.offsetWidth) - parseInt(me.currentObjRef.offsetWidth);
                    }, 100)
                }
            });
        this._textService.getTopAlignment().subscribe(
            data => {
                let me = this;
                if (this.currentObjRef != undefined) {

                    setTimeout(function () {
                        me.inputTopValue = data;
                        me.maxTopSlidervalue = parseInt(me.designcontainerRef.offsetHeight) - parseInt(me.currentObjRef.offsetHeight);
                    }, 100)
                }
            });
        this._textService.designContainerController('get').subscribe(
            data => {
                this.designcontainerRef = data;
                this.designcontainerRef = this.designcontainerRef.nativeElement
            });
        this._textService.currentObjController('getCurrentObj', '', '').subscribe(
            data => {
                this.currentObjRef = data;

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
    horizontalC() {
        let currentObjW = parseInt(this.currentObjRef.style['width'])
        let objLet = Math.round((100 - currentObjW) / 2);
        this.updateCurrentObj({ 'left': objLet });
    }
    verticallyC() {
        let currentObjW = parseInt(this.handlerRef.style['height']);
        let containerH = parseInt(this.designcontainerRef.style["height"]);
        let currentObj = this.currentObjRef;
        let objTop = Math.round((containerH - currentObjW - 5) / 2);
        this.handlerRef.style["top"] = objTop - 5 + 'px';
        currentObj.style.top = this._textService.pixelToPercentage((objTop), this.designcontainerRef.style["height"]);;
        this.inputTopValue = parseInt(this.handlerRef.style.top);
    }
    setwidth() {
        let currentObj = this.currentObjRef;
        currentObj.style['width'] = this._textService.pixelToPercentage(this.inputMinWidthValue, this.designcontainerRef.style["width"]);
        this._textService.setSliderValue(this.inputMinWidthValue, 'minV');
        let objArray = this._textService.objArray;
        for (let j = 0; j < objArray.length; j++) {
            if (objArray[j].id === parseInt(currentObj.id)) {
                objArray[j].width = parseInt(this.inputMinWidthValue);
                objArray[j].height = objArray[j].width * parseInt(objArray[j].ratio);
                currentObj.style['height'] = objArray[j].height + 'px';
                this.handlerRef.style.width = objArray[j].width + 10 + 'px';
                this.handlerRef.style.height = objArray[j].height + 10 + 'px';
            }
        }
    }
    updateCurrentObj(propertyArray: any) {

        this.currentObjRef.style['left'] = propertyArray.left + '%';
        this.inputLeftValue = Math.round((propertyArray.left * parseInt(this.designcontainerRef.style["width"])) / 100);
        this.inputTopValue = parseInt(this.handlerRef.style.top) + 5;
        this.handlerRef.style.left = this.inputLeftValue - 5 + 'px';

    }
    onWidthChanged(event: any) {
        // console.log(this.currentObjRef)
        if (this.currentObjRef != undefined) {
            this.inputMinWidthValue = event.value;
            let objArray = this._textService.objArray;
            let currentObjElememtID = this.currentObjRef.id;
            this.currentObjRef.style['width'] = this._textService.pixelToPercentage(event.value, this.designcontainerRef.style["width"]);
            for (let j = 0; j < objArray.length; j++) {
                // console.log(objArray[j].id, this.currentObjRef.id)
                if (objArray[j].id === parseInt(this.currentObjRef.id)) {
                    if (objArray[j].type === 'image') {
                        this.currentObjRef.style['height'] = event.value / objArray[j].ratio + 'px';
                        objArray[j].height = event.value * objArray[j].ratio;
                    }
                    this._textService.setAlignmentValue(this.currentObjRef.offsetLeft, 'left');
                    this._textService.setAlignmentValue(this.currentObjRef.offsetTop, 'top');
                    objArray[j].width = event.value;
                }
            }
            this.handlerRef.style.width = this.currentObjRef.offsetWidth + 10 + 'px';
            this.handlerRef.style.height = this.currentObjRef.offsetHeight + 10 + 'px';

        }
    }
    onWidthChangedFromInput(event: any) {
        if (this.currentObjRef != undefined) {
            this.currentObjRef.style['width'] = this._textService.pixelToPercentage((parseInt(event.target.value)), this.designcontainerRef.offsetWidth);
            this.handlerRef.style.width = parseInt(event.target.value) + 10 + 'px';
        }

    }
    onLeftChanged(event: any) {
        if (this.currentObjRef != undefined) {
            this.inputLeftValue = event.value;
            // console.log(event.value, this.designcontainerRef.offsetWidth)
            this.currentObjRef.style['left'] = this._textService.pixelToPercentage((event.value), this.designcontainerRef.offsetWidth);
            this.handlerRef.style.left = this.currentObjRef.offsetLeft - 5 + 'px';
        }
    }
    onLeftChangedFromInput(event: any) {
        if (this.currentObjRef != undefined) {
            if (event.target.value > this.maxLeftSlidervalue) {
                this.currentObjRef.style['left'] = this._textService.pixelToPercentage((this.maxLeftSlidervalue), this.designcontainerRef.offsetWidth);
                this.inputLeftValue = this.maxLeftSlidervalue
                alert("value cannot be exceed from container Height " + this.designcontainerRef.offsetWidth);
            }
            else {
                this.currentObjRef.style['left'] = this._textService.pixelToPercentage(event.target.value, this.designcontainerRef.offsetWidth);
            }
            this.handlerRef.style.left = this.currentObjRef.offsetLeft - 5 + 'px';
        }
    }
    onTopChangedFromInput(event: any) {
        if (this.currentObjRef != undefined) {
            let objH = this.currentObjRef.offsetHeight + 5;
            let containerH = parseInt(this.designcontainerRef.style["height"])
            if (event.target.value > this.maxTopSlidervalue) {
                this.currentObjRef.style['top'] = this._textService.pixelToPercentage((this.maxTopSlidervalue), containerH);
                this.inputTopValue = this.maxTopSlidervalue
                alert("value cannot be exceed from container Height " + this.maxTopSlidervalue);
            }
            else {
                this.currentObjRef.style['top'] = this._textService.pixelToPercentage(event.target.value, containerH);
            }
            this.handlerRef.style.top = this.currentObjRef.offsetTop - 5 + 'px';
        }
    }
    onTopChanged(event: any) {
        if (this.currentObjRef != undefined) {
            let containerH = parseInt(this.designcontainerRef.style["height"])
            this.inputTopValue = event.value;
            let objH = this.currentObjRef.offsetHeight;
            this.currentObjRef.style['top'] = this._textService.pixelToPercentage((event.value), containerH);
            this.handlerRef.style.top = this.currentObjRef.offsetTop - 5 + 'px';
        }
    }
    sendBack() {
        let $currentObj = this.currentObjRef;
        let $prevID = $currentObj.previousSibling;
        let $currentObjId = $currentObj.id;

        let $container = this.designcontainerRef.children[0];
        let $firstChildId = $container.firstElementChild.getAttribute('id')
        if ($firstChildId != $currentObjId) {
            $currentObj.remove();
            $container.insertBefore($currentObj, $prevID)
        }

    }
    bringFront() {
        let $currentObj = this.currentObjRef;
        let $currentObjId = $currentObj.id;
        let $nextID = $currentObj.nextSibling;

        let $container = this.designcontainerRef.children[0];
        let $lastChildId = $container.lastElementChild.getAttribute('id')

        if ($lastChildId != $currentObjId) {
            $container.insertBefore($nextID, $currentObj)
        }
    }
    sendforward() {
        let $currentObj = this.currentObjRef;
        let $currentObjId = $currentObj.id;

        let $container = this.designcontainerRef.children[0];
        let $firstChildId = $container.firstElementChild.getAttribute('id')
        let $prevID = $container.firstElementChild;

        if ($firstChildId != $currentObjId) {
            $container.insertBefore($currentObj, $prevID)
        }
    }
    bringForward() {
        let $currentObj = this.currentObjRef;
        let $currentObjId = $currentObj.id;

        let $container = this.designcontainerRef.children[0];
        let $lastChildId = $container.lastElementChild.getAttribute('id')



        if ($lastChildId != $currentObjId) {
            $container.insertAdjacentHTML('beforeend', '<div id="two">two</div>');
            let $prevID = $container.lastElementChild;
            $container.insertBefore($currentObj, $prevID)
            $prevID.remove();
        }
    }



    showPreview() {
        let me = this;
        me.handlerRef.style.display = 'none';
        html2canvas(this.designcontainerRef).then(function (canvas: any) {
            me.modalImgSrc = canvas.toDataURL("image/jpeg");
            me.handlerRef.style.display = 'block';
        });

    }
    saveImage() {
        let me = this;
        me.handlerRef.style.display = 'none';
        html2canvas(this.designcontainerRef).then(function (canvas: any) {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            a.download = 'template.png';
            a.click();
            me.handlerRef.style.display = 'block';
        }
        );

    }
    deleteNode() {
        let ObjArray = this._textService.objArray;
        let currentObjElememtID = this.currentObjRef.id;
        for (let j = 0; j < ObjArray.length; j++) {
            if (ObjArray[j].id == currentObjElememtID) {
                ObjArray.splice(j, 1);
                break;
            }
        }
        this.handlerRef.style.display = 'none';
    }
    constructor(private _textService: TextService) {
    }

}