import { Component, OnInit } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Secounds counter';
  public seconds: number;
  constructor(private timeService: TimeService){}
  ngOnInit() {
    this.timeService.seconds.subscribe(
      (data:number) => {
        this.seconds = data;
      }
    )
  }
}
