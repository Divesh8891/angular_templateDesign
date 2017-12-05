import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TextService {
    designcontainerRef: any = "";
    moduleRef: any = "";
    public objArrSource = new Subject();
    // public objArraySource = new Subject();

    public sliderMinValue = new Subject();
    public sliderMaxValue = new Subject();

    public leftAlignmentValue = new Subject();
    public topAlignmentValue = new Subject();
    public fontSizeValue = new Subject();
    public lineHeightValue = new Subject();


    public temBgValue = new Subject();
    public textBgValue = new Subject();

    public currentObj = new Subject();
    public handlerRef = new Subject();
    public handlerWrapper = new Subject();


    objArray: objectArray[] = [];
    // 'id': this.randomNumber, 'oriWidth': textWidth, 'oriHeight': textHeight, 'ratio': ratio, 'width': textWidth, 
    //'height': textHeight, 'value': this.textAreaValue/imgSrc, 'type': 'text'
    setObjArray(data: any) {
        let me = this;
        this.objArray.push(new objectArray(data.id, data.oriWidth, data.oriHeight, data.ratio, data.width, data.height, data.value, data.type,data.rotate));
        this.objArrSource.next(me.objArray);
    }
    getObjArray() {
        return this.objArrSource.asObservable();
    }

    hexToRgbA(hex: any, opacity: any) {
        hex = hex.replace('#', '');
        if (hex.length == 3) {
            hex += hex;
        }
        let r = parseInt(hex.substring(0, hex.length / 3), 16);
        let g = parseInt(hex.substring(hex.length / 3, 2 * hex.length / 3), 16);
        let b = parseInt(hex.substring(2 * hex.length / 3, 3 * hex.length / 3), 16);

        let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
        return result;
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
        if (type === 'font-size') {
            this.fontSizeValue.next(data);
        }
        if (type === 'lineH') {
            this.lineHeightValue.next(data);
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
    getFontSize() {
        return this.fontSizeValue.asObservable();
    }
    getLineH() {
        return this.lineHeightValue.asObservable();
    }
    currentObjController(type: any, currentObjData: any,handlerWrapperData: any) {
        if (type == 'set') {
            this.currentObj.next(currentObjData);
            this.handlerWrapper.next(handlerWrapperData)
            //console.log(handlerWrapperData)

        }

        if (type == 'getCurrentObj') {

            return this.currentObj.asObservable();
        }
      
        if (type == 'getHandlerParentObj') {
            return this.handlerWrapper.asObservable();
        }

    }
    designContainerController(data: any) {
        this.designcontainerRef = data
    }
    moduleContainerController(data: any) {
        this.moduleRef = data
    }


    setImageDimension = function (currentObj: any, containerW: any, containerH: any, objArray: any, pContainer: any) {
        // console.log("setdimension")
        // console.log(currentObj, containerW, containerH, objArray)
        let maxWidth = parseInt(containerW); // Max width for the image
        let maxHeight = parseInt(containerH);    // Max height for the image
        if (containerW === '') {
            console.log(this)
            maxWidth = parseInt(pContainer.style.width); // Max width for the image
        }
        if (containerH === '') {
            maxHeight = parseInt(pContainer.style.height);
        }
        let localCurrentObj = currentObj;
        // console.log(maxWidth,maxHeight)

        var ratio = 0;  // Used for aspect ratio
        var width = objArray.width;    // Current image width
        var height = objArray.height;  // Current image height
        console.log((maxWidth), maxHeight, width, height);
        if (width > maxWidth) {
            ratio = maxWidth / width;   // get ratio for scaling image
            localCurrentObj.style["width"] = this.pixelToPercentage(maxWidth-100, maxWidth);
            //localCurrentObj.style["height"] = this.pixelToPercentage((height * ratio), maxHeight);
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
export class objectArray {
    // 'id': this.randomNumber, 'oriWidth': textWidth, 'oriHeight': textHeight, 'ratio': ratio, 'width': textWidth, 
    //'height': textHeight, 'value': this.textAreaValue/imgSrc, 'type': 'text'
    constructor(
        public id: any,
        public oriWidth: number,
        public oriHeight: any,
        public ratio: any,
        public width: any,
        public height: any,
        public value: any,
        public type: any,
        public rotate: any
    ) { }


}