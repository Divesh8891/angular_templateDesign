import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TextService {
    public dataStringSource = new Subject<string>();
    currentObj: any;
    nodeArray: any;
    colorBoxRef: any;
    handlerRef: any;
    designcontainerRef: any;
    canvasElem: any;
    canvasImageSrc: any;
    setTextValue(data: any) {
        this.nodeArray = data;
        this.dataStringSource.next(data);
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
    

}
