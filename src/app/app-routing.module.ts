import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  // { path: 'quiensoy', component:QuiensoyComponent },
  // {
  //   path: 'juegos', component: JuegosComponent, children: [
  //     { path: 'tateti', component: TatetiComponent }
  //     ]
  // },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
