import { Component } from '@angular/core';

@Component({
    selector: 'custom-header',
    template: ` 
              <header class="col-xs-12">
                 <h4 [class]="headerHeadingClassName">{{headerHeading}}</h4>
              </header>
    `
})

export class headerComponent {
    headerHeading = "Template Design";
    headerHeadingClassName= "heading m-0 ptb-20 text-white text-center"
}