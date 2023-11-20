import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecargacuentaComponent } from './recargacuenta/recargacuenta.component';
import { ConsultarSaldoComponent } from './consultar-saldo/consultar-saldo.component';


const routes: Routes = [

  { path: 'recargacuenta', component: RecargacuentaComponent },
  { path: 'consultaSaldo', component: ConsultarSaldoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaRoutingModule {
}
