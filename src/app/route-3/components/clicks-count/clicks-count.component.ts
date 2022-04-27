import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicks-count',
  templateUrl: './clicks-count.component.html',
  styleUrls: ['./clicks-count.component.scss'],
})
export class ClicksCountComponent implements OnInit {
  @Input() set countLogs(value) {
    this._countLogs = value;
  }
  public get countLogs() {
    return this._countLogs;
  }
  private _countLogs;
  constructor() { }

  ngOnInit() { }
}
