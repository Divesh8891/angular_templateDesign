import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TextService {
    private dataStringSource = new Subject<string>();
    dataString$ = this.dataStringSource.asObservable();
    currentObj:any;
    setTextValue(data: any) {
        this.dataStringSource.next(data);
    }
    setCurrentObj(data: any) {
        this.currentObj =  data[0].elem;
        console.log(this.currentObj)
    }

}
