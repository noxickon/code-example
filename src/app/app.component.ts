import { Component, Input } from '@angular/core';

import data from '../../example.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-example';
  @Input() data: any = data;

  debugLog(): void {
    console.log(data.data.segments)
    console.log(typeof data.data.segments)
  }

  getStatistics(name: string): void {
    // add feter for the values
    console.log(name)
  }
}
