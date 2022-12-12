
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "src/app/model/user";
import {sprintf} from "sprintf-js";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  static apiURL = 'http://localhost:1234/getUsers';
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json'
  });

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<User[]> {
      return this.http.get<User[]>(UserService.apiURL);
    }

    getUserById(user_id: number): Observable<Array<User>> {
      return this.http.get<Array<User>>(
        sprintf(UserService.apiURL, user_id)
      );
    }

    
}
