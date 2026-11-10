/* ==========================================================
   CONTEÚDO DO SITE · edite aqui sem mexer no resto do código
   ========================================================== */

/* WhatsApp: só números, com DDI e DDD. Ex.: '5511999999999' */
const WHATSAPP = '5511959103432';

/* E-mail que recebe os formulários do site (via FormSubmit) */
const EMAIL_FORMULARIO = 'mayarasenarodrigues@gmail.com';

/* ---------- LOGOS DE CLIENTES ----------
   logo: caminho da imagem (ex.: 'assets/img/clientes/marca.png')
   Sem logo, aparece o nome em texto. */
const CLIENTES = [
  { nome: 'I Love Pets Homecare', logo: 'assets/img/clientes/ilovepets.png' },
  { nome: 'Grupo Inovage', logo: 'assets/img/clientes/inovage.png' },
  { nome: 'Cloudax', logo: 'assets/img/clientes/cloudax.png' },
  { nome: 'Foccus One', logo: 'assets/img/clientes/foccus-one.png' },
  { nome: 'Blue Ocean', logo: 'assets/img/clientes/blue-ocean.png' },
  { nome: 'Luandre', logo: '' },
  { nome: 'H&Co', logo: '' },
  { nome: 'abc71', logo: '' }
];

/* ---------- CASES ----------
   categoria: 'identidade' | 'social' | 'sites' | 'graficos'
   capa: imagem de capa · galeria: imagens que aparecem ao abrir o case
   cor: fundo da capa enquanto não houver imagem ('oliva' | 'choco' | 'ferrugem' | 'bege') */
