import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Album } from 'src/app/interfaces/album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-albums-for-user',
  templateUrl: './albums-for-user.component.html',
  styleUrls: ['./albums-for-user.component.css']
})
export class AlbumsForUserComponent implements OnInit {

  albums: Observable<Album[]> | null = null;
  name: string | null = null;

  constructor(private albumsService: AlbumsService, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this._route.paramMap.subscribe((params: ParamMap) =>  {
      this.name = params.get('name');
      this.getAlbumsForUser(params.get('id')?.toString()??'0');
    });

  }

  getAlbumsForUser(userId: string) {
    if(userId!='0'){
      this.albums = this.albumsService.getForUser(userId);
    }

  }

}
