import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TextService {

    public dataStringSource = new Subject();
    public sliderMinValue = new Subject();
    public sliderMaxValue = new Subject();
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
        this.users.push(new User(data.text, data.randomNumber, data.imgSrc, data.width, data.height, data.ratio));
        this.dataStringSource.next(me.users);
    }
    getTextValue() {
        return this.dataStringSource.asObservable();
    }
    setSliderValue(data: any, type: any) {
        if (type === 'minV') {
            this.sliderMinValue.next(data);
        }
        if (type === 'maxV') {
            this.sliderMaxValue.next(data);
        }

    }
    getSliderMinValue() {
        return this.sliderMinValue.asObservable();
    }
    getSliderMaxValue() {
        return this.sliderMaxValue.asObservable();
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
    setAspectRaion(currentObj: any, containerW: any, containerH: any) {
        console.log("setAspectRatio")
        // let $container = this.designcontainerRef.nativeElement;
        // let $currentObj = this.currentObj.nativeElement;
        let $currentObj = currentObj;

        let $containerW = parseInt(containerW);
        let $containerH = parseInt(containerH);
        let $currentObjRatio = parseFloat($currentObj.dataset['ratio']);
        // console.log($containerW, $containerH, $currentObjRatio)
        if ($containerW > $containerH) {
            $currentObj.style["width"] = this.pixelToPercentage($containerH, $containerW);
            $currentObj.dataset["width"] = $containerH;

        }
        let objW: any = ((parseFloat($currentObj.style.width) * $containerW) / 100).toFixed(1);
        $currentObj.style["height"] = objW / $currentObjRatio + 'px';
        $currentObj.dataset["height"] = Math.round(objW / $currentObjRatio);
        if (this.handlerRef != undefined) {
            this.handlerRef.nativeElement.style.width = parseInt($currentObj.dataset["width"]) + 10 + 'px';
            this.handlerRef.nativeElement.style.height = parseInt($currentObj.dataset["height"]) + 10 + 'px';
        }
    }
    pixelToPercentage(objVal: any, containerVal: any) {
        return (((parseInt(objVal) / parseInt(containerVal)) * 100).toFixed(1)) + '%';
    }



}
export class User {
    constructor(
        public text: any,
        public randomNumber: number,
        public src: any,
        public width: any,
        public height: any,
        public ratio: any,


    ) {
    }
}