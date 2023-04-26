import { Component, Input, SimpleChange } from '@angular/core';

import noxicon from '../../example-noxicon.json';
import goodnes from '../../example-goodnes.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-example';
  @Input() data: any;

  constructor() {
    this.getStatistics('Noxicon471');
    this.changeValues('Noxicon471');
  }

  changeValues(name: string): void {
    if (name == 'Noxicon471') this.data = noxicon.noxicon;
    else if(name == 'TheGoodnes471') this.data = goodnes.goodnes;
    else this.data = "";
  }

  async getStatistics(name: string): Promise<void> {
    // Sample url. The real one block the request.
    try {
      const response: Response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const jsonData: JSON = await response.json();
      // this.data = jsonData;
    } catch (error: unknown) {
      console.error("Fetch error: ", error)
    }
  }
}
