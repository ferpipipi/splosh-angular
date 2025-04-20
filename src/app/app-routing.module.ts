import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Importa tu componente Home
import { LoginComponent } from './login/login.component';  // Importa tu componente Login
import { SeccionComponent } from './seccion/seccion.component';  // Importa tu componente Sección

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'seccion', component: SeccionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
