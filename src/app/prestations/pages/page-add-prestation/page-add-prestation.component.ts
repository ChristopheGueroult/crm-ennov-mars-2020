import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
  public titre: string;
  public soustitre: string;
  constructor(
    private ps: PrestationsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((datas) => {
      this.titre = datas.title;
      this.soustitre = datas.subtitle;
    });

  }

  public add(item: Prestation) {
    this.ps.add(item).subscribe((res) => {
      // traitment res api
      // this.router.navigate(['prestations']);
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }


}
