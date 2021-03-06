import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../interfaces/album';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() album: Album | null =null;

  constructor() { }

  ngOnInit(): void {
  }

}
