import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h4>Counter: {{ counter }}</h4>
    <button (click)="handleClick(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="handleClick(+1)">+1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  handleClick(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}