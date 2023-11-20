import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeUserComponent } from './feature/Home/home-user/home-user.component';

const MAIN = '/login';

const routes: Routes = [
  { path: '', redirectTo: MAIN, pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./feature/feature.module').then(i => i.FeatureModule),
  },
  {
    path: 'login',
    component: HomeUserComponent,
    loadChildren: () => import('./feature/auth/login.module').then(i => i.LoginModule),
  },
  { path: '**', pathMatch : 'full', redirectTo: MAIN }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
