import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route4Service } from '../../route4.service';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss'],
})
export class TimerLimitComponent implements OnInit, OnDestroy {
  public enteredLimit: number;
  private pauseTimer: boolean = true;
  public initTimer: boolean = false;
  public pauseLogs = [];
  private subscriptions: Subscription;
  constructor(
    private $route4Service: Route4Service
  ) { }

  ngOnInit() {
    this.subscriptions = this.$route4Service.finishTimer.subscribe((res => {
      this.finishTimer();
    }));
    this.subscriptions.add(this.$route4Service.pauseLog.subscribe((res => {
      this.pauseLogs.push(res)
    })));
  }

  onStartPause() {
    if (!this.initTimer) {
      this.initTimer = !!this.enteredLimit;
    }
    if (this.initTimer) {
      this.pauseTimer = !this.pauseTimer;
      this.$route4Service.isPaused.next(this.pauseTimer);
      this.$route4Service.countDownTimer.next(this.enteredLimit);
      this.$route4Service.stampLog.next({ time: new Date(), paused: this.pauseTimer });
      this.enteredLimit = undefined;
    }
  }

  resetTimer() {
    this.pauseLogs = [];
    this.finishTimer();
    this.$route4Service.resetTimer.next(true);
  }
  finishTimer() {
    this.initTimer = false;
    this.enteredLimit = undefined;
    this.pauseTimer = true;
  }
  ngOnDestroy() {
    this.subscriptions?.unsubscribe();
  }

}
