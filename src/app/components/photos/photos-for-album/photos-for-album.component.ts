import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/interfaces/photo';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos-for-album',
  templateUrl: './photos-for-album.component.html',
  styleUrls: ['./photos-for-album.component.css']
})
export class PhotosForAlbumComponent implements OnInit {

  photos: Observable<Photo[]> | null = null;


  constructor(private photosService: PhotosService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) =>  {
      this.getPhotosForAlbum(params.get('albumId')?.toString()??'0');
    });
  }
  getPhotosForAlbum(albumId: string) {
    if(albumId!='0'){
      this.photos = this.photosService.getPhotosForAlbum(albumId);
    }
  
  }

}


 
