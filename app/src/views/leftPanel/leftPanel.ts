import { Component } from '@angular/core';

@Component({
    selector: 'left-panel',
    template: ` 
                <section class="option-panel col-xs-3">
                    <text-module ></text-module>
                    <image-module></image-module>
                    <template-module></template-module>
                    <alignment-module></alignment-module>
                    
                    
                </section>
            `
})

export class leftPanelComponent{
   
}