import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
    selector: '[leftModule]',
    template: ` 
                <section class="image-module module bg-grey" imageModule></section>
                <section class="text-module module bg-grey" textModule></section>
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