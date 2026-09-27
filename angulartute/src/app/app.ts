import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('angulartute');
  // name = 'Sandeep Kumar';
  // age = 25;
  counter = signal(0);
  increment() {
    this.counter.update((value) => value + 1);
  }
  decrement() {
    this.counter() > 0 && this.counter.update((value) => value - 1);
  }
  Reset() {
    this.counter.set(0);
  }
}
