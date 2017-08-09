import { Component } from '@angular/core';

@Component({
    selector: 'image-module',
    template: ` 
                  <section class="ImageModule col-xs-12 p-0 module">
                        <h5 class="option-heading col-xs-12 m-0 p-0">imagePanelTitle</h5>
                        <div class="seperator"></div>
                        <div class="col-xs-12"><a class="upload btn btn-lrg">Upload 
                                    <input type="file" id="file" class="upload-image-btn" name="file_upload" onchange="image.upload(this)"></a>
                        </div>
                        <div class="col-xs-12">
                            <a href="javascript:commonoption.setAspectRatio();" class="set-aspect-ratio btn btn-lrg">Set Aspect Ratio</a>
                        </div>
                    </section>
    `
})

export class imageModuleComponent {
   imagePanelTitle = "Text";
}