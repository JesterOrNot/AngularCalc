import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})

export class CounterComponent {
  count = 0;

  incrementCounter() {
    this.count++;
  }
}
