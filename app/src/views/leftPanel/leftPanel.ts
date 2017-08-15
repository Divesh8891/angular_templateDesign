import { Component } from '@angular/core';

@Component({
    selector: 'left-panel',
    template: ` 
                <section class="option-panel col-xs-3">
                    <text-module [title]='childTitle' (notify)='onNotify($event)'></text-module>
                    <image-module></image-module>
                    <template-module></template-module>
                    <alignment-module></alignment-module>
                    <color-box [title] = 'localString'></color-box>
                </section>{{localString}}
            `
})

export class leftPanelComponent {
   childTitle:string = 'This text is passed to child';
   localString : any;
    onNotify(message:string):void {
    console.log(message);
  }
}