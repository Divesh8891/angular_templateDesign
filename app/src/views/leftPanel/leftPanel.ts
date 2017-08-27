import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
    selector: '[leftPanel]',
    template: ` 
                <section class="ImageModule col-xs-12 p-0 module" imageModule></section>
                <section class="TextModule col-xs-12 p-0 module" textModule></section>
                <color-box></color-box>
            `
})

export class leftPanelComponent {
    childTitle: string = 'This text is passed to child';
    @ViewChild('alignment', { read: ElementRef }) alignmentRef: ElementRef;
    ngAfterViewInit(){
        console.log(this.alignmentRef)
    }
}