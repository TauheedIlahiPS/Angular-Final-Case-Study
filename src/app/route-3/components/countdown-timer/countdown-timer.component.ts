import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input()
  public set countDown(value: any) {
    if (value) {
      if (value.resetTimer) {
        this._countDown = 0;
        this.stopTimer();
      } else {
        if (this.countDown <= 0 && value.limit > 0) {
          this._countDown = value.limit;
        }
        if (this.countDown > 0) {
          this.pausedAt.emit({ count: this.countDown, paused: value.pause });
        }
        if (value.pause) {
          this.stopTimer();
        } else {
          this.startTimer();
        }
      }
    }
  }
  public get countDown() {
    return this._countDown;
  }
  private _countDown: number = 0;
  @Output() private finishTimer = new EventEmitter<boolean>();
  @Output() private pausedAt = new EventEmitter();
  private timer;
  constructor() { }

  ngOnInit() {
  }
  startTimer() {
    this.timer = setInterval(() => {
      if (this.countDown <= 0) {
        this.finishTimer.emit(true);
        this.stopTimer();
      } else {
        --this._countDown;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
