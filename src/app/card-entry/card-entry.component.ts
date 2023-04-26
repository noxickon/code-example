import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-entry',
  templateUrl: './card-entry.component.html',
  styleUrls: ['./card-entry.component.scss']
})
export class CardEntryComponent {
  @Input() values: any;

  getPercentile(): string {
    let percentile: number | null;

    if (this.values.percentile !== null) {

      if (this.values.percentile > 50) {
        percentile = 100 - this.values.percentile;
        percentile = Math.round(percentile);
        return "Top " + percentile + "%";
      } else {
        return "Bottom " + this.values.percentile + "%";
      }
    }else {
      return "";
    }

  }
}
