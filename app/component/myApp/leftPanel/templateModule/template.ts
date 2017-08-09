import { Component } from '@angular/core';

@Component({
    selector: 'template-module',
    template: ` 
                 <section class="TemplateModule col-xs-12 p-0 module">
                        <h5 class="option-heading col-xs-12 m-0 p-0">Template Setting</h5>
                        <div class="seperator"></div>

                        <div class="col-xs-12 mt-10">
                            <span>Size</span>
                            <input type="text" class="width"><input type="text" class="height">
                            <a href="javascript:template.gosize();" class="goSize btn">Go</a>
                        </div>
                        <div class="quote_image_share col-xs-3">
                            <a class="btn update_canvas_size col-xs-12" data-dimension="400:400" href="javascript:template.update_canvas_size('400:400');">1:1</a>
                        </div>
                        <div class="quote_image_share col-xs-3">
                            <a class="btn update_canvas_size col-xs-12" data-dimension="500:400" href="javascript:template.update_canvas_size('500:400');">5:4</a>
                        </div>
                        <div class="quote_image_share col-xs-3">
                            <a class="btn update_canvas_size col-xs-12" data-dimension="400:300" href="javascript:template.update_canvas_size('400:300');">4:3</a>
                        </div>
                        <div class="quote_image_share col-xs-3">
                            <a class="btn update_canvas_size col-xs-12" data-dimension="300:200" href="javascript:template.update_canvas_size('300:200');">3:2</a>
                        </div>
                        <div class="quote_image_share col-xs-3">
                            <a class="btn update_canvas_size col-xs-12" data-dimension="800:500" href="javascript:template.update_canvas_size('800:500');">8:5</a>
                        </div>
                        <div class="quote_image_share col-xs-3">
                            <a class="btn update_canvas_size col-xs-12" data-dimension="800:450" href="javascript:template.update_canvas_size('800:450');">16:9</a>
                        </div>
                        <div class="quote_image_share col-xs-3">
                            <a class="btn update_canvas_size col-xs-12" data-dimension="780:780" href="javascript:template.update_canvas_size('780:780');"><i class="fa fa-facebook"></i>FB</a>
                        </div>
                        <div class="seperator"></div>

                        <div class="col-xs-12">
                            <a href="javascript:template.changeBg('blankT');" id="0" class="blankT btn">Blank</a>
                            <a href="javascript:template.changeBg('CommonT');" id="1" class="CommonT btn">Common</a>
                            <a href="javascript:template.changeBg('FunT');" id="2" class="FunT btn">Fun</a>
                        </div>
                        <div class="seperator"></div>

                        <div class="back-color-sec col-xs-7"><a href="javascript:template.bgcolor();" class="back-color btn">Background-color</a></div>
                        <!--<div class="overlay-sec col-xs-6"><a href="javascript:template.addOverlay();" class="overlay btn">Add Overlay</a></div>-->
                        <div class="opacity-sec col-xs-5"><select onchange="template.opacity()"><option value="www">Opacity</option> <option value="0.1">0.1</option><option value="0.3">0.3</option><option value="0.5">0.5</option><option value="0.8">0.8</option><option value="1">1</option></select></div>
                        <!--<div class="opacity-sec"><select onchange="template.opacity()"><option value="www">Opacity</option> </select></div>-->

                    </section>
    `
})

export class templateModuleComponent {
   imagePanelTitle = "Text";
}