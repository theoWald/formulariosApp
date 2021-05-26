import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'template',
    loadChildren: () => import('./template/template-routing.module').then(m => m.TemplateRoutingModule)
  },
  {
    path:'reactive',
    loadChildren: () => import('./reactive/reactive-routing.module').then(m => m.ReactiveRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
