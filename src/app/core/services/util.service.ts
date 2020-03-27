import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public open: boolean;
  public version$: BehaviorSubject<number> = new BehaviorSubject(1);
  constructor() {
    this.open = true;
  }

  public toggle() {
    this.open = !this.open;
  }

  public incrementVersion() {
    this.version$.next(this.version$.value + 1);
  }
}
