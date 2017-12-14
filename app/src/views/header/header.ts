import { Component } from '@angular/core';

@Component({
    selector: 'custom-header',
    template: ` 
                <div class="header">
                <a href="/">
                    <img src="app/assets/images/logo.png" />
                </a>
                <ul class="nav">
                    <li class="">
                        <a  [routerLink]="['/home']">Choose Product</a>
                    </li>
                    <li class="">
                        <a [routerLink]="['/editor']">Create Custom Design</a>
                    </li>
                    <li class="">
                        <a href="javascript:void(0)" class="login-link">Login</a>
                        <div class="user-info-wrapper">
                            <span class="user-name">Divesh</span>
                            <a href="javascript:void(0)" class="logout-link">Logout</a>
                        </div>
                    </li>
                </ul>

            </div>
    `
})

export class headerComponent {
    headerHeading = "Customize Design";
    headerHeadingClassName= "heading text-center"
}