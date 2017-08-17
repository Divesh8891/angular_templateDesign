import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as html2canvas from 'html2canvas';

@Injectable()
export class TextService {
    private dataStringSource = new Subject<string>();
    currentObj: any;
    colorBoxRef: any;
    handlerRef: any;
    designcontainerRef: any;
    canvasElem: any;
    canvasImageSrc:any;
    setTextValue(data: any) {
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
    setHtml2Canvas() {
        let me = this;

        html2canvas(this.designcontainerRef.nativeElement.firstElementChild).then(function (canvas: any) {
            canvas.setAttribute("id", "canvas1");
            me.canvasElem.nativeElement.appendChild(canvas);
            me.canvasImageSrc = me.canvasElem.nativeElement.children['canvas1'].toDataURL("image/jpeg");
            me.canvasElem.nativeElement.children['canvasPNG'].setAttribute("src", me.canvasImageSrc);
            me.canvasElem.nativeElement.children['canvas1'].remove(canvas);
        });
    }

}
