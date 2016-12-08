import {Component} from 'angular2/core';
import {CourseService} from './course.service'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
@Component({
    selector: 'courses',
    template: `
    <h2>Courses</h2>
    <input type="text" [(ngModel)] = "title" />
    <input type="button" (click)="title = ''" value="Clear" />
    <p>Preview: {{ title }}</p>
    <ul>
      <li *ngFor="#course of courses">
      <like [is-loved] = "post.isLoved" (change)="onLikeChange($event)"></like>{{course}}</li>
    </ul>
    `,
    providers: [CourseService],
    directives: [FavoriteComponent,LikeComponent]
})
export class CoursesComponent {

    courses;
    post = {
      isLoved: false
    }
    onLikeChange($event){
      console.log($event)
    }
    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}
