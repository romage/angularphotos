import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosForAlbumComponent } from './photos-for-album.component';

describe('PhotosForAlbumComponent', () => {
  let component: PhotosForAlbumComponent;
  let fixture: ComponentFixture<PhotosForAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosForAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosForAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