const CASES = [
  {
    titulo: 'Rebranding I Love Pets',
    cliente: 'I Love Pets Homecare · segmento pet',
    categoria: 'identidade', cor: 'oliva',
    capa: 'assets/img/cases/p4-capa.jpg',
    resumo: 'Um logotipo datado transformado em uma marca contemporânea e amigável.',
    desafio: 'A identidade visual estava desatualizada e não acompanhava o momento da empresa.',
    solucao: 'Modernização com foco em simplicidade, legibilidade e versatilidade, preservando a essência da marca e fortalecendo a conexão com o público.',
    entregas: ['Redesenho do logotipo', 'Paleta de cores', 'Aplicações: crachá, caneca, fachada'],
    galeria: ['assets/img/cases/p4.jpg']
  },
  {
    titulo: 'Rebranding Grupo Inovage',
    cliente: 'Grupo Inovage · segmento tech',
    categoria: 'identidade', cor: 'choco',
    capa: 'assets/img/cases/p5-capa.jpg',
    resumo: 'Uma marca conhecida, com linguagem visual atualizada para acompanhar o crescimento.',
    desafio: 'Modernizar a identidade sem perder o reconhecimento que a marca já tinha.',
    solucao: 'Tipografia mais robusta, símbolo redesenhado e paleta mais vibrante, criando uma identidade mais atual e tecnológica.',
    entregas: ['Novo símbolo e logotipo', 'Paleta de cores', 'Aplicações e mockups'],
    galeria: ['assets/img/cases/p5.jpg']
  },
  {
    titulo: 'Identidade Cloudax',
    cliente: 'Cloudax · computação em nuvem',
    categoria: 'identidade', cor: 'ferrugem',
    capa: 'assets/img/cases/p6-capa.jpg',
    resumo: 'Tecnologia, confiabilidade e segurança traduzidas em um logo minimalista.',
    desafio: 'Representar os pilares da computação em nuvem em uma marca simples e escalável.',
    solucao: 'Formas limpas e um domo integrado à letra "X", simbolizando a proteção de dados e a resiliência dos ambientes em nuvem.',
    entregas: ['Logotipo', 'Paleta de cores', 'Aplicações: brindes, papelaria e digital'],
    galeria: ['assets/img/cases/p6.jpg']
  },
  {
    titulo: 'Identidade Foccus One',
    cliente: 'Foccus One · segmento tech',
    categoria: 'identidade', cor: 'oliva',
    capa: 'assets/img/cases/p7-capa.jpg',
    resumo: 'Uma nova variação de logotipo, mais atual e versátil, para uma empresa já existente.',
    desafio: 'Simplificar a construção da marca, que tinha excessos visuais.',
    solucao: 'Refinamento dos elementos para uma identidade mais limpa, equilibrada e de fácil aplicação, preservando a essência e o reconhecimento.',
    entregas: ['Variação de logotipo', 'Padrão gráfico', 'Aplicações'],
    galeria: ['assets/img/cases/p7.jpg']
  },
  {
    titulo: 'Identidade Blue Ocean',
    cliente: 'Blue Ocean · consultoria SAP',
    categoria: 'identidade', cor: 'choco',
    capa: 'assets/img/cases/p8-capa.jpg',
    resumo: 'Fluidez, inovação e visão estratégica de mercado em uma identidade moderna.',
    desafio: 'Traduzir a essência da marca de forma moderna, transmitindo solidez e confiança.',
    solucao: 'Uma linha contínua percorre a palavra "OCEAN" e forma uma onda estilizada, símbolo de movimento, adaptabilidade e evolução constante.',
    entregas: ['Logotipo', 'Paleta de cores', 'Aplicações: camiseta, mochila, sinalização'],
    galeria: ['assets/img/cases/p8.jpg']
  },
  {
    titulo: 'Social media Luandre',
    cliente: 'Luandre · recrutamento e RH',
    categoria: 'social', cor: 'ferrugem',
    capa: 'assets/img/cases/p10-capa.jpg',
    resumo: 'Mais de quatro anos criando conteúdo, campanhas e peças institucionais.',
    desafio: 'Manter uma comunicação digital consistente e engajadora ao longo de anos de campanhas.',
    solucao: 'Identidade visual consistente nas redes, campanhas sazonais e conteúdos voltados ao fortalecimento da presença da marca.',
    entregas: ['Posts e campanhas', 'Divulgação de vagas', 'Materiais institucionais'],
    galeria: ['assets/img/cases/p10.jpg']
  },
  {
    titulo: 'Social media H&Co',
    cliente: 'H&Co · tecnologia SAP',
    categoria: 'social', cor: 'choco',
    capa: 'assets/img/cases/p11-capa.jpg',
    resumo: 'Peças estratégicas para fortalecer a presença digital da marca.',
    desafio: 'Comunicar soluções complexas de ERP com clareza e profissionalismo.',
    solucao: 'Identidade visual consistente e posts alinhados ao posicionamento, priorizando clareza e engajamento.',
    entregas: ['Posts para redes sociais', 'Carrosséis', 'Linha visual'],
    galeria: ['assets/img/cases/p11.jpg']
  },
  {
    titulo: 'Social media abc71',
    cliente: 'abc71 · ERP Omega',
    categoria: 'social', cor: 'oliva',
    capa: 'assets/img/cases/p12-capa.jpg',
    resumo: 'Gestão contínua das redes com criação recorrente de conteúdo.',
    desafio: 'Dar consistência visual a uma marca com 55 anos de história e muitos temas técnicos.',
    solucao: 'Peças estratégicas, campanhas e materiais institucionais com identidade unificada e maior engajamento.',
    entregas: ['Gestão de redes', 'Campanhas e eventos', 'Materiais institucionais'],
    galeria: ['assets/img/cases/p12.jpg']
  },
  {
    titulo: 'Social media Cloudax',
    cliente: 'Cloudax · computação em nuvem',
    categoria: 'social', cor: 'ferrugem',
    capa: 'assets/img/cases/p13-capa.jpg',
    resumo: 'Conteúdo que torna a nuvem próxima e humana.',
    desafio: 'Falar de infraestrutura e migração para a nuvem de um jeito acessível.',
    solucao: 'Linha editorial com pessoas no centro, títulos diretos e a identidade da marca em cada peça.',
    entregas: ['Posts e carrosséis', 'Campanhas promocionais', 'Linha visual'],
    galeria: ['assets/img/cases/p13.jpg']
  },
  {
    titulo: 'Páginas de carreira Shopee e Lindt',
    cliente: 'Em conjunto com a Luandre',
    categoria: 'sites', cor: 'ferrugem',
    capa: 'assets/img/cases/p16-capa.jpg',
    resumo: 'Landing pages de carreira para vagas temporárias.',
    desafio: 'Apresentar vagas em várias regiões com a cultura de cada empresa em destaque.',
    solucao: 'Páginas em formato de LP com números, pilares de cultura e vagas organizadas por região.',
    entregas: ['LP Shopee', 'LP Lindt', 'Layout responsivo'],
    galeria: ['assets/img/cases/p16.jpg', 'assets/img/cases/p17.jpg']
  },
  {
    titulo: 'Site Blue Ocean',
    cliente: 'Blue Ocean · consultoria SAP',
    categoria: 'sites', cor: 'choco',
    capa: 'assets/img/cases/p18-capa.jpg',
    resumo: 'Rodapé e estrutura de páginas a partir de um layout pré-determinado.',
    desafio: 'Expandir o site mantendo a consistência com o layout existente.',
    solucao: 'Criação do rodapé e de páginas como carreiras, cultura e vagas abertas.',
    entregas: ['Rodapé', 'Página de carreiras', 'Estrutura de páginas'],
    galeria: ['assets/img/cases/p18.jpg']
  },
  {
    titulo: 'Impressos e brindes',
    cliente: 'Cloudax e Luandre',
    categoria: 'graficos', cor: 'oliva',
    capa: 'assets/img/cases/p20-capa.jpg',
    resumo: 'A marca fora da tela: papelaria, uniformes e brindes.',
    desafio: 'Levar a identidade para peças físicas com o mesmo cuidado do digital.',
    solucao: 'Caderno, camisa polo, canecas, cordões de crachá e banners alinhados a cada marca.',
    entregas: ['Caderno', 'Uniforme', 'Canecas e cordões', 'Banners'],
    galeria: ['assets/img/cases/p20.jpg']
  }
];

