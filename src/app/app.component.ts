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

  constructor() {
    this.getStatistics('Noxicon471');
  }

  debugLog(): void {
    console.log(data.data.segments)
    console.log(typeof data.data.segments)
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
