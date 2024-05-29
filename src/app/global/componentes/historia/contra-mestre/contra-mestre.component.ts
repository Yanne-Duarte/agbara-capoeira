import { Component } from '@angular/core';

@Component({
  selector: 'app-contra-mestre',
  templateUrl: './contra-mestre.component.html',
  styleUrl: './contra-mestre.component.scss'
})
export class ContraMestreComponent {


  txtBandas = [
    'Contramestre Bandas',
    '',
    'Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis.',
    'Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto. ',
    'Todos os geradores de Lorem Ipsum na Internet acabam por repetir porções de texto pré-definido, como necessário, fazendo com que este seja o primeiro verdadeiro gerador na Internet.',
    ' Usa um dicionário de 200 palavras em Latim, combinado com uma dúzia de modelos de frases, para gerar Lorem Ipsum que pareçam razoáveis.',
    'Desta forma, o Lorem Ipsum gerado é sempre livre de repetição, ou de injecção humorística, etc.',
  ]
  txtBarravento = [
    'Contramestre Barravento',
    '',
    'Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis.',
    'Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto. ',
    'Todos os geradores de Lorem Ipsum na Internet acabam por repetir porções de texto pré-definido, como necessário, fazendo com que este seja o primeiro verdadeiro gerador na Internet.',
    ' Usa um dicionário de 200 palavras em Latim, combinado com uma dúzia de modelos de frases, para gerar Lorem Ipsum que pareçam razoáveis.',
    'Desta forma, o Lorem Ipsum gerado é sempre livre de repetição, ou de injecção humorística, etc.',
  ]


  fotoBandas = 'assets/fotos/bandas.jpg';
  fotoBarravento = 'assets/fotos/pedro.jpg';
}
