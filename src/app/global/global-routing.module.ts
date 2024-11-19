// admin-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgbaraComponent } from './componentes/agbara/agbara.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { GraduacoesComponent } from './componentes/graduacoes/graduacoes.component';
import { CapoeiraComponent } from './componentes/historia/capoeira/capoeira.component';
import { ContraMestreComponent } from './componentes/historia/contra-mestre/contra-mestre.component';
import { GrupoComponent } from './componentes/historia/grupo/grupo.component';
import { InstrumentosComponent } from './componentes/historia/instrumentos/instrumentos.component';
import { MestreComponent } from './componentes/historia/mestre/mestre.component';
import { ProfessorComponent } from './componentes/historia/professor/professor.component';
import { LocaisTreinoComponent } from './componentes/locais-treino/locais-treino.component';
import { LojaComponent } from './componentes/loja/loja.component';
import { VideosComponent } from './componentes/videos/videos.component';

import { GlobalComponent } from './global.component';

const routes: Routes = [


 // { path: '', component: GlobalComponent },
  { path: '', redirectTo: 'agbara', pathMatch: 'full' },

  { path: 'agbara', component: AgbaraComponent },
  {
    path:'historia',
    children:[
      { path: 'capoeira', component: CapoeiraComponent },
      { path: 'grupo', component: GrupoComponent },
      { path: 'mestre', component: MestreComponent },
      { path: 'contra-mestre', component: ContraMestreComponent },
      { path: 'professor', component: ProfessorComponent },
      { path: 'instrumentacao', component: InstrumentosComponent },
    ]
  },
 /* { path: 'capoeira', component: CapoeiraComponent },
  { path: 'grupo', component: GrupoComponent },
  { path: 'mestre', component: MestreComponent },
  { path: 'contra-mestre', component: ContraMestreComponent },
  { path: 'professor', component: ProfessorComponent },*/

  { path: 'graduacao', component: GraduacoesComponent },
  { path: 'locais-de-treino', component: LocaisTreinoComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'contactos', component: ContactosComponent },

  { path: '**', redirectTo: 'agbara', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
