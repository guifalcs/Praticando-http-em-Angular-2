import { CursosFormComponent } from './cursos/cursos-form/cursos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';

const routes: Routes = [
  {
  path: '', pathMatch: 'full', redirectTo: 'busca-reativa'
  },

  {
  path: 'cursos',
  loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
