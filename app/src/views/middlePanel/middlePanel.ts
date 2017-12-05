import { Component, ViewChild } from '@angular/core';
//import { TextService } from '../../service/text.service';

@Component({
    selector: '[middleModule]',
    template: ` 
                <!--section class="template-module bg-grey" templateModule (onfolderChoose)=openFolderOption($event)></section-->
                <section class="design-section display-inline" designContainer></section>
                <!--section class="help-image-popup " #helpImagePopup (onfolderChoose)=openFolderOption($event)>
                    <ul class="left-sec">
                        <li [class.active]="myString == 'Products'"><span (click)="showlist($event)">Products</span></li>
                        <li [class.active]="myString == 'Shapes' "><span (click)="showlist($event)">Shapes</span></li>
                        <li [class.active]="myString == 'Smilies' "><span (click)="showlist($event)">Smilies</span></li>
                    </ul>
                    <div class="right-sec">
                           <ul class="shapes"><li data-parent="shapes" class="active"><img src="../app/assets/imageLibrary/shapes/rect.png" /></ul>
                    </div>
                </section-->
                
        
                        
    `
})

export class MiddlePanelComponent {
    helpImagePopupStatus: any = false;
    rightSecLi: any;
    folderpath: '';
    myString: '';
    AVATAR_PATH: '../app/assets/imageLibrary';

    openFolderOption(event: any) {
        this.helpImagePopupStatus = event
    }
    showlist(event: any) {
        this.myString = event.target.innerHTML;
    }

    // getFileNames(dir) {
    //     let results = [];
    //     _fsService.readdir(dir).forEach(function (file) {
    //         file = dir + '/' + file;
    //         results.push(file);
    //     });

    //     return results;
    // }
    ngOnInit() {
        console.log("middle-init")
        
      //,,  console.log(this._fsService)

    }
    
   
}