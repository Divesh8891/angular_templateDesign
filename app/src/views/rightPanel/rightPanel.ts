import { Component, ViewChild } from '@angular/core';
import { TextService } from '../../service/text.service';
@Component({
    selector: 'right-panel',
    template: ` 
        <div class="col-xs-9" >
            <div class="text-center ptb-20 col-xs-12">
                <ul class="list-inline">
                    <li><linkAsButton [parentClass]="''" [applyClass]="'btn'" [btnText]="'Send Back'"  (click)=sendBack($event)></linkAsButton></li>
                    <li><linkAsButton [parentClass]="''" [applyClass]="'btn'" [btnText]="'Bring front'"  (click)=bringFront($event)></linkAsButton></li>
                    <li><linkAsButton [parentClass]="''" [applyClass]="'btn'" [btnText]="'Send Backward'"  (click)=sendforward($event)></linkAsButton></li>
                    <li><linkAsButton [parentClass]="''" [applyClass]="'btn'" [btnText]="'Bring Forward'"  (click)=bringForward($event)></linkAsButton></li>
                    <li><linkAsButton [parentClass]="''" [applyClass]="'delete btn'" [btnText]="'Delete'"  (click)=deleteNode($event)></linkAsButton></li>
                    <li><linkAsButton [parentClass]="''" [applyClass]="'preview btn'" [btnText]="'Preview'"  (click)=showPreview($event)></linkAsButton></li>
                    <li><linkAsButton [parentClass]="''" [applyClass]="'save btn'" [btnText]="'Save'"  (click)=saveImage($event)></linkAsButton></li>
                </ul>
            </div>
            <designContainer></designContainer>
            <div class="popup-body"><div id="img-out" #modal><img  src="{{modalImgSrc}}"/></div></div>
            <section class="downloadImgCont" #downloadImgCont></section>
        </div>
        
                        
    `
})

export class rightPanelComponent {
    modalImgSrc: any = '';
    handlerRef: any;
    canvasImageSrc: any;
    userArray: any;
    @ViewChild('modal') public modal: any;
    @ViewChild('downloadImgCont') public downloadImgCont: any;
    sendBack() {
        let $currentObj = this._textService.currentObj.nativeElement;
        let $prevID = $currentObj.previousSibling;
        let $currentObjId = $currentObj.id;

        let $container = this._textService.designcontainerRef.nativeElement.children[0];
        let $firstChildId = $container.firstElementChild.getAttribute('id')
        if ($firstChildId != $currentObjId) {
            $currentObj.remove();
            $container.insertBefore($currentObj, $prevID)
        }

    }
    bringFront() {
        let $currentObj = this._textService.currentObj.nativeElement;
        let $currentObjId = $currentObj.id;
        let $nextID = $currentObj.nextSibling;

        let $container = this._textService.designcontainerRef.nativeElement.children[0];
        let $lastChildId = $container.lastElementChild.getAttribute('id')

        if ($lastChildId != $currentObjId) {
            $container.insertBefore($nextID, $currentObj)
        }
    }
    sendforward() {
        let $currentObj = this._textService.currentObj.nativeElement;
        let $currentObjId = $currentObj.id;

        let $container = this._textService.designcontainerRef.nativeElement.children[0];
        let $firstChildId = $container.firstElementChild.getAttribute('id')
        let $prevID = $container.firstElementChild;

        if ($firstChildId != $currentObjId) {
            $container.insertBefore($currentObj, $prevID)
        }
    }
    bringForward() {
        let $currentObj = this._textService.currentObj.nativeElement;
        let $currentObjId = $currentObj.id;

        let $container = this._textService.designcontainerRef.nativeElement.children[0];
        let $lastChildId = $container.lastElementChild.getAttribute('id')



        if ($lastChildId != $currentObjId) {
            $container.insertAdjacentHTML('beforeend', '<div id="two">two</div>');
            let $prevID = $container.lastElementChild;
            $container.insertBefore($currentObj, $prevID)
            $prevID.remove();
        }
    }



    showPreview() {
        let me = this;
        me.handlerRef = this._textService.handlerRef;
        me.handlerRef.nativeElement.style.display = 'none';

        html2canvas(this._textService.designcontainerRef.nativeElement).then(function (canvas: any) {
            canvas.setAttribute("id", "canvas1");
            me._textService.canvasElem.nativeElement.appendChild(canvas);
            me.modalImgSrc = me._textService.canvasElem.nativeElement.children['canvas1'].toDataURL("image/jpeg");
            me._textService.canvasElem.nativeElement.children['canvas1'].remove(canvas);
            me.handlerRef.nativeElement.style.display = 'block';
        });

    }
    saveImage() {
        let me = this;
        me.handlerRef = this._textService.handlerRef;
        me.handlerRef.nativeElement.style.display = 'none';

        html2canvas(this._textService.designcontainerRef.nativeElement).then(function (canvas: any) {
            canvas.setAttribute("id", "canvas1");
            me._textService.canvasElem.nativeElement.appendChild(canvas);
            me.canvasImageSrc = me._textService.canvasElem.nativeElement.children['canvas1'].toDataURL("image/jpeg");
            me._textService.canvasElem.nativeElement.children['canvasPNG'].setAttribute("src", me.canvasImageSrc);
            me._textService.canvasElem.nativeElement.children['canvas1'].remove(canvas);
            let imgElem = document.createElement("a");
            imgElem.setAttribute("src", me.canvasImageSrc);
            imgElem.className = "downloadable";
            let anchorElem = document.createElement("a");
            anchorElem.setAttribute("href", me.canvasImageSrc);
            anchorElem.setAttribute("download", "preview.jpeg");
            anchorElem.appendChild(imgElem);
            me.downloadImgCont.nativeElement.appendChild = anchorElem;
            me.downloadImgCont.nativeElement.appendChild.click();
            me.handlerRef.nativeElement.style.display = 'block';

        });

    }
    deleteNode() {
        this.userArray = this._textService.users;
        let ObjArray = this._textService.objArray;

        let currentObjElememtID = this._textService.currentObj.nativeElement.id;
        for (let j = 0; j < this.userArray.length; j++) {
            if (this.userArray[j].randomNumber == currentObjElememtID && ObjArray[j].id == currentObjElememtID) {
                this.userArray.splice(j, 1);
                ObjArray.splice(j, 1);
                break;
        }
    }
        this.handlerRef = this._textService.handlerRef;
this.handlerRef.nativeElement.style.display = 'none';
    }
constructor(private _textService: TextService) {
}
}