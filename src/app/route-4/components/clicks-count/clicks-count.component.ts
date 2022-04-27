import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route4Service } from '../../route4.service';

@Component({
  selector: 'app-clicks-count',
  templateUrl: './clicks-count.component.html',
  styleUrls: ['./clicks-count.component.scss'],
})
export class ClicksCountComponent implements OnInit, OnDestroy {
  public countLogs = { start: 0, pause: 0 };
  private subscriptions: Subscription;

  constructor(
    private $route4Service: Route4Service
  ) { }

  ngOnInit() {
    this.subscriptions = this.$route4Service.stampLog.subscribe(((res: any) => {
      if (res.paused) {
        this.countLogs.pause++;
      }
      else {
        this.countLogs.start++;
      }
    }));
    this.subscriptions.add(this.$route4Service.resetTimer.subscribe((res => {
      this.countLogs = { start: 0, pause: 0 };
    })));
  }

  ngOnDestroy() {
    this.subscriptions?.unsubscribe();
  }
}
