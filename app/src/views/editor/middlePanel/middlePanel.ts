import { Component, ViewChild, ViewChildren } from '@angular/core';
import { TextService } from '../../../service/text.service';
import { ColorPickerService } from 'angular2-color-picker';


@Component({
    selector: '[middleModule]',
    // template: ` 
    //             <!--section class="template-module bg-grey" templateModule (onfolderChoose)=openFolderOption($event)></section-->
    //             <section class="design-section display-inline" designContainer></section>
    //             <!--section class="help-image-popup " #helpImagePopup (onfolderChoose)=openFolderOption($event)>
    //                 <ul class="left-sec">
    //                     <li [class.active]="myString == 'Products'"><span (click)="showlist($event)">Products</span></li>
    //                     <li [class.active]="myString == 'Shapes' "><span (click)="showlist($event)">Shapes</span></li>
    //                     <li [class.active]="myString == 'Smilies' "><span (click)="showlist($event)">Smilies</span></li>
    //                 </ul>
    //                 <div class="right-sec">
    //                        <ul class="shapes"><li data-parent="shapes" class="active"><img src="../app/assets/imageLibrary/shapes/rect.png" /></ul>
    //                 </div>
    //             </section-->


    // template: ` 
    //             <!--section class="template-module bg-grey" templateModule (onfolderChoose)=openFolderOption($event)></section-->
    //             <section class="design-section display-inline" designContainer></section>
    //             <!--section class="help-image-popup " #helpImagePopup (onfolderChoose)=openFolderOption($event)>
    //                 <ul class="left-sec">
    //                     <li [class.active]="myString == 'Products'"><span (click)="showlist($event)">Products</span></li>
    //                     <li [class.active]="myString == 'Shapes' "><span (click)="showlist($event)">Shapes</span></li>
    //                     <li [class.active]="myString == 'Smilies' "><span (click)="showlist($event)">Smilies</span></li>
    //                 </ul>
    //                 <div class="right-sec">
    //                        <ul class="shapes"><li data-parent="shapes" class="active"><img src="../app/assets/imageLibrary/shapes/rect.png" /></ul>
    //                 </div>
    //             </section-->



    // `,
    templateUrl: 'app/src/views/editor/middlePanel/designContainer.html'

})

export class MiddlePanelComponent {
    helpImagePopupStatus: any = false;
    rightSecLi: any;
    folderpath: '';
    myString: '';
    AVATAR_PATH: '../app/assets/imageLibrary';

    windowScrollTopY: any = 0;
    windowScrollTopX: any = 0;
    localObjArray: any;
    rotate: any;

    modalImgSrc: any;
    count: any = 0;
    curDown: any = false;
    actionType: any = "";
    private color: string = "#000";

    designcontainerRef: any;
    moduleRef: any;
    currentObjRef: any;

    inputScaleValue: any;
    minScaleValue: any = 1;
    maxScaleValue: any = 2;
    defaultfontSizeSlidervalue: any = this.inputScaleValue;
    @ViewChild('imageModuleComponent') public imageModule: any;
    @ViewChild('handler') public textHandler: any;
    @ViewChild('handlerWrapper') public handlerWrapper: any;
    @ViewChild('alignmentPanel') public alignmentPanel: any;
    @ViewChild('designTooSec') public designTooSec: any;
    @ViewChildren('xyz') elements: any;
    @ViewChild('pickerBgBox') public pickerBgBox: any;


    onScaleChanged(event: any) {
        console.log(this._textService.designcontainerRef)
        this._textService.designcontainerRef.nativeElement.style['transform'] = 'scale(' + event.value + ')'
    }

