import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../src/views/app';

import { Draggable } from '../src/service/ng2draggable/draggable.directive';
import { ImageUploadModule } from "../src/service/angular2-image-upload/index";
import { MdSliderModule } from '@angular/material';
import { ColorPickerModule } from 'angular2-color-picker';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TextService } from '../src/service/text.service';

import { headerComponent } from '../src/views/header/header';
import {EditorComponent } from '../src/views/editor/editor';
import {ProductComponent } from '../src/views/products/product';

import { leftPanelComponent } from '../src/views/editor/leftPanel/leftPanel';
import { MiddlePanelComponent } from '../src/views/editor/MiddlePanel/MiddlePanel';

import { textModuleComponent } from '../src/views/editor/leftPanel/textModule/text';
import { imageModuleComponent } from '../src/views/editor/leftPanel/imageModule/image';
import { shapeModuleComponent } from '../src/views/editor/leftPanel/shapeModule/shape';

import { textAreaComponent } from '../src/component/textArea/textArea';
import { selectBoxComponent } from '../src/component/selectBox/selectBox';
import { buttonComponent } from '../src/component/button/button';

import { appRoutes } from './route/route';


@NgModule({
  imports: [BrowserModule, FormsModule, ImageUploadModule.forRoot(), MdSliderModule, ColorPickerModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent,EditorComponent,ProductComponent,headerComponent, leftPanelComponent, MiddlePanelComponent, textModuleComponent, imageModuleComponent, shapeModuleComponent, textAreaComponent, selectBoxComponent, buttonComponent, Draggable],
  bootstrap: [AppComponent],
  providers: [TextService]
})
export class AppModule { }
