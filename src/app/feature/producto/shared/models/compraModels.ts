export class compra  {
  idProducto:number;
  cantidad:number;
  documento:number;
  celular:string;
}

export class compraModels {
  idProducto:number;
  cantidad:number;
  documento:number;
  celular:string;
  constructor(
    idProducto:number,
    cantidad:number,
    documento:number,
    celular:string = null
    ) {
    this.idProducto = idProducto;
    this.celular = celular;
    this.documento = documento;
    this.cantidad = cantidad;
  }
}

export class detallesCompra  {
      idDetallesCompra:number;
      documento:number;
      codigo:string;
}

export class detallesCompraModels {
  idDetallesCompra:number;
  documento:number;
  codigo:string;
  constructor(
    idDetallesCompra:number,
    documento:number,
    codigo:string
    ) {
    this.idDetallesCompra = idDetallesCompra;
    this.documento = documento;
    this.codigo = codigo;
  }
}