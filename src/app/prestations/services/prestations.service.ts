import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';
import { StatePrestation } from 'src/app/shared/enums/state-prestation.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Observable<Prestation[]>;
  private urlApi = environment.urlApi;
  public item$: BehaviorSubject<Prestation> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
    // this.collection = this.http.get<Prestation[]>(`${this.urlApi}prestations?_expand=client`).pipe(
    this.collection = this.http.get<Prestation[]>(`${this.urlApi}prestations`).pipe(
      map((tab) => {
        this.item$.next(tab[0]);
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
  update(item: Prestation): Observable<Prestation> {
    return this.http.patch<Prestation>(`${this.urlApi}prestations/${item.id}`, item).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // add item
  public add(item: Prestation): Observable<Prestation> {
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
  public delete(item: Prestation): Observable<Prestation> {
    return this.http.delete<Prestation>(`${this.urlApi}prestations/${item.id}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // get item by id
  public getItemById(id: string): Observable<Prestation> {
    return this.http.get<Prestation>(`${this.urlApi}prestations/${id}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
}
