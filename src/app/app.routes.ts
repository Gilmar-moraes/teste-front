import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlbumListComponent } from './album-list/album-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'albums', component: AlbumListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
