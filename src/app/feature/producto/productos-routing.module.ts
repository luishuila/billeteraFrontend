import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { PagaproductoComponent } from './pagaproducto/pagaproducto.component';
import { GuardaproductoComponent } from './guardaproducto/guardaproducto.component';


const routes: Routes = [

  { path: 'listaproductos', component: ListaProductosComponent },
  { path: 'paga/:id', component: PagaproductoComponent },
  {path: 'guarda', component:GuardaproductoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoRoutingModule {
}
