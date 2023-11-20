import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(value: [], args: any): any {

    if(args.length>0){
      const txt = args.toLowerCase()
      let datos
      datos  = value.filter((datos:any)=>{
      return datos.nombre.toLowerCase().includes(txt)
          ||datos.precio.toLowerCase().includes(txt)

       }

      )
   
      return datos
    }

    return value;
  }

}
