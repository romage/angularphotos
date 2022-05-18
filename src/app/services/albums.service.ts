import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getForUser(userId: string) {
    const url ='https://jsonplaceholder.typicode.com/albums?userId='+userId;
    return this.http.get<Album[]>(url);
  }
}
