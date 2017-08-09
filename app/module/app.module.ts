import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../component/myApp/app';
import { headerComponent } from '../component/myApp/header/header';
import { leftPanelComponent } from '../component/myApp/leftPanel/leftPanel';
import { rightPanelComponent } from '../component/myApp/rightPanel/rightPanel';

import { textModuleComponent } from '../component/myApp/leftPanel/textModule/text';
import { imageModuleComponent } from '../component/myApp/leftPanel/imageModule/image';
import { templateModuleComponent } from '../component/myApp/leftPanel/templateModule/template';
import { alignmentModuleComponent } from '../component/myApp/leftPanel/alignmentModule/alignment';


import { designContainer } from '../component/myApp/rightPanel/designContainer/designContainer';

import { textAreaComponent } from '../component/reuseComponent/textArea/textArea';
import { selectBoxComponent } from '../component/reuseComponent/selectBox/selectBox';
import { buttonComponent } from '../component/reuseComponent/button/button';




@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,headerComponent, leftPanelComponent, rightPanelComponent, textModuleComponent,imageModuleComponent,templateModuleComponent,alignmentModuleComponent, designContainer, textAreaComponent, selectBoxComponent, buttonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
