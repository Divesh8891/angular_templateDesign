import { Component, ViewChild, ViewChildren } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: '[designContainer]',
    template: ` 
                    <div class="desgin-tool-sec" style="width: 740px; height: 740px;" #designTooSec>
                        <section class="desgin-inner" data-bg="blank">
                        <ng-container *ngFor="let text of textAreaVal">
                          <p #xyz *ngIf="text.text!=''" class="textNative" data-type="text" id="{{text.randomNumber}}" (click)="textNodeEvent($event,text)" style="font-size: 18px;" >{{text.text}}</p>
                         <img #xyz *ngIf="text.src!=''" class="imgNative"  data-type="image"   id="{{text.randomNumber}}" (click)="imgNodeEvent($event,img)" src={{text.src}}/>
                        </ng-container>
                        </section>
                        <div class="handler cube" #handler  [ng2-draggable]="true" (handlerClick)="onhandlerClick($event)" (postions)=getPos($event)></div>
                     </div>
             
                
              
                
    `
})

export class designContainer {
    textAreaVal: any;
    public currentObj: any;
    modalImgSrc: any;
    count: any = 0;
    @ViewChild('imageModuleComponent') public imageModule: any;
    @ViewChild('handler') public textHandler: any;
    @ViewChild('designTooSec') public designTooSec: any;
    @ViewChildren('xyz') elements: any;



    ngOnInit() {
        this._textService.getTextValue().subscribe(
            data => {
                this.textAreaVal = data;
            });
        this._textService.setDesigncontainerRef(this.designTooSec);


    }

    textNodeEvent(event: any) {
        let currentImagewidth = 0;

        this.textHandler.nativeElement.style.display = 'block';
        let objArray = this._textService.objArray;

        for (let i = 0; i < this.elements._results.length; i++) {
            console.log(event.target.id, this.elements._results[i].nativeElement.id)
            if (event.target.id === this.elements._results[i].nativeElement.id) {
                this.currentObj = this.elements._results[i];
                currentImagewidth = objArray[i].width;

            }
        }
        this.textHandler.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.textHandler.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.textHandler.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.textHandler.nativeElement.style.top = event.target.offsetTop - 5 + 'px';
        this._textService.setCurrentObj(this.currentObj, this.textHandler);
        this.currentObj.nativeElement.style.width = this._textService.pixelToPercentage((event.target.offsetWidth), this.designTooSec.nativeElement.style["width"])
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
                this.currentObj = this.elements._results[i];
                currentImagewidth = objArray[i].width;
            }
        }
        this.textHandler.nativeElement.style.width = event.target.offsetWidth + 10 + 'px';
        this.textHandler.nativeElement.style.height = event.target.offsetHeight + 10 + 'px';
        this.textHandler.nativeElement.style.left = event.target.offsetLeft - 5 + 'px';
        this.textHandler.nativeElement.style.top = event.target.offsetTop - 5 + 'px';

        this._textService.setCurrentObj(this.currentObj, this.textHandler);

        this.currentObj.nativeElement.style.width = this._textService.pixelToPercentage((event.target.offsetWidth), this.designTooSec.nativeElement.style["width"])
        this._textService.setSliderValue(currentImagewidth, 'minV');
        this._textService.setAlignmentValue(event.target.offsetLeft, 'left');
        this._textService.setAlignmentValue(event.target.offsetTop, 'top');


        this._textService.setSliderValue(parseInt(this.designTooSec.nativeElement.style["width"]), 'maxV');
        if (parseInt(this.designTooSec.nativeElement.style["width"]) > parseInt(this.designTooSec.nativeElement.style["height"])) {
            this._textService.setSliderValue(parseInt(this.designTooSec.nativeElement.style["height"]), 'maxV');
        }
    }
    getPos(event: any) {
        let handlerRef = this.textHandler.nativeElement.style.display;
        if (handlerRef == 'block') {
            this.currentObj.nativeElement.style.left = this._textService.pixelToPercentage((event.left + 5), this.designTooSec.nativeElement.style["width"]);
            this.currentObj.nativeElement.style.top = this._textService.pixelToPercentage((event.top + 5), this.designTooSec.nativeElement.style["height"]);
            this._textService.setAlignmentValue(event.left, 'left');
            this._textService.setAlignmentValue(event.top, 'top');
        }
    }
    onhandlerClick(event: any) {
        let handlerRef = this.textHandler.nativeElement.style.display;
        this.count++;

        if (handlerRef == 'block' && this.count == 2) {
            this.textHandler.nativeElement.style.display = 'none';
            this.count = 0
        }
    }
    onResizeEnd(event: any): void {
        console.log('Element was resized', event);
    }
    setImageDimension = function () {
        this._textService.setImageDimension()
        var maxWidth = parseInt(this.designTooSec.nativeElement.style["width"]); // Max width for the image
        var maxHeight = parseInt(this.designTooSec.nativeElement.style["height"]);    // Max height for the image

        // console.log(maxWidth,maxHeight)
        console.log(this.currentObj)
        var ratio = 0;  // Used for aspect ratio
        var width = this.currentObj.nativeElement.offsetWidth;    // Current image width
        var height = this.currentObj.nativeElement.offsetHeight;  // Current image height
        // console.log((maxWidth), maxHeight, width, height);
        if (width > maxWidth) {
            ratio = maxWidth / width;   // get ratio for scaling image
            this.currentObj.nativeElement.style["width"] = this._textService.pixelToPercentage(maxWidth, this.designTooSec.nativeElement.style["width"]);
            this.currentObj.nativeElement.style["height"] = this._textService.pixelToPercentage((height * ratio), this.designTooSec.nativeElement.style["height"]);
            height = height * ratio;    // Reset height to match scaled image
            width = width * ratio;    // Reset width to match scaled image
        }

        // Check if current height is larger than max
        if (height > maxHeight) {
            ratio = maxHeight / height; // get ratio for scaling image
            this.currentObj.nativeElement.style["width"] = this._textService.pixelToPercentage((width * ratio), this.designTooSec.nativeElement.style["width"]);
            this.currentObj.nativeElement.style["height"] = this._textService.pixelToPercentage(maxHeight, this.designTooSec.nativeElement.style["height"]);
            width = width * ratio;    // Reset width to match scaled image
            height = height * ratio;    // Reset height to match scaled image
        }
        this.textHandler.nativeElement.style.width = parseInt(this.currentObj.nativeElement.offsetWidth) + 10 + 'px';
        this.textHandler.nativeElement.style.height = parseInt(this.currentObj.nativeElement.offsetHeight) + 10 + 'px';

    };
    constructor(private _textService: TextService) { }
}