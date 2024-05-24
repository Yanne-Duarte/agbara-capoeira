import { Component } from '@angular/core';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrl: './instrumentos.component.scss'
})
export class InstrumentosComponent {

  berimbau = [
    'Instrumentação',
    'O berimbau é um instrumento musical de origem africana, essencial na prática da capoeira. Com seu som característico e ritmado, o berimbau desempenha um papel fundamental na condução do jogo de capoeira, estabelecendo o ritmo e a cadência que guiam os movimentos dos capoeiristas.',
    'Berimbau Berra-boi',
    'Este tipo de berimbau é conhecido por seu som mais grave e profundo, que se assemelha ao rugido de um boi. Sua sonoridade única adiciona uma atmosfera especial ao jogo de capoeira, conferindo-lhe uma intensidade e uma energia distintas.',
    'Além de sua função musical, o berimbau berra-boi também possui um significado simbólico na capoeira. Ele é considerado um instrumento de poder e autoridade, capaz de comandar a roda de capoeira e influenciar o desenrolar do jogo. Nas mãos habilidosas de um mestre de capoeira, o berimbau berra-boi torna-se uma ferramenta poderosa para conduzir e orientar os capoeiristas durante a prática da arte.',
    'O som do berimbau berra-boi ecoa pelas ruas das cidades brasileiras, evocando a história e a tradição da capoeira. É um símbolo de resistência e liberdade, que remete às origens da capoeira como uma forma de expressão cultural e de luta pela emancipação dos povos oprimidos.',
    'Assim, o berimbau berra-boi ocupa um lugar de destaque no universo da capoeira, sendo não apenas um instrumento musical, mas também um símbolo vivo da identidade e da espiritualidade dessa arte marcial afro-brasileira tão rica e diversificada.',
    'Berimbau Médio',
    'O berimbau médio é uma das variações mais comuns do berimbau utilizado na capoeira. Ele tem um tamanho intermediário entre o berimbau gunga (grave) e o berimbau viola (agudo), e produz um som equilibrado e versátil. O berimbau médio é essencial na prática da capoeira, pois é responsável por estabelecer o ritmo e a cadência do jogo, guiando os movimentos dos capoeiristas.',
    'Com sua sonoridade distintiva, o berimbau médio contribui para criar uma atmosfera envolvente e energética durante as rodas de capoeira. Seu som melódico e vibrante é capaz de inspirar e motivar os praticantes, incentivando a expressão artística e a criatividade dentro da roda.',
    'Além de sua função musical, o berimbau médio também possui um significado simbólico na capoeira. Ele é considerado um símbolo de tradição e autenticidade, representando as raízes históricas e culturais dessa arte marcial afro-brasileira. Nas mãos habilidosas de um mestre de capoeira, o berimbau médio se torna uma ferramenta poderosa para conduzir e orientar os capoeiristas durante a prática da capoeira.',
    'Assim, o berimbau médio desempenha um papel fundamental na tradição da capoeira, conectando o passado ao presente e transmitindo os valores e a essência dessa arte ancestral para as gerações futuras. Ele é uma peça central nas rodas de capoeira, proporcionando ritmo, musicalidade e inspiração para todos aqueles que têm a honra de praticar essa arte marcial tão rica e significativa.'
  ]
  atabaque = [
    'Atabaque',
    'O atabaque é um instrumento musical de percussão de origem africana amplamente utilizado na capoeira. Ele desempenha um papel fundamental na condução rítmica das rodas de capoeira, fornecendo uma base rítmica sólida para os movimentos dos capoeiristas e a execução dos cantos tradicionais.',
    'Na capoeira, geralmente são utilizados três tipos de atabaques, cada um com suas características sonoras específicas:',
    '   - Atabaque Rum: O atabaque rum é o maior e mais grave dos atabaques utilizados na capoeira. Ele produz um som profundo e encorpado, que serve como a base rítmica principal na roda de capoeira. Sua sonoridade poderosa e envolvente cria uma atmosfera intensa e vibrante, impulsionando a energia e o ritmo da roda.',
    '   - Atabaque Rumpi: O atabaque rumpi é um pouco menor e mais agudo que o atabaque rum. Ele complementa o som do atabaque rum, adicionando camadas adicionais de ritmo e textura à música da capoeira. O atabaque rumpi geralmente é tocado com batidas rápidas e precisas, criando um contraponto dinâmico ao som mais grave do atabaque rum.',
    '   - Atabaque Lê: O atabaque lê é o menor e mais agudo dos atabaques utilizados na capoeira. Ele possui uma sonoridade mais leve e brilhante, que adiciona um toque de melodia e delicadeza à música da capoeira. O atabaque lê é frequentemente usado para improvisações e variações rítmicas, permitindo uma maior expressividade e criatividade por parte dos percussionistas.',
    'Em conjunto, os três tipos de atabaques criam um conjunto de percussão dinâmico e diversificado, que é essencial para a prática da capoeira. Eles fornecem a base rítmica para os movimentos dos capoeiristas, incentivando a interação e a improvisação dentro da roda, e contribuem para a atmosfera única e envolvente das rodas de capoeira.',
  ]

  pandeiro = [
    'Pandeiro',
    'O pandeiro é um instrumento musical de percussão que desempenha um papel importante na capoeira. De origem portuguesa, o pandeiro foi introduzido no Brasil durante o período colonial e rapidamente se tornou parte integrante da cultura musical brasileira, incluindo a capoeira.',
    'O pandeiro utilizado na capoeira é geralmente feito de madeira e possui um corpo circular revestido por uma pele esticada, geralmente de couro ou nylon. Ele é equipado com pequenos discos de metal, chamados de platinelas, que são presos ao redor da borda do pandeiro e produzem o som característico do instrumento quando são sacudidos ou batidos.',
    'Na capoeira, o pandeiro é tocado com as mãos e pode ser usado de várias maneiras diferentes. Os capoeiristas geralmente seguram o pandeiro com uma das mãos e batem na pele com a outra, produzindo uma variedade de ritmos e padrões rítmicos. Além disso, eles também podem sacudir o pandeiro para criar efeitos sonoros adicionais, como o chocalho das platinelas.',
    'O pandeiro na capoeira desempenha várias funções importantes. Ele fornece uma base rítmica sólida para a música da capoeira, ajudando a manter o ritmo e a cadência das rodas de capoeira. Além disso, o pandeiro também é usado para acompanhar os cantos tradicionais da capoeira, fornecendo uma melodia e um acompanhamento harmônico para as vozes dos cantadores.',
    'Em conjunto com outros instrumentos de percussão, como o berimbau e o atabaque, o pandeiro contribui para a atmosfera única e envolvente das rodas de capoeira, criando uma paisagem sonora rica e vibrante que inspira os capoeiristas e eleva o espírito da roda.',
  ]

  fBerimbau = 'assets/fotos/l5.png'
  fAtabaque = 'assets/fotos/l6.png'
  fPandeiro = 'assets/fotos/l7.png'

}
