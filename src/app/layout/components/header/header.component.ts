import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public version$: Subject<number>;
  constructor(private u: UtilService) { }

  ngOnInit(): void {
    this.version$ = this.u.version$;
    this.title = 'Nikki\'s App';
  }


}
