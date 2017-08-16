import { Component, Input } from '@angular/core';
import { designContainer } from '../../src/views/rightPanel/designContainer/designContainer';

@Component({
    selector: 'my-app',
    template: ` 
    <div class="wrapper container">
        <custom-header></custom-header>
        <div class="wrapper-inner col-xs-12" style="min-height: 891px;">
            <div class="row">
                 <left-panel></left-panel>
                 <right-panel></right-panel>
            </div>
        </div>
    </div>
    `
})

export class AppComponent {
 }