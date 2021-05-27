import { Component, ComponentFactoryResolver, NgModuleRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }
  // constructor(private resolver: ComponentFactoryResolver) {
  //   const factory = resolver.resolveComponentFactory(BasicosComponent);
  //   console.log('the factory:', factory);
  
  //   // Access the private ngModule property.
  //   const ngModuleRef: NgModuleRef<any> = (factory as any).ngModule;
  //   console.log('the module name:', ngModuleRef.instance.constructor.name)
  // }

  ngOnInit(): void {
  }

  guardar(miFormulario: NgForm){    
    // console.log('submit hecho');
    console.log(miFormulario.value);

  }

}
