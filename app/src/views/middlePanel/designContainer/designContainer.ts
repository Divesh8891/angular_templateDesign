import { Component, ViewChild, ViewChildren } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: '[designContainer]',
    template: ` 
                    <div class="desgin-tool-sec" style="width: 740px; height: 740px;" #designTooSec>
                        <section class="desgin-inner" data-bg="">
                        <ng-container *ngFor="let obj of localObjArray">
                          <p #xyz *ngIf="obj.type=='text'" class="textNative" data-type="text" id="{{obj.id}}" (click)="textNodeEvent($event,text)" style="font-size: 18px;" >{{obj.value}}</p>
                         <img #xyz *ngIf="obj.type=='image'" class="imgNative"  data-type="image"   id="{{obj.id}}" (click)="imgNodeEvent($event,img)" src={{obj.value}}/>
                        </ng-container>
                        </section>
                        <div class="handler cube" #handler  [ng2-draggable]="true" (handlerClick)="onhandlerClick($event)" (postions)=getPos($event)></div>
                     </div>
             
                
              
                
    `
})

export class designContainer {
    localObjArray: any;

    modalImgSrc: any;
    count: any = 0;


    designcontainerRef: any;
    currentObjRef: any;
    @ViewChild('imageModuleComponent') public imageModule: any;
    @ViewChild('handler') public textHandler: any;
    @ViewChild('designTooSec') public designTooSec: any;
    @ViewChildren('xyz') elements: any;



    ngOnInit() {
        this._textService.getObjArray().subscribe(
            data => {
                this.localObjArray = data;
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
        this._textService.designContainerController('set', this.designTooSec);
    }

    textNodeEvent(event: any) {
        let currentImagewidth = 0;

        this.textHandler.nativeElement.style.display = 'block';
        let objArray = this._textService.objArray;

        for (let i = 0; i < this.elements._results.length; i++) {
            if (event.target.id === this.elements._results[i].nativeElement.id) {
                this.currentObjRef = this.elements._results[i];
                currentImagewidth = objArray[i].width;

            }
        }
        this.textHandler.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.textHandler.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.textHandler.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.textHandler.nativeElement.style.top = event.target.offsetTop - 5 + 'px';
        this._textService.currentObjController('set', this.currentObjRef, this.textHandler);
        this.currentObjRef.style.width = this._textService.pixelToPercentage((event.target.offsetWidth), this.designTooSec.nativeElement.style["width"])
        this._textService.setSliderValue(currentImagewidth, 'minV');
        this._textService.setAlignmentValue(event.target.offsetLeft, 'left');
        this._textService.setAlignmentValue(event.target.offsetTop, 'top');



    }
    imgNodeEvent(event: any) {
        this.textHandler.nativeElement.style.display = 'block';
        let objArray = this._textService.objArray;
        let currentImagewidth = 0;
        for (let i = 0; i < this.elements._results.length; i++) {
            if (event.target.id === this.elements._results[i].nativeElement.id) {
                this.currentObjRef = this.elements._results[i];
                currentImagewidth = objArray[i].width;
            }
        }
        this.textHandler.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.textHandler.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.textHandler.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.textHandler.nativeElement.style.top = event.target.offsetTop - 5 + 'px';

        this._textService.currentObjController('set', this.currentObjRef, this.textHandler);

        this.currentObjRef.style.width = this._textService.pixelToPercentage((event.target.offsetWidth), this.designTooSec.nativeElement.style["width"])
        this._textService.setSliderValue(currentImagewidth, 'minV');
        this._textService.setSliderValue(parseInt(this.designTooSec.nativeElement.style["width"]), 'maxV');
        // this._textService.setAlignmentValue(event.target.offsetLeft, 'left');
        // this._textService.setAlignmentValue(event.target.offsetTop, 'top');
        if (parseInt(this.designTooSec.nativeElement.style["width"]) > parseInt(this.designTooSec.nativeElement.style["height"])) {
            this._textService.setSliderValue(parseInt(this.designTooSec.nativeElement.style["height"]), 'maxV');
        }
    }
    getPos(event: any) {
        let textHandler = this.textHandler.nativeElement.style.display;
        let me = this;
        if (textHandler == 'block') {
            me.currentObjRef.style.left = me._textService.pixelToPercentage((event.left + 5), me.designTooSec.nativeElement.style["width"]);
            me.currentObjRef.style.top = me._textService.pixelToPercentage((event.top + 5), me.designTooSec.nativeElement.style["height"]);
            me._textService.setAlignmentValue(event.left, 'left');
            me._textService.setAlignmentValue(event.top, 'top');
        }
    }
    onhandlerClick(event: any) {
        let textHandler = this.textHandler.nativeElement.style.display;
        this.count++;

        if (textHandler == 'block' && this.count == 2) {
            this.textHandler.nativeElement.style.display = 'none';
            this.count = 0;
            this._textService.currentObjController('set', undefined, this.textHandler);
        }
    
    }

    setImageDimension = function () {
        this._textService.setImageDimension()
        var maxWidth = parseInt(this.designTooSec.nativeElement.style["width"]); // Max width for the image
        var maxHeight = parseInt(this.designTooSec.nativeElement.style["height"]);    // Max height for the image

        // console.log(maxWidth,maxHeight)
        // console.log(this.currentObj)
        var ratio = 0;  // Used for aspect ratio
        var width = this.currentObjRef.offsetWidth;    // Current image width
        var height = this.currentObjRef.offsetHeight;  // Current image height
        // console.log((maxWidth), maxHeight, width, height);
        if (width > maxWidth) {
            ratio = maxWidth / width;   // get ratio for scaling image
            this.currentObjRef.style["width"] = this._textService.pixelToPercentage(maxWidth, this.designTooSec.nativeElement.style["width"]);
            this.currentObjRef.style["height"] = this._textService.pixelToPercentage((height * ratio), this.designTooSec.nativeElement.style["height"]);
            height = height * ratio;    // Reset height to match scaled image
            width = width * ratio;    // Reset width to match scaled image
        }

        // Check if current height is larger than max
        if (height > maxHeight) {
            ratio = maxHeight / height; // get ratio for scaling image
            this.currentObjRef.style["width"] = this._textService.pixelToPercentage((width * ratio), this.designTooSec.nativeElement.style["width"]);
            this.currentObjRef.style["height"] = this._textService.pixelToPercentage(maxHeight, this.designTooSec.nativeElement.style["height"]);
            width = width * ratio;    // Reset width to match scaled image
            height = height * ratio;    // Reset height to match scaled image
        }
        this.textHandler.nativeElement.style.width = parseInt(this.currentObjRef.offsetWidth) + 10 + 'px';
        this.textHandler.nativeElement.style.height = parseInt(this.currentObjRef.offsetHeight) + 10 + 'px';

    };
    constructor(private _textService: TextService) { }

}
