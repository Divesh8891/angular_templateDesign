import { Component } from '@angular/core';

@Component({
    selector: 'custom-header',
    template: ` 
              <header class="header bg-grey">
                 <h4 [class]="headerHeadingClassName">{{headerHeading}}</h4>
              </header>
    `
})

export class headerComponent {
    headerHeading = "Template Design";
    headerHeadingClassName= "heading text-center"
}