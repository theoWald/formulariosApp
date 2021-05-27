import { Component, ComponentFactoryResolver, NgModuleRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Piña',
    precio: 10,
    existencias: 10
  }

  constructor() { }


  ngOnInit(): void {
  }

  // guardar(miFormulario: NgForm){    
  //   // console.log('submit hecho');
  //   console.log(miFormulario.value);

  // }

  nombreValido(): boolean{
    return this.miFormulario?.controls.producto?.invalid 
            && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean{
    return this.miFormulario?.controls.precio?.invalid 
             && this.miFormulario?.controls.precio?.touched;
  }

  guardar(){    
    //console.log(this.miFormulario);

    console.log('Registro guardado');
    this.miFormulario.resetForm();
    // Por si quieres poner unos valores por defecto
    // this.miFormulario.resetForm({
    //   precio: 0,
    //   existencias: 0
    // });
  }


}