/* ---------- VÍDEOS ----------
   tipo: 'youtube' (link normal do YouTube), 'mp4' (arquivo em assets/videos/)
   formato: 'vertical' (reels, 9:16) ou 'horizontal' (16:9)
   capa: imagem de capa (opcional) */
const VIDEOS = [
  { titulo: 'Do rabisco ao logo', subtitulo: 'Bastidores', tipo: 'youtube', url: '', formato: 'vertical', capa: '' },
  { titulo: 'Manual de marca em 30s', subtitulo: 'Projeto', tipo: 'youtube', url: '', formato: 'vertical', capa: '' },
  { titulo: 'Montando um feed', subtitulo: 'Social media', tipo: 'youtube', url: '', formato: 'vertical', capa: '' },
  { titulo: 'Papelaria na mão', subtitulo: 'Materiais gráficos', tipo: 'youtube', url: '', formato: 'vertical', capa: '' }
];

/* ---------- DEPOIMENTOS ----------
   Cole aqui os depoimentos reais dos clientes. */
const DEPOIMENTOS = [
  { texto: '[Cole aqui o depoimento real do cliente, em uma ou duas frases.]', nome: '[Nome do cliente]', empresa: '[Empresa ou marca]', foto: '' },
  { texto: '[Cole aqui o depoimento real do cliente, em uma ou duas frases.]', nome: '[Nome do cliente]', empresa: '[Empresa ou marca]', foto: '' },
  { texto: '[Cole aqui o depoimento real do cliente, em uma ou duas frases.]', nome: '[Nome do cliente]', empresa: '[Empresa ou marca]', foto: '' },
  { texto: '[Cole aqui o depoimento real do cliente, em uma ou duas frases.]', nome: '[Nome do cliente]', empresa: '[Empresa ou marca]', foto: '' }
];
