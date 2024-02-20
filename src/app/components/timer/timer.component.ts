import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  ms: number = 0;
  id: any;
  memo: number = 0;

  start() {
    if(!!this.id) {
      return;
    }
    const startTimer = new Date().getTime();
    this.id = setInterval(() => {
      this.ms = new Date().getTime() - startTimer + this.memo;
    }, 1);
  }

  stop() {
    this.memo = this.ms;
    clearInterval(this.id);
    this.id = undefined;
  }

  reset() {
    this.stop();
    this.memo = 0;
    this.ms = 0;
  }
}
