import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './login-routing.module';
import { RegistraComponent } from './registra/registra.component';
import { ReestablecePasswordComponent } from './reestablece-password/reestablece-password.component';
import { NuevapasswordComponent } from './nuevapassword/nuevapassword.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistraComponent,
    ReestablecePasswordComponent,
    NuevapasswordComponent
  ],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    LoginRoutingModule
  ],
  providers:[
    HttpClientModule
  ]
})
export class LoginModule {
}
