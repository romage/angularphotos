import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotosForAlbum(albumId: string){
    
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
    return this.http.get<Photo[]>(url);
  }

}
