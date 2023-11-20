
export interface usuarios {
  id: string;
  nombre: string;
  email: string;
  rol:string;
  documento:number;
  celular:string;
}

export interface usuariosResponse {
  data: usuarios[];
  total: number;
  total_pages: number;
  support: string;
  page: string;
  per_page: number;
}
export interface usuariosCreate {
  nombre: string;
  email: string;
  password: string;
  rol:string;
  documento:number;
  celular:string;
}
export class usuariosModels {
  id: string;
  nombre: string;
  email: string;
  rol:string;
  documento:number;
  celular:string;

  constructor(
    id: string,
    nombre: string,
    documento:number,
    email: string,
    celular:string,
    rol:string = null,
    ) {
      this.id =id;
      this.nombre = nombre;
      this.email = email;
      this.rol = rol
      this.celular = celular;
      this.documento = documento
  }

}

export class usuariosCreateModels {
  nombre: string;
  email: string;
  password: string;
  rol:string;
  documento:number;
  celular:string;
  constructor(nombre: string,
    documento:number,
    email: string,
    password: string,
    celular:string,
    rol:string = null,
    
    ) {

    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.rol = rol
    this.celular = celular;
    this.documento = documento
  }

}
