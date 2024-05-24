import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agbara',
  templateUrl: './agbara.component.html',
  styleUrl: './agbara.component.scss'
})
export class AgbaraComponent implements OnInit {
  infoSobreAno: any;



  motivo0 = 'Físico'
  desc0 = 'Prática física completa, promovendo exercícios aeróbicos, fortalecimento muscular, equilíbrio, resistência cardiovascular, flexibilidade e coordenação motora'
  motivo1 = 'Autoconfiança'
  desc1 = 'Superação de desafios físicos e mentais aumentando a autoestima e a confiança.'
  motivo2 = 'Expressão Cultural'
  desc2 = 'Expressão cultural afro-brasileira única, que combina música, movimento e jogo, conectando-se à história e tradição, além de promover a expressão criativa'
  motivo3 = 'Habilidades Sociais'
  desc3 = 'Atividades sociais em grupo, promovendo interação, trabalho em equipe e amizades'
  motivo4 = 'Bem-Estar Mental'
  desc4 = 'Bem-estar mental através da atividade física'
  motivo5 = 'Defesa Pessoal'
  desc5 = 'Técnicas acrobáticas e de esquiva para autodefesa'
  motivo6 = 'Disciplina'
  desc6 = 'Os erros, desafios, derrotas e conquistas são trilhas que nos conduzem à paciência, perseverança, resiliência, respeito, integridade, disciplina, foco e autocontrole.'






  selectAno(ano: number) {
    console.log('ano   ', ano);
    this.infoSobreAno = this.crono.filter(x => x.ano === ano)
    console.log(this.infoSobreAno);


  }
  ngOnInit(): void {

    if (!this.infoSobreAno) {
      this.infoSobreAno = this.crono.filter(x => x.ano === 2002)
    }

  }




  imgs = [
    'assets/fotos/img1.jpg',
    'assets/fotos/img2.jpg',
    'assets/fotos/img3.jpg',
    'assets/fotos/img1.jpg',
    'assets/fotos/img2.jpg',
    'assets/fotos/img3.jpg',
    'assets/fotos/img1.jpg',
    'assets/fotos/img2.jpg',
    'assets/fotos/img3.jpg',
  ];

  crono = [
    { ano: 2002, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { ano: 2004, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { ano: 2006, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { ano: 2008, datas: [{ titulo: 'Titulo 3.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { ano: 2010, datas: [{ titulo: 'Titulo 5.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { ano: 2012, datas: [{ titulo: 'Titulo 7.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { ano: 2014, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { ano: 2016, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { ano: 2018, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { ano: 2020, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { ano: 2022, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { ano: 2023, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
    { ano: 2024, datas: [{ titulo: 'Titulo 1.0', desc: 'descricao 1.0' }, { titulo: 'Titulo 1.1', desc: 'descricao 1.1' }, { titulo: 'Titulo 1.2', desc: 'descricao 1.2' }] },
  ];

  anos: number[] = [2020, 2021, 2022, 2023, 2024];


}
