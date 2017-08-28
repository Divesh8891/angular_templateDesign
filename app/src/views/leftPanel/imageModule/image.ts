import { Component } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: '[imageModule]',
    template: ` 
                        <h5 class="heading">{{imagePanelTitle}}</h5>
                        <div class="seperator"></div>
                        <image-upload class={{customClass}} [max]="100" [buttonCaption]="'Select Images'" [extensions]="['jpeg','jpg','png','gif']" (onFileUploadFinish)="onUploadFinished($event)"></image-upload>
    `
})

export class imageModuleComponent {
    imagePanelTitle = "Image";
    customClass = "image-upload col-xs-12";
    userArray: any;
    randomNumber: any;
    onRemoved(event: any) {
        console.log(event)
    }
    onUploadFinished(data: any) {
        let me = this;
        this._textService.setSliderValue(data.imageDimension.width, 'minV');
        this._textService.setSliderValue(parseInt(this._textService.designcontainerRef.nativeElement.style.width), 'maxV');
        let a = new Date();
        this.randomNumber = a.getTime();
        let ratio: any = (parseInt(data.imageDimension.width) / parseInt(data.imageDimension.height)).toFixed(1);
        this._textService.setTextValue({ 'text': '', 'randomNumber': this.randomNumber, 'imgSrc': data.fileHolder.src });
        this._textService.updateObjArray({ 'id': this.randomNumber, 'oriWidth': data.imageDimension.width, 'oriHeight': data.imageDimension.height, 'width': data.imageDimension.width, 'height': data.imageDimension.height, 'ratio': ratio })
        setTimeout(function () {
            // console.log(me._textService.designcontainerRef.nativeElement.children[0].lastElementChild)
            let userArray = me._textService.objArray;
            let currentImage = me._textService.designcontainerRef.nativeElement.children[0].lastElementChild;
            let currentW = me._textService.designcontainerRef.nativeElement.style.width;
            let currentH = me._textService.designcontainerRef.nativeElement.style.height;
            me._textService.setImageDimension(currentImage, '', '', userArray[userArray.length - 1]);
        }, 100)
    }
    handleImageLoad(event: any) {
        console.log(event)
    }

    // setAspectRaion() {
    //     console.log("setAspectRatio")
    //     let $currentObj = this._textService.currentObj.nativeElement;
    //     let objArray = this._textService.objArray;
    //     let currentObjElememtID = parseInt(this._textService.currentObj.nativeElement.id);
    //     for (let j = 0; j < objArray.length; j++) {
    //         console.log()
    //         if (objArray[j].id == currentObjElememtID) {
    //             $currentObj.style["height"] = objArray[j].width * objArray[j].ratio + 'px';
    //             this._textService.handlerRef.nativeElement.style.height = (objArray[j].width * objArray[j].ratio) + 10 + 'px';
    //             objArray[j].height = objArray[j].width * objArray[j].ratio;
    //         }
    //     }

    // }

    constructor(private _textService: TextService) { }

}
