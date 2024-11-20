import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes principais
import { AgbaraComponent } from './global/componentes/agbara/agbara.component';
import { GraduacoesComponent } from './global/componentes/graduacoes/graduacoes.component';
import { LocaisTreinoComponent } from './global/componentes/locais-treino/locais-treino.component';
import { VideosComponent } from './global/componentes/videos/videos.component';
import { FotosComponent } from './global/componentes/fotos/fotos.component';
import { LojaComponent } from './global/componentes/loja/loja.component';
import { EventosComponent } from './global/componentes/eventos/eventos.component';
import { ContactosComponent } from './global/componentes/contactos/contactos.component';

// Componentes de história
import { CapoeiraComponent } from './global/componentes/historia/capoeira/capoeira.component';
import { GrupoComponent } from './global/componentes/historia/grupo/grupo.component';
import { MestreComponent } from './global/componentes/historia/mestre/mestre.component';
import { ContraMestreComponent } from './global/componentes/historia/contra-mestre/contra-mestre.component';
import { ProfessorComponent } from './global/componentes/historia/professor/professor.component';
import { InstrumentosComponent } from './global/componentes/historia/instrumentos/instrumentos.component';

const routes: Routes = [
  // Página inicial
  { path: '', component: AgbaraComponent },

  // Rotas principais
  { path: 'graduacao', component: GraduacoesComponent },
  { path: 'treinos', component: LocaisTreinoComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'fotos', component: FotosComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'contactos', component: ContactosComponent },

  // Rotas de história
  { path: 'historia', component: CapoeiraComponent },
  { path: 'historia/grupo', component: GrupoComponent },
  { path: 'historia/mestre', component: MestreComponent },
  { path: 'historia/contra-mestre', component: ContraMestreComponent },
  { path: 'historia/professor', component: ProfessorComponent },
  { path: 'historia/instrumentos', component: InstrumentosComponent },

  // Rota 404
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
