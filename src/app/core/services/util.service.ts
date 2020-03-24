import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public open: boolean;
  constructor() {
    this.open = true;
  }

  toggle() {
    this.open = !this.open;
  }
}
