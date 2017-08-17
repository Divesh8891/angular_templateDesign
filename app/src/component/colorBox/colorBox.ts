import { Component, ViewChild, Input } from '@angular/core';
import { TextService } from '../../service/text.service';


@Component({
  selector: 'color-box',
  template: `
  <ul class="custom-color-picker" data-call="dasd" data-module="" #colorBox>
    <li *ngFor="let colorVal of colorArray">
      <span [style.backgroundColor]="colorVal"  (click)="pickcolor($event)"></span>
    </li>
    <li>
      <a href="javascript:text.openColorPicker()" class="more-color pull-right">More color</a>
      <a class="default pull-left" href="javascript:void(0)" (click)="closeColorBox()">No color</a>
    </li>
  </ul>
                    
     `
})

export class colorBoxComponent {
  colorArray: any[];
  currentObj: any;
  colorBoxObj: any;
  designcontainerRef: any;

  @ViewChild('colorBox') elements: any;

  pickcolor(event: any) {
    this.currentObj = this._textService.currentObj;
    let styleProp = this.elements.nativeElement.dataset['call'];
    let pickedColorValue = event.target.style.backgroundColor
    if (this.elements.nativeElement.dataset['module'] === "") {

      if (styleProp === 'textShadow') {
        this.elements.nativeElement.dataset['textShadow'] = pickedColorValue
        this.currentObj.nativeElement.style[styleProp] = this.elements.nativeElement.dataset['textShadow'] + ' 0px 0px ' + this.currentObj.nativeElement.style['strokeWidth'];
      }
      else {
        this.currentObj.nativeElement.style[styleProp] = pickedColorValue;
      }
      event.target.offsetParent.style.display = 'none'

    }
    else {
      this.designcontainerRef = this._textService.designcontainerRef;
      this.designcontainerRef.nativeElement.firstElementChild.attributes['data-bg'].value = '';
      this.designcontainerRef.nativeElement.style[styleProp] = pickedColorValue;
      this.elements.nativeElement.dataset['module'] = '';
    }
      this.closeColorBox();
  }

  closeColorBox() {
    this.colorBoxObj = this._textService.colorBoxRef;
    this.colorBoxObj.nativeElement.style.display = "none";
  }
  ngOnInit() {
    this.colorArray = ["#000000", "#54585A", "#9fcece", "#8E9089", "#C7C9C7", "#f5d56c", "#347574", "#FFFFFF", "#CB333B", "#E53C2E", "#FF3EB3", "#C5299B", "#F57EB6", "#FABBCB", "#D9C89E", "#F9E547", "#FFB81C", "#FF6A13", "#FDDA24", "#B58500", "#7B4931", "#9D2235", "#7E2D40", "#006747", "#8EDD65", "#154734", "#00843D", "#827A04", "#9ADBE8", "#3EB1C8", "#0254A2", "#003087", "#13294B", "#CBA3D8", "#3D0182"];
    this._textService.setColorBoxRef(this.elements);
  }
  constructor(private _textService: TextService) {

  }
}
