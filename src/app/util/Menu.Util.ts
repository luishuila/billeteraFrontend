

type admin = "admin"|"users"|"init"
export interface menu {
    url:string;
    nameMenu:string;
    roles:string|null|admin[];
    iconos:string;
    idItem:string,
  }
  
  export const menuItem:menu[] = [
    {url:"../users",nameMenu:"Home",roles:["users","admin"],iconos:"" , idItem:"nav-bar__btn-Home"},
    {url:"../users/list",nameMenu:"Lista usuarios",roles:["admin"],iconos:"" , idItem:"nav-bar__btn-list-user"},
    {url:"../users/create",nameMenu:"Crear usuarios",roles:["admin"],iconos:"",idItem:"nav-bar__btn-create-user"},
    {url:"../cuenta/recargacuenta",nameMenu:"Recarga cuenta",roles:["admin"],iconos:"" , idItem:"nav-bar__btn-cuenta"},
    {url:"../cuenta/consultaSaldo",nameMenu:"Consulta Saldo",roles:["admin","users","init"],iconos:"" , idItem:"nav-bar__btn-cuenta"},  
    {url:"../producto/listaproductos",nameMenu:"Lista Productos",roles:["admin","users","init"],iconos:"" , idItem:"nav-bar__btn-productos"},
    {url:"../producto/guarda",nameMenu:"Guarda Productos",roles:["admin"],iconos:"" , idItem:"nav-bar__btn-guarda"},
  ]
