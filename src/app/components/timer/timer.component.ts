import { Component, OnInit } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  private subscription!: Subscription;
  
  public minutes = 30;
  public seconds = 0;

  private countdown!: CountdownComponent;

  public config = {
    leftTime: 90,
    format: 'mm:ss'
  }

  pauseTimer(cd: any) {
    console.log("Paused")
    cd.pause()
  }

  resumeTimer(cd: any) {
    cd.resume()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
