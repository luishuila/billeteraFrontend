import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { UsersService } from '../shared/services/users/users.service';
@Component({
  selector: 'app-UsersDeleteDialogrComponent',
  templateUrl: './users-delete-dialog.component.html',
  styleUrls: ['./users-delete-dialog.component.scss']
})
export class UsersDeleteDialogComponent implements OnInit {
  spinner: boolean = false;
  constructor(private _usersService: UsersService, public dialogRef: MatDialogRef<UsersDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

  deleteUsers() {
    this._usersService.deleteUser(this.data.id).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: data.msg,
        showConfirmButton: false,
        timer: 1500
      })
      this.dialogRef.close();
    }, (error) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Error`,
        html: ` ${error.error.msg} `,
        showConfirmButton: false,
        timer: 2000
      })
      this.dialogRef.close();
      this.spinner = false;
    })
  }
}
