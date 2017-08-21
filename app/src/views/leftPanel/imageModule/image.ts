import { Component } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: 'image-module',
    template: ` 
                  <section class="ImageModule col-xs-12 p-0 module">
                        <h5 class="option-heading col-xs-12 m-0 p-0">{{imagePanelTitle}}</h5>
                        <div class="seperator"></div>
                        <image-upload class={{customClass}} [max]="100" [buttonCaption]="'Select Images'" [extensions]="['jpg','png','gif']" (onFileUploadFinish)="onUploadFinished($event)"></image-upload>
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
    onUploadFinished(event: any) {
        console.log(event)
        let a = new Date();
        this.randomNumber = a.getTime();
        this._textService.setTextValue({'text':'','randomNumber':this.randomNumber,'imgSrc':event.src});

    }
    setAspectRaion() {
        this._textService.setAspectRaion();
    }

    constructor(private _textService: TextService) { }

}
