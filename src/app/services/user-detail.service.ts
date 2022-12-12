import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "src/app/model/user";
import {sprintf} from "sprintf-js";

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  static apiURL = 'http://localhost:1234/getUsers/user_id';
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json'
  });

    constructor(private http: HttpClient) {
    }

    getUserById(user_id: number): Observable<Array<User>> {
      return this.http.get<Array<User>>(
        sprintf(UserDetailService.apiURL, user_id)
      );
    }


}
