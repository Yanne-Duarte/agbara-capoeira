import { Component } from '@angular/core';

@Component({
  selector: 'app-capoeira',
  templateUrl: './capoeira.component.html',
  styleUrl: './capoeira.component.scss'
})
export class CapoeiraComponent {

  txtArray = [
    'Cronologia da capoeira',
    '',
    'Século XVI',
    'Início da Escravidão no Brasil - Com a chegada dos portugueses ao Brasil em 1500, começou o período de colonização e exploração que levou à escravidão em massa de africanos trazidos para trabalhar nas plantações de açúcar e nas minas de ouro.',
    'Século XVII',
    'Formação dos Quilombos - Como uma forma de resistência à escravidão, os africanos fugidos estabeleceram comunidades autossustentáveis conhecidas como quilombos, onde preservavam suas tradições culturais, incluindo práticas de luta e dança que mais tarde se tornariam a capoeira.',
    'Século XVIII',
    'Devido ao seu potencial subversivo e associado à resistência dos escravos, a capoeira foi proibida pelas autoridades coloniais portuguesas em 1764, tornando-se ilegal e sujeita a severas punições.',
    'Século XIX',
    'Abolição da Escravidão - A Lei Áurea, assinada em 1888, finalmente aboliu oficialmente a escravidão no Brasil. Com a abolição, muitos ex-escravos migraram para as cidades em busca de oportunidades, levando consigo a prática da capoeira.',
    'Década de 1930',
    'Mestre Bimba e a Capoeira Regional - Mestre Bimba, Manuel dos Reis Machado, desenvolveu e formalizou um estilo de capoeira conhecido como Capoeira Regional, que combinava elementos de luta e dança com técnicas de autodefesa. Ele fundou a primeira academia de capoeira em 1932, ajudando a legitimar a prática e a preservar suas tradições.',
    'Década de 1940',
    'Mestre Pastinha e a Capoeira Angola - Mestre Pastinha, Vicente Ferreira Pastinha, foi um dos principais defensores da Capoeira Angola, um estilo mais tradicional da capoeira que enfatizava a cultura e a história africanas. Ele fundou sua própria academia em 1941 e trabalhou para preservar as raízes históricas da capoeira.',
    'Década de 1960',
    'Reconhecimento como Patrimônio Cultural - A capoeira começou a receber reconhecimento oficial como uma expressão cultural brasileira única. Em 1964, foi fundada a primeira academia de capoeira fora do Brasil, na França, contribuindo para a disseminação global da prática.',
    'Década de 1980',
    'Globalização da Capoeira - Com o aumento do turismo e da globalização cultural, a capoeira se espalhou para países ao redor do mundo. Mestres brasileiros viajaram para ensinar e difundir a capoeira, resultando na formação de grupos e academias em todo o mundo.',
    'Década de 2000',
    'Reconhecimento como Patrimônio Cultural Imaterial da Humanidade - Em 2014, a capoeira foi oficialmente reconhecida como Patrimônio Cultural Imaterial da Humanidade pela UNESCO, destacando sua importância histórica, cultural e social para o Brasil e para o mundo.',
    '',
    '',
    'Breve História da capoeira',
    'A capoeira é uma forma de expressão cultural brasileira que incorpora elementos de dança, música, arte marcial e jogo. Ela tem suas raízes profundamente entrelaçadas com a história do Brasil, remontando ao período colonial e à resistência dos escravos africanos.',
    'No contexto dos quilombos, comunidades formadas por escravos fugitivos que buscavam refúgio e liberdade, a capoeira floresceu como uma ferramenta de resistência e preservação cultural. Nos quilombos, a capoeira servia não apenas como uma forma de autodefesa contra a opressão dos colonizadores, mas também como uma maneira de manter viva a cultura africana e fortalecer os laços comunitários.',
    'Os líderes quilombolas desempenhavam um papel fundamental na organização e proteção dos quilombos, e muitos deles eram mestres de capoeira habilidosos. Figuras como Zumbi dos Palmares, líder do Quilombo dos Palmares e uma das figuras mais importantes na resistência contra a escravidão, são reverenciadas por sua contribuição para a preservação da cultura afro-brasileira e a prática da capoeira.',
    'Com o tempo, a capoeira se espalhou para além dos quilombos e se tornou uma parte integrante da cultura brasileira. Durante décadas, a prática da capoeira foi criminalizada e proibida no Brasil, mas isso não impediu sua disseminação e popularidade entre as comunidades afrodescendentes.',
    'Ao longo dos anos, a capoeira passou por transformações e adaptações, incorporando novos elementos e influências. No início do século XX, surgiram mestres como Bimba e Pastinha, que desenvolveram estilos específicos de capoeira e contribuíram para sua legitimidade e reconhecimento como uma forma de arte marcial e expressão cultural.',
    'Hoje, a capoeira é praticada em todo o mundo, não apenas como um esporte ou uma forma de luta, mas também como uma expressão artística e uma ferramenta para promover a inclusão social, a educação e o respeito pela diversidade cultural.',
    '',
    'Mestre Pastinha',
    'Mestre Pastinha, cujo nome verdadeiro é Vicente Ferreira Pastinha, é uma figura lendária na história da capoeira. Nascido em Salvador, Bahia, em 5 de abril de 1889, Pastinha dedicou sua vida à prática e preservação da capoeira angola, uma das vertentes mais tradicionais da capoeira.',
    'Desde jovem, Pastinha se envolveu com a capoeira, inicialmente como aprendiz de Mestre Benedito, conhecido como "Bené de Mangabeira". Com o tempo, Pastinha aprimorou suas habilidades na capoeira e se tornou um dos grandes mestres da arte.',
    'O apelido "Pastinha" foi dado a ele na infância, devido ao seu pequeno tamanho e pele clara, lembrando um "passarinho". No entanto, sua estatura física não refletia sua grandeza como mestre e líder na comunidade capoeirista.',
    'Em 1941, Pastinha fundou a primeira academia de capoeira angola em Salvador, conhecida como "Centro Esportivo de Capoeira Angola". Sua academia era um local de encontro para praticantes de capoeira e um centro de difusão da cultura afro-brasileira.',
    'Pastinha foi um defensor fervoroso da capoeira angola como uma forma de expressão cultural e uma manifestação da identidade afro-brasileira. Ele lutou incansavelmente para preservar as tradições da capoeira angola em meio à crescente influência da capoeira regional, uma vertente mais moderna e esportiva da capoeira.',
    'Além de seu legado como mestre de capoeira, Pastinha também foi um importante historiador e guardião das tradições afro-brasileiras. Ele documentou a história da capoeira e suas raízes africanas, contribuindo para o reconhecimento da capoeira como uma arte legítima e um símbolo da resistência negra no Brasil.',
    'Mesmo enfrentando dificuldades financeiras e o declínio da capoeira angola em meio às mudanças sociais e políticas do Brasil, Pastinha permaneceu firme em sua dedicação à arte. Sua influência e legado continuam vivos até hoje, inspirando gerações de capoeiristas a valorizar e preservar as tradições da capoeira angola. Mestre Pastinha faleceu em 1981, deixando um legado duradouro na história da capoeira e da cultura afro-brasileira.',
    '',
    'Mestre Bimba',
    'Mestre Bimba, cujo nome verdadeiro é Manuel dos Reis Machado, é uma figura lendária na história da capoeira. Nasceu em Salvador, Bahia, em 23 de novembro de 1899, e é reconhecido como o criador da Capoeira Regional, uma das vertentes mais influentes e difundidas da capoeira.',
    'Desde jovem, Bimba demonstrou um talento excepcional para as artes marciais e a dança. Ele começou a praticar capoeira ainda na adolescência, influenciado pela cultura afro-brasileira e pela tradição das rodas de capoeira que se reuniam nas ruas de Salvador.',
    'Em uma época em que a capoeira era marginalizada e vista como uma prática violenta e ilegal, Bimba dedicou-se a legitimar e elevar o status da capoeira como uma forma de arte e expressão cultural. Ele reconheceu o potencial da capoeira não apenas como uma técnica de autodefesa, mas também como uma ferramenta para promover a disciplina, a autoconfiança e o respeito mútuo entre os praticantes.',
    'Em 1932, Mestre Bimba fundou a primeira academia de capoeira do Brasil, conhecida como "Centro de Cultura Física e Capoeira Regional da Bahia". Sua academia foi pioneira ao introduzir métodos de treinamento estruturados e sistemáticos, baseados em princípios de educação física e artes marciais, que ajudaram a transformar a capoeira em uma prática respeitada e reconhecida.',
    'A Capoeira Regional de Bimba era caracterizada por movimentos rápidos, acrobáticos e eficientes, combinados com elementos de dança e música. Ele enfatizava a importância da técnica, da agilidade e da inteligência estratégica na prática da capoeira, e seus métodos de treinamento eram rigorosos e desafiadores.',
    'Além de seu legado como mestre de capoeira, Bimba também foi um importante defensor da cultura afro-brasileira e da igualdade racial. Ele lutou contra o preconceito e a discriminação racial, defendendo o direito dos afrodescendentes de praticar sua cultura e preservar suas tradições.',
    'Mestre Bimba faleceu em 5 de fevereiro de 1974, deixando um legado duradouro na história da capoeira e da cultura brasileira. Sua contribuição para a capoeira é amplamente reconhecida e sua influência continua a inspirar capoeiristas em todo o mundo a valorizar e preservar as tradições dessa arte marcial única e fascinante.',

  ]


