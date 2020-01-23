import { Component, OnInit } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Secounds counter';
  public sec: number;
  public min: number;

  constructor(private timeService: TimeService){}
  ngOnInit() {
    this.timeService.seconds.subscribe(
      (data:number) => {
        this.sec = data;
      }
    );

    this.timeService.minutes.subscribe(
      (data: number) => {
        this.min = data;
        console.log('data', data);
      }
    );
  }
}