    openAlignmentPanel(type: any, event: any) {
        event.stopPropagation();
        if (type === 'open') {
            this.alignmentPanel.nativeElement.style.display = "block";
        }
        else {
            this.alignmentPanel.nativeElement.style.display = "none";
        }
    }
    sendBack() {
        let $currentObj = this.currentObjRef;
        let $prevID = $currentObj.previousElementSibling;
        let $currentObjId = $currentObj.id;
        let $container = this.designTooSec.nativeElement.children[1];
        let $firstChildId = $container.firstElementChild.getAttribute('id')
        if ($firstChildId != $currentObjId) {
            $currentObj.remove();
            $container.insertBefore($currentObj, $prevID)
        }
    }
    bringFront() {
        let $currentObj = this.currentObjRef;
        let $currentObjId = $currentObj.id;
        let $nextID = $currentObj.nextElementSibling;
        let $container = this.designTooSec.nativeElement.children[1];
        let $lastChildId = $container.lastElementChild.getAttribute('id')

        if ($lastChildId != $currentObjId) {
            $container.insertBefore($nextID, $currentObj)
        }
    }
    sendforward() {
        let $currentObj = this.currentObjRef;
        let $currentObjId = $currentObj.id;

        let $container = this.designTooSec.nativeElement.children[1];
        let $firstChildId = $container.firstElementChild.getAttribute('id')
        let $prevID = $container.firstElementChild;
        console.log("sendforward" + $prevID)

        if ($firstChildId != $currentObjId) {
            $container.insertBefore($currentObj, $prevID)
        }
    }
    bringForward() {
        let $currentObj = this.currentObjRef;
        let $currentObjId = $currentObj.id;
        console.log(this.designTooSec)
        let $container = this.designTooSec.nativeElement.children[1];
        let $lastChildId = $container.lastElementChild.getAttribute('id')

        if ($lastChildId != $currentObjId) {
            $container.insertAdjacentHTML('beforeend', '<div id="two">two</div>');
            let $prevID = $container.lastElementChild;
            console.log("bringForward" + $prevID)

            $container.insertBefore($currentObj, $prevID)
            $prevID.remove();
        }
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
        this.handlerWrapper.nativeElement.style.display = 'none';
    }
    closeTextPicker(event: any) {
        if (this.currentObjRef != undefined) this.currentObjRef.style.color = event
    }
    textNodeEvent(event: any) {
        this.commmonTextImageEvent(event)
        this.currentObjRef.className = "textNative";
        this._textService.setAlignmentValue(parseInt(this.currentObjRef.style.fontSize), 'font-size');
        var title = event.target.dataset.title;
        title == 'Text' && (this.moduleRef.nativeElement.children[0].style['transform'] = 'translate(-209px,0px)');
    }
    imgNodeEvent(event: any) {
        this.commmonTextImageEvent(event)
        var title = event.target.dataset.title;
        title == 'Image' && (this.moduleRef.nativeElement.children[0].style['transform'] = 'translate(-209px,0px)');
        title == 'Shape' && (this.moduleRef.nativeElement.children[0].style['transform'] = 'translate(-418px,0px)');
    }
    commmonTextImageEvent(event:any) {
        let helperParent = this.handlerWrapper.nativeElement;
        let helper = this.handlerWrapper.nativeElement;
        let helperColor = this.handlerWrapper.nativeElement.children[1];

        helperColor.style.display = "block";
        helperParent.style.display = 'block';

        helperParent.style.width = event.target.offsetWidth + 10 + 'px';
        helperParent.style.height = event.target.offsetHeight + 10 + 'px';
        helperParent.style.left = event.target.offsetLeft - 5 + 'px';
        helperParent.style.top = event.target.offsetTop - 5 + 'px';
        helper.children[0].style.left = event.target.offsetLeft - 5 + 'px';
        helper.children[0].style.top = event.target.offsetTop - 5 + 'px';

        let objArray = this._textService.objArray;
        for (let i = 0; i < this.elements._results.length; i++) {
            if (event.target.id === this.elements._results[i].nativeElement.id) {
                this.currentObjRef = this.elements._results[i];
            }
        }
        this._textService.currentObjController('set', this.currentObjRef, this.handlerWrapper);
        this.currentObjRef.style.left = event.target.offsetLeft + 'px';
        this.currentObjRef.style.top = event.target.offsetTop + 'px';
        this.currentObjRef.style.width = this._textService.pixelToPercentage((event.target.offsetWidth), this.designTooSec.nativeElement.style["width"])
    }
    getPos(event: any) {
        let textHandler = this.handlerWrapper.nativeElement.style.display;
        if (textHandler == 'block') {
            this.currentObjRef.style.left = event.left + 'px';
            this.currentObjRef.style.top = event.top + 'px';
            this.handlerWrapper.nativeElement.style.left = event.left - 5 + 'px';
            this.handlerWrapper.nativeElement.style.top = event.top - 5 + 'px';
        }
    }
    onhandlerClick(event: any) {
        // let textHandler = this.handlerWrapper.nativeElement.style.display;
        // // this.count++;
        // console.log(this.currentObjRef.offsetLeft,event)
        // if (textHandler == 'block') {
        //     this.currentObjRef.style.left = this.currentObjRef.offsetLeft + 'px';
        //     this.currentObjRef.style.top = this.currentObjRef.offsetTop + 'px';
        // }

    }
    onhandlerdbClick(event: any) {
        this.handlerWrapper.nativeElement.style.display = 'none';
        this._textService.currentObjController('set', '', '');
    }
    createDublicate() {
        let objArray = this._textService.objArray;
        let currentObjElememtID = this.currentObjRef.id;
        let a = new Date();
        let randomNumber = a.getTime();
        let $container = this.designTooSec.nativeElement.children[1];
        for (let j = 0; j < objArray.length; j++) {
            //console.log(j, objArray[j].id, currentObjElememtID)
            if (objArray[j].type == 'text' && objArray[j].id == currentObjElememtID) {
                this._textService.setObjArray({
                    'id': randomNumber,
                    'oriWidth': objArray[j].oriWidth,
                    'oriHeight': objArray[j].oriHeight,
                    'ratio': objArray[j].ratio,
                    'width': objArray[j].width,
                    'height': objArray[j].height,
                    'value': objArray[j].value,
                    'type': 'text',
                    'rotate': objArray[j].rotate
                });
                this.rotate = objArray[j].rotate

            }
            if (objArray[j].type == 'image' && objArray[j].id == currentObjElememtID) {
                this._textService.setObjArray({
                    'id': randomNumber,
                    'oriWidth': objArray[j].oriWidth,
                    'oriHeight': objArray[j].oriHeight,
                    'ratio': objArray[j].ratio,
                    'width': objArray[j].width,
                    'height': objArray[j].height,
                    'value': objArray[j].value,
                    'type': 'image',
                    'rotate': objArray[j].rotate
                });
                this.rotate = objArray[j].rotate

            }

        }
        setTimeout(function () {
            if (this.currentObjRef.dataset.type == 'text') {
                $container.lastElementChild.style['color'] = this.currentObjRef.style['color']
                $container.lastElementChild.style['background-color'] = this.currentObjRef.style['background-color']
                $container.lastElementChild.style['line-height'] = this.currentObjRef.style['line-height']
                $container.lastElementChild.style['text-align'] = this.currentObjRef.style['text-align']
                $container.lastElementChild.style['text-transform'] = this.currentObjRef.style['text-transform']
                $container.lastElementChild.style['font-family'] = this.currentObjRef.style['font-family'];
                $container.lastElementChild.style['font-size'] = this.currentObjRef.style['font-size']
                $container.lastElementChild.style['font-weight'] = this.currentObjRef.style['font-weight']

            }
            $container.lastElementChild.style['height'] = this.currentObjRef.style.height
            $container.lastElementChild.style['width'] = this.currentObjRef.style.width;
            $container.lastElementChild.style['transform'] = 'rotate(' + this.rotate + 'deg)'

        }.bind(this), 200)
    }
    updateScroll(event: any) {
        this.windowScrollTopY = event.path[1].scrollY
        this.windowScrollTopX = event.path[1].scrollX
    }

