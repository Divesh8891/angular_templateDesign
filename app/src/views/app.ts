import { Component} from '@angular/core';
import { Routes } from '@angular/router';
@Component({
    selector: 'my-app',
    template:`<div class="wrapper">
                <custom-header></custom-header>
                <router-outlet></router-outlet>
                `
})
export class AppComponent {
}