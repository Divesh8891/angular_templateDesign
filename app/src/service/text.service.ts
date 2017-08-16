import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TextService {
    private dataStringSource = new Subject<string>();
    currentObj: any;
    colorBoxRef: any;
    handlerRef: any;
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

}
