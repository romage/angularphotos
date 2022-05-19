import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsForUserComponent } from './components/albums/albums-for-user/albums-for-user.component';
import { AlbumsComponent } from './components/albums/albums/albums.component';
import { AllUsersComponent } from './components/users/all-users/all-users.component';

import { HomeComponent } from './components/home/home.component';
import { PhotosComponent } from './components/photos/photos/photos.component';
import { UserSearchComponent } from './components/users/user-search/user-search.component';
import { UsersComponent } from './components/users/users/users.component';
import { PhotosForAlbumComponent } from './components/photos/photos-for-album/photos-for-album.component';

const routes: Routes = [
  { path:'user-search', component: UserSearchComponent },
  { path:'home', component: HomeComponent },
  { path:'users', component: UsersComponent },
  { path:'albums', component: AlbumsComponent },
  { path:'photos', component: PhotosComponent },
  
  { path:'all-users', component: AllUsersComponent },
  { path: 'albums-for-user/:id/:name', component: AlbumsForUserComponent},
  { path: 'photos-for-album/:albumId', component: PhotosForAlbumComponent},
  { path: '', pathMatch: 'full', redirectTo:'/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
