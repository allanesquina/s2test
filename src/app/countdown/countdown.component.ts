import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  @Output() openEndModal = new EventEmitter();

  private currentTime: String;
  private interval: String;

  constructor() { }

  ngOnInit() {
    // let duration = 60 * 2;
    let duration = 6 * 1;
    this.start(duration);
  }

  start(duration) {
    let start = Date.now(),
        diff,
        minutes,
        seconds;
    const timer = () => {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        this.currentTime = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
            this.stop();
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    this.interval = setInterval(timer, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.openEndModal.emit();
  }
}
