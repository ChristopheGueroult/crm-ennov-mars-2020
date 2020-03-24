import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-page-list-prestations',
  templateUrl: './page-list-prestations.component.html',
  styleUrls: ['./page-list-prestations.component.scss']
})
export class PageListPrestationsComponent implements OnInit {
  public collection: Prestation[];
  constructor(private ps: PrestationsService) { }

  ngOnInit(): void {
    this.ps.collection.subscribe((datas) => {
      this.collection = datas;
      console.log(this.collection);
    });

  }

}
