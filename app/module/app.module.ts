import { NgModule } from '@angular/core';
import { Draggable } from '../src/service/ng2draggable/draggable.directive';
import { ImageUploadModule } from "../src/service/angular2-image-upload/index";
import { MdSliderModule } from '@angular/material';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TextService } from '../src/service/text.service';


import { AppComponent } from '../src/views/app';
import { headerComponent } from '../src/views/header/header';
import { leftPanelComponent } from '../src/views/leftPanel/leftPanel';
import { rightPanelComponent } from '../src/views/rightPanel/rightPanel';

import { textModuleComponent } from '../src/views/leftPanel/textModule/text';
import { imageModuleComponent } from '../src/views/leftPanel/imageModule/image';
import { templateModuleComponent } from '../src/views/leftPanel/templateModule/template';
import { alignmentModuleComponent } from '../src/views/leftPanel/alignmentModule/alignment';



import { designContainer } from '../src/views/rightPanel/designContainer/designContainer';

import { textAreaComponent } from '../src/component/textArea/textArea';
import { selectBoxComponent } from '../src/component/selectBox/selectBox';
import { buttonComponent } from '../src/component/button/button';
import { colorBoxComponent } from '../src/component/colorBox/colorBox';




@NgModule({
  imports: [BrowserModule, FormsModule,  ImageUploadModule.forRoot(),MdSliderModule],
  declarations: [AppComponent, headerComponent, leftPanelComponent, rightPanelComponent, textModuleComponent, imageModuleComponent, templateModuleComponent, alignmentModuleComponent, colorBoxComponent, designContainer, textAreaComponent, selectBoxComponent, buttonComponent, Draggable],
  bootstrap: [AppComponent],
  providers: [TextService]
})
export class AppModule { }
