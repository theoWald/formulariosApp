import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Real war'],
      ['Crazy taxi']
    ], Validators.required )
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }

  campoNoValido(campo: string){
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    
  }

  borrar(index: number){
    this.favoritosArr.removeAt(index);
  }

  agregarFavorito(){
    if( this.nuevoFavorito.invalid ){
      return;
    }

    //EN JS TODO SE PASA POR REFERENCIA, COMO EL GETTER
    //ESTA APUNTADO A FAVORITOS, SI MODIFICAMOS EL GETTER
    //MODIFICAMOS FAVORITOS
    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required) );
    //Otra version de hacerlo
    //this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, Validators.required) );

    this.nuevoFavorito.reset();

  }

}
