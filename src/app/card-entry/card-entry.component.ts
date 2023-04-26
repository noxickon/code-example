import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-entry',
  templateUrl: './card-entry.component.html',
  styleUrls: ['./card-entry.component.scss']
})
export class CardEntryComponent {
  @Input() label: string = "";
  @Input() amount: string = "";
  @Input() value: number = 0;
  @Input() ranking?: string;
  @Input() rankingBar?: number;
}
