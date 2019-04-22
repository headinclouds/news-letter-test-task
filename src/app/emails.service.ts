import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { shareReplay } from 'rxjs/operators';
const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
  private users: any;
  constructor(private http: HttpClient) { }


  getEmails() {
    let usersObservable$ = Observable.create((observer: Observer<any>) => {
      //return products if it was previously fetched
      if (this.users) {
        console.log('## returning existing users');
        observer.next(this.users);
        return observer.complete();

      }
      //Fetch products from REST API
      console.log('** users do not yet exist; fetching from rest api...');
      let headers = new Headers();
      this.http.get('./assets/users.json')
        .subscribe((response: any) => {
          console.log('Users Response: ', response);
          this.users = response;
          observer.next(response);
        }, (error) => {
          observer.error(error);
        });
    });
    return usersObservable$;
  }

}
