import { Component, Input, ViewChild } from '@angular/core';
import { TextService } from '../service/text.service';

import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';


@Component({
    selector: 'my-app',
    template: ` 

    <div class="wrapper">
        <custom-header></custom-header>
        <!--div class="wrapper-inner prod-detail">
            <div class="producy-wrapper" *ngFor="let pObj of productObj">
                <div class="prod-title">Customize {{pObj.type}}</div>
                <div class="product-image" *ngFor="let pImageObj of pObj?.productArray">
                    <img id="{{pImageObj.id}}" src="{{pImageObj.folderName}}{{pImageObj.src}}" [attr.data-color]="pImageObj.color" class="prod-cup" (mouseenter)='showInfo($event)' (mouseout)='showInfo($event)'/>
                    <div class="product-desc">
                        <div class="color-item-info">
                            <span class="item-color">7 Colors</span>
                            <span class="item-available">Available Items {{pImageObj.quantity}}</span>
                        </div>
                        <p class="product-name">{{pImageObj.name}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-hover-option" #productHoverOption (mouseenter)='showInfo($event)' (mouseleave)='showInfo($event)'>
            <div class="quantity-wrapper">
                <label>Quantity</label>
                <input type="text" class="quan" [(ngModel)]="quanValue">
            </div>
            <label class="chosse-color">Choose Color</label>
            <ul class="custom-color-picker">
                <li *ngFor="let p_color of productColor"><span [style.backgroundColor]=p_color title={{p_color}}></span>
            </ul>
            <button class="customize-btn btn" (click)=gotoTool($event)>Start Customize</button>
        </div-->
            <div class="wrapper-inner">
            <section class="left-module" leftModule></section>
            <div class="middle-module" middleModule></div>
            <section class="right-module  bg-grey" rightModule></section>
        </div>
     
    </div>

    `
})

export class AppComponent {

    @ViewChild('productHoverOption') public productHoverOption: any;
    currentId: any = "";
    productColor: any = "";
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

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('../app/assets/product.json').subscribe(res => {
            this.productObj = res.json();
        });
    }





}