import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolListComponent } from './project/rol-list/rol-list.component';
import { RolFormComponent } from './project/rol-form/rol-form.component';

const routes: Routes = [
  { path: 'rol-list', component: RolListComponent },
  { path: 'rol-form', component: RolFormComponent },
  { path: 'rol-form/:codigo', component: RolFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolRoutingModule { }
