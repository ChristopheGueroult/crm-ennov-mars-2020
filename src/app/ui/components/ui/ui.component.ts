import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  public faBars = faBars;
  public open: boolean;
  constructor() { }

  ngOnInit(): void {
    this.open = true;
  }

  toggle() {
    this.open = !this.open;
  }

}
