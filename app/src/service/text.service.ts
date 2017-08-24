import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TextService {

    public dataStringSource = new Subject();
    public objArraySource = new Subject();

    public sliderMinValue = new Subject();
    public sliderMaxValue = new Subject();

    public leftAlignmentValue = new Subject();
    public topAlignmentValue = new Subject();

    currentObj: any;
    nodeArray: any;
    colorBoxRef: any;
    handlerRef: any;
    designcontainerRef: any;
    canvasElem: any;
    canvasImageSrc: any;


    users: User[] = [];
    objArray: objArray[] = [];
    setTextValue(data: any) {
        let me = this;
        this.users.push(new User(data.text, data.randomNumber, data.imgSrc, data.width, data.height, data.ratio));
        this.dataStringSource.next(me.users);
    }
    getTextValue() {
        return this.dataStringSource.asObservable();
    }
    updateObjArray(data: any) {
        let me = this;
        this.objArray.push(new objArray(data.id, data.oriWidth, data.oriHeight, data.oriWidth, data.oriHeight, data.ratio));
        this.objArraySource.next(me.objArray);
        console.log(this.objArray)

    }
    getObjArray() {
        return this.objArraySource.asObservable();
    }
    setSliderValue(data: any, type: any) {
        if (type === 'minV') {
            this.sliderMinValue.next(data);
        }
        if (type === 'maxV') {
            this.sliderMaxValue.next(data);
        }

    }
    setAlignmentValue(data: any, type: any) {
        if (type === 'left') {
            this.leftAlignmentValue.next(data);
        }
        if (type === 'top') {
            this.topAlignmentValue.next(data);
        }

    }
    getSliderMinValue() {
        return this.sliderMinValue.asObservable();
    }
    getSliderMaxValue() {
        return this.sliderMaxValue.asObservable();
    }
    getLeftAlignment() {
        return this.leftAlignmentValue.asObservable();
    }
    getTopAlignment() {
        return this.topAlignmentValue.asObservable();
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

    setImageDimension = function (currentObj: any, containerW: any, containerH: any, objArray: any) {
        console.log("setdimension")
        // console.log(currentObj, containerW, containerH, objArray)
        let maxWidth = parseInt(containerW); // Max width for the image
        let maxHeight = parseInt(containerH);    // Max height for the image
        if (containerW === '') {
            maxWidth = parseInt(this.designcontainerRef.nativeElement.style.width); // Max width for the image
        }
        if (containerH === '') {
            maxHeight = parseInt(this.designcontainerRef.nativeElement.style.height);
        }


        let localCurrentObj = currentObj;
        // console.log(maxWidth,maxHeight)

        var ratio = 0;  // Used for aspect ratio
        var width = objArray.width;    // Current image width
        var height = objArray.height;  // Current image height
        // console.log((maxWidth), maxHeight, width, height);
        if (width > maxWidth) {
            ratio = maxWidth / width;   // get ratio for scaling image
            localCurrentObj.style["width"] = this.pixelToPercentage(maxWidth, maxWidth);
            localCurrentObj.style["height"] = this.pixelToPercentage((height * ratio), maxHeight);
            height = height * ratio;    // Reset height to match scaled image
            width = width * ratio;    // Reset width to match scaled image
        }

        // Check if current height is larger than max
        if (height > maxHeight) {
            ratio = maxHeight / height; // get ratio for scaling image
            localCurrentObj.style["width"] = this.pixelToPercentage((width * ratio), maxWidth);
            localCurrentObj.style["height"] = this.pixelToPercentage(maxHeight, maxHeight);
            width = width * ratio;    // Reset width to match scaled image
            height = height * ratio;    // Reset height to match scaled image
        }
        console.log(width, height)
        objArray.width = width;
        objArray.height = height;
        // this.textHandler.nativeElement.style.width = parseInt(localCurrentObj.offsetWidth) + 10 + 'px';
        // this.textHandler.nativeElement.style.height = parseInt(localCurrentObj.offsetHeight) + 10 + 'px';

    };
    pixelToPercentage(objVal: any, containerVal: any) {
        return (Math.round((parseInt(objVal) / parseInt(containerVal)) * 100)) + '%';
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
export class objArray {
    constructor(
        public id: any,
        public oriWidth: number,
        public oriHeight: any,
        public width: any,
        public height: any,
        public ratio: any



    ) {
    }
}