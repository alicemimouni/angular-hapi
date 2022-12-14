
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {User} from "src/app/model/user";
import {retry, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'})
export class UserService {

  static apiURL = 'http://localhost:1234/users';
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json'
  });

    constructor(private http: HttpClient) {}

    // get all users
    getAll(): Observable<User[]> {
      return this.http.get<User[]>(UserService.apiURL);
    }

    // get one user by user_id
    getUser(user_id: any): Observable <User> {
      return this.http
        .get < User > (UserService.apiURL + '/' + user_id)
        .pipe(retry(1), catchError(this.handleError));
    }


    // create new user
  createUser(user: any): Observable <User> {
    let body = {}
    return this.http.post<User>(UserService.apiURL + '/new',
       body,
        { headers: this.httpOptions }).pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
