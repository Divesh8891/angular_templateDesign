import { Component } from '@angular/core';

@Component({
    selector: 'right-panel',
    template: ` 
        <div class="col-xs-9" >
                    <div class="text-center ptb-20 col-xs-12">
                        <ul class="list-inline">
                            <li><a href="javascript:commonoption.alignb();" class="btn">Send Back</a></li>
                            <li><a href="javascript:commonoption.alignf();" class="btn">Bring front</a></li>
                            <li><a href="javascript:commonoption.alignbw();" class="btn">Send Backward</a></li>
                            <li><a href="javascript:commonoption.alignfw();" class="btn">Bring Forward</a></li>
                            <li><a href="javascript:commonoption.delete();" class="delete btn">Delete</a></li>
                            <li><a href="javascript:commonoption.preview();" class="preview btn">Preview</a></li>
                            <li><a href="javascript:commonoption.save();" class="save btn">Save</a></li>
                        </ul>
                    </div>
                   <designContainer></designContainer>
                </div>
    `
})

export class rightPanelComponent{
    
}