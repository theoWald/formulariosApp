import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
    edad: 24
  }

  constructor( private fb: FormBuilder) { }
  
  ngOnInit(): void {
    // this.miFormulario.setValue(this.persona);
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    });

    // this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {
    //   console.log(newValue)
    // })

    // this.miFormulario.valueChanges.subscribe( form => {
    //   //console.log(form)
    //   delete form.condiciones;
    //   this.persona = form;
    // })

    this.miFormulario.valueChanges.subscribe( ({condiciones, ...resto}) => {
      //console.log(form)
      ///delete form.condiciones;
      this.persona = resto;
    })

  }

  guardar() {
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;
    console.log(formValue);

    this.persona = formValue;
  }

}
