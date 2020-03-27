import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Subject } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-detail-presta',
  templateUrl: './detail-presta.component.html',
  styleUrls: ['./detail-presta.component.scss']
})
export class DetailPrestaComponent implements OnInit {
  public item$: Subject<Prestation>;
  constructor(private ps: PrestationsService) { }

  ngOnInit(): void {
    this.item$ = this.ps.item$;
  }

}
