// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IhebComponent } from './iheb/iheb.component';
import { IhebbComponent } from './ihebb/ihebb.component';

const routes: Routes = [
  { path: 'iheb', component: IhebComponent },
  { path: 'ihebb', component: IhebbComponent },
  { path: '', redirectTo: '/iheb', pathMatch: 'full' }, // Redirige vers 'iheb' par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
