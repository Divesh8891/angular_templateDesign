import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TextService {
    public dataStringSource = new Subject();
    currentObj: any;
    nodeArray: any;
    colorBoxRef: any;
    handlerRef: any;
    designcontainerRef: any;
    canvasElem: any;
    canvasImageSrc: any;

     users: User[] = [];
    setTextValue(data: any) {
        let me = this;
        this.users.push(new User(data.text, data.randomNumber, data.imgSrc));
        console.log(this.users)
        this.dataStringSource.next(me.users);
    }
    getTextValue() {
        return this.dataStringSource.asObservable();
    }
    setCurrentObj(currentObjData: any, handlerData: any) {
        this.currentObj = currentObjData;
        this.handlerRef = handlerData;
    }
    setColorBoxRef(data: any) {
        this.colorBoxRef = data;
    }
    setDesigncontainerRef(data: any) {
        this.designcontainerRef = data
    }
    setCanvasElem(data: any) {
        this.canvasElem = data;
    }
    setAspectRaion() {
        let $container = this.designcontainerRef.nativeElement;
        let $containerW = parseInt($container.style["width"]);
        let $containerH = parseInt($container.style["height"]);

        let $currentObj = this.currentObj;
        let $currentObjRatio = parseFloat($currentObj.nativeElement.dataset['ratio']);
        console.log($containerW, $containerH, $currentObjRatio)
        if ($containerW > $containerH) {
            $currentObj.nativeElement.style["width"] = $containerH + 'px'
        }
        console.log($currentObj.nativeElement.style["width"], $currentObjRatio)
        $currentObj.nativeElement.style["height"] = parseInt($currentObj.nativeElement.style["width"]) / $currentObjRatio + 'px';
        this.handlerRef.nativeElement.style.width = parseInt($currentObj.nativeElement.style["width"]) + 10 + 'px';
        this.handlerRef.nativeElement.style.height = parseInt($currentObj.nativeElement.style["height"]) + 10 + 'px';

    }

}
export class User {
    constructor(
        public text: any,
        public randomNumber: number,
        public src: any
    ) {
    }
}