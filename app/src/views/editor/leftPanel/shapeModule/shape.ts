import { Component, Output, EventEmitter, Input, ViewChildren, ViewChild } from '@angular/core';
import { TextService } from '../../../../service/text.service';

@Component({
    selector: '[shapeModule]',
    template: ` <div>
                   <img src="app/assets/images/Shapes/circle.png" (click)="loadOnProduct($event)"/> 
                </div>
                <div>
                    <img src="app/assets/images/Shapes/circle.png" /> 
                </div>
                      `
})

export class shapeModuleComponent {
    randomNumber: any;
    designcontainerRef: any;
    
    
   loadOnProduct(event:any){
    let a = new Date();
    this.randomNumber = a.getTime();
    let ratio: any = (parseInt(event.target.width) / parseInt(event.target.height)).toFixed(1);
    this._textService.setObjArray({
        'id': this.randomNumber,
        'oriWidth': event.target.naturalWidth,
        'oriHeight': event.target.naturalHeight,
        'ratio': ratio,
        'width': event.target.naturalWidth,
        'height': event.target.naturalHeight,
        'value': event.target.attributes[0].value,
        'type': 'shape',
        'rotate':0
        
    });

    setTimeout(function () {
        let userArray = this._textService.objArray;
        let currentImage = this.designcontainerRef.children[1].lastElementChild;
        console.log(currentImage)
        let currentW = this.designcontainerRef.style.width;
        let currentH = this.designcontainerRef.style.height;
        this._textService.setImageDimension(currentImage, '', '', userArray[userArray.length - 1], this.designcontainerRef);
    }.bind(this), 500)

   }
   constructor(private _textService: TextService) { }
   ngOnInit() {
    console.log("shape-init")
    this.designcontainerRef = this._textService.designcontainerRef.nativeElement;
}
}
