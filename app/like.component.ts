import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'like',
    template: `
    <i class="glyphicon glyphicon-heart"
      (click)="onClick($event)"
      [style.color]="isLoved ? 'deeppink'  :'#ccc'">
    </i> {{hearts}}

    `,
    styles: [`
      .glyphicon-heart{
        cursor: pointer;
      }
    `],
    inputs: ['isLoved:is-loved']
})
export class LikeComponent {
    @Input ('is-loved') isLoved = false;
    @Input () hearts = 0;
    @Output() change = new EventEmitter();

    onClick($event){
      if(this.isLoved){
        this.hearts--;
      }
      else{
        this.hearts++;
      }
      this.isLoved = !this.isLoved;
      this.change.emit({newValue: this.isLoved});
    }
}