    updateMove(event: any) {
        if (this.curDown === true) {
            let marL = this.designTooSec.nativeElement.offsetParent.parentElement.offsetLeft + this.designTooSec.nativeElement.offsetLeft;
            let eventX = event.x < event.offsetX ? event.offsetX : event.x
            marL = eventX + this.windowScrollTopX - marL - parseInt(this.currentObjRef.style.left) - 15;
            let marT = this.designTooSec.nativeElement.offsetParent.offsetTop + this.designTooSec.nativeElement.offsetTop;
            marT = event.y + this.windowScrollTopY - marT - parseInt(this.currentObjRef.style.top) - 15;
            if (this.actionType === "width") {
                //console.log("width", event.offsetX, this.designTooSec.nativeElement.offsetParent.parentElement.offsetLeft, this.designTooSec.nativeElement.offsetLeft, this.currentObjRef.style.top, marL)
                this.handlerWrapper.nativeElement.style.width = marL + 10 + 'px';
                this.currentObjRef.style.width = this._textService.pixelToPercentage(marL, this.designTooSec.nativeElement.style["width"])
            }
            if (this.actionType === "height") {
                //  console.log("height", event.offsetY)
                if (this.currentObjRef.dataset.type === "text") {
                    this.currentObjRef.style['line-height'] = marT + 'px';
                }
                else {
                    this.currentObjRef.style.height = marT + 'px';
                }
                this.handlerWrapper.nativeElement.style.height = marT + 10 + 'px';

            }
            if (this.actionType === "resize") {
                this.handlerWrapper.nativeElement.style.width = marL + 10 + 'px';
                this.currentObjRef.style.width = this._textService.pixelToPercentage(marL, this.designTooSec.nativeElement.style["width"])

                if (this.currentObjRef.dataset.type === "text") {
                    this.currentObjRef.style['lineHeight'] = marT + 'px';
                }
                else {
                    this.currentObjRef.style.height = marT + 'px';
                }
                this.handlerWrapper.nativeElement.style.height = marT + 10 + 'px';

            }
            if (this.actionType === "rotate") {
                this.currentObjRef.style['transform'] = 'rotate(' + event.offsetX + 'deg)'
                this.rotate = event.offsetX;
            }
            let ObjArray = this._textService.objArray;
            let currentObjElememtID = this.currentObjRef.id;
            for (let j = 0; j < ObjArray.length; j++) {
                if (ObjArray[j].id == currentObjElememtID) {
                    ObjArray[j].width = this.currentObjRef.style['width']
                    ObjArray[j].height = this.currentObjRef.style['height']
                    ObjArray[j].rotate = this.rotate
                }
            }

        }
    }
    updateDown(event: any) {
        this.curDown = true;
        this.actionType = event.target.dataset.type;
        //console.log("down", event.offsetX, event.offsetY)

    }
    updateUp(event: any) {
        this.curDown = false;
    }


    openFolderOption(event: any) {
        this.helpImagePopupStatus = event
    }
    showlist(event: any) {
        this.myString = event.target.innerHTML;
    }

    // getFileNames(dir) {
    //     let results = [];
    //     _fsService.readdir(dir).forEach(function (file) {
    //         file = dir + '/' + file;
    //         results.push(file);
    //     });

    //     return results;
    // }
    constructor(private cpService: ColorPickerService, private _textService: TextService) { }
    ngOnInit() {
        console.log("middle-init");
       // console.log(this.getFileNames(this.AVATAR_PATH));
        this._textService.getObjArray().subscribe(
            data => {
                this.localObjArray = data;
            });
        this._textService.currentObjController('getCurrentObj', '', '').subscribe(
            data => {
                console.log(this.currentObjRef)
                if (this.currentObjRef == undefined) {
                    this.currentObjRef = undefined
                }
                else {
                    this.currentObjRef = this.currentObjRef.nativeElement
                }
            });
        this._textService.designContainerController(this.designTooSec);
        // console.log(this._textService.moduleRef)
        this.moduleRef = this._textService.moduleRef.nativeElement;

        //,,  console.log(this._fsService)

    }


}