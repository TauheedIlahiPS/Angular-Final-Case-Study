import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss'],
})
export class TimerLimitComponent implements OnInit {
  @Output() private timeLimit = new EventEmitter();
  public enteredLimit: number;
  private pauseTimer: boolean = true;
  public initTimer: boolean = false;
  public pauseLogs = [];
  constructor() { }

  ngOnInit() { }

  onStartPause() {
    if (!this.initTimer) {
      this.initTimer = !!this.enteredLimit;
    }
    if (this.initTimer) {
      this.pauseTimer = !this.pauseTimer;
      this.timeLimit.emit({ limit: this.enteredLimit, pause: this.pauseTimer });
      this.enteredLimit = undefined;
    }
  }

  resetTimer() {
    this.timeLimit.emit({ resetTimer: true });
    this.pauseLogs = [];
    this.finishTimer();
  }
  finishTimer() {
    this.initTimer = false;
    this.enteredLimit = undefined;
    this.pauseTimer = true;
  }
}
