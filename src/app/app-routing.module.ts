import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsForUserComponent } from './components/albums-for-user/albums-for-user.component';

import { HomeComponent } from './components/home/home.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path:'user-search', component: UserSearchComponent },
  { path:'home', component: HomeComponent },
  { path:'users', component: UsersComponent },
  { path: 'albums-for-user/:id', component: AlbumsForUserComponent},
  { path: '', pathMatch: 'full', redirectTo:'/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
