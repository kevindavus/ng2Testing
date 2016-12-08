import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    template: `
    <i class="glyphicon"
      [class.glyphicon-star]= "isFavorite"
      [class.glyphicon-star-empty]="!isFavorite"
      (click)="onClick($event)" >
    </i>

    `,
    styles: [`
      .glyphicon-star{
        color: orange;
      }
      `],
    inputs: ['isFavorite:is-favorite']
})
export class FavoriteComponent {
    @Input ('is-favorite') isFavorite = false;

    @Output() change = new EventEmitter();

    onClick($event){
      this.isFavorite = !this.isFavorite;
      this.change.emit({newValue: this.isFavorite});
    }
}
