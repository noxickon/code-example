import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardLabel: string = "";
  @Input() playedTime: string = "";
  @Input() playedMatches: number = 0;
  @Input() isMain: boolean = false;
  @Input() stats: any = {};
}
