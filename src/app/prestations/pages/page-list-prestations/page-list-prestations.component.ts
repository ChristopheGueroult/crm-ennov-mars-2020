import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { StatePrestation } from 'src/app/shared/enums/state-prestation.enum';

@Component({
  selector: 'app-page-list-prestations',
  templateUrl: './page-list-prestations.component.html',
  styleUrls: ['./page-list-prestations.component.scss']
})
export class PageListPrestationsComponent implements OnInit {
  public collection: Prestation[];
  public headers: string[];
  // public states = StatePrestation;
  public states = Object.values(StatePrestation);
  constructor(private ps: PrestationsService) { }

  ngOnInit(): void {
    this.ps.collection.subscribe((datas) => {
      this.collection = datas;
      console.log(this.collection);
    });
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  changeState(item: Prestation, e) {
    console.log(e.target.value);
    this.ps.changeState(item, e.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

}
