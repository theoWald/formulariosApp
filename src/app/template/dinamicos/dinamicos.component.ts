import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string,
  favoritos: Favorito[],
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('formDinamico') formDinamico!: NgForm;

  persona: Persona = {
    nombre: 'Jean Leon',
    favoritos: [
      { id: 1, nombre: 'Need for Speed' },
      { id: 2, nombre: 'Ratchet and Clank' }
    ]
  };

  nuevoJuego: string = '';

  constructor() { }


  guardar(){
    console.log("Guardar informacion");
    console.log(this.formDinamico);
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

  agregar(){
    // Su version
    // const nuevoFavorito: Favorito = {
    //   id: this.persona.favoritos.length + 1,
    //   nombre: this.nuevoJuego
    // };
    // this.persona.favoritos.push(nuevoFavorito);
    this.persona.favoritos.push({id: (this.persona.favoritos.length + 1), nombre: this.nuevoJuego });
  }

}
