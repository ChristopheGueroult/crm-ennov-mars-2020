import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private u: UtilService) { }

  ngOnInit(): void {
  }

  public incrementVersion() {
    this.u.incrementVersion();
  }

}
