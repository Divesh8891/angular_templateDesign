import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: '<h2>{{title}}</h2><basic></basic><ifcase></ifcase>'
})

export class AppComponent { 
    title = 'Welcome To Angular 2 World'
}