import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatePrestation } from 'src/app/shared/enums/state-prestation.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Observable<Prestation[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Prestation[]>(`${this.urlApi}prestations`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
  }

  // get collection
  public get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  // set collection
  public set collection(col: Observable<Prestation[]>) {
    this.pCollection = col;
  }

  // update item state
  changeState(item: Prestation, state: StatePrestation) {
    const newItem = new Prestation({...item});
    newItem.state = state;
    return this.update(newItem);
  }

  // update item
  update(item: Prestation) {
    return this.http.patch<Prestation>(`${this.urlApi}prestations/${item.id}`, item);
  }

  // add item

  // delete item

  // get item by id
}
