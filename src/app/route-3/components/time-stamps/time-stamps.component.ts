import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-stamps',
  templateUrl: './time-stamps.component.html',
  styleUrls: ['./time-stamps.component.scss'],
})
export class TimeStampsComponent implements OnInit {
  @Input() set stampLogs(value) {
    this._stampLogs = value;
  }
  public get stampLogs() {
    return this._stampLogs;
  }
  private _stampLogs = [];

  constructor() { }

  ngOnInit() { }
}
