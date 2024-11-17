import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agbara',
  templateUrl: './agbara.component.html',
  styleUrl: './agbara.component.scss',

})
export class AgbaraComponent implements OnInit {

  cardsInformativas = [
    { titulo: 'titulo', ano: 2002, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { titulo: 'titulo', ano: 2004, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    //{ titulo: 'titulo', ano: 2006, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { titulo: 'titulo', ano: 2008, datas: [{ titulo: 'Titulo 3.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { titulo: 'titulo', ano: 2010, datas: [{ titulo: 'Titulo 5.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { titulo: 'titulo', ano: 2012, datas: [{ titulo: 'Titulo 7.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    //{ titulo: 'titulo', ano: 2014, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { titulo: 'titulo', ano: 2016, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
   // { titulo: 'titulo', ano: 2018, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    //{ titulo: 'titulo', ano: 2020, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    //{ titulo: 'titulo', ano: 2022, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { titulo: 'titulo', ano: 2023, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { titulo: 'titulo', ano: 2024, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
  ];

  motivo0 = 'Fortalecimento muscular'
  desc0 = 'Prática física completa, promovendo exercícios aeróbicos, equilíbrio, resistência cardiovascular, flexibilidade e coordenação motora'

  motivo2 = 'Expressão Cultural'
  desc2 = 'Expressão cultural afro-brasileira, que combina música, movimento e jogo, conectando-se à história e a tradição, além de promover a expressão criativa'
  motivo3 = 'Trabalhar em equipa'
  desc3 = 'Atividades sociais e recreativas em grupos'
  motivo4 = 'Fortalecimento psicologico'
  desc4 = 'Bem-estar mental através da atividade física'
  motivo5 = 'Defesa Pessoal'
  desc5 = 'Técnicas acrobáticas e de esquiva para autodefesa'
  motivo6 = 'Disciplina'
  desc6 = 'Os erros, desafios, derrotas e conquistas são trilhas que nos conduzem à perseverança, resiliência, respeito, integridade, disciplina, foco e autocontrole.'
  moreInfo: any;

  constructor() {
  }
  ngOnInit(): void {this.expandedItems = this.cardsInformativas.map(() => false);
  }

  imgs = [
    'assets/fotos/evento_mulher.jpg',
    'assets/fotos/foto_antiga.jpg',
    //'assets/fotos/foto_antiga.jpg',
    'assets/fotos/treino.jpg',
    //'assets/fotos/treino1.jpg',
   // 'assets/fotos/img1.jpg',
   // 'assets/fotos/img2.jpg',
    //'assets/fotos/img3.jpg',
  ];


  expandedItems: boolean[] = [];

  toggleParagrafo(index: number): void {
    this.expandedItems = this.expandedItems.map((item, i) => i === index ? !item : false);
  }
}
