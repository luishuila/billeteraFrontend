import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './Home/home-user/home-user.component';
import { TokenGuard } from '../core/guard/token/token.guard';
const routes: Routes = [
  {
    path: 'users',
    component: HomeUserComponent,
     canActivate: [TokenGuard],
    loadChildren: () => import('./users/users.module').then(i => i.UsersModule),
  },


  {
    path: 'cuenta',
    component: HomeUserComponent,
    loadChildren: () => import('./cuenta/cuenta.module').then(i => i.CuentaModule),
  },
  {
    path: 'producto',
    component: HomeUserComponent,
    loadChildren: () => import('./producto/producto.module').then(i => i.ProductoModule),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {
}