  foto = 'assets/fotos/berimbau.png';


  eventos = [
    {
      ano: '1500s',
      titulo: 'Origem da Capoeira',
      descricao: 'Surgimento da capoeira entre os escravos africanos no Brasil colonial.'
    },
    {
      ano: '1890',
      titulo: 'Proibição',
      descricao: 'A capoeira é proibida pelo Código Penal da República.'
    },
    {
      ano: '1932',
      titulo: 'Primeira Academia',
      descricao: 'Mestre Bimba funda a primeira academia de capoeira em Salvador.'
    },
    {
      ano: '1937',
      titulo: 'Legalização',
      descricao: 'A capoeira é oficialmente legalizada pelo governo Getúlio Vargas.'
    },
    {
      ano: '1953',
      titulo: 'Apresentação Histórica',
      descricao: 'Mestre Bimba apresenta a capoeira para o presidente Getúlio Vargas.'
    },
    {
      ano: '2008',
      titulo: 'Patrimônio Cultural',
      descricao: 'A capoeira é reconhecida como Patrimônio Cultural Imaterial do Brasil.'
    },
    {
      ano: '2014',
      titulo: 'Patrimônio da Humanidade',
      descricao: 'UNESCO declara a roda de capoeira como Patrimônio Cultural Imaterial da Humanidade.'
    }
  ];
}
