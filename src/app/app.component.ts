import { Component, Input } from '@angular/core';

import noxicon from '../../example.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-example';
  @Input() data: any = noxicon;

  debugLog(): void {
    console.log(noxicon)
  }

  getStatistics(name: string): void {
    console.log(name)
  }
}
