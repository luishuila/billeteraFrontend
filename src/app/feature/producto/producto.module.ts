import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ProductoRoutingModule } from './productos-routing.module';
import { HomeModule } from '../Home/Home.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DialogComprarComponent } from './dialog-comprar/dialog-comprar.component';
import { PagaproductoComponent } from './pagaproducto/pagaproducto.component';
import { FacturaProductoComponent } from './factura-producto/factura-producto.component';
import { GuardaproductoComponent } from './guardaproducto/guardaproducto.component';
import { NgDropFilesDirective } from './shared/directives/ng-drop-files.directive';
import { EliminarProductosDialogComponent } from './eliminar-productos-dialog/eliminar-productos-dialog.component';
import { BuscarPipe } from './shared/pipe/buscar.pipe';



@NgModule({
  declarations: [
    ListaProductosComponent,
    DialogComprarComponent,
    PagaproductoComponent,
    FacturaProductoComponent,
    GuardaproductoComponent,
    NgDropFilesDirective,
    EliminarProductosDialogComponent,
    BuscarPipe
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
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
    
  ]
})
export class ProductoModule { }
