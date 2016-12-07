import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <img [src] = 'imageURL'/>
    <courses></courses>
    <authors></authors>`,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
  title = 'Angular App';
  imageURL = 'https://lorempixel.com/400/200/';
}
