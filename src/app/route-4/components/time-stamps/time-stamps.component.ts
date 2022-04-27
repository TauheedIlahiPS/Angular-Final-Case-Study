import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route4Service } from '../../route4.service';

@Component({
  selector: 'app-time-stamps',
  templateUrl: './time-stamps.component.html',
  styleUrls: ['./time-stamps.component.scss'],
})
export class TimeStampsComponent implements OnInit, OnDestroy {
  public stampLogs = [];
  private subscriptions: Subscription;

  constructor(
    private $route4Service: Route4Service
  ) { }

  ngOnInit() {
    this.subscriptions = this.$route4Service.stampLog.subscribe((res => {
      this.stampLogs.push(res)
    }));
    this.subscriptions.add(this.$route4Service.resetTimer.subscribe((res => {
      this.stampLogs = [];
    })));
  }

  ngOnDestroy() {
    this.subscriptions?.unsubscribe();
  }
}
