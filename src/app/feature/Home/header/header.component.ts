
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  datos:string
  encrita:any
  login:boolean =  false
  constructor() { }

  ngOnInit(): void {
    this.login = localStorage.getItem('token') != null ? true: false

  }

}
