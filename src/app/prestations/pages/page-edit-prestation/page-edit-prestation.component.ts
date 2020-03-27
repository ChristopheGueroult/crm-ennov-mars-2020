import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {
  public item$: Observable<Prestation>;
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
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.ps.getItemById(params.get('id'))
      )
    );
  }

  public update(item: Prestation) {
    this.ps.update(item).subscribe((res) => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }
}
