import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import { LeftNavComponent } from './components/layout/left-nav/left-nav.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { AlbumsForUserComponent } from './components/albums-for-user/albums-for-user.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LeftNavComponent,
    FooterComponent,
    HeaderComponent,
    UserSearchComponent,
    HomeComponent,
    UsersComponent,
    UserItemComponent,
    AlbumsComponent,
    PhotosComponent,
    AlbumsForUserComponent,
    AlbumItemComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
