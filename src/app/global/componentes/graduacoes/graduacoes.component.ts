import { Component } from '@angular/core';

@Component({
  selector: 'app-graduacoes',
  templateUrl: './graduacoes.component.html',
  styleUrl: './graduacoes.component.scss'
})
export class GraduacoesComponent {



  desc0 = 'A cor branca é a mais pura de todas, representa à pureza. É a cor mais protetora, contribui para à paz e ao conforto, alivia a sensação de desespero e de choque emocional, ajuda a limpar e aclarar as emoções, os pensamentos e a espírito.'
  desc1 = 'O vermelho simboliza o poder, é a cor que se associa com a vitalidade e a ambição. O vermelho contribui também para a confiança em si mesmo, a coragem e uma atitude otimista ante a vida. palavras-chave da cor vermelha são: atração, amor, paixão e desejo. '
  desc11 = 'O vinho é uma cor emocionalmente descontraída, que influi os sentimentos convertendo-as em amáveis, suaves e profundos. Nos faz sentir carinho, amor e proteção. Também nos afasta da solidão e nos converte em pessoas sensíveis. Palavras-chaves do vinho: inocência, amor, entrega total, ajudar ao próximo'
  desc2 = 'A cor marrom é a cor da Mãe terra. O marrom nos dá a sensação de estabilidade e afasta a insegurança. Palavras-chave da cor marrom: estabilidade, realismo, cautela, fertilidade'
  desc3 = 'Roxo equilibram a mente e ajudam a transformar as obcessões e as medos. O roxo é uma cor muito poderosa para a mente. Está associado com o funcionamento do cérebro e é um estimulante para a imaginação e a intuição. Também é um forte sedante. O roxo é uma cor de transformação do mais alto nível espiritual e mental. Palavras-chave roxo: sabedoria, criatividade, independência, dignidade, serenidade, mudança e transgressão. '
  desc4 = 'O azul é uma cor fresca, tranquilizante, que se associa com a parte mais intelectual da mente, assim como a amarelo. O azul representa a noite. O azul ajuda a controlar a mente, a ter clareza de ideias e a ser criativo. Palavras-chave da cor azul: estabilidade, profundidade, lealdade, confiança, sabedoria, inteligência, fé, verdade e eternidade.'
  desc5 = 'O verde tem uma forte afinidade com a natureza e nos conecta com ela, nos faz enfatizar com es demais encontrando, de uma forma natural, as palauras justas. É a cor que procuramos instintivamente quando estamos deprimidos eu acabamos de viver um trauma. O verde nos cria um sentimento de conforto e relaxação, de calma e paz interior, que nos faz sentir equilibrados interiormente. Meditar com a cor verde é como tomas um calmante, para as emoções. Palauras-chave da cor verde: natureza, harmonia, crescimente, exuberância, fertilidade, Crescura, estabilidade, resistência. Dinheiro.'
  desc6 = 'O laranja é uma cor alegre. Esta cor libera as emoções negativas, nos faz sentirmos menes insegures, menos penoses, mais compreensivos com os defeitos dos eutros e contribui à vontade de perdoar. O laranja estimula a mente, renova a fé na vida e é a perfeito antidepressivo. Palauras-chave da cor laranja são: energia, alegria, felicidade, atração e criatividade.'
  desc7 = 'A cor amarela contribui para a felicidade. É uma cor brilhante, alegre, que simboliza a luxe - é come estar em festa a cada dia. Assecia-se com a parte intelectual da mente e a expressão de nesses pensamentos. É pertanto, a poder de discernir e discriminar, a memória e as ideias daras, poder de decisão e capacidade de julgar. Jambém nes ajuda a erganizar-nos, a assimilar as idcias inovadoras, e contribui para a habilidade de ver e compreender es diferentes pontos de vista. Palamas-chaves da cor amarda: felicidade, alegria, inteligência, inovação, energia, sol, fortaleza, poder.'
  desc8 = 'A cor cinza está asseciada à independência, à luta suficiência, as autocontrole: É uma cer que atua como um escudo contra as influências externas. Há palavras-chaves da cor cinza é, Estabilidade, Generosidade, Grande cense de organização, Detes humanitários, iselamento e Independência'


