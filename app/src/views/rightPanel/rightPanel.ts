import { Component, ViewChild } from '@angular/core';
import { TextService } from '../../service/text.service';

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
                    <li>
                    <linkAsButton [parentClass]="''" [applyClass]="'preview btn'" [btnText]="'Preview'"  (click)=showPreview($event)></linkAsButton>
                    </li>
                    <li>
                     <linkAsButton [parentClass]="''" [applyClass]="'save btn'" [btnText]="'Save'"  (click)=saveImage($event)></linkAsButton>
                </ul>
            </div>
            <designContainer></designContainer>
            <div class="popup-body">
                <div id="img-out"><img  src="{{modalImgSrc}}"/></div>
            </div>
            <section class="downloadImgCont" #downloadImgCont>
                    </section>
        </div>
        
                        
    `
})

export class rightPanelComponent {
    modalImgSrc: any = '';
    @ViewChild('modal') public modal: any;
    @ViewChild('downloadImgCont') public downloadImgCont: any;


    showPreview() {
        this.modalImgSrc = this._textService.canvasImageSrc;
    }
    saveImage() {
        console.log()
        this.downloadImgCont.nativeElement.innerHtml = '<a href="' + this.modalImgSrc + '" download ><img src="' + this.modalImgSrc + '" class="downloadable"/></a>';
        //$('.downloadImgCont a')[0].click();
    }
    constructor(private _textService: TextService) {
    }
}