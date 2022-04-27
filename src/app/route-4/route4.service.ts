import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class Route4Service {
  public countDownTimer = new Subject<number>();
  public isPaused = new Subject<boolean>();
  public finishTimer = new Subject<boolean>();
  public resetTimer = new Subject<boolean>();
  public pauseLog = new Subject();
  public stampLog = new Subject();
  constructor() { }
}
