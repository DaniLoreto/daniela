import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunasComponent } from './components/comunas/comunas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { YearsComponent } from './components/years/years.component';
import { ClasesComponent } from './udemy/clases/clases.component';

const routes: Routes = [
  {path:'' , redirectTo:'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},

  {path:'formulario' ,component:FormularioComponent},
  {path:'modelos', component:ModelosComponent},
  {path:'years', component:YearsComponent},
  {path:'marcas', component:MarcasComponent},


  {path:'comunas', component:ComunasComponent},
  {path:'ofertas', component:OfertasComponent},
  {path:'udemy', component:ClasesComponent},

  // {path:'seguimiento/:id', component:SeguimientoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, FormularioComponent, OfertasComponent,SeguimientoComponent, ComunasComponent,YearsComponent,ClasesComponent, MarcasComponent, ModelosComponent]

