import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeUserComponent } from '../Home/home-user/home-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersDeleteDialogComponent } from './users-delete-dialog/users-delete-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../Home/Home.module';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    HomeUserComponent,
    ListUsersComponent,
    UsersDeleteDialogComponent,
    CreateUserComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HomeModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers:[

  ]
})
export class UsersModule {

}
