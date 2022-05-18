import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsForUserComponent } from './albums-for-user.component';

describe('AlbumsForUserComponent', () => {
  let component: AlbumsForUserComponent;
  let fixture: ComponentFixture<AlbumsForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsForUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
