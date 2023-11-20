import { Component, OnInit, ViewChild } from '@angular/core';
import {usuarios, usuariosModels, usuariosResponse } from '../shared/Models/Users.Models';
import { MatDialog } from '@angular/material/dialog';
import { UsersDeleteDialogComponent } from '../users-delete-dialog/users-delete-dialog.component';
import Swal from 'sweetalert2';
import { UsersService } from '../shared/services/users/users.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'email', 'roles', "_id"];
  dataSource: MatTableDataSource<usuariosModels>;
  rol = "admin"
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  valida:boolean =  false
  spinner:boolean = false;
  totalPages:number = 1;
  page:number = 1;
  inputfilter = "";
  id:any = "";
  constructor(private _usersService: UsersService,public dialog: MatDialog) {

  }

  ngOnInit() {
    let data:any = JSON.parse( localStorage.getItem("data"))
    this.id = data.id
    
      this.getUsers()
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getUsers() {
    this.spinner = false
    this._usersService.getUsers().subscribe((data: usuariosResponse) => {
      
     let  usersItem = data.data.map(data => {
        return new usuariosModels(data.id,data.nombre,data.documento,data.email,data.celular,data.rol)
      })
      this.dataSource = new MatTableDataSource(usersItem);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.spinner = true;
    }, (error)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Error`,
        html: ` ${error.error.error} `,
        showConfirmButton: false,
        timer: 2000
      })
      this.spinner = true;
    })
  }

  userdDelete(users:usuarios){
    this.dialog.open(UsersDeleteDialogComponent, {
      width: '250px',
      data:users
    });
  }

}
