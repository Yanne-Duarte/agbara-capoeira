import { Component } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrl: './loja.component.scss'
})
export class LojaComponent {
  txt = 'Onde posso arranjar algum? Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis.'
  txt_1 = 'Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.Todos os geradores de Lorem Ipsum na Internet acabam por repetir porções de texto pré - definido, como necessário, fazendo com que este seja o primeiro verdadeiro gerador na Internet.Usa um dicionário de 200 palavras em Latim, combinado com uma dúzia de modelos de frases, para gerar Lorem Ipsum que pareçam razoáveis.Desta forma, o Lorem Ipsum gerado é sempre livre de repetição, ou de injecção humorística, etc.';
  txt_2 = 'Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.Todos os geradores de Lorem Ipsum na Internet acabam por repetir porções de texto pré - definido, como necessário, fazendo com que este seja o primeiro verdadeiro gerador na Internet.Usa um dicionário de 200 palavras em Latim, combinado com uma dúzia de modelos de frases, para gerar Lorem Ipsum que pareçam razoáveis.Desta forma, o Lorem Ipsum gerado é sempre livre de repetição, ou de injecção humorística, etc.';
  txt_3 = 'Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.Todos os geradores de Lorem Ipsum na Internet acabam por repetir porções de texto pré - definido, como necessário, fazendo com que este seja o primeiro verdadeiro gerador na Internet.Usa um dicionário de 200 palavras em Latim, combinado com uma dúzia de modelos de frases, para gerar Lorem Ipsum que pareçam razoáveis.Desta forma, o Lorem Ipsum gerado é sempre livre de repetição, ou de injecção humorística, etc.';
  txt_4 = 'Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.Todos os geradores de Lorem Ipsum na Internet acabam por repetir porções de texto pré - definido, como necessário, fazendo com que este seja o primeiro verdadeiro gerador na Internet.Usa um dicionário de 200 palavras em Latim, combinado com uma dúzia de modelos de frases, para gerar Lorem Ipsum que pareçam razoáveis.Desta forma, o Lorem Ipsum gerado é sempre livre de repetição, ou de injecção humorística, etc.';
  txt_5 = 'Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto.Todos os geradores de Lorem Ipsum na Internet acabam por repetir porções de texto pré - definido, como necessário, fazendo com que este seja o primeiro verdadeiro gerador na Internet.Usa um dicionário de 200 palavras em Latim, combinado com uma dúzia de modelos de frases, para gerar Lorem Ipsum que pareçam razoáveis.Desta forma, o Lorem Ipsum gerado é sempre livre de repetição, ou de injecção humorística, etc.';


  txtArray = [
    this.txt,
    this.txt_1,
    this.txt_2,
    this.txt_3,
    this.txt_4,
    this.txt_5,
  ]
  items = [
    { nome: 'Berimbau', img: 'assets/fotos/l1.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l2.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l3.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l4.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l5.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l6.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l7.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l8.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l9.png', tam: 's - m - l - xl' },

    { nome: 'Berimbau', img: 'assets/fotos/l1.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l2.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l3.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l4.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l5.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l6.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l7.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l8.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l9.png', tam: 's - m - l - xl' },

    { nome: 'Berimbau', img: 'assets/fotos/l1.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l2.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l3.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l4.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l5.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l6.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l7.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l8.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l9.png', tam: 's - m - l - xl' },

    { nome: 'Berimbau', img: 'assets/fotos/l1.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l2.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l3.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l4.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l5.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l6.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l7.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l8.png', tam: 's - m - l - xl' },
    { nome: 'Berimbau', img: 'assets/fotos/l9.png', tam: 's - m - l - xl' },
  ]
}
