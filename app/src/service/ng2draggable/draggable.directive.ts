import { Directive, Input, ElementRef, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ng2-draggable]'
})
export class Draggable implements OnInit {
  private topStart: number;
  private leftStart: number;
  private _allowDrag: boolean = true;
  private md: boolean;
  private _handle: HTMLElement;

  @Output() postions = new EventEmitter();
  @Output() handlerClick = new EventEmitter();

  constructor(public element: ElementRef) {
  }


  ngOnInit() {
    // css changes
    if (this._allowDrag) {
      this.element.nativeElement.style.position = 'relative';
      this.element.nativeElement.style.left = '25px';
      this.element.nativeElement.style.top = '95px';
      this.element.nativeElement.className += ' cursor-draggable';
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
   // console.log("Down")
    if (event.button === 2 || (this._handle !== undefined && event.target !== this._handle))
      return; // prevents right click drag, remove his if you don't want it
    this.md = true;
    //console.log(event.clientY,event.clientX)
    this.topStart = event.clientY - this.element.nativeElement.style.top.replace('px', '');
    this.leftStart = event.clientX - this.element.nativeElement.style.left.replace('px', '');
    this.handlerClick.emit(event)
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.md = false;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.md && this._allowDrag) {
   //   console.log(event.clientY, this.topStart, event.clientX, this.leftStart)
      this.element.nativeElement.style.top = (event.clientY - this.topStart) + 'px';
      this.element.nativeElement.style.left = (event.clientX - this.leftStart) + 'px';
      this.postions.emit({ 'top': (event.clientY - this.topStart), 'left': (event.clientX - this.leftStart) })
    }
  }

  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.md = false;
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.md = true;
    this.topStart = event.changedTouches[0].clientY - this.element.nativeElement.style.top.replace('px', '');
    this.leftStart = event.changedTouches[0].clientX - this.element.nativeElement.style.left.replace('px', '');
    event.stopPropagation();
  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd() {
    this.md = false;
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.md && this._allowDrag) {
      this.element.nativeElement.style.top = (event.changedTouches[0].clientY - this.topStart) + 'px';
      this.element.nativeElement.style.left = (event.changedTouches[0].clientX - this.leftStart) + 'px';
    }
    event.stopPropagation();
  }

  @Input('ng2-draggable')
  set allowDrag(value: boolean) {
    this._allowDrag = value;
    if (this._allowDrag)
      this.element.nativeElement.className += ' cursor-draggable';
    else
      this.element.nativeElement.className = this.element.nativeElement.className
        .replace(' cursor-draggable', '');
  }

  @Input()
  set ng2DraggableHandle(handle: HTMLElement) {
    this._handle = handle;
  }
}
