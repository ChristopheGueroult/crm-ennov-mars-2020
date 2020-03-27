import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';
import { StatePrestation } from 'src/app/shared/enums/state-prestation.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Observable<Prestation[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    // this.collection = this.http.get<Prestation[]>(`${this.urlApi}prestations?_expand=client`).pipe(
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
  public changeState(item: Prestation, state: StatePrestation) {
    const newItem = new Prestation({ ...item });
    newItem.state = state;
    return this.update(newItem);
  }

  // update item
  update(item: Prestation) {
    return this.http.patch<Prestation>(`${this.urlApi}prestations/${item.id}`, item).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // add item
  public add(item: Prestation) {
    return this.http.post<Prestation>(`${this.urlApi}prestations`, item).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  // delete item
  // add item
  public delete(item: Prestation) {
    return this.http.delete<Prestation>(`${this.urlApi}prestations/${item.id}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // get item by id
}
