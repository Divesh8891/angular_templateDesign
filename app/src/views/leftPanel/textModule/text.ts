import { Component } from '@angular/core';

@Component({
    selector: 'text-module',
    template: ` 
                  <section class="TextModule col-xs-12 p-0 module">
                        <h2 id="textValhidden">fsdfs</h2>
                        <h5 class="option-heading col-xs-12 m-0 p-0">{{textPanelTitle}}</h5>
                        <div class="seperator"></div>
                        <my-textArea></my-textArea>
                        <div class="seperator"></div>
                        <select-box [parentClass]="'font-sec col-xs-6'" [defaultOptionValue]="'Font-size'" ></select-box>
                        <select-box [parentClass]="'line-height-sec col-xs-6'" [defaultOptionValue]="'line-height'"></select-box>
                        <select-box [parentClass]="'font-famliy-sec col-xs-6'" [defaultOptionValue]="'Font-famliy'"></select-box>
                        <select-box [parentClass]="'stroke-width-sec col-xs-6'" [defaultOptionValue]="'stroke-width'"></select-box>
                        <div class="seperator"></div>
                        <linkAsButton [parentClass]="'color-sec col-xs-6'" [applyClass]="'color btn btn-lrg'" [btnText]="'Color'"></linkAsButton>
                        <linkAsButton [parentClass]="'stroke-color-sec col-xs-6'" [applyClass]="'stroke-color btn btn-lrg'" [btnText]="'Stroke color'"></linkAsButton>
                        <linkAsButton [parentClass]="'back-color-sec col-xs-6'" [applyClass]="'back-color btn btn-lrg'" [btnText]="'Background color'"></linkAsButton>
                        <select-box [parentClass]="'opacity-width-sec col-xs-5'" [defaultOptionValue]="'Opacity'"></select-box>
                        <div class="seperator"></div>
                        <linkAsButton [parentClass]="'b align-opt col-xs-4'" [applyClass]="'bold btn btn-lrg'" [btnText]="'B'"></linkAsButton>
                        <linkAsButton [parentClass]="'i align-opt col-xs-4'" [applyClass]="'italic btn btn-lrg'" [btnText]="'I'"></linkAsButton>
                        <linkAsButton [parentClass]="'u align-opt col-xs-4'" [applyClass]="'underline btn btn-lrg'" [btnText]="'U'"></linkAsButton>
                    </section>
    `
})

export class textModuleComponent {
   textPanelTitle = "Text";
}