import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TextService {
    private dataStringSource = new Subject<string>();
    dataString$ = this.dataStringSource.asObservable();

    
    setTextValue(data: any) {
        this.dataStringSource.next(data);
    }
} 