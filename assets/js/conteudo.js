/* ==========================================================
   CONTEÚDO DO SITE · edite aqui sem mexer no resto do código
   ========================================================== */

/* WhatsApp: só números, com DDI e DDD. Ex.: '5511999999999' */
const WHATSAPP = '';

/* ---------- LOGOS DE CLIENTES ----------
   logo: caminho da imagem (ex.: 'assets/img/clientes/marca.png')
   Sem logo, aparece o nome em texto. */
const CLIENTES = [
  { nome: 'Cliente 01', logo: '' },
  { nome: 'Cliente 02', logo: '' },
  { nome: 'Cliente 03', logo: '' },
  { nome: 'Cliente 04', logo: '' },
  { nome: 'Cliente 05', logo: '' },
  { nome: 'Cliente 06', logo: '' },
  { nome: 'Cliente 07', logo: '' },
  { nome: 'Cliente 08', logo: '' }
];

/* ---------- CASES ----------
   categoria: 'identidade' | 'social' | 'graficos'
   capa: imagem 4:3 (ex.: 'assets/img/cases/projeto-capa.jpg')
   galeria: lista de imagens que aparecem ao abrir o case
   cor: fundo da capa enquanto não houver imagem ('oliva' | 'choco' | 'ferrugem' | 'bege') */
const CASES = [
  {
    titulo: 'Nome do projeto',
    cliente: '[Nome do cliente]',
    categoria: 'identidade',
    cor: 'oliva',
    capa: '',
    resumo: 'Identidade visual completa para uma marca que queria transmitir acolhimento.',
    desafio: '[Qual era a situação da marca e o que o cliente precisava.]',
    solucao: '[O conceito criado e as escolhas visuais.]',
    entregas: ['Logo e versões', 'Paleta e tipografia', 'Manual de marca'],
    galeria: []
  },
  {
    titulo: 'Nome do projeto',
    cliente: '[Nome do cliente]',
    categoria: 'social',
    cor: 'ferrugem',
    capa: '',
    resumo: 'Templates de feed e stories para um perfil que precisava de unidade.',
    desafio: '[Qual era a situação da marca e o que o cliente precisava.]',
    solucao: '[O conceito criado e as escolhas visuais.]',
    entregas: ['Templates de feed', 'Stories', 'Capas de destaques'],
    galeria: []
  },
  {
    titulo: 'Nome do projeto',
    cliente: '[Nome do cliente]',
    categoria: 'graficos',
    cor: 'choco',
    capa: '',
    resumo: 'Papelaria e embalagens alinhadas à nova identidade.',
    desafio: '[Qual era a situação da marca e o que o cliente precisava.]',
    solucao: '[O conceito criado e as escolhas visuais.]',
    entregas: ['Cartão de visita', 'Papel timbrado', 'Embalagem'],
    galeria: []
  },
  {
    titulo: 'Nome do projeto',
    cliente: '[Nome do cliente]',
    categoria: 'identidade',
    cor: 'bege',
    capa: '',
    resumo: 'Reposicionamento visual de uma marca com anos de história.',
    desafio: '[Qual era a situação da marca e o que o cliente precisava.]',
    solucao: '[O conceito criado e as escolhas visuais.]',
    entregas: ['Redesenho de logo', 'Padrão gráfico', 'Aplicações'],
    galeria: []
  },
  {
    titulo: 'Nome do projeto',
    cliente: '[Nome do cliente]',
    categoria: 'social',
    cor: 'oliva',
    capa: '',
    resumo: 'Gestão mensal de conteúdo com planejamento e criação.',
    desafio: '[Qual era a situação da marca e o que o cliente precisava.]',
    solucao: '[O conceito criado e as escolhas visuais.]',
    entregas: ['Planejamento mensal', 'Posts e carrosséis', 'Relatório'],
    galeria: []
  },
  {
    titulo: 'Nome do projeto',
    cliente: '[Nome do cliente]',
    categoria: 'graficos',
    cor: 'ferrugem',
    capa: '',
    resumo: 'Apresentação comercial e peças para evento.',
    desafio: '[Qual era a situação da marca e o que o cliente precisava.]',
    solucao: '[O conceito criado e as escolhas visuais.]',
    entregas: ['Apresentação', 'Banner', 'Convite digital'],
    galeria: []
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
