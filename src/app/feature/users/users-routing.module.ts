import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  { path: 'list', component: ListUsersComponent },
  { path: 'create', component: CreateUserComponent },
  { path: '**', pathMatch : 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
