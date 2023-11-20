
import {Component, OnInit  ,ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from '../../auth/shared/services/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  login:boolean =  false
  constructor(
    public _loginService :LoginService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('token') != null ? true: false
  }


  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild("sidenavcontainer")sidenav :any
  panelOpenState:boolean = false
  drawer
  someMethod() {
    this.trigger.openMenu();
  }
  matMenuTriggerFor:Observable<any>

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    logout(){
      alert("sali")
    }
}
