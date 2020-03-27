import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-comment-presta',
  templateUrl: './comment-presta.component.html',
  styleUrls: ['./comment-presta.component.scss']
})
export class CommentPrestaComponent implements OnInit {

  public item$: Subject<Prestation>;
  constructor(private ps: PrestationsService) { }

  ngOnInit(): void {
    this.item$ = this.ps.item$;
  }

}
