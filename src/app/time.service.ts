import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  public seconds = Observable.create(observer => {
    let count = 0;
    setInterval(() => {
      observer.next(count);
      count++;
    }, 1000)
  });

  public minutes = Observable.create(observer => {
    let count = 1;
    setInterval(() => {
      observer.next(count);
      count++;
    }, 60000)
  });
}
