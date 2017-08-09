import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../src/module/app';
import { headerComponent } from '../src/module/header/header';
import { leftPanelComponent } from '../src/module/leftPanel/leftPanel';
import { rightPanelComponent } from '../src/module/rightPanel/rightPanel';

import { textModuleComponent } from '../src/module/leftPanel/textModule/text';
import { imageModuleComponent } from '../src/module/leftPanel/imageModule/image';
import { templateModuleComponent } from '../src/module/leftPanel/templateModule/template';
import { alignmentModuleComponent } from '../src/module/leftPanel/alignmentModule/alignment';


import { designContainer } from '../src/module/rightPanel/designContainer/designContainer';

import { textAreaComponent } from '../src/component/textArea/textArea';
import { selectBoxComponent } from '../src/component/selectBox/selectBox';
import { buttonComponent } from '../src/component/button/button';




@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,headerComponent, leftPanelComponent, rightPanelComponent, textModuleComponent,imageModuleComponent,templateModuleComponent,alignmentModuleComponent, designContainer, textAreaComponent, selectBoxComponent, buttonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
