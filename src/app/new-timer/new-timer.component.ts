import { TimerService } from './../timer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-timer',
  templateUrl: './new-timer.component.html',
  styleUrls: ['./new-timer.component.css']
})
export class NewTimerComponent implements OnInit {

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  }

  newTimerConfig(title: string, workTime: number, shortBreakTime: number, longBreakTime: number | null, twoBreaks: boolean) {
    this.timerService.createTimer(title, workTime, shortBreakTime, longBreakTime, twoBreaks).subscribe((response: any) => {
      console.log(response);
    });
  }

}
