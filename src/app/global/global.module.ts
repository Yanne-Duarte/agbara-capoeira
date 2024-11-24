import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global.component';
import { MatMenuModule } from '@angular/material/menu';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { AgbaraComponent } from './componentes/agbara/agbara.component';
import { CapoeiraComponent } from './componentes/historia/capoeira/capoeira.component';
import { GrupoComponent } from './componentes/historia/grupo/grupo.component';
import { MestreComponent } from './componentes/historia/mestre/mestre.component';
import { ContraMestreComponent } from './componentes/historia/contra-mestre/contra-mestre.component';
import { ProfessorComponent } from './componentes/historia/professor/professor.component';
import { GraduacoesComponent } from './componentes/graduacoes/graduacoes.component';
import { LocaisTreinoComponent } from './componentes/locais-treino/locais-treino.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { LojaComponent } from './componentes/loja/loja.component';
import { CardImgVideoComponent } from './componentes/estrutura/card-img-video/card-img-video.component';
import { CardTextoComponent } from './componentes/estrutura/card-texto/card-texto.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { CardEventosComponent } from './componentes/estrutura/card-eventos/card-eventos.component';
import { DescGradComponent } from './componentes/estrutura/desc-grad/desc-grad.component';
import { InstrumentosComponent } from './componentes/historia/instrumentos/instrumentos.component';
import { CarrouselComponent } from './componentes/estrutura/carrousel/carrousel.component';
import { ModalComponent } from './componentes/estrutura/modal/modal.component';
import 'leaflet';
import { RouterModule } from '@angular/router';
import { GlobalRoutingModule } from './global-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GlobalRoutingModule
  ],
  exports: [
    GlobalComponent,
    ContactosComponent,
    AgbaraComponent,
    CapoeiraComponent,
    GrupoComponent,
    MestreComponent,
    ContraMestreComponent,
    ProfessorComponent,
    GraduacoesComponent,
    LocaisTreinoComponent,
    VideosComponent,
    FotosComponent,
    LojaComponent,
    CardImgVideoComponent,
    CardTextoComponent,
    EventosComponent,
    CardEventosComponent,
    DescGradComponent,
    InstrumentosComponent,
    CarrouselComponent,
    ModalComponent
  ],
  declarations: [
    GlobalComponent,
    ContactosComponent,
    AgbaraComponent,
    CapoeiraComponent,
    GrupoComponent,
    MestreComponent,
    ContraMestreComponent,
    ProfessorComponent,
    GraduacoesComponent,
    LocaisTreinoComponent,
    VideosComponent,
    FotosComponent,
    LojaComponent,
    CardImgVideoComponent,
    CardTextoComponent,
    EventosComponent,
    CardEventosComponent,
    DescGradComponent,
    InstrumentosComponent,
    CarrouselComponent,
    ModalComponent
  ]
})
export class GlobalModule { }
