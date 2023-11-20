import { usuarios } from "src/app/feature/users/shared/Models/Users.Models";


export class cuentaUsuarios implements usuarios {
  id: string;
  nombre: string;
  email: string;
  rol:string;
  documento:number;
  celular:string;
  cuentum:cuentaResponse
}

export interface  cuentaIdResponse {
  id: string;
  saldo:number;
  createdAt:Date;
}
export interface cuentaInResponse {
  msg:string ;
  usuarios: cuentaUsuarios ;
}
export class cuentaResponse {
  msg:string ;
  usuarios: cuentaUsuarios ;
  constructor(
    msg:string,
    usuarios:cuentaUsuarios
    
    ) {
    this.msg = msg;
    this.usuarios = usuarios
  }
}

export interface cuenta {
  documento: number;
  celular: string;
  saldo:number;
}


export class cuentaCreateModels {
  documento: number;
  celular: string;
  saldo:number;
  constructor(
    documento:number,
    celular:string,
    saldo: number
    
    ) {
    this.celular = celular;
    this.documento = documento;
    this.saldo = saldo;
  }
}

export class cuentaConsultaSaldo {
  documento: number;
  celular: string;
  constructor(
    documento:number,
    celular:string
    
    ) {
    this.celular = celular;
    this.documento = documento;
  }
}