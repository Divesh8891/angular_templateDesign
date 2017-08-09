import { Component } from '@angular/core';
import { TextService } from '../../../service/text.service';

@Component({
    selector: 'designContainer',
    template: ` 
                <section class="design-section col-xs-12">
                    <div class="desgin-tool-sec" style="width: 780px; height: 780px;">
                        <section class="desgin-inner" data-bg="blank">{{textAreaVal}}</section>
                        <div class="handler"></div>
                     </div>
                </section>
    `
})

export class designContainer {
    textAreaVal: any;
    ngOnInit() {
      this._textService.dataString$.subscribe(
      data => {
        this.textAreaVal = data; 
      });
    }
    constructor(private _textService: TextService) { }

}