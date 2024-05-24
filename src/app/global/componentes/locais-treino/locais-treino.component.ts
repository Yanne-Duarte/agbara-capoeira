import { Component } from '@angular/core';

@Component({
  selector: 'app-locais-treino',
  templateUrl: './locais-treino.component.html',
  styleUrl: './locais-treino.component.scss'
})
export class LocaisTreinoComponent {
/*

  espacoNininho = [
    'Mestre Nininho',
    'Centro Social Paroquial do Cacém',
    'Morada: R. da Paz 5, 2735-480 Agualva-Cacém',
    'Horário Treino: terça-feiras e quintas das 19h às 20h30',
  ]
  espacoBarravento = [
    'ContraMestre Barravento',
    'Pavilhão Moinhos da Arroja',
    'Morada: R. Alice Cruz 13, 2675-583 Odivelas',
    'Horário Treino: segundas, quartas e sexta das 20h45 às 22h30',
  ]
  espacoBandas = ['ContraMestre Bandas',
    'Pavilhão da Escola Secundária de Caneças',
    'Morada: N 250 72 1685, Caneças',
    'Horário Treino: terça-feiras e quintas das 20h30 às 22h00',
  ]
  size = '250px'
  weigth = '250px'

  fotoN = 'assets/fotos/igreja.png';
  fotoBV = '';
  fotoB = '';*/

  locais = [
    {
      nome: 'Mestre Nininho',
      foto: 'assets/fotos/igreja.png',
      local: 'Centro Social Paroquial do Cacém',
      Morada: 'R. da Paz 5, 2735-480 Agualva-Cacém',
      horario: 'Terça-feiras e quintas das 19h às 20h30',
      contacto: '987 654 321',
    },
    {
      nome: 'CM Bandas',
      foto: 'assets/fotos/canecas.png',
      local: 'Pavilhão da Escola Secundária de Caneças',
      Morada: 'N 250 72 1685, Caneças',
      horario: 'Terça-feiras e quintas das 20h30 às 22h00',
      contacto: '987 654 321',
    },
    {
      nome: 'CM Barravento',
      foto: 'assets/fotos/arroja.png',
      local: 'Pavilhão Moinhos da Arroja',
      Morada: 'R. Alice Cruz 13, 2675-583 Odivelas',
      horario: 'Segundas, quartas e sexta das 20h45 às 22h30',
      contacto: '987 654 321',
    },
  ];
}
