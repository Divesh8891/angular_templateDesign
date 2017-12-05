import { NgModule } from '@angular/core';
import { Draggable } from '../src/service/ng2draggable/draggable.directive';
import { ImageUploadModule } from "../src/service/angular2-image-upload/index";
import { MdSliderModule } from '@angular/material';
import {ColorPickerModule} from 'angular2-color-picker';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TextService } from '../src/service/text.service';


import { AppComponent } from '../src/views/app';
import { headerComponent } from '../src/views/header/header';
import { leftPanelComponent } from '../src/views/leftPanel/leftPanel';
import { MiddlePanelComponent } from '../src/views/MiddlePanel/MiddlePanel';
import { rightPanelComponent } from '../src/views/rightPanel/rightPanel';

import { shapeModuleComponent } from '../src/views/leftPanel/shapeModule/shape';
import { textModuleComponent } from '../src/views/leftPanel/textModule/text';
import { imageModuleComponent } from '../src/views/leftPanel/imageModule/image';
import { templateModuleComponent } from '../src/views/middlePanel/templateModule/template';



import { designContainer } from '../src/views/middlePanel/designContainer/designContainer';

import { textAreaComponent } from '../src/component/textArea/textArea';
import { selectBoxComponent } from '../src/component/selectBox/selectBox';
import { buttonComponent } from '../src/component/button/button';




@NgModule({
  imports: [BrowserModule, FormsModule,  ImageUploadModule.forRoot(),MdSliderModule,ColorPickerModule],
  declarations: [AppComponent, headerComponent, leftPanelComponent,MiddlePanelComponent, rightPanelComponent, textModuleComponent, imageModuleComponent,shapeModuleComponent, templateModuleComponent, designContainer, textAreaComponent, selectBoxComponent, buttonComponent, Draggable],
  bootstrap: [AppComponent],
  providers: [TextService]
})
export class AppModule { }
