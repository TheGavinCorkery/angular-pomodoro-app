import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private WebRequestService: WebRequestService) { }
  createTimer(title: string, workTime: number, shortBreakTime: number, longBreakTime: number | null, twoBreaks: boolean) {
    //Send request to create a Timer Profile
    return this.WebRequestService.post('list', {title, workTime, shortBreakTime, longBreakTime, twoBreaks});
  }
}
