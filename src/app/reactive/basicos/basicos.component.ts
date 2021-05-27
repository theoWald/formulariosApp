import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {


  // miFormulario: FormGroup = new FormGroup({
  //   'nombre'     : new FormControl('Orange'),
  //   'precio'     : new FormControl(3),
  //   'existencias': new FormControl(24)
  // });


  miFormulario: FormGroup = this.fb.group({
    nombre: ['Birne'],
    precio: [ 0 ],
    existencias: [ 0 ]
  })


  constructor( private fb: FormBuilder) { }

}
