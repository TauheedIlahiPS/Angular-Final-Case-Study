import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerLimitComponent } from './components/timer-limit/timer-limit.component';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss'],
})
export class Route3Component implements OnInit {
  @ViewChild('timerLimit') timerLimitComp: TimerLimitComponent;
  public countDownLimit: number;
  public stampLogs = [];
  public countLogs = { start: 0, pause: 0 };
  constructor() { }
  ngOnInit() { }

  setTimeLimit(event) {
    if (event.resetTimer) {
      this.stampLogs = [];
      this.countLogs = { start: 0, pause: 0 };
    }
    this.countDownLimit = event;
  }
  onPauseTimer(event) {
    if (event.paused) {
      this.timerLimitComp.pauseLogs.push(event.count);
      this.countLogs.pause += 1;
    } else {
      this.countLogs.start += 1;
    }
    this.stampLogs.push({ time: new Date(), ...event });
  }
  onFinishTimer(event) {
    this.timerLimitComp.finishTimer();
  }
}
