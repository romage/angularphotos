import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { }

  getAllUsers() {
    const url ='https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(url);
  }
}
