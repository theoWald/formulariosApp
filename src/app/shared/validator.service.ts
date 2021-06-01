import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  // nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  // emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  // constructor() { }

  // noPuedeSerStrider( control: FormControl ){
  //   //console.log(control.value);
  //   const valor = control.value?.trim().toLowerCase();
  //   //console.log(valor);
  //   //En una validación al devolver un objeto decimos que pasa algo
  //   if(valor === 'strider'){
  //     // ERROR!!
  //     return { noStrider: true }
  //   }

  //   //En una validación quiere decir que todo va bien
  //   return null;
  // }
}
