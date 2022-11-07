import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'user', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user/:id', component: AddUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
