import { Component, OnInit } from '@angular/core';
import { menu, menuItem } from 'src/app/util/Menu.Util';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  menuItem:menu[];
  constructor() {}

  ngOnInit(): void {
    let data:any = JSON.parse( localStorage.getItem("data"))

    let array = [];
    for (const key of menuItem) {
         if(data != null){
            if (key.roles.includes(data.rol) || key.roles.includes("init") ) {
              if(localStorage.getItem('token') != null ){
             
                    array.push(key)
             
               }else{
                array.push(key)
             }
            }
         }else{

          if ( key.roles.includes("init") ) {      
                  array.push(key)
           }
         }
         
        
        this.menuItem =array

    }


  }

}
