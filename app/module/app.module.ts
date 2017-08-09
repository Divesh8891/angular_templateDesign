import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {TextService} from '../src/service/text.service';


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




@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,headerComponent, leftPanelComponent, rightPanelComponent, textModuleComponent,imageModuleComponent,templateModuleComponent,alignmentModuleComponent, designContainer, textAreaComponent, selectBoxComponent, buttonComponent],
  bootstrap: [AppComponent],
  providers: [TextService]
})
export class AppModule { }
