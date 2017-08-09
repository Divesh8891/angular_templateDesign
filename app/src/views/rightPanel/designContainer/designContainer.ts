import { Component } from '@angular/core';

@Component({
    selector: 'designContainer',
    template: ` 
                <section class="design-section col-xs-12">
                    <div class="desgin-tool-sec" style="width: 780px; height: 780px;">
                        <section class="desgin-inner" data-bg="blank"></section>
                        <div class="handler"></div>
                     </div>
                </section>
    `
})

export class designContainer {

}