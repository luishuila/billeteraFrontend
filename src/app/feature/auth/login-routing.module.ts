import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistraComponent } from './registra/registra.component';
import { ReestablecePasswordComponent } from './reestablece-password/reestablece-password.component';
import { NuevapasswordComponent } from './nuevapassword/nuevapassword.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registra', component: RegistraComponent },
  {path:'resetpassword',component:ReestablecePasswordComponent},
  {path:'resetpassword/:id',component:NuevapasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {
}
