import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
  animations: [
    trigger('carouselAnimation', [
      state('void', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),
      transition('void => active', animate('300ms ease-in')),
      transition('active => void', animate('300ms ease-out'))
    ])
  ]
})
export class CarrouselComponent implements OnInit, OnDestroy {
  @Input() imagens: string[] = [];
  @Input() titulos?: string[] = [];
  @Input() descricoes?: string[] = [];
  @Input() intervalo: number = 6000; // Tempo entre transições em ms

  timerSubs!: Subscription;
  private _indexImagemAtiva: number = 0;
  animationState: string = 'active';

  get indexImagemAtiva() {
    return this._indexImagemAtiva;
  }

  set indexImagemAtiva(value: number) {
    this._indexImagemAtiva = value < this.imagens.length ? value : 0;
  }

  ngOnInit(): void {
    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    this.pararTimer();
  }

  iniciarTimer(): void {
    this.pararTimer();
    this.timerSubs = timer(this.intervalo).subscribe(() => {
      this.navegarParaProximo();
    });
  }

  pararTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  ativarImagem(index: number): void {
    this.animationState = 'void';
    setTimeout(() => {
      this.indexImagemAtiva = index;
      this.animationState = 'active';
      this.iniciarTimer();
    }, 300);
  }

  navegarParaProximo(): void {
    this.ativarImagem(this.indexImagemAtiva + 1);
  }

  navegarParaAnterior(): void {
    const novoIndex = this.indexImagemAtiva - 1;
    this.ativarImagem(novoIndex < 0 ? this.imagens.length - 1 : novoIndex);
  }

  getAnteriorImagem(): string {
    const anteriorIndex = this.indexImagemAtiva - 1;
    return this.imagens[anteriorIndex < 0 ? this.imagens.length - 1 : anteriorIndex];
  }

  getProximaImagem(): string {
    const proximoIndex = this.indexImagemAtiva + 1;
    return this.imagens[proximoIndex >= this.imagens.length ? 0 : proximoIndex];
  }
}



