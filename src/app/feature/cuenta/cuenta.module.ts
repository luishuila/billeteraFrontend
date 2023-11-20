import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecargacuentaComponent } from './recargacuenta/recargacuenta.component';
import { CuentaRoutingModule } from './cuenta-routing.module';
import { HomeModule } from '../Home/Home.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ConsultarSaldoComponent } from './consultar-saldo/consultar-saldo.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    RecargacuentaComponent,
    ConsultarSaldoComponent
  ],
  imports: [
    CommonModule,
    CuentaRoutingModule,
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
    MatPaginatorModule,
    MatCardModule
  ]
})
export class CuentaModule { }
