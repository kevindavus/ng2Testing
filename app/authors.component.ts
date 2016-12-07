import {Component} from 'angular2/core';
import {AuthorService} from './authors.service'
@Component({
    selector: 'authors',
    template: `
    <h2>Authors</h2>
    {{title}}
    <ol>
      <li *ngFor="#author of authors">
      {{author}}</li>
    </ol>
    `,
    providers: [AuthorService]
})
export class AuthorsComponent {
    title = "The authors of the courses";
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();


    }
}
