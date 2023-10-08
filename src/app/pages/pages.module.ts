import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovedadesComponent } from './novedades/novedades.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ElectricidadComponent } from './electricidad/electricidad.component';
import { ProgramacionComponent } from './programacion/programacion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { BlogComponent } from './blog/blog.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SOSComponent } from './sos/sos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HistoriaComponent } from './historia/historia.component';
import { GestionComponent } from './gestion/gestion.component';



@NgModule({
  declarations: [
    NovedadesComponent,
    EspecialidadesComponent,
    ElectricidadComponent,
    ProgramacionComponent,
    NosotrosComponent,
    BlogComponent,
    ServiciosComponent,
    ContactoComponent,
    SOSComponent,
    GaleriaComponent,
    HistoriaComponent,
    GestionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
