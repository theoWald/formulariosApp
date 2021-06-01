import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  // TODO: Temporal
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerStrider( control: FormControl ){
    //console.log(control.value);
    const valor = control.value?.trim().toLowerCase();
    //console.log(valor);
    //En una validación al devolver un objeto decimos que pasa algo
    if(valor === 'strider'){
      // ERROR!!
      return { noStrider: true }
    }

    //En una validación quiere decir que todo va bien
    return null;
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username: ['', [Validators.required, this.noPuedeSerStrider]]

  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Juan Luis',
      email: 'test4@test.com',
      username: 'juanluar_93'
    })
  }

  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
