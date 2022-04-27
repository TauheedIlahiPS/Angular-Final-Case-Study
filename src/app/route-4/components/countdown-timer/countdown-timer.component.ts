import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route4Service } from '../../route4.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription;
  public countDown: number = 0;

  private timer;
  constructor(
    private $route4Service: Route4Service
  ) { }

  ngOnInit() {
    this.subscriptions = this.$route4Service.countDownTimer.subscribe((res => {
      if (res) {
        if (this.countDown <= 0 && res > 0) {
          this.countDown = res;
        }
      }
    }));
    this.subscriptions.add(this.$route4Service.isPaused.subscribe(res => {
      if (res) {
        if (this.countDown > 0) {
          this.$route4Service.pauseLog.next(this.countDown);
        }
        this.stopTimer();
      } else {
        this.startTimer();
      }
    }));
    this.subscriptions.add(this.$route4Service.resetTimer.subscribe(res => {
      this.countDown = 0;
      this.stopTimer();
    }));
  }
  startTimer() {
    this.timer = setInterval(() => {
      if (this.countDown <= 0) {
        this.$route4Service.finishTimer.next(true);
        this.stopTimer();
      } else {
        --this.countDown;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    this.subscriptions?.unsubscribe();
  }
}
