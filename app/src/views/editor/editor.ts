import { Component, Input, ViewChild } from '@angular/core';
import { TextService } from '../../service/text.service';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';


@Component({
    templateUrl: 'app/src/views/editor/editor.html'
})

export class EditorComponent {

    @ViewChild('productHoverOption') public productHoverOption: any;
    currentId: any = "";
    productColor: any = "";
    handlerParentRef: any;
    modalImgSrc: any;
    cursorx: any;
    cursory: any;

    @ViewChild('modalOverlay') public modalOverlay: any;
    @ViewChild('modalWrapper') public modalWrapper: any;


    prodConfirm() {
        console.log(this._textService.designcontainerRef.nativeElement)
        this.showPreview();
        this.modalWrapper.nativeElement.style.display = "block";
        this.modalOverlay.nativeElement.style.display = "block";
    }
    closeModal() {
        this.modalWrapper.nativeElement.style.display = "none";
        this.modalOverlay.nativeElement.style.display = "none";
    }
    saveImage() {
        let me = this;
        me.handlerParentRef.style.display = "block" ? me.handlerParentRef.style.display = 'none' : '';

        html2canvas(this._textService.designcontainerRef.nativeElement).then(function (canvas: any) {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            a.download = 'template.png';
            a.click();
            // me.handlerParentRef.style.display = 'block';
            me.closeModal();
        }.bind(this)
        );

    }
    showPreview() {
        let me = this;
        console.log(me.handlerParentRef)
        me.handlerParentRef == undefined ? alert('Design your cap') : me.handlerParentRef.style.display = 'none';

        html2canvas(this._textService.designcontainerRef.nativeElement).then(function (canvas: any) {
            me.modalImgSrc = canvas.toDataURL("image/jpeg");
            me.handlerParentRef != undefined ? me.handlerParentRef.style.display = 'block' : '';
        });

    }
    updateMove(event: any) {
        this.cursorx = ("X"+event.x + ",offesetX" + event.offsetX )
        this.cursory = ("Y"+event.y + ",offsetY" + event.offsetY )
        // console.log("doc",event)
    }
    
    showInfo(obj: any) {
        this.productHoverOption.nativeElement.className = "product-hover-option-show";
        if (this.productHoverOption.nativeElement.className == 'product-hover-option-show' && obj.type == "mouseenter") {
            this.productHoverOption.nativeElement.style.top = obj.target.offsetTop + "px";
            this.productHoverOption.nativeElement.style.left = obj.target.offsetLeft + "px";
            this.currentId = obj.target.id;
            console.log(obj.relatedTarget.dataset.color)
            if (obj.relatedTarget != null) {
                this.productColor = obj.relatedTarget.dataset.color == undefined ? [] : obj.relatedTarget.dataset.color.split(",")
            }
        }
        else {
            this.productHoverOption.nativeElement.className = "product-hover-option";
        }

    }
    productObj: Object[];

    constructor(private http: Http, private _textService: TextService) { }

    ngOnInit() {
        console.log("product-detail--init");
        console.log("app")
        this.http.get('../app/assets/product.json').subscribe(res => {
            this.productObj = res.json();
        });
        this._textService.currentObjController('getHandlerParentObj', '', '').subscribe(
            data => {
                this.handlerParentRef = data;
                this.handlerParentRef = this.handlerParentRef.nativeElement
            });
    }





}