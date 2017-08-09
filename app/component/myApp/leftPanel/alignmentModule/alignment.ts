import { Component } from '@angular/core';

@Component({
    selector: 'alignment-module',
    template: ` 
                <section class="AlignmentModule col-xs-12 p-0 module">
                        <h5 class="option-heading col-xs-12 m-0 p-0">Alignment</h5>
                        <div class="seperator"></div>
                        <div class="l align-opt col-xs-4 "><a href="javascript:commonoption.alignLeft();" class="leftA btn btn-lrg">L</a></div>
                        <div class="m align-opt col-xs-4 "><a href="javascript:commonoption.alignMid();" class="mid btn btn-lrg">M</a></div>
                        <div class="r align-opt col-xs-4 "><a href="javascript:commonoption.alignRight();" class="right btn btn-lrg">R</a></div>
                        <div class="seperator"></div>
                        <div class="col-xs-12">
                            <label>L : </label><input type="text" class="leftP"><label>T : </label><input type="text" class="topP">
                            <a href="javascript:commonoption.setP();" class="goSize btn">Go</a>
                        </div>
                        <div class="seperator"></div>
                        <div class="col-xs-12">
                            <label>w : </label><input type="text" class="widthA">
                            <a href="javascript:commonoption.setDimension();" class="goSize btn">Go</a>
                        </div>
                    </section>
    `
})

export class alignmentModuleComponent {
   imagePanelTitle = "Text";
}