import { Component } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: 'image-module',
    template: ` 
                  <section class="ImageModule col-xs-12 p-0 module">
                        <h5 class="option-heading col-xs-12 m-0 p-0">{{imagePanelTitle}}</h5>
                        <div class="seperator"></div>
                        <image-upload class={{customClass}} [max]="100" [buttonCaption]="'Select Images'" [extensions]="['jpeg','jpg','png','gif']" (onFileUploadFinish)="onUploadFinished($event)"></image-upload>
                        <linkAsButton [parentClass]="'col-xs-12'" [applyClass]="'set-aspect-ratio btn btn-lrg'" [btnText]="'Set Aspect Ratio'"  (click)=setAspectRaion($event)></linkAsButton>
                    </section>
    `
})

export class imageModuleComponent {
    imagePanelTitle = "Image";
    customClass = "custom-image col-xs-12";
    userArray: any;
    randomNumber: any;
    onRemoved(event: any) {
        console.log(event)
    }
    onUploadFinished(data: any) {
        this._textService.setSliderValue(data.imageDimension.width, 'minV');
        this._textService.setSliderValue(parseInt(this._textService.designcontainerRef.nativeElement.style.width), 'maxV');
        // this._textService.currentObj.nativeElement.dataset['ratio'] = data.imageDimension.width / data.imageDimension.height;
        let a = new Date();
        this.randomNumber = a.getTime();
        let ratio = data.imageDimension.width / data.imageDimension.height;
        this._textService.setTextValue({ 'text': '', 'randomNumber': this.randomNumber, 'imgSrc': data.fileHolder.src, 'width': data.imageDimension.width, 'height': data.imageDimension.height, 'ratio': ratio });
      
    }
    handleImageLoad(event: any) {
        console.log(event)
    }

    setAspectRaion() {
        this._textService.setAspectRaion(this._textService.currentObj.nativeElement, this._textService.designcontainerRef.nativeElement.style["width"], this._textService.designcontainerRef.nativeElement.style["height"]);
    }

    constructor(private _textService: TextService) { }

}