  list = [
    { foto: 'assets/fotos/c4.png', desc: ['Grão-Mestre', 'Branco', 'Um Mestre é um Mestre'] },
    { foto: 'assets/fotos/c4.png', desc: ['Mestre', 'Vermelho', 'Um Mestre é um Mestre'] },
    { foto: 'assets/fotos/c4.png', desc: ['Contramestre', 'Branco-Vermelho', 'Um ContraMestre é um ContraMestre'] },
    { foto: 'assets/fotos/c4.png', desc: ['Professor', 'Marrom', 'Um professor é um professor'] },
    { foto: 'assets/fotos/c4.png', desc: ['Roxo-Marrom', 'Em estágio'] },
    { foto: 'assets/fotos/c4.png', desc: ['Roxo', 'Um Aluno graduado procura do que é ser mestre de capoeira'] },
    { foto: 'assets/fotos/c4.png', desc: ['Azul-Roxo', 'Em estágio'] },
    { foto: 'assets/fotos/c4.png', desc: ['Azul', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Verde-Azul', 'Em estágio'] },
    { foto: 'assets/fotos/c4.png', desc: ['Verde', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Laranja-Verde', 'Em estágio'] },
    { foto: 'assets/fotos/c4.png', desc: ['Laranja', 'Em estágio'] },
    { foto: 'assets/fotos/c4.png', desc: ['Amarela-Laranja', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Amarela', 'Em estágio'] },
    { foto: 'assets/fotos/c4.png', desc: ['Cinza-Amarela', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Cinza', 'Aluno adulto iniciante'] },
    { foto: 'assets/fotos/c4.png', desc: ['Ponta Marrom', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Ponta Marrom-Roxo', 'Em estágio'] },
    { foto: 'assets/fotos/c4.png', desc: ['Ponta Roxa', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Ponta Azul-Roxo', 'Em estágio'] },
    { foto: 'assets/fotos/c4.png', desc: ['Ponta Azul', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Ponta Verde-Azul', 'Em estágio'] },
    { foto: 'assets/fotos/c4.png', desc: ['Ponta Verde', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Ponta Laranja-Verde', 'Em estágio'] },
    { foto: 'assets/fotos/c4.png', desc: ['Ponta Laranja', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Ponta Amarela-Laranja', 'Em estágio'] },
    { foto: 'assets/fotos/c4.png', desc: ['Ponta Amarela', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Ponta Cinza', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Crua Marrom', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Crua Roxa', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Crua Azul', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Crua Verde', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Crua Laranja', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Crua Amarela', 'Encontrar uma descriçao'] },
    { foto: 'assets/fotos/c4.png', desc: ['Crua Cinza', 'Encontrar uma descriçao'] },
  ];

/*
  src_00 = 'assets/fotos/c4.png'
  topico_00 = [
    'Grão-Mestre',
    'Branco',
    'Um Mestre é um Mestre',
  ];
  src_0 = 'assets/fotos/c4.png'
  topico_0 = [
    'Mestre',
    'Vermelho',
    'Um Mestre é um Mestre',
  ];

  src_1 = 'assets/fotos/c4.png'
  topico_1 = [
    'Contramestre',
    'Branco-Vermelho',
    'Um ContraMestre é um ContraMestre',
  ];

  src_2 = 'assets/fotos/c4.png'
  topico_2 = [
    'Professor',
    'Marrom',
    'Um professor é um professor',
  ];

  src_3 = 'assets/fotos/c4.png'
  topico_3 = [
    'Roxo-Marrom',
    'Em estágio',
  ];
  //
  src_4 = 'assets/fotos/c4.png'
  topico_4 = [
    'Roxo',
    'Um Aluno graduado procura do que é ser mestre de capoeira',
  ];

  src_5 = 'assets/fotos/c4.png'
  topico_5 = [
    'Azul-Roxo',
    'Em estágio',
  ];
  //
  src_6 = 'assets/fotos/c4.png'
  topico_6 = [
    'Azul',
    'Encontrar uma descriçao',
  ];
  //
  src_7 = 'assets/fotos/c4.png'
  topico_7 = [
    'Verde-Azul',
    'Em estágio',
  ];
  src_8 = 'assets/fotos/c4.png'
  topico_8 = [
    'Verde',
    'Encontrar uma descriçao',
  ];

  src_9 = 'assets/fotos/c4.png'
  topico_9 = [
    'Laranja-Verde',
    'Em estágio',
  ];

  src_10 = 'assets/fotos/c4.png'
  topico_10 = [
    'Laranja',
    'Em estágio',
  ];

  src_11 = 'assets/fotos/c4.png'
  topico_11 = [
    'Amarela-Laranja',
    'Encontrar uma descriçao',
  ];

  src_12 = 'assets/fotos/c4.png'
  topico_12 = [
    'Amarela',
    'Em estágio',
  ];

  src_13 = 'assets/fotos/c4.png'
  topico_13 = [
    'Cinza-Amarela',
    'Encontrar uma descriçao',
  ];

  src_14 = 'assets/fotos/c4.png'
  topico_14 = [
    'Cinza',
    'Aluno adulto iniciante',
  ];




  src_20 = 'assets/fotos/c4.png';
  topico_20 = [
    'Ponta Marrom',
    'Encontrar uma descriçao'
  ]

  src_21 = 'assets/fotos/c4.png';
  topico_21 = [
    'Ponta Marrom-Roxo',
    'Em estágio'
  ]


  src_22 = 'assets/fotos/c4.png';
  topico_22 = [
    'Ponta Roxa',
    'Encontrar uma descriçao'
  ]



  src_23 = 'assets/fotos/c4.png';
  topico_23 = [
    'Ponta Azul-Roxo',
    'Em estágio'
  ]



  src_24 = 'assets/fotos/c4.png';
  topico_24 = [
    'Ponta Azul',
    'Encontrar uma descriçao'
  ]


  src_25 = 'assets/fotos/c4.png';
  topico_25 = [
    'Ponta Verde-Azul',
    'Em estágio'
  ]



  src_26 = 'assets/fotos/c4.png';
  topico_26 = [
    'Ponta Verde',
    'Encontrar uma descriçao'
  ]



  src_27 = 'assets/fotos/c4.png';
  topico_27 = [
    'Ponta Laranja-Verde',
    'Em estágio'
  ]


  src_28 = 'assets/fotos/c4.png';
  topico_28 = [
    'Ponta Laranja',
    'Encontrar uma descriçao'
  ]


  src_29 = 'assets/fotos/c4.png';
  topico_29 = [
    'Ponta Amarela-Laranja',
    'Em estágio'
  ]

  src_30 = 'assets/fotos/c4.png';
  topico_30 = [
    'Ponta Amarela',
    'Encontrar uma descriçao'
  ]
  src_31 = 'assets/fotos/c4.png';
  topico_31 = [
    'Ponta Cinza',
    'Encontrar uma descriçao'
  ]

  src_40 = 'assets/fotos/c4.png';
  topico_40 = [
    'Crua Marrom ',
    'Encontrar uma descriçao'
  ]
  src_41 = 'assets/fotos/c4.png';
  topico_41 = [
    'Crua Roxa ',
    'Encontrar uma descriçao'
  ]
  src_42 = 'assets/fotos/c4.png';
  topico_42 = [
    'Crua Azul ',
    'Encontrar uma descriçao'
  ]

  src_43 = 'assets/fotos/c4.png';
  topico_43 = [
    'Crua Verde ',
    'Encontrar uma descriçao'
  ]

  src_44 = 'assets/fotos/c4.png';
  topico_44 = [
    'Crua Laranja ',
    'Encontrar uma descriçao'
  ]
  src_45 = 'assets/fotos/c4.png';
  topico_45 = [
    'Crua Amarela ',
    'Encontrar uma descriçao'
  ]
  src_46 = 'assets/fotos/c4.png';
  topico_46 = [
    'Crua Cinza ',
    'Encontrar uma descriçao'
  ]
*/
}
