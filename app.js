const formations = {
  "4-3-3": ["GK", "RB", "CB", "CB", "LB", "DM", "CM", "CM", "RW", "ST", "LW"],
  "4-3-3 Defensivo": ["GK", "RB", "CB", "CB", "LB", "DM", "DM", "CM", "RW", "ST", "LW"],
  "4-3-3 Ofensivo": ["GK", "RB", "CB", "CB", "LB", "CM", "CM", "AM", "RW", "ST", "LW"],
  "4-2-3-1": ["GK", "RB", "CB", "CB", "LB", "DM", "DM", "AM", "RW", "ST", "LW"],
  "4-4-2": ["GK", "RB", "CB", "CB", "LB", "RM", "CM", "CM", "LM", "ST", "ST"],
  "4-4-2 Losango": ["GK", "RB", "CB", "CB", "LB", "DM", "CM", "CM", "AM", "ST", "ST"],
  "4-2-2-2": ["GK", "RB", "CB", "CB", "LB", "DM", "DM", "AM", "AM", "ST", "ST"],
  "4-1-4-1": ["GK", "RB", "CB", "CB", "LB", "DM", "RM", "CM", "CM", "LM", "ST"],
  "4-2-4": ["GK", "RB", "CB", "CB", "LB", "DM", "CM", "RW", "ST", "ST", "LW"],
  "3-5-2": ["GK", "CB", "CB", "CB", "RM", "CM", "DM", "CM", "LM", "ST", "ST"],
  "3-4-3": ["GK", "CB", "CB", "CB", "RM", "CM", "CM", "LM", "RW", "ST", "LW"],
  "3-4-2-1": ["GK", "CB", "CB", "CB", "RM", "CM", "CM", "LM", "AM", "AM", "ST"],
  "3-4-1-2": ["GK", "CB", "CB", "CB", "RM", "CM", "CM", "LM", "AM", "ST", "ST"],
  "5-3-2": ["GK", "RB", "CB", "CB", "CB", "LB", "CM", "DM", "CM", "ST", "ST"],
  "5-4-1": ["GK", "RB", "CB", "CB", "CB", "LB", "RM", "CM", "CM", "LM", "ST"]
};
const formationOptions = [...Object.keys(formations), "Personalizada"];

const mentalities = ["Equilibrada", "Defensiva", "Ofensiva", "Pressao alta", "Contra-ataque"];
const attackStyles = ["Posse curta", "Jogo direto", "Explorar pontas", "Ataques pelo centro", "Cruzamentos"];
const defenseStyles = ["Bloco medio", "Bloco baixo", "Pressao alta", "Marcacao agressiva", "Compacto"];
const positions = ["GK", "RB", "LB", "CB", "DM", "CM", "AM", "RM", "LM", "RW", "LW", "ST"];
const fieldPositionOrder = ["GK", "RB", "CB", "LB", "DM", "RM", "CM", "LM", "AM", "RW", "ST", "LW"];
const outfieldAttrs = ["pace", "passing", "dribbling", "finishing", "crossing", "tackling", "vision", "stamina"];
const gkAttrs = ["reflexes", "handling", "positioningGk", "oneOnOne", "distribution", "aerial"];
const trainableAttrs = ["pace", "passing", "dribbling", "finishing", "crossing", "tackling", "vision", "stamina", "reflexes", "handling", "positioningGk", "oneOnOne", "distribution", "aerial"];
const attrVersion = 2;
const roleVersion = 2;
const economyVersion = 2;
const identityVersion = 2;
const roleDefs = {
  GK: [
    { id: "gk_def", name: "Goleiro seguro", desc: "Prioriza defesa, posicionamento e jogo simples." },
    { id: "gk_sweeper", name: "Goleiro libero", desc: "Sai mais do gol e ajuda na construcao." }
  ],
  CB: [
    { id: "cb_stopper", name: "Zagueiro marcador", desc: "Foco em duelos, desarme e protecao da area." },
    { id: "cb_builder", name: "Zagueiro construtor", desc: "Ajuda a sair jogando com passe e visao." }
  ],
  RB: [
    { id: "fb_def", name: "Lateral defensivo", desc: "Fecha o lado e sobe com cautela." },
    { id: "fb_attack", name: "Lateral ofensivo", desc: "Apoia por fora e cruza com frequencia." }
  ],
  LB: [
    { id: "fb_def", name: "Lateral defensivo", desc: "Fecha o lado e sobe com cautela." },
    { id: "fb_attack", name: "Lateral ofensivo", desc: "Apoia por fora e cruza com frequencia." }
  ],
  DM: [
    { id: "dm_anchor", name: "Volante fixo", desc: "Guarda posicao e protege a zaga." },
    { id: "dm_playmaker", name: "Volante armador", desc: "Organiza a saida com passe e visao." }
  ],
  CM: [
    { id: "cm_box", name: "Meia box-to-box", desc: "Contribui nas duas areas com intensidade." },
    { id: "cm_playmaker", name: "Meia organizador", desc: "Controla o ritmo com passe e visao." }
  ],
  AM: [
    { id: "am_creator", name: "Meia criativo", desc: "Procura passes decisivos entre linhas." },
    { id: "am_shadow", name: "Segundo atacante", desc: "Ataca a area e finaliza mais." }
  ],
  RM: [
    { id: "wm_cross", name: "Meia aberto", desc: "Dá amplitude, cruza e recompõe." },
    { id: "winger_cut", name: "Ponta por dentro", desc: "Ataca diagonal e busca finalizacao." }
  ],
  LM: [
    { id: "wm_cross", name: "Meia aberto", desc: "Dá amplitude, cruza e recompõe." },
    { id: "winger_cut", name: "Ponta por dentro", desc: "Ataca diagonal e busca finalizacao." }
  ],
  RW: [
    { id: "winger_cross", name: "Ponta aberto", desc: "Vai ao fundo e cruza." },
    { id: "winger_inside", name: "Ponta invertido", desc: "Corta para dentro e finaliza." }
  ],
  LW: [
    { id: "winger_cross", name: "Ponta aberto", desc: "Vai ao fundo e cruza." },
    { id: "winger_inside", name: "Ponta invertido", desc: "Corta para dentro e finaliza." }
  ],
  ST: [
    { id: "st_poacher", name: "Finalizador", desc: "Fica perto da area e vive de chances." },
    { id: "st_target", name: "Pivo", desc: "Prende zagueiros e conecta o ataque." }
  ]
};
const roleWeights = {
  gk_def: { reflexes: 0.28, handling: 0.24, positioningGk: 0.22, aerial: 0.12, oneOnOne: 0.1, distribution: 0.04 },
  gk_sweeper: { reflexes: 0.22, oneOnOne: 0.2, distribution: 0.2, positioningGk: 0.18, handling: 0.12, pace: 0.08 },
  cb_stopper: { tackling: 0.32, defending: 0.24, aerial: 0.16, stamina: 0.1, pace: 0.08, passing: 0.06, vision: 0.04 },
  cb_builder: { passing: 0.24, vision: 0.18, tackling: 0.18, defending: 0.16, aerial: 0.1, pace: 0.08, stamina: 0.06 },
  fb_def: { tackling: 0.26, defending: 0.2, pace: 0.16, stamina: 0.16, passing: 0.1, crossing: 0.08, dribbling: 0.04 },
  fb_attack: { crossing: 0.24, pace: 0.2, stamina: 0.16, dribbling: 0.14, passing: 0.1, tackling: 0.1, defending: 0.06 },
  dm_anchor: { tackling: 0.3, defending: 0.22, stamina: 0.14, passing: 0.12, vision: 0.1, pace: 0.06, aerial: 0.06 },
  dm_playmaker: { passing: 0.28, vision: 0.24, tackling: 0.16, defending: 0.12, stamina: 0.1, dribbling: 0.06, pace: 0.04 },
  cm_box: { stamina: 0.22, passing: 0.18, tackling: 0.16, vision: 0.14, dribbling: 0.1, pace: 0.1, finishing: 0.1 },
  cm_playmaker: { passing: 0.3, vision: 0.26, dribbling: 0.14, stamina: 0.1, tackling: 0.08, finishing: 0.06, pace: 0.06 },
  am_creator: { vision: 0.3, passing: 0.24, dribbling: 0.18, finishing: 0.1, pace: 0.08, stamina: 0.06, crossing: 0.04 },
  am_shadow: { finishing: 0.26, attacking: 0.2, dribbling: 0.16, pace: 0.12, vision: 0.1, passing: 0.1, stamina: 0.06 },
  wm_cross: { crossing: 0.24, stamina: 0.18, pace: 0.16, passing: 0.14, dribbling: 0.12, tackling: 0.1, vision: 0.06 },
  winger_cut: { dribbling: 0.24, pace: 0.2, finishing: 0.18, vision: 0.12, passing: 0.1, crossing: 0.1, stamina: 0.06 },
  winger_cross: { pace: 0.24, crossing: 0.22, dribbling: 0.18, passing: 0.1, vision: 0.08, finishing: 0.08, stamina: 0.1 },
  winger_inside: { dribbling: 0.24, finishing: 0.22, pace: 0.2, vision: 0.1, passing: 0.1, crossing: 0.08, stamina: 0.06 },
  st_poacher: { finishing: 0.34, attacking: 0.2, pace: 0.14, dribbling: 0.1, vision: 0.08, stamina: 0.08, passing: 0.06 },
  st_target: { attacking: 0.22, finishing: 0.2, aerial: 0.18, passing: 0.14, vision: 0.1, stamina: 0.1, dribbling: 0.06 }
};
const positionProfiles = {
  GK: { pace: [-26, -12], defending: [-20, -8], attacking: [-42, -26], passing: [-14, 2], dribbling: [-40, -24], finishing: [-46, -30], crossing: [-38, -22], tackling: [-32, -16], vision: [-18, 0] },
  CB: { pace: [-12, 4], defending: [4, 14], attacking: [-28, -14], passing: [-8, 6], dribbling: [-22, -8], finishing: [-30, -16], crossing: [-20, -8], tackling: [4, 14], vision: [-10, 4] },
  RB: { pace: [-2, 14], defending: [-2, 10], attacking: [-16, -4], passing: [-8, 6], dribbling: [-8, 8], finishing: [-24, -10], crossing: [0, 14], tackling: [-1, 11], vision: [-12, 2] },
  LB: { pace: [-2, 14], defending: [-2, 10], attacking: [-16, -4], passing: [-8, 6], dribbling: [-8, 8], finishing: [-24, -10], crossing: [0, 14], tackling: [-1, 11], vision: [-12, 2] },
  DM: { pace: [-10, 4], defending: [0, 12], attacking: [-22, -8], passing: [-2, 12], dribbling: [-12, 2], finishing: [-28, -12], crossing: [-18, -6], tackling: [2, 14], vision: [-2, 10] },
  CM: { pace: [-8, 6], defending: [-8, 4], attacking: [-12, 2], passing: [2, 14], dribbling: [-2, 10], finishing: [-16, 0], crossing: [-10, 4], tackling: [-8, 6], vision: [2, 14] },
  AM: { pace: [-4, 10], defending: [-24, -10], attacking: [0, 12], passing: [2, 14], dribbling: [2, 14], finishing: [-2, 12], crossing: [-8, 6], tackling: [-24, -10], vision: [4, 16] },
  RM: { pace: [0, 14], defending: [-18, -6], attacking: [-2, 10], passing: [-4, 8], dribbling: [0, 14], finishing: [-12, 2], crossing: [3, 16], tackling: [-18, -4], vision: [-6, 6] },
  LM: { pace: [0, 14], defending: [-18, -6], attacking: [-2, 10], passing: [-4, 8], dribbling: [0, 14], finishing: [-12, 2], crossing: [3, 16], tackling: [-18, -4], vision: [-6, 6] },
  RW: { pace: [2, 16], defending: [-24, -10], attacking: [0, 12], passing: [-6, 6], dribbling: [3, 16], finishing: [-6, 8], crossing: [0, 14], tackling: [-24, -10], vision: [-8, 6] },
  LW: { pace: [2, 16], defending: [-24, -10], attacking: [0, 12], passing: [-6, 6], dribbling: [3, 16], finishing: [-6, 8], crossing: [0, 14], tackling: [-24, -10], vision: [-8, 6] },
  ST: { pace: [-2, 12], defending: [-30, -16], attacking: [3, 15], passing: [-14, 0], dribbling: [-4, 10], finishing: [5, 17], crossing: [-18, -6], tackling: [-30, -16], vision: [-10, 4] }
};
const slotWeights = {
  GK: { reflexes: 0.28, handling: 0.22, positioningGk: 0.2, oneOnOne: 0.14, distribution: 0.08, aerial: 0.08 },
  CB: { tackling: 0.28, defending: 0.22, stamina: 0.12, passing: 0.12, pace: 0.1, vision: 0.08, aerial: 0.08 },
  RB: { pace: 0.2, tackling: 0.2, crossing: 0.18, stamina: 0.15, passing: 0.12, defending: 0.1, dribbling: 0.05 },
  LB: { pace: 0.2, tackling: 0.2, crossing: 0.18, stamina: 0.15, passing: 0.12, defending: 0.1, dribbling: 0.05 },
  DM: { tackling: 0.24, passing: 0.2, defending: 0.18, vision: 0.14, stamina: 0.12, pace: 0.06, dribbling: 0.06 },
  CM: { passing: 0.25, vision: 0.2, stamina: 0.14, dribbling: 0.12, tackling: 0.1, pace: 0.08, finishing: 0.06, defending: 0.05 },
  AM: { vision: 0.25, passing: 0.2, dribbling: 0.18, finishing: 0.14, pace: 0.1, stamina: 0.08, crossing: 0.05 },
  RM: { pace: 0.2, crossing: 0.2, dribbling: 0.17, passing: 0.14, stamina: 0.12, finishing: 0.08, tackling: 0.05, vision: 0.04 },
  LM: { pace: 0.2, crossing: 0.2, dribbling: 0.17, passing: 0.14, stamina: 0.12, finishing: 0.08, tackling: 0.05, vision: 0.04 },
  RW: { pace: 0.22, dribbling: 0.2, crossing: 0.16, finishing: 0.14, passing: 0.1, vision: 0.08, stamina: 0.06, tackling: 0.04 },
  LW: { pace: 0.22, dribbling: 0.2, crossing: 0.16, finishing: 0.14, passing: 0.1, vision: 0.08, stamina: 0.06, tackling: 0.04 },
  ST: { finishing: 0.28, attacking: 0.18, pace: 0.14, dribbling: 0.12, vision: 0.1, stamina: 0.08, passing: 0.06, crossing: 0.04 }
};
const slotLine = {
  GK: "gk",
  RB: "def",
  CB: "def",
  LB: "def",
  DM: "dm",
  RM: "mid",
  CM: "mid",
  LM: "mid",
  AM: "am",
  RW: "att",
  ST: "att",
  LW: "att"
};
const lineY = { gk: 86, def: 74, dm: 60, mid: 48, am: 34, att: 18 };

const clubs = [
  { id: "aurora", name: "Aurora FC", budget: 32, reputation: 73, style: "elenco jovem e pontas rapidos", color: "#0f6f49" },
  { id: "ferro", name: "Ferroviario Capital", budget: 22, reputation: 66, style: "time fisico, competitivo e direto", color: "#8b2f2f" },
  { id: "litoral", name: "Litoral Azul", budget: 45, reputation: 78, style: "boa base tecnica e torcida exigente", color: "#1d5e92" },
  { id: "serra", name: "Serra Real", budget: 16, reputation: 58, style: "clube pequeno, caixa curto e garotos promissores", color: "#6d5a24" },
  { id: "metropole", name: "Metropole United", budget: 60, reputation: 84, style: "favorito rico, elenco caro e pressao por titulo", color: "#232323" },
  { id: "norte", name: "Norte Verde", budget: 26, reputation: 70, style: "defesa forte, estadio dificil e transicoes rapidas", color: "#225a38" },
  { id: "atlantico", name: "Atlantico SC", budget: 38, reputation: 76, style: "time tecnico, laterais agressivos e bom controle de jogo", color: "#116a9c" },
  { id: "campinas", name: "Campinas 11", budget: 20, reputation: 63, style: "elenco organizado, mercado criativo e bom trabalho de base", color: "#4b7f2a" },
  { id: "imperio", name: "Imperio Rubro", budget: 55, reputation: 82, style: "clube grande, ataque forte e cobranca por titulos", color: "#9f2323" },
  { id: "planalto", name: "Planalto FC", budget: 18, reputation: 61, style: "time compacto, reativo e dificil de quebrar", color: "#7a6033" },
  { id: "porto", name: "Porto Dourado", budget: 42, reputation: 75, style: "boa estrutura, elenco equilibrado e pressao moderada", color: "#b58a1d" },
  { id: "barreira", name: "Barreira Sul", budget: 14, reputation: 56, style: "defesa baixa, jogo direto e foco em sobrevivencia", color: "#57595c" },
  { id: "vale", name: "Vale Branco", budget: 24, reputation: 67, style: "meio-campo fisico e bom desempenho como mandante", color: "#d7d7d7" },
  { id: "solares", name: "Solares FC", budget: 34, reputation: 72, style: "pontas velozes, transicoes e elenco em ascensao", color: "#d9a018" },
  { id: "cidade", name: "Cidade Alta", budget: 28, reputation: 69, style: "posse curta, jovens tecnicos e defesa irregular", color: "#5b3d92" },
  { id: "fronteira", name: "Fronteira EC", budget: 12, reputation: 54, style: "clube de menor investimento, fisico e competitivo", color: "#2f4f4f" },
  { id: "real-bosque", name: "Real Bosque", budget: 48, reputation: 79, style: "elenco caro, criativo e forte entre linhas", color: "#1d6b54" },
  { id: "operario", name: "Operario Central", budget: 19, reputation: 62, style: "marcacao agressiva, bola parada e intensidade", color: "#303030" },
  { id: "maritimo", name: "Maritimo Norte", budget: 30, reputation: 71, style: "time de amplitude, cruzamentos e laterais fortes", color: "#174a7c" },
  { id: "capital", name: "Capital Azul", budget: 52, reputation: 81, style: "favorito de posse, elenco profundo e alta expectativa", color: "#243b80" },
  { id: "ribeira", name: "Ribeira FC", budget: 10, reputation: 52, style: "clube tradicional de interior, intenso e formador", color: "#315f8a", division: 2 },
  { id: "guara", name: "Guara Esporte", budget: 13, reputation: 55, style: "time fisico, competitivo e forte em casa", color: "#8c3a2f", division: 2 },
  { id: "cerrado", name: "Cerrado Clube", budget: 11, reputation: 53, style: "jogo direto, bola parada e elenco barato", color: "#9b7a2e", division: 2 },
  { id: "vila-mar", name: "Vila Maritima", budget: 15, reputation: 58, style: "pontas velozes e torcida regional forte", color: "#1e7c92", division: 2 },
  { id: "nacional-serra", name: "Nacional da Serra", budget: 17, reputation: 60, style: "candidato ao acesso, defesa madura e caixa estavel", color: "#264f7c", division: 2 },
  { id: "estrela-sul", name: "Estrela Sul", budget: 12, reputation: 54, style: "clube jovem, agressivo e de transicao rapida", color: "#b23b4a", division: 2 },
  { id: "muralha", name: "Muralha AC", budget: 9, reputation: 50, style: "sobrevive com bloco baixo e estadio pesado", color: "#4c5358", division: 2 },
  { id: "bandeirantes", name: "Bandeirantes FC", budget: 18, reputation: 61, style: "estrutura razoavel e elenco experiente", color: "#244d2f", division: 2 },
  { id: "rio-claro", name: "Rio Claro Norte", budget: 14, reputation: 56, style: "boa categoria de base e mercado regional", color: "#4a8fc2", division: 2 },
  { id: "tigres-oeste", name: "Tigres do Oeste", budget: 16, reputation: 59, style: "ataque fisico, pressao alta e torcida exigente", color: "#d08a22", division: 2 },
  { id: "uniao-praia", name: "Uniao Praia", budget: 8, reputation: 48, style: "clube pequeno, aposta em emprestimos e garotos", color: "#2e8a78", division: 2 },
  { id: "cruzeiro-verde", name: "Cruzeiro Verde", budget: 19, reputation: 62, style: "projeto de acesso, elenco equilibrado e boa base", color: "#1f6a41", division: 2 },
  { id: "minas-real", name: "Minas Real", budget: 15, reputation: 57, style: "meio-campo tecnico e defesa instavel", color: "#6a4c93", division: 2 },
  { id: "horizonte", name: "Horizonte SC", budget: 13, reputation: 55, style: "time organizado, linhas compactas e pouca margem financeira", color: "#3b6f9e", division: 2 },
  { id: "jacaranda", name: "Jacaranda Clube", budget: 10, reputation: 51, style: "clube formador, elenco jovem e irregular", color: "#7b4d9d", division: 2 },
  { id: "sao-bento-sul", name: "Sao Bento Sul", budget: 18, reputation: 60, style: "camisa pesada na divisao e forte jogo aereo", color: "#2f4f78", division: 2 },
  { id: "rocha-negra", name: "Rocha Negra", budget: 12, reputation: 54, style: "marcacao dura, contra-ataque e mando competitivo", color: "#242424", division: 2 },
  { id: "ponte-dourada", name: "Ponte Dourada", budget: 16, reputation: 58, style: "clube em crescimento, laterais ofensivos e base util", color: "#c7a02d", division: 2 },
  { id: "america-campos", name: "America Campos", budget: 20, reputation: 63, style: "favorito ao acesso, elenco caro para a divisao", color: "#b43232", division: 2 },
  { id: "itaguacu", name: "Itaguacu FC", budget: 9, reputation: 49, style: "campanha de resistencia, garra e folha baixa", color: "#366b52", division: 2 }
];

const nationalityPools = {
  BR: {
    label: "Brasil",
    weight: 76,
    youthWeight: 72,
    first: ["Joao", "Vinicius", "Caio", "Renan", "Breno", "Gabriel", "Marcos", "Davi", "Heitor", "Icaro", "Murilo", "Yuri", "Nathan", "Wallace", "Everton", "Kaua", "Danilo", "Ruan", "Samuel", "Mateus", "Alan", "Kelvin", "Wesley", "Estevao", "Luan", "Adriel", "Maicon", "Leandro", "Rafael", "Otavio"],
    last: ["Andrade", "Monteiro", "Fagundes", "Siqueira", "Assuncao", "Barros", "Nascimento", "Pacheco", "Macedo", "Teles", "Peixoto", "Rezende", "Cardoso", "Farias", "Azevedo", "Batista", "Queiroz", "Valenca", "Silveira", "Moreira", "Arantes", "Sales", "Prado", "Rangel"]
  },
  AR: {
    label: "Argentina",
    weight: 7,
    youthWeight: 8,
    first: ["Facundo", "Mateo", "Lautaro", "Joaquin", "Franco", "Emiliano", "Nicolas", "Tomas", "Ramiro", "Agustin", "Ezequiel", "Valentin"],
    last: ["Benitez", "Almada", "Ferreyra", "Sosa", "Aguirre", "Pereyra", "Riquelme", "Acuna", "Villalba", "Dominguez", "Medina", "Coronel"]
  },
  UY: {
    label: "Uruguai",
    weight: 4,
    youthWeight: 5,
    first: ["Agustin", "Matias", "Rodrigo", "Emiliano", "Santiago", "Federico", "Joaquin", "Bruno", "Ignacio", "Maximiliano"],
    last: ["Bentancur", "Silva", "Rodriguez", "Pereira", "Cabrera", "Olivera", "Mendez", "Castro", "Lemos", "Saravia"]
  },
  PY: {
    label: "Paraguai",
    weight: 3,
    youthWeight: 4,
    first: ["Derlis", "Miguel", "Oscar", "Ramon", "Angel", "Julio", "Nestor", "Cristhian", "Blas", "Hernan"],
    last: ["Benitez", "Cardozo", "Ferreira", "Riveros", "Morel", "Ayala", "Caceres", "Villasanti", "Enciso", "Gamarra"]
  },
  CO: {
    label: "Colombia",
    weight: 3,
    youthWeight: 3,
    first: ["Juan", "Andres", "Yerson", "Kevin", "Jhon", "Deiver", "Camilo", "Luis", "Yeison", "Stiven"],
    last: ["Moreno", "Quinones", "Zapata", "Murillo", "Mosquera", "Valencia", "Borrero", "Cuesta", "Cifuentes", "Palacios"]
  },
  CL: {
    label: "Chile",
    weight: 3,
    youthWeight: 3,
    first: ["Benjamin", "Vicente", "Matias", "Ignacio", "Cristobal", "Sebastian", "Esteban", "Diego", "Maximiliano", "Nicolas"],
    last: ["Vargas", "Fuenzalida", "Aravena", "Mella", "Pizarro", "Contreras", "Saavedra", "Rojas", "Opazo", "Medel"]
  },
  PE: {
    label: "Peru",
    weight: 2,
    youthWeight: 2,
    first: ["Renato", "Paolo", "Jairo", "Andy", "Luis", "Gianluca", "Carlos", "Joao", "Alexis", "Piero"],
    last: ["Cueva", "Quispe", "Tapia", "Flores", "Advincula", "Carrillo", "Ruidiaz", "Callens", "Aquino", "Yotun"]
  },
  BO: {
    label: "Bolivia",
    weight: 1,
    youthWeight: 1,
    first: ["Marcelo", "Erwin", "Miguel", "Jaime", "Leonardo", "Bruno", "Jeyson", "Carlos"],
    last: ["Saucedo", "Vaca", "Bejarano", "Chumacero", "Arce", "Torrico", "Justiniano", "Sagredo"]
  },
  EC: {
    label: "Equador",
    weight: 1,
    youthWeight: 1,
    first: ["Kendry", "Moises", "Piero", "Jordy", "Alan", "Jeremy", "Jose", "Nilson"],
    last: ["Caicedo", "Preciado", "Estupinan", "Plata", "Mina", "Arboleda", "Angulo", "Sornoza"]
  },
  VE: {
    label: "Venezuela",
    weight: 1,
    youthWeight: 1,
    first: ["Yeferson", "Jose", "Darwin", "Ronaldo", "Wuilker", "Eduard", "Jefferson", "Cristian"],
    last: ["Soteldo", "Rondon", "Machis", "Herrera", "Savaria", "Osorio", "Cadiz", "Aramburu"]
  }
};

const nationalityAliases = {
  BRA: "BR", BRASIL: "BR", BRAZIL: "BR",
  ARG: "AR", ARGENTINA: "AR",
  URU: "UY", URUGUAY: "UY",
  PAR: "PY", PRY: "PY", PARAGUAY: "PY",
  COL: "CO", COLOMBIA: "CO",
  CHI: "CL", CHL: "CL", CHILE: "CL",
  PER: "PE", PERU: "PE",
  BOL: "BO", BOLIVIA: "BO",
  ECU: "EC", ECUADOR: "EC", EQUADOR: "EC",
  VEN: "VE", VENEZUELA: "VE",
  ITA: "IT", ITALY: "IT", ITALIA: "IT",
  NED: "NL", NETHERLANDS: "NL", HOLANDA: "NL",
  FRA: "FR", FRANCE: "FR", FRANCA: "FR",
  ESP: "ES", SPAIN: "ES", ESPANHA: "ES",
  POR: "PT", PORTUGAL: "PT",
  ANG: "AO", ANGOLA: "AO",
  BEL: "BE", BELGIUM: "BE",
  ECU: "EC",
  USA: "US",
  CIV: "CI",
  ENG: "EN"
};

const nationalityExtraLabels = {
  IT: "Italia",
  NL: "Holanda",
  FR: "Franca",
  ES: "Espanha",
  PT: "Portugal",
  AO: "Angola",
  BE: "Belgica",
  US: "Estados Unidos",
  CRC: "Costa Rica",
  PAN: "Panama",
  MEX: "Mexico",
  NGA: "Nigeria",
  GHA: "Gana",
  SEN: "Senegal",
  CI: "Costa do Marfim",
  CMR: "Camaroes",
  CPV: "Cabo Verde",
  RSA: "Africa do Sul",
  MAR: "Marrocos",
  GER: "Alemanha",
  CRO: "Croacia",
  SRB: "Servia",
  SUI: "Suica",
  GRE: "Grecia",
  JPN: "Japao",
  KOR: "Coreia do Sul",
  ALB: "Albania",
  RUS: "Russia",
  EN: "Inglaterra"
};

function normalizeNationalityCode(code = "BR") {
  const raw = String(code || "BR").trim().toUpperCase();
  return nationalityAliases[raw] || raw || "BR";
}

const clubLogoProfiles = {
  aurora: { shape: "shield", accent: "#f2b84b", symbol: "A" },
  ferro: { shape: "round", accent: "#d7d7d7", symbol: "FC" },
  litoral: { shape: "wave", accent: "#75c9e8", symbol: "LA" },
  serra: { shape: "diamond", accent: "#e0c46b", symbol: "SR" },
  metropole: { shape: "shield", accent: "#d7d7d7", symbol: "MU" },
  norte: { shape: "round", accent: "#cfe866", symbol: "NV" },
  atlantico: { shape: "wave", accent: "#f4f6f8", symbol: "AS" },
  campinas: { shape: "shield", accent: "#f0d35b", symbol: "11" },
  imperio: { shape: "diamond", accent: "#111111", symbol: "IR" },
  planalto: { shape: "shield", accent: "#e0b653", symbol: "P" },
  porto: { shape: "round", accent: "#204c7a", symbol: "PD" },
  barreira: { shape: "shield", accent: "#f0f0f0", symbol: "BS" },
  vale: { shape: "diamond", accent: "#2f6f4e", symbol: "VB" },
  solares: { shape: "round", accent: "#8b2f2f", symbol: "S" },
  cidade: { shape: "shield", accent: "#f1c84b", symbol: "CA" },
  fronteira: { shape: "diamond", accent: "#d9d3b8", symbol: "FE" },
  "real-bosque": { shape: "shield", accent: "#f2d16b", symbol: "RB" },
  operario: { shape: "round", accent: "#d34545", symbol: "OC" },
  maritimo: { shape: "wave", accent: "#ffffff", symbol: "MN" },
  capital: { shape: "shield", accent: "#59b6e8", symbol: "CA" },
  ribeira: { shape: "wave", accent: "#d8e8f2", symbol: "RF" },
  guara: { shape: "shield", accent: "#f0c24f", symbol: "GE" },
  cerrado: { shape: "diamond", accent: "#4f7b3d", symbol: "CC" },
  "vila-mar": { shape: "wave", accent: "#f4f4f4", symbol: "VM" },
  "nacional-serra": { shape: "shield", accent: "#d3c76a", symbol: "NS" },
  "estrela-sul": { shape: "round", accent: "#f4d35e", symbol: "ES" },
  muralha: { shape: "shield", accent: "#c7c7c7", symbol: "MA" },
  bandeirantes: { shape: "diamond", accent: "#e1c24a", symbol: "BF" },
  "rio-claro": { shape: "wave", accent: "#ffffff", symbol: "RC" },
  "tigres-oeste": { shape: "round", accent: "#1f1f1f", symbol: "TO" },
  "uniao-praia": { shape: "wave", accent: "#f4e7a1", symbol: "UP" },
  "cruzeiro-verde": { shape: "shield", accent: "#e8e8e8", symbol: "CV" },
  "minas-real": { shape: "diamond", accent: "#d6c06a", symbol: "MR" },
  horizonte: { shape: "round", accent: "#f1f6fa", symbol: "H" },
  jacaranda: { shape: "shield", accent: "#7fc47a", symbol: "JC" },
  "sao-bento-sul": { shape: "shield", accent: "#f4f4f4", symbol: "SB" },
  "rocha-negra": { shape: "diamond", accent: "#b63c3c", symbol: "RN" },
  "ponte-dourada": { shape: "round", accent: "#224f78", symbol: "PD" },
  "america-campos": { shape: "shield", accent: "#ffffff", symbol: "AC" },
  itaguacu: { shape: "diamond", accent: "#e0d3a6", symbol: "IF" }
};

let state = null;
let liveTimer = null;
let dayAdvanceTimer = null;
let draggedPlayer = null;
let draggedSlot = -1;
let clubSelectDivision = 1;
let selectedGameMode = null;
let customDatabase = null;
let menuScreen = "menu";
let currentSaveSlot = null;
let loadingDepth = 0;
let deferredInstallPrompt = null;
let tapMovePlayer = null;
let tapMoveSlot = -1;
let tapMoveSource = "";
let matchSimRunning = false;

const saveSlotKeys = ["footCoachSave1", "footCoachSave2", "footCoachSave3"];
const recentSaveKey = "footCoachRecentSlot";

const monthNames = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const leagueMonthlyRounds = [0, 0, 0, 3, 4, 4, 5, 4, 4, 5, 5, 4];
const yellowCardQuota = 5;
const maxBenchPlayers = 9;
const contractWarningDays = { year: 365, halfYear: 183 };
const transferWindows = [
  { id: "jan", name: "Janela de Janeiro", start: 1, end: 31 },
  { id: "mid", name: "Janela de meio de ano", start: 182, end: 243 }
];
const seasonStartYear = 2026;
const youthIntakeDay = 196;
const youthAcademyLimit = 15;
const promotionSlots = 4;
const cupRoundDays = [49, 84, 119, 154, 210, 266];
const leaguePrizePools = {
  1: { champion: 18, floor: 3.5 },
  2: { champion: 7.5, floor: 1.1 }
};
const cupPrizeByRound = [0.35, 0.55, 0.9, 1.5, 2.4, 4.2, 7.5];
const facilityTypes = {
  training: { label: "Treino", desc: "Acelera a evolucao tecnica e fisica do elenco profissional.", baseCost: 4.5 },
  academy: { label: "Categoria de base", desc: "Define o nivel dos garotos formados e a qualidade das peneiras.", baseCost: 3.8 },
  stadium: { label: "Estadio", desc: "Melhora o ambiente de jogo e aumenta o peso do mando de campo.", baseCost: 6.2 }
};

function showLoading(message = "Preparando o jogo...", title = "Carregando") {
  const overlay = document.querySelector("#loadingOverlay");
  if (!overlay) return;
  loadingDepth += 1;
  const titleEl = document.querySelector("#loadingTitle");
  const messageEl = document.querySelector("#loadingMessage");
  if (titleEl) titleEl.textContent = title;
  if (messageEl) messageEl.textContent = message;
  overlay.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");
}

function hideLoading(force = false) {
  const overlay = document.querySelector("#loadingOverlay");
  if (!overlay) return;
  loadingDepth = force ? 0 : Math.max(0, loadingDepth - 1);
  if (loadingDepth > 0) return;
  overlay.classList.add("hidden");
  overlay.setAttribute("aria-hidden", "true");
}

function runWithLoading(message, callback, title = "Carregando") {
  showLoading(message, title);
  setTimeout(() => {
    requestAnimationFrame(() => {
      try {
        callback();
      } catch (error) {
        console.error(error);
        if (typeof showAlertModal === "function") showAlertModal("Erro", error.message || String(error));
      } finally {
        setTimeout(() => hideLoading(), 80);
      }
    });
  }, 30);
}

let scheduledContentLoading = null;
const contentRenderCache = {
  market: new Map(),
  offers: new Map(),
  transfers: new Map()
};
let externalMarketCardsCache = { key: "", cards: [] };

function updateHeavyContent(message, callback, title = "Atualizando") {
  clearTimeout(scheduledContentLoading);
  scheduledContentLoading = null;
  runWithLoading(message, callback, title);
}

function scheduleHeavyContentUpdate(message, callback, delay = 220) {
  clearTimeout(scheduledContentLoading);
  scheduledContentLoading = setTimeout(() => {
    scheduledContentLoading = null;
    updateHeavyContent(message, callback);
  }, delay);
}

function scheduleMarketContentUpdate(message, delay = 220) {
  clearTimeout(scheduledContentLoading);
  scheduledContentLoading = setTimeout(() => {
    scheduledContentLoading = null;
    updateMarketContent(message);
  }, delay);
}

function tabLoadingMessage(tabName) {
  const messages = {
    market: "Atualizando mercado, observacoes e propostas...",
    league: "Atualizando tabelas e competicoes...",
    calendar: "Montando calendario da temporada...",
    club: "Atualizando instalacoes e dados do clube...",
    squad: "Organizando elenco, base e peneiras...",
    training: "Atualizando plano de treinos e atributos...",
    lineup: "Atualizando escalacao e encaixe tatico..."
  };
  return messages[tabName] || "Atualizando dados da tela...";
}

function marketViewNeedsHeavyRender(view = state?.marketPlayerSubTab || "listed") {
  if (!state) return false;
  if (view === "interest") return (state.marketInterestList || []).length > 0;
  if (view === "search") return Boolean(state.marketSearchPerformed);
  if (view === "scouted") {
    const hasScoutData = Object.values(state.scouting || {}).some((item) => Number(item?.level || item || 0) > 0);
    return hasScoutData || (state.scoutingJobs || []).length > 0;
  }
  return true;
}

function updateMarketContent(message = "Atualizando mercado...") {
  if (marketViewNeedsHeavyRender()) updateHeavyContent(message, renderMarket);
  else renderMarket();
}

function marketSectionNeedsHeavyRender(section = state?.marketSubTab || "players") {
  if (!state) return false;
  if (section === "players") return marketViewNeedsHeavyRender();
  if (section === "offers") return (state.offers || []).length > 0;
  if (section === "history") return (state.transferHistory || []).length > 0;
  return false;
}

function renderActiveMarketSection() {
  renderMarketSections();
  const section = state.marketSubTab || "players";
  if (section === "offers") {
    renderOffers();
    return;
  }
  if (section === "history") {
    renderTransferHistory();
    return;
  }
  renderMarket();
}

function updateMarketSectionContent(message = "Atualizando mercado...") {
  if (marketSectionNeedsHeavyRender()) updateHeavyContent(message, renderActiveMarketSection);
  else renderActiveMarketSection();
}

function safeRender(fallbackMessage = "Nao foi possivel atualizar a tela.") {
  try {
    render();
    return true;
  } catch (error) {
    console.error("Erro ao renderizar o jogo.", error);
    hideLoading(true);
    if (state) {
      state.alertModal = {
        title: "Erro ao abrir tela",
        body: `${fallbackMessage} O save foi preservado. Tente voltar ao menu e carregar novamente. Detalhe: ${error.message || error}`
      };
      try {
        document.querySelector("#mainMenu")?.classList.add("hidden");
        document.querySelector("#modeSelect")?.classList.add("hidden");
        document.querySelector("#clubSelect")?.classList.add("hidden");
        document.querySelector("#gameView")?.classList.remove("hidden");
        renderAlertModal();
      } catch (modalError) {
        console.warn("Falha ao mostrar alerta de renderizacao.", modalError);
      }
    } else {
      menuScreen = "menu";
      document.querySelector("#mainMenu")?.classList.remove("hidden");
      document.querySelector("#modeSelect")?.classList.add("hidden");
      document.querySelector("#clubSelect")?.classList.add("hidden");
      document.querySelector("#gameView")?.classList.add("hidden");
      setDatabaseStatus(`Erro ao atualizar tela: ${error.message || error}`);
    }
    return false;
  }
}

function resetTransientUiState() {
  if (dayAdvanceTimer) stopDayAdvance(false);
  stopLiveTimer();
  draggedPlayer = null;
  draggedSlot = -1;
  tapMovePlayer = null;
  tapMoveSlot = -1;
  tapMoveSource = "";
  document.body?.classList.remove("dragging-player", "tap-moving-player");
}

function prepareStateForEntry() {
  if (!state) return;
  state.negotiation = null;
  state.offerModal = null;
  state.alertModal = null;
  if (!state.liveMatch) showTab("dashboard");
  else showTab("match");
}

function updateInstallButton() {
  const button = document.querySelector("#installAppBtn");
  if (!button) return;
  button.classList.toggle("hidden", !deferredInstallPrompt);
}

function registerPwa() {
  if (typeof window === "undefined") return;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    updateInstallButton();
  });
  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    updateInstallButton();
  });
  if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Service worker nao registrado.", error);
    });
  }
}

async function promptInstallApp() {
  if (!deferredInstallPrompt) {
    if (typeof showAlertModal === "function" && state) {
      showAlertModal("Instalacao indisponivel", "Abra o FootCoach por um servidor local ou por HTTPS para o navegador liberar a instalacao como aplicativo.");
    }
    return;
  }
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  updateInstallButton();
}

function clearTapMove(skipRender = false) {
  tapMovePlayer = null;
  tapMoveSlot = -1;
  tapMoveSource = "";
  document.body?.classList.remove("tap-moving-player");
  if (!skipRender && state) render();
}

function setTapMove(playerId, slotIndex = -1, source = "") {
  tapMovePlayer = playerId;
  tapMoveSlot = Number(slotIndex);
  tapMoveSource = source;
  document.body?.classList.add("tap-moving-player");
  if (state) render();
}

function swapBenchSlots(firstIndex, secondIndex) {
  const context = state.liveMatch ? "match" : "lineup";
  const benchIds = activeBenchSlotIds(context);
  const first = benchIds[firstIndex];
  benchIds[firstIndex] = benchIds[secondIndex];
  benchIds[secondIndex] = first;
  setBenchSlotIds(benchIds, context);
  saveState();
  render();
}

function handleTapMove(target) {
  if (!state) return false;
  const token = target.closest("[data-drag-player]");
  const drop = target.closest("[data-drop-slot], [data-formation-slot], [data-drop-bench], [data-drop-bench-index], [data-drop-unrelated]");

  if (tapMovePlayer && token && token.dataset.dragPlayer !== tapMovePlayer) {
    const source = token.dataset.dragSource;
    const slot = Number(token.dataset.dragSlot);
    const playerId = tapMovePlayer;
    const selectedSlot = tapMoveSlot;
    const selectedSource = tapMoveSource;
    clearTapMove(true);
    if (source === "starter" && Number.isFinite(slot)) movePlayerToSlot(playerId, slot);
    else if (source === "bench" && selectedSource === "starter" && Number.isFinite(selectedSlot)) movePlayerToSlot(token.dataset.dragPlayer, selectedSlot);
    else if (source === "bench" && selectedSource === "bench" && Number.isFinite(selectedSlot) && Number.isFinite(slot)) swapBenchSlots(selectedSlot, slot);
    else if (source === "bench") movePlayerToBench(playerId, slot);
    else movePlayerToUnrelated(playerId);
    return true;
  }

  if (tapMovePlayer && drop && (!token || token.dataset.dragPlayer !== tapMovePlayer)) {
    const playerId = tapMovePlayer;
    const sourceSlot = tapMoveSlot;
    clearTapMove(true);
    if (drop.dataset.formationSlot) movePlayerToFormationSlot(playerId, drop.dataset.formationSlot, sourceSlot, drop.dataset.formationCoord);
    else if (drop.dataset.dropBenchIndex) movePlayerToBench(playerId, Number(drop.dataset.dropBenchIndex));
    else if (drop.dataset.dropBench) movePlayerToBench(playerId);
    else if (drop.dataset.dropUnrelated) movePlayerToUnrelated(playerId);
    else movePlayerToSlot(playerId, Number(drop.dataset.dropSlot));
    return true;
  }

  if (token) {
    if (tapMovePlayer === token.dataset.dragPlayer) clearTapMove();
    else setTapMove(token.dataset.dragPlayer, token.dataset.dragSlot, token.dataset.dragSource);
    return true;
  }

  if (tapMovePlayer && !target.closest(".lineup-board")) {
    clearTapMove();
  }
  return false;
}

function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function pickWeightedNationality(youth = false) {
  const entries = Object.entries(nationalityPools);
  const total = entries.reduce((sum, [, info]) => sum + (youth ? info.youthWeight : info.weight), 0);
  let roll = rng(1, total);
  for (const [code, info] of entries) {
    roll -= youth ? info.youthWeight : info.weight;
    if (roll <= 0) return code;
  }
  return "BR";
}

function seededPick(list, seed, offset = 0) {
  return list[Math.abs(seed + offset) % list.length];
}

function makeNameForNationality(code = "BR", seed = 0, youth = false) {
  const normalizedCode = normalizeNationalityCode(code);
  const pool = nationalityPools[normalizedCode] || nationalityPools.BR;
  const first = seededPick(pool.first, seed, rng(0, pool.first.length - 1));
  const last = seededPick(pool.last, seed * 3, rng(0, pool.last.length - 1));
  const secondLast = normalizedCode !== "BR" && rng(1, 100) <= 28 ? ` ${seededPick(pool.last, seed * 5, rng(0, pool.last.length - 1))}` : "";
  const familySuffix = normalizedCode === "BR" && rng(1, 100) <= (youth ? 7 : 4) ? ` ${["Filho", "Neto"][rng(0, 1)]}` : "";
  return `${first} ${last}${secondLast}${familySuffix}`;
}

function nationalityLabel(code) {
  const normalizedCode = normalizeNationalityCode(code);
  return nationalityPools[normalizedCode]?.label || nationalityExtraLabels[normalizedCode] || nationalityExtraLabels[String(code || "").toUpperCase()] || normalizedCode || "Brasil";
}

function nationalityText(player) {
  return nationalityLabel(player.nationality || "BR");
}

function escapeAttr(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const windows1252EncodeMap = new Map([
  [0x20ac, 0x80], [0x201a, 0x82], [0x0192, 0x83], [0x201e, 0x84], [0x2026, 0x85],
  [0x2020, 0x86], [0x2021, 0x87], [0x02c6, 0x88], [0x2030, 0x89], [0x0160, 0x8a],
  [0x2039, 0x8b], [0x0152, 0x8c], [0x017d, 0x8e], [0x2018, 0x91], [0x2019, 0x92],
  [0x201c, 0x93], [0x201d, 0x94], [0x2022, 0x95], [0x2013, 0x96], [0x2014, 0x97],
  [0x02dc, 0x98], [0x2122, 0x99], [0x0161, 0x9a], [0x203a, 0x9b], [0x0153, 0x9c],
  [0x017e, 0x9e], [0x0178, 0x9f]
]);

function encodeWindows1252(text) {
  return Uint8Array.from([...String(text)].map((char) => {
    const code = char.charCodeAt(0);
    if (code <= 0xff) return code;
    return windows1252EncodeMap.get(code) ?? 0x3f;
  }));
}

function encodingGlitchScore(text) {
  const value = String(text || "");
  return ((value.match(/[ÃÂÆ]/g) || []).length * 5)
    + ((value.match(/[â€]/g) || []).length * 4)
    + ((value.match(/�|\?/g) || []).length * 9);
}

function repairTextEncoding(value) {
  if (typeof value !== "string" || !/[ÃÂÆâ€]/.test(value)) return value;
  let current = value;
  let best = value;
  let bestScore = encodingGlitchScore(value);
  for (let index = 0; index < 4; index += 1) {
    current = new TextDecoder("utf-8", { fatal: false }).decode(encodeWindows1252(current));
    const score = encodingGlitchScore(current);
    if (score < bestScore) {
      best = current;
      bestScore = score;
    }
  }
  return best;
}

function ensurePlayerIdentity(player, seed = 0, youth = false) {
  if (!player) return;
  player.name = repairTextEncoding(player.name);
  if (player.identityVersion === identityVersion && player.nationality) return;
  player.nationality = player.nationality || pickWeightedNationality(youth);
  player.name = makeNameForNationality(player.nationality, seed, youth);
  player.identityVersion = identityVersion;
}

function clubLogo(club, size = "normal") {
  const savedLogo = activeLogoProfiles()[club.id] || {};
  const logoFromProfile = typeof savedLogo === "string"
    ? savedLogo
    : savedLogo.logoUrl || savedLogo.url || savedLogo.crestUrl || savedLogo.path || savedLogo.file || "";
  const imageUrl = club.logoUrl || logoFromProfile;
  if (imageUrl) {
    return `<span class="club-logo-image club-logo-${size}"><img src="${escapeAttr(imageUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer" /></span>`;
  }
  const fallbackSymbol = club.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 3).toUpperCase() || club.name.slice(0, 2).toUpperCase();
  const savedProfile = typeof savedLogo === "string" ? {} : savedLogo;
  const profile = { shape: "shield", accent: "#f2d16b", symbol: fallbackSymbol, ...savedProfile, ...(club.logo || {}) };
  return `
    <span class="club-logo club-logo-${size} logo-${profile.shape}" style="--logo-main:${club.color}; --logo-accent:${profile.accent}" aria-hidden="true">
      <span class="club-logo-band"></span>
      <span class="club-logo-symbol">${profile.symbol}</span>
    </span>
  `;
}

function money(value) {
  if (value < 1) return `R$ ${Math.round(value * 1000)}K`;
  return `R$ ${formatMillions(value)}M`;
}

function compactMoney(value) {
  if (!value) return "";
  if (value < 1) return `${Math.round(value * 1000)}K`;
  return `${formatMillions(value)}M`;
}

function formatMillions(value) {
  return Number(value).toFixed(value >= 10 ? 1 : 2).replace(/\.0+$/, "").replace(/(\.\d)0$/, "$1");
}

function formatMoneyField(input) {
  const parsed = parseMoneyInput(input.value);
  input.value = parsed ? compactMoney(parsed) : "";
  return parsed;
}

function parseMoneyInput(value) {
  if (typeof value === "number") return value;
  const raw = String(value || "").trim().replace(/\s/g, "").replace(",", ".").toUpperCase();
  if (!raw) return 0;
  const numeric = Number(raw.replace(/[^\d.]/g, ""));
  if (Number.isNaN(numeric)) return 0;
  if (raw.endsWith("K")) return +(numeric / 1000).toFixed(3);
  if (raw.endsWith("M")) return +numeric.toFixed(3);
  return +(numeric / 1000000).toFixed(3);
}

function moneyOptions(max = 80) {
  const base = [0.05, 0.1, 0.2, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 5, 7.5, 10, 15, 20, 30, 40, 60, 80].filter((value) => value <= max);
  return `<datalist id="moneyOptions">${base.map((value) => `<option value="${compactMoney(value)}"></option>`).join("")}</datalist>`;
}

function statOptions(selected = 0) {
  return [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    .map((value) => `<option value="${value}" ${Number(selected) === value ? "selected" : ""}>${value ? `${value}` : "Sem meta"}</option>`)
    .join("");
}

function calculatePlayerValue(player, clubRep = 65) {
  const rating = Number(player.rating || 55);
  const potential = Number(player.potential || rating);
  const agePeak = player.age <= 20 ? 1.18 : player.age <= 23 ? 1.28 : player.age <= 27 ? 1.16 : player.age <= 30 ? 0.98 : player.age <= 33 ? 0.72 : 0.48;
  const quality = Math.pow(Math.max(1, rating - 42), 2) / 48;
  const potentialPremium = Math.max(0, potential - rating) * (player.age <= 24 ? 0.85 : 0.22);
  const repPremium = clamp(clubRep / 72, 0.78, 1.22);
  const formPremium = clamp((player.form || 65) / 70, 0.86, 1.16);
  return +clamp((quality + potentialPremium) * agePeak * repPremium * formPremium, 0.08, 95).toFixed(2);
}

function calculatePlayerWage(player) {
  return +clamp((player.value || 1) * 0.025 + (player.rating || 55) * 0.002, 0.03, 3.5).toFixed(2);
}

function realisticReleaseClause(player, clubRep = 65) {
  const value = Number(player.value || calculatePlayerValue(player, clubRep));
  const hasOpenFuture = player.age <= 24 || player.potential >= player.rating + 8 || player.ambition >= 76 || player.happiness < 54;
  const chance = hasOpenFuture ? 34 : 9;
  if (rng(1, 100) > chance) return null;
  const multiplier = player.age <= 23
    ? rng(150, 235) / 100
    : player.ambition >= 78
      ? rng(125, 190) / 100
      : rng(170, 280) / 100;
  return +Math.max(value * 1.15, value * multiplier).toFixed(2);
}

function monthStartDay(index) {
  return monthLengths.slice(0, index).reduce((sum, days) => sum + days, 1);
}

function monthIndexFromDay(day) {
  let acc = 0;
  for (let index = 0; index < monthLengths.length; index += 1) {
    acc += monthLengths[index];
    if (day <= acc) return index;
  }
  return monthLengths.length - 1;
}

function currentMonthIndex() {
  return monthIndexFromDay(state.day || 1);
}

function clubDivision(club) {
  return Number(club?.division || (activeClubs().slice(0, 20).some((item) => item.id === club?.id) ? 1 : 2));
}

function divisionLabel(division) {
  const custom = (state?.databaseDivisions || activeDatabase().divisions || []).find((item) => Number(item.id) === Number(division) || Number(item.level) === Number(division));
  if (custom?.name) return custom.name;
  if (division === 1) return "Primeira Divisao";
  if (division === 2) return "Segunda Divisao";
  return `${division}a Divisao`;
}

function clubsInDivision(division) {
  return (state?.clubs || []).filter((club) => clubDivision(club) === division);
}

function activeDivisionNumbers(source = state?.clubs || activeClubs()) {
  return [...new Set(source.map((club) => Number(club.division || 1)))].sort((a, b) => a - b);
}

function userDivision() {
  return clubDivision(getUserClub());
}

function maxRoundsForDivision(division = userDivision()) {
  const custom = (state?.databaseDivisions || activeDatabase().divisions || []).find((item) => Number(item.id) === Number(division) || Number(item.level) === Number(division));
  return Number(custom?.rounds || custom?.matches || 38) || 38;
}

function activeDatabase() {
  return customDatabase || { databaseName: "FootCoach generica", clubs, logos: clubLogoProfiles };
}

function activeClubs() {
  return activeDatabase().clubs || clubs;
}

function activeLogoProfiles() {
  if (state?.databaseLogos) return { ...clubLogoProfiles, ...state.databaseLogos };
  return { ...clubLogoProfiles, ...(activeDatabase().logos || {}) };
}

function normalizeLogoProfile(rawLogo) {
  if (!rawLogo) return null;
  if (typeof rawLogo === "string") return { logoUrl: rawLogo };
  if (typeof rawLogo !== "object" || Array.isArray(rawLogo)) return null;
  const logoUrl = rawLogo.logoUrl || rawLogo.url || rawLogo.crestUrl || rawLogo.logoPath || rawLogo.crestPath || rawLogo.logoFile || rawLogo.path || rawLogo.file || rawLogo.dataUri || rawLogo.logoData || "";
  return {
    ...rawLogo,
    ...(logoUrl ? { logoUrl } : {})
  };
}

function normalizeClubData(rawClub, index) {
  const id = String(rawClub.id || rawClub.name || `club-${index + 1}`)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || `club-${index + 1}`;
  const division = clamp(Number(rawClub.division || (index < 20 ? 1 : 2)), 1, 6);
  const normalizedLogo = normalizeLogoProfile(rawClub.logo || rawClub.crest || null);
  const imageLogo = rawClub.logoUrl || rawClub.crestUrl || rawClub.logoPath || rawClub.crestPath || rawClub.logoFile || rawClub.logoImage || rawClub.logoData || rawClub.dataUri || rawClub.image || normalizedLogo?.logoUrl || "";
  const shapeLogo = normalizedLogo && !normalizedLogo.logoUrl ? normalizedLogo : (normalizedLogo && (normalizedLogo.shape || normalizedLogo.symbol || normalizedLogo.accent) ? normalizedLogo : null);
  return {
    id,
    name: repairTextEncoding(String(rawClub.name || `Clube ${index + 1}`)),
    shortName: repairTextEncoding(rawClub.shortName || ""),
    state: repairTextEncoding(rawClub.state || ""),
    city: repairTextEncoding(rawClub.city || ""),
    division,
    budget: +clamp(Number(rawClub.budget ?? rawClub.budgetMillions ?? (division === 1 ? 24 : 8)), 0, 500).toFixed(2),
    reputation: clamp(Number(rawClub.reputation ?? (division === 1 ? 68 : 52)), 1, 100),
    style: repairTextEncoding(String(rawClub.style || "clube importado da database editavel")),
    color: rawClub.color || "#315f6f",
    logo: shapeLogo,
    logoUrl: imageLogo,
    officialLogoPath: rawClub.officialLogoPath || "",
    facilities: rawClub.facilities || rawClub.installations || null,
    youthAcademy: Array.isArray(rawClub.youthAcademy) ? rawClub.youthAcademy : Array.isArray(rawClub.youthPlayers) ? rawClub.youthPlayers : null,
    squadSize: Number(rawClub.squadSize || rawClub.generatedSquadSize || 0) || null,
    financeRules: rawClub.financeRules || null,
    tacticalIdentity: rawClub.tacticalIdentity || null,
    players: Array.isArray(rawClub.players) ? rawClub.players : []
  };
}

function cleanDatabaseText(input) {
  let text = String(input || "").replace(/^\uFEFF/, "").replace(/\u0000/g, "").trim();
  if (text.startsWith("data:")) {
    const comma = text.indexOf(",");
    if (comma >= 0) {
      const header = text.slice(0, comma);
      const payload = text.slice(comma + 1);
      text = header.includes(";base64") ? atob(payload) : decodeURIComponent(payload);
    }
  }
  return text.replace(/^\uFEFF/, "").trim();
}

function explainDatabaseParseError(error, text) {
  const clean = cleanDatabaseText(text);
  if (!clean) return "Arquivo vazio. Escolha um arquivo .json valido.";
  if (/^<!doctype html/i.test(clean) || /^<html/i.test(clean)) {
    return "O arquivo importado parece ser uma pagina HTML, nao um JSON. Baixe o arquivo bruto/raw da database e tente de novo.";
  }
  if (!clean.startsWith("{") && !clean.startsWith("[")) {
    return "O arquivo nao comeca como JSON. Verifique se voce baixou o arquivo .json correto.";
  }
  const match = String(error?.message || "").match(/position\s+(\d+)/i);
  if (match) {
    const pos = Number(match[1]);
    if (pos >= clean.length - 12) {
      return `${error.message}. O arquivo parece estar incompleto ou truncado no final. Baixe novamente o JSON bruto/raw ou importe por link.`;
    }
    const start = Math.max(0, pos - 60);
    const end = Math.min(clean.length, pos + 60);
    return `${error.message}. Trecho perto do erro: ${clean.slice(start, end)}`;
  }
  return error?.message || String(error);
}

function sanitizeDatabase(input) {
  let parsed = input;
  if (typeof input === "string") {
    const clean = cleanDatabaseText(input);
    try {
      parsed = JSON.parse(clean);
    } catch (error) {
      throw new Error(explainDatabaseParseError(error, clean));
    }
  }
  if (!parsed || !Array.isArray(parsed.clubs) || parsed.clubs.length < 2) {
    throw new Error("A database precisa ter pelo menos 2 clubes em um array chamado clubs.");
  }
  const normalizedClubs = parsed.clubs.map(normalizeClubData);
  const ids = new Set();
  normalizedClubs.forEach((club, index) => {
    let id = club.id;
    while (ids.has(id)) id = `${club.id}-${index + 1}`;
    club.id = id;
    ids.add(id);
  });
  const divisions = [...new Set(normalizedClubs.map((club) => club.division))];
  divisions.forEach((division) => {
    const count = normalizedClubs.filter((club) => club.division === division).length;
    if (count < 2) {
      throw new Error(`A divisao ${division} precisa ter pelo menos 2 clubes.`);
    }
  });
  const logos = {};
  Object.entries(parsed.logos || {}).forEach(([clubId, logo]) => {
    const normalizedLogo = normalizeLogoProfile(logo);
    if (normalizedLogo) logos[clubId] = normalizedLogo;
  });
  normalizedClubs.forEach((club) => {
    if (club.logo || club.logoUrl) logos[club.id] = { ...(logos[club.id] || {}), ...(club.logo || {}), ...(club.logoUrl ? { logoUrl: club.logoUrl } : {}) };
  });
  return {
    databaseName: String(parsed.databaseName || parsed.name || "Database importada"),
    country: parsed.country || "",
    season: parsed.season || seasonStartYear,
    settings: parsed.settings || {},
    finance: parsed.finance || parsed.financeRules || {},
    divisions: Array.isArray(parsed.divisions) ? parsed.divisions : [],
    clubs: normalizedClubs,
    logos,
    competitions: parsed.competitions || {}
  };
}

function sampleDatabaseText() {
  return JSON.stringify({
    databaseName: "Brasil editavel - exemplo",
    country: "Brasil",
    season: 2026,
    settings: {
      allowCustomSquadSizes: true,
      generatedSquadSize: "opcional por clube; se players existir, o jogo usa exatamente aquela lista",
      ratingRule: "rating e opcional; se atributos vierem sem rating, o jogo calcula o geral pela posicao",
      outfieldAttributes: ["pace", "passing", "dribbling", "finishing", "crossing", "tackling", "vision", "stamina"],
      goalkeeperAttributes: ["reflexes", "handling", "positioningGk", "oneOnOne", "distribution", "aerial"],
      marketLists: {
        listStatus: "use none, transfer, loan ou blocked em cada jogador",
        listStatusLocked: "true impede que a IA mude essa lista automaticamente ao criar/atualizar o save",
        aliases: "tambem aceita transferListed, loanListed, untouchable, notForSale e blockOffers"
      },
      logos: {
        logoUrl: "link direto https://.../escudo.png ou https://.../escudo.svg",
        logoPath: "caminho local publicado junto do jogo, ex: assets/logos/clube.png",
        logoData: "data:image/png;base64,... para database totalmente portavel",
        fallbackLogo: "se nao houver imagem, use logo { shape, accent, symbol } para escudo gerado"
      },
      yellowCardQuota: 5,
      benchLimit: 9
    },
    finance: {
      leaguePrizes: {
        1: { champion: 18, floor: 3.5, curve: 1.25 },
        2: { champion: 7.5, floor: 1.1, curve: 1.2 }
      }
    },
    divisions: [
      { id: 1, name: "Serie A", level: 1, promotion: 0, relegation: 4, format: "double_round_robin", rounds: 38, prizes: { champion: 18, floor: 3.5 } },
      { id: 2, name: "Serie B", level: 2, promotion: 4, relegation: 4, format: "double_round_robin", rounds: 38, prizes: { champion: 7.5, floor: 1.1 } },
      { id: 3, name: "Serie C", level: 3, promotion: 4, relegation: 4 }
    ],
    clubs: [
      {
        id: "clube-exemplo-a",
        name: "Clube Exemplo A",
        division: 1,
        budget: 42,
        reputation: 78,
        style: "clube forte, elenco tecnico e pressao por titulo",
        color: "#143f7a",
        facilities: { training: 4.5, academy: 4, stadium: 4.5 },
        squadSize: 28,
        logoUrl: "https://exemplo.com/logos/clube-exemplo-a.png",
        logo: { shape: "shield", accent: "#f2c84b", symbol: "CEA" },
        players: [
          { name: "Goleiro Exemplo", position: "GK", age: 29, nationality: "BRA", potential: 78, reflexes: 82, handling: 76, positioningGk: 78, oneOnOne: 74, distribution: 70, aerial: 77, contractYears: 3, listStatus: "none", listStatusLocked: true },
          { name: "Zagueiro Exemplo", position: "CB", age: 27, nationality: "BRA", potential: 78, pace: 62, passing: 68, dribbling: 55, finishing: 38, crossing: 42, tackling: 80, vision: 61, stamina: 75, defending: 82, aerial: 82, listStatus: "blocked", listStatusLocked: true },
          { name: "Meia Exemplo", position: "CM", age: 24, nationality: "BRA", potential: 84, pace: 71, passing: 84, dribbling: 78, finishing: 65, crossing: 68, tackling: 64, vision: 82, stamina: 77, releaseClause: 45, listStatus: "none", listStatusLocked: true },
          { name: "Atacante Exemplo", position: "ST", age: 25, nationality: "ARG", potential: 83, pace: 78, passing: 66, dribbling: 76, finishing: 86, crossing: 58, tackling: 35, vision: 70, stamina: 74, attacking: 84, secondaryPosition: "LW", listStatus: "transfer", listStatusLocked: true }
        ]
      },
      {
        id: "clube-exemplo-b",
        name: "Clube Exemplo B",
        division: 1,
        budget: 28,
        reputation: 68,
        style: "clube medio, competitivo e com boa torcida",
        color: "#8b2f2f",
        logo: { shape: "round", accent: "#ffffff", symbol: "CEB" }
      },
      {
        id: "clube-exemplo-c",
        name: "Clube Exemplo C",
        division: 2,
        budget: 9,
        reputation: 50,
        style: "projeto pequeno, base regional e folha curta",
        color: "#2f6f4e",
        logoPath: "assets/logos/clube-exemplo-c.png"
      },
      {
        id: "clube-exemplo-d",
        name: "Clube Exemplo D",
        division: 2,
        budget: 7,
        reputation: 46,
        style: "time de acesso dificil, caixa baixo e foco em garotos",
        color: "#6d5a24",
        logo: { shape: "diamond", accent: "#f2d16b", symbol: "CED" }
      }
    ],
    competitions: {
      nationalLeagues: [
        { id: "serie-a", name: "Serie A", division: 1, format: "double_round_robin", teams: 20, relegation: 4 },
        { id: "serie-b", name: "Serie B", division: 2, format: "double_round_robin", teams: 20, promotion: 4, relegation: 4 }
      ],
      nationalCups: [
        { id: "copa-brasil", name: "Copa Nacional", format: "single_leg_knockout", entrants: "all_clubs", prizes: [0.35, 0.55, 0.9, 1.5, 2.4, 4.2, 7.5], runnerUpPrize: 5.2 }
      ],
      stateCompetitions: [
        { id: "paulista", name: "Estadual Exemplo", state: "SP", format: "groups_then_knockout", months: [1, 2, 3], fixtures: [{ day: 18, home: "clube-exemplo-a", away: "clube-exemplo-b", round: 1, stage: "Fase de grupos" }] }
      ],
      continentalCompetitions: [
        { id: "libertadores", name: "Libertadores", format: "groups_then_knockout", qualification: "top_league_and_cup", months: [2, 3, 4, 5, 8, 9, 10, 11] },
        { id: "sulamericana", name: "Sulamericana", format: "groups_then_knockout", qualification: "next_best_league", months: [3, 4, 5, 8, 9, 10, 11] }
      ],
      note: "Nesta versao clubes/divisoes/logos ja entram no save. Os formatos acima ficam preservados para a expansao do calendario real."
    }
  }, null, 2);
}

function setDatabaseStatus(message = "") {
  const target = document.querySelector("#databaseStatus");
  if (!target) return;
  target.textContent = message || `Base atual: ${activeDatabase().databaseName}.`;
}

function applyCustomDatabase(database) {
  customDatabase = sanitizeDatabase(database);
  try {
    localStorage.setItem("footCoachDatabase", JSON.stringify(customDatabase));
  } catch (error) {
    console.warn("Database importada mantida apenas nesta sessao.", error);
    localStorage.removeItem("footCoachDatabase");
  }
  clubSelectDivision = 1;
  setDatabaseStatus();
  render();
}

function clearCustomDatabase() {
  customDatabase = null;
  localStorage.removeItem("footCoachDatabase");
  clubSelectDivision = 1;
  setDatabaseStatus("Base atual: generica FootCoach.");
  render();
}

async function readDatabaseFile(file) {
  const buffer = await file.arrayBuffer();
  return decodeDatabaseBuffer(buffer);
}

function decodeDatabaseBuffer(buffer) {
  const bytes = new Uint8Array(buffer);
  if (bytes[0] === 0xff && bytes[1] === 0xfe) return new TextDecoder("utf-16le").decode(buffer);
  if (bytes[0] === 0xfe && bytes[1] === 0xff) return new TextDecoder("utf-16be").decode(buffer);
  const nullsInOddBytes = bytes.slice(1, Math.min(bytes.length, 80)).filter((_, index) => index % 2 === 0 && bytes[index + 1] === 0).length;
  if (nullsInOddBytes > 10) return new TextDecoder("utf-16le").decode(buffer);
  return new TextDecoder("utf-8").decode(buffer);
}

function normalizeDatabaseUrl(input) {
  const raw = String(input || "").trim();
  if (!raw) throw new Error("Informe um link para a database.");
  const url = new URL(raw, window.location.href);
  if (url.hostname === "github.com" && url.pathname.includes("/blob/")) {
    const parts = url.pathname.split("/").filter(Boolean);
    const blobIndex = parts.indexOf("blob");
    if (parts.length > blobIndex + 2) {
      const owner = parts[0];
      const repo = parts[1];
      const branch = parts[blobIndex + 1];
      const filePath = parts.slice(blobIndex + 2).join("/");
      return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
    }
  }
  if (url.hostname === "github.com" && url.pathname.includes("/raw/")) {
    return url.href.replace("https://github.com/", "https://raw.githubusercontent.com/").replace("/raw/", "/");
  }
  return url.href;
}

async function importDatabaseFromUrl(input) {
  showLoading("Baixando e validando a database...", "Importando database");
  try {
    const url = normalizeDatabaseUrl(input);
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`Nao foi possivel baixar o arquivo (${response.status}).`);
    const text = decodeDatabaseBuffer(await response.arrayBuffer());
    applyCustomDatabase(text);
    const inputEl = document.querySelector("#databaseUrlInput");
    if (inputEl) inputEl.value = url;
  } catch (error) {
    setDatabaseStatus(`Erro na database: ${error.message}`);
  } finally {
    setTimeout(() => hideLoading(), 80);
  }
}

function weakestSecondDivisionClubIds() {
  return activeClubs()
    .filter((club) => Number(club.division || 1) === 2)
    .sort((a, b) => a.reputation - b.reputation || a.budget - b.budget)
    .slice(0, 5)
    .map((club) => club.id);
}

function initialCoachProfile(club, mode = "free") {
  if (mode === "zero") {
    return { mode, experience: 8, reputation: 8, seasons: 0, history: [] };
  }
  const divisionPenalty = Number(club.division || 1) === 2 ? 12 : 0;
  const base = clamp(Math.round((club.reputation - 45) * 1.25 - divisionPenalty), 18, 88);
  return { mode, experience: clamp(base + 4, 18, 92), reputation: base, seasons: 0, history: [] };
}

function leagueRoundDays() {
  const days = [];
  leagueMonthlyRounds.forEach((rounds, monthIndex) => {
    if (!rounds) return;
    const start = monthStartDay(monthIndex);
    const length = monthLengths[monthIndex];
    for (let item = 0; item < rounds; item += 1) {
      days.push(start + Math.round(((item + 1) * length) / (rounds + 1)));
    }
  });
  return days;
}

function fitnessQuotient(player) {
  const condition = Number(player?.condition ?? 92);
  const load = Number(player?.matchLoad ?? 0);
  const staminaBuffer = clamp(((player?.stamina || 65) - 65) * 0.08, -2.4, 2.4);
  return clamp(Math.round(condition - load * 0.28 + staminaBuffer), 35, 100);
}

function isInjured(player) {
  return Boolean(player?.injury && player.injury.daysLeft > 0);
}

function isSuspended(player) {
  return Boolean(player?.suspension && Number(player.suspension.matches || 0) > 0);
}

function availabilityText(player) {
  if (isInjured(player)) return `lesionado: ${player.injury.type} (${player.injury.daysLeft}d)`;
  if (isSuspended(player)) return `suspenso: ${player.suspension.reason || "punicao"} (${player.suspension.matches} jogo${player.suspension.matches > 1 ? "s" : ""})`;
  return "disponivel";
}

function contractDaysLeft(player) {
  return Math.max(0, Math.round(Number(player?.contractEndDay || 0) - Number(state?.day || 1)));
}

function contractText(player) {
  if (!Number.isFinite(player?.contractEndDay) || player.contractEndDay <= 0) return "sem contrato";
  const days = contractDaysLeft(player);
  if (days >= 365) return `${Math.max(1, Math.round(days / 365))} ano${days >= 730 ? "s" : ""} de contrato`;
  if (days >= 30) return `${Math.round(days / 30)} mes${days >= 60 ? "es" : ""} de contrato`;
  return `${days} dia${days === 1 ? "" : "s"} de contrato`;
}

function pendingTransferText(player) {
  return player?.pendingTransfer ? ` - acordo com ${player.pendingTransfer.toName}, chegada/saida em ${dateShort(player.pendingTransfer.arrivalDay)}` : "";
}

function unavailableReason(player) {
  if (isInjured(player)) return `lesionado com ${player.injury.type} (${player.injury.daysLeft}d)`;
  if (isSuspended(player)) return `suspenso por ${player.suspension.reason || "cartoes"} (${player.suspension.matches} jogo${player.suspension.matches > 1 ? "s" : ""})`;
  return "";
}

function listLabel(status) {
  if (status === "transfer") return "lista de transferencia";
  if (status === "loan") return "lista de emprestimo";
  if (status === "blocked") return "propostas bloqueadas";
  if (status === "free") return "sem contrato";
  if (status === "precontract") return "pre-contrato";
  return "fora das listas";
}

function positionRank(position) {
  const rank = fieldPositionOrder.indexOf(position);
  return rank === -1 ? 99 : rank;
}

function conditionLabel(player) {
  const value = fitnessQuotient(player);
  if (value >= 88) return `${value}% inteiro`;
  if (value >= 74) return `${value}% ok`;
  if (value >= 62) return `${value}% cansado`;
  return `${value}% risco alto`;
}

function makeId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function stars(value) {
  const full = Math.floor(value);
  const half = value % 1 >= 0.5 ? "½" : "";
  return `${full}${half} estrela${value >= 2 ? "s" : ""}`;
}

function starRating(value) {
  const level = Number(value || 0);
  return `
    <span class="star-rating" title="${stars(level)}">
      ${Array.from({ length: 5 }, (_, index) => {
        const fill = clamp(level - index, 0, 1);
        return `<span class="star-shell"><span class="star-fill" style="width:${Math.round(fill * 100)}%">★</span>★</span>`;
      }).join("")}
    </span>
  `;
}

function facilityMultiplier(level) {
  return clamp(0.82 + Number(level || 3) * 0.06, 0.86, 1.16);
}

function stadiumHomeBonus(club) {
  return +(0.45 + (club.facilities?.stadium || 3) * 0.22).toFixed(2);
}

function facilityCost(club, type) {
  const current = Number(club.facilities?.[type] || 2.5);
  const base = facilityTypes[type]?.baseCost || 4;
  return +(base * (0.75 + current * 0.55) * (club.reputation / 70)).toFixed(1);
}

function defaultFacilities(club) {
  const repBase = clamp(Math.round((club.reputation - 48) / 9) * 0.5 + 2, 1, 5);
  const academyBump = /base|jovens|garotos|promissores|criativo/i.test(club.style || "") ? 0.7 : 0;
  const stadiumBump = /torcida|estadio|mandante|grande/i.test(club.style || "") ? 0.5 : 0;
  const trainingBump = /estrutura|tecnico|rico|caro/i.test(club.style || "") ? 0.5 : 0;
  return {
    training: clamp(Math.round((repBase + trainingBump + rng(-1, 1) * 0.25) * 2) / 2, 1, 5),
    academy: clamp(Math.round((repBase + academyBump + rng(-1, 1) * 0.25) * 2) / 2, 1, 5),
    stadium: clamp(Math.round((repBase + stadiumBump + rng(-1, 1) * 0.25) * 2) / 2, 1, 5)
  };
}

function secondaryPositionsFor(position, rating = 60, chanceBoost = 0) {
  const map = {
    GK: [],
    RB: ["LB", "RM", "CB"],
    LB: ["RB", "LM", "CB"],
    CB: ["DM", "RB", "LB"],
    DM: ["CM", "CB"],
    CM: ["DM", "AM", "RM", "LM"],
    AM: ["CM", "ST", "RW", "LW"],
    RM: ["RW", "CM", "RB", "LM"],
    LM: ["LW", "CM", "LB", "RM"],
    RW: ["RM", "LW", "ST"],
    LW: ["LM", "RW", "ST"],
    ST: ["AM", "RW", "LW"]
  };
  const pool = [...(map[position] || [])].sort(() => Math.random() - 0.5);
  const chance = clamp(28 + (rating - 62) * 0.8 + chanceBoost, 10, 68);
  if (!pool.length || rng(1, 100) > chance) return { secondaryPosition: null, tertiaryPosition: null, hiddenPositions: [] };
  const secondaryPosition = pool.shift();
  const tertiaryPosition = pool.length && rng(1, 100) <= chance * 0.38 ? pool.shift() : null;
  return { secondaryPosition, tertiaryPosition, hiddenPositions: [] };
}

function positionText(player) {
  const extras = [player.secondaryPosition, player.tertiaryPosition].filter(Boolean);
  return `${player.position}${extras.length ? ` (${extras.join("/")})` : ""}`;
}

function promoteTrainedPosition(player, newPosition) {
  if (!newPosition || newPosition === player.position || (player.positionExp?.[newPosition] || 0) < 96) return;
  const oldPrimary = player.position;
  const oldSecondary = player.secondaryPosition;
  const oldTertiary = player.tertiaryPosition;
  player.position = newPosition;
  player.secondaryPosition = oldPrimary;
  player.tertiaryPosition = oldSecondary && oldSecondary !== oldPrimary ? oldSecondary : oldTertiary;
  player.hiddenPositions = [...new Set([...(player.hiddenPositions || []), oldTertiary].filter(Boolean))];
  player.training.position = newPosition;
  player.training.role = defaultRoleForSlot(newPosition);
  player.positionExp[newPosition] = 100;
}

function attrFrom(base, range, min = 20, max = 95) {
  return clamp(base + rng(range[0], range[1]), min, max);
}

function buildAttributes(position, rating) {
  const profile = positionProfiles[position] || positionProfiles.CM;
  const attrs = {};
  outfieldAttrs.forEach((attr) => {
    if (attr === "stamina") return;
    attrs[attr] = attrFrom(rating, profile[attr] || [-8, 8]);
  });
  attrs.defending = attrFrom(rating, profile.defending || [-8, 8], 20, 95);
  attrs.attacking = attrFrom(rating, profile.attacking || [-8, 8], 20, 95);
  attrs.stamina = clamp(rating + rng(-8, 12), 35, 95);

  if (position === "GK") {
    attrs.reflexes = attrFrom(rating, [-3, 12], 35, 96);
    attrs.handling = attrFrom(rating, [-5, 10], 35, 95);
    attrs.positioningGk = attrFrom(rating, [-6, 10], 35, 95);
    attrs.oneOnOne = attrFrom(rating, [-7, 11], 35, 95);
    attrs.distribution = attrFrom(rating, [-12, 5], 30, 92);
    attrs.aerial = attrFrom(rating, [-8, 10], 35, 95);
  } else {
    attrs.reflexes = attrFrom(rating, [-42, -24], 10, 55);
    attrs.handling = attrFrom(rating, [-45, -26], 10, 55);
    attrs.positioningGk = attrFrom(rating, [-45, -26], 10, 55);
    attrs.oneOnOne = attrFrom(rating, [-45, -26], 10, 55);
    attrs.distribution = attrFrom(rating, [-42, -24], 10, 55);
    attrs.aerial = attrFrom(rating, profile.aerial || profile.defending || [-8, 8], 20, 95);
  }
  return attrs;
}

function normalizePlayerEntry(entry, fallbackPosition) {
  if (!entry) return {};
  if (typeof entry === "string") return { name: repairTextEncoding(entry), position: fallbackPosition };
  const normalized = { ...entry, position: entry.position || fallbackPosition };
  const explicitListStatus = hasExplicitListStatus(entry);
  ["name", "wants", "transfermarktPosition", "transfermarktNationality"].forEach((key) => {
    if (typeof normalized[key] === "string") normalized[key] = repairTextEncoding(normalized[key]);
  });
  normalized.listStatus = normalizeListStatusFromSource(normalized);
  normalized.listStatusLocked = Boolean(entry.listStatusLocked || explicitListStatus);
  return normalized;
}

function normalizeListStatus(value) {
  const raw = String(value ?? "").trim().toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\s_-]+/g, "");
  if (!raw || ["none", "no", "nao", "naolistado", "unlisted", "fora", "livre"].includes(raw)) return "none";
  if (["transfer", "transf", "venda", "vendido", "transferlisted", "listadoparavenda", "listavenda"].includes(raw)) return "transfer";
  if (["loan", "emprestimo", "emprestar", "loanlisted", "listadoemprestimo", "listaemprestimo"].includes(raw)) return "loan";
  if (["blocked", "block", "bloqueado", "intocavel", "untouchable", "notforsale", "sempropostas"].includes(raw)) return "blocked";
  return "none";
}

function hasExplicitListStatus(source) {
  return source && [
    "listStatus",
    "marketStatus",
    "transferStatus",
    "transferListed",
    "onTransferList",
    "loanListed",
    "onLoanList",
    "blockOffers",
    "blocked",
    "untouchable",
    "notForSale",
    "listStatusLocked"
  ].some((key) => Object.prototype.hasOwnProperty.call(source, key));
}

function normalizeListStatusFromSource(source = {}) {
  if (source.blockOffers || source.blocked || source.untouchable || source.notForSale) return "blocked";
  if (source.loanListed || source.onLoanList) return "loan";
  if (source.transferListed || source.onTransferList) return "transfer";
  return normalizeListStatus(source.listStatus ?? source.marketStatus ?? source.transferStatus ?? "none");
}

function sourceNumber(source, key, fallback = null) {
  const value = Number(source?.[key]);
  return Number.isFinite(value) ? value : fallback;
}

function hasCustomAttributes(source, position) {
  const keys = position === "GK" ? gkAttrs : [...outfieldAttrs, "defending", "attacking", "aerial"];
  return keys.some((attr) => sourceNumber(source, attr) !== null);
}

function ratingFromAttributes(attrs, position) {
  const weights = slotWeights[position] || slotWeights.CM;
  return Object.entries(weights).reduce((sum, [attr, weight]) => sum + (Number(attrs[attr]) || 50) * weight, 0);
}

function makePlayer(seed, clubRep, position, entry = null) {
  const source = normalizePlayerEntry(entry, position);
  const primaryPosition = positions.includes(source.position) ? source.position : position;
  const age = Number(source.age) || rng(17, 34);
  const sourceRating = sourceNumber(source, "rating", null);
  let base = clamp(sourceRating ?? (clubRep + rng(-13, 9) - (age < 21 ? 3 : 0)), 35, 95);
  const attrs = buildAttributes(primaryPosition, base);
  [...outfieldAttrs, ...gkAttrs, "defending", "attacking", "aerial"].forEach((attr) => {
    const custom = sourceNumber(source, attr);
    if (custom !== null) attrs[attr] = clamp(custom, 1, 99);
  });
  if (sourceRating === null && hasCustomAttributes(source, primaryPosition)) {
    base = clamp(Math.round(ratingFromAttributes(attrs, primaryPosition)), 35, 95);
  }
  const potential = clamp(Number(source.potential) || (base + rng(age < 23 ? 7 : -4, age < 28 ? 17 : 5)), base, 99);
  const defaultRole = defaultRoleForSlot(primaryPosition);
  const nationality = normalizeNationalityCode(source.nationality || pickWeightedNationality(false));
  const player = {
    id: source.id || makeId(),
    name: source.name || makeNameForNationality(nationality, seed, false),
    nationality,
    identityVersion,
    age,
    position: primaryPosition,
    ...secondaryPositionsFor(primaryPosition, base),
    rating: base,
    potential,
    ...attrs,
    stamina: clamp(sourceNumber(source, "stamina", attrs.stamina) - (age > 31 && sourceNumber(source, "stamina") === null ? 7 : 0), 1, 99),
    attrVersion,
    positionExp: startingPositionExp(primaryPosition),
    roleExp: {},
    roleVersion,
    training: { attr: "automatic", position: primaryPosition, role: defaultRole },
    morale: sourceNumber(source, "morale", rng(55, 78)),
    form: sourceNumber(source, "form", rng(58, 76)),
    value: sourceNumber(source, "value", 0),
    wage: sourceNumber(source, "wage", 0),
    ambition: sourceNumber(source, "ambition", rng(45, 90)),
    happiness: sourceNumber(source, "happiness", rng(48, 86)),
    wants: source.wants || ["minutos", "salario", "titulos", "desenvolvimento"][rng(0, 3)],
    injury: null,
    yellowCards: 0,
    redCards: 0,
    suspension: null,
    condition: rng(88, 100),
    matchLoad: 0,
    lastPlayedDay: -20,
    listStatus: normalizeListStatusFromSource(source),
    listStatusLocked: Boolean(source.listStatusLocked),
    loan: null,
    releaseClause: source.releaseClause === false ? null : sourceNumber(source, "releaseClause", null),
    contractEndDay: sourceNumber(source, "contractEndDay", null) || (source.contractYears ? 365 * clamp(Number(source.contractYears), 1, 5) : 365 * rng(2, 5)),
    contractWarnings: {},
    preContract: null,
    transferBonuses: [],
    lastDelta: 0,
    goals: 0,
    assists: 0,
    stats: {
      apps: 0,
      goals: 0,
      assists: 0,
      shots: 0,
      saves: 0,
      cleanSheets: 0,
      goalsAgainst: 0,
      tackles: 0,
      passes: 0,
      minutes: 0,
      ratingSum: 0
    }
  };
  if (source.secondaryPosition) player.secondaryPosition = source.secondaryPosition;
  if (source.tertiaryPosition) player.tertiaryPosition = source.tertiaryPosition;
  if (Array.isArray(source.hiddenPositions)) player.hiddenPositions = source.hiddenPositions;
  if (source.positionExp) player.positionExp = { ...player.positionExp, ...source.positionExp };
  player.roleExp = source.roleExp ? { ...source.roleExp } : initialRoleExperience(player, primaryPosition);
  if (source.training) player.training = { ...player.training, ...source.training };
  if (source.stats) player.stats = { ...player.stats, ...source.stats };
  if (source.loan) player.loan = source.loan;
  player.value = sourceNumber(source, "value", null) ?? calculatePlayerValue(player, clubRep);
  player.wage = sourceNumber(source, "wage", null) ?? calculatePlayerWage(player);
  if (source.releaseClause === undefined) player.releaseClause = realisticReleaseClause(player, clubRep);
  player.valueEconomyVersion = economyVersion;
  player.lastValueUpdateDay = 1;
  return player;
}

function defaultRoleForSlot(slot) {
  return roleDefs[slot]?.[0]?.id || "cm_box";
}

function startingPositionExp(position) {
  const exp = {};
  positions.forEach((slot) => {
    const fit = fitLevel(position, slot);
    exp[slot] = position === slot ? 100 : Math.round(fit * 45);
  });
  return exp;
}

function roleWeightedScore(player, role) {
  const weights = roleWeights[role] || {};
  return Object.entries(weights).reduce((sum, [attr, weight]) => sum + (player[attr] || player.rating || 50) * weight, 0);
}

function initialRoleExperience(player, position) {
  const exp = {};
  (roleDefs[position] || []).forEach((role, index) => {
    const weighted = roleWeightedScore(player, role.id);
    const styleFit = weighted - (player.rating || weighted);
    exp[role.id] = Math.round(clamp(50 + styleFit * 2.4 + rng(-8, 8) + (index === 0 ? 4 : 0), 28, 88));
  });
  return exp;
}

function activeSlots(tactics = state.tactics, customFormation = state?.customFormation) {
  return tactics.formation === "Personalizada" ? (customFormation || formations["4-3-3"]) : formations[tactics.formation];
}

function slotBagKey(slots) {
  const counts = {};
  slots.forEach((slot) => {
    counts[slot] = (counts[slot] || 0) + 1;
  });
  return positions.map((slot) => `${slot}:${counts[slot] || 0}`).join("|");
}

function matchingPredefinedFormation(slots) {
  const key = slotBagKey(slots);
  return Object.entries(formations).find(([, formationSlots]) => slotBagKey(formationSlots) === key)?.[0] || "";
}

function inferredShapeName(slots) {
  const count = (list) => slots.filter((slot) => list.includes(slot)).length;
  const defenders = count(["RB", "LB", "CB"]);
  const defensiveMids = count(["DM"]);
  const centralMids = count(["CM"]);
  const wideMids = count(["RM", "LM"]);
  const attackingMids = count(["AM"]);
  const wideForwards = count(["RW", "LW"]);
  const strikers = count(["ST"]);

  if (defenders === 4 && defensiveMids === 2 && attackingMids + wideForwards + wideMids === 3 && strikers === 1) {
    return "4-2-3-1";
  }
  if (defenders === 4 && defensiveMids === 1 && centralMids === 2 && attackingMids === 1 && strikers === 2) {
    return "4-1-2-1-2";
  }
  if (defenders === 3 && wideMids + centralMids === 4 && attackingMids + wideForwards === 2 && strikers === 1) {
    return "3-4-2-1";
  }

  const midfielders = defensiveMids + centralMids + wideMids + attackingMids;
  const attackers = wideForwards + strikers;
  return [defenders, midfielders, attackers].filter((part) => part > 0).join("-");
}

function formationDisplayName(tactics = state.tactics) {
  if (tactics.formation !== "Personalizada") return tactics.formation;
  const slots = activeSlots(tactics);
  return `${inferredShapeName(slots)} (Personalizada)`;
}

function defaultCustomCoords(slots) {
  const lineup = slots.map((slot, index) => ({ slot, slotIndex: index, position: slot }));
  const usedSlots = {};
  return lineup.map((_, index) => slotPosition(lineup, index, usedSlots));
}

function fmt(value, digits = 1) {
  const number = Number(value) || 0;
  return Number(number.toFixed(digits)).toLocaleString("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  });
}

function createSquad(club, offset = 0) {
  const basePositions = ["GK", "GK", "RB", "LB", "CB", "CB", "CB", "DM", "CM", "CM", "AM", "RM", "LM", "RW", "LW", "ST", "ST", "ST"];
  const expandedPositions = ["GK", "RB", "LB", "CB", "DM", "CM", "AM", "RW", "LW", "ST", "CB", "CM", "ST", "GK"];
  const generatedSize = clamp(Number(club.squadSize || club.generatedSquadSize || rng(22, 30)), 0, 45);
  const squadPositions = Array.from({ length: generatedSize }, (_, index) => basePositions[index] || expandedPositions[(index - basePositions.length) % expandedPositions.length] || "CM");
  const importedPlayers = Array.isArray(club.players) ? club.players : [];
  const imported = importedPlayers.map((entry, index) => {
    const fallbackPosition = squadPositions[index] || fieldPositionOrder[index % fieldPositionOrder.length] || "CM";
    const normalized = normalizePlayerEntry(entry, fallbackPosition);
    return makePlayer(index + offset, club.reputation, normalized.position || fallbackPosition, normalized);
  });
  if (imported.length) return imported;
  return squadPositions.map((pos, index) => makePlayer(index + offset, club.reputation, pos));
}

function youthRatingBase(club, age = 16) {
  const academy = club.facilities?.academy || 2.5;
  return clamp(Math.round(club.reputation * 0.36 + academy * 5.8 + rng(-10, 6) - (17 - age) * 1.7), 36, 72);
}

function youthPotentialFor(base, club) {
  const academy = club.facilities?.academy || 2.5;
  const reputationLift = Math.max(0, club.reputation - 70) * 0.08;
  let potential = clamp(base + rng(8, 22) + Math.round(academy * 1.45 + reputationLift), base + 4, 89);
  const eliteChance = clamp((academy - 3) * 2.2 + Math.max(0, club.reputation - 76) * 0.18, 1, 9);
  if (rng(1, 100) <= eliteChance) potential = clamp(90 + rng(0, academy >= 4.5 ? 4 : 2), 90, 94);
  return potential;
}

function normalizeYouthPotential(player, club) {
  if (!player?.youth || player.youthBalancedVersion >= 2) return;
  if (player.potential > 90) {
    const academy = club.facilities?.academy || 3;
    const keepEliteChance = clamp((academy - 3) * 2.6 + Math.max(0, club.reputation - 78) * 0.2, 1, 10);
    player.potential = rng(1, 100) <= keepEliteChance ? clamp(player.potential, 90, 94) : clamp(rng(80, 89), player.rating + 4, 89);
  } else if (player.potential === 90 && rng(1, 100) <= 70) {
    player.potential = clamp(rng(82, 89), player.rating + 4, 89);
  }
  player.youthBalancedVersion = 2;
}

function makeYouthPlayer(seed, club, position = positions[rng(0, positions.length - 1)], age = rng(15, 18)) {
  const base = youthRatingBase(club, age);
  const potential = youthPotentialFor(base, club);
  const attrs = buildAttributes(position, base);
  const posExtras = secondaryPositionsFor(position, base, 16);
  const nationality = pickWeightedNationality(true);
  const player = {
    id: makeId(),
    name: makeNameForNationality(nationality, seed, true),
    nationality,
    identityVersion,
    age,
    position,
    ...posExtras,
    rating: base,
    potential,
    ...attrs,
    stamina: clamp(attrs.stamina + rng(-3, 7), 35, 95),
    attrVersion,
    positionExp: startingPositionExp(position),
    roleExp: {},
    roleVersion,
    training: { attr: "automatic", position, role: defaultRoleForSlot(position) },
    morale: rng(58, 82),
    form: rng(55, 74),
    value: 0,
    wage: 0.02,
    ambition: rng(45, 88),
    happiness: rng(58, 88),
    wants: "desenvolvimento",
    injury: null,
    yellowCards: 0,
    redCards: 0,
    suspension: null,
    condition: rng(88, 100),
    matchLoad: 0,
    lastPlayedDay: -20,
    listStatus: "none",
    loan: null,
    releaseClause: null,
    contractEndDay: 365 * rng(3, 5),
    contractWarnings: {},
    preContract: null,
    transferBonuses: [],
    lastDelta: 0,
    youth: true,
    youthBalancedVersion: 2,
    joinedAcademyDay: state?.day || 1,
    stats: { apps: 0, goals: 0, assists: 0, shots: 0, saves: 0, cleanSheets: 0, goalsAgainst: 0, tackles: 0, passes: 0, minutes: 0, ratingSum: 0 }
  };
  player.roleExp = initialRoleExperience(player, position);
  player.value = calculatePlayerValue(player, club.reputation);
  return player;
}

function createYouthAcademy(club, offset = 0) {
  const count = clamp(Math.round((club.facilities?.academy || 2.5) + rng(1, 3)), 3, 6);
  const academyPositions = ["GK", "CB", "RB", "LB", "DM", "CM", "AM", "RW", "LW", "ST"];
  return Array.from({ length: count }, (_, index) => makeYouthPlayer(offset + index * 13, club, academyPositions[rng(0, academyPositions.length - 1)], rng(15, 18)));
}

function ensureClubDevelopment(club, index = 0) {
  club.facilities = { ...defaultFacilities(club), ...(club.facilities || {}) };
  Object.keys(facilityTypes).forEach((type) => {
    club.facilities[type] = clamp(Number(club.facilities[type] || 3), 1, 5);
  });
  club.youthAcademy = Array.isArray(club.youthAcademy) ? club.youthAcademy : createYouthAcademy(club, index * 31);
  club.youthIntake = club.youthIntake || null;
  club.facilityUpgrades = club.facilityUpgrades || [];
}

function createCupState(clubList = activeClubs(), cupConfig = null) {
  const sorted = [...clubList].sort((a, b) => b.reputation - a.reputation);
  const preliminary = sorted.slice(24).map((club) => club.id);
  const byes = sorted.slice(0, 24).map((club) => club.id);
  return {
    id: cupConfig?.id || "national-cup",
    name: cupConfig?.name || "Copa Nacional",
    format: cupConfig?.format || "single_leg_knockout",
    config: cupConfig || {},
    prizes: cupConfig?.prizes || cupConfig?.prizeByRound || null,
    roundIndex: 0,
    activeTeamIds: sorted.map((club) => club.id),
    byeTeamIds: byes,
    roundTeamIds: preliminary,
    pendingWinners: [],
    currentUserMatch: null,
    finished: false,
    championId: null,
    runnerUpId: null,
    history: []
  };
}

function primaryCupConfig(competitions = state?.databaseCompetitions || activeDatabase().competitions || {}) {
  return Array.isArray(competitions.nationalCups) ? competitions.nationalCups[0] : null;
}

function extraCompetitionConfigs(competitions = {}) {
  return [
    ...(Array.isArray(competitions.stateCompetitions) ? competitions.stateCompetitions.map((item) => ({ ...item, category: "estadual" })) : []),
    ...(Array.isArray(competitions.continentalCompetitions) ? competitions.continentalCompetitions.map((item) => ({ ...item, category: "continental" })) : [])
  ];
}

function competitionParticipants(config, clubList) {
  const explicitIds = Array.isArray(config.databaseParticipants) ? config.databaseParticipants : Array.isArray(config.participants) ? config.participants : [];
  let participants = explicitIds
    .map((id) => clubList.find((club) => club.id === id))
    .filter(Boolean);
  if (!participants.length && config.state) {
    participants = clubList.filter((club) => String(club.state || "").toUpperCase() === String(config.state).toUpperCase());
  }
  if (!participants.length && config.category === "continental") {
    const limit = config.id?.includes("sul") ? 8 : 6;
    participants = [...clubList]
      .filter((club) => clubDivision(club) === 1)
      .sort((a, b) => b.reputation - a.reputation)
      .slice(config.id?.includes("sul") ? 6 : 0, config.id?.includes("sul") ? 6 + limit : limit);
  }
  return participants;
}

function buildExtraUserFixtures(config, participants, userClubId) {
  const userClub = participants.find((club) => club.id === userClubId);
  if (!userClub) return [];
  if (Array.isArray(config.fixtures) && config.fixtures.length) {
    return config.fixtures
      .map((fixture, index) => {
        const homeId = fixture.homeId || fixture.home;
        const awayId = fixture.awayId || fixture.away;
        if (![homeId, awayId].includes(userClubId)) return null;
        const opponentId = homeId === userClubId ? awayId : homeId;
        return {
          id: fixture.id || `${config.id || config.name}-fixture-${index + 1}`,
          type: "extra",
          competitionId: config.id || config.name,
          competition: config.name || "Competicao extra",
          round: fixture.round || index + 1,
          roundLabel: fixture.roundLabel || fixture.stage || fixture.phase || `Rodada ${fixture.round || index + 1}`,
          day: clamp(Number(fixture.day || fixture.matchDay || 1), 1, 365),
          homeId,
          awayId,
          opponentId,
          played: Boolean(fixture.played),
          result: fixture.result || null
        };
      })
      .filter(Boolean)
      .sort((a, b) => a.day - b.day);
  }
  const months = Array.isArray(config.months) && config.months.length ? config.months : [2, 3, 4];
  const opponents = participants
    .filter((club) => club.id !== userClubId)
    .sort((a, b) => b.reputation - a.reputation)
    .slice(0, Math.min(config.category === "continental" ? 8 : 6, participants.length - 1));
  return opponents.map((opponent, index) => {
    const month = clamp(Number(months[index % months.length]) || 2, 1, 12);
    const baseDay = monthStartDay(month - 1);
    const day = clamp(baseDay + 5 + (index % 4) * 7 + Math.floor(index / 4) * 2, 1, 365);
    const userHome = index % 2 === 0;
    return {
      id: `${config.id || config.name}-${index + 1}`,
      type: "extra",
      competitionId: config.id || config.name,
      competition: config.name || "Competicao extra",
      round: index + 1,
      roundLabel: index < Math.ceil(opponents.length * 0.65) ? "Fase inicial" : "Mata-mata",
      day,
      homeId: userHome ? userClub.id : opponent.id,
      awayId: userHome ? opponent.id : userClub.id,
      opponentId: opponent.id,
      played: false
    };
  }).sort((a, b) => a.day - b.day);
}

function createExtraCompetitions(clubList, competitions = {}, userClubId = null) {
  return extraCompetitionConfigs(competitions)
    .map((config) => {
      const participants = competitionParticipants(config, clubList);
      return {
        id: config.id || String(config.name || "extra").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        name: config.name || "Competicao extra",
        category: config.category,
        format: config.format || "calendar",
        months: config.months || [],
        participants: participants.map((club) => club.id),
        userFixtures: buildExtraUserFixtures(config, participants, userClubId),
        history: [],
        finished: false
      };
    })
    .filter((competition) => competition.participants.length >= 2);
}

function createNewGame(clubId, mode = selectedGameMode || "free") {
  const sourceClubs = activeClubs();
  const leagueClubs = sourceClubs.map((club, index) => {
    const { players, ...clubState } = club;
    return {
      ...clubState,
      division: club.division || 1,
      facilities: club.facilities || defaultFacilities(club),
      squad: createSquad(club, index * 17),
      stats: baseClubStats(),
      finance: { lastPrize: 0, lastRevenue: 0, lastSeasonTotal: 0 },
      cup: { bestRound: 0, eliminated: false }
    };
  });
  leagueClubs.forEach((club, index) => ensureClubDevelopment(club, index));
  const game = {
    userClubId: clubId,
    databaseName: activeDatabase().databaseName,
    databaseCustom: Boolean(customDatabase),
    databaseSettings: activeDatabase().settings || {},
    databaseFinance: activeDatabase().finance || {},
    databaseDivisions: activeDatabase().divisions || [],
    databaseCompetitions: activeDatabase().competitions || {},
    databaseLogos: customDatabase ? { ...(activeDatabase().logos || {}) } : activeLogoProfiles(),
    gameMode: mode,
    coach: initialCoachProfile(sourceClubs.find((club) => club.id === clubId) || sourceClubs[0], mode),
    round: 1,
    maxRounds: Number((activeDatabase().divisions || []).find((item) => Number(item.id) === Number(sourceClubs.find((club) => club.id === clubId)?.division || 1) || Number(item.level) === Number(sourceClubs.find((club) => club.id === clubId)?.division || 1))?.rounds || 38),
    day: 1,
    nextMatchDay: matchDayForRound(1),
    clubs: leagueClubs,
    tactics: {
      formation: "4-3-3",
      mentality: "Equilibrada",
      attackStyle: "Explorar pontas",
      defenseStyle: "Bloco medio"
    },
    customFormation: [...formations["4-3-3"]],
    customSlotCoords: defaultCustomCoords(formations["4-3-3"]),
    lineupIds: [],
    lineupRoles: [],
    benchIds: [],
    market: [],
    offers: [],
    pendingProposals: [],
    offerModal: null,
    scouting: {},
    scoutingJobs: [],
    inbox: [],
    loans: [],
    freeAgents: [],
    pendingTransfers: [],
    transferWindowNotices: {},
    transferHistory: [],
    cup: createCupState(leagueClubs, primaryCupConfig(activeDatabase().competitions || {})),
    extraCompetitions: createExtraCompetitions(leagueClubs, activeDatabase().competitions || {}, clubId),
    seasonClosed: false,
    leagueView: "division1",
    calendarMonth: 0,
    marketSubTab: "players",
    marketPlayerSubTab: "listed",
    marketInterestList: [],
    marketSearchPerformed: false,
    squadSubTab: "pro",
    negotiation: null,
    selectedClubId: clubId,
    previousTab: "league",
    liveMatch: null,
    matchSpeed: 1500,
    news: ["Temporada iniciada. A diretoria espera uma campanha coerente com o elenco."],
    lastReport: null
  };
  state = game;
  resetLineup(true);
  updateTransferLists(false);
  state.market = generateMarket();
  state.offers = [];
  addInbox("Boas-vindas", "A temporada comecou. A diretoria espera uma campanha coerente com o elenco.", "geral");
  addInbox("Janela de transferencias aberta", `A Janela de Janeiro abriu em ${dateShort(1)} e vai ate ${dateShort(31)}. Contratacoes fechadas agora chegam imediatamente.`, "mercado");
  state.transferWindowNotices["jan-open"] = true;
  addNextMatchInbox();
  return game;
}

function baseClubStats() {
  return { played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, points: 0, shots: 0, possession: 0, tackles: 0, xg: 0, formationUsage: {} };
}

function ensureLeagueSize(saved) {
  const shouldUseDefaultTemplates = !saved.databaseCustom && (!saved.databaseName || saved.databaseName === "FootCoach generica");
  const sourceClubs = shouldUseDefaultTemplates ? clubs : [];
  const existing = new Set((saved.clubs || []).map((club) => club.id));
  sourceClubs.forEach((club, index) => {
    if (existing.has(club.id)) return;
    saved.clubs.push({
      ...club,
      division: club.division || 1,
      squad: createSquad(club, index * 17),
      stats: baseClubStats(),
      finance: { lastPrize: 0, lastRevenue: 0, lastSeasonTotal: 0 },
      cup: { bestRound: 0, eliminated: false }
    });
  });
}

function migrateState(saved) {
  if (!saved) return null;
  saved.clubs = Array.isArray(saved.clubs) ? saved.clubs : [];
  ensureLeagueSize(saved);
  saved.market = saved.market || [];
  saved.offers = saved.offers || [];
  saved.pendingProposals = saved.pendingProposals || [];
  saved.offerModal = saved.offerModal || null;
  saved.scouting = saved.scouting || {};
  saved.scoutingJobs = saved.scoutingJobs || [];
  saved.inbox = saved.inbox || [];
  saved.loans = saved.loans || [];
  saved.freeAgents = saved.freeAgents || [];
  saved.pendingTransfers = saved.pendingTransfers || [];
  saved.transferWindowNotices = saved.transferWindowNotices || {};
  saved.transferHistory = saved.transferHistory || [];
  saved.gameMode = saved.gameMode || "free";
  saved.coach = saved.coach || initialCoachProfile(saved.clubs.find((club) => club.id === saved.userClubId) || clubs[0], saved.gameMode);
  saved.coach.history = Array.isArray(saved.coach.history) ? saved.coach.history : [];
  saved.coach.experience = Number.isFinite(saved.coach.experience) ? saved.coach.experience : 20;
  saved.coach.reputation = Number.isFinite(saved.coach.reputation) ? saved.coach.reputation : 20;
  saved.coach.seasons = Number.isFinite(saved.coach.seasons) ? saved.coach.seasons : 0;
  saved.databaseDivisions = Array.isArray(saved.databaseDivisions) ? saved.databaseDivisions : [];
  saved.databaseSettings = saved.databaseSettings || {};
  saved.databaseFinance = saved.databaseFinance || {};
  saved.databaseCompetitions = saved.databaseCompetitions || {};
  saved.databaseLogos = saved.databaseLogos || {};
  saved.clubs.forEach((club) => {
    if (club.logo) saved.databaseLogos[club.id] = club.logo;
  });
  if (!saved.databaseCustom && (!saved.databaseName || saved.databaseName === "FootCoach generica")) {
    saved.databaseLogos = { ...clubLogoProfiles, ...saved.databaseLogos };
  }
  saved.cup = saved.cup || createCupState(saved.clubs, primaryCupConfig(saved.databaseCompetitions));
  saved.cup.name = saved.cup.name || primaryCupConfig(saved.databaseCompetitions)?.name || "Copa Nacional";
  saved.extraCompetitions = Array.isArray(saved.extraCompetitions) ? saved.extraCompetitions : createExtraCompetitions(saved.clubs, saved.databaseCompetitions, saved.userClubId);
  if (!saved.extraCompetitions.length && extraCompetitionConfigs(saved.databaseCompetitions).length) {
    saved.extraCompetitions = createExtraCompetitions(saved.clubs, saved.databaseCompetitions, saved.userClubId);
  }
  saved.seasonClosed = Boolean(saved.seasonClosed);
  saved.leagueView = saved.leagueView || "division1";
  saved.calendarMonth = Number.isInteger(saved.calendarMonth) ? saved.calendarMonth : monthIndexFromDay(saved.day || 1);
  saved.marketSubTab = saved.marketSubTab || "players";
  saved.marketPlayerSubTab = saved.marketPlayerSubTab || "listed";
  saved.marketInterestList = Array.isArray(saved.marketInterestList) ? saved.marketInterestList : [];
  saved.marketSearchPerformed = Boolean(saved.marketSearchPerformed);
  saved.squadSubTab = saved.squadSubTab || "pro";
  saved.negotiation = saved.negotiation || null;
  saved.selectedClubId = saved.selectedClubId || saved.userClubId;
  saved.previousTab = saved.previousTab || "league";
  saved.maxRounds = Number(saved.maxRounds || 38);
  saved.day = saved.day || Math.max(1, ((saved.round || 1) - 1) * 7 + 1);
  saved.nextMatchDay = saved.round <= saved.maxRounds ? matchDayForRound(saved.round || 1) : 366;
  Object.keys(saved.scouting).forEach((playerId) => {
    if (typeof saved.scouting[playerId] === "number") saved.scouting[playerId] = { level: saved.scouting[playerId] };
  });
  state = saved;
  saved.maxRounds = maxRoundsForDivision(userDivision());
  saved.clubs.forEach((club) => {
    club.squad.forEach((player) => {
      player.nationality = normalizeNationalityCode(player.nationality || "BR");
      player.condition = Number.isFinite(player.condition) ? player.condition : 92;
      player.matchLoad = Number.isFinite(player.matchLoad) ? player.matchLoad : 0;
      player.lastPlayedDay = Number.isFinite(player.lastPlayedDay) ? player.lastPlayedDay : -20;
      player.listStatus = normalizeListStatus(player.listStatus || "none");
      player.listStatusLocked = Boolean(player.listStatusLocked);
      player.yellowCards = Number.isFinite(player.yellowCards) ? player.yellowCards : 0;
      player.redCards = Number.isFinite(player.redCards) ? player.redCards : 0;
      player.suspension = player.suspension && player.suspension.matches > 0 ? player.suspension : null;
      player.contractEndDay = Number.isFinite(player.contractEndDay) ? player.contractEndDay : (saved.day || 1) + 365 * rng(1, 4);
      player.contractWarnings = player.contractWarnings || {};
      player.preContract = player.preContract || null;
      player.stats = {
        apps: 0,
        goals: 0,
        assists: 0,
        shots: 0,
        saves: 0,
        cleanSheets: 0,
        goalsAgainst: 0,
        tackles: 0,
        passes: 0,
        minutes: 0,
        ratingSum: 0,
        ...(player.stats || {})
      };
    });
  });
  saved.liveMatch = saved.liveMatch || null;
  saved.matchSpeed = saved.matchSpeed || 1500;
  saved.customFormation = Array.isArray(saved.customFormation) && saved.customFormation.length === 11 ? saved.customFormation : [...(formations[saved.tactics?.formation] || formations["4-3-3"])];
  saved.customSlotCoords = Array.isArray(saved.customSlotCoords) && saved.customSlotCoords.length === 11 ? saved.customSlotCoords : defaultCustomCoords(saved.customFormation);
  saved.benchIds = Array.isArray(saved.benchIds) && saved.benchIds.length ? saved.benchIds.slice(0, maxBenchPlayers) : null;
  if (saved.liveMatch) {
    saved.liveMatch.tactics = saved.liveMatch.tactics || { ...saved.tactics };
    saved.liveMatch.lineupIds = saved.liveMatch.lineupIds || [...(saved.lineupIds || [])];
    saved.liveMatch.lineupRoles = saved.liveMatch.lineupRoles || [...(saved.lineupRoles || [])];
    saved.liveMatch.benchIds = Array.isArray(saved.liveMatch.benchIds) ? saved.liveMatch.benchIds.slice(0, maxBenchPlayers) : [...(saved.benchIds || [])];
    saved.liveMatch.userHome = typeof saved.liveMatch.userHome === "boolean" ? saved.liveMatch.userHome : true;
    saved.liveMatch.homeName = saved.liveMatch.homeName || (saved.liveMatch.userHome ? saved.clubs.find((club) => club.id === saved.userClubId)?.name : saved.liveMatch.opponentName);
    saved.liveMatch.awayName = saved.liveMatch.awayName || (saved.liveMatch.userHome ? saved.liveMatch.opponentName : saved.clubs.find((club) => club.id === saved.userClubId)?.name);
    saved.liveMatch.competition = saved.liveMatch.competition || "Liga Nacional";
  }
  saved.clubs.forEach((club, clubIndex) => {
    const sourceClub = (!saved.databaseCustom ? clubs.find((item) => item.id === club.id) : null) || club || {};
    club.budget = typeof club.budget === "number" ? club.budget : sourceClub.budget || 18;
    club.reputation = typeof club.reputation === "number" ? club.reputation : sourceClub.reputation || 60;
    club.division = Number(club.division || sourceClub.division || 1);
    club.style = club.style || sourceClub.style || "clube em reconstrucao";
    club.color = club.color || sourceClub.color || "#555";
    club.logoUrl = club.logoUrl || sourceClub.logoUrl || "";
    club.logo = club.logo || sourceClub.logo || saved.databaseLogos[club.id] || null;
    club.stats = club.stats || baseClubStats();
    club.finance = club.finance || { lastPrize: 0, lastRevenue: 0, lastSeasonTotal: 0 };
    club.cup = club.cup || { bestRound: 0, eliminated: false };
    ensureClubDevelopment(club, clubIndex);
    club.stats.shots = club.stats.shots || 0;
    club.stats.possession = club.stats.possession || 0;
    club.stats.tackles = club.stats.tackles || 0;
    club.stats.xg = club.stats.xg || 0;
    club.stats.formationUsage = club.stats.formationUsage || {};
    club.squad.forEach((player, playerIndex) => {
      ensurePlayerIdentity(player, clubIndex * 1000 + playerIndex, false);
      if (player.attrVersion !== attrVersion) {
        Object.assign(player, buildAttributes(player.position, player.rating));
        player.attrVersion = attrVersion;
      }
      player.positionExp = player.positionExp || startingPositionExp(player.position);
      if (player.secondaryPosition === undefined) {
        const extras = secondaryPositionsFor(player.position, player.rating || 60, -8);
        player.secondaryPosition = extras.secondaryPosition;
        player.tertiaryPosition = extras.tertiaryPosition;
        player.hiddenPositions = extras.hiddenPositions;
      }
      player.hiddenPositions = Array.isArray(player.hiddenPositions) ? player.hiddenPositions : [];
      if (!player.roleExp || player.roleVersion !== roleVersion) {
        player.roleExp = initialRoleExperience(player, player.position);
        player.roleVersion = roleVersion;
      }
      player.training = player.training || { attr: "automatic", position: player.position, role: defaultRoleForSlot(player.position) };
      player.ambition = player.ambition || rng(45, 90);
      player.happiness = player.happiness || rng(48, 86);
      player.wants = player.wants || ["minutos", "salario", "titulos", "desenvolvimento"][rng(0, 3)];
      player.injury = player.injury && player.injury.daysLeft > 0 ? player.injury : null;
      player.suspension = player.suspension && player.suspension.matches > 0 ? player.suspension : null;
      player.yellowCards = Number.isFinite(player.yellowCards) ? player.yellowCards : 0;
      player.redCards = Number.isFinite(player.redCards) ? player.redCards : 0;
      player.contractEndDay = Number.isFinite(player.contractEndDay) ? player.contractEndDay : (saved.day || 1) + 365 * rng(1, 4);
      player.contractWarnings = player.contractWarnings || {};
      player.preContract = player.preContract || null;
      player.loan = player.loan || null;
      if (player.releaseClause === undefined) player.releaseClause = realisticReleaseClause(player, club.reputation);
      player.transferBonuses = Array.isArray(player.transferBonuses) ? player.transferBonuses : [];
      if (player.valueEconomyVersion !== economyVersion) {
        player.value = calculatePlayerValue(player, club.reputation);
        player.wage = calculatePlayerWage(player);
        player.valueEconomyVersion = economyVersion;
      } else {
        player.value = player.value && player.value > 0 ? player.value : calculatePlayerValue(player, club.reputation);
        player.wage = player.wage && player.wage > 0 ? player.wage : calculatePlayerWage(player);
      }
      player.lastValueUpdateDay = player.lastValueUpdateDay || saved.day || 1;
      player.dribbling = player.dribbling || clamp(player.attacking + rng(-8, 10), 25, 95);
      player.finishing = player.finishing || clamp(player.attacking + rng(-8, 8), 22, 95);
      player.crossing = player.crossing || clamp(player.passing + rng(-10, 8), 22, 94);
      player.tackling = player.tackling || clamp(player.defending + rng(-8, 8), 22, 94);
      player.vision = player.vision || clamp(player.passing + rng(-6, 10), 25, 95);
      player.handling = player.handling || (player.position === "GK" ? clamp(player.rating + rng(-5, 10), 35, 94) : 35);
      player.reflexes = player.reflexes || (player.position === "GK" ? clamp(player.rating + rng(-5, 12), 35, 95) : 35);
      player.positioningGk = player.positioningGk || (player.position === "GK" ? clamp(player.rating + rng(-6, 10), 35, 94) : 35);
      player.oneOnOne = player.oneOnOne || (player.position === "GK" ? clamp(player.rating + rng(-8, 12), 35, 94) : 35);
      player.distribution = player.distribution || (player.position === "GK" ? clamp(player.passing + rng(-6, 8), 35, 92) : 35);
      player.aerial = player.aerial || (player.position === "GK" ? clamp(player.rating + rng(-8, 10), 35, 94) : clamp(player.defending + rng(-8, 8), 25, 94));
      player.stats = { apps: 0, goals: player.goals || 0, assists: player.assists || 0, shots: 0, saves: 0, cleanSheets: 0, goalsAgainst: 0, tackles: 0, passes: 0, minutes: 0, ratingSum: 0, ...(player.stats || {}) };
    });
    club.youthAcademy.forEach((player, playerIndex) => {
      player.youth = true;
      ensurePlayerIdentity(player, clubIndex * 3000 + playerIndex, true);
      normalizeYouthPotential(player, club);
      player.positionExp = player.positionExp || startingPositionExp(player.position);
      player.roleExp = player.roleExp || initialRoleExperience(player, player.position);
      player.training = player.training || { attr: "automatic", position: player.position, role: defaultRoleForSlot(player.position) };
      player.hiddenPositions = Array.isArray(player.hiddenPositions) ? player.hiddenPositions : [];
      if (player.secondaryPosition === undefined) {
        const extras = secondaryPositionsFor(player.position, player.rating || 55, 10);
        player.secondaryPosition = extras.secondaryPosition;
        player.tertiaryPosition = extras.tertiaryPosition;
      }
      player.stats = { apps: 0, goals: 0, assists: 0, shots: 0, saves: 0, cleanSheets: 0, goalsAgainst: 0, tackles: 0, passes: 0, minutes: 0, ratingSum: 0, ...(player.stats || {}) };
    });
    if (club.youthIntake?.candidates) {
      club.youthIntake.candidates.forEach((player, playerIndex) => {
        player.youth = true;
        ensurePlayerIdentity(player, clubIndex * 5000 + playerIndex, true);
        normalizeYouthPotential(player, club);
      });
    }
  });
  saved.freeAgents.forEach((player, playerIndex) => {
    ensurePlayerIdentity(player, 90000 + playerIndex, false);
    player.listStatus = "free";
    player.contractEndDay = Number.isFinite(player.contractEndDay) ? player.contractEndDay : 0;
    player.contractWarnings = player.contractWarnings || {};
    player.yellowCards = Number.isFinite(player.yellowCards) ? player.yellowCards : 0;
    player.suspension = null;
  });
  state = saved;
  if (!Array.isArray(saved.lineupIds) || saved.lineupIds.length !== activeSlots(saved.tactics, saved.customFormation).length) resetLineup(true);
  if (!Array.isArray(saved.lineupRoles) || saved.lineupRoles.length !== activeSlots(saved.tactics, saved.customFormation).length) {
    saved.lineupRoles = activeSlots(saved.tactics, saved.customFormation).map(defaultRoleForSlot);
  }
  updateTransferLists(false);
  saved.market = generateMarket();
  saved.offers = saved.offers || [];
  return saved;
}

function getUserClub() {
  return state.clubs.find((club) => club.id === state.userClubId);
}

function playerById(club, id) {
  return club.squad.find((player) => player.id === id);
}

function findPlayerById(id) {
  for (const club of state.clubs) {
    const player = playerById(club, id);
    if (player) return player;
  }
  const freeAgent = (state.freeAgents || []).find((player) => player.id === id);
  if (freeAgent) return freeAgent;
  return null;
}

function addInbox(title, body, type = "geral", actions = []) {
  state.inbox = state.inbox || [];
  state.inbox.unshift({
    id: makeId(),
    day: state.day,
    title,
    body,
    type,
    read: false,
    actions
  });
  state.inbox = state.inbox.slice(0, 80);
}

function addNextMatchInbox() {
  const fixture = nextUserFixture();
  if (!fixture) return;
  const opponent = fixture.opponent;
  const tactics = aiTactics(opponent);
  const best = [...opponent.squad].sort((a, b) => b.rating - a.rating)[0];
  const formation = mostUsedFormation(opponent) === "Sem historico" ? tactics.formation : mostUsedFormation(opponent);
  addInbox(
    `Proximo jogo: ${fixture.userHome ? "casa" : "fora"} contra ${opponent.name}`,
    `${fixture.competition}, ${fixture.type === "cup" ? fixture.round : `rodada ${fixture.round}`}, dia ${fixture.day}. O adversario costuma usar ${formation}; melhor jogador observado: ${best.name}, ${best.position}, geral aproximado ${Math.round(best.rating)}.`,
    "jogo"
  );
}

function activeTransferWindow(day = state.day) {
  return transferWindows.find((window) => day >= window.start && day <= window.end) || null;
}

function isTransferWindowOpen(day = state.day) {
  return Boolean(activeTransferWindow(day));
}

function nextTransferWindowStart(day = state.day) {
  const next = transferWindows.find((window) => day < window.start);
  return next ? next.start : 366;
}

function dateShort(day) {
  if (day > 365) return "1 de Janeiro da proxima temporada";
  const safeDay = Math.max(1, day);
  const monthIndex = monthIndexFromDay(safeDay);
  const monthDay = safeDay - monthStartDay(monthIndex) + 1;
  return `${monthDay} de ${monthNames[monthIndex]}`;
}

function dateFull(day = state.day) {
  const safeDay = Math.max(1, Number(day || 1));
  const yearOffset = Math.floor((safeDay - 1) / 365);
  const seasonDay = ((safeDay - 1) % 365) + 1;
  return `${dateShort(seasonDay)} de ${seasonStartYear + yearOffset}`;
}

function processTransferWindowEvents(previousDay = state.day - 1) {
  state.transferWindowNotices = state.transferWindowNotices || {};
  transferWindows.forEach((window) => {
    if (previousDay < window.start && state.day >= window.start && !state.transferWindowNotices[`${window.id}-open`]) {
      state.transferWindowNotices[`${window.id}-open`] = true;
      addInbox("Janela de transferencias aberta", `${window.name} abriu em ${dateShort(window.start)} e vai ate ${dateShort(window.end)}. Acordos pendentes podem ser registrados agora.`, "mercado");
      processPendingTransferArrivals();
    }
    if (previousDay < window.end + 1 && state.day >= window.end + 1 && !state.transferWindowNotices[`${window.id}-close`]) {
      state.transferWindowNotices[`${window.id}-close`] = true;
      rejectUnansweredWindowOffers(window);
      addInbox("Janela de transferencias fechada", `${window.name} fechou. Novos acordos ainda podem ser feitos, mas chegadas de jogadores com clube ficam para a proxima janela.`, "mercado");
    }
  });
}

function rejectUnansweredWindowOffers(window) {
  state.offers = state.offers || [];
  const expiringOffers = state.offers.filter((offer) => {
    const createdDay = Number(offer.createdDay || offer.day || state.day);
    return createdDay >= window.start && createdDay <= window.end;
  });
  if (!expiringOffers.length) return;
  const playerNames = expiringOffers
    .map((offer) => playerById(getUserClub(), offer.playerId)?.name)
    .filter(Boolean);
  const expiringIds = new Set(expiringOffers.map((offer) => offer.id));
  state.offers = state.offers.filter((offer) => !expiringIds.has(offer.id));
  if (state.offerModal && expiringIds.has(state.offerModal.offerId)) state.offerModal = null;
  addInbox(
    "Propostas expiradas",
    `${expiringOffers.length} proposta${expiringOffers.length > 1 ? "s" : ""} feita${expiringOffers.length > 1 ? "s" : ""} durante ${window.name} expirou${expiringOffers.length > 1 ? "ram" : ""} sem acordo antes do fechamento da janela${playerNames.length ? `: ${playerNames.slice(0, 4).join(", ")}${playerNames.length > 4 ? "..." : ""}.` : "."}`,
    "mercado"
  );
}

function seasonDay(day = state.day) {
  return ((day - 1) % 365) + 1;
}

function youthIntakeSize(club) {
  return clamp(Math.round(15 + (club.facilities?.academy || 2.5) * 3.4 + rng(-3, 4)), 15, 30);
}

function generateYouthIntake(club) {
  const count = youthIntakeSize(club);
  const positionPool = ["GK", "RB", "LB", "CB", "CB", "DM", "CM", "CM", "AM", "RM", "LM", "RW", "LW", "ST", "ST"];
  return {
    id: makeId(),
    day: state.day,
    maxPicks: Math.max(1, Math.floor(count * 0.2)),
    pickedIds: [],
    candidates: Array.from({ length: count }, (_, index) => makeYouthPlayer(state.day + index * 19 + club.reputation, club, positionPool[rng(0, positionPool.length - 1)], rng(15, 17)))
  };
}

function processYouthAcademies(previousDay = state.day - 1) {
  const prevSeasonDay = seasonDay(previousDay);
  const currentSeasonDay = seasonDay(state.day);
  const intakeNow = prevSeasonDay < youthIntakeDay && currentSeasonDay >= youthIntakeDay;
  const newSeason = previousDay > 0 && seasonDay(previousDay) > currentSeasonDay;
  state.clubs.forEach((club) => {
    ensureClubDevelopment(club);
    if (newSeason) club.youthAcademy.forEach((player) => { player.age += 1; });
    if (intakeNow && !club.youthIntake) {
      club.youthIntake = generateYouthIntake(club);
      if (club.id === state.userClubId) {
        addInbox(
          "Peneira da base aberta",
          `A fornada trouxe ${club.youthIntake.candidates.length} jogadores. Voce pode escolher ate ${club.youthIntake.maxPicks}, respeitando o limite de ${youthAcademyLimit} atletas na base.`,
          "base",
          [{ label: "Ver jogadores", action: "viewYouthIntake" }]
        );
      } else {
        aiSelectYouthIntake(club);
      }
    }
    if (club.id !== state.userClubId && rng(1, 100) <= 2) aiImproveFacility(club);
    enforceYouthRules(club);
  });
}

function aiSelectYouthIntake(club) {
  if (!club.youthIntake) return;
  const room = Math.max(0, youthAcademyLimit - club.youthAcademy.length);
  const picks = Math.min(room, club.youthIntake.maxPicks);
  const chosen = [...club.youthIntake.candidates]
    .sort((a, b) => b.potential - a.potential || b.rating - a.rating)
    .slice(0, picks);
  chosen.forEach((player) => club.youthAcademy.push({ ...player, youth: true, joinedAcademyDay: state.day }));
  club.youthIntake = null;
}

function enforceYouthRules(club) {
  club.youthAcademy = club.youthAcademy || [];
  const overflow = Math.max(0, club.youthAcademy.length - youthAcademyLimit);
  if (overflow > 0) {
    club.youthAcademy
      .sort((a, b) => a.potential - b.potential || a.rating - b.rating)
      .slice(0, overflow)
      .forEach((player) => releaseYouthPlayer(player.id, club.id, true));
  }
  club.youthAcademy.forEach((player) => {
    if (player.age < 20) return;
    if (club.id === state.userClubId && !player.ageLimitNotice) {
      player.ageLimitNotice = true;
      addInbox("Decisao obrigatoria na base", `${player.name} chegou aos 20 anos. Suba o jogador ao profissional ou libere-o da categoria de base.`, "base");
    } else if (club.id !== state.userClubId) {
      if (player.rating >= club.reputation - 14 || player.potential >= 74) promoteYouthPlayer(player.id, club.id, true);
      else releaseYouthPlayer(player.id, club.id, true);
    }
  });
  developYouthPlayers(club);
}

function developYouthPlayers(club) {
  const academyDev = facilityMultiplier(club.facilities?.academy || 3);
  const trainingDev = facilityMultiplier(club.facilities?.training || 3);
  club.youthAcademy.forEach((player) => {
    if (isInjured(player)) return;
    const room = Math.max(0, player.potential - player.rating);
    const delta = clamp((0.018 + room * 0.0018 + rng(-1, 2) * 0.004) * academyDev, -0.01, 0.09);
    player.rating = clamp(+(player.rating + delta).toFixed(2), 35, player.potential);
    applyTraining(player, null, { facilities: { training: ((club.facilities?.training || 3) + (club.facilities?.academy || 3)) / 2 } });
    if (rng(1, 100) <= 3 * trainingDev) {
      const attr = bestTrainingAttrForRole(player.training?.role || defaultRoleForSlot(player.position));
      if (player[attr] !== undefined) player[attr] = clamp(+(player[attr] + 0.08 * academyDev).toFixed(1), 10, 99);
    }
    player.value = calculatePlayerValue(player, club.reputation);
  });
}

function improveFacility(type, clubId = state.userClubId, silent = false) {
  const club = state.clubs.find((item) => item.id === clubId);
  if (!club || !facilityTypes[type]) return;
  ensureClubDevelopment(club);
  if (club.facilities[type] >= 5) return;
  const cost = facilityCost(club, type);
  if (club.budget < cost) {
    if (!silent) showAlertModal("Orcamento insuficiente", `A melhoria de ${facilityTypes[type].label} custa ${money(cost)}.`);
    return;
  }
  club.budget = +(club.budget - cost).toFixed(1);
  club.facilities[type] = clamp(+(club.facilities[type] + 0.5).toFixed(1), 1, 5);
  if (!silent) addInbox("Instalacao melhorada", `${facilityTypes[type].label} subiu para ${stars(club.facilities[type])}. A diretoria investiu ${money(cost)}.`, "clube");
  if (!silent) {
    saveState();
    render();
  }
}

function aiImproveFacility(club) {
  const weakest = Object.keys(facilityTypes).sort((a, b) => (club.facilities[a] || 3) - (club.facilities[b] || 3))[0];
  const cost = facilityCost(club, weakest);
  if (club.budget > cost * 3.2 && club.facilities[weakest] < 5 && rng(1, 100) <= clamp(18 + club.reputation / 5, 12, 34)) {
    improveFacility(weakest, club.id, true);
  }
}

function signYouthCandidate(playerId) {
  const club = getUserClub();
  const intake = club.youthIntake;
  if (!intake) return;
  if (club.youthAcademy.length >= youthAcademyLimit) return showAlertModal("Base cheia", `A categoria de base ja tem ${youthAcademyLimit} jogadores. Libere ou promova alguem antes de trazer outro atleta.`);
  if (intake.pickedIds.length >= intake.maxPicks) return showAlertModal("Limite da peneira", `Voce ja escolheu ${intake.maxPicks} jogador${intake.maxPicks > 1 ? "es" : ""} desta fornada.`);
  const player = intake.candidates.find((item) => item.id === playerId);
  if (!player || intake.pickedIds.includes(playerId)) return;
  intake.pickedIds.push(playerId);
  club.youthAcademy.push({ ...player, youth: true, joinedAcademyDay: state.day });
  saveState();
  render();
}

function promoteYouthPlayer(playerId, clubId = state.userClubId, silent = false) {
  const club = state.clubs.find((item) => item.id === clubId);
  const player = club?.youthAcademy.find((item) => item.id === playerId);
  if (!club || !player) return;
  if (player.age < 16) {
    if (!silent) showAlertModal("Muito jovem", `${player.name} ainda nao pode subir. A promocao ao profissional so e permitida a partir dos 16 anos.`);
    return;
  }
  club.youthAcademy = club.youthAcademy.filter((item) => item.id !== playerId);
  club.squad.push({ ...player, youth: false, wage: Math.max(player.wage || 0.02, +(player.value * 0.025).toFixed(2)), contractEndDay: state.day + 365 * 3, listStatus: "none" });
  if (!silent && club.id === state.userClubId) addInbox("Garoto promovido", `${player.name} subiu para o elenco profissional.`, "base");
  if (!silent) {
    saveState();
    render();
  }
}

function releaseYouthPlayer(playerId, clubId = state.userClubId, silent = false) {
  const club = state.clubs.find((item) => item.id === clubId);
  const player = club?.youthAcademy.find((item) => item.id === playerId);
  if (!club || !player) return;
  club.youthAcademy = club.youthAcademy.filter((item) => item.id !== playerId);
  if (!silent && club.id === state.userClubId) addInbox("Jogador liberado da base", `${player.name} deixou a categoria de base.`, "base");
  if (!silent) {
    saveState();
    render();
  }
}

function compatible(playerPos, slot) {
  const groups = [
    ["RB", "LB", "CB"],
    ["DM", "CM", "AM"],
    ["RM", "LM", "RW", "LW"],
    ["ST"]
  ];
  return playerPos === slot || groups.some((group) => group.includes(playerPos) && group.includes(slot));
}

function fitLevel(playerPos, slot) {
  if (playerPos === slot) return 1;
  if (playerPos === "GK" || slot === "GK") return 0;
  if ((playerPos === "RB" && slot === "LB") || (playerPos === "LB" && slot === "RB")) return 0.74;
  if ((["RB", "LB"].includes(playerPos) && slot === "CB") || (playerPos === "CB" && ["RB", "LB"].includes(slot))) return 0.58;
  if ((playerPos === "DM" && slot === "CM") || (playerPos === "CM" && slot === "DM")) return 0.82;
  if ((playerPos === "CM" && slot === "AM") || (playerPos === "AM" && slot === "CM")) return 0.74;
  if ((["RM", "RW"].includes(playerPos) && ["RM", "RW"].includes(slot)) || (["LM", "LW"].includes(playerPos) && ["LM", "LW"].includes(slot))) return 0.86;
  if ((["RW", "LW", "RM", "LM"].includes(playerPos) && ["RW", "LW", "RM", "LM"].includes(slot))) return 0.7;
  if ((["ST", "AM"].includes(playerPos) && ["ST", "AM"].includes(slot))) return 0.62;
  return compatible(playerPos, slot) ? 0.52 : 0.25;
}

function positionFit(player, slot) {
  if (!player) return 0.25;
  const primary = fitLevel(player.position, slot);
  const secondary = player.secondaryPosition ? Math.max(0, fitLevel(player.secondaryPosition, slot) - 0.08) : 0;
  const tertiary = player.tertiaryPosition ? Math.max(0, fitLevel(player.tertiaryPosition, slot) - 0.15) : 0;
  const hidden = (player.hiddenPositions || []).reduce((best, pos) => Math.max(best, Math.max(0, fitLevel(pos, slot) - 0.24)), 0);
  const exp = (player.positionExp?.[slot] || 0) / 100;
  return clamp(Math.max(primary, secondary, tertiary, hidden, exp * 0.9), 0.2, 1);
}

function roleScore(player, slot) {
  const role = player.role || defaultRoleForSlot(slot);
  const weights = roleWeights[role] || slotWeights[slot] || slotWeights.CM;
  const weighted = Object.entries(weights).reduce((sum, [attr, weight]) => sum + (player[attr] || player.rating || 50) * weight, 0);
  const base = player.rating || weighted;
  const fit = positionFit(player, slot);
  const exp = player.positionExp?.[slot] ?? Math.round(fit * 45);
  const roleExp = player.roleExp?.[role] ?? 15;
  const positionPenalty = fit >= 0.98 ? 0 : fit >= 0.8 ? 3 : fit >= 0.65 ? 7 : fit >= 0.5 ? 13 : 25;
  const expPenalty = clamp((100 - exp) * 0.12, 0, 10);
  const rolePenalty = clamp((70 - roleExp) * 0.08, 0, 7);
  const attributePenalty = Math.max(0, base - weighted) * 0.35;
  const formBonus = clamp((player.form - 70) * 0.08, 0, 2.5);
  return clamp(base + formBonus - positionPenalty - expPenalty - rolePenalty - attributePenalty, 20, 98);
}

function roleEffectiveness(player, role) {
  const weighted = roleWeightedScore(player, role);
  const exp = player.roleExp?.[role] ?? 15;
  const base = player.rating || weighted;
  const styleGap = clamp(weighted - base, -18, 18);
  const attributeFit = clamp(68 + styleGap * 2.4, 22, 98);
  return clamp(attributeFit * 0.7 + exp * 0.24 + (player.form - 65) * 0.08, 5, 99);
}

function roleBaseScore(player, slot) {
  const weights = slotWeights[slot] || slotWeights.CM;
  const weighted = Object.entries(weights).reduce((sum, [attr, weight]) => sum + (player[attr] || player.rating || 50) * weight, 0);
  const fit = positionFit(player, slot);
  const positionPenalty = fit >= 0.98 ? 0 : fit >= 0.8 ? 3 : fit >= 0.65 ? 7 : fit >= 0.5 ? 13 : 25;
  const attributePenalty = Math.max(0, (player.rating || weighted) - weighted) * 0.35;
  return clamp((player.rating || weighted) - positionPenalty - attributePenalty, 20, 98);
}

function sortForSlot(slot, players) {
  return [...players].sort((a, b) => {
    const fitA = positionFit(a, slot);
    const fitB = positionFit(b, slot);
    const naturalA = a.position === slot ? 100 : fitA >= 0.8 ? 50 : fitA >= 0.65 ? 20 : 0;
    const naturalB = b.position === slot ? 100 : fitB >= 0.8 ? 50 : fitB >= 0.65 ? 20 : 0;
    const conditionA = (fitnessQuotient(a) - 82) * 0.12;
    const conditionB = (fitnessQuotient(b) - 82) * 0.12;
    return roleScore(b, slot) + naturalB + conditionB - (roleScore(a, slot) + naturalA + conditionA);
  });
}

function bestEleven(club, tactics = state.tactics) {
  const available = club.squad.filter((player) => !isInjured(player) && !isSuspended(player));
  const emergency = [...club.squad];
  return activeSlots(tactics).map((slot, index) => {
    const pool = available.length ? available : emergency;
    const ordered = sortForSlot(slot, pool);
    const chosen = ordered[0];
    available.splice(available.findIndex((player) => player.id === chosen.id), 1);
    emergency.splice(emergency.findIndex((player) => player.id === chosen.id), 1);
    return { ...chosen, slot, role: defaultRoleForSlot(slot), slotIndex: index };
  });
}

function currentLineup(club = getUserClub(), tactics = state.tactics, ids = state.lineupIds, roles = state.lineupRoles) {
  const slots = activeSlots(tactics);
  const used = new Set();
  return slots.map((slot, index) => {
    let player = playerById(club, ids[index]);
    if (!player || used.has(player.id) || isInjured(player) || isSuspended(player)) {
      player = sortForSlot(slot, club.squad.filter((item) => !used.has(item.id) && !isInjured(item) && !isSuspended(item)))[0]
        || sortForSlot(slot, club.squad.filter((item) => !used.has(item.id)))[0];
      ids[index] = player.id;
    }
    used.add(player.id);
    if (!roles[index] || !roleDefs[slot]?.some((role) => role.id === roles[index])) roles[index] = defaultRoleForSlot(slot);
    return { ...player, slot, role: roles[index], slotIndex: index };
  });
}

function resetLineup(skipRender = false) {
  const club = getUserClub();
  const eleven = bestEleven(club);
  state.lineupIds = eleven.map((player) => player.id);
  state.lineupRoles = eleven.map((player) => player.role);
  state.benchIds = suggestedBench(club, state.lineupIds).map((player) => player.id);
  saveState();
  if (!skipRender) render();
}

function suggestedBench(club = getUserClub(), lineupIds = state.lineupIds) {
  const starters = new Set(lineupIds);
  return [...club.squad]
    .filter((player) => !starters.has(player.id) && !player.loan)
    .sort((a, b) => Number(isInjured(a) || isSuspended(a)) - Number(isInjured(b) || isSuspended(b)) || b.rating - a.rating)
    .slice(0, maxBenchPlayers);
}

function activeBenchIds(context = state.liveMatch ? "match" : "lineup") {
  return activeBenchSlotIds(context).filter(Boolean);
}

function activeBenchSlotIds(context = state.liveMatch ? "match" : "lineup") {
  const club = getUserClub();
  const ids = context === "match" && state.liveMatch ? state.liveMatch.lineupIds : state.lineupIds;
  const target = context === "match" && state.liveMatch ? state.liveMatch : state;
  const starters = new Set(ids);
  const valid = new Set(club.squad.map((player) => player.id));
  if (!Array.isArray(target.benchIds)) target.benchIds = suggestedBench(club, ids).map((player) => player.id);
  const seen = new Set();
  const clean = Array.from({ length: maxBenchPlayers }, (_, index) => {
    const id = target.benchIds[index];
    if (!id || !valid.has(id) || starters.has(id) || seen.has(id)) return null;
    seen.add(id);
    return id;
  });
  target.benchIds = clean;
  return clean;
}

function setBenchIds(nextIds, context = state.liveMatch ? "match" : "lineup") {
  const club = getUserClub();
  const ids = context === "match" && state.liveMatch ? state.liveMatch.lineupIds : state.lineupIds;
  const starters = new Set(ids);
  const valid = new Set(club.squad.map((player) => player.id));
  const clean = [...new Set(nextIds)].filter((id) => valid.has(id) && !starters.has(id)).slice(0, maxBenchPlayers);
  if (context === "match" && state.liveMatch) state.liveMatch.benchIds = clean;
  else state.benchIds = clean;
  return clean;
}

function setBenchSlotIds(nextIds, context = state.liveMatch ? "match" : "lineup") {
  const club = getUserClub();
  const ids = context === "match" && state.liveMatch ? state.liveMatch.lineupIds : state.lineupIds;
  const target = context === "match" && state.liveMatch ? state.liveMatch : state;
  const starters = new Set(ids);
  const valid = new Set(club.squad.map((player) => player.id));
  const seen = new Set();
  const clean = Array.from({ length: maxBenchPlayers }, (_, index) => {
    const id = nextIds[index];
    if (!id || !valid.has(id) || starters.has(id) || seen.has(id)) return null;
    seen.add(id);
    return id;
  });
  if (context === "match" && state.liveMatch) state.liveMatch.benchIds = clean;
  else state.benchIds = clean;
  return clean;
}

function teamStrength(club, tactics, lineup = null) {
  const eleven = lineup || (club.id === state.userClubId ? currentLineup(club) : bestEleven(club, tactics));
  const avg = eleven.reduce((sum, player) => sum + roleScore(player, player.slot), 0) / eleven.length;
  const pace = eleven.reduce((sum, player) => sum + player.pace, 0) / eleven.length;
  const passing = eleven.reduce((sum, player) => sum + player.passing, 0) / eleven.length;
  const dribbling = eleven.reduce((sum, player) => sum + player.dribbling, 0) / eleven.length;
  const defending = eleven.reduce((sum, player) => sum + (player.tackling || player.defending), 0) / eleven.length;
  const attacking = eleven.reduce((sum, player) => sum + (player.finishing || player.attacking), 0) / eleven.length;
  const fit = eleven.reduce((sum, player) => sum + positionFit(player, player.slot), 0) / eleven.length;
  const condition = eleven.reduce((sum, player) => sum + fitnessQuotient(player), 0) / eleven.length;
  let bonus = 0;

  if (tactics.mentality === "Pressao alta") bonus += eleven.every((p) => p.stamina > 58) ? 4 : -4;
  if (tactics.mentality === "Contra-ataque") bonus += pace > 68 ? 4 : -2;
  if (tactics.attackStyle === "Posse curta") bonus += passing > 68 ? 4 : -2;
  if (tactics.attackStyle === "Explorar pontas") bonus += pace > 67 ? 3 : -2;
  if (tactics.defenseStyle === "Bloco baixo") bonus += defending > 66 ? 3 : -1;
  if (tactics.defenseStyle === "Pressao alta" && tactics.mentality === "Pressao alta") bonus += 2;
  if (condition < 78) bonus -= (78 - condition) * 0.16;

  return { total: avg + bonus, pace, passing, dribbling, defending, attacking, fit, condition, lineup: eleven, profile: tacticalProfile(tactics, eleven) };
}

function tacticalProfile(tactics, lineup) {
  const slots = lineup.map((player) => player.slot);
  const count = (list) => slots.filter((slot) => list.includes(slot)).length;
  const wideAttack = count(["RW", "LW", "RM", "LM"]);
  const wideCover = count(["RB", "LB", "RM", "LM"]);
  const centralMid = count(["DM", "CM", "AM"]);
  const centerDefense = count(["CB", "DM"]);
  const strikers = count(["ST"]);
  const defenders = count(["RB", "LB", "CB"]);
  const aerial = lineup.reduce((sum, player) => sum + (player.aerial || player.attacking || player.rating), 0) / lineup.length;
  return {
    shape: inferredShapeName(slots),
    defenders,
    wideAttack,
    wideCover,
    centralMid,
    centerDefense,
    strikers,
    aerial,
    mentality: tactics.mentality,
    attackStyle: tactics.attackStyle,
    defenseStyle: tactics.defenseStyle
  };
}

function tacticalMatchup(ownPower, ownTactics, oppPower, oppTactics) {
  const own = ownPower.profile;
  const opp = oppPower.profile;
  let bonus = 0;

  if (ownTactics.attackStyle === "Explorar pontas") {
    bonus += own.wideAttack >= 2 ? 1.4 : -1.2;
    bonus += opp.wideCover <= 2 ? 1.4 : -0.6;
  }
  if (ownTactics.attackStyle === "Ataques pelo centro") {
    bonus += own.centralMid >= opp.centralMid ? 1.5 : -1.2;
    bonus += opp.defenseStyle === "Compacto" || opp.centerDefense >= 4 ? -1.6 : 0.7;
  }
  if (ownTactics.attackStyle === "Cruzamentos") {
    bonus += own.strikers >= 2 || own.aerial > 67 ? 1.5 : -1;
    bonus += opp.centerDefense >= 4 ? -1.2 : 0.5;
  }
  if (ownTactics.attackStyle === "Posse curta") {
    bonus += ownPower.passing > oppPower.passing ? 1.2 : -0.8;
    bonus += oppTactics.defenseStyle === "Pressao alta" ? -1.2 : 0.4;
    bonus += oppTactics.defenseStyle === "Bloco baixo" ? 0.8 : 0;
  }
  if (ownTactics.attackStyle === "Jogo direto") {
    bonus += ownPower.pace > oppPower.pace ? 1 : -0.5;
    bonus += oppTactics.defenseStyle === "Pressao alta" ? 1.4 : 0;
    bonus += oppTactics.defenseStyle === "Bloco baixo" ? -0.8 : 0;
  }
  if (ownTactics.mentality === "Contra-ataque") {
    bonus += ["Ofensiva", "Pressao alta"].includes(oppTactics.mentality) || oppTactics.defenseStyle === "Pressao alta" ? 1.8 : 0;
    bonus += oppTactics.defenseStyle === "Bloco baixo" ? -1.2 : 0;
  }
  if (ownTactics.mentality === "Ofensiva") {
    bonus += oppTactics.defenseStyle === "Bloco baixo" ? -0.6 : 0.6;
    bonus += oppTactics.mentality === "Contra-ataque" ? -1.4 : 0;
  }
  if (ownTactics.defenseStyle === "Compacto" && oppTactics.attackStyle === "Ataques pelo centro") bonus += 1.3;
  if (ownTactics.defenseStyle === "Bloco baixo" && oppTactics.attackStyle === "Cruzamentos" && opp.strikers < 2) bonus += 0.8;
  if (ownTactics.defenseStyle === "Pressao alta" && oppTactics.attackStyle === "Posse curta") bonus += ownPower.pace + ownPower.defending > oppPower.passing + oppPower.dribbling ? 1.2 : -1.2;

  return clamp(bonus, -4, 4);
}

function nextOpponent() {
  return nextUserFixture()?.opponent || fixtureForRound(state.round).opponent;
}

function opponentForRound(round) {
  return fixtureForRound(round).opponent;
}

function leagueFixturesForRound(round, division = userDivision()) {
  const teams = [...clubsInDivision(division)];
  const total = teams.length;
  const firstHalfRound = ((round - 1) % (total - 1)) + 1;
  const secondHalf = round > total - 1;
  const fixed = teams[0];
  let rotating = teams.slice(1);
  for (let step = 1; step < firstHalfRound; step += 1) {
    rotating = [rotating[rotating.length - 1], ...rotating.slice(0, rotating.length - 1)];
  }
  const ordered = [fixed, ...rotating];
  const pairs = [];
  for (let index = 0; index < total / 2; index += 1) {
    let home = ordered[index];
    let away = ordered[total - 1 - index];
    if ((firstHalfRound + index) % 2 === 0) [home, away] = [away, home];
    if (secondHalf) [home, away] = [away, home];
    pairs.push({ type: "league", round, day: matchDayForRound(round), competition: divisionLabel(division), division, home, away });
  }
  return pairs;
}

function fixtureForRound(round, division = userDivision()) {
  const userClub = getUserClub();
  const fixture = leagueFixturesForRound(round, division).find((match) => match.home.id === userClub.id || match.away.id === userClub.id);
  const isHome = fixture.home.id === userClub.id;
  const opponent = isHome ? fixture.away : fixture.home;
  return {
    ...fixture,
    userHome: isHome,
    opponent
  };
}

function nextLeagueFixture() {
  if (state.round > state.maxRounds) return null;
  return fixtureForRound(state.round);
}

function nextCupFixture() {
  const fixture = state.cup?.currentUserMatch;
  if (!fixture || fixture.played) return null;
  const userClub = getUserClub();
  const isHome = fixture.home.id === userClub.id;
  return { ...fixture, type: "cup", userHome: isHome, opponent: isHome ? fixture.away : fixture.home };
}

function nextExtraFixture() {
  const userClub = getUserClub();
  const fixtures = (state.extraCompetitions || [])
    .flatMap((competition) => (competition.userFixtures || [])
      .filter((fixture) => !fixture.played)
      .map((fixture) => {
        const home = state.clubs.find((club) => club.id === fixture.homeId);
        const away = state.clubs.find((club) => club.id === fixture.awayId);
        const opponent = state.clubs.find((club) => club.id === fixture.opponentId);
        if (!home || !away || !opponent) return null;
        return {
          ...fixture,
          type: "extra",
          competitionId: competition.id,
          competition: competition.name,
          home,
          away,
          opponent,
          userHome: home.id === userClub.id
        };
      }))
    .filter(Boolean);
  return fixtures.sort((a, b) => a.day - b.day)[0] || null;
}

function nextUserFixture() {
  const fixtures = [nextLeagueFixture(), nextCupFixture(), nextExtraFixture()].filter(Boolean);
  return fixtures.sort((a, b) => a.day - b.day)[0] || null;
}

function isMatchDay() {
  const fixture = nextUserFixture();
  return Boolean(fixture && state.day >= fixture.day);
}

function daysUntilMatch() {
  const fixture = nextUserFixture();
  return fixture ? Math.max(0, fixture.day - state.day) : 0;
}

function matchDayForRound(round) {
  return leagueRoundDays()[round - 1] || 366;
}

function pairCupTeams(teamIds, roundIndex) {
  const teams = teamIds
    .map((id) => state.clubs.find((club) => club.id === id))
    .filter(Boolean)
    .sort((a, b) => {
      const seedA = b.reputation - a.reputation;
      return roundIndex <= 1 ? seedA : Math.random() - 0.5;
    });
  const pairs = [];
  for (let index = 0; index < teams.length / 2; index += 1) {
    const strong = teams[index];
    const weak = teams[teams.length - 1 - index];
    const home = roundIndex <= 1 && clubDivision(weak) >= clubDivision(strong) ? weak : (rng(1, 100) <= 50 ? strong : weak);
    const away = home.id === strong.id ? weak : strong;
    pairs.push({ home, away });
  }
  return pairs;
}

function cupRoundName(index = state.cup?.roundIndex || 0) {
  return ["Preliminar", "Fase de 32", "Oitavas", "Quartas", "Semifinal", "Final"][index] || "Copa Nacional";
}

function simulateCupMatch(home, away, roundIndex) {
  const homeTactics = aiTactics(home);
  const awayTactics = aiTactics(away);
  const homePower = teamStrength(home, homeTactics);
  const awayPower = teamStrength(away, awayTactics);
  let hg = goalsFromXg(expectedGoals(homePower, awayPower, stadiumHomeBonus(home), 0));
  let ag = goalsFromXg(expectedGoals(awayPower, homePower, -0.6, 0));
  if (hg === ag) {
    if (homePower.total + rng(-8, 8) >= awayPower.total + rng(-8, 8)) hg += 1;
    else ag += 1;
  }
  const winner = hg > ag ? home : away;
  const loser = winner.id === home.id ? away : home;
  winner.cup = { ...(winner.cup || {}), bestRound: Math.max(winner.cup?.bestRound || 0, roundIndex + 1), eliminated: false };
  loser.cup = { ...(loser.cup || {}), bestRound: Math.max(loser.cup?.bestRound || 0, roundIndex), eliminated: true };
  if (roundIndex >= 5) {
    state.cup.championId = winner.id;
    state.cup.runnerUpId = loser.id;
  }
  state.cup.history.unshift({ day: state.day, round: cupRoundName(roundIndex), homeName: home.name, awayName: away.name, homeGoals: hg, awayGoals: ag, winnerId: winner.id });
  return winner.id;
}

function prepareCupRoundIfDue() {
  const cup = state.cup;
  if (!cup || cup.finished || cup.currentUserMatch) return;
  const day = cupRoundDays[cup.roundIndex];
  if (!day || state.day < day) return;
  let teamIds = cup.roundIndex === 0 ? cup.roundTeamIds : cup.activeTeamIds;
  if (cup.roundIndex === 1 && cup.byeTeamIds?.length) teamIds = [...cup.byeTeamIds, ...cup.pendingWinners];
  teamIds = [...new Set(teamIds)].filter((id) => state.clubs.some((club) => club.id === id));
  cup.pendingWinners = [];
  const userClub = getUserClub();
  pairCupTeams(teamIds, cup.roundIndex).forEach(({ home, away }) => {
    const fixture = {
      type: "cup",
      competition: cup.name || "Copa Nacional",
      round: cupRoundName(cup.roundIndex),
      cupRoundIndex: cup.roundIndex,
      day,
      home,
      away
    };
    if ([home.id, away.id].includes(userClub.id)) {
      const isHome = home.id === userClub.id;
      cup.currentUserMatch = { ...fixture, userHome: isHome, opponent: isHome ? away : home };
      addInbox("Jogo de copa confirmado", `${userClub.name} enfrenta ${isHome ? away.name : home.name} pela ${fixture.round} da ${fixture.competition}. Mata-mata em jogo unico: empate vai para desempate.`, "jogo");
    } else {
      cup.pendingWinners.push(simulateCupMatch(home, away, cup.roundIndex));
    }
  });
  if (!cup.currentUserMatch) finishCupRound();
}

function finishCupRound() {
  const cup = state.cup;
  if (!cup || cup.finished) return;
  if (cup.pendingWinners.length === 1 && cup.roundIndex >= 5) {
    cup.finished = true;
    cup.championId = cup.pendingWinners[0];
    return;
  }
  cup.activeTeamIds = [...cup.pendingWinners];
  cup.roundIndex += 1;
  cup.currentUserMatch = null;
}

function updateDayAdvanceProgress() {
  const button = document.querySelector("#advanceDayBtn");
  if (button) button.textContent = `Parar (${dateShort(state.day)})`;
  const calendarMeta = document.querySelector("#calendarMeta");
  if (calendarMeta) calendarMeta.textContent = `${dateFull()} - avancando dias`;
  const message = document.querySelector("#dayAdvanceMessage");
  const fixture = nextUserFixture();
  if (message) {
    message.textContent = fixture
      ? `${dateFull()} - proximo jogo em ${Math.max(0, fixture.day - state.day)} dia(s).`
      : `${dateFull()} - temporada sem proximo jogo.`;
  }
}

function setDayAdvanceOverlay(active) {
  const overlay = document.querySelector("#dayAdvanceOverlay");
  if (!overlay) return;
  overlay.classList.toggle("hidden", !active);
  overlay.setAttribute("aria-hidden", active ? "false" : "true");
  if (active) updateDayAdvanceProgress();
}

function setMatchSimOverlay(active, message = "Preparando jogo...") {
  const overlay = document.querySelector("#matchSimOverlay");
  if (!overlay) return;
  const text = document.querySelector("#matchSimMessage");
  if (text) text.textContent = message;
  overlay.classList.toggle("hidden", !active);
  overlay.setAttribute("aria-hidden", active ? "false" : "true");
}

function uiPause(delay = 0) {
  return new Promise((resolve) => setTimeout(() => requestAnimationFrame(resolve), delay));
}

function advanceDay(options = {}) {
  const { renderAfter = true, saveAfter = true, autoAdvance = false } = options;
  if (!state || state.liveMatch || !nextUserFixture() || isMatchDay()) return false;
  const inboxCount = (state.inbox || []).length;
  const previousDay = state.day;
  state.day += 1;
  state.calendarMonth = currentMonthIndex();
  processTransferWindowEvents(previousDay);
  processPendingTransferArrivals();
  processInjuries();
  processRecovery();
  processTrainingInjuries();
  processLoans();
  processContracts();
  processYouthAcademies(previousDay);
  processScoutingJobs();
  prepareCupRoundIfDue();
  if (!autoAdvance || state.day % 7 === 0 || isTransferWindowOpen()) updateTransferLists();
  processDailyMarket(autoAdvance);
  processPendingProposals();
  processIncomingCounters();
  processOfferExpirations();
  if (isMatchDay()) pushNews(`Dia ${state.day}: dia de jogo contra ${nextOpponent().name}.`);
  if (saveAfter) saveState();
  if (renderAfter) safeRender("O dia avancou, mas a atualizacao da tela encontrou um erro.");
  return (state.inbox || []).length > inboxCount;
}

function startDayAdvance() {
  if (!state || dayAdvanceTimer || state.liveMatch || isMatchDay() || !nextUserFixture()) return;
  const button = document.querySelector("#advanceDayBtn");
  if (button) button.textContent = "Parar";
  setDayAdvanceOverlay(true);
  const tick = () => {
    if (!state || state.liveMatch || isMatchDay() || !nextUserFixture()) {
      stopDayAdvance(true);
      return;
    }
    const stoppedByInbox = advanceDay({ renderAfter: false, saveAfter: false, autoAdvance: true });
    updateDayAdvanceProgress();
    if (!state || state.liveMatch || isMatchDay() || !nextUserFixture() || stoppedByInbox) {
      stopDayAdvance(true);
      return;
    }
    dayAdvanceTimer = setTimeout(() => requestAnimationFrame(tick), 170);
  };
  dayAdvanceTimer = setTimeout(() => requestAnimationFrame(tick), 160);
}

function stopDayAdvance(renderAfter = true) {
  if (dayAdvanceTimer) clearTimeout(dayAdvanceTimer);
  dayAdvanceTimer = null;
  setDayAdvanceOverlay(false);
  const button = document.querySelector("#advanceDayBtn");
  if (button) button.textContent = "Avancar dias";
  if (state) saveState();
  if (renderAfter && state) safeRender("O avanco de dias terminou, mas a atualizacao da tela encontrou um erro.");
}

function toggleDayAdvance() {
  if (dayAdvanceTimer) stopDayAdvance();
  else startDayAdvance();
}

function processDailyMarket(autoAdvance = false) {
  const offerInterval = autoAdvance ? 5 : 3;
  if (state.day % offerInterval === 0 && state.offers.length < 5) {
    const newOffers = generateOffers();
    addIncomingOffers(newOffers);
  }
  if (state.day % (autoAdvance ? 10 : 7) === 0) simulateAiReleaseClauses();
  if (state.day % (autoAdvance ? 8 : 5) === 0 && rng(1, 100) <= 38) {
    simulateAiTransfers();
    state.market = generateMarket();
  }
}

function addIncomingOffers(newOffers) {
  if (!newOffers.length) return;
  const current = Array.isArray(state.offers) ? state.offers : [];
  const stampedOffers = newOffers.map((offer) => ({ ...offer, createdDay: offer.createdDay || state.day }));
  const seen = new Set();
  state.offers = [...stampedOffers, ...current]
    .filter((offer) => {
      const key = offer.id || `${offer.playerId}-${offer.buyerId}-${offer.type}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 12);
  const club = getUserClub();
  stampedOffers.forEach((offer) => {
    const player = playerById(club, offer.playerId);
    addInbox(
      "Proposta recebida",
      `${offer.buyerName} enviou uma proposta de ${offer.type === "loan" ? "emprestimo" : "transferencia"} de ${money(offer.fee)} por ${player?.name || "um jogador do seu elenco"}.`,
      "mercado",
      [{ label: "Ver proposta", action: "viewOffer", offerId: offer.id }]
    );
  });
}

function processOfferExpirations() {
  state.offers = state.offers || [];
  const expired = state.offers.filter((offer) => state.day - Number(offer.createdDay || offer.day || state.day) >= 15);
  if (!expired.length) return;
  const club = getUserClub();
  const names = expired
    .map((offer) => playerById(club, offer.playerId)?.name)
    .filter(Boolean);
  const expiredIds = new Set(expired.map((offer) => offer.id));
  state.offers = state.offers.filter((offer) => !expiredIds.has(offer.id));
  if (state.offerModal && expiredIds.has(state.offerModal.offerId)) state.offerModal = null;
  addInbox(
    "Propostas expiradas",
    `${expired.length} proposta${expired.length > 1 ? "s" : ""} ficou${expired.length > 1 ? "ram" : ""} sem resposta por 15 dias e saiu${expired.length > 1 ? "ram" : ""} da mesa${names.length ? `: ${names.slice(0, 4).join(", ")}${names.length > 4 ? "..." : ""}.` : "."}`,
    "mercado"
  );
}

function generateMarket() {
  const userClub = getUserClub();
  const listed = state.clubs
    .filter((club) => club.id !== userClub.id)
    .flatMap((club) => {
      const listPlayers = club.squad
        .filter((player) => !player.loan && !player.pendingTransfer && ["transfer", "loan"].includes(player.listStatus))
        .map((player) => marketCard(player, club));
      const preContracts = club.squad
        .filter((player) => !player.loan && !player.pendingTransfer && contractDaysLeft(player) <= contractWarningDays.halfYear && contractDaysLeft(player) > 0)
        .map((player) => ({ ...marketCard(player, club), listStatus: "precontract", askingPrice: 0 }));
      return [...listPlayers, ...preContracts];
    });
  const free = (state.freeAgents || []).map((player) => freeAgentCard(player));
  const seen = new Set();
  return [...listed, ...free]
    .filter((item) => {
      const key = `${item.playerId}-${item.listStatus}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => b.rating - a.rating);
}

function updateTransferLists(includeUser = false) {
  state.clubs.forEach((club) => {
    if (!includeUser && club.id === state.userClubId) return;
    const elevenIds = new Set(bestEleven(club, aiTactics(club)).map((player) => player.id));
    const eligibleSquad = club.squad.filter((player) => !player.loan);
    const byRating = [...eligibleSquad].sort((a, b) => b.rating - a.rating);
    const blockedLimit = club.reputation >= 82 ? 3 : club.reputation >= 70 ? 2 : 1;
    const protectedIds = new Set(byRating
      .filter((player, index) => {
        const eliteByClub = player.rating >= club.reputation + 7 || player.rating >= 82 || player.potential >= 90;
        const trueCore = index <= 1 && player.rating >= club.reputation + 3;
        return !isInjured(player) && !player.loan && player.happiness >= 55 && elevenIds.has(player.id) && (eliteByClub || trueCore);
      })
      .slice(0, blockedLimit)
      .map((player) => player.id));
    club.squad.forEach((player, index) => {
      if (club.id === state.userClubId) return;
      const depthIndex = byRating.findIndex((item) => item.id === player.id);
      const surplus = !elevenIds.has(player.id) && depthIndex > 13;
      const unhappy = player.happiness < 42;
      const blockedYouth = player.age <= 22 && depthIndex > 10 && player.potential - player.rating >= 7;
      const expensiveReserve = player.wage > club.budget * 0.018 && depthIndex > 11;
      if (isInjured(player) || player.loan || player.pendingTransfer) return;
      if (player.listStatusLocked) {
        player.listStatus = normalizeListStatus(player.listStatus);
        return;
      }
      if (protectedIds.has(player.id)) player.listStatus = "blocked";
      else if (player.listStatus === "blocked") player.listStatus = "none";
      else if (blockedYouth) player.listStatus = "loan";
      else if (surplus || unhappy || expensiveReserve || index > 18) player.listStatus = rng(1, 100) <= 75 ? "transfer" : "loan";
      else if (player.listStatus && player.listStatus !== "blocked" && rng(1, 100) <= 12) player.listStatus = "none";
      else player.listStatus = player.listStatus || "none";
    });
  });
}

function injuryProfile(context = "treino") {
  const profiles = context === "jogo"
    ? [
      ["desconforto muscular", 5, 12, 45],
      ["entorse leve", 10, 21, 28],
      ["lesao muscular", 21, 45, 18],
      ["lesao ligamentar", 60, 140, 6],
      ["fratura", 75, 170, 3]
    ]
    : [
      ["carga muscular", 4, 10, 50],
      ["dor no joelho", 8, 18, 24],
      ["estiramento", 18, 35, 18],
      ["entorse no tornozelo", 21, 50, 8]
    ];
  const roll = rng(1, 100);
  let acc = 0;
  return profiles.find(([, , , weight]) => {
    acc += weight;
    return roll <= acc;
  }) || profiles[0];
}

function injurePlayer(player, club, context = "treino") {
  if (!player || isInjured(player)) return false;
  const [type, minDays, maxDays] = injuryProfile(context);
  const days = rng(minDays, maxDays);
  player.injury = { type, daysLeft: days, totalDays: days, context };
  player.form = clamp(player.form - rng(4, 12), 20, 95);
  if (club.id === state.userClubId) addInbox("Lesao confirmada", `Seu departamento medico: ${player.name} sofreu ${type} em ${context} e deve ficar fora por ${days} dias.`, "lesao");
  if (club.id === state.userClubId || player.rating >= 78) pushNews(`${player.name} sofreu ${type} e ficara fora por ${days} dias.`);
  return true;
}

function processInjuries() {
  state.clubs.forEach((club) => {
    club.squad.forEach((player) => {
      if (!isInjured(player)) return;
      player.injury.daysLeft -= 1;
      if (player.injury.daysLeft <= 0) {
        const type = player.injury.type;
        player.injury = null;
        player.form = clamp(player.form - 2, 20, 95);
        if (club.id === state.userClubId) addInbox("Jogador recuperado", `${player.name} voltou aos treinos apos se recuperar de ${type}.`, "lesao");
      } else if (club.id === state.userClubId && player.injury.daysLeft <= 3 && !player.injury.returnNoticeSent) {
        player.injury.returnNoticeSent = true;
        addInbox("Retorno proximo", `${player.name} deve voltar em ${player.injury.daysLeft} dia${player.injury.daysLeft === 1 ? "" : "s"}. O departamento medico recomenda reintegracao gradual.`, "lesao");
      }
    });
  });
}

function makeFreeAgent(player, club, reason = "fim de contrato") {
  club.squad = club.squad.filter((item) => item.id !== player.id);
  const free = {
    ...player,
    loan: null,
    listStatus: "free",
    releaseClause: null,
    preContract: null,
    contractEndDay: 0,
    contractWarnings: {}
  };
  state.freeAgents = state.freeAgents || [];
  state.freeAgents.push(free);
  if (club.id === state.userClubId) {
    state.lineupIds = state.lineupIds.filter((id) => id !== player.id);
    addInbox("Jogador sem contrato", `${player.name} deixou o clube por ${reason} e agora esta livre no mercado.`, "contrato");
  }
  return free;
}

function processContracts() {
  state.freeAgents = state.freeAgents || [];
  state.clubs.forEach((club) => {
    [...club.squad].forEach((player) => {
      if (player.loan || !Number.isFinite(player.contractEndDay)) return;
      const days = contractDaysLeft(player);
      if (club.id === state.userClubId) {
        if (player.clauseThreat && player.clauseThreat.expiresDay <= state.day) {
          const threat = player.clauseThreat;
          const buyer = state.clubs.find((item) => item.id === threat.buyerId);
          if (buyer) {
            const fee = Number(threat.fee || player.releaseClause || player.value);
            player.clauseThreat = null;
            const result = transferPlayer(player, club, buyer, fee, "Clausula");
            if (!result?.pendingTransfer) state.lineupIds = state.lineupIds.filter((id) => id !== player.id);
            addInbox(
              result?.pendingTransfer ? "Clausula concluida" : "Saida por clausula",
              result?.pendingTransfer
                ? `O prazo de 7 dias terminou sem renovacao. ${player.name} tem saida acertada para ${buyer.name} e deixa o clube em ${dateShort(result.arrivalDay)}.`
                : `O prazo de 7 dias terminou sem renovacao. ${player.name} saiu para ${buyer.name} pela clausula de ${money(fee)}.`,
              "mercado"
            );
            return;
          }
          player.clauseThreat = null;
        }
        if (days <= contractWarningDays.year && days > contractWarningDays.halfYear && !player.contractWarnings?.year) {
          player.contractWarnings = { ...(player.contractWarnings || {}), year: true };
          addInbox("Contrato perto do fim", `${player.name} tem cerca de 1 ano de contrato. Voce ja pode discutir uma renovacao antes que a situacao aperte.`, "contrato", [{ label: "Renovar", action: "renewContract", playerId: player.id }]);
        }
        if (days <= contractWarningDays.halfYear && days > 0 && !player.contractWarnings?.halfYear) {
          player.contractWarnings = { ...(player.contractWarnings || {}), halfYear: true };
          addInbox("Risco de pre-contrato", `${player.name} entrou nos ultimos 6 meses de contrato. Outros clubes podem tentar um pre-contrato se ele nao renovar.`, "contrato", [{ label: "Renovar", action: "renewContract", playerId: player.id }]);
        }
        if (days <= contractWarningDays.halfYear && days > 0 && !player.preContractThreat && !player.preContract && rng(1, 100) <= 3) {
          const interested = state.clubs
            .filter((item) => item.id !== club.id && item.reputation >= player.rating - 8)
            .sort((a, b) => b.reputation - a.reputation)[0];
          if (interested) {
            player.preContractThreat = { clubId: interested.id, clubName: interested.name, expiresDay: state.day + 5, contractYears: rng(2, 5), wage: +(player.wage * 1.12).toFixed(2) };
            addInbox("Proposta de pre-contrato", `${interested.name} sondou ${player.name} para assinar um pre-contrato. Voce pode tentar renovar antes que ele decida.`, "contrato", [{ label: "Tentar renovar", action: "renewContract", playerId: player.id }]);
          }
        }
        if (player.preContractThreat && player.preContractThreat.expiresDay <= state.day) {
          const interested = state.clubs.find((item) => item.id === player.preContractThreat.clubId);
          const acceptChance = clamp(38 + ((interested?.reputation || 65) - club.reputation) * 2 + player.ambition * 0.28 - (player.happiness - 55) * 0.45, 10, 82);
          if (interested && rng(1, 100) <= acceptChance) {
            player.preContract = { toId: interested.id, toName: interested.name, wage: player.preContractThreat.wage, contractYears: player.preContractThreat.contractYears, startDay: player.contractEndDay };
            addInbox("Pre-contrato perdido", `${player.name} aceitou um pre-contrato com ${interested.name} e saira ao fim do contrato atual.`, "contrato");
          } else {
            addInbox("Pre-contrato recusado", `${player.name} recusou a proposta externa e segue aberto a renovar.`, "contrato", [{ label: "Renovar", action: "renewContract", playerId: player.id }]);
          }
          player.preContractThreat = null;
        }
      } else if (days <= contractWarningDays.halfYear && days > 0 && !player.preContract && rng(1, 100) <= 2) {
        const interested = state.clubs
          .filter((item) => item.id !== club.id && item.budget > player.wage * 8 && item.reputation >= club.reputation - 6)
          .sort((a, b) => b.reputation - a.reputation)[0];
        if (interested) {
          const stayChance = clamp(45 + (club.reputation - interested.reputation) * 2 + (player.happiness - 60) * 0.4, 12, 78);
          if (rng(1, 100) > stayChance) {
            player.preContract = { toId: interested.id, toName: interested.name, wage: +(player.wage * 1.08).toFixed(2), contractYears: rng(2, 5), startDay: player.contractEndDay };
          } else {
            player.contractEndDay = state.day + 365 * rng(2, 4);
            player.happiness = clamp(player.happiness + 4, 25, 95);
          }
        }
      }

      if (days > 0) return;
      if (player.preContract) {
        const destination = state.clubs.find((item) => item.id === player.preContract.toId);
        if (destination) {
          club.squad = club.squad.filter((item) => item.id !== player.id);
          const moved = { ...player, preContract: null, listStatus: "none", contractEndDay: state.day + 365 * Number(player.preContract.contractYears || 3), wage: player.preContract.wage || player.wage };
          destination.squad.push(moved);
          recordTransfer(moved, club, destination, 0, "Pre-contrato");
          if (destination.id === state.userClubId) addInbox("Pre-contrato concluido", `${moved.name} chegou sem custo apos o fim do contrato com ${club.name}.`, "contrato");
        }
        return;
      }

      if (club.id !== state.userClubId) {
        const renewChance = clamp(58 + (club.reputation - player.rating) * 1.2 + (player.happiness - 60) * 0.35, 18, 86);
        if (rng(1, 100) <= renewChance) {
          player.contractEndDay = state.day + 365 * rng(2, 5);
          player.contractWarnings = {};
          player.wage = +(player.wage * (1 + rng(2, 10) / 100)).toFixed(2);
          return;
        }
      }
      makeFreeAgent(player, club);
    });
  });
  state.market = generateMarket();
}

function processRecovery() {
  state.clubs.forEach((club) => {
    club.squad.forEach((player) => {
      const restDays = Math.max(0, state.day - (player.lastPlayedDay || -20));
      const agePenalty = player.age > 31 ? 1.1 : player.age < 22 ? -0.4 : 0;
      const loadPenalty = clamp((player.matchLoad || 0) / 22, 0, 3.2);
      const recovery = clamp(6.2 + (player.stamina - 62) / 18 + restDays * 0.28 - agePenalty - loadPenalty, 2.8, 9.5);
      player.condition = clamp(+(Number(player.condition || 90) + recovery).toFixed(1), 35, 100);
      player.matchLoad = clamp(+((player.matchLoad || 0) * 0.72).toFixed(1), 0, 100);
    });
  });
}

function injuryRisk(player, context = "treino", minutes = 0) {
  const condition = fitnessQuotient(player);
  const load = Number(player.matchLoad || 0);
  const age = player.age > 32 ? 0.35 : player.age > 29 ? 0.15 : player.age < 20 ? 0.08 : 0;
  const fitness = player.stamina < 55 ? 0.25 : player.stamina > 75 ? -0.08 : 0;
  const fatigue = condition < 62 ? 0.65 : condition < 75 ? 0.28 : condition < 86 ? 0.1 : -0.05;
  const loadRisk = load > 72 ? 0.5 : load > 52 ? 0.25 : load > 35 ? 0.1 : 0;
  const base = context === "jogo" ? 0.18 + minutes * 0.004 : 0.018;
  return clamp(base + age + fitness + fatigue + loadRisk, 0.01, context === "jogo" ? 1.55 : 0.55);
}

function processTrainingInjuries() {
  state.clubs.forEach((club) => {
    club.squad.forEach((player) => {
      if (isInjured(player)) return;
      const chance = injuryRisk(player, "treino");
      if (Math.random() * 100 < chance) injurePlayer(player, club, "treino");
    });
  });
}

function processLoans() {
  state.loans = state.loans || [];
  const finished = state.loans.filter((loan) => loan.endDay <= state.day);
  finished.forEach((loan) => {
    const from = state.clubs.find((club) => club.id === loan.fromId);
    const to = state.clubs.find((club) => club.id === loan.toId);
    if (!from || !to) return;
    const player = playerById(to, loan.playerId);
    if (!player) return;
    to.squad = to.squad.filter((item) => item.id !== player.id);
    from.squad.push({ ...player, loan: null, transferBonuses: [], listStatus: "none" });
    if (to.id === state.userClubId) state.lineupIds = state.lineupIds.filter((id) => id !== player.id);
    if (from.id === state.userClubId || to.id === state.userClubId) addInbox("Emprestimo encerrado", `${player.name} retornou ao ${from.name}.`, "mercado");
  });
  state.loans = state.loans.filter((loan) => loan.endDay > state.day);
}

function loanReturnFee(loan, player, mode = "return") {
  const monthsLeft = Math.max(1, Math.ceil((loan.endDay - state.day) / 28));
  const rate = mode === "recall" ? 0.018 : 0.012;
  return +clamp((player.value || 1) * rate * monthsLeft, 0.05, 6).toFixed(2);
}

function endLoanEarly(loanId, mode = "return") {
  const loan = (state.loans || []).find((item) => (item.id || item.playerId) === loanId);
  if (!loan) return;
  const from = state.clubs.find((club) => club.id === loan.fromId);
  const to = state.clubs.find((club) => club.id === loan.toId);
  const player = to ? playerById(to, loan.playerId) : null;
  if (!from || !to || !player) return;
  const userClub = getUserClub();
  if (mode === "return" && to.id !== userClub.id) return;
  if (mode === "recall" && from.id !== userClub.id) return;
  const fee = loanReturnFee(loan, player, mode);
  if (userClub.budget < fee) {
    pushNews(`Orcamento insuficiente para encerrar o emprestimo de ${player.name}.`);
    renderNews();
    return;
  }
  userClub.budget = +(userClub.budget - fee).toFixed(1);
  const compensated = mode === "recall" ? to : from;
  compensated.budget = +(compensated.budget + fee).toFixed(1);
  to.squad = to.squad.filter((item) => item.id !== player.id);
  from.squad.push({ ...player, loan: null, transferBonuses: [], listStatus: "none" });
  if (to.id === state.userClubId) state.lineupIds = state.lineupIds.filter((id) => id !== player.id);
  state.loans = state.loans.filter((item) => (item.id || item.playerId) !== loanId);
  state.market = generateMarket();
  addInbox(mode === "recall" ? "Emprestimo encerrado pela sua diretoria" : "Jogador devolvido", `${player.name} voltou ao ${from.name}. Taxa paga: ${money(fee)}.`, "mercado");
  saveState();
  render();
}

function marketCard(player, club) {
  const userClub = getUserClub();
  const starter = bestEleven(club).some((item) => item.id === player.id);
  const liveValue = calculatePlayerValue(player, club.reputation);
  const listed = player.listStatus === "loan" ? 0.12 : player.listStatus === "transfer" ? 0.98 : player.listStatus === "blocked" ? 2.2 : 1.35;
  const priceMultiplier = player.listStatus === "loan" ? listed : starter ? Math.max(1.45, listed) : player.happiness < 50 ? 0.88 : listed;
  return {
    playerId: player.id,
    clubId: club.id,
    name: player.name,
    sourceClub: club.name,
    position: player.position,
    secondaryPosition: player.secondaryPosition || null,
    tertiaryPosition: player.tertiaryPosition || null,
    hiddenPositions: player.hiddenPositions || [],
    age: player.age,
    nationality: player.nationality || "BR",
    rating: player.rating,
    potential: player.potential,
    pace: player.pace,
    passing: player.passing,
    dribbling: player.dribbling,
    finishing: player.finishing,
    tackling: player.tackling,
    vision: player.vision,
    reflexes: player.reflexes,
    handling: player.handling,
    positioningGk: player.positioningGk,
    oneOnOne: player.oneOnOne,
    distribution: player.distribution,
    aerial: player.aerial,
    value: liveValue,
    releaseClause: player.releaseClause || null,
    askingPrice: +(liveValue * priceMultiplier + rng(1, 7)).toFixed(1),
    wants: player.wants,
    ambition: player.ambition,
    happiness: player.happiness,
    listStatus: player.listStatus || "none",
    contractEndDay: player.contractEndDay || 0,
    difficulty: transferDifficulty(player, club, userClub)
  };
}

function freeAgentCard(player) {
  return {
    playerId: player.id,
    clubId: "free-agent",
    name: player.name,
    sourceClub: "Sem contrato",
    position: player.position,
    secondaryPosition: player.secondaryPosition || null,
    tertiaryPosition: player.tertiaryPosition || null,
    hiddenPositions: player.hiddenPositions || [],
    age: player.age,
    nationality: player.nationality || "BR",
    rating: player.rating,
    potential: player.potential,
    pace: player.pace,
    passing: player.passing,
    dribbling: player.dribbling,
    finishing: player.finishing,
    tackling: player.tackling,
    vision: player.vision,
    reflexes: player.reflexes,
    handling: player.handling,
    positioningGk: player.positioningGk,
    oneOnOne: player.oneOnOne,
    distribution: player.distribution,
    aerial: player.aerial,
    value: calculatePlayerValue(player, 55),
    listStatus: "free",
    askingPrice: 0,
    wants: player.wants,
    ambition: player.ambition,
    happiness: player.happiness,
    releaseClause: null,
    contractEndDay: 0,
    difficulty: clamp(Math.round(38 + (player.ambition - 60) * 0.45 - (getUserClub().reputation - 65) * 0.35), 8, 82)
  };
}

function transferDifficulty(player, seller, buyer) {
  if (player.listStatus === "blocked") return 100;
  let score = 45;
  score += Math.max(0, seller.reputation - buyer.reputation) * 1.1;
  score += Math.max(0, player.ambition - buyer.reputation) * 0.8;
  score += player.happiness > 70 ? 12 : player.happiness < 45 ? -10 : 0;
  score += bestEleven(seller).some((item) => item.id === player.id) ? 14 : -4;
  if (player.listStatus === "transfer") score -= 18;
  if (player.listStatus === "loan") score -= 10;
  score += player.age < 23 && player.potential - player.rating > 8 ? 12 : 0;
  if (player.wants === "titulos" && buyer.reputation < 76) score += 12;
  if (player.wants === "minutos" && guaranteedRole(player, buyer) === "Titular") score -= 10;
  if (player.wants === "desenvolvimento" && buyer.reputation > seller.reputation) score -= 8;
  return clamp(Math.round(score), 15, 95);
}

function guaranteedRole(player, club) {
  const samePosition = club.squad.filter((item) => positionFit(item, player.position) >= 0.7);
  const rank = samePosition.filter((item) => item.rating > player.rating).length + 1;
  if (rank <= 1) return "Titular";
  if (rank <= 3) return "Rotacao";
  return "Reserva";
}

function negotiate(playerId) {
  const target = state.market.find((item) => item.playerId === playerId);
  if (!target) return;
  const buyer = getUserClub();
  const seller = state.clubs.find((club) => club.id === target.clubId);
  const player = playerById(seller, playerId);
  const input = document.querySelector(`[data-offer-value="${playerId}"]`);
  const offer = input ? Number(input.value) : target.askingPrice;
  if (!player || Number.isNaN(offer) || offer <= 0) return;
  if (offer > buyer.budget) {
    pushNews(`A proposta por ${target.name} passou do orcamento disponivel.`);
    render();
    return;
  }

  const role = guaranteedRole(player, buyer);
  const feeScore = (offer / target.askingPrice) * 46;
  const clubScore = buyer.reputation - target.difficulty + rng(-8, 8);
  const roleScore = role === "Titular" ? 14 : role === "Rotacao" ? 6 : -8;
  const wageScore = buyer.budget > offer + player.wage * 4 ? 6 : -5;
  const chance = clamp(Math.round(feeScore + clubScore + roleScore + wageScore), 5, 92);

  if (rng(1, 100) <= chance) {
    const result = transferPlayer(player, seller, buyer, offer, "Usuario");
    state.market = generateMarket();
    state.offers = state.offers.filter((offerItem) => offerItem.playerId !== player.id);
    pushNews(result?.pendingTransfer
      ? `${buyer.name} acertou ${player.name} por ${money(offer)}. Ele chega em ${dateShort(result.arrivalDay)}.`
      : `${buyer.name} contratou ${player.name} por ${money(offer)}. Papel prometido: ${role}.`);
  } else {
    const reason = transferReason(target, role, offer);
    pushNews(`${player.name} nao fechou. ${reason}`);
  }
  saveState();
  render();
}

function transferReason(target, role, offer) {
  if (offer < target.askingPrice * 0.92) return "O clube vendedor achou a proposta baixa.";
  if (target.wants === "titulos") return "O jogador quer um projeto mais forte esportivamente.";
  if (target.wants === "minutos" && role !== "Titular") return "Ele quer garantia maior de minutos.";
  if (target.happiness > 72) return "Ele esta feliz no clube atual.";
  return "As condicoes pessoais ainda nao convenceram.";
}

function openNegotiation(playerId, phase = "transfer", proposalId = "") {
  const target = state.market.find((item) => item.playerId === playerId) || findMarketCard(playerId);
  const proposal = proposalId ? state.pendingProposals.find((item) => item.id === proposalId) : null;
  if (!target && !proposal) return;
  if (target?.listStatus === "blocked") {
    pushNews(`${target.sourceClub} considera ${target.name} intocavel e nao abre negociacao.`);
    renderNews();
    return;
  }
  const source = proposal?.counterTerms || proposal || target;
  const type = phase === "loan"
    ? "loan"
    : proposal?.type || (target?.listStatus === "free" ? "free" : target?.listStatus === "precontract" ? "precontract" : "transfer");
  state.negotiation = {
    playerId,
    proposalId,
    phase: phase === "contract" ? "contract" : "club",
    type,
    fee: source.fee ?? target?.askingPrice ?? 0,
    loanFee: source.loanFee ?? Math.max(0.2, (target?.value || 5) * 0.08),
    wageShare: source.wageShare ?? 50,
    loanDuration: source.loanDuration ?? 168,
    buyOption: source.buyOption ?? 0,
    sellOn: source.sellOn ?? 10,
    bonusApps: source.bonusApps ?? 0,
    bonusAppsFee: source.bonusAppsFee ?? 0,
    bonusGoals: source.bonusGoals ?? 0,
    bonusGoalsFee: source.bonusGoalsFee ?? 0,
    bonusAssists: source.bonusAssists ?? 0,
    bonusAssistsFee: source.bonusAssistsFee ?? 0,
    releaseClause: source.releaseClause ?? (target?.releaseClause || Math.round((target?.value || source.fee || 10) * 2)),
    wage: source.wage ?? target?.wage ?? 0,
    contractYears: source.contractYears ?? (target?.listStatus === "precontract" ? 3 : 4),
    role: source.role || "Rotacao",
    feedback: proposal?.counterTerms ? "O clube vendedor ja indicou estes termos como ponto de partida para reabrir a conversa." : ""
  };
  renderNegotiationModal();
}

function findMarketCard(playerId) {
  const club = state.clubs.find((item) => item.id !== state.userClubId && item.squad.some((player) => player.id === playerId));
  const player = club ? playerById(club, playerId) : null;
  if (player && !player.pendingTransfer) return marketCard(player, club);
  const freeAgent = (state.freeAgents || []).find((item) => item.id === playerId);
  return freeAgent ? freeAgentCard(freeAgent) : null;
}

function openRenewal(playerId) {
  const club = getUserClub();
  const player = playerById(club, playerId);
  if (!player || player.loan) return;
  if (player.pendingTransfer) {
    showAlertModal("Transferencia ja fechada", `${player.name} ja tem uma transferencia acordada. Ele segue disponivel ate a abertura da janela, mas a diretoria nao pode reabrir contrato agora.`);
    return;
  }
  const underClauseThreat = Boolean(player.clauseThreat);
  const proposal = {
    id: makeId(),
    type: "renewal",
    playerId,
    playerName: player.name,
    sellerId: club.id,
    sellerName: club.name,
    buyerId: club.id,
    wage: +(player.wage * (underClauseThreat ? 1.22 : 1.08)).toFixed(2),
    role: guaranteedRole(player, club),
    releaseClause: underClauseThreat ? +(Number(player.clauseThreat.fee || player.releaseClause || player.value) * 1.55).toFixed(2) : player.releaseClause || realisticReleaseClause(player, club.reputation),
    contractYears: underClauseThreat ? 4 : Math.min(5, Math.max(2, Math.round(contractDaysLeft(player) / 365) + 2)),
    status: "contract"
  };
  state.pendingProposals.push(proposal);
  openNegotiation(playerId, "contract", proposal.id);
}

function openContractOnly(playerId) {
  const target = state.market.find((item) => item.playerId === playerId) || findMarketCard(playerId);
  const player = findPlayerById(playerId);
  if (!target || !player) return;
  const proposal = {
    id: makeId(),
    type: target.listStatus === "free" ? "free" : "precontract",
    playerId,
    playerName: player.name,
    sellerId: target.clubId === "free-agent" ? null : target.clubId,
    sellerName: target.sourceClub,
    buyerId: state.userClubId,
    fee: 0,
    wage: +(player.wage * (target.listStatus === "free" ? 1.04 : 1.1)).toFixed(2),
    role: guaranteedRole(player, getUserClub()),
    releaseClause: realisticReleaseClause(player, getUserClub().reputation),
    contractYears: target.listStatus === "free" ? 2 : 4,
    status: "contract"
  };
  state.pendingProposals.push(proposal);
  openNegotiation(playerId, "contract", proposal.id);
}

function closeNegotiation() {
  state.negotiation = null;
  saveState();
  renderNegotiationModal();
}

function showAlertModal(title, body) {
  state.alertModal = { title, body };
  saveState();
  renderAlertModal();
}

function closeAlertModal() {
  if (!state) return;
  state.alertModal = null;
  saveState();
  renderAlertModal();
}

function bonusClausesFrom(negotiation) {
  return [
    { metric: "apps", label: "jogos como titular", threshold: Number(negotiation.bonusApps || 0), fee: Number(negotiation.bonusAppsFee || 0), paid: false },
    { metric: "goals", label: "gols", threshold: Number(negotiation.bonusGoals || 0), fee: Number(negotiation.bonusGoalsFee || 0), paid: false },
    { metric: "assists", label: "assistencias", threshold: Number(negotiation.bonusAssists || 0), fee: Number(negotiation.bonusAssistsFee || 0), paid: false }
  ].filter((clause) => clause.threshold > 0 && clause.fee > 0);
}

function bonusPotential(negotiation) {
  return bonusClausesFrom(negotiation).reduce((sum, clause) => sum + clause.fee, 0);
}

function playerImportance(player, seller) {
  const starter = bestEleven(seller).some((item) => item.id === player.id);
  const rank = [...seller.squad].sort((a, b) => b.rating - a.rating).findIndex((item) => item.id === player.id) + 1;
  return (starter ? 0.22 : 0) + (rank <= 3 ? 0.18 : rank <= 8 ? 0.08 : 0);
}

function askingBaseline(target, seller, player) {
  return target.askingPrice * (1 + playerImportance(player, seller));
}

function negotiationScore(negotiation, target, seller, player) {
  const buyer = getUserClub();
  const baseline = askingBaseline(target, seller, player);
  const bonusValue = bonusPotential(negotiation) * 0.35;
  const reputationPull = clamp((buyer.reputation - seller.reputation) * 0.22, -8, 8);

  if (negotiation.type === "loan") {
    const importantStarter = player.rating >= seller.reputation + 4 && bestEleven(seller).some((item) => item.id === player.id);
    const wageShare = Number(negotiation.wageShare || 0);
    const durationMonths = Math.round(Number(negotiation.loanDuration || 168) / 28);
    const loanValue = Number(negotiation.loanFee || 0) + player.value * (wageShare / 100) * 0.22 + Number(negotiation.buyOption || 0) * 0.08;
    const expected = Math.max(0.8, player.value * (0.16 + playerImportance(player, seller)));
    const ratio = loanValue / expected;
    const durationScore = durationMonths >= 12 ? (player.age <= 22 ? 9 : 3) : durationMonths >= 6 ? 6 : 2;
    const importancePenalty = importantStarter && player.listStatus !== "loan" ? 30 : importantStarter ? 14 : 0;
    if (ratio < 0.35 && wageShare < 50) return clamp(Math.round(ratio * 34 + wageShare * 0.12), 1, 20);
    return clamp(Math.round(14 + ratio * 56 + wageShare * 0.08 + durationScore + reputationPull - importancePenalty + rng(-4, 4)), 1, 92);
  }

  const guaranteed = Number(negotiation.fee || 0);
  const totalValue = guaranteed + bonusValue + Number(negotiation.sellOn || 0) * player.value * 0.025;
  const ratio = totalValue / Math.max(1, baseline);
  if (guaranteed < player.value * 0.35 || ratio < 0.45) return clamp(Math.round(ratio * 28), 1, 22);
  if (ratio < 0.65) return clamp(Math.round(8 + ratio * 28 - playerImportance(player, seller) * 20), 12, 34);
  if (guaranteed > buyer.budget) return 1;
  return clamp(Math.round(8 + ratio * 58 + reputationPull - playerImportance(player, seller) * 35 + rng(-5, 5)), 1, 96);
}

function advisorText(score, negotiation) {
  if (score >= 78) return "O negociador considera a proposta forte e coerente com o mercado. Ainda assim, o clube pode pedir ajuste se o jogador for essencial.";
  if (score >= 58) return "O negociador considera a proposta negociavel. O clube deve analisar, mas pode pedir mais garantido.";
  if (score >= 38) return "O negociador ve risco. Os termos dependem demais de bonus ou estao abaixo do peso do jogador no elenco.";
  if (score <= 12) return "O negociador recusaria antes de enviar: os valores estao fora da realidade para esse jogador.";
  return negotiation.type === "loan"
    ? "O emprestimo esta fraco. Tente taxa maior, maior porcentagem de salario ou opcao de compra realista."
    : "A proposta esta baixa. O clube vendedor provavelmente nem abre conversa nesses termos.";
}

function counterProposalText(proposal) {
  if (proposal.type === "loan") return `${proposal.sellerName} quer taxa maior, pelo menos 60% do salario pago e opcao de compra mais proxima do valor de mercado.`;
  return `${proposal.sellerName} quer mais valor fixo. Bonus e venda futura ajudam, mas nao substituem uma base garantida.`;
}

function contractScore(negotiation, proposal, player) {
  if (!player) return 10;
  const roleScore = negotiation.role === "Titular" ? 18 : negotiation.role === "Rotacao" ? 8 : -12;
  const clauseBuyer = player.clauseThreat ? state.clubs.find((club) => club.id === player.clauseThreat.buyerId) : null;
  const clausePressure = proposal.type === "renewal" && clauseBuyer
    ? clamp((clauseBuyer.reputation - getUserClub().reputation) * 1.8 + (player.ambition - 60) * 0.28 - (player.happiness - 55) * 0.25, -8, 28)
    : 0;
  const expectedWage = player.wage * (proposal.type === "loan" ? 0.95 : proposal.type === "renewal" && clauseBuyer ? 1.28 : 1.12) * (player.ambition > 75 ? 1.12 : 1);
  const wageRatio = Number(negotiation.wage || 0) / Math.max(0.1, expectedWage);
  const wageScore = wageRatio < 0.55 ? -35 : wageRatio < 0.8 ? -12 : wageRatio < 1 ? 8 : wageRatio < 1.35 ? 28 : 35;
  const clubPull = clamp((getUserClub().reputation - 65) * 0.45, -12, 16);
  const clauseScore = proposal.type === "loan" ? 4 : negotiation.releaseClause && negotiation.releaseClause < player.value * 1.2 ? -12 : 4;
  const years = Number(negotiation.contractYears || 3);
  const careerFit = player.age <= 22
    ? (years >= 4 ? 8 : years === 1 ? -16 : 1)
    : player.age >= 31
      ? (years <= 2 ? 7 : years >= 5 ? -14 : 0)
      : (years >= 2 && years <= 4 ? 6 : years === 1 ? -8 : -2);
  const freePull = ["free", "precontract", "renewal"].includes(proposal.type) ? 4 : 0;
  return clamp(Math.round(28 + wageScore + roleScore + clubPull + clauseScore + careerFit + freePull - clausePressure + rng(-5, 5)), 1, 96);
}

function agentText(score) {
  if (score >= 78) return "O empresario considera o contrato forte. Salario e papel estao alinhados com o status do jogador.";
  if (score >= 58) return "O empresario acha a proposta aceitavel, mas pode pedir ajuste fino no salario ou no papel.";
  if (score >= 36) return "O empresario ve a proposta como arriscada. O jogador pode questionar salario, minutos prometidos ou clausula.";
  return "O empresario recusaria antes de enviar: os termos nao respeitam o mercado do jogador.";
}

function bonusControl(selectId, inputId, selectedThreshold, selectedFee) {
  return `
    <div class="bonus-control">
      <select id="${selectId}">${statOptions(selectedThreshold)}</select>
      <input id="${inputId}" class="money-input" list="moneyOptions" type="text" value="${compactMoney(selectedFee)}" placeholder="Valor do bonus" />
    </div>
  `;
}

function releaseClauseButton(playerId, clause, small = false) {
  if (!clause) return "";
  const affordable = getUserClub().budget >= Number(clause);
  const sizeClass = small ? " small-action" : "";
  const buttonClass = affordable ? `buy-button${sizeClass}` : `secondary-action${sizeClass}`;
  return `<button class="${buttonClass}" ${affordable ? `data-pay-clause="${playerId}"` : "disabled"}>Pagar clausula</button>`;
}

function counterTermsForProposal(proposal) {
  if (proposal.type === "loan") {
    return {
      ...proposal,
      loanFee: +(Number(proposal.loanFee || 0) * 1.35 + 0.2).toFixed(2),
      wageShare: Math.max(60, Number(proposal.wageShare || 0)),
      buyOption: Math.max(Number(proposal.buyOption || 0), +(Number(proposal.fee || 0) || 0).toFixed(2))
    };
  }
  return {
    ...proposal,
    fee: +(Number(proposal.fee || 0) * 1.25 + 0.5).toFixed(2),
    sellOn: Math.max(Number(proposal.sellOn || 0), 12)
  };
}

function evaluateNegotiation() {
  const negotiation = readNegotiationForm();
  if (negotiation.phase === "contract") {
    const proposal = state.pendingProposals.find((item) => item.id === negotiation.proposalId);
    const player = findPlayerById(negotiation.playerId);
    const score = contractScore(negotiation, proposal, player);
    state.negotiation = { ...negotiation, feedback: agentText(score), score };
    saveState();
    renderNegotiationModal();
    return;
  }
  const target = state.market.find((item) => item.playerId === negotiation.playerId) || findMarketCard(negotiation.playerId);
  const seller = target ? state.clubs.find((club) => club.id === target.clubId) : null;
  const player = seller ? playerById(seller, target.playerId) : null;
  if (!target || !seller || !player) return;
  const score = negotiationScore(negotiation, target, seller, player);
  state.negotiation = { ...negotiation, feedback: advisorText(score, negotiation), score };
  saveState();
  renderNegotiationModal();
}

function readNegotiationForm() {
  const current = state.negotiation || {};
  const readBonus = (metric) => ({
    threshold: Number(document.querySelector(`#bonus${metric}`)?.value || 0),
    fee: parseMoneyInput(document.querySelector(`#bonus${metric}Fee`)?.value || 0)
  });
  const appsBonus = readBonus("Apps");
  const goalsBonus = readBonus("Goals");
  const assistsBonus = readBonus("Assists");
  return {
    ...current,
    type: current.type || document.querySelector("#dealType")?.value || "transfer",
    fee: parseMoneyInput(document.querySelector("#dealFee")?.value || 0),
    loanFee: parseMoneyInput(document.querySelector("#loanFee")?.value || 0),
    wageShare: Number(document.querySelector("#wageShare")?.value || 0),
    loanDuration: Number(document.querySelector("#loanDuration")?.value || current.loanDuration || 168),
    buyOption: parseMoneyInput(document.querySelector("#buyOption")?.value || 0),
    sellOn: Number(document.querySelector("#sellOn")?.value || 0),
    bonusApps: appsBonus.threshold,
    bonusAppsFee: appsBonus.fee,
    bonusGoals: goalsBonus.threshold,
    bonusGoalsFee: goalsBonus.fee,
    bonusAssists: assistsBonus.threshold,
    bonusAssistsFee: assistsBonus.fee,
    releaseClause: parseMoneyInput(document.querySelector("#releaseClause")?.value || 0),
    wage: parseMoneyInput(document.querySelector("#contractWage")?.value || 0),
    contractYears: Number(document.querySelector("#contractYears")?.value || current.contractYears || 3),
    role: document.querySelector("#contractRole")?.value || current.role || "Rotacao"
  };
}

function submitClubProposal() {
  const negotiation = readNegotiationForm();
  const target = state.market.find((item) => item.playerId === negotiation.playerId) || findMarketCard(negotiation.playerId);
  const seller = target ? state.clubs.find((club) => club.id === target.clubId) : null;
  const player = seller ? playerById(seller, target.playerId) : null;
  if (!target || !seller || !player) return;
  const costNow = negotiation.type === "loan" ? negotiation.loanFee : negotiation.fee;
  if (costNow > getUserClub().budget) {
    state.negotiation = { ...negotiation, feedback: "A proposta passa do orcamento disponivel." };
    renderNegotiationModal();
    return;
  }
  const score = negotiationScore(negotiation, target, seller, player);
  if (score <= 12) {
    state.negotiation = { ...negotiation, feedback: "O negociador bloqueou o envio: o clube vendedor recusaria de cara por valores irreais.", score };
    renderNegotiationModal();
    return;
  }
  const proposal = {
    id: makeId(),
    ...negotiation,
    playerName: player.name,
    sellerId: seller.id,
    sellerName: seller.name,
    buyerId: state.userClubId,
    answerDay: state.day + rng(1, 3),
    score,
    bonuses: bonusClausesFrom(negotiation),
    status: "club_wait"
  };
  if (negotiation.proposalId) state.pendingProposals = state.pendingProposals.filter((item) => item.id !== negotiation.proposalId);
  state.pendingProposals.push(proposal);
  addInbox("Proposta enviada", `${seller.name} vai responder a proposta por ${player.name} em alguns dias.`, "mercado");
  closeNegotiation();
}

function submitContractProposal() {
  const negotiation = readNegotiationForm();
  const proposal = state.pendingProposals.find((item) => item.id === negotiation.proposalId);
  if (!proposal) return;
  const player = findPlayerById(proposal.playerId);
  const score = contractScore(negotiation, proposal, player);
  if (score <= 15) {
    state.negotiation = { ...negotiation, feedback: "O empresario recusaria de cara: salario, papel ou clausula nao condizem com o jogador.", score };
    renderNegotiationModal();
    return;
  }
  proposal.wage = negotiation.wage;
  proposal.role = negotiation.role;
  proposal.contractYears = negotiation.contractYears;
  proposal.releaseClause = proposal.type === "loan" ? null : negotiation.releaseClause;
  proposal.contractScore = score;
  proposal.answerDay = state.day + rng(1, 3);
  proposal.status = "contract_wait";
  addInbox("Contrato proposto", `${proposal.playerName} e seus representantes vao responder em breve.`, "mercado");
  closeNegotiation();
}

function processPendingProposals() {
  state.pendingProposals = state.pendingProposals || [];
  state.pendingProposals.forEach((proposal) => {
    if (proposal.answerDay > state.day || proposal.status === "done" || proposal.status === "rejected") return;
    if (proposal.status === "club_wait") {
      if (rng(1, 100) <= proposal.score) {
        proposal.status = "contract";
        addInbox(
          "Clube aceitou os termos",
          `${proposal.sellerName} aceitou negociar ${proposal.playerName}. Agora falta acertar o contrato com o jogador.`,
          "mercado",
          [{ label: "Negociar contrato", action: "contract", proposalId: proposal.id }]
        );
      } else {
        const close = proposal.score >= 35;
        proposal.status = close ? "counter" : "rejected";
        if (close) proposal.counterTerms = counterTermsForProposal(proposal);
        addInbox(
          close ? "Clube pediu outros termos" : "Proposta recusada",
          close ? counterProposalText(proposal) : `${proposal.sellerName} recusou a proposta por ${proposal.playerName}. Os valores foram considerados fora da realidade.`,
          "mercado",
          close ? [{ label: "Renegociar", action: "renegotiate", proposalId: proposal.id }] : []
        );
      }
    } else if (proposal.status === "contract_wait") {
      const playerChance = proposal.contractScore || 10;
      if (rng(1, 100) <= playerChance) completeAcceptedProposal(proposal);
      else {
        proposal.status = "rejected";
        const player = findPlayerById(proposal.playerId);
        addInbox(
          "Contrato recusado",
          proposal.type === "renewal" && player?.clauseThreat
            ? `${proposal.playerName} recusou a renovacao. O interesse do ${player.clauseThreat.buyerName} segue ativo ate ${dateFull(player.clauseThreat.expiresDay)}; sem novo acordo aceito, a clausula sera concluida.`
            : `${proposal.playerName} recusou os termos. O empresario avaliou salario, papel no elenco e clausula como insuficientes.`,
          "mercado"
        );
      }
    }
  });
  state.pendingProposals = state.pendingProposals.filter((proposal) => !["done", "rejected"].includes(proposal.status));
}

function completeAcceptedProposal(proposal) {
  const buyer = getUserClub();
  const seller = state.clubs.find((club) => club.id === proposal.sellerId);
  const player = seller ? playerById(seller, proposal.playerId) : (state.freeAgents || []).find((item) => item.id === proposal.playerId);
  if (!player) return;
  if (proposal.type === "renewal") {
    player.wage = proposal.wage || player.wage;
    player.releaseClause = proposal.releaseClause || player.releaseClause;
    player.contractEndDay = state.day + 365 * Number(proposal.contractYears || 3);
    player.contractWarnings = {};
    player.clauseThreat = null;
    player.preContractThreat = null;
    player.preContract = null;
    player.happiness = clamp(player.happiness + rng(4, 10), 25, 95);
    proposal.status = "done";
    state.market = generateMarket();
    addInbox("Renovacao fechada", `${player.name} renovou por ${proposal.contractYears || 3} ano${Number(proposal.contractYears || 3) > 1 ? "s" : ""}.`, "contrato");
    return;
  }
  if (proposal.type === "free") {
    state.freeAgents = (state.freeAgents || []).filter((item) => item.id !== player.id);
    const signed = { ...player, listStatus: "none", wage: proposal.wage || player.wage, releaseClause: proposal.releaseClause || realisticReleaseClause(player, buyer.reputation), contractEndDay: state.day + 365 * Number(proposal.contractYears || 2), contractWarnings: {}, preContract: null };
    buyer.squad.push(signed);
    proposal.status = "done";
    state.market = generateMarket();
    recordTransfer(signed, { id: "free-agent", name: "Sem contrato" }, buyer, 0, "Livre");
    addInbox("Reforco livre contratado", `${signed.name} assinou por ${proposal.contractYears || 2} ano${Number(proposal.contractYears || 2) > 1 ? "s" : ""}.`, "mercado");
    return;
  }
  if (!seller) return;
  if (proposal.type === "precontract") {
    player.preContract = { toId: buyer.id, toName: buyer.name, wage: proposal.wage || player.wage, contractYears: Number(proposal.contractYears || 3), startDay: player.contractEndDay };
    player.happiness = clamp(player.happiness + 3, 25, 95);
    proposal.status = "done";
    state.market = generateMarket();
    addInbox("Pre-contrato assinado", `${player.name} assinou pre-contrato e chegara quando seu contrato com ${seller.name} terminar.`, "mercado");
    return;
  }
  if (proposal.type === "loan") {
    if (isTransferWindowOpen()) loanPlayer(player, seller, buyer, proposal);
    else makePendingTransfer(player, seller, buyer, proposal.loanFee || 0, "Emprestimo futuro", { kind: "loan", loanProposal: proposal });
  }
  else {
    const playerPatch = {
      transferBonuses: (proposal.bonuses || []).map((clause) => ({ ...clause, owedToId: seller.id, owedToName: seller.name })),
      releaseClause: proposal.releaseClause || realisticReleaseClause(player, buyer.reputation),
      contractEndDay: state.day + 365 * Number(proposal.contractYears || 4),
      contractWarnings: {}
    };
    transferPlayer(player, seller, buyer, proposal.fee, "Usuario", { playerPatch });
  }
  proposal.status = "done";
  state.market = generateMarket();
  addInbox(
    "Negocio fechado",
    isTransferWindowOpen()
      ? `${buyer.name} fechou ${proposal.type === "loan" ? "emprestimo" : "contratacao"} de ${player.name}.`
      : `${buyer.name} fechou ${proposal.type === "loan" ? "emprestimo" : "contratacao"} de ${player.name}. Como a janela esta fechada, ele chega em ${dateShort(nextTransferWindowStart(state.day))}.`,
    "mercado"
  );
}

function loanPlayer(player, seller, buyer, proposal, skipBudget = false) {
  seller.squad = seller.squad.filter((item) => item.id !== player.id);
  const loaned = {
    ...player,
    loan: { fromId: seller.id, fromName: seller.name, toId: buyer.id, endDay: state.day + Number(proposal.loanDuration || 168), wageShare: proposal.wageShare },
    listStatus: "none",
    pendingTransfer: null,
    transferBonuses: (proposal.bonuses || []).map((clause) => ({ ...clause, owedToId: seller.id, owedToName: seller.name }))
  };
  buyer.squad.push(loaned);
  if (!skipBudget) {
    buyer.budget = +(buyer.budget - proposal.loanFee).toFixed(1);
    seller.budget = +(seller.budget + proposal.loanFee).toFixed(1);
  }
  state.loans.push({ id: makeId(), playerId: loaned.id, fromId: seller.id, fromName: seller.name, toId: buyer.id, toName: buyer.name, endDay: loaned.loan.endDay });
  recordTransfer(player, seller, buyer, proposal.loanFee, "Emprestimo");
}

function recordTransfer(player, seller, buyer, fee, type = "IA") {
  state.transferHistory = state.transferHistory || [];
  state.transferHistory.unshift({
    id: makeId(),
    round: state.round,
    day: state.day,
    playerName: player.name,
    position: player.position,
    age: player.age,
    rating: Math.round(player.rating),
    potential: Math.round(player.potential),
    fromId: seller.id,
    fromName: seller.name,
    toId: buyer.id,
    toName: buyer.name,
    fee: +fee.toFixed(1),
    type
  });
}

function makePendingTransfer(player, seller, buyer, fee, type = "IA", options = {}) {
  state.pendingTransfers = state.pendingTransfers || [];
  const existing = state.pendingTransfers.find((item) => item.playerId === player.id && item.buyerId === buyer.id && item.status === "pending");
  if (existing) return existing;
  seller.budget = +(seller.budget + fee).toFixed(1);
  buyer.budget = +(buyer.budget - fee).toFixed(1);
  player.pendingTransfer = { toId: buyer.id, toName: buyer.name, arrivalDay: nextTransferWindowStart(state.day), type };
  player.listStatus = "none";
  const pending = {
    id: makeId(),
    status: "pending",
    pendingTransfer: true,
    kind: options.kind || "transfer",
    playerId: player.id,
    playerName: player.name,
    playerSnapshot: { ...player },
    sellerId: seller.id,
    sellerName: seller.name,
    buyerId: buyer.id,
    buyerName: buyer.name,
    fee,
    type,
    agreedDay: state.day,
    arrivalDay: nextTransferWindowStart(state.day),
    playerPatch: options.playerPatch || {},
    loanProposal: options.loanProposal || null
  };
  state.pendingTransfers.push(pending);
  return pending;
}

function processPendingTransferArrivals() {
  if (!isTransferWindowOpen()) return;
  state.pendingTransfers = state.pendingTransfers || [];
  state.pendingTransfers.forEach((pending) => {
    if (pending.status !== "pending" || pending.arrivalDay > state.day) return;
    const seller = state.clubs.find((club) => club.id === pending.sellerId);
    const buyer = state.clubs.find((club) => club.id === pending.buyerId);
    if (!seller || !buyer) {
      pending.status = "cancelled";
      return;
    }
    const player = playerById(seller, pending.playerId) || pending.playerSnapshot;
    if (pending.kind === "loan" && pending.loanProposal) {
      loanPlayer(player, seller, buyer, pending.loanProposal, true);
    } else {
      seller.squad = seller.squad.filter((item) => item.id !== pending.playerId);
      const moved = { ...player, ...pending.playerPatch, morale: 68, form: 66, happiness: 70, lastDelta: 0, loan: null, listStatus: "none", pendingTransfer: null };
      buyer.squad.push(moved);
      recordTransfer(moved, seller, buyer, pending.fee, pending.type);
    }
    pending.status = "done";
    if (buyer.id === state.userClubId) addInbox("Reforco chegou", `${pending.playerName} chegou ao clube com a abertura da janela de transferencias.`, "mercado");
    if (seller.id === state.userClubId) addInbox("Transferencia concluida", `${pending.playerName} deixou o clube com a abertura da janela de transferencias.`, "mercado");
  });
  state.pendingTransfers = state.pendingTransfers.filter((pending) => pending.status === "pending");
  state.market = generateMarket();
}

function transferPlayer(player, seller, buyer, fee, type = "IA", options = {}) {
  if (!isTransferWindowOpen() && !options.forceImmediate) {
    return makePendingTransfer(player, seller, buyer, fee, type, options);
  }
  seller.squad = seller.squad.filter((item) => item.id !== player.id);
  const moved = { ...player, ...(options.playerPatch || {}), morale: 68, form: 66, happiness: 70, lastDelta: 0, loan: null, listStatus: "none", pendingTransfer: null, releaseClause: options.playerPatch?.releaseClause ?? player.releaseClause ?? null };
  buyer.squad.push(moved);
  seller.budget = +(seller.budget + fee).toFixed(1);
  buyer.budget = +(buyer.budget - fee).toFixed(1);
  recordTransfer(player, seller, buyer, fee, type);
  return moved;
}

function payReleaseClause(playerId) {
  const target = state.market.find((item) => item.playerId === playerId) || findMarketCard(playerId);
  const seller = target ? state.clubs.find((club) => club.id === target.clubId) : null;
  const buyer = getUserClub();
  const player = seller ? playerById(seller, playerId) : null;
  if (!target || !seller || !player || !player.releaseClause) {
    pushNews("Nao foi possivel acionar a clausula desse jogador agora.");
    renderNews();
    return;
  }
  if (player.listStatus === "blocked") {
    pushNews(`${seller.name} considera ${player.name} intocavel e a clausula nao esta disponivel.`);
    renderNews();
    return;
  }
  if (buyer.budget < player.releaseClause) {
    pushNews(`Orcamento insuficiente para pagar a clausula de ${player.name}.`);
    renderNews();
    return;
  }
  const fee = Number(player.releaseClause);
  const proposal = {
    id: makeId(),
    type: "transfer",
    viaReleaseClause: true,
    playerId,
    playerName: player.name,
    sellerId: seller.id,
    sellerName: seller.name,
    buyerId: state.userClubId,
    fee,
    triggeredClause: fee,
    sellOn: 0,
    bonuses: [],
    releaseClause: realisticReleaseClause(player, buyer.reputation) || Math.round((player.value || fee) * 2),
    wage: player.wage,
    contractYears: 4,
    role: guaranteedRole(player, buyer),
    answerDay: state.day,
    score: 100,
    status: "contract"
  };
  state.pendingProposals = (state.pendingProposals || []).filter((item) => item.playerId !== playerId || !item.viaReleaseClause);
  state.pendingProposals.push(proposal);
  pushNews(`${buyer.name} acionou a clausula de ${player.name}. Agora falta convencer o jogador no contrato.`);
  saveState();
  openNegotiation(playerId, "contract", proposal.id);
}

function simulateAiTransfers() {
  const userClub = getUserClub();
  const buyers = state.clubs
    .filter((club) => club.id !== userClub.id && club.budget > 8 && club.squad.length < 24)
    .sort(() => Math.random() - 0.5)
    .slice(0, rng(1, 3));

  buyers.forEach((buyer) => {
    const targets = state.clubs
      .filter((seller) => seller.id !== buyer.id && seller.id !== userClub.id && seller.squad.length > 16)
      .flatMap((seller) => seller.squad.filter((player) => !player.loan && !player.pendingTransfer).map((player) => ({ seller, player })))
      .filter(({ player }) => player.listStatus !== "blocked" && player.rating <= buyer.reputation + 8 && player.value <= buyer.budget * 0.85)
      .filter(({ player }) => player.listStatus === "transfer" || player.happiness < 45 || player.rating >= buyer.reputation - 2 || rng(1, 100) <= 16)
      .sort((a, b) => transferAppeal(b.player, b.seller, buyer) - transferAppeal(a.player, a.seller, buyer));
    if (!targets.length) return;
    const pool = targets.slice(0, 12);
    const deal = pool[rng(0, pool.length - 1)];
    const fee = +(deal.player.value * (deal.player.listStatus === "transfer" ? 1.08 : deal.player.age < 23 ? 1.65 : 1.35) + rng(0, 4)).toFixed(1);
    if (fee <= 0 || fee > buyer.budget) return;
    const result = transferPlayer(deal.player, deal.seller, buyer, fee, "IA");
    pushNews(result?.pendingTransfer
      ? `${buyer.name} acertou a contratacao de ${deal.player.name}; chegada prevista para ${dateShort(result.arrivalDay)}.`
      : `${buyer.name} contratou ${deal.player.name} de ${deal.seller.name} por ${money(fee)}.`);
  });
}

function simulateAiReleaseClauses() {
  if (rng(1, 100) > 7) return;
  const userClub = getUserClub();
  const targets = userClub.squad
    .filter((player) => player.releaseClause && player.listStatus !== "blocked" && !player.loan && !player.clauseThreat && !player.pendingTransfer)
    .filter((player) => player.rating >= 68 || player.potential >= 80)
    .sort((a, b) => b.rating + b.potential * 0.25 - (a.rating + a.potential * 0.25));
  if (!targets.length) return;
  const player = targets[0];
  const buyers = state.clubs
    .filter((club) => club.id !== userClub.id && club.budget >= player.releaseClause && club.reputation >= player.rating - 8)
    .sort((a, b) => b.reputation + b.budget * 0.1 - (a.reputation + a.budget * 0.1));
  if (!buyers.length) return;
  const buyer = buyers[0];
  if (rng(1, 100) > clamp(24 + player.ambition * 0.25 + Math.max(0, buyer.reputation - userClub.reputation) * 2, 12, 72)) return;
  const fee = Number(player.releaseClause);
  player.clauseThreat = { buyerId: buyer.id, buyerName: buyer.name, fee, expiresDay: state.day + 7 };
  addInbox("Clausula acionada", `${buyer.name} pagou a clausula de ${player.name} por ${money(fee)}. Voce tem 7 dias para tentar uma renovacao; o jogador pode recusar dependendo do projeto, salario, papel e nivel do clube interessado. Sem renovacao aceita no prazo, a transferencia sera concluida.`, "mercado", [{ label: "Tentar renovar", action: "renewContract", playerId: player.id }]);
}

function transferAppeal(player, seller, buyer) {
  let appeal = player.rating + Math.max(0, player.potential - player.rating) * 0.45;
  if (player.listStatus === "transfer") appeal += 16;
  if (player.listStatus === "loan") appeal -= 12;
  if (player.happiness < 45) appeal += 8;
  appeal += guaranteedRole(player, buyer) === "Titular" ? 6 : 0;
  appeal -= Math.max(0, seller.reputation - buyer.reputation) * 0.35;
  return appeal;
}

function generateOffers() {
  const club = getUserClub();
  const buyers = state.clubs.filter((item) => item.id !== club.id);
  const candidates = club.squad
    .filter((player) => player.rating > 56 && player.listStatus !== "blocked" && !player.loan && !player.pendingTransfer)
    .filter((player) => {
      if (["transfer", "loan"].includes(player.listStatus)) return true;
      const visibility = player.rating >= 74 || player.potential >= 82;
      const unsettled = player.happiness < 45;
      return visibility || unsettled || rng(1, 100) <= 18;
    })
    .sort(() => Math.random() - 0.5)
    .slice(0, rng(1, 3));

  return candidates.map((player) => {
    const isLoan = player.listStatus === "loan";
    const viableBuyers = buyers.filter((item) => item.budget > player.value * (isLoan ? 0.08 : 0.6));
    const buyerPool = viableBuyers.length ? viableBuyers : buyers;
    const buyer = buyerPool[rng(0, buyerPool.length - 1)];
    const need = buyer.reputation > club.reputation ? 1.1 : 0.9;
    const listedBonus = player.listStatus === "transfer" ? 0.92 : 1.18;
    const fee = isLoan
      ? +Math.min(buyer.budget * 0.18, player.value * 0.08 + rng(0, 2) / 10).toFixed(2)
      : +Math.min(buyer.budget * 0.85, player.value * need * listedBonus + rng(0, 6)).toFixed(1);
    return {
      id: makeId(),
      type: isLoan ? "loan" : "transfer",
      playerId: player.id,
      buyerId: buyer.id,
      buyerName: buyer.name,
      fee,
      createdDay: state.day,
      note: isLoan ? "quer minutos por emprestimo" : player.age < 23 ? "quer apostar no potencial" : player.rating > 72 ? "procura impacto imediato" : "ve oportunidade de elenco"
    };
  });
}

function acceptOffer(offerId) {
  const offer = state.offers.find((item) => item.id === offerId);
  if (!offer) return;
  const club = getUserClub();
  const buyer = state.clubs.find((item) => item.id === offer.buyerId);
  const player = playerById(club, offer.playerId);
  if (!buyer || !player) return;
  let moved = null;
  if (offer.type === "loan") {
    const loanProposal = { loanFee: offer.fee, loanDuration: offer.loanDuration || 168, wageShare: 70, bonuses: [] };
    if (isTransferWindowOpen()) loanPlayer(player, club, buyer, loanProposal);
    else moved = makePendingTransfer(player, club, buyer, offer.fee, "Emprestimo futuro", { kind: "loan", loanProposal });
  } else {
    const playerPatch = offer.bonusApps && offer.bonusAppsFee
      ? { transferBonuses: [{ metric: "apps", label: "jogos como titular", threshold: Number(offer.bonusApps), fee: Number(offer.bonusAppsFee), paid: false, owedToId: club.id, owedToName: club.name }] }
      : {};
    moved = transferPlayer(player, club, buyer, offer.fee, "Venda", { playerPatch });
  }
  state.offers = state.offers.filter((item) => item.id !== offerId);
  if (state.offerModal?.offerId === offerId) state.offerModal = null;
  if (!moved?.pendingTransfer) {
    state.lineupIds = state.lineupIds.filter((id) => id !== player.id);
    currentLineup();
  }
  pushNews(moved?.pendingTransfer
    ? `${club.name} aceitou a proposta por ${player.name}; ele sai quando a proxima janela abrir.`
    : `${club.name} ${offer.type === "loan" ? "emprestou" : "vendeu"} ${player.name} para ${buyer.name} por ${money(offer.fee)}.`);
  addInbox(
    moved?.pendingTransfer ? "Acordo fechado" : (offer.type === "loan" ? "Emprestimo concluido" : "Venda concluida"),
    moved?.pendingTransfer
      ? `${player.name} teve acordo fechado com ${buyer.name}. Como a janela esta fechada, a saida acontece em ${dateShort(moved.arrivalDay)}.`
      : `${player.name} foi ${offer.type === "loan" ? "emprestado" : "vendido"} para ${buyer.name} por ${money(offer.fee)}.`,
    "mercado"
  );
  state.market = generateMarket();
  saveState();
  render();
}

function rejectOffer(offerId) {
  const offer = state.offers.find((item) => item.id === offerId);
  if (!offer) return;
  const player = playerById(getUserClub(), offer.playerId);
  if (player) player.happiness = clamp(player.happiness - 4, 25, 95);
  state.offers = state.offers.filter((item) => item.id !== offerId);
  if (state.offerModal?.offerId === offerId) state.offerModal = null;
  pushNews(`Proposta recusada. ${player ? player.name : "O jogador"} esperava uma conversa clara sobre o futuro.`);
  addInbox("Proposta recusada", `${player ? player.name : "O jogador"} teve uma proposta recusada pela diretoria.`, "mercado");
  saveState();
  render();
}

function openOfferModal(offerId, mode = "view") {
  const offer = state.offers.find((item) => item.id === offerId);
  if (!offer) {
    showAlertModal("Proposta indisponivel", "Essa proposta nao esta mais aberta. Novas mensagens de proposta agora ficam sincronizadas com a aba Mercado.");
    return;
  }
  state.negotiation = null;
  state.offerModal = {
    offerId,
    mode,
    counterFee: offer.counterFee || +(offer.fee * 1.15).toFixed(2),
    sellOn: offer.counterSellOn ?? 10,
    bonusApps: offer.counterBonusApps || 0,
    bonusAppsFee: offer.counterBonusAppsFee || 0,
    feedback: ""
  };
  saveState();
  renderNegotiationModal();
}

function closeOfferModal() {
  state.offerModal = null;
  saveState();
  renderNegotiationModal();
}

function readIncomingCounterForm() {
  const current = state.offerModal || {};
  return {
    ...current,
    counterFee: parseMoneyInput(document.querySelector("#incomingCounterFee")?.value || current.counterFee || 0),
    sellOn: Number(document.querySelector("#incomingSellOn")?.value || current.sellOn || 0),
    bonusApps: Number(document.querySelector("#incomingBonusApps")?.value || 0),
    bonusAppsFee: parseMoneyInput(document.querySelector("#incomingBonusAppsFee")?.value || 0)
  };
}

function incomingCounterScore(offer, terms, player, buyer) {
  const base = Math.max(0.1, Number(offer.fee || player?.value || 1));
  const ask = Number(terms.counterFee || 0);
  const ratio = ask / base;
  const clubNeed = buyer?.reputation >= getUserClub().reputation ? 8 : -5;
  const playerPull = player?.age < 24 ? 6 : player?.rating > 74 ? 8 : 0;
  const sellOnHelp = Number(terms.sellOn || 0) * 0.3;
  const bonusHelp = Number(terms.bonusAppsFee || 0) * 2;
  if (ratio > 2.15) return 5;
  return clamp(Math.round(78 - (ratio - 1) * 58 + clubNeed + playerPull + sellOnHelp + bonusHelp + rng(-5, 5)), 5, 92);
}

function incomingAdvisorText(score) {
  if (score >= 78) return "O negociador acha que o outro clube pode aceitar. O valor pedido esta alto, mas ainda parece defensavel pelo contexto do jogador.";
  if (score >= 55) return "A contraproposta tem conversa. Talvez o outro clube aceite, talvez volte pedindo um ajuste menor.";
  if (score >= 32) return "O negociador ve risco: o valor pedido esta puxado para a proposta original e pode esfriar a conversa.";
  return "O negociador seguraria o envio. Para esse comprador, os termos estao longe demais da oferta inicial.";
}

function evaluateIncomingCounter() {
  const terms = readIncomingCounterForm();
  const offer = state.offers.find((item) => item.id === terms.offerId);
  const player = playerById(getUserClub(), offer?.playerId);
  const buyer = state.clubs.find((item) => item.id === offer?.buyerId);
  if (!offer || !player || !buyer) return;
  const score = incomingCounterScore(offer, terms, player, buyer);
  state.offerModal = { ...terms, feedback: incomingAdvisorText(score), score };
  saveState();
  renderNegotiationModal();
}

function submitIncomingCounter() {
  const terms = readIncomingCounterForm();
  const offer = state.offers.find((item) => item.id === terms.offerId);
  const player = playerById(getUserClub(), offer?.playerId);
  const buyer = state.clubs.find((item) => item.id === offer?.buyerId);
  if (!offer || !player || !buyer) return;
  const score = incomingCounterScore(offer, terms, player, buyer);
  if (score <= 12) {
    state.offerModal = { ...terms, feedback: "O negociador recusou enviar: a contraproposta seria vista como ruptura da negociacao.", score };
    renderNegotiationModal();
    return;
  }
  offer.status = "counter_wait";
  offer.counterFee = terms.counterFee;
  offer.counterSellOn = terms.sellOn;
  offer.counterBonusApps = terms.bonusApps;
  offer.counterBonusAppsFee = terms.bonusAppsFee;
  offer.counterScore = score;
  offer.answerDay = state.day + rng(1, 2);
  addInbox("Contraproposta enviada", `${buyer.name} vai responder aos termos por ${player.name} em breve.`, "mercado", [{ label: "Ver proposta", action: "viewOffer", offerId: offer.id }]);
  state.offerModal = null;
  saveState();
  render();
}

function processIncomingCounters() {
  state.offers = state.offers || [];
  state.offers.forEach((offer) => {
    if (offer.status !== "counter_wait" || offer.answerDay > state.day) return;
    const player = playerById(getUserClub(), offer.playerId);
    if (rng(1, 100) <= Number(offer.counterScore || 0)) {
      offer.fee = Number(offer.counterFee || offer.fee);
      offer.sellOn = Number(offer.counterSellOn || 0);
      offer.bonusApps = Number(offer.counterBonusApps || 0);
      offer.bonusAppsFee = Number(offer.counterBonusAppsFee || 0);
      offer.status = "accepted_counter";
      addInbox("Contraproposta aceita", `${offer.buyerName} aceitou pagar ${money(offer.fee)} por ${player?.name || "seu jogador"}.`, "mercado", [{ label: "Ver proposta", action: "viewOffer", offerId: offer.id }]);
    } else {
      offer.status = "counter_rejected";
      addInbox("Contraproposta recusada", `${offer.buyerName} abandonou a negociacao por ${player?.name || "seu jogador"} depois dos novos termos.`, "mercado");
    }
  });
  state.offers = state.offers.filter((offer) => offer.status !== "counter_rejected");
}

function aiTactics(club) {
  const avgPace = club.squad.reduce((sum, p) => sum + p.pace, 0) / club.squad.length;
  const avgPass = club.squad.reduce((sum, p) => sum + p.passing, 0) / club.squad.length;
  return {
    formation: ["4-3-3", "4-3-3 Defensivo", "4-2-3-1", "4-4-2", "4-4-2 Losango", "3-5-2", "5-3-2", "5-4-1"][rng(0, 7)],
    mentality: avgPace > 68 ? "Contra-ataque" : "Equilibrada",
    attackStyle: avgPass > 68 ? "Posse curta" : "Jogo direto",
    defenseStyle: club.reputation < 68 ? "Bloco baixo" : "Bloco medio"
  };
}

function recordFormationUsage(club, tactics) {
  club.stats.formationUsage = club.stats.formationUsage || {};
  const formation = tactics.formation === "Personalizada" ? inferredShapeName(club.id === state.userClubId ? state.customFormation : formations["4-3-3"]) : tactics.formation;
  club.stats.formationUsage[formation] = (club.stats.formationUsage[formation] || 0) + 1;
}

function mostUsedFormation(club) {
  const usage = club.stats?.formationUsage || {};
  const [formation] = Object.entries(usage).sort((a, b) => b[1] - a[1])[0] || [];
  return formation || "Sem historico";
}

function expectedGoals(own, opp, homeBonus, matchupBonus = 0) {
  const diff = own.total - opp.total + homeBonus + matchupBonus;
  return clamp(1.1 + diff / 26 + Math.random() * 0.65, 0.15, 3.4);
}

function goalsFromXg(xg) {
  let goals = 0;
  for (let i = 0; i < 5; i += 1) {
    if (Math.random() < xg / (i + 2.2)) goals += 1;
  }
  return goals;
}

function startLiveMatch() {
  if (state.liveMatch || !isMatchDay()) return;
  if (notifyUnavailableForMatch()) return;
  const fixture = nextUserFixture();
  if (!fixture) return;
  const opponent = fixture.opponent;
  state.liveMatch = {
    type: fixture.type || "league",
    cupRoundIndex: fixture.cupRoundIndex ?? null,
    competitionId: fixture.competitionId || null,
    fixtureId: fixture.id || null,
    opponentId: opponent.id,
    opponentName: opponent.name,
    competition: fixture.competition,
    userHome: fixture.userHome,
    homeName: fixture.home.name,
    awayName: fixture.away.name,
    oppTactics: aiTactics(opponent),
    tactics: { ...state.tactics },
    lineupIds: [...state.lineupIds],
    lineupRoles: [...state.lineupRoles],
    benchIds: [...activeBenchIds("lineup")],
    minute: 0,
    userGoals: 0,
    oppGoals: 0,
    paused: false,
    speed: state.matchSpeed || 1500,
    stats: {
      userShots: 0,
      oppShots: 0,
      userPossession: 50,
      oppPossession: 50,
      userTackles: 0,
      oppTackles: 0,
      userXg: 0,
      oppXg: 0
    },
    events: [`0' Comeca ${fixture.home.name} x ${fixture.away.name} pela ${fixture.competition}.`],
    playerRatings: {},
    cards: {},
    sentOff: {},
    finished: false
  };
  seedLiveRatings();
  saveState();
  render();
  showTab("match");
  startLiveTimer();
}

function seedLiveRatings() {
  if (!state.liveMatch) return;
  const userClub = getUserClub();
  const opponent = state.clubs.find((club) => club.id === state.liveMatch.opponentId);
  const userLineup = currentLineup(userClub, state.liveMatch.tactics, state.liveMatch.lineupIds, state.liveMatch.lineupRoles);
  const oppLineup = bestEleven(opponent, state.liveMatch.oppTactics);
  state.liveMatch.playerRatings = state.liveMatch.playerRatings || {};
  [...userLineup, ...oppLineup].forEach((player) => {
    if (!state.liveMatch.playerRatings[player.id]) {
      const conditionPenalty = (100 - fitnessQuotient(player)) * 0.006;
      state.liveMatch.playerRatings[player.id] = +(6.62 - conditionPenalty + rng(-2, 2) / 25).toFixed(2);
    }
  });
}

function bumpLiveRating(playerId, amount) {
  if (!state.liveMatch?.playerRatings?.[playerId]) return;
  state.liveMatch.playerRatings[playerId] = +clamp(state.liveMatch.playerRatings[playerId] + amount, 5.1, 9.9).toFixed(2);
}

function advanceLiveMatch(forceFinish = false) {
  if (!state.liveMatch || state.liveMatch.finished) return;
  while (state.liveMatch.minute < 90) {
    state.liveMatch.minute = Math.min(90, state.liveMatch.minute + rng(8, 14));
    playLiveSegment();
    if (!forceFinish) break;
  }
  if (state.liveMatch.minute >= 90) finishLiveMatch();
  saveState();
  render();
}

function startLiveTimer() {
  stopLiveTimer();
  if (!state?.liveMatch || state.liveMatch.paused) return;
  liveTimer = setInterval(() => advanceLiveMatch(false), state.liveMatch.speed || state.matchSpeed || 1500);
}

function stopLiveTimer() {
  if (liveTimer) clearInterval(liveTimer);
  liveTimer = null;
}

function toggleLivePause() {
  if (!state.liveMatch) return;
  state.liveMatch.paused = !state.liveMatch.paused;
  saveState();
  render();
  if (state.liveMatch.paused) stopLiveTimer();
  else startLiveTimer();
}

function setMatchSpeed(value) {
  state.matchSpeed = Number(value);
  if (state.liveMatch) {
    state.liveMatch.speed = state.matchSpeed;
    saveState();
    startLiveTimer();
  }
}

function movePlayerToSlot(playerId, slotIndex) {
  const ids = state.liveMatch ? state.liveMatch.lineupIds : state.lineupIds;
  const roles = state.liveMatch ? state.liveMatch.lineupRoles : state.lineupRoles;
  const tactics = state.liveMatch?.tactics || state.tactics;
  const context = state.liveMatch ? "match" : "lineup";
  const benchIds = activeBenchSlotIds(context);
  const currentIndex = ids.indexOf(playerId);
  const benchIndex = benchIds.indexOf(playerId);
  const targetId = ids[slotIndex];
  const targetRole = roles[slotIndex];
  if (currentIndex === slotIndex) {
    currentLineup();
    saveState();
    render();
    return;
  }
  if (currentIndex >= 0) {
    ids[currentIndex] = targetId;
    roles[currentIndex] = targetRole || defaultRoleForSlot(activeSlots(tactics)[currentIndex]);
  } else if (benchIndex >= 0) {
    benchIds[benchIndex] = targetId || null;
  } else if (targetId && !benchIds.includes(targetId)) {
    const emptyIndex = benchIds.findIndex((id) => !id);
    if (emptyIndex >= 0) benchIds[emptyIndex] = targetId;
  }
  ids[slotIndex] = playerId;
  roles[slotIndex] = roles[slotIndex] || defaultRoleForSlot(activeSlots(tactics)[slotIndex]);
  setBenchSlotIds(benchIds, context);
  currentLineup();
  saveState();
  render();
}

function movePlayerToBench(playerId, benchIndex = null) {
  const context = state.liveMatch ? "match" : "lineup";
  const ids = state.liveMatch ? state.liveMatch.lineupIds : state.lineupIds;
  const targetIndex = Number.isFinite(Number(benchIndex)) ? Number(benchIndex) : null;
  const currentStarterIndex = ids.indexOf(playerId);
  const benchIds = activeBenchSlotIds(context);
  if (currentStarterIndex >= 0 && targetIndex !== null) {
    const replacementId = benchIds[targetIndex];
    if (replacementId) {
      movePlayerToSlot(replacementId, currentStarterIndex);
      return;
    }
  }
  if (ids.includes(playerId)) {
    showAlertModal("Titular em campo", "Para tirar um titular, arraste outro jogador para a posicao dele no mini campo.");
    return;
  }
  const currentBenchIndex = benchIds.indexOf(playerId);
  if (currentBenchIndex >= 0) {
    if (targetIndex === null || currentBenchIndex === targetIndex) return;
    const targetPlayer = benchIds[targetIndex];
    benchIds[targetIndex] = playerId;
    benchIds[currentBenchIndex] = targetPlayer || null;
    setBenchSlotIds(benchIds, context);
    saveState();
    render();
    return;
  }
  const destinationIndex = targetIndex === null ? benchIds.findIndex((id) => !id) : targetIndex;
  if (destinationIndex < 0) {
    showAlertModal("Banco completo", `O banco tem limite de ${maxBenchPlayers} jogadores. Mova alguem para nao relacionados antes de adicionar outro reserva.`);
    return;
  }
  if (benchIds[destinationIndex]) {
    showAlertModal("Vaga ocupada", "Toque no jogador dessa vaga para fazer uma troca direta, ou escolha uma vaga livre.");
    return;
  }
  benchIds[destinationIndex] = playerId;
  setBenchSlotIds(benchIds, context);
  saveState();
  render();
}

function movePlayerToUnrelated(playerId) {
  const context = state.liveMatch ? "match" : "lineup";
  const ids = state.liveMatch ? state.liveMatch.lineupIds : state.lineupIds;
  if (ids.includes(playerId)) {
    showAlertModal("Titular em campo", "Um titular precisa ser substituido por outro jogador no mini campo antes de ficar fora dos relacionados.");
    return;
  }
  const benchIds = activeBenchSlotIds(context).map((id) => id === playerId ? null : id);
  setBenchSlotIds(benchIds, context);
  saveState();
  render();
}

function setCustomSlot(slotIndex, position) {
  if (!state.customFormation || state.customFormation.length !== 11) state.customFormation = [...activeSlots(state.tactics)];
  if (!state.customSlotCoords || state.customSlotCoords.length !== 11) state.customSlotCoords = defaultCustomCoords(state.customFormation);
  state.customFormation[slotIndex] = position;
  state.customSlotCoords[slotIndex] = formationGuideCoords(position)[0];
  state.tactics.formation = "Personalizada";
  state.lineupRoles[slotIndex] = defaultRoleForSlot(position);
  saveState();
  render();
}

function movePlayerToFormationSlot(playerId, position, sourceSlot, coordIndex = 0) {
  if (state.liveMatch) return;
  if (!state.customFormation || state.customFormation.length !== 11) state.customFormation = [...activeSlots(state.tactics)];
  if (!state.customSlotCoords || state.customSlotCoords.length !== 11) state.customSlotCoords = defaultCustomCoords(state.customFormation);
  state.tactics.formation = "Personalizada";
  let slotIndex = Number(sourceSlot);
  if (!Number.isInteger(slotIndex) || slotIndex < 0) {
    slotIndex = bestReplacementSlot(position);
  }
  state.customFormation[slotIndex] = position;
  state.customSlotCoords[slotIndex] = formationGuideCoords(position)[Number(coordIndex)] || formationGuideCoords(position)[0];
  state.lineupRoles[slotIndex] = defaultRoleForSlot(position);
  movePlayerToSlot(playerId, slotIndex);
}

function bestReplacementSlot(position) {
  const lineup = currentLineup();
  const samePosition = lineup.findIndex((player) => player.slot === position);
  if (samePosition >= 0) return samePosition;
  const candidates = lineup
    .map((player, index) => ({ index, score: fitLevel(player.position, player.slot), slot: player.slot }))
    .filter((item) => item.slot !== "GK");
  return candidates.sort((a, b) => a.score - b.score)[0]?.index ?? 10;
}

function setSlotRole(slotIndex, roleId) {
  const roles = state.liveMatch ? state.liveMatch.lineupRoles : state.lineupRoles;
  roles[slotIndex] = roleId;
  saveState();
  render();
}

function matchUnavailablePlayers() {
  const club = getUserClub();
  const lineupIds = state.liveMatch ? state.liveMatch.lineupIds : state.lineupIds;
  const benchIds = state.liveMatch ? activeBenchIds("match") : activeBenchIds("lineup");
  const related = new Set([...lineupIds, ...benchIds]);
  return club.squad.filter((player) => related.has(player.id) && (isInjured(player) || isSuspended(player)));
}

function notifyUnavailableForMatch() {
  const unavailable = matchUnavailablePlayers();
  if (!unavailable.length) return false;
  const names = unavailable.slice(0, 4).map((player) => `${player.name} (${unavailableReason(player)})`).join(", ");
  const extra = unavailable.length > 4 ? ` e mais ${unavailable.length - 4}` : "";
  showAlertModal("Jogador indisponivel", `Nao da para iniciar a partida porque ha atleta indisponivel entre titulares ou reservas: ${names}${extra}. Mova o jogador para nao relacionados ou altere a escalacao.`);
  saveState();
  render();
  return true;
}

function liveRedCount(lineup) {
  return lineup.filter((player) => state.liveMatch?.sentOff?.[player.id]).length;
}

function disciplineProfile(tactics = {}) {
  let chance = 14;
  if (tactics.defenseStyle === "Pressao alta") chance += 5;
  if (tactics.mentality === "Ofensiva") chance += 2;
  if (tactics.mentality === "Defensiva") chance -= 2;
  return chance;
}

function addYellowCard(player, club, minute, reason = "falta tatica") {
  if (!player || state.liveMatch?.sentOff?.[player.id]) return;
  state.liveMatch.cards = state.liveMatch.cards || {};
  state.liveMatch.cards[player.id] = (state.liveMatch.cards[player.id] || 0) + 1;
  player.yellowCards = (player.yellowCards || 0) + 1;
  bumpLiveRating(player.id, -0.08);
  if (state.liveMatch.cards[player.id] >= 2) {
    addRedCard(player, club, minute, "segundo amarelo");
    return;
  }
  state.liveMatch.events.unshift(`${minute}' Cartao amarelo para ${player.name} (${club.name}) por ${reason}.`);
  if (player.yellowCards >= yellowCardQuota) {
    player.yellowCards = 0;
    player.suspension = { matches: 1, reason: "acumulo de amarelos", startedDay: state.day };
    if (club.id === state.userClubId) addInbox("Suspensao por cartoes", `${player.name} atingiu a cota de ${yellowCardQuota} amarelos e esta suspenso por 1 jogo.`, "disciplina");
  }
}

function addRedCard(player, club, minute, reason = "entrada forte") {
  if (!player) return;
  state.liveMatch.sentOff = state.liveMatch.sentOff || {};
  if (state.liveMatch.sentOff[player.id]) return;
  state.liveMatch.sentOff[player.id] = true;
  player.redCards = (player.redCards || 0) + 1;
  player.suspension = { matches: reason === "entrada violenta" ? 2 : 1, reason: reason === "segundo amarelo" ? "segundo amarelo" : "cartao vermelho", startedDay: state.day };
  bumpLiveRating(player.id, -0.55);
  state.liveMatch.events.unshift(`${minute}' Expulsao: ${player.name} (${club.name}) recebe vermelho por ${reason}.`);
  if (club.id === state.userClubId) addInbox("Jogador suspenso", `${player.name} foi expulso e cumprira ${player.suspension.matches} jogo${player.suspension.matches > 1 ? "s" : ""} de suspensao.`, "disciplina");
}

function maybeDiscipline(club, lineup, tactics, minute) {
  const active = lineup.filter((player) => player.slot !== "GK" && !state.liveMatch?.sentOff?.[player.id]);
  if (!active.length) return;
  const chance = disciplineProfile(tactics) + (minute > 70 ? 3 : 0);
  if (rng(1, 100) <= chance) {
    const candidate = [...active].sort((a, b) => (a.tackling + a.stamina * 0.25) - (b.tackling + b.stamina * 0.25))[rng(0, Math.min(5, active.length - 1))];
    addYellowCard(candidate, club, minute, rng(1, 100) <= 35 ? "parar contra-ataque" : "disputa atrasada");
  }
  const redChance = tactics.defenseStyle === "Pressao alta" ? 1.2 : 0.65;
  if (rng(1, 1000) <= redChance * 10) {
    const candidate = active[rng(0, active.length - 1)];
    addRedCard(candidate, club, minute, rng(1, 100) <= 65 ? "entrada forte" : "entrada violenta");
  }
}

function processMatchSuspensions() {
  state.clubs.forEach((club) => {
    club.squad.forEach((player) => {
      if (!isSuspended(player) || player.suspension.startedDay === state.day) return;
      player.suspension.matches -= 1;
      if (player.suspension.matches <= 0) {
        const reason = player.suspension.reason || "punicao";
        player.suspension = null;
        if (club.id === state.userClubId) addInbox("Suspensao cumprida", `${player.name} cumpriu suspensao por ${reason} e esta disponivel novamente.`, "disciplina");
      }
    });
  });
}

function playLiveSegment() {
  seedLiveRatings();
  const userClub = getUserClub();
  const opponent = state.clubs.find((club) => club.id === state.liveMatch.opponentId);
  const matchTactics = state.liveMatch.tactics || state.tactics;
  const userPower = teamStrength(userClub, matchTactics, currentLineup(userClub, matchTactics, state.liveMatch.lineupIds, state.liveMatch.lineupRoles));
  const oppPower = teamStrength(opponent, state.liveMatch.oppTactics);
  const userMatchup = tacticalMatchup(userPower, matchTactics, oppPower, state.liveMatch.oppTactics);
  const oppMatchup = tacticalMatchup(oppPower, state.liveMatch.oppTactics, userPower, matchTactics);
  maybeDiscipline(userClub, userPower.lineup, matchTactics, state.liveMatch.minute);
  maybeDiscipline(opponent, oppPower.lineup, state.liveMatch.oppTactics, state.liveMatch.minute);
  const redSwing = (liveRedCount(oppPower.lineup) - liveRedCount(userPower.lineup)) * 9;
  const chance = clamp(38 + redSwing + (userPower.total + userMatchup - oppPower.total - oppMatchup) * 1.1, 10, 72);
  const userAttacks = rng(1, 100) <= chance;
  const minute = state.liveMatch.minute;
  const scorerPool = (userAttacks ? userPower.lineup : oppPower.lineup).sort((a, b) => roleScore(b, b.slot) - roleScore(a, a.slot)).slice(0, 5);
  const defendingClub = userAttacks ? opponent : userClub;
  const defendingLineup = userAttacks ? oppPower.lineup : userPower.lineup;
  const goalkeeper = defendingLineup.find((player) => player.slot === "GK") || defendingLineup[0];
  const teamName = userAttacks ? userClub.name : opponent.name;
  const userHomeBonus = state.liveMatch.userHome ? stadiumHomeBonus(userClub) : -0.75;
  const oppHomeBonus = state.liveMatch.userHome ? -0.75 : stadiumHomeBonus(opponent);
  const xg = userAttacks
    ? expectedGoals(userPower, oppPower, userHomeBonus, userMatchup - oppMatchup)
    : expectedGoals(oppPower, userPower, oppHomeBonus, oppMatchup - userMatchup);
  const shotXg = +(xg / rng(7, 11)).toFixed(2);
  if (userAttacks) {
    state.liveMatch.stats.userShots += 1;
    state.liveMatch.stats.userXg = +(state.liveMatch.stats.userXg + shotXg).toFixed(2);
  } else {
    state.liveMatch.stats.oppShots += 1;
    state.liveMatch.stats.oppXg = +(state.liveMatch.stats.oppXg + shotXg).toFixed(2);
  }
  state.liveMatch.stats.userPossession = clamp(Math.round(50 + (userPower.passing - oppPower.passing) * 0.35 + userMatchup - oppMatchup + (matchTactics.mentality === "Ofensiva" ? 5 : 0)), 34, 66);
  state.liveMatch.stats.oppPossession = 100 - state.liveMatch.stats.userPossession;
  state.liveMatch.stats.userTackles += userAttacks ? 0 : rng(0, 2);
  state.liveMatch.stats.oppTackles += userAttacks ? rng(0, 2) : 0;

  if (rng(1, 100) < xg * 18) {
    const scorer = scorerPool[rng(0, scorerPool.length - 1)];
    if (userAttacks) state.liveMatch.userGoals += 1;
    else state.liveMatch.oppGoals += 1;
    addPlayerMatchStat(userAttacks ? userClub : opponent, scorer.id, "goals", 1);
    addPlayerMatchStat(userAttacks ? userClub : opponent, scorer.id, "shots", 1);
    bumpLiveRating(scorer.id, 0.9);
    if (goalkeeper) bumpLiveRating(goalkeeper.id, -0.22);
    const assisterPool = scorerPool.filter((player) => player.id !== scorer.id);
    const assister = assisterPool.length ? assisterPool[rng(0, assisterPool.length - 1)] : null;
    if (assister && rng(1, 100) <= 72) {
      addPlayerMatchStat(userAttacks ? userClub : opponent, assister.id, "assists", 1);
      bumpLiveRating(assister.id, 0.48);
    }
    state.liveMatch.events.unshift(`${minute}' Gol do ${teamName}: ${scorer.name} finaliza uma chance clara.`);
  } else {
    if (goalkeeper && rng(1, 100) <= 42) {
      addPlayerMatchStat(defendingClub, goalkeeper.id, "saves", 1);
      bumpLiveRating(goalkeeper.id, 0.18);
    }
    const tacklerPool = defendingLineup.filter((player) => ["CB", "RB", "LB", "DM", "CM"].includes(player.slot));
    const tackler = tacklerPool.length ? tacklerPool[rng(0, tacklerPool.length - 1)] : null;
    if (tackler) {
      addPlayerMatchStat(defendingClub, tackler.id, "tackles", 1);
      bumpLiveRating(tackler.id, 0.06);
    }
    const text = userAttacks
      ? `${minute}' ${matchTactics.attackStyle} cria chegada perigosa para o ${userClub.name}.`
      : `${minute}' ${opponent.name} encontra espaco e exige ajuste defensivo.`;
    state.liveMatch.events.unshift(text);
  }
  [...userPower.lineup, ...oppPower.lineup].forEach((player) => {
    const drain = 0.18 + (player.stamina < 60 ? 0.08 : 0) + (state.liveMatch.minute > 70 ? 0.08 : 0);
    bumpLiveRating(player.id, fitnessQuotient(player) < 65 ? -0.03 : rng(0, 1) ? 0.01 : -0.005);
    player.condition = clamp(+(Number(player.condition || 92) - drain).toFixed(1), 35, 100);
  });
  const tired = userPower.lineup
    .map((player) => ({ ...player, projected: clamp(fitnessQuotient(player) - minute * (player.stamina < 60 ? 0.18 : 0.12), 35, 100) }))
    .filter((player) => minute >= 60 && player.projected < 68 && player.slot !== "GK")
    .sort((a, b) => a.projected - b.projected)[0];
  if (tired && !state.liveMatch.events.some((event) => event.includes(`cansaco de ${tired.name}`))) {
    state.liveMatch.events.unshift(`${minute}' Banco alerta sobre o cansaco de ${tired.name}. Uma substituicao pode preservar intensidade e reduzir risco fisico.`);
  }
}

function addPlayerMatchStat(club, playerId, key, amount) {
  const player = playerById(club, playerId);
  if (!player) return;
  player.stats = { apps: 0, goals: 0, assists: 0, shots: 0, saves: 0, cleanSheets: 0, goalsAgainst: 0, tackles: 0, passes: 0, minutes: 0, ratingSum: 0, ...(player.stats || {}) };
  player.stats[key] = (player.stats[key] || 0) + amount;
  if (key === "goals") player.goals = (player.goals || 0) + amount;
  if (key === "assists") player.assists = (player.assists || 0) + amount;
}

function lineupRatings(lineup, ratings = {}) {
  return lineup
    .map((player, index) => ({ id: player.id, name: player.name, slot: player.slot, slotIndex: player.slotIndex ?? index, rating: +(ratings[player.id] || 6.5).toFixed(2) }))
    .sort((a, b) => a.slotIndex - b.slotIndex);
}

function matchBestPlayer(lineup, ratings = {}) {
  return lineupRatings(lineup, ratings).sort((a, b) => b.rating - a.rating)[0] || { name: "-", slot: "-", rating: 0 };
}

async function quickSimMatch() {
  if (!isMatchDay()) return;
  if (matchSimRunning) return;
  if (!state.liveMatch && notifyUnavailableForMatch()) return;
  matchSimRunning = true;
  setMatchSimOverlay(true, "Preparando escalacoes e plano de jogo...");
  await uiPause(80);
  try {
    if (!state.liveMatch) startLiveMatch();
    if (!state.liveMatch) return;
    stopLiveTimer();
    while (state.liveMatch && state.liveMatch.minute < 90) {
      state.liveMatch.minute = Math.min(90, state.liveMatch.minute + rng(8, 14));
      setMatchSimOverlay(true, `${state.liveMatch.minute}' - simulando lances e estatisticas...`);
      playLiveSegment();
      await uiPause(70);
    }
    if (state.liveMatch) {
      setMatchSimOverlay(true, "Fechando sumula, notas e estatisticas...");
      await uiPause(80);
      finishLiveMatch();
      saveState();
      safeRender("A partida foi simulada, mas a tela de resumo encontrou um erro.");
    }
  } finally {
    matchSimRunning = false;
    setMatchSimOverlay(false);
  }
}

function finishLiveMatch() {
  stopLiveTimer();
  const match = state.liveMatch;
  const userClub = getUserClub();
  const opponent = state.clubs.find((club) => club.id === match.opponentId);
  const userLineup = currentLineup(userClub, match.tactics || state.tactics, match.lineupIds || state.lineupIds, match.lineupRoles || state.lineupRoles);
  const oppLineup = bestEleven(opponent, match.oppTactics);

  const isCup = match.type === "cup";
  const isLeague = match.type === "league";
  if (isCup && match.userGoals === match.oppGoals) {
    if (teamStrength(userClub, match.tactics).total + rng(-8, 8) >= teamStrength(opponent, match.oppTactics).total + rng(-8, 8)) match.userGoals += 1;
    else match.oppGoals += 1;
    match.events.unshift(`90+' Empate quebrado no desempate da copa. ${match.userGoals > match.oppGoals ? userClub.name : opponent.name} avanca.`);
  }
  if (isLeague) {
    if (match.userHome) applyResult(userClub, opponent, match.userGoals, match.oppGoals);
    else applyResult(opponent, userClub, match.oppGoals, match.userGoals);
  }
  recordFormationUsage(userClub, match.tactics || state.tactics);
  recordFormationUsage(opponent, match.oppTactics);
  if (isLeague) {
    applyTeamMatchStats(userClub, match.stats.userShots, match.stats.userPossession, match.stats.userTackles, match.stats.userXg);
    applyTeamMatchStats(opponent, match.stats.oppShots, match.stats.oppPossession, match.stats.oppTackles, match.stats.oppXg);
  }
  applyPlayerApps(userClub, userLineup, match.userGoals, match.oppGoals);
  applyPlayerApps(opponent, oppLineup, match.oppGoals, match.userGoals);
  processMatchSuspensions();
  processTransferBonuses(userClub);
  processTransferBonuses(opponent);
  if (isLeague) simulateOtherMatches(userClub.id, opponent.id);
  evolvePlayers(userClub, userLineup, match.userGoals, match.oppGoals);
  evolvePlayers(opponent, oppLineup, match.oppGoals, match.userGoals);
  simulateAiTransfers();
  updateTransferLists(false);

  const outcome = match.userGoals > match.oppGoals ? "vitoria" : match.userGoals === match.oppGoals ? "empate" : "derrota";
  userClub.squad.forEach((player) => {
    player.morale = clamp(player.morale + (outcome === "vitoria" ? 4 : outcome === "empate" ? 1 : -4), 25, 95);
  });

  state.lastReport = {
    title: match.userHome
      ? `${userClub.name} ${match.userGoals} x ${match.oppGoals} ${opponent.name}`
      : `${opponent.name} ${match.oppGoals} x ${match.userGoals} ${userClub.name}`,
    outcome,
    events: [...match.events].reverse(),
    stats: { ...match.stats },
    motm: matchBestPlayer([...userLineup, ...oppLineup], match.playerRatings),
    ratings: {
      user: lineupRatings(userLineup, match.playerRatings),
      opponent: lineupRatings(oppLineup, match.playerRatings)
    }
  };
  pushNews(newsForMatch(userClub, opponent, match.userGoals, match.oppGoals, outcome));
  if (isCup) {
    finishUserCupMatch(match, userClub, opponent);
  } else if (match.type === "extra") {
    finishUserExtraMatch(match, userClub, opponent);
  } else {
    state.round += 1;
    state.nextMatchDay = state.round <= state.maxRounds ? matchDayForRound(state.round) : 366;
    if (state.round > state.maxRounds) closeSeasonIfNeeded();
  }
  state.liveMatch = null;
  addIncomingOffers(generateOffers());
  state.market = generateMarket();
  if (state.round <= state.maxRounds) addNextMatchInbox();
  showTab("dashboard");
}

function finishUserCupMatch(match, userClub, opponent) {
  const cup = state.cup;
  if (!cup) return;
  const userGoals = match.userGoals;
  const oppGoals = match.oppGoals;
  const userWon = userGoals > oppGoals;
  const winner = userWon ? userClub : opponent;
  const loser = userWon ? opponent : userClub;
  winner.cup = { ...(winner.cup || {}), bestRound: Math.max(winner.cup?.bestRound || 0, (match.cupRoundIndex || 0) + 1), eliminated: false };
  loser.cup = { ...(loser.cup || {}), bestRound: Math.max(loser.cup?.bestRound || 0, match.cupRoundIndex || 0), eliminated: true };
  if ((match.cupRoundIndex || 0) >= 5) {
    cup.championId = winner.id;
    cup.runnerUpId = loser.id;
  }
  cup.pendingWinners.push(winner.id);
  cup.history.unshift({
    day: state.day,
    round: cupRoundName(match.cupRoundIndex || 0),
    homeName: match.homeName,
    awayName: match.awayName,
    homeGoals: match.userHome ? userGoals : oppGoals,
    awayGoals: match.userHome ? oppGoals : userGoals,
    winnerId: winner.id
  });
  if (!userWon) addInbox(`Eliminacao na ${cup.name || "Copa Nacional"}`, `${userClub.name} caiu na ${cupRoundName(match.cupRoundIndex || 0)}. A campanha ainda rendera premiacao de participacao ao fim da temporada.`, "jogo");
  cup.currentUserMatch = null;
  finishCupRound();
}

function finishUserExtraMatch(match, userClub, opponent) {
  const competition = (state.extraCompetitions || []).find((item) => item.id === match.competitionId);
  if (!competition) return;
  const fixture = (competition.userFixtures || []).find((item) => item.id === match.fixtureId);
  if (fixture) {
    fixture.played = true;
    fixture.result = {
      userGoals: match.userGoals,
      opponentGoals: match.oppGoals,
      homeGoals: match.userHome ? match.userGoals : match.oppGoals,
      awayGoals: match.userHome ? match.oppGoals : match.userGoals
    };
  }
  competition.history = competition.history || [];
  competition.history.unshift({
    day: state.day,
    round: match.roundLabel || match.round || "Rodada",
    homeName: match.homeName,
    awayName: match.awayName,
    homeGoals: match.userHome ? match.userGoals : match.oppGoals,
    awayGoals: match.userHome ? match.oppGoals : match.userGoals
  });
  addInbox(
    `Resultado na ${competition.name}`,
    `${match.homeName} ${match.userHome ? match.userGoals : match.oppGoals} x ${match.userHome ? match.oppGoals : match.userGoals} ${match.awayName}. O resultado foi registrado na campanha da competicao.`,
    "jogo"
  );
}

function applyTeamMatchStats(club, shots, possession, tackles, xg) {
  club.stats.shots = (club.stats.shots || 0) + shots;
  club.stats.possession = (club.stats.possession || 0) + possession;
  club.stats.tackles = (club.stats.tackles || 0) + tackles;
  club.stats.xg = +(club.stats.xg || 0) + xg;
}

function applyPlayerApps(club, lineup, goalsFor, goalsAgainst) {
  lineup.forEach((starter) => {
    const player = playerById(club, starter.id);
    if (!player) return;
    player.stats = { apps: 0, goals: 0, assists: 0, shots: 0, saves: 0, cleanSheets: 0, goalsAgainst: 0, tackles: 0, passes: 0, minutes: 0, ratingSum: 0, ...(player.stats || {}) };
    player.stats.apps += 1;
    player.stats.minutes += 90;
    player.stats.passes += Math.round(player.passing * 0.45 + rng(8, 28));
    player.stats.tackles += player.position === "GK" ? 0 : Math.max(0, Math.round(player.tackling / 30 + rng(0, 2)));
    if (player.position === "GK") {
      player.stats.goalsAgainst += goalsAgainst;
      if (goalsAgainst === 0) player.stats.cleanSheets += 1;
      player.stats.saves += Math.max(0, rng(1, 5) - goalsAgainst);
    }
    const liveRating = state.liveMatch?.playerRatings?.[player.id];
    const computedRating = matchRatingForPlayer(player, goalsFor, goalsAgainst);
    player.stats.ratingSum += liveRating || computedRating;
    const minutes = 90;
    const daysRest = state.day - (player.lastPlayedDay || -20);
    player.matchLoad = clamp(+((player.matchLoad || 0) + minutes / 1.35 + (player.condition < 75 ? 8 : 0)).toFixed(1), 0, 100);
    const drain = clamp(17 - player.stamina / 8 + (player.age > 31 ? 2.5 : 0) + (daysRest <= 4 ? 2 : 0), 7, 22);
    player.condition = clamp(+(Number(player.condition || 92) - drain).toFixed(1), 35, 100);
    if (Math.random() * 100 < injuryRisk(player, "jogo", minutes)) injurePlayer(player, club, "jogo");
    player.lastPlayedDay = state.day;
  });
}

function matchRatingForPlayer(player, goalsFor, goalsAgainst) {
  const stats = player.stats || {};
  let rating = 6.55 + (goalsFor - goalsAgainst) * 0.08 + (player.form - 65) * 0.01;
  if (player.position === "GK") {
    rating += Math.min(1.2, (stats.saves || 0) * 0.16);
    rating += goalsAgainst === 0 ? 0.42 : -Math.min(0.9, goalsAgainst * 0.18);
  } else {
    rating += (stats.goals || 0) * 0.62;
    rating += (stats.assists || 0) * 0.38;
    rating += Math.min(0.45, (stats.tackles || 0) * 0.04);
    rating += Math.min(0.35, (stats.passes || 0) / 260);
    rating += Math.min(0.3, (stats.shots || 0) * 0.04);
  }
  rating -= (100 - fitnessQuotient(player)) * 0.006;
  return clamp(+rating.toFixed(2), 5.2, 9.8);
}

function processTransferBonuses(club) {
  club.squad.forEach((player) => {
    if (!Array.isArray(player.transferBonuses) || !player.transferBonuses.length) return;
    player.transferBonuses.forEach((clause) => {
      if (clause.paid) return;
      const current = player.stats?.[clause.metric] || 0;
      if (current < clause.threshold) return;
      const recipient = state.clubs.find((item) => item.id === clause.owedToId);
      if (!recipient || club.budget < clause.fee) return;
      club.budget = +(club.budget - clause.fee).toFixed(1);
      recipient.budget = +(recipient.budget + clause.fee).toFixed(1);
      clause.paid = true;
      addInbox("Bonus de transferencia pago", `${player.name} bateu a meta de ${clause.threshold} ${clause.label}. ${club.name} pagou ${money(clause.fee)} ao ${recipient.name}.`, "mercado");
      recordTransfer(player, club, recipient, clause.fee, `Bonus: ${clause.label}`);
    });
  });
}

function applyResult(home, away, homeGoals, awayGoals) {
  home.stats.played += 1;
  away.stats.played += 1;
  home.stats.gf += homeGoals;
  home.stats.ga += awayGoals;
  away.stats.gf += awayGoals;
  away.stats.ga += homeGoals;

  if (homeGoals > awayGoals) {
    home.stats.wins += 1;
    away.stats.losses += 1;
    home.stats.points += 3;
  } else if (homeGoals < awayGoals) {
    away.stats.wins += 1;
    home.stats.losses += 1;
    away.stats.points += 3;
  } else {
    home.stats.draws += 1;
    away.stats.draws += 1;
    home.stats.points += 1;
    away.stats.points += 1;
  }
}

function simulateOtherMatches(skipA, skipB) {
  const fixtures = activeDivisionNumbers().flatMap((division) => leagueFixturesForRound(state.round, division))
    .filter((fixture) => ![fixture.home.id, fixture.away.id].some((id) => id === skipA || id === skipB));
  fixtures.forEach((fixture) => {
    const { home, away } = fixture;
    const homeTactics = aiTactics(home);
    const awayTactics = aiTactics(away);
    const homePower = teamStrength(home, homeTactics);
    const awayPower = teamStrength(away, awayTactics);
    const homeMatchup = tacticalMatchup(homePower, homeTactics, awayPower, awayTactics);
    const awayMatchup = tacticalMatchup(awayPower, awayTactics, homePower, homeTactics);
    const hg = goalsFromXg(expectedGoals(homePower, awayPower, stadiumHomeBonus(home), homeMatchup - awayMatchup));
    const ag = goalsFromXg(expectedGoals(awayPower, homePower, -0.75, awayMatchup - homeMatchup));
    applyResult(home, away, hg, ag);
    recordFormationUsage(home, homeTactics);
    recordFormationUsage(away, awayTactics);
    applyTeamMatchStats(home, rng(6, 15), rng(43, 58), rng(9, 20), +(hg * 0.55 + Math.random()).toFixed(2));
    applyTeamMatchStats(away, rng(5, 14), rng(42, 57), rng(9, 20), +(ag * 0.55 + Math.random()).toFixed(2));
    simulateAiDiscipline(home, homeTactics);
    simulateAiDiscipline(away, awayTactics);
  });
}

function simulateAiDiscipline(club, tactics) {
  const lineup = bestEleven(club, tactics).filter((player) => player.slot !== "GK");
  const yellows = rng(0, tactics.defenseStyle === "Pressao alta" ? 4 : 3);
  for (let index = 0; index < yellows; index += 1) {
    const player = lineup[rng(0, lineup.length - 1)];
    if (!player) continue;
    player.yellowCards = (player.yellowCards || 0) + 1;
    if (player.yellowCards >= yellowCardQuota) {
      player.yellowCards = 0;
      player.suspension = { matches: 1, reason: "acumulo de amarelos", startedDay: state.day };
    }
  }
  if (rng(1, 100) <= 7) {
    const player = lineup[rng(0, lineup.length - 1)];
    if (player) {
      player.redCards = (player.redCards || 0) + 1;
      player.suspension = { matches: rng(1, 100) <= 20 ? 2 : 1, reason: "cartao vermelho", startedDay: state.day };
    }
  }
}

function evolvePlayers(club, lineup, goalsFor, goalsAgainst) {
  const development = facilityMultiplier(club.facilities?.training || 3);
  club.squad.forEach((player) => {
    const starter = lineup.find((item) => item.id === player.id);
    const played = Boolean(starter);
    const ageCurve = player.age < 22 ? 0.22 : player.age < 27 ? 0.11 : player.age < 31 ? 0.02 : -0.08;
    const performance = played ? (goalsFor - goalsAgainst) * 0.04 + (player.form - 65) * 0.006 : -0.03;
    const potentialRoom = Math.max(0, player.potential - player.rating) * 0.015;
    const delta = clamp((ageCurve + performance + potentialRoom + (Math.random() - 0.42) * 0.24) * development, -0.35, 0.65);
    player.lastDelta = +delta.toFixed(2);
    player.rating = clamp(+(player.rating + delta).toFixed(1), 35, player.potential);
    player.form = clamp(player.form + (played ? rng(-4, 7) : rng(-5, 2)) + (goalsFor > goalsAgainst ? 2 : -1), 25, 95);
    player.happiness = clamp(player.happiness + (played ? 2 : -2), 20, 96);
    if (player.age > 30) player.pace = clamp(player.pace - 0.05, 30, 95);
    applyTraining(player, starter, club);
    if (state.day - (player.lastValueUpdateDay || 0) >= 14 || Math.abs(player.lastDelta || 0) >= 0.5) {
      player.value = calculatePlayerValue(player, club.reputation);
      player.wage = calculatePlayerWage(player);
      player.valueEconomyVersion = economyVersion;
      player.lastValueUpdateDay = state.day;
    }
  });
}

function applyTraining(player, starter, club = null) {
  if (isInjured(player)) return;
  const development = facilityMultiplier(club?.facilities?.training || 3);
  const training = player.training || { attr: "automatic", position: player.position, role: defaultRoleForSlot(player.position) };
  player.training = training;
  const room = Math.max(0, player.potential - player.rating);
  const attr = training.attr === "automatic" ? bestTrainingAttrForRole(training.role || defaultRoleForSlot(training.position || player.position)) : training.attr;
  if (attr && player[attr] !== undefined && room > 0) {
    const gain = (player.age < 23 ? 0.22 : player.age < 28 ? 0.14 : 0.07) * development;
    player[attr] = clamp(+(player[attr] + gain).toFixed(1), 10, 99);
  }

  const targetPos = training.position || player.position;
  const targetRole = training.role || defaultRoleForSlot(targetPos);
  player.positionExp[targetPos] = clamp((player.positionExp[targetPos] || 0) + trainingAdaptGain(player.position, targetPos, player) * development, 0, 100);
  player.roleExp[targetRole] = clamp((player.roleExp[targetRole] || 0) + roleTrainingGain(player, targetRole) * development, 0, 100);
  promoteTrainedPosition(player, targetPos);

  if (starter) {
    player.positionExp[starter.slot] = clamp((player.positionExp[starter.slot] || 0) + trainingAdaptGain(player.position, starter.slot, player) * 0.8 * development, 0, 100);
    player.roleExp[starter.role] = clamp((player.roleExp[starter.role] || 0) + roleTrainingGain(player, starter.role) * 0.8 * development, 0, 100);
    promoteTrainedPosition(player, starter.slot);
  }
}

function bestTrainingAttrForRole(role) {
  const weights = roleWeights[role] || {};
  return Object.entries(weights).sort((a, b) => b[1] - a[1])[0]?.[0] || "passing";
}

function trainingAdaptGain(origin, target, player) {
  const fit = fitLevel(origin, target);
  const attrSupport = roleBaseScore({ ...player, position: target }, target) >= player.rating - 4 ? 1.15 : 0.85;
  return +(clamp(0.35 + fit * 1.15, 0.15, 1.65) * attrSupport).toFixed(2);
}

function roleTrainingGain(player, role) {
  const weights = roleWeights[role] || {};
  const weighted = Object.entries(weights).reduce((sum, [attr, weight]) => sum + (player[attr] || player.rating || 50) * weight, 0);
  return weighted >= player.rating - 3 ? 1.2 : 0.65;
}

function newsForMatch(userClub, opponent, userGoals, oppGoals, outcome) {
  if (outcome === "vitoria") return `${userClub.name} vence ${opponent.name} por ${userGoals} x ${oppGoals} e ganha moral no vestiario.`;
  if (outcome === "empate") return `${userClub.name} empata com ${opponent.name}; a imprensa destaca equilibrio tatico.`;
  return `${userClub.name} perde para ${opponent.name}; diretoria cobra resposta na proxima rodada.`;
}

function pushNews(item) {
  state.news.unshift(item);
  state.news = state.news.slice(0, 8);
}

function standings(division = userDivision()) {
  return [...clubsInDivision(division)].sort((a, b) => {
    const gdA = a.stats.gf - a.stats.ga;
    const gdB = b.stats.gf - b.stats.ga;
    return b.stats.points - a.stats.points || gdB - gdA || b.stats.gf - a.stats.gf || b.reputation - a.reputation;
  });
}

function leaguePrizeFor(position, division) {
  const customDivision = (state.databaseDivisions || []).find((item) => Number(item.id) === Number(division) || Number(item.level) === Number(division));
  const customPrizes = customDivision?.prizes || customDivision?.prizeMoney || state.databaseFinance?.leaguePrizes?.[division];
  if (Array.isArray(customPrizes) && customPrizes.length) {
    return +(Number(customPrizes[position - 1] ?? customPrizes[customPrizes.length - 1] ?? 0) || 0).toFixed(2);
  }
  if (customPrizes?.champion !== undefined || customPrizes?.floor !== undefined) {
    const total = clubsInDivision(division).length || 20;
    const t = (total - position) / Math.max(1, total - 1);
    return +(Number(customPrizes.floor || 0) + (Number(customPrizes.champion || 0) - Number(customPrizes.floor || 0)) * Math.pow(t, Number(customPrizes.curve || 1.25))).toFixed(2);
  }
  const pool = leaguePrizePools[division] || leaguePrizePools[2];
  const total = clubsInDivision(division).length || 20;
  const t = (total - position) / Math.max(1, total - 1);
  return +(pool.floor + (pool.champion - pool.floor) * Math.pow(t, 1.25)).toFixed(2);
}

function cupPrizeForClub(club) {
  const prizeTable = Array.isArray(state.cup?.prizes) && state.cup.prizes.length ? state.cup.prizes : cupPrizeByRound;
  const round = clamp(Number(club.cup?.bestRound || 0), 0, prizeTable.length - 1);
  let prize = Number(prizeTable[round]) || 0;
  if (state.cup?.championId === club.id) prize = Number(prizeTable[prizeTable.length - 1]) || prize;
  else if (state.cup?.runnerUpId === club.id) prize = Number(state.cup?.config?.runnerUpPrize ?? 5.2);
  return +prize.toFixed(2);
}

function seasonRevenueFor(club, leaguePosition, division, leaguePrize, cupPrize) {
  const brand = clamp((club.reputation - 45) * 0.14, 0.6, 6.5);
  const stadium = clamp((club.facilities?.stadium || 3) * 0.75, 0.8, 4.2);
  const marketing = clamp((21 - leaguePosition) * (division === 1 ? 0.28 : 0.12), 0.4, division === 1 ? 5.2 : 2.4);
  const achievement = leaguePrize * 0.18 + cupPrize * 0.22 + (division === 1 ? 1.2 : 0.45);
  return +clamp(brand + stadium + marketing + achievement, division === 1 ? 3.5 : 1.4, division === 1 ? 18 : 8.5).toFixed(2);
}

function coachPerformanceScore(club, position, division) {
  const expected = clamp(Math.round(22 - (club.reputation - (division === 1 ? 52 : 42)) / 2.6), 2, 18);
  const leagueOver = expected - position;
  const cupLift = Math.max(0, (club.cup?.bestRound || 0) - 2) * 1.6;
  const promotionLift = division === 2 && position <= promotionSlots ? 7 : 0;
  const survivalLift = division === 1 && position <= 16 ? 2 : -4;
  return clamp(50 + leagueOver * 4 + cupLift + promotionLift + survivalLift, 5, 95);
}

function updateCoachCareer(userClub, position, division) {
  const coach = state.coach || initialCoachProfile(userClub, state.gameMode || "free");
  const performance = coachPerformanceScore(userClub, position, division);
  const room = Math.max(0, 100 - coach.reputation);
  const repGain = clamp((performance - 52) / 9 + (division === 1 ? 0.5 : 0.2), -4.5, room > 20 ? 8 : 3.5);
  const expGain = clamp(4 + performance / 18, 3, 9);
  coach.reputation = clamp(+(coach.reputation + repGain).toFixed(1), 1, 99);
  coach.experience = clamp(+(coach.experience + expGain).toFixed(1), 1, 99);
  coach.seasons = (coach.seasons || 0) + 1;
  coach.lastPerformance = +performance.toFixed(1);
  coach.history = [
    { season: coach.seasons, clubId: userClub.id, clubName: userClub.name, division, position, performance: coach.lastPerformance, reputation: coach.reputation, experience: coach.experience },
    ...(coach.history || [])
  ].slice(0, 12);
  state.coach = coach;
  return coach;
}

function jobOfferPool() {
  const coach = state.coach || { reputation: 10, experience: 10 };
  const currentId = state.userClubId;
  const pull = coach.reputation * 0.68 + coach.experience * 0.32;
  return state.clubs
    .filter((club) => club.id !== currentId)
    .map((club) => {
      const ambitionGap = club.reputation - pull;
      const divisionBoost = clubDivision(club) === 1 ? 7 : -4;
      const projectFit = 70 - Math.abs(ambitionGap) * 1.7 + divisionBoost + rng(-10, 10);
      return { club, score: projectFit };
    })
    .filter((item) => item.score >= 32)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

function generateJobOffers() {
  const pool = jobOfferPool();
  if (!pool.length) return [];
  const amount = clamp(rng(1, Math.min(3, pool.length)), 1, 3);
  return pool
    .sort(() => Math.random() - 0.5)
    .slice(0, amount)
    .map(({ club }) => ({
      id: makeId(),
      clubId: club.id,
      clubName: club.name,
      division: clubDivision(club),
      reputation: club.reputation,
      budget: club.budget,
      expiresDay: state.day + 14
    }));
}

function addJobOfferInbox(offers) {
  if (!offers.length) {
    addInbox("Mercado de treinadores", "Nenhum clube fez proposta formal desta vez. Sua diretoria entende que a continuidade tambem pode fortalecer seu projeto.", "carreira");
    return;
  }
  state.jobOffers = offers;
  const coach = state.coach || {};
  addInbox(
    "Propostas para trocar de clube",
    `Sua reputacao como treinador esta em ${fmt(coach.reputation || 0)} e experiencia em ${fmt(coach.experience || 0)}. Voce recebeu ${offers.length} proposta${offers.length > 1 ? "s" : ""}; aceitar uma delas muda seu clube para a proxima temporada.`,
    "carreira",
    offers.map((offer) => ({ label: `Aceitar ${offer.clubName}`, action: "acceptJob", offerId: offer.id })).concat([{ label: "Ficar no clube", action: "declineJobs" }])
  );
}

function prepareNextSeason() {
  state.round = 1;
  state.maxRounds = maxRoundsForDivision(userDivision());
  state.day = 1;
  state.nextMatchDay = matchDayForRound(1);
  state.calendarMonth = 0;
  state.seasonClosed = false;
  state.cup = createCupState(state.clubs, primaryCupConfig(state.databaseCompetitions || {}));
  state.extraCompetitions = createExtraCompetitions(state.clubs, state.databaseCompetitions || {}, state.userClubId);
  state.transferWindowNotices = {};
  state.pendingProposals = [];
  state.offers = [];
  state.liveMatch = null;
  state.lastReport = null;
  state.clubs.forEach((club) => {
    club.stats = baseClubStats();
    club.cup = { bestRound: 0, eliminated: false };
    club.squad.forEach((player) => {
      player.yellowCards = 0;
      player.redCards = 0;
      player.suspension = null;
      player.condition = Math.max(player.condition || 92, 88);
      player.matchLoad = 0;
      player.lastPlayedDay = -20;
      player.stats = { apps: 0, goals: 0, assists: 0, shots: 0, saves: 0, cleanSheets: 0, goalsAgainst: 0, tackles: 0, passes: 0, minutes: 0, ratingSum: 0 };
    });
  });
  resetLineup(true);
  updateTransferLists(false);
  state.market = generateMarket();
  addInbox("Nova temporada preparada", `${divisionLabel(userDivision())} comecou novamente. A janela de Janeiro esta aberta e o calendario foi reiniciado.`, "geral");
  addInbox("Janela de transferencias aberta", `A Janela de Janeiro abriu em ${dateShort(1)} e vai ate ${dateShort(31)}. Contratacoes fechadas agora chegam imediatamente.`, "mercado");
  state.transferWindowNotices["jan-open"] = true;
  addNextMatchInbox();
}

function acceptJobOffer(offerId) {
  const offer = (state.jobOffers || []).find((item) => item.id === offerId);
  const target = offer ? state.clubs.find((club) => club.id === offer.clubId) : null;
  if (!target) return;
  const oldClub = getUserClub();
  state.userClubId = target.id;
  state.selectedClubId = target.id;
  state.tactics = { formation: "4-3-3", mentality: "Equilibrada", attackStyle: "Explorar pontas", defenseStyle: "Bloco medio" };
  state.customFormation = [...formations["4-3-3"]];
  state.customSlotCoords = defaultCustomCoords(state.customFormation);
  state.lineupIds = [];
  state.lineupRoles = [];
  state.benchIds = [];
  state.jobOffers = [];
  resetLineup(true);
  addInbox("Novo clube assumido", `Voce deixou ${oldClub.name} e assinou com ${target.name}. A diretoria espera que sua reputacao ajude o projeto a crescer.`, "carreira");
  prepareNextSeason();
  saveState();
  render();
}

function declineJobOffers() {
  state.jobOffers = [];
  addInbox("Continuidade confirmada", `Voce decidiu permanecer no ${getUserClub().name}. A diretoria valoriza a estabilidade do projeto.`, "carreira");
  prepareNextSeason();
  saveState();
  render();
}

function closeSeasonIfNeeded() {
  if (state.seasonClosed || state.round <= state.maxRounds) return;
  if (state.cup && !state.cup.finished && !state.cup.currentUserMatch) {
    while (state.cup && !state.cup.finished && state.cup.roundIndex < cupRoundDays.length) {
      state.day = Math.max(state.day, cupRoundDays[state.cup.roundIndex]);
      prepareCupRoundIfDue();
      if (state.cup.currentUserMatch) break;
    }
  }
  if (state.cup?.currentUserMatch) return;
  if (state.cup?.history?.[0] && !state.cup.runnerUpId) {
    const final = state.cup.history.find((item) => item.round === "Final");
    if (final) {
      state.cup.championId = final.winnerId;
      const home = state.clubs.find((club) => club.name === final.homeName);
      const away = state.clubs.find((club) => club.name === final.awayName);
      state.cup.runnerUpId = [home?.id, away?.id].find((id) => id && id !== final.winnerId) || null;
    }
  }
  const divisions = activeDivisionNumbers();
  divisions.forEach((division) => {
    standings(division).forEach((club, index) => {
      const position = index + 1;
      const leaguePrize = leaguePrizeFor(position, division);
      const cupPrize = cupPrizeForClub(club);
      const revenue = seasonRevenueFor(club, position, division, leaguePrize, cupPrize);
      const total = +(leaguePrize + cupPrize + revenue).toFixed(2);
      club.budget = +(club.budget + total).toFixed(2);
      club.finance = { lastPrize: +(leaguePrize + cupPrize).toFixed(2), lastRevenue: revenue, lastSeasonTotal: total, lastPosition: position, lastDivision: division };
    });
  });
  const movement = [];
  divisions.slice(0, -1).forEach((division, index) => {
    const lowerDivision = divisions[index + 1];
    const relegated = standings(division).slice(-promotionSlots);
    const promoted = standings(lowerDivision).slice(0, promotionSlots);
    movement.push({ division, lowerDivision, relegated, promoted });
  });
  movement.forEach((item) => {
    item.relegated.forEach((club) => { club.division = item.lowerDivision; });
    item.promoted.forEach((club) => { club.division = item.division; });
  });
  const userClub = getUserClub();
  const userFinance = userClub.finance || {};
  const userDivisionBeforeMove = userFinance.lastDivision || clubDivision(userClub);
  const coach = updateCoachCareer(userClub, userFinance.lastPosition || 20, userDivisionBeforeMove);
  state.seasonClosed = true;
  addInbox(
    "Fechamento financeiro da temporada",
    `${userClub.name} recebeu ${money(userFinance.lastSeasonTotal || 0)} para a proxima temporada: premios ${money(userFinance.lastPrize || 0)} e receitas comerciais/estadio ${money(userFinance.lastRevenue || 0)}. ${movement.map((item) => `${item.promoted.map((club) => club.name).join(", ")} subiram para ${divisionLabel(item.division)}; ${item.relegated.map((club) => club.name).join(", ")} cairam para ${divisionLabel(item.lowerDivision)}`).join(" ")}`,
    "financeiro"
  );
  addInbox("Perfil do treinador atualizado", `Temporada avaliada: desempenho ${fmt(coach.lastPerformance)}. Sua reputacao agora e ${fmt(coach.reputation)} e sua experiencia e ${fmt(coach.experience)}.`, "carreira");
  addJobOfferInbox(generateJobOffers());
  saveState();
}

function activeMarket() {
  const query = document.querySelector("#marketSearch")?.value.toLowerCase().trim() || "";
  const pos = document.querySelector("#positionFilter")?.value || "all";
  const mode = document.querySelector("#affordFilter")?.value || "all";
  const club = getUserClub();
  return marketFilterList(state.market, { query, pos, mode, club });
}

function limitedCacheSet(cache, key, value, limit = 24) {
  if (cache.has(key)) cache.delete(key);
  cache.set(key, value);
  while (cache.size > limit) cache.delete(cache.keys().next().value);
}

function marketFilterList(list, { query = "", pos = "all", mode = "all", club = getUserClub() } = {}) {
  const normalizedQuery = String(query || "").toLowerCase().trim();
  return list.filter((item) => {
    const textMatch = !normalizedQuery || `${item.name} ${item.sourceClub} ${nationalityText(item)}`.toLowerCase().includes(normalizedQuery);
    const posMatch = pos === "all" || positionFit(item, pos) >= 0.7;
    const modeMatch =
      mode === "all" ||
      (mode === "transfer" && item.listStatus === "transfer") ||
      (mode === "loan" && item.listStatus === "loan") ||
      (mode === "affordable" && item.askingPrice <= club.budget) ||
      (mode === "starter" && item.rating >= teamStrength(club, state.tactics).total - 3) ||
      (mode === "young" && item.age <= 23 && item.potential - item.rating >= 6);
    return textMatch && posMatch && modeMatch;
  });
}

function externalMarketCardsKey() {
  const rosterShape = state.clubs
    .map((club) => `${club.id}:${club.squad.length}:${club.squad.filter((player) => player.pendingTransfer || player.loan).length}`)
    .join("|");
  const marketShape = (state.market || [])
    .map((item) => `${item.playerId}:${item.clubId}:${item.listStatus}:${Math.round(item.askingPrice || 0)}`)
    .join("|");
  return [
    state.userClubId,
    state.day,
    rosterShape,
    (state.freeAgents || []).length,
    marketShape
  ].join("::");
}

function allExternalMarketCards() {
  const cacheKey = externalMarketCardsKey();
  if (externalMarketCardsCache.key === cacheKey) return externalMarketCardsCache.cards;
  const userClub = getUserClub();
  const clubCards = state.clubs
    .filter((club) => club.id !== userClub.id)
    .flatMap((club) => club.squad
      .filter((player) => !player.loan && !player.pendingTransfer)
      .map((player) => marketCard(player, club)));
  const free = (state.freeAgents || []).map((player) => freeAgentCard(player));
  const seen = new Set();
  const cards = [...clubCards, ...free].filter((item) => {
    const key = `${item.playerId}-${item.clubId}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  externalMarketCardsCache = { key: cacheKey, cards };
  return cards;
}

function advancedMarketResults() {
  if (!state.marketSearchPerformed) return [];
  const query = document.querySelector("#marketAdvancedName")?.value.toLowerCase().trim() || "";
  const pos = document.querySelector("#marketSearchPosition")?.value || "all";
  const maxValue = parseMoneyInput(document.querySelector("#marketMaxValue")?.value || "");
  const minRating = Number(document.querySelector("#marketMinRating")?.value || 0);
  const maxRating = Number(document.querySelector("#marketMaxRating")?.value || 0);
  const ageMode = document.querySelector("#marketSearchAge")?.value || "all";
  return allExternalMarketCards().filter((item) => {
    const textMatch = !query || `${item.name} ${item.sourceClub} ${nationalityText(item)}`.toLowerCase().includes(query);
    const posMatch = pos === "all" || positionFit(item, pos) >= 0.7;
    const valueMatch = !maxValue || item.value <= maxValue || item.askingPrice <= maxValue;
    const minMatch = !minRating || item.rating >= minRating;
    const maxMatch = !maxRating || item.rating <= maxRating;
    const ageMatch = ageMode === "all"
      || (ageMode === "u21" && item.age <= 21)
      || (ageMode === "u24" && item.age <= 24)
      || (ageMode === "prime" && item.age >= 24 && item.age <= 29)
      || (ageMode === "experienced" && item.age >= 30);
    return textMatch && posMatch && valueMatch && minMatch && maxMatch && ageMatch;
  }).sort((a, b) => b.rating - a.rating);
}

function marketPlayersForView() {
  const view = state.marketPlayerSubTab || "listed";
  if (view === "listed") return activeMarket();
  if (view === "scouted") {
    const hasScoutData = Object.values(state.scouting || {}).some((item) => Number(item?.level || item || 0) > 0);
    if (!hasScoutData && !(state.scoutingJobs || []).length) return [];
    const cards = allExternalMarketCards().filter((item) => scoutLevel(item.playerId, item.clubId) > 0 || activeScoutJob(item.playerId));
    return marketFilterList(cards, {
      query: document.querySelector("#marketSearch")?.value || "",
      pos: document.querySelector("#positionFilter")?.value || "all",
      mode: document.querySelector("#affordFilter")?.value || "all"
    });
  }
  if (view === "interest") {
    const wanted = new Set(state.marketInterestList || []);
    if (!wanted.size) return [];
    const cards = allExternalMarketCards().filter((item) => wanted.has(item.playerId));
    return marketFilterList(cards, {
      query: document.querySelector("#marketSearch")?.value || "",
      pos: document.querySelector("#positionFilter")?.value || "all",
      mode: document.querySelector("#affordFilter")?.value || "all"
    });
  }
  return advancedMarketResults();
}

function scoutLevel(playerId, clubId = "") {
  if (clubId && clubId === state.userClubId) return 2;
  const baseLevel = state.scouting?.[playerId]?.level || 0;
  const job = activeScoutJob(playerId);
  if (!job) return baseLevel;
  const total = Math.max(1, job.completeDay - job.startDay);
  const progress = clamp((state.day - job.startDay) / total, 0, 0.98);
  return Math.max(baseLevel, +(job.targetLevel * progress).toFixed(2));
}

function activeScoutJob(playerId) {
  return (state.scoutingJobs || []).find((job) => job.playerId === playerId);
}

function scoutingDuration(player, club, nextLevel) {
  const visibility = player.rating * 0.58 + player.potential * 0.18 + club.reputation * 0.24;
  const obscurity = clamp(92 - visibility, 0, 28);
  const completion = nextLevel >= 2 ? 5 : 0;
  return clamp(Math.round(7 + obscurity + completion + rng(-2, 3)), 7, 30);
}

function scoutText(value, level, digits = 0) {
  if (level >= 2) return digits ? fmt(value, digits) : String(Math.round(value));
  if (level >= 1) return `~${Math.round(value / 5) * 5}`;
  const low = Math.floor(value / 5) * 5;
  return `${low}-${low + 5}`;
}

function scoutedAttributes(player, level) {
  if (!level) return `<div class="scout-locked">Atributos ocultos. Observe o jogador para liberar o relatorio.</div>`;
  const value = (attr) => scoutText(player[attr], level);
  const attrs = player.position === "GK"
    ? [["REF", "reflexes"], ["MAN", "handling"], ["POS", "positioningGk"], ["1x1", "oneOnOne"], ["DIS", "distribution"], ["AER", "aerial"]]
    : [["VEL", "pace"], ["PAS", "passing"], ["DRI", "dribbling"], ["FIN", "finishing"], ["DES", "tackling"], ["VIS", "vision"]];
  const visibleCount = level >= 2 ? attrs.length : level >= 1 ? 4 : Math.max(1, Math.floor(level * 4));
  const visible = attrs.slice(0, visibleCount);
  return `
    <div class="player-attributes">
      ${visible.map(([label, attr]) => attribute(label, value(attr))).join("")}
      ${attrs.slice(visibleCount).map(([label]) => attribute(label, "?")).join("")}
    </div>
  `;
}

function scoutButton(playerId, level) {
  if (level >= 2) return `<span class="pill">relatorio completo</span>`;
  const job = activeScoutJob(playerId);
  if (job) {
    const total = Math.max(1, job.completeDay - job.startDay);
    const progress = Math.round(clamp((state.day - job.startDay) / total, 0, 1) * 100);
    return `<span class="pill">observando: ${progress}% / ${Math.max(0, job.completeDay - state.day)}d</span>`;
  }
  return `<button class="secondary-action small-action" data-scout-player="${playerId}">Observar</button>`;
}

function scoutPlayer(playerId) {
  if (activeScoutJob(playerId)) return;
  const club = state.clubs.find((item) => item.squad.some((player) => player.id === playerId));
  const player = club ? playerById(club, playerId) : null;
  if (!club || !player || club.id === state.userClubId) return;
  const current = state.scouting?.[playerId]?.level || 0;
  const targetLevel = 2;
  if (current >= 2) return;
  const days = scoutingDuration(player, club, targetLevel);
  state.scoutingJobs.push({
    id: makeId(),
    playerId,
    playerName: player.name,
    clubId: club.id,
    targetLevel,
    startDay: state.day,
    completeDay: state.day + days
  });
  pushNews(`Observacao iniciada: ${player.name}. Relatorio em ${days} dias.`);
  saveState();
  render();
}

function processScoutingJobs() {
  state.scoutingJobs = state.scoutingJobs || [];
  const completed = state.scoutingJobs.filter((job) => job.completeDay <= state.day);
  completed.forEach((job) => {
    const current = state.scouting?.[job.playerId]?.level || 0;
    state.scouting[job.playerId] = { level: Math.max(current, job.targetLevel), updatedDay: state.day };
    pushNews(`Relatorio de observacao pronto: ${job.playerName}.`);
    addInbox("Observacao concluida", `O relatorio de ${job.playerName} esta completo. Os atributos agora estao liberados no mercado/perfil do clube.`, "observacao");
  });
  state.scoutingJobs = state.scoutingJobs.filter((job) => job.completeDay > state.day);
}

function renderClubSelect() {
  const root = document.querySelector("#clubCards");
  const select = document.querySelector("#clubSelectDivision");
  if (select) {
    select.disabled = selectedGameMode === "zero";
    select.setAttribute("aria-label", "Selecionar divisao");
    const divisions = [...new Set(activeClubs().map((club) => Number(club.division || 1)))].sort((a, b) => a - b);
    select.innerHTML = divisions.map((division) => `<option value="${division}" ${division === clubSelectDivision ? "selected" : ""}>${divisionLabel(division)}</option>`).join("");
  }
  const zeroIds = weakestSecondDivisionClubIds();
  const visibleClubs = activeClubs().filter((club) => selectedGameMode === "zero"
    ? zeroIds.includes(club.id)
    : Number(club.division || 1) === clubSelectDivision);
  root.innerHTML = visibleClubs.map((club) => `
    <button class="club-card" data-club="${club.id}" style="border-top: 5px solid ${club.color}">
      <div class="club-card-head">
        ${clubLogo(club, "normal")}
        <strong>${club.name}</strong>
      </div>
      <p>${club.style}</p>
      <div class="club-meta">
        <span class="pill">${divisionLabel(club.division || 1)}</span>
        <span class="pill">rep ${club.reputation}</span>
        <span class="pill">${money(club.budget)}</span>
      </div>
    </button>
  `).join("");
}

function renderMainMenu() {
  const list = document.querySelector("#saveSlots");
  if (!list) return;
  const storedRecent = Number(localStorage.getItem(recentSaveKey) || 0);
  const recent = rawSaveForSlot(storedRecent) ? storedRecent : [1, 2, 3].find((slot) => rawSaveForSlot(slot)) || 0;
  const recentButton = document.querySelector("#loadRecentBtn");
  if (recentButton) recentButton.disabled = !recent || !rawSaveForSlot(recent);
  list.innerHTML = [1, 2, 3].map((slot) => {
    const summary = saveSummary(slot);
    return `
      <article class="save-slot ${summary ? "" : "empty-save"}">
        <div>
          <span class="pill">Slot ${slot}${recent === slot ? " - recente" : ""}</span>
          <h3>${summary ? summary.clubName : "Vazio"}</h3>
          <p>${summary ? `${summary.mode} - ${summary.databaseName} - Rod. ${summary.round} - dia ${summary.day} - rep treinador ${fmt(summary.coachRep)}` : "Nenhum save neste slot."}</p>
        </div>
        <div class="action-row">
          <button class="buy-button small-action" data-load-slot="${slot}" ${summary ? "" : "disabled"}>Carregar</button>
          <button class="reject-button small-action" data-delete-slot="${slot}" ${summary ? "" : "disabled"}>Excluir</button>
        </div>
      </article>
    `;
  }).join("");
}

function render() {
  if (!state) {
    document.querySelector("#mainMenu").classList.toggle("hidden", menuScreen !== "menu");
    document.querySelector("#modeSelect").classList.toggle("hidden", menuScreen !== "mode");
    document.querySelector("#clubSelect").classList.toggle("hidden", menuScreen !== "club");
    document.querySelector("#gameView").classList.add("hidden");
    setDatabaseStatus();
    renderMainMenu();
    updateInstallButton();
    if (menuScreen === "club") renderClubSelect();
    return;
  }

  currentLineup();
  const club = getUserClub();
  const rank = standings().findIndex((item) => item.id === club.id) + 1;
  const displayPower = state.liveMatch
    ? teamStrength(club, state.liveMatch.tactics, currentLineup(club, state.liveMatch.tactics, state.liveMatch.lineupIds))
    : teamStrength(club, state.tactics);
  document.querySelector("#modeSelect").classList.add("hidden");
  document.querySelector("#mainMenu").classList.add("hidden");
  document.querySelector("#clubSelect").classList.add("hidden");
  document.querySelector("#gameView").classList.remove("hidden");
  document.querySelector("#clubName").textContent = club.name;
  document.querySelector("#clubLogoTop").innerHTML = clubLogo(club, "large");
  const coach = state.coach || {};
  document.querySelector("#coachMeta").textContent = `Treinador: rep ${fmt(coach.reputation || 0)} / exp ${fmt(coach.experience || 0)} - ${state.gameMode === "zero" ? "carreira do zero" : "modo livre"}`;
  const activeTab = document.querySelector(".tab.active")?.dataset.tab || document.querySelector(".tab-panel.active")?.id?.replace("Tab", "") || "dashboard";
  document.querySelector(".layout").classList.toggle("match-mode", Boolean(state.liveMatch));
  document.querySelector(".layout").classList.toggle("wide-mode", activeTab !== "dashboard" && !state.liveMatch);
  const nextFixture = nextUserFixture();
  document.querySelector("#seasonMeta").textContent = state.round > state.maxRounds ? `temporada ${seasonStartYear} encerrada` : `${dateFull()} - ${divisionLabel(userDivision())} ${state.round}/${state.maxRounds}`;
  document.querySelector("#calendarMeta").textContent = !nextFixture ? `temporada ${seasonStartYear} encerrada` : `${dateFull()} - ${isMatchDay() ? "jogo hoje" : `${daysUntilMatch()} dia(s) ate o jogo`}`;
  document.querySelector("#rankStat").textContent = `${rank}o`;
  document.querySelector("#budgetStat").textContent = money(club.budget);
  document.querySelector("#moraleStat").textContent = Math.round(club.squad.reduce((sum, p) => sum + p.morale, 0) / club.squad.length);
  document.querySelector("#ratingStat").textContent = displayPower.total.toFixed(1);
  document.querySelector("#nextMatch").textContent = nextFixture ? `${nextFixture.home.name} x ${nextFixture.away.name} - ${nextFixture.competition}` : "Fim da temporada";
  if ((isMatchDay() || !nextFixture || state.liveMatch) && dayAdvanceTimer) stopDayAdvance(false);
  document.querySelector("#advanceDayBtn").classList.toggle("hidden", isMatchDay() || !nextFixture || Boolean(state.liveMatch));
  document.querySelector("#advanceDayBtn").disabled = !nextFixture || Boolean(state.liveMatch) || isMatchDay();
  document.querySelector("#advanceDayBtn").textContent = dayAdvanceTimer ? "Parar" : "Avancar dias";
  document.querySelector("#liveMatchBtn").classList.toggle("hidden", !isMatchDay());
  document.querySelector("#quickSimBtn").classList.toggle("hidden", !isMatchDay());
  document.querySelector("#liveMatchBtn").disabled = Boolean(state.liveMatch) || !isMatchDay() || matchSimRunning;
  document.querySelector("#quickSimBtn").disabled = !isMatchDay() || matchSimRunning;
  document.querySelector("#matchTabButton").classList.toggle("hidden", !state.liveMatch);
  document.querySelectorAll(".tab").forEach((tab) => {
    const locked = Boolean(state.liveMatch) && tab.dataset.tab !== "match";
    tab.classList.toggle("locked", locked);
    tab.disabled = locked;
  });

  renderOptions();
  renderInboxBadge();
  renderLineup();
  renderNews();
  if (activeTab === "dashboard") renderReport();
  if (activeTab === "inbox") renderInbox();
  if (activeTab === "match") {
    renderLiveMatch();
    renderMatchLineupEditor();
  }
  if (activeTab === "squad") renderSquad();
  if (activeTab === "lineup") {
    renderLineupEditor();
    renderTacticAdvice();
  }
  if (activeTab === "training") renderTraining();
  if (activeTab === "club") renderClubDevelopment();
  if (activeTab === "market") {
    renderActiveMarketSection();
  }
  if (activeTab === "calendar") renderCalendar();
  if (activeTab === "league") renderLeague();
  if (activeTab === "clubProfile") renderClubProfile();
  renderNegotiationModal();
  renderAlertModal();
}

function showTab(name) {
  document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach((item) => item.classList.remove("active"));
  const tab = document.querySelector(`[data-tab="${name}"]`);
  const panel = document.querySelector(`#${name}Tab`);
  if (tab) tab.classList.add("active");
  if (panel) panel.classList.add("active");
}

function optionList(select, values, selected) {
  if (!select) return;
  select.innerHTML = values.map((value) => `<option value="${value}" ${value === selected ? "selected" : ""}>${value}</option>`).join("");
}

function formationOptionList(select) {
  if (!select) return;
  select.innerHTML = formationOptions.map((value) => {
    const label = value === "Personalizada" && state.tactics.formation === "Personalizada" ? formationDisplayName() : value;
    return `<option value="${value}" ${value === state.tactics.formation ? "selected" : ""}>${label}</option>`;
  }).join("");
}

function renderOptions() {
  const transferClubValue = document.querySelector("#transferClubFilter")?.value || "all";
  formationOptionList(document.querySelector("#formationSelect"));
  optionList(document.querySelector("#mentalitySelect"), mentalities, state.tactics.mentality);
  optionList(document.querySelector("#attackStyleSelect"), attackStyles, state.tactics.attackStyle);
  optionList(document.querySelector("#defenseStyleSelect"), defenseStyles, state.tactics.defenseStyle);
  const liveTactics = state.liveMatch?.tactics || state.tactics;
  optionList(document.querySelector("#liveMentalitySelect"), mentalities, liveTactics.mentality);
  optionList(document.querySelector("#liveAttackStyleSelect"), attackStyles, liveTactics.attackStyle);
  optionList(document.querySelector("#liveDefenseStyleSelect"), defenseStyles, liveTactics.defenseStyle);
  const speedSelect = document.querySelector("#matchSpeedSelect");
  if (speedSelect) speedSelect.value = String(state.liveMatch?.speed || state.matchSpeed || 1500);
  const positionFilter = document.querySelector("#positionFilter");
  optionList(positionFilter, ["all", ...fieldPositionOrder], positionFilter?.value || "all");
  optionList(document.querySelector("#marketSearchPosition"), ["all", ...fieldPositionOrder], document.querySelector("#marketSearchPosition")?.value || "all");
  optionList(document.querySelector("#squadPositionFilter"), ["all", ...fieldPositionOrder], document.querySelector("#squadPositionFilter")?.value || "all");
  optionList(document.querySelector("#trainingPositionFilter"), ["all", ...fieldPositionOrder], document.querySelector("#trainingPositionFilter")?.value || "all");
  ["#positionFilter", "#marketSearchPosition", "#squadPositionFilter", "#trainingPositionFilter"].forEach((selector) => {
    document.querySelector(selector)?.querySelectorAll("option").forEach((option) => {
      if (option.value === "all") option.textContent = "Todas posicoes";
      else option.textContent = option.value;
    });
  });
  optionList(document.querySelector("#transferClubFilter"), ["all", ...state.clubs.map((club) => club.id)], transferClubValue);
  document.querySelector("#transferClubFilter")?.querySelectorAll("option").forEach((option) => {
    if (option.value === "all") option.textContent = "Todos os clubes";
    else option.textContent = state.clubs.find((club) => club.id === option.value)?.name || option.value;
  });
}

function renderReport() {
  const badge = document.querySelector("#lastResultBadge");
  const report = document.querySelector("#matchReport");
  if (!state.lastReport) {
    badge.textContent = "sem jogo";
    report.className = "match-report empty";
    report.textContent = "A temporada ainda nao comecou.";
    return;
  }
  badge.textContent = state.lastReport.outcome;
  report.className = "match-report";
  const stats = state.lastReport.stats;
  const motm = state.lastReport.motm;
  report.innerHTML = `
    <h3>${state.lastReport.title}</h3>
    ${stats ? `<div class="report-stats">
      <span>Fin ${stats.userShots} x ${stats.oppShots}</span>
      <span>Posse ${stats.userPossession}% x ${stats.oppPossession}%</span>
      <span>xG ${stats.userXg.toFixed(2)} x ${stats.oppXg.toFixed(2)}</span>
      <span>Melhor: ${motm.name} (${motm.rating.toFixed(2)})</span>
    </div>` : ""}
    <div class="rating-columns">
      ${ratingColumn("Seu time", state.lastReport.ratings?.user || [])}
      ${ratingColumn("Adversario", state.lastReport.ratings?.opponent || [])}
    </div>
    ${state.lastReport.events.map((event) => `<div class="event">${event}</div>`).join("")}
  `;
}

function ratingColumn(title, ratings) {
  return `
    <div class="rating-column">
      <strong>${title}</strong>
      ${ratings.slice(0, 11).map((item) => `<span>${item.slot} ${item.name} <b>${item.rating.toFixed(2)}</b></span>`).join("")}
    </div>
  `;
}

function renderLiveMatch() {
  if (!state.liveMatch) return;
  const homeGoals = state.liveMatch.userHome ? state.liveMatch.userGoals : state.liveMatch.oppGoals;
  const awayGoals = state.liveMatch.userHome ? state.liveMatch.oppGoals : state.liveMatch.userGoals;
  document.querySelector("#liveScore").textContent = `${state.liveMatch.homeName} ${homeGoals} x ${awayGoals} ${state.liveMatch.awayName}`;
  document.querySelector("#liveMinute").textContent = `${state.liveMatch.minute}'`;
  document.querySelector("#pauseMatchBtn").textContent = state.liveMatch.paused ? "Continuar" : "Pausar";
  document.querySelector("#finishMatchBtn").disabled = matchSimRunning;
  document.querySelector("#liveStats").innerHTML = `
    <article><span>Finalizacoes</span><strong>${state.liveMatch.stats.userShots} x ${state.liveMatch.stats.oppShots}</strong></article>
    <article><span>Posse</span><strong>${state.liveMatch.stats.userPossession}% x ${state.liveMatch.stats.oppPossession}%</strong></article>
    <article><span>Desarmes</span><strong>${state.liveMatch.stats.userTackles} x ${state.liveMatch.stats.oppTackles}</strong></article>
    <article><span>xG</span><strong>${state.liveMatch.stats.userXg.toFixed(2)} x ${state.liveMatch.stats.oppXg.toFixed(2)}</strong></article>
  `;
  document.querySelector("#liveEvents").innerHTML = `
    <div class="rating-columns live-ratings">
      ${ratingColumn("Notas do seu time", liveRatingRows(true))}
      ${ratingColumn("Notas do adversario", liveRatingRows(false))}
    </div>
    ${state.liveMatch.events.map((event) => `<div class="event">${event}</div>`).join("")}
  `;
}

function liveRatingRows(userTeam = true) {
  if (!state.liveMatch) return [];
  const club = userTeam ? getUserClub() : state.clubs.find((item) => item.id === state.liveMatch.opponentId);
  const lineup = userTeam
    ? currentLineup(club, state.liveMatch.tactics, state.liveMatch.lineupIds, state.liveMatch.lineupRoles)
    : bestEleven(club, state.liveMatch.oppTactics);
  return lineupRatings(lineup, state.liveMatch.playerRatings);
}

function renderInbox() {
  const target = document.querySelector("#inboxList");
  if (!target) return;
  const messages = state.inbox || [];
  renderInboxBadge();
  const unread = messages.filter((item) => !item.read).length;
  document.querySelector("#inboxHint").textContent = `${unread} nao lidas`;
  const markAllButton = document.querySelector("#markAllInboxReadBtn");
  if (markAllButton) markAllButton.disabled = unread === 0;
  target.innerHTML = messages.length ? messages.map((message) => `
    <article class="inbox-item ${message.read ? "" : "unread"}">
      <div>
        <span class="pill">${message.type}</span>
        <span class="market-meta">${dateFull(message.day)}</span>
        <h3>${message.title}</h3>
        <p>${message.body}</p>
      </div>
      <div class="action-row">
        ${(message.actions || []).map((action) => action.action === "contract"
          ? `<button class="buy-button small-action" data-open-contract="${action.proposalId}">${action.label}</button>`
          : action.action === "renegotiate"
            ? `<button class="buy-button small-action" data-renegotiate-proposal="${action.proposalId}">${action.label}</button>`
          : action.action === "viewOffer"
            ? `<button class="buy-button small-action" data-view-offer="${action.offerId}">${action.label}</button>`
          : action.action === "renewContract"
            ? `<button class="buy-button small-action" data-renew-contract="${action.playerId}">${action.label}</button>`
          : action.action === "viewYouthIntake"
            ? `<button class="buy-button small-action" data-view-youth-intake>${action.label}</button>`
          : action.action === "acceptJob"
            ? `<button class="buy-button small-action" data-accept-job="${action.offerId}">${action.label}</button>`
          : action.action === "declineJobs"
            ? `<button class="secondary-action small-action" data-decline-jobs>${action.label}</button>`
          : "").join("")}
        <button class="secondary-action small-action" data-read-inbox="${message.id}">${message.read ? "Lida" : "Marcar lida"}</button>
      </div>
    </article>
  `).join("") : `<div class="event">Nenhuma mensagem por enquanto.</div>`;
}

function renderInboxBadge() {
  const badge = document.querySelector("#inboxBadge");
  if (!badge || !state) return;
  const unread = (state.inbox || []).filter((item) => !item.read).length;
  badge.textContent = unread > 99 ? "99+" : unread;
  badge.classList.toggle("hidden", unread === 0);
}

function renderNegotiationModal() {
  const target = document.querySelector("#negotiationModal");
  if (!target) return;
  if (state?.offerModal) {
    renderOfferModal(target);
    return;
  }
  const negotiation = state?.negotiation;
  if (!negotiation) {
    target.classList.add("hidden");
    target.innerHTML = "";
    return;
  }
  const targetCard = state.market.find((item) => item.playerId === negotiation.playerId) || findMarketCard(negotiation.playerId);
  const proposal = negotiation.proposalId ? state.pendingProposals.find((item) => item.id === negotiation.proposalId) : null;
  const seller = targetCard ? state.clubs.find((club) => club.id === targetCard.clubId) : state.clubs.find((club) => club.id === proposal?.sellerId);
  const player = seller ? playerById(seller, negotiation.playerId) : findPlayerById(negotiation.playerId);
  const isContract = negotiation.phase === "contract";
  const isLoan = negotiation.type === "loan";
  const title = isContract ? `Contrato: ${proposal?.playerName || player?.name}` : isLoan ? `Emprestimo: ${player?.name || "jogador"}` : `Transferencia: ${player?.name || "jogador"}`;
  const feedback = negotiation.feedback || (isContract ? "Sugira os termos e consulte o empresario antes de enviar." : "Monte os termos e consulte o negociador antes de enviar.");
  const maxValue = Math.max(80, Math.ceil((player?.value || 10) * 2.5));
  target.classList.remove("hidden");
  target.innerHTML = `
    <div class="modal-card">
      ${moneyOptions(maxValue)}
      <div class="section-heading">
        <div>
          <p class="eyebrow">${seller?.name || "negociacao"}</p>
          <h2>${isContract ? title : `Fazer proposta: ${player?.name || "jogador"}`}</h2>
        </div>
        <button class="icon-button" data-close-negotiation aria-label="Fechar">X</button>
      </div>
      ${isContract ? `
        <div class="negotiation-grid">
          <label>Salario mensal (R$)
            <input id="contractWage" class="money-input" list="moneyOptions" type="text" value="${compactMoney(negotiation.wage || player?.wage || 1)}" />
          </label>
          <label>Papel no elenco
            <select id="contractRole">
              ${["Titular", "Rotacao", "Reserva"].map((role) => `<option value="${role}" ${role === negotiation.role ? "selected" : ""}>${role}</option>`).join("")}
            </select>
          </label>
          <label>Anos de contrato
            <select id="contractYears">
              ${[1, 2, 3, 4, 5].map((year) => `<option value="${year}" ${Number(negotiation.contractYears || 3) === year ? "selected" : ""}>${year} ano${year > 1 ? "s" : ""}</option>`).join("")}
            </select>
          </label>
          ${isLoan ? "" : `
            <label>Clausula de rescisao (R$)
              <input id="releaseClause" class="money-input" list="moneyOptions" type="text" value="${compactMoney(negotiation.releaseClause || 0)}" />
            </label>
          `}
        </div>
        <div class="advisor-box">${feedback}</div>
        <p class="negotiation-note">Digite em reais. Ex: 200000 vira 200K; 2500000 vira 2.5M. O empresario considera salario, papel prometido, ambicao, idade, nivel do clube${isLoan ? "." : " e clausula."}</p>
        <div class="action-row">
          <button class="secondary-action" data-evaluate-negotiation>Consultar empresario</button>
          <button class="buy-button" data-submit-contract>Enviar contrato</button>
        </div>
      ` : `
        <div class="sub-tabs negotiation-tabs">
          <button class="sub-tab ${!isLoan ? "active" : ""}" data-deal-section="transfer">Transferencia</button>
          <button class="sub-tab ${isLoan ? "active" : ""}" data-deal-section="loan">Emprestimo</button>
        </div>
        ${isLoan ? `
        <div class="negotiation-grid">
          <label>Taxa de emprestimo (R$)
            <input id="loanFee" class="money-input" list="moneyOptions" type="text" value="${compactMoney(negotiation.loanFee || 0)}" />
          </label>
          <label>Salario pago (%)
            <input id="wageShare" type="number" min="0" max="100" step="5" value="${negotiation.wageShare || 60}" />
          </label>
          <label>Duracao
            <select id="loanDuration">
              <option value="84" ${negotiation.loanDuration === 84 ? "selected" : ""}>3 meses</option>
              <option value="168" ${negotiation.loanDuration === 168 ? "selected" : ""}>6 meses</option>
              <option value="336" ${negotiation.loanDuration === 336 ? "selected" : ""}>12 meses</option>
            </select>
          </label>
          <label>Opcao de compra (R$)
            <input id="buyOption" class="money-input" list="moneyOptions" type="text" value="${compactMoney(negotiation.buyOption || 0)}" />
          </label>
          <label>Bonus por jogos como titular
            ${bonusControl("bonusApps", "bonusAppsFee", negotiation.bonusApps, negotiation.bonusAppsFee)}
          </label>
        </div>
        <div class="advisor-box">${feedback}</div>
        <p class="negotiation-note">Digite em reais. Ex: 200000 vira 200K; 2500000 vira 2.5M. Emprestimos pesam taxa, porcentagem salarial, duracao, opcao de compra e importancia do jogador no clube.</p>
        <div class="action-row">
          <button class="secondary-action" data-evaluate-negotiation>Consultar negociador</button>
          <button class="buy-button" data-submit-club-proposal>Enviar ao clube</button>
        </div>
      ` : `
        <div class="negotiation-grid">
          <label>Valor fixo (R$)
            <input id="dealFee" class="money-input" list="moneyOptions" type="text" value="${compactMoney(negotiation.fee || 0)}" />
          </label>
          <label>Venda futura (%)
            <input id="sellOn" type="number" min="0" max="50" step="1" value="${negotiation.sellOn || 10}" />
          </label>
          <label>Bonus: jogos como titular
            ${bonusControl("bonusApps", "bonusAppsFee", negotiation.bonusApps, negotiation.bonusAppsFee)}
          </label>
          <label>Bonus: gols
            ${bonusControl("bonusGoals", "bonusGoalsFee", negotiation.bonusGoals, negotiation.bonusGoalsFee)}
          </label>
          <label>Bonus: assistencias
            ${bonusControl("bonusAssists", "bonusAssistsFee", negotiation.bonusAssists, negotiation.bonusAssistsFee)}
          </label>
        </div>
        <div class="advisor-box">${feedback}</div>
        <p class="negotiation-note">Digite em reais. Ex: 200000 vira 200K; 2500000 vira 2.5M. O clube vendedor prioriza valor fixo; bonus ajudam, mas metas incertas valem menos na avaliacao.</p>
        <div class="action-row">
          <button class="secondary-action" data-evaluate-negotiation>Consultar negociador</button>
          <button class="buy-button" data-submit-club-proposal>Enviar ao clube</button>
        </div>
      `}`}
    </div>
  `;
}

function renderAlertModal() {
  const target = document.querySelector("#alertModal");
  if (!target) return;
  if (!state?.alertModal) {
    target.classList.add("hidden");
    target.innerHTML = "";
    return;
  }
  target.classList.remove("hidden");
  target.innerHTML = `
    <div class="modal-card alert-card">
      <div class="section-heading">
        <div>
          <p class="eyebrow">atencao</p>
          <h2>${state.alertModal.title}</h2>
        </div>
        <button class="icon-button" data-close-alert aria-label="Fechar">X</button>
      </div>
      <div class="advisor-box">${state.alertModal.body}</div>
      <div class="action-row">
        <button class="buy-button" data-close-alert>Entendi</button>
      </div>
    </div>
  `;
}

function renderOfferModal(target = document.querySelector("#negotiationModal")) {
  if (!target) return;
  const modal = state?.offerModal;
  const offer = modal ? state.offers.find((item) => item.id === modal.offerId) : null;
  if (!modal || !offer) {
    target.classList.add("hidden");
    target.innerHTML = "";
    return;
  }
  const club = getUserClub();
  const buyer = state.clubs.find((item) => item.id === offer.buyerId);
  const player = playerById(club, offer.playerId);
  const negotiating = modal.mode === "negotiate";
  const feedback = modal.feedback || "Use a contraproposta para pedir mais valor fixo, venda futura ou bonus por metas. O negociador considera interesse do comprador, nivel do jogador e distancia para a oferta original.";
  target.classList.remove("hidden");
  target.innerHTML = `
    <div class="modal-card">
      ${moneyOptions(Math.max(80, Math.ceil((player?.value || offer.fee || 10) * 2.5)))}
      <div class="section-heading">
        <div>
          <p class="eyebrow">${buyer?.name || offer.buyerName}</p>
          <h2>Proposta por ${player?.name || "jogador"}</h2>
        </div>
        <button class="icon-button" data-close-offer-modal aria-label="Fechar">X</button>
      </div>
      <div class="offer-summary">
        <span class="pill">${offer.status === "accepted_counter" ? "contraproposta aceita" : offer.status === "counter_wait" ? "aguardando resposta" : offer.type === "loan" ? "proposta de emprestimo" : "proposta de transferencia"}</span>
        <strong>${money(offer.fee)}</strong>
        <span>${player?.position || "-"} - geral ${player ? player.rating.toFixed(0) : "-"}</span>
        ${offer.sellOn ? `<span>Venda futura: ${offer.sellOn}%</span>` : ""}
        ${offer.bonusApps ? `<span>Bonus: ${offer.bonusApps} jogos por ${money(offer.bonusAppsFee)}</span>` : ""}
      </div>
      ${negotiating ? `
        <div class="negotiation-grid">
          <label>Valor fixo desejado (R$)
            <input id="incomingCounterFee" class="money-input" list="moneyOptions" type="text" value="${compactMoney(modal.counterFee || offer.fee)}" />
          </label>
          <label>Venda futura (%)
            <input id="incomingSellOn" type="number" min="0" max="50" step="1" value="${modal.sellOn ?? 10}" />
          </label>
          <label>Bonus por jogos como titular
            ${bonusControl("incomingBonusApps", "incomingBonusAppsFee", modal.bonusApps, modal.bonusAppsFee)}
          </label>
        </div>
        <div class="advisor-box">${feedback}</div>
        <p class="negotiation-note">Digite em reais. Ex: 200000 vira 200K; 2500000 vira 2.5M. Se o pedido fugir muito da oferta inicial, o comprador pode sair da mesa.</p>
        <div class="action-row">
          <button class="secondary-action" data-evaluate-incoming>Consultar negociador</button>
          <button class="buy-button" data-submit-incoming-counter>Enviar contraproposta</button>
        </div>
      ` : `
        <div class="advisor-box">Oferta atual: ${money(offer.fee)}${offer.type === "loan" ? " pela taxa de emprestimo" : ""}. Voce pode aceitar, recusar ou tentar puxar a negociacao para termos melhores.</div>
        <div class="action-row">
          ${offer.status === "counter_wait" ? `<button class="secondary-action" disabled>Aguardando resposta</button>` : `
            <button class="accept-button" data-accept-offer="${offer.id}">Aceitar</button>
            <button class="secondary-action" data-negotiate-offer="${offer.id}">Negociar</button>
            <button class="reject-button" data-reject-offer="${offer.id}">Recusar</button>
          `}
        </div>
      `}
    </div>
  `;
}

function renderSquad() {
  const club = getUserClub();
  const lineupIds = new Set(state.lineupIds);
  const loanedOut = userLoanedOutPlayers(club);
  document.querySelectorAll("[data-squad-section]").forEach((button) => button.classList.toggle("active", button.dataset.squadSection === (state.squadSubTab || "pro")));
  if ((state.squadSubTab || "pro") === "youth") {
    const youth = sortedYouthSquad(club);
    document.querySelector("#squadCount").textContent = `${club.youthAcademy.length}/${youthAcademyLimit} na base`;
    document.querySelector("#squadList").innerHTML = youth.length ? youth.map((player) => youthSquadRow(player, club)).join("") : `<div class="event">Nenhum jogador na categoria de base.</div>`;
    return;
  }
  if ((state.squadSubTab || "pro") === "intake") {
    document.querySelector("#squadCount").textContent = club.youthIntake ? `${club.youthIntake.pickedIds.length}/${club.youthIntake.maxPicks} escolhas` : "peneira fechada";
    document.querySelector("#squadList").innerHTML = renderYouthIntakeList(club);
    return;
  }
  document.querySelector("#squadCount").textContent = `${club.squad.length + loanedOut.length} profissionais`;
  document.querySelector("#squadList").innerHTML = [
    ...sortedSquad(club).map((player) => squadPlayerRow(player, club, lineupIds)),
    ...loanedOut.map(({ player, loan, to }) => squadPlayerRow(player, club, lineupIds, { loan, to, loanedOut: true }))
  ].join("");
}

function userLoanedOutPlayers(club) {
  return (state.loans || [])
    .filter((loan) => loan.fromId === club.id)
    .map((loan) => {
      const to = state.clubs.find((item) => item.id === loan.toId);
      const player = to ? playerById(to, loan.playerId) : null;
      return player ? { player, loan, to } : null;
    })
    .filter(Boolean);
}

function squadPlayerRow(player, club, lineupIds, context = {}) {
  const avg = player.stats?.apps ? (player.stats.ratingSum / player.stats.apps).toFixed(2) : "-";
  const loan = context.loan || (player.loan ? (state.loans || []).find((item) => item.playerId === player.id) : null);
  const loanLabel = context.loanedOut
    ? ` - emprestado ao ${context.to?.name || "outro clube"} ate o dia ${loan?.endDay || "?"}`
    : player.loan
      ? ` - emprestado de ${player.loan.fromName} ate o dia ${player.loan.endDay}`
      : "";
  return `
    <div class="player-row player-row-detailed">
      <div>
        <span class="player-name">${player.name}${lineupIds.has(player.id) ? " - titular" : ""}${isInjured(player) ? " - lesionado" : ""}</span>
      <span class="player-meta">${positionText(player)} - ${player.age} anos - ${nationalityText(player)} - valor ${money(calculatePlayerValue(player, club.reputation))} - ${contractText(player)} - fisico ${conditionLabel(player)} - ${context.loanedOut ? "fora por emprestimo" : listLabel(player.listStatus)} - ${availabilityText(player)} - CA ${player.yellowCards || 0}/${yellowCardQuota}${loanLabel}${pendingTransferText(player)}${player.releaseClause ? ` - clausula ${money(player.releaseClause)}` : ""}</span>
        <div class="player-attributes">
          ${player.position === "GK"
            ? `${attribute("REF", player.reflexes)}${attribute("MAN", player.handling)}${attribute("POS", player.positioningGk)}${attribute("1x1", player.oneOnOne)}${attribute("DIS", player.distribution)}${attribute("AER", player.aerial)}`
            : `${attribute("VEL", player.pace)}${attribute("PAS", player.passing)}${attribute("DRI", player.dribbling)}${attribute("FIN", player.finishing)}${attribute("DES", player.tackling)}${attribute("VIS", player.vision)}`}
        </div>
        <div class="player-statline">
          ${statLine(player)} - Nota ${avg}
        </div>
      </div>
      <div class="player-side-actions">
        <span class="rating">${player.rating.toFixed(0)}</span>
        <span class="delta">${player.lastDelta > 0 ? "+" : ""}${player.lastDelta}</span>
        ${loan && context.loanedOut
          ? `<button class="secondary-action small-action" data-end-loan="${loan.id || loan.playerId}" data-loan-mode="recall">Trazer de volta (${money(loanReturnFee(loan, player, "recall"))})</button>`
          : loan && player.loan
            ? `<button class="secondary-action small-action" data-end-loan="${loan.id || loan.playerId}" data-loan-mode="return">Devolver (${money(loanReturnFee(loan, player, "return"))})</button>`
            : player.pendingTransfer
              ? `<button class="secondary-action small-action" disabled>Transferencia acordada</button>`
            : `
              <button class="secondary-action small-action" data-list-player="${player.id}" data-list-status="transfer">${player.listStatus === "transfer" ? "Tirar venda" : "Listar venda"}</button>
              <button class="secondary-action small-action" data-list-player="${player.id}" data-list-status="loan">${player.listStatus === "loan" ? "Tirar emprest." : "Listar emprest."}</button>
              <button class="secondary-action small-action" data-list-player="${player.id}" data-list-status="blocked">${player.listStatus === "blocked" ? "Liberar prop." : "Bloquear prop."}</button>
              <button class="buy-button small-action" data-renew-contract="${player.id}">Renovar</button>
            `}
      </div>
    </div>
  `;
}

function sortedSquad(club) {
  const query = document.querySelector("#squadSearch")?.value.toLowerCase().trim() || "";
  const listFilter = document.querySelector("#squadListFilter")?.value || "all";
  const posFilter = document.querySelector("#squadPositionFilter")?.value || "all";
  const sort = document.querySelector("#squadSort")?.value || "rating-desc";
  const filtered = club.squad.filter((player) => {
    const textMatch = !query || player.name.toLowerCase().includes(query);
    const listMatch = listFilter === "all" || (listFilter === "listed" && ["transfer", "loan"].includes(player.listStatus)) || player.listStatus === listFilter;
    const posMatch = posFilter === "all" || positionFit(player, posFilter) >= 0.7;
    return textMatch && listMatch && posMatch;
  });
  const avg = (player) => player.stats?.apps ? player.stats.ratingSum / player.stats.apps : 0;
  const sorters = {
    "rating-desc": (a, b) => b.rating - a.rating,
    "rating-asc": (a, b) => a.rating - b.rating,
    "value-desc": (a, b) => calculatePlayerValue(b, club.reputation) - calculatePlayerValue(a, club.reputation),
    "value-asc": (a, b) => calculatePlayerValue(a, club.reputation) - calculatePlayerValue(b, club.reputation),
    "position-asc": (a, b) => positionRank(a.position) - positionRank(b.position) || b.rating - a.rating,
    "position-desc": (a, b) => positionRank(b.position) - positionRank(a.position) || b.rating - a.rating,
    "apps-desc": (a, b) => (b.stats?.apps || 0) - (a.stats?.apps || 0),
    "avg-desc": (a, b) => avg(b) - avg(a),
    "condition-asc": (a, b) => fitnessQuotient(a) - fitnessQuotient(b)
  };
  return filtered.sort(sorters[sort] || sorters["rating-desc"]);
}

function sortedYouthSquad(club) {
  const query = document.querySelector("#squadSearch")?.value.toLowerCase().trim() || "";
  const posFilter = document.querySelector("#squadPositionFilter")?.value || "all";
  const sort = document.querySelector("#squadSort")?.value || "rating-desc";
  const filtered = (club.youthAcademy || []).filter((player) => {
    const textMatch = !query || player.name.toLowerCase().includes(query);
    const posMatch = posFilter === "all" || positionFit(player, posFilter) >= 0.7;
    return textMatch && posMatch;
  });
  const sorters = {
    "rating-desc": (a, b) => b.rating - a.rating,
    "rating-asc": (a, b) => a.rating - b.rating,
    "value-desc": (a, b) => calculatePlayerValue(b, club.reputation) - calculatePlayerValue(a, club.reputation),
    "value-asc": (a, b) => calculatePlayerValue(a, club.reputation) - calculatePlayerValue(b, club.reputation),
    "position-asc": (a, b) => positionRank(a.position) - positionRank(b.position) || b.potential - a.potential,
    "position-desc": (a, b) => positionRank(b.position) - positionRank(a.position) || b.potential - a.potential,
    "apps-desc": (a, b) => (b.stats?.apps || 0) - (a.stats?.apps || 0),
    "avg-desc": (a, b) => b.potential - a.potential,
    "condition-asc": (a, b) => fitnessQuotient(a) - fitnessQuotient(b)
  };
  return filtered.sort(sorters[sort] || sorters["rating-desc"]);
}

function youthSquadRow(player, club) {
  return `
    <div class="player-row player-row-detailed">
      <div>
        <span class="player-name">${player.name}${player.age >= 20 ? " - decisao obrigatoria" : ""}</span>
        <span class="player-meta">${positionText(player)} - ${player.age} anos - ${nationalityText(player)} - G${Math.round(player.rating)} - pot ${Math.round(player.potential)} - valor ${money(calculatePlayerValue(player, club.reputation))} - ${player.age >= 16 ? "apto a subir" : "subida permitida aos 16"}</span>
        <div class="player-attributes">
          ${player.position === "GK"
            ? `${attribute("REF", player.reflexes)}${attribute("MAN", player.handling)}${attribute("POS", player.positioningGk)}${attribute("1x1", player.oneOnOne)}${attribute("DIS", player.distribution)}${attribute("AER", player.aerial)}`
            : `${attribute("VEL", player.pace)}${attribute("PAS", player.passing)}${attribute("DRI", player.dribbling)}${attribute("FIN", player.finishing)}${attribute("DES", player.tackling)}${attribute("VIS", player.vision)}`}
        </div>
        <div class="player-statline">Treino: ${attrLabel(player.training?.attr || "automatic")} - posicao alvo ${player.training?.position || player.position}</div>
      </div>
      <div class="player-side-actions">
        <span class="rating">${Math.round(player.rating)}</span>
        <span class="delta">Pot ${Math.round(player.potential)}</span>
        <button class="buy-button small-action" data-promote-youth="${player.id}" ${player.age < 16 ? "disabled" : ""}>Subir</button>
        <button class="reject-button small-action" data-release-youth="${player.id}">Liberar</button>
      </div>
    </div>
  `;
}

function renderYouthIntakeList(club) {
  const intake = club.youthIntake;
  if (!intake) return `<div class="event">A peneira de meio de temporada ainda nao abriu. Proxima em ${dateShort(youthIntakeDay)}.</div>`;
  const query = document.querySelector("#squadSearch")?.value.toLowerCase().trim() || "";
  const posFilter = document.querySelector("#squadPositionFilter")?.value || "all";
  const sort = document.querySelector("#squadSort")?.value || "rating-desc";
  const sorters = {
    "rating-desc": (a, b) => b.rating - a.rating,
    "rating-asc": (a, b) => a.rating - b.rating,
    "value-desc": (a, b) => b.potential - a.potential || b.rating - a.rating,
    "value-asc": (a, b) => a.potential - b.potential || a.rating - b.rating,
    "position-asc": (a, b) => positionRank(a.position) - positionRank(b.position) || b.potential - a.potential,
    "position-desc": (a, b) => positionRank(b.position) - positionRank(a.position) || b.potential - a.potential,
    "apps-desc": (a, b) => b.age - a.age,
    "avg-desc": (a, b) => b.potential - a.potential,
    "condition-asc": (a, b) => a.age - b.age
  };
  const candidates = [...intake.candidates]
    .filter((player) => (!query || player.name.toLowerCase().includes(query)) && (posFilter === "all" || positionFit(player, posFilter) >= 0.7))
    .sort(sorters[sort] || sorters["rating-desc"]);
  return `
    <div class="event">Voce pode escolher ate ${intake.maxPicks} jogador${intake.maxPicks > 1 ? "es" : ""}. A base tem ${club.youthAcademy.length}/${youthAcademyLimit} atletas.</div>
    ${candidates.map((player) => {
      const pickedPlayer = intake.pickedIds.includes(player.id);
      return `
        <div class="market-row ${pickedPlayer ? "selected-youth" : ""}">
          <div>
            <span class="market-name">${player.name}</span>
            <span class="market-meta">${positionText(player)} - ${player.age} anos - ${nationalityText(player)} - G${Math.round(player.rating)} - pot ${Math.round(player.potential)}</span>
            <span class="negotiation-note">Relatorio da base: ${player.potential >= 90 ? "joia rara, mas ainda precisa de desenvolvimento cuidadoso." : player.potential >= 82 ? "potencial alto, exige paciencia e minutos certos." : player.rating >= 60 ? "pronto para evoluir com boa rotina." : "projeto de longo prazo."}</span>
          </div>
          <button class="${pickedPlayer ? "secondary-action" : "buy-button"} small-action" data-sign-youth="${player.id}" ${pickedPlayer ? "disabled" : ""}>${pickedPlayer ? "Escolhido" : "Trazer"}</button>
        </div>
      `;
    }).join("")}
  `;
}

function statLine(player) {
  if (player.position === "GK") {
    return `J ${player.stats?.apps || 0} - SG ${player.stats?.cleanSheets || 0} - Def ${player.stats?.saves || 0} - GC ${player.stats?.goalsAgainst || 0} - Min ${player.stats?.minutes || 0}`;
  }
  return `J ${player.stats?.apps || 0} - G ${player.stats?.goals || player.goals || 0} - A ${player.stats?.assists || player.assists || 0} - Fin ${player.stats?.shots || 0} - Des ${player.stats?.tackles || 0} - Min ${player.stats?.minutes || 0}`;
}

function attribute(label, value) {
  const display = typeof value === "number" ? Math.round(value) : value;
  return `<div class="attribute"><span>${label}</span><strong>${display}</strong></div>`;
}

function compactPlayerAttributes(player) {
  const attrs = player.position === "GK"
    ? [["REF", "reflexes"], ["MAN", "handling"], ["POS", "positioningGk"], ["1x1", "oneOnOne"], ["DIS", "distribution"], ["AER", "aerial"]]
    : [["VEL", "pace"], ["PAS", "passing"], ["DRI", "dribbling"], ["FIN", "finishing"], ["DES", "tackling"], ["VIS", "vision"]];
  return `<div class="player-attributes training-attributes">${attrs.map(([label, attr]) => attribute(label, player[attr])).join("")}</div>`;
}

function renderLineup() {
  const target = document.querySelector("#lineupList");
  if (!target) return;
  target.innerHTML = currentLineup().map((player) => `
    <div class="lineup-item">
      <span class="position">${player.slot}</span>
      <span>${player.name}</span>
      <strong>${player.rating.toFixed(0)}</strong>
    </div>
  `).join("");
}

function renderTraining() {
  const club = getUserClub();
  const attrs = ["automatic", ...trainableAttrs];
  const query = document.querySelector("#trainingSearch")?.value.toLowerCase().trim() || "";
  const posFilter = document.querySelector("#trainingPositionFilter")?.value || "all";
  const sort = document.querySelector("#trainingSort")?.value || "potential-desc";
  const sorters = {
    "potential-desc": (a, b) => b.potential - a.potential || b.rating - a.rating,
    "rating-desc": (a, b) => b.rating - a.rating,
    "rating-asc": (a, b) => a.rating - b.rating,
    "position-asc": (a, b) => positionRank(a.position) - positionRank(b.position) || b.potential - a.potential,
    "position-desc": (a, b) => positionRank(b.position) - positionRank(a.position) || b.potential - a.potential,
    "age-asc": (a, b) => a.age - b.age || b.potential - a.potential,
    "condition-asc": (a, b) => fitnessQuotient(a) - fitnessQuotient(b)
  };
  const players = [...club.squad]
    .filter((player) => {
      const textMatch = !query || player.name.toLowerCase().includes(query);
      const posMatch = posFilter === "all" || positionFit(player, posFilter) >= 0.7;
      return textMatch && posMatch;
    })
    .sort(sorters[sort] || sorters["potential-desc"]);
  document.querySelector("#trainingList").innerHTML = players.length ? players
    .map((player) => {
      const targetPosition = player.training?.position || player.position;
      const targetRole = player.training?.role || defaultRoleForSlot(targetPosition);
      const posExp = player.positionExp?.[targetPosition] || 0;
      const rExp = player.roleExp?.[targetRole] || 0;
      const roleOptions = (roleDefs[targetPosition] || []).map((role) => `<option value="${role.id}" ${role.id === targetRole ? "selected" : ""}>${role.name}</option>`).join("");
      const role = (roleDefs[targetPosition] || []).find((item) => item.id === targetRole);
      return `
        <div class="training-row">
          <div>
            <span class="player-name">${player.name}</span>
            <span class="player-meta">${positionText(player)} - ${nationalityText(player)} - G${player.rating.toFixed(0)} - pot ${player.potential.toFixed(0)} - ${availabilityText(player)} - exp ${targetPosition}: ${fmt(posExp)}% - funcao: ${fmt(rExp)}%</span>
            ${compactPlayerAttributes(player)}
            <div class="training-note">${role?.desc || "Escolha uma funcao para orientar a evolucao."}</div>
          </div>
          <label>
            Atributo
            <select data-training-attr="${player.id}">
              ${attrs.map((attr) => `<option value="${attr}" ${attr === (player.training?.attr || "automatic") ? "selected" : ""}>${attr === "automatic" ? "Automatico" : attrLabel(attr)}</option>`).join("")}
            </select>
          </label>
          <label>
            Posicao
            <select data-training-position="${player.id}">
              ${positions.map((pos) => `<option value="${pos}" ${pos === targetPosition ? "selected" : ""}>${pos}</option>`).join("")}
            </select>
          </label>
          <label>
            Funcao
            <select data-training-role="${player.id}">
              ${roleOptions}
            </select>
          </label>
        </div>
      `;
    }).join("") : `<div class="event">Nenhum jogador encontrado para esses filtros.</div>`;
}

function renderClubDevelopment() {
  const target = document.querySelector("#clubDevelopmentPanel");
  if (!target || !state) return;
  const club = getUserClub();
  ensureClubDevelopment(club);
  document.querySelector("#clubDevelopmentHint").textContent = "infraestrutura do clube";
  target.innerHTML = `
    <section class="content-block">
      <div class="section-heading">
        <h2>Instalacoes</h2>
        <span>melhorias de meia estrela</span>
      </div>
      <div class="facility-grid">
        ${Object.entries(facilityTypes).map(([type, info]) => {
          const level = club.facilities[type] || 3;
          const cost = facilityCost(club, type);
          const full = level >= 5;
          const affordable = club.budget >= cost;
          return `
            <article class="facility-card">
              <div>
                <span class="player-name">${info.label}</span>
                ${starRating(level)}
                <p>${info.desc}</p>
              </div>
              <button class="${affordable && !full ? "buy-button" : "secondary-action"} small-action" data-upgrade-facility="${type}" ${full || !affordable ? "disabled" : ""}>
                ${full ? "Maximo" : `Melhorar ${money(cost)}`}
              </button>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function attrLabel(attr) {
  const labels = {
    pace: "Velocidade",
    passing: "Passe",
    dribbling: "Drible",
    finishing: "Finalizacao",
    crossing: "Cruzamento",
    tackling: "Desarme",
    vision: "Visao",
    stamina: "Resistencia",
    reflexes: "Reflexos",
    handling: "Manejo",
    positioningGk: "Posicionamento GK",
    oneOnOne: "1x1",
    distribution: "Distribuicao",
    aerial: "Jogo aereo"
  };
  return labels[attr] || attr;
}

function renderLineupEditor() {
  document.querySelector("#lineupShape").textContent = formationDisplayName();
  document.querySelector("#lineupEditor").innerHTML = renderLineupBoard("lineup");
}

function renderMatchLineupEditor() {
  const target = document.querySelector("#matchLineupEditor");
  if (target) target.innerHTML = renderLineupBoard("match");
}

function renderLineupBoard(context) {
  const club = getUserClub();
  const tactics = context === "match" && state.liveMatch ? state.liveMatch.tactics : state.tactics;
  const ids = context === "match" && state.liveMatch ? state.liveMatch.lineupIds : state.lineupIds;
  const roles = context === "match" && state.liveMatch ? state.liveMatch.lineupRoles : state.lineupRoles;
  const lineup = currentLineup(club, tactics, ids, roles);
  const starters = new Set(ids);
  const benchIds = activeBenchSlotIds(context);
  const benchSet = new Set(benchIds);
  const bench = benchIds.map((id) => playerById(club, id)).filter(Boolean);
  const benchSlots = Array.from({ length: maxBenchPlayers }, (_, index) => {
    const player = playerById(club, benchIds[index]);
    return `
      <div class="bench-slot" data-drop-bench="true" data-drop-bench-index="${index}">
        <span class="bench-slot-label">R${index + 1}</span>
        ${player ? playerToken(player, "bench", index) : `<div class="empty-drop">Vaga livre</div>`}
      </div>
    `;
  }).join("");
  const unrelated = club.squad
    .filter((player) => !starters.has(player.id) && !benchSet.has(player.id))
    .sort((a, b) => Number(isInjured(b) || isSuspended(b)) - Number(isInjured(a) || isSuspended(a)) || b.rating - a.rating);
  const usedSlots = {};
  const guides = context === "match" ? "" : renderFormationGuides(lineup);
  const field = lineup.map((player, index) => {
    const coord = tactics.formation === "Personalizada" && context !== "match" && state.customSlotCoords?.[index]
      ? state.customSlotCoords[index]
      : slotPosition(lineup, index, usedSlots);
    return `
      <div class="field-slot ${player.slot === "GK" ? "gk-slot" : ""}" data-drop-slot="${index}" style="left:${coord.x}%; top:${coord.y}%">
        <span class="position">${player.slot}</span>
        ${playerToken(player, "starter", index)}
        ${roleSelect(player.slot, player.role, index)}
      </div>
    `;
  }).join("");
  return `
    <div class="mini-field" data-board="${context}">${guides}${field}</div>
    <aside class="bench-panel">
      <p class="touch-lineup-hint">No celular: toque em um jogador e depois toque no destino.</p>
      <div class="section-heading">
        <h2>Banco</h2>
        <span>${bench.length}/${maxBenchPlayers}</span>
      </div>
      <div class="bench-list bench-slots">
        ${benchSlots}
      </div>
      <div class="section-heading">
        <h2>Nao relacionados</h2>
        <span>${unrelated.length}</span>
      </div>
      <div class="bench-list unrelated-list" data-drop-unrelated="true">
        ${unrelated.length ? unrelated.map((player) => playerToken(player, "unrelated", -1)).join("") : `<div class="empty-drop">Todos os jogadores estao relacionados.</div>`}
      </div>
    </aside>
  `;
}

function renderFormationGuides(lineup) {
  return positions.flatMap((slot) => formationGuideCoords(slot).map((coord, itemIndex) => {
    const occupied = lineup.some((player, index) => {
      const playerCoord = state.tactics.formation === "Personalizada" && state.customSlotCoords?.[index]
        ? state.customSlotCoords[index]
        : slotPosition(lineup, index, {});
      return player.slot === slot && Math.abs(playerCoord.x - coord.x) < 8 && Math.abs(playerCoord.y - coord.y) < 8;
    });
    if (occupied) return "";
    return `<div class="formation-slot" data-formation-slot="${slot}" data-formation-coord="${itemIndex}" style="left:${coord.x}%; top:${coord.y}%">${slot}</div>`;
  })).join("");
}

function formationGuideCoords(slot) {
  const line = slotLine[slot] || "mid";
  const xs = {
    GK: [50],
    CB: [34, 42, 50, 58, 66],
    RB: [82],
    LB: [18],
    DM: [38, 44, 50, 56, 62],
    CM: [34, 42, 50, 58, 66],
    AM: [38, 44, 50, 56, 62],
    RM: [82],
    LM: [18],
    RW: [82],
    LW: [18],
    ST: [40, 42, 50, 58, 60]
  }[slot] || [50];
  return xs.map((x) => ({ x, y: lineY[line] }));
}

function roleSelect(slot, selected, index) {
  const options = (roleDefs[slot] || []).map((role) => `<option value="${role.id}" ${role.id === selected ? "selected" : ""}>${role.name}</option>`).join("");
  const current = (roleDefs[slot] || []).find((role) => role.id === selected) || roleDefs[slot]?.[0];
  return `<select class="role-select" data-role-slot="${index}" title="${current?.desc || ""}">${options}</select>`;
}

function slotPosition(lineup, index, usedSlots) {
  const slot = lineup[index].slot;
  const used = usedSlots[slot] || 0;
  usedSlots[slot] = used + 1;
  const coords = formationGuideCoords(slot).sort((a, b) => a.x - b.x);
  const total = lineup.filter((player) => player.slot === slot).length;
  const centered = centeredCoords(coords, total);
  return centered[Math.min(used, centered.length - 1)] || coords[0] || { x: 50, y: 50 };
}

function centeredCoords(coords, total) {
  if (!coords.length) return [];
  if (total <= 1) {
    return [coords.reduce((best, coord) => Math.abs(coord.x - 50) < Math.abs(best.x - 50) ? coord : best, coords[0])];
  }
  const sideCoords = coords.filter((coord) => Math.abs(coord.x - 50) > 0.1);
  const source = total % 2 === 0 && sideCoords.length >= total ? sideCoords : coords;
  return [...source]
    .sort((a, b) => Math.abs(a.x - 50) - Math.abs(b.x - 50) || a.x - b.x)
    .slice(0, total)
    .sort((a, b) => a.x - b.x);
}

function slotOrder(slot) {
  return { LW: 1, LM: 2, LB: 3, RB: 7, RM: 8, RW: 9, CB: 5, DM: 5, CM: 5, AM: 5, ST: 5, GK: 5 }[slot] || 5;
}

function playerToken(player, source, slotIndex) {
  const effective = player.slot ? roleScore(player, player.slot).toFixed(0) : player.rating.toFixed(0);
  const roleEff = player.role ? roleEffectiveness(player, player.role) : 100;
  const condition = state.liveMatch ? clamp(Math.round(fitnessQuotient(player) - state.liveMatch.minute * (player.stamina < 60 ? 0.18 : 0.12)), 35, 100) : fitnessQuotient(player);
  const unavailable = isInjured(player) || isSuspended(player);
  return `
    <button class="player-token ${unavailable ? "unavailable-token" : ""} ${tapMovePlayer === player.id ? "tap-selected" : ""}" draggable="true" data-drag-player="${player.id}" data-drag-source="${source}" data-drag-slot="${slotIndex}" title="${player.name}">
      <span class="token-name">${player.name}</span>
      <span class="token-meta">${positionText(player)} - G${player.rating.toFixed(0)} / Ef${effective} - Fis ${condition}% - Func ${fmt(roleEff)}%${unavailable ? ` - ${availabilityText(player)}` : ""}</span>
    </button>
  `;
}

function renderTacticAdvice() {
  const club = getUserClub();
  const power = teamStrength(club, state.tactics);
  const lineup = power.lineup;
  const advice = [];
  const avg = (items, key) => items.length ? items.reduce((sum, player) => sum + (player[key] || 0), 0) / items.length : 0;
  const defenders = lineup.filter((player) => ["RB", "LB", "CB"].includes(player.slot));
  const mids = lineup.filter((player) => ["DM", "CM", "AM", "RM", "LM"].includes(player.slot));
  const centralMids = lineup.filter((player) => ["DM", "CM", "AM"].includes(player.slot));
  const widePlayers = lineup.filter((player) => ["RB", "LB", "RM", "LM", "RW", "LW"].includes(player.slot));
  const forwards = lineup.filter((player) => ["RW", "LW", "ST"].includes(player.slot));
  const weakFits = lineup.filter((player) => fitLevel(player.position, player.slot) < 0.65);
  const tired = lineup.filter((player) => fitnessQuotient(player) < 72);
  const avgStamina = avg(lineup, "stamina");
  const avgPace = avg(lineup, "pace");
  const avgPassing = avg(lineup, "passing");
  const avgTackling = avg([...defenders, ...centralMids], "tackling");
  const add = (type, title, text) => advice.push({ type, title, text });

  add("positive", `Estrutura ${formationDisplayName()}`, defenders.length >= 5
    ? "Protege a area e encurta a distancia entre defensores. O ponto de atencao e nao ficar preso demais perto do proprio gol."
    : defenders.length === 3
      ? "Libera alas e cria uma saida com superioridade numerica. Exige cobertura forte quando o adversario ataca os lados."
      : "Da equilibrio entre amplitude, cobertura e meio-campo. A qualidade dos laterais define se o time apoia bem ou fica conservador.");

  if (weakFits.length) add("risk", "Improvisos", `${weakFits.length} jogador(es) estao fora de uma zona natural. Isso reduz leitura defensiva, sincronia de pressao e efetividade na funcao.`);
  else add("positive", "Encaixe posicional", "O onze esta bem distribuido nas posicoes. A tendencia e ter linhas de passe mais limpas e recomposicao mais natural.");

  if (state.tactics.mentality === "Pressao alta") add(avgStamina >= 68 && avgPace >= 66 ? "positive" : "risk", "Pressao alta", avgStamina >= 68 && avgPace >= 66 ? "Ha perna para saltar pressao e forcar erro na saida rival. O risco aparece nas costas da defesa." : "Pode sufocar em momentos curtos, mas o fisico/velocidade do onze indica queda de intensidade e espacos depois dos 60 minutos.");
  if (state.tactics.mentality === "Defensiva") add("warning", "Mentalidade defensiva", "Boa para proteger resultado e baixar risco, mas pode isolar o ataque se nao houver referencia ou pontas rapidos.");
  if (state.tactics.mentality === "Ofensiva") add("warning", "Mentalidade ofensiva", "Aumenta presenca na area e volume, mas cobra muito dos volantes na transicao defensiva.");
  if (state.tactics.mentality === "Contra-ataque") add(avgPace >= 66 ? "positive" : "warning", "Contra-ataque", avgPace >= 66 ? "O time tem velocidade para atacar o espaco apos roubar a bola." : "A ideia protege bem, mas falta explosao para transformar recuperacoes em chances claras.");
  if (state.tactics.mentality === "Equilibrada") add("positive", "Mentalidade equilibrada", "Plano estavel para iniciar jogos. Permite ajustar agressividade depois de entender o adversario.");

  if (state.tactics.attackStyle === "Explorar pontas") add(widePlayers.length >= 4 && avg(widePlayers, "crossing") >= 62 ? "positive" : "warning", "Ataque pelos lados", widePlayers.length >= 4 ? "Ha amplitude para esticar a defesa rival. Cuide da cobertura dos laterais para evitar contra-ataque." : "A proposta pede mais amplitude; sem jogadores de lado, o ataque pode ficar previsivel.");
  if (state.tactics.attackStyle === "Posse curta") add(avgPassing >= 67 ? "positive" : "risk", "Posse curta", avgPassing >= 67 ? "O passe medio sustenta circulacao paciente e controle de ritmo." : "Pode gerar perdas perigosas se o rival pressionar a primeira construcao.");
  if (state.tactics.attackStyle === "Jogo direto") add(forwards.some((p) => p.pace >= 68 || p.aerial >= 66) ? "positive" : "warning", "Jogo direto", "Acelera o ataque e evita perdas perto da propria area, mas precisa de profundidade ou referencia para a bola nao voltar rapido.");
  if (state.tactics.attackStyle === "Ataques pelo centro") add(centralMids.length >= 3 && avgPassing >= 64 ? "positive" : "warning", "Corredor central", centralMids.length >= 3 ? "O meio tem gente para tabelar e entrar entre linhas. O rival pode responder fechando o funil." : "Falta presenca central para insistir por dentro com seguranca.");
  if (state.tactics.attackStyle === "Cruzamentos") add(forwards.some((p) => p.aerial >= 66 || p.finishing >= 68) ? "positive" : "warning", "Cruzamentos", "Funciona melhor com area ocupada e bom jogo aereo. Sem isso, vira volume sem qualidade.");

  if (state.tactics.defenseStyle === "Bloco baixo") add(avgTackling >= 64 ? "positive" : "risk", "Bloco baixo", avgTackling >= 64 ? "Protege profundidade e favorece defensores fortes em duelo." : "Baixar demais sem bom desarme convida finalizacoes perto da area.");
  if (state.tactics.defenseStyle === "Pressao alta") add(avgStamina >= 68 ? "positive" : "risk", "Pressao defensiva", avgStamina >= 68 ? "Pode recuperar alto e criar chances curtas." : "A pressao pode quebrar cedo e abrir o meio se o rival escapar.");
  if (state.tactics.defenseStyle === "Marcacao agressiva") add("warning", "Marcacao agressiva", "Aumenta duelos e roubadas, mas eleva risco de faltas, amarelos e suspensoes.");
  if (state.tactics.defenseStyle === "Compacto") add(mids.length >= 4 ? "positive" : "warning", "Compactacao", "Fecha linhas por dentro e protege a entrada da area. O ponto fraco costuma ser a inversao rapida para o lado oposto.");
  if (state.tactics.defenseStyle === "Bloco medio") add("positive", "Bloco medio", "Mantem o time conectado sem gastar tanta energia quanto pressao alta. E uma base confiavel para 90 minutos.");

  if (tired.length) add("risk", "Gestao fisica", `${tired.length} titular(es) chegam abaixo do ideal fisico. Considere baixar intensidade ou planejar substituicoes.`);

  document.querySelector("#tacticAdvice").innerHTML = advice.map((item) => `
    <article class="advice-card ${item.type}">
      <strong>${item.title}</strong>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function interestButton(playerId) {
  const active = (state.marketInterestList || []).includes(playerId);
  return `<button class="${active ? "secondary-action" : "secondary-action"} small-action" data-toggle-interest="${playerId}">${active ? "Remover interesse" : "Adicionar interesse"}</button>`;
}

function marketRenderKey() {
  const view = state.marketPlayerSubTab || "listed";
  const quickFilters = [
    document.querySelector("#marketSearch")?.value || "",
    document.querySelector("#positionFilter")?.value || "all",
    document.querySelector("#affordFilter")?.value || "all"
  ].join("|");
  const advancedFilters = [
    document.querySelector("#marketAdvancedName")?.value || "",
    document.querySelector("#marketSearchPosition")?.value || "all",
    document.querySelector("#marketMaxValue")?.value || "",
    document.querySelector("#marketMinRating")?.value || "",
    document.querySelector("#marketMaxRating")?.value || "",
    document.querySelector("#marketSearchAge")?.value || "all"
  ].join("|");
  const listedShape = (state.market || []).map((item) => `${item.playerId}:${item.clubId}:${item.listStatus}:${Math.round(item.askingPrice || 0)}`).join("|");
  const scoutShape = [
    Object.entries(state.scouting || {}).map(([id, item]) => `${id}:${item?.level || item}`).join("|"),
    (state.scoutingJobs || []).map((job) => `${job.playerId}:${job.completeDay}:${job.targetLevel}`).join("|")
  ].join("::");
  const externalShape = view === "listed" ? "" : externalMarketCardsKey();
  return [
    view,
    state.day,
    state.userClubId,
    state.marketSearchPerformed ? 1 : 0,
    quickFilters,
    advancedFilters,
    listedShape,
    (state.marketInterestList || []).join("|"),
    scoutShape,
    externalShape
  ].join("||");
}

function renderMarket() {
  const view = state.marketPlayerSubTab || "listed";
  document.querySelectorAll("[data-market-player-section]").forEach((button) => {
    button.classList.toggle("active", button.dataset.marketPlayerSection === view);
  });
  document.querySelector("#marketQuickFilters")?.classList.toggle("hidden", view === "search");
  document.querySelector("#marketAdvancedSearch")?.classList.toggle("hidden", view !== "search");
  const cacheKey = marketRenderKey();
  const cached = contentRenderCache.market.get(cacheKey);
  if (cached) {
    document.querySelector("#marketHint").textContent = cached.hint;
    document.querySelector("#marketList").innerHTML = cached.html;
    return;
  }
  const list = marketPlayersForView();
  const hint = view === "listed" ? "jogadores listados"
    : view === "scouted" ? "observados"
      : view === "interest" ? "lista de interesse"
        : state.marketSearchPerformed ? "resultado da pesquisa" : "pesquisa pronta";
  const hintText = view === "search" && !state.marketSearchPerformed ? "defina os filtros e pesquise" : `${list.length} ${hint}`;
  const html = list.length ? list.map((player) => {
    const level = scoutLevel(player.playerId, player.clubId);
    return `
      <div class="market-row">
        <div>
          <span class="market-name">${player.name}</span>
          <span class="market-meta">${positionText(player)} - ${player.age} anos - ${nationalityText(player)} - ${player.sourceClub} - ${listLabel(player.listStatus)} - ${player.contractEndDay ? contractText(player) : "sem contrato"} - geral ${scoutText(player.rating, level)} - pot ${level > 0.75 ? scoutText(player.potential, level) : "?"} - valor ${level >= 1.35 ? money(player.value) : "a observar"}${player.releaseClause ? ` - clausula ${money(player.releaseClause)}` : ""}</span>
          ${scoutedAttributes(player, level)}
          <span class="negotiation-note">Quer ${player.wants}; dificuldade ${player.difficulty}/100; pedido aproximado ${money(player.askingPrice)}</span>
        </div>
        <div class="market-actions">
          ${player.listStatus === "blocked"
            ? `<button class="secondary-action" disabled>Intocavel</button>`
            : ["free", "precontract"].includes(player.listStatus)
              ? `<button class="buy-button" data-open-contract-only="${player.playerId}">${player.listStatus === "free" ? "Negociar contrato" : "Propor pre-contrato"}</button>`
              : `<button class="buy-button" data-open-proposal="${player.playerId}" data-proposal-type="${player.listStatus === "loan" ? "loan" : "transfer"}">Fazer proposta</button>
               ${releaseClauseButton(player.playerId, player.releaseClause, true)}`}
          ${scoutButton(player.playerId, level)}
          ${interestButton(player.playerId)}
        </div>
      </div>
    `;
  }).join("") : `<div class="event">${view === "search" && !state.marketSearchPerformed ? "Defina os criterios e clique em Pesquisar para listar jogadores." : "Nenhum jogador encontrado para esses filtros."}</div>`;
  document.querySelector("#marketHint").textContent = hintText;
  document.querySelector("#marketList").innerHTML = html;
  limitedCacheSet(contentRenderCache.market, cacheKey, { hint: hintText, html });
}

function renderMarketSections() {
  const active = state.marketSubTab || "players";
  document.querySelectorAll("[data-market-section]").forEach((button) => {
    button.classList.toggle("active", button.dataset.marketSection === active);
  });
  [
    ["players", "#marketPlayersSection"],
    ["offers", "#marketOffersSection"],
    ["history", "#marketHistorySection"]
  ].forEach(([key, selector]) => {
    const section = document.querySelector(selector);
    if (section) section.classList.toggle("active", key === active);
  });
}

function renderOffers() {
  const countTarget = document.querySelector("#offerCount");
  const listTarget = document.querySelector("#incomingOffers");
  if (!countTarget || !listTarget) return;
  const offers = state.offers || [];
  if (!offers.length) {
    countTarget.textContent = "0 abertas";
    listTarget.innerHTML = `<div class="event">Nenhuma proposta aberta agora.</div>`;
    return;
  }
  const cacheKey = [
    state.day,
    offers.map((offer) => `${offer.id}:${offer.status}:${offer.fee}:${offer.answerDay || ""}:${offer.createdDay || offer.day || ""}`).join("|")
  ].join("::");
  const cached = contentRenderCache.offers.get(cacheKey);
  if (cached) {
    countTarget.textContent = cached.count;
    listTarget.innerHTML = cached.html;
    return;
  }
  const club = getUserClub();
  const countText = `${offers.length} abertas`;
  const html = offers.map((offer) => {
    const player = playerById(club, offer.playerId);
    if (!player) return "";
    const waiting = offer.status === "counter_wait";
    const daysLeft = Math.max(0, 15 - (state.day - Number(offer.createdDay || offer.day || state.day)));
    return `
      <div class="market-row">
        <div>
          <span class="market-name">${offer.buyerName} quer ${offer.type === "loan" ? "emprestar" : "comprar"} ${player.name}</span>
          <span class="market-meta">${positionText(player)} - ${player.age} anos - ${nationalityText(player)} - geral ${player.rating.toFixed(0)} - ${offer.note}</span>
          <span class="negotiation-note">Oferta: ${money(offer.fee)}${offer.type === "loan" ? " de taxa" : ""}${waiting ? ` - contraproposta enviada, resposta no dia ${offer.answerDay}` : ""} - expira em ${daysLeft}d. ${offer.type === "loan" ? "Emprestar abre minutos fora e mantem o vinculo." : "Vender aumenta o caixa, mas pode mexer na moral e na escalacao."}</span>
        </div>
        <div class="action-row">
          <button class="secondary-action small-action" data-view-offer="${offer.id}">Ver proposta</button>
          ${waiting ? `<button class="secondary-action small-action" disabled>Aguardando</button>` : `
            <button class="buy-button small-action" data-negotiate-offer="${offer.id}">Negociar</button>
            <button class="accept-button small-action" data-accept-offer="${offer.id}">Aceitar</button>
            <button class="reject-button small-action" data-reject-offer="${offer.id}">Recusar</button>
          `}
        </div>
      </div>
    `;
  }).join("");
  countTarget.textContent = countText;
  listTarget.innerHTML = html;
  limitedCacheSet(contentRenderCache.offers, cacheKey, { count: countText, html });
}

function activeTransfers() {
  const query = document.querySelector("#transferSearch")?.value.toLowerCase().trim() || "";
  const clubId = document.querySelector("#transferClubFilter")?.value || "all";
  const minValue = Number(document.querySelector("#transferMinFilter")?.value || 0);
  return (state.transferHistory || []).filter((deal) => {
    const text = `${deal.playerName} ${deal.fromName} ${deal.toName} ${deal.position}`.toLowerCase();
    const textMatch = !query || text.includes(query);
    const clubMatch = clubId === "all" || deal.fromId === clubId || deal.toId === clubId;
    const valueMatch = !minValue || deal.fee >= minValue;
    return textMatch && clubMatch && valueMatch;
  });
}

function renderCalendar() {
  const target = document.querySelector("#calendarList");
  if (!target) return;
  state.calendarMonth = Number.isInteger(state.calendarMonth) ? state.calendarMonth : currentMonthIndex();
  state.calendarMonth = clamp(state.calendarMonth, 0, 11);
  const monthLength = monthLengths[state.calendarMonth];
  const monthStart = monthStartDay(state.calendarMonth);
  const fixtures = new Map();
  for (let round = 1; round <= state.maxRounds; round += 1) {
    const fixture = fixtureForRound(round);
    fixtures.set(fixture.day, [...(fixtures.get(fixture.day) || []), fixture]);
  }
  cupRoundDays.forEach((day, index) => {
    const current = state.cup?.currentUserMatch?.day === day ? nextCupFixture() : null;
    const cupFixture = current || {
      day,
      type: "cup",
      competition: state.cup?.name || "Copa Nacional",
      round: cupRoundName(index),
      opponent: { name: state.cup?.finished || state.cup?.roundIndex > index ? "Rodada concluida" : "A definir" },
      userHome: true
    };
    fixtures.set(day, [...(fixtures.get(day) || []), cupFixture]);
  });
  (state.extraCompetitions || []).forEach((competition) => {
    (competition.userFixtures || []).forEach((fixture) => {
      if (fixture.played) return;
      const opponent = state.clubs.find((club) => club.id === fixture.opponentId);
      if (!opponent) return;
      fixtures.set(fixture.day, [
        ...(fixtures.get(fixture.day) || []),
        {
          ...fixture,
          type: "extra",
          competition: competition.name,
          opponent,
          userHome: fixture.homeId === state.userClubId
        }
      ]);
    });
  });
  const days = Array.from({ length: monthLength }, (_, index) => monthStart + index);
  document.querySelector("#calendarHint").textContent = `${monthNames[state.calendarMonth]} de ${seasonStartYear} - hoje: ${dateFull()}`;
  target.innerHTML = `
    <section class="calendar-month">
      <div class="calendar-month-head">
        <strong>${monthNames[state.calendarMonth]} ${seasonStartYear}</strong>
        <span>${state.calendarMonth === currentMonthIndex() ? "mes atual" : "temporada 2026"}</span>
      </div>
      <div class="calendar-weekdays">
        ${["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"].map((day) => `<span>${day}</span>`).join("")}
      </div>
      <div class="calendar-grid">
        ${days.map((day) => {
          const dayFixtures = fixtures.get(day) || [];
          const status = day < state.day ? "past" : day === state.day ? "today" : "";
          return `
            <div class="calendar-cell ${status} ${dayFixtures.length ? "has-match" : ""}">
              <span class="calendar-cell-day">${day - monthStart + 1}/${state.calendarMonth + 1}/${seasonStartYear}</span>
              ${dayFixtures.length ? dayFixtures.map((fixture) => `
                <strong>${fixture.opponent.name}</strong>
                <span>${fixture.competition} - ${fixture.type === "league" ? `Rod. ${fixture.round}` : (fixture.roundLabel || fixture.round)}</span>
                <em>${fixture.type === "cup" && fixture.opponent.name === "A definir" ? "Mata-mata" : fixture.userHome ? "Casa" : "Fora"}</em>
              `).join("") : `<span>Sem jogo</span>`}
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderTransferHistory() {
  const countTarget = document.querySelector("#transferCount");
  const listTarget = document.querySelector("#transferHistory");
  if (!countTarget || !listTarget) return;
  if (!(state.transferHistory || []).length) {
    countTarget.textContent = "0 registros";
    listTarget.innerHTML = `<div class="event">Nenhuma transferencia registrada ainda.</div>`;
    return;
  }
  const cacheKey = [
    state.day,
    document.querySelector("#transferSearch")?.value || "",
    document.querySelector("#transferClubFilter")?.value || "all",
    document.querySelector("#transferMinFilter")?.value || "",
    state.transferHistory.map((deal) => `${deal.id || deal.playerName}:${deal.fromId}:${deal.toId}:${deal.fee}:${deal.day}`).join("|")
  ].join("::");
  const cached = contentRenderCache.transfers.get(cacheKey);
  if (cached) {
    countTarget.textContent = cached.count;
    listTarget.innerHTML = cached.html;
    return;
  }
  const list = activeTransfers();
  const countText = `${list.length} registros`;
  const html = list.length ? list.map((deal) => `
    <div class="market-row transfer-row">
      <div>
        <span class="market-name">${deal.playerName}</span>
        <span class="market-meta">${deal.position} - ${deal.age} anos - G${deal.rating} - ${deal.fromName} -> ${deal.toName}</span>
        <span class="negotiation-note">${deal.day ? dateFull(deal.day) : "-"} - Rodada ${deal.round} - ${deal.type} - ${money(deal.fee)}</span>
      </div>
      <strong class="rating">${money(deal.fee)}</strong>
    </div>
  `).join("") : `<div class="event">Nenhuma transferencia registrada ainda.</div>`;
  countTarget.textContent = countText;
  listTarget.innerHTML = html;
  limitedCacheSet(contentRenderCache.transfers, cacheKey, { count: countText, html });
}

function renderLeague() {
  const view = state.leagueView || "division1";
  const selector = document.querySelector("#competitionViewSelect");
  const divisions = [...new Set(state.clubs.map((club) => clubDivision(club)))].sort((a, b) => a - b);
  const extraOptions = (state.extraCompetitions || []).map((competition) => `extra:${competition.id}`);
  if (selector) {
    selector.innerHTML = [
      ...divisions.map((division) => `<option value="division${division}" ${view === `division${division}` ? "selected" : ""}>${divisionLabel(division)}</option>`),
      `<option value="cup" ${view === "cup" ? "selected" : ""}>${state.cup?.name || "Copa Nacional"}</option>`,
      ...(state.extraCompetitions || []).map((competition) => `<option value="extra:${competition.id}" ${view === `extra:${competition.id}` ? "selected" : ""}>${competition.name}</option>`)
    ].join("");
    selector.value = divisions.some((division) => view === `division${division}`) || view === "cup" || extraOptions.includes(view) ? view : `division${divisions[0] || 1}`;
    state.leagueView = selector.value;
  }
  const activeView = state.leagueView || view;
  const cupLikeView = activeView === "cup" || activeView.startsWith("extra:");
  [
    [activeView.startsWith("division") ? activeView : "division1", "#divisionOneView"],
    ["never", "#divisionTwoView"],
    [cupLikeView ? activeView : "cup", "#cupView"]
  ].forEach(([key, selectorText]) => {
    const target = document.querySelector(selectorText);
    if (target) target.classList.toggle("hidden", key !== activeView);
  });
  const rows = (division) => standings(division).map((club, index, list) => {
    const zone = division === 1 && index >= list.length - promotionSlots
      ? "relegation-zone"
      : division === 2 && index < promotionSlots
        ? "promotion-zone"
        : "";
    return `
    <tr class="${club.id === state.userClubId ? "user-club" : ""} ${zone}">
      <td>${index + 1}</td>
      <td><button class="club-link club-link-logo" data-view-club="${club.id}">${clubLogo(club, "tiny")}<span>${club.name}</span></button></td>
      <td>${club.stats.played}</td>
      <td>${club.stats.wins}</td>
      <td>${club.stats.draws}</td>
      <td>${club.stats.losses}</td>
      <td>${club.stats.gf - club.stats.ga}</td>
      <td>${club.stats.gf}</td>
      <td>${club.stats.ga}</td>
      <td>${(club.stats.xg || 0).toFixed(1)}</td>
      <td>${club.stats.points}</td>
    </tr>
  `;
  }).join("");
  const selectedDivision = Number(String(activeView).replace("division", "")) || 1;
  const title = document.querySelector("#divisionOneView .table-title");
  if (title) title.textContent = divisionLabel(selectedDivision);
  document.querySelector("#leagueTable").innerHTML = rows(selectedDivision);
  const second = document.querySelector("#secondLeagueTable");
  if (second) second.innerHTML = rows(2);
  renderCupOverview();
}

function renderCupOverview() {
  const target = document.querySelector("#cupOverview");
  if (!target) return;
  if (state.leagueView?.startsWith("extra:")) {
    renderExtraCompetitionOverview(target, state.leagueView.replace("extra:", ""));
    return;
  }
  const cup = state.cup || createCupState(state.clubs);
  const champion = cup.championId ? state.clubs.find((club) => club.id === cup.championId) : null;
  const runnerUp = cup.runnerUpId ? state.clubs.find((club) => club.id === cup.runnerUpId) : null;
  const current = cup.currentUserMatch ? nextCupFixture() : null;
  const extraCompetitions = (state.extraCompetitions || []).filter((competition) => competition.userFixtures?.length);
  const activeTeams = (cup.activeTeamIds || cup.roundTeamIds || [])
    .map((id) => state.clubs.find((club) => club.id === id))
    .filter(Boolean)
    .sort((a, b) => b.reputation - a.reputation);
  const history = [...(cup.history || [])].slice(0, 12);
  target.innerHTML = `
    <div class="section-heading compact-heading">
      <h2>${cup.name || "Copa Nacional"}</h2>
      <span>mata-mata nacional da database</span>
    </div>
    <div class="stats-grid compact-stats">
      <article><span>Status</span><strong>${champion ? "Encerrada" : cupRoundName(cup.roundIndex || 0)}</strong></article>
      <article><span>Campeao</span><strong>${champion?.name || "-"}</strong></article>
      <article><span>Vice</span><strong>${runnerUp?.name || "-"}</strong></article>
      <article><span>Premio campeao</span><strong>${money(cupPrizeByRound[cupPrizeByRound.length - 1])}</strong></article>
    </div>
    ${extraCompetitions.length ? `<div class="lineup-list imported-competitions">
      ${extraCompetitions.map((competition) => {
        const next = (competition.userFixtures || []).find((fixture) => !fixture.played);
        return `
          <div class="lineup-item">
            <span class="position">${competition.category === "continental" ? "CON" : "EST"}</span>
            <span>${competition.name}</span>
            <strong>${next ? `${dateShort(next.day)} vs ${state.clubs.find((club) => club.id === next.opponentId)?.name || "A definir"}` : "Campanha encerrada"}</strong>
          </div>
        `;
      }).join("")}
    </div>` : ""}
    ${current ? `<div class="event">Seu proximo jogo de copa: ${current.home.name} x ${current.away.name}, ${current.round}, em ${dateShort(current.day)}.</div>` : ""}
    <div class="club-detail-grid cup-grid">
      <section>
        <div class="section-heading compact-heading">
          <h2>${champion ? "Campanha final" : "Clubes vivos"}</h2>
          <span>${champion ? "resultado consolidado" : `${activeTeams.length} clubes`}</span>
        </div>
        <div class="lineup-list">
          ${(champion ? [champion, runnerUp].filter(Boolean) : activeTeams.slice(0, 20)).map((club, index) => `
            <div class="lineup-item">
              <span class="position">${index + 1}</span>
              <span class="club-link-logo">${clubLogo(club, "tiny")}<span>${club.name}</span></span>
              <strong>${club.cup?.eliminated ? "Elim." : "Vivo"}</strong>
            </div>
          `).join("") || `<div class="event">A copa ainda nao comecou.</div>`}
        </div>
      </section>
      <section>
        <div class="section-heading compact-heading">
          <h2>Ultimos jogos</h2>
          <span>${history.length} registros</span>
        </div>
        <div class="lineup-list">
          ${history.length ? history.map((match) => `
            <div class="lineup-item">
              <span class="position">${match.round}</span>
              <span>${match.homeName} ${match.homeGoals} x ${match.awayGoals} ${match.awayName}</span>
              <strong>${dateShort(match.day)}</strong>
            </div>
          `).join("") : `<div class="event">Nenhum jogo de copa disputado ainda.</div>`}
        </div>
      </section>
    </div>
  `;
}

function renderExtraCompetitionOverview(target, competitionId) {
  const competition = (state.extraCompetitions || []).find((item) => item.id === competitionId);
  if (!competition) {
    target.innerHTML = `<div class="event">Competicao nao encontrada neste save.</div>`;
    return;
  }
  const participants = (competition.participants || [])
    .map((id) => state.clubs.find((club) => club.id === id))
    .filter(Boolean)
    .sort((a, b) => b.reputation - a.reputation);
  const fixtures = [...(competition.userFixtures || [])].sort((a, b) => a.day - b.day);
  const history = [...(competition.history || [])].slice(0, 14);
  const next = fixtures.find((fixture) => !fixture.played);
  target.innerHTML = `
    <div class="section-heading compact-heading">
      <h2>${competition.name}</h2>
      <span>${competition.category === "continental" ? "competicao continental" : "competicao estadual"} - ${competition.format}</span>
    </div>
    <div class="stats-grid compact-stats">
      <article><span>Participantes</span><strong>${participants.length}</strong></article>
      <article><span>Jogos do clube</span><strong>${fixtures.length}</strong></article>
      <article><span>Disputados</span><strong>${fixtures.filter((fixture) => fixture.played).length}</strong></article>
      <article><span>Proximo</span><strong>${next ? dateShort(next.day) : "Encerrado"}</strong></article>
    </div>
    ${next ? `<div class="event">Proximo jogo: ${state.clubs.find((club) => club.id === next.homeId)?.name || "-"} x ${state.clubs.find((club) => club.id === next.awayId)?.name || "-"}, ${next.roundLabel || next.round}, em ${dateShort(next.day)}.</div>` : ""}
    <div class="club-detail-grid cup-grid">
      <section>
        <div class="section-heading compact-heading">
          <h2>Participantes</h2>
          <span>${participants.length} clubes importados</span>
        </div>
        <div class="lineup-list">
          ${participants.map((club, index) => `
            <div class="lineup-item">
              <span class="position">${index + 1}</span>
              <span class="club-link-logo">${clubLogo(club, "tiny")}<span>${club.name}</span></span>
              <strong>rep ${club.reputation}</strong>
            </div>
          `).join("")}
        </div>
      </section>
      <section>
        <div class="section-heading compact-heading">
          <h2>Calendario</h2>
          <span>${fixtures.length} jogos do seu clube</span>
        </div>
        <div class="lineup-list">
          ${fixtures.length ? fixtures.map((fixture) => {
            const home = state.clubs.find((club) => club.id === fixture.homeId);
            const away = state.clubs.find((club) => club.id === fixture.awayId);
            return `
              <div class="lineup-item">
                <span class="position">${dateShort(fixture.day)}</span>
                <span>${home?.name || "-"} ${fixture.result ? `${fixture.result.homeGoals} x ${fixture.result.awayGoals}` : "x"} ${away?.name || "-"}</span>
                <strong>${fixture.played ? "Jogado" : (fixture.roundLabel || `Rod. ${fixture.round}`)}</strong>
              </div>
            `;
          }).join("") : `<div class="event">Seu clube nao tem jogos nessa competicao.</div>`}
        </div>
        ${history.length ? `<div class="section-heading compact-heading"><h2>Historico</h2><span>${history.length} registros</span></div>
        <div class="lineup-list">
          ${history.map((match) => `
            <div class="lineup-item">
              <span class="position">${match.round}</span>
              <span>${match.homeName} ${match.homeGoals} x ${match.awayGoals} ${match.awayName}</span>
              <strong>${dateShort(match.day)}</strong>
            </div>
          `).join("")}
        </div>` : ""}
      </section>
    </div>
  `;
}

function renderClubProfile() {
  const target = document.querySelector("#clubProfile");
  if (!target) return;
  const club = state.clubs.find((item) => item.id === (state.selectedClubId || state.userClubId)) || getUserClub();
  const division = clubDivision(club);
  const rank = standings(division).findIndex((item) => item.id === club.id) + 1;
  const tactics = club.id === state.userClubId ? state.tactics : aiTactics(club);
  const power = teamStrength(club, tactics, club.id === state.userClubId ? currentLineup(club, state.tactics, state.lineupIds, state.lineupRoles) : bestEleven(club, tactics));
  const lineup = club.id === state.userClubId ? currentLineup(club, state.tactics, state.lineupIds, state.lineupRoles) : bestEleven(club, tactics);
  const visibleSquad = sortedClubProfileSquad(club).slice(0, 22);
  target.innerHTML = `
    <div class="section-heading">
      <div class="club-profile-title">
        ${clubLogo(club, "large")}
        <div>
          <p class="eyebrow">perfil do clube</p>
          <h2>${club.name}</h2>
        </div>
      </div>
      <button class="secondary-action small-action" data-close-club-profile>Voltar</button>
    </div>
    <span class="pill">${club.id === state.userClubId ? "seu clube" : "adversario"} - ${divisionLabel(division)}</span>
    <p class="club-style">${club.style}</p>
    <div class="stats-grid compact-stats">
      <article><span>Posicao</span><strong>${rank}o</strong></article>
      <article><span>Orcamento</span><strong>${money(club.budget)}</strong></article>
      <article><span>Forca</span><strong>${power.total.toFixed(1)}</strong></article>
      <article><span>Formacao mais usada</span><strong>${mostUsedFormation(club)}</strong></article>
      <article><span>Premios/receitas ult. temporada</span><strong>${money(club.finance?.lastSeasonTotal || 0)}</strong></article>
    </div>
    <div class="club-detail-grid">
      <section>
        <div class="section-heading">
          <h2>Elenco</h2>
          <span>${club.squad.length} jogadores</span>
        </div>
        <div class="filter-bar club-squad-filters">
          <input id="clubSquadSearch" type="search" placeholder="Pesquisar jogador" value="${document.querySelector("#clubSquadSearch")?.value || ""}" />
          <select id="clubSquadSort">
            ${[
              ["rating-desc", "Geral: maior primeiro"],
              ["rating-asc", "Geral: menor primeiro"],
              ["value-desc", "Valor: maior primeiro"],
              ["value-asc", "Valor: menor primeiro"],
              ["position-asc", "Posicao"],
              ["apps-desc", "Jogos"],
              ["avg-desc", "Nota media"]
            ].map(([value, label]) => `<option value="${value}" ${value === (document.querySelector("#clubSquadSort")?.value || "rating-desc") ? "selected" : ""}>${label}</option>`).join("")}
          </select>
        </div>
        <div class="player-list">
          ${visibleSquad.map((player) => clubPlayerRow(player, club)).join("")}
        </div>
      </section>
      <section>
        <div class="section-heading">
          <h2>Onze base</h2>
          <span>${mostUsedFormation(club)}</span>
        </div>
        <div class="lineup-list">
          ${lineup.map((player) => `<div class="lineup-item"><span class="position">${player.slot}</span><span>${player.name}</span><strong>${scoutText(player.rating, scoutLevel(player.id, club.id))}</strong></div>`).join("")}
        </div>
        <div class="section-heading compact-heading">
          <h2>Instalacoes</h2>
          <span>${club.youthAcademy?.length || 0}/${youthAcademyLimit} na base</span>
        </div>
        <div class="lineup-list">
          ${Object.entries(facilityTypes).map(([type, info]) => `<div class="lineup-item"><span>${info.label}</span><strong>${starRating(club.facilities?.[type] || 3)}</strong></div>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function sortedClubProfileSquad(club) {
  const query = document.querySelector("#clubSquadSearch")?.value.toLowerCase().trim() || "";
  const sort = document.querySelector("#clubSquadSort")?.value || "rating-desc";
  const avg = (player) => player.stats?.apps ? player.stats.ratingSum / player.stats.apps : 0;
  const filtered = club.squad.filter((player) => !query || player.name.toLowerCase().includes(query));
  const sorters = {
    "rating-desc": (a, b) => b.rating - a.rating,
    "rating-asc": (a, b) => a.rating - b.rating,
    "value-desc": (a, b) => calculatePlayerValue(b, club.reputation) - calculatePlayerValue(a, club.reputation),
    "value-asc": (a, b) => calculatePlayerValue(a, club.reputation) - calculatePlayerValue(b, club.reputation),
    "position-asc": (a, b) => positionRank(a.position) - positionRank(b.position) || b.rating - a.rating,
    "apps-desc": (a, b) => (b.stats?.apps || 0) - (a.stats?.apps || 0),
    "avg-desc": (a, b) => avg(b) - avg(a)
  };
  return filtered.sort(sorters[sort] || sorters["rating-desc"]);
}

function clubPlayerRow(player, club) {
  const level = scoutLevel(player.id, club.id);
  const marketItem = findMarketCard(player.id);
  return `
    <div class="player-row">
      <div>
        <span class="player-name">${player.name}</span>
        <span class="player-meta">${positionText(player)} - ${player.age} anos - ${nationalityText(player)} - ${contractText(player)} - geral ${scoutText(player.rating, level)} - pot ${level > 0.75 ? scoutText(player.potential, level) : "?"} - valor ${level >= 1.35 ? money(calculatePlayerValue(player, club.reputation)) : "a observar"}${pendingTransferText(player)}${player.releaseClause ? ` - clausula ${money(player.releaseClause)}` : ""} - ${listLabel(player.listStatus)}</span>
        ${scoutedAttributes(player, level)}
        <div class="player-statline">${statLine(player)} - Nota ${player.stats?.apps ? (player.stats.ratingSum / player.stats.apps).toFixed(2) : "-"}</div>
      </div>
      ${club.id === state.userClubId ? `<span class="rating">${player.rating.toFixed(0)}</span>` : `
        <div class="market-actions compact-actions">
          ${marketItem
            ? marketItem.listStatus === "blocked"
              ? `<button class="secondary-action small-action" disabled>Intocavel</button>`
              : ["free", "precontract"].includes(marketItem.listStatus)
                ? `<button class="buy-button small-action" data-open-contract-only="${player.id}">${marketItem.listStatus === "free" ? "Negociar contrato" : "Pre-contrato"}</button>`
                : `<button class="buy-button small-action" data-open-proposal="${player.id}" data-proposal-type="${marketItem.listStatus === "loan" ? "loan" : "transfer"}">Fazer proposta</button>
                 ${releaseClauseButton(player.id, player.releaseClause, true)}`
            : ""}
          ${scoutButton(player.id, level)}
          ${interestButton(player.id)}
        </div>
      `}
    </div>
  `;
}

function renderNews() {
  document.querySelector("#newsFeed").innerHTML = state.news.map((item) => `<p>${item}</p>`).join("");
}

function migrateLegacySaveIfNeeded() {
  if (typeof localStorage === "undefined") return;
  const legacy = localStorage.getItem("onzeVivoSave");
  if (!legacy || localStorage.getItem(saveSlotKeys[0])) return;
  localStorage.setItem(saveSlotKeys[0], legacy);
  localStorage.setItem(recentSaveKey, "1");
  localStorage.removeItem("onzeVivoSave");
}

function saveSlotKey(slot) {
  return saveSlotKeys[Number(slot) - 1];
}

function rawSaveForSlot(slot) {
  const key = saveSlotKey(slot);
  if (!key || typeof localStorage === "undefined") return null;
  return localStorage.getItem(key);
}

function saveSummary(slot) {
  try {
    const raw = rawSaveForSlot(slot);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const club = (parsed.clubs || []).find((item) => item.id === parsed.userClubId);
    return {
      slot,
      clubName: club?.name || "Clube desconhecido",
      mode: parsed.gameMode === "zero" ? "Carreira do zero" : "Modo livre",
      day: parsed.day || 1,
      round: parsed.round || 1,
      databaseName: parsed.databaseName || "FootCoach generica",
      coachRep: parsed.coach?.reputation || 0
    };
  } catch {
    return null;
  }
}

function firstAvailableSaveSlot() {
  return saveSlotKeys.findIndex((_, index) => !rawSaveForSlot(index + 1)) + 1 || 1;
}

function saveState() {
  if (!state || typeof localStorage === "undefined") return;
  currentSaveSlot = currentSaveSlot || firstAvailableSaveSlot();
  state.saveSlot = currentSaveSlot;
  state.savedAt = Date.now();
  try {
    localStorage.setItem(saveSlotKey(currentSaveSlot), JSON.stringify(state));
    localStorage.setItem(recentSaveKey, String(currentSaveSlot));
  } catch (error) {
    console.warn("Espaco local insuficiente. Limpando database importada temporaria e tentando salvar novamente.", error);
    try {
      localStorage.removeItem("footCoachDatabase");
      localStorage.setItem(saveSlotKey(currentSaveSlot), JSON.stringify(state));
      localStorage.setItem(recentSaveKey, String(currentSaveSlot));
    } catch (retryError) {
      console.warn("Nao foi possivel salvar o jogo neste navegador.", retryError);
    }
  }
}

function loadState(slot = null) {
  try {
    if (typeof localStorage === "undefined") return null;
    const targetSlot = Number(slot || localStorage.getItem(recentSaveKey) || 1);
    const saved = rawSaveForSlot(targetSlot);
    currentSaveSlot = saved ? targetSlot : null;
    if (saved) localStorage.setItem(recentSaveKey, String(targetSlot));
    return saved ? migrateState(JSON.parse(saved)) : null;
  } catch (error) {
    console.warn("Save antigo ou invalido ignorado.", error);
    if (slot) localStorage.removeItem(saveSlotKey(slot));
    return null;
  }
}

function deleteSaveSlot(slot) {
  if (typeof localStorage === "undefined") return;
  localStorage.removeItem(saveSlotKey(slot));
  if (localStorage.getItem(recentSaveKey) === String(slot)) localStorage.removeItem(recentSaveKey);
  if (currentSaveSlot === Number(slot)) {
    currentSaveSlot = null;
    state = null;
  }
}

function loadCustomDatabase() {
  if (typeof localStorage === "undefined") return;
  try {
    const saved = localStorage.getItem("footCoachDatabase");
    customDatabase = saved ? sanitizeDatabase(JSON.parse(saved)) : null;
  } catch (error) {
    console.warn("Database customizada invalida ignorada.", error);
    customDatabase = null;
    localStorage.removeItem("footCoachDatabase");
  }
}

function wireEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target.closest("button") || event.target;
    if (target.matches("#newSaveBtn")) {
      resetTransientUiState();
      state = null;
      currentSaveSlot = firstAvailableSaveSlot();
      selectedGameMode = null;
      menuScreen = "mode";
      safeRender("Nao foi possivel abrir a tela de novo save.");
      return;
    }
    if (target.matches("#installAppBtn")) {
      promptInstallApp();
      return;
    }
    if (handleTapMove(event.target)) return;
    if (target.matches("#loadRecentBtn")) {
      runWithLoading("Abrindo o save mais recente...", () => {
        resetTransientUiState();
        const storedRecent = Number(localStorage.getItem(recentSaveKey) || 0);
        const recent = rawSaveForSlot(storedRecent) ? storedRecent : [1, 2, 3].find((slot) => rawSaveForSlot(slot));
        state = loadState(recent);
        prepareStateForEntry();
        if (state) safeRender("O save foi carregado, mas a tela principal encontrou um erro.");
      }, "Carregando save");
      return;
    }
    if (target.matches("[data-load-slot]")) {
      runWithLoading("Restaurando temporada, elenco e competicoes...", () => {
        resetTransientUiState();
        state = loadState(Number(target.dataset.loadSlot));
        prepareStateForEntry();
        if (state) safeRender("O save foi carregado, mas a tela principal encontrou um erro.");
      }, "Carregando save");
      return;
    }
    if (target.matches("[data-delete-slot]")) {
      deleteSaveSlot(Number(target.dataset.deleteSlot));
      render();
      return;
    }

    if (target.matches("#sampleDatabaseBtn")) {
      const textarea = document.querySelector("#databaseTextInput");
      const actions = document.querySelector("#databaseTextActions");
      if (textarea) {
        textarea.value = sampleDatabaseText();
        textarea.classList.remove("hidden");
      }
      if (actions) actions.classList.remove("hidden");
      return;
    }
    if (target.matches("#hideDatabaseTextBtn")) {
      document.querySelector("#databaseTextInput")?.classList.add("hidden");
      document.querySelector("#databaseTextActions")?.classList.add("hidden");
      return;
    }
    if (target.matches("#importDatabaseTextBtn")) {
      runWithLoading("Validando clubes, jogadores e competicoes da database...", () => {
        try {
          applyCustomDatabase(document.querySelector("#databaseTextInput")?.value || "");
        } catch (error) {
          setDatabaseStatus(`Erro na database: ${error.message}`);
        }
      }, "Importando database");
      return;
    }
    if (target.matches("#importDatabaseUrlBtn")) {
      importDatabaseFromUrl(document.querySelector("#databaseUrlInput")?.value || "");
      return;
    }
    if (target.matches("#clearDatabaseBtn")) {
      clearCustomDatabase();
      return;
    }

    const modeButton = event.target.closest("[data-game-mode]");
    if (modeButton && !state) {
      selectedGameMode = modeButton.dataset.gameMode;
      clubSelectDivision = selectedGameMode === "zero" ? 2 : 1;
      menuScreen = "club";
      render();
      return;
    }
    if (target.matches("#backToModeBtn") && !state) {
      selectedGameMode = null;
      menuScreen = "mode";
      render();
      return;
    }

    const clubButton = event.target.closest("[data-club]");
    if (clubButton) {
      runWithLoading("Criando clubes, calendario, elencos, base e competicoes...", () => {
        resetTransientUiState();
        state = createNewGame(clubButton.dataset.club, selectedGameMode || "free");
        saveState();
        prepareStateForEntry();
        safeRender("O save foi criado, mas a tela principal encontrou um erro.");
      }, "Criando save");
      return;
    }

    const tab = event.target.closest(".tab");
    if (tab) {
      if (state?.liveMatch && tab.dataset.tab !== "match") return;
      const openTab = () => {
        document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
        document.querySelectorAll(".tab-panel").forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
        document.querySelector(`#${tab.dataset.tab}Tab`).classList.add("active");
        render();
      };
      if (["market", "league", "calendar", "club", "squad", "training", "lineup"].includes(tab.dataset.tab) && (tab.dataset.tab !== "market" || marketSectionNeedsHeavyRender())) runWithLoading(tabLoadingMessage(tab.dataset.tab), openTab, "Atualizando");
      else openTab();
      return;
    }

    if (event.target.matches("#liveMatchBtn")) startLiveMatch();
    if (event.target.matches("#quickSimBtn")) quickSimMatch();
    if (event.target.matches("#advanceDayBtn")) toggleDayAdvance();
    if (event.target.matches("#stopDayAdvanceOverlayBtn")) stopDayAdvance(true);
    if (event.target.matches("[data-close-alert]")) closeAlertModal();
    if (event.target.matches("#pauseMatchBtn")) toggleLivePause();
    if (event.target.matches("#finishMatchBtn")) quickSimMatch();
    if (event.target.matches("#autoLineupBtn")) resetLineup();
    if (event.target.matches("#prevMonthBtn")) {
      state.calendarMonth = Math.max(0, (state.calendarMonth ?? currentMonthIndex()) - 1);
      saveState();
      updateHeavyContent("Montando calendario do mes...", renderCalendar);
    }
    if (event.target.matches("#nextMonthBtn")) {
      const lastMonth = 11;
      state.calendarMonth = Math.min(lastMonth, (state.calendarMonth ?? currentMonthIndex()) + 1);
      saveState();
      updateHeavyContent("Montando calendario do mes...", renderCalendar);
    }
    if (event.target.matches("[data-market-section]")) {
      state.marketSubTab = event.target.dataset.marketSection;
      saveState();
      updateMarketSectionContent("Atualizando mercado e negociacoes...");
    }
    if (event.target.matches("[data-market-player-section]")) {
      state.marketPlayerSubTab = event.target.dataset.marketPlayerSection;
      saveState();
      updateMarketContent("Filtrando jogadores do mercado...");
    }
    if (event.target.matches("[data-toggle-interest]")) {
      state.marketInterestList = Array.isArray(state.marketInterestList) ? state.marketInterestList : [];
      const playerId = event.target.dataset.toggleInterest;
      state.marketInterestList = state.marketInterestList.includes(playerId)
        ? state.marketInterestList.filter((id) => id !== playerId)
        : [...state.marketInterestList, playerId];
      saveState();
      updateMarketContent("Atualizando lista de interesse...");
    }
    if (event.target.matches("#advancedMarketSearchBtn")) {
      state.marketSearchPerformed = true;
      saveState();
      updateHeavyContent("Buscando jogadores com os criterios definidos...", renderMarket);
    }
    if (event.target.matches("[data-squad-section]")) {
      state.squadSubTab = event.target.dataset.squadSection;
      saveState();
      updateHeavyContent("Atualizando elenco e categorias...", renderSquad);
    }
    if (event.target.matches("[data-open-proposal]")) openNegotiation(event.target.dataset.openProposal, event.target.dataset.proposalType || "transfer");
    if (event.target.matches("[data-open-contract-only]")) openContractOnly(event.target.dataset.openContractOnly);
    if (event.target.matches("[data-renew-contract]")) openRenewal(event.target.dataset.renewContract);
    if (event.target.matches("[data-deal-section]")) {
      state.negotiation = { ...state.negotiation, ...readNegotiationForm(), type: event.target.dataset.dealSection };
      saveState();
      renderNegotiationModal();
    }
    if (event.target.matches("[data-close-negotiation]")) closeNegotiation();
    if (event.target.matches("[data-close-offer-modal]")) closeOfferModal();
    if (event.target.matches("[data-evaluate-negotiation]")) evaluateNegotiation();
    if (event.target.matches("[data-submit-club-proposal]")) submitClubProposal();
    if (event.target.matches("[data-submit-contract]")) submitContractProposal();
    if (event.target.matches("[data-view-offer]")) openOfferModal(event.target.dataset.viewOffer, "view");
    if (event.target.matches("[data-accept-job]")) acceptJobOffer(event.target.dataset.acceptJob);
    if (event.target.matches("[data-decline-jobs]")) declineJobOffers();
    if (event.target.matches("[data-negotiate-offer]")) openOfferModal(event.target.dataset.negotiateOffer, "negotiate");
    if (event.target.matches("[data-evaluate-incoming]")) evaluateIncomingCounter();
    if (event.target.matches("[data-submit-incoming-counter]")) submitIncomingCounter();
    if (event.target.matches("[data-open-contract]")) {
      const proposal = state.pendingProposals.find((item) => item.id === event.target.dataset.openContract);
      if (proposal) openNegotiation(proposal.playerId, "contract", proposal.id);
    }
    if (event.target.matches("[data-renegotiate-proposal]")) {
      const proposal = state.pendingProposals.find((item) => item.id === event.target.dataset.renegotiateProposal);
      if (proposal) openNegotiation(proposal.playerId, proposal.type === "loan" ? "loan" : "transfer", proposal.id);
    }
    if (event.target.matches("[data-read-inbox]")) {
      const message = state.inbox.find((item) => item.id === event.target.dataset.readInbox);
      if (message) message.read = true;
      saveState();
      renderInbox();
    }
    if (event.target.matches("#markAllInboxReadBtn")) {
      state.inbox = (state.inbox || []).map((message) => ({ ...message, read: true }));
      saveState();
      renderInbox();
    }
    if (event.target.matches("[data-scout-player]")) scoutPlayer(event.target.dataset.scoutPlayer);
    if (event.target.matches("[data-upgrade-facility]")) improveFacility(event.target.dataset.upgradeFacility);
    if (event.target.matches("[data-sign-youth]")) signYouthCandidate(event.target.dataset.signYouth);
    if (event.target.matches("[data-promote-youth]")) promoteYouthPlayer(event.target.dataset.promoteYouth);
    if (event.target.matches("[data-release-youth]")) releaseYouthPlayer(event.target.dataset.releaseYouth);
    if (event.target.matches("[data-view-youth-intake]")) {
      state.squadSubTab = "intake";
      saveState();
      updateHeavyContent("Abrindo peneira da temporada...", () => {
        showTab("squad");
        renderSquad();
      });
    }
    if (event.target.matches("[data-list-player]")) {
      const player = playerById(getUserClub(), event.target.dataset.listPlayer);
      if (player?.pendingTransfer) {
        showAlertModal("Transferencia ja fechada", `${player.name} ja tem uma transferencia acordada. Ele segue no elenco ate a abertura da janela, mas nao pode mais ser listado, bloqueado ou renegociado.`);
        return;
      }
      if (player && !player.loan) {
        const status = event.target.dataset.listStatus;
        player.listStatus = player.listStatus === status ? "none" : status;
        player.listStatusLocked = false;
        state.market = generateMarket();
        pushNews(`${player.name} ${player.listStatus === "none" ? "foi removido das listas de mercado" : player.listStatus === "blocked" ? "teve propostas bloqueadas pela diretoria" : `entrou na ${listLabel(player.listStatus)}`}.`);
        saveState();
        render();
      }
    }
    const endLoanButton = event.target.closest("[data-end-loan]");
    if (endLoanButton) {
      endLoanEarly(endLoanButton.dataset.endLoan, endLoanButton.dataset.loanMode || "return");
      return;
    }
    const payClauseButton = event.target.closest("[data-pay-clause]");
    if (payClauseButton) {
      payReleaseClause(payClauseButton.dataset.payClause);
      return;
    }
    if (event.target.matches("[data-accept-offer]")) acceptOffer(event.target.dataset.acceptOffer);
    if (event.target.matches("[data-reject-offer]")) rejectOffer(event.target.dataset.rejectOffer);
    if (event.target.matches("[data-view-club]")) {
      state.selectedClubId = event.target.dataset.viewClub;
      state.previousTab = document.querySelector(".tab.active")?.dataset.tab || "league";
      saveState();
      updateHeavyContent("Carregando perfil do clube...", () => {
        showTab("clubProfile");
        renderClubProfile();
      });
    }
    if (event.target.matches("[data-close-club-profile]")) {
      updateHeavyContent("Voltando para a tela anterior...", () => {
        showTab(state.previousTab || "league");
        render();
      });
    }

    if (event.target.matches("#saveBtn")) {
      saveState();
      pushNews("Jogo salvo no navegador.");
      renderNews();
    }

    if (event.target.matches("#mainMenuBtn")) {
      resetTransientUiState();
      saveState();
      state = null;
      selectedGameMode = null;
      clubSelectDivision = 1;
      menuScreen = "menu";
      safeRender("Nao foi possivel voltar ao menu inicial.");
    }
  });

  document.addEventListener("dragstart", (event) => {
    const token = event.target.closest("[data-drag-player]");
    if (!token) return;
    draggedPlayer = token.dataset.dragPlayer;
    draggedSlot = Number(token.dataset.dragSlot);
    document.body.classList.add("dragging-player");
    event.dataTransfer.setData("text/plain", draggedPlayer);
  });

  document.addEventListener("dragover", (event) => {
    const drop = event.target.closest("[data-drop-slot], [data-formation-slot], [data-drop-bench], [data-drop-bench-index], [data-drop-unrelated]");
    if (!drop) return;
    event.preventDefault();
    drop.classList.add("drag-over");
  });

  document.addEventListener("dragleave", (event) => {
    const drop = event.target.closest("[data-drop-slot], [data-formation-slot], [data-drop-bench], [data-drop-bench-index], [data-drop-unrelated]");
    if (drop) drop.classList.remove("drag-over");
  });

  document.addEventListener("drop", (event) => {
    const drop = event.target.closest("[data-drop-slot], [data-formation-slot], [data-drop-bench], [data-drop-bench-index], [data-drop-unrelated]");
    if (!drop) return;
    event.preventDefault();
    drop.classList.remove("drag-over");
    const playerId = draggedPlayer || event.dataTransfer.getData("text/plain");
    if (playerId && drop.dataset.formationSlot) movePlayerToFormationSlot(playerId, drop.dataset.formationSlot, draggedSlot, drop.dataset.formationCoord);
    else if (playerId && drop.dataset.dropBenchIndex) movePlayerToBench(playerId, Number(drop.dataset.dropBenchIndex));
    else if (playerId && drop.dataset.dropBench) movePlayerToBench(playerId);
    else if (playerId && drop.dataset.dropUnrelated) movePlayerToUnrelated(playerId);
    else if (playerId) movePlayerToSlot(playerId, Number(drop.dataset.dropSlot));
    draggedPlayer = null;
    draggedSlot = -1;
    document.body.classList.remove("dragging-player");
  });

  document.addEventListener("dragend", () => {
    draggedPlayer = null;
    draggedSlot = -1;
    document.body.classList.remove("dragging-player");
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches("#databaseFileInput")) {
      const file = event.target.files?.[0];
      if (!file) return;
      showLoading("Lendo arquivo e montando a database do save...", "Importando database");
      readDatabaseFile(file)
        .then((text) => applyCustomDatabase(text))
        .catch((error) => setDatabaseStatus(`Erro na database: ${error.message}`))
        .finally(() => {
          event.target.value = "";
          setTimeout(() => hideLoading(), 80);
        });
      return;
    }

    if (event.target.matches("#clubSelectDivision")) {
      clubSelectDivision = Number(event.target.value || 1);
      renderClubSelect();
      return;
    }
    if (event.target.matches("#competitionViewSelect")) {
      state.leagueView = event.target.value;
      saveState();
      updateHeavyContent("Atualizando competicao selecionada...", renderLeague);
      return;
    }

    const tacticMap = {
      formationSelect: "formation",
      mentalitySelect: "mentality",
      attackStyleSelect: "attackStyle",
      defenseStyleSelect: "defenseStyle",
      liveMentalitySelect: "mentality",
      liveAttackStyleSelect: "attackStyle",
      liveDefenseStyleSelect: "defenseStyle"
    };
    if (tacticMap[event.target.id]) {
      const targetTactics = event.target.id.startsWith("live") && state.liveMatch ? state.liveMatch.tactics : state.tactics;
      targetTactics[tacticMap[event.target.id]] = event.target.value;
      if (event.target.id === "formationSelect") {
        if (event.target.value !== "Personalizada") {
          state.customFormation = [...formations[event.target.value]];
          state.customSlotCoords = defaultCustomCoords(state.customFormation);
        }
        resetLineup(true);
      }
      saveState();
      render();
    }

    if (event.target.matches("[data-lineup-slot]")) {
      state.lineupIds[Number(event.target.dataset.lineupSlot)] = event.target.value;
      saveState();
      render();
    }

    if (event.target.matches("#positionFilter") || event.target.matches("#affordFilter")) updateMarketContent("Filtrando jogadores do mercado...");
    if (event.target.matches("#marketSearchPosition") || event.target.matches("#marketSearchAge")) {
      state.marketSearchPerformed = false;
      saveState();
      updateMarketContent("Atualizando criterios de pesquisa...");
    }
    if (event.target.matches("#squadSort") || event.target.matches("#squadListFilter") || event.target.matches("#squadPositionFilter")) updateHeavyContent("Reorganizando lista de jogadores...", renderSquad);
    if (event.target.matches("#trainingSort") || event.target.matches("#trainingPositionFilter")) updateHeavyContent("Atualizando jogadores em treino...", renderTraining);
    if (event.target.matches("#clubSquadSort") || event.target.matches("#clubSquadSearch")) updateHeavyContent("Atualizando elenco do clube...", renderClubProfile);
    if (event.target.matches("#transferClubFilter")) updateHeavyContent("Filtrando historico de transferencias...", renderTransferHistory);
    if (event.target.matches("#matchSpeedSelect")) setMatchSpeed(event.target.value);
    if (event.target.matches("[data-role-slot]")) setSlotRole(Number(event.target.dataset.roleSlot), event.target.value);
    if (event.target.matches("[data-training-attr]")) {
      const player = playerById(getUserClub(), event.target.dataset.trainingAttr);
      if (player) player.training.attr = event.target.value;
      saveState();
      renderTraining();
    }
    if (event.target.matches("[data-training-position]")) {
      const player = playerById(getUserClub(), event.target.dataset.trainingPosition);
      if (player) {
        player.training.position = event.target.value;
        player.training.role = defaultRoleForSlot(event.target.value);
      }
      saveState();
      renderTraining();
    }
    if (event.target.matches("[data-training-role]")) {
      const player = playerById(getUserClub(), event.target.dataset.trainingRole);
      if (player) player.training.role = event.target.value;
      saveState();
      renderTraining();
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches("#marketSearch")) scheduleMarketContentUpdate("Filtrando jogadores do mercado...");
    if (event.target.matches("#marketAdvancedName") || event.target.matches("#marketMaxValue") || event.target.matches("#marketMinRating") || event.target.matches("#marketMaxRating")) {
      state.marketSearchPerformed = false;
      scheduleMarketContentUpdate("Atualizando criterios de pesquisa...");
    }
    if (event.target.matches("#squadSearch")) scheduleHeavyContentUpdate("Buscando jogadores no elenco...", renderSquad);
    if (event.target.matches("#trainingSearch")) scheduleHeavyContentUpdate("Buscando jogadores em treino...", renderTraining);
    if (event.target.matches("#transferSearch") || event.target.matches("#transferMinFilter")) scheduleHeavyContentUpdate("Filtrando historico de transferencias...", renderTransferHistory);
  });

  document.addEventListener("blur", (event) => {
    if (!event.target.matches(".money-input")) return;
    formatMoneyField(event.target);
    if (event.target.matches("#marketMaxValue")) {
      state.marketSearchPerformed = false;
      updateMarketContent("Atualizando criterios de pesquisa...");
    }
    if (state?.negotiation) state.negotiation = { ...state.negotiation, ...readNegotiationForm() };
    if (state?.offerModal) state.offerModal = { ...state.offerModal, ...readIncomingCounterForm() };
    saveState();
  }, true);

  document.addEventListener("keydown", (event) => {
    if (!event.target.matches(".money-input") || event.key !== "Enter") return;
    event.preventDefault();
    formatMoneyField(event.target);
    event.target.blur();
  });
}

if (typeof document !== "undefined") {
  registerPwa();
  loadCustomDatabase();
  migrateLegacySaveIfNeeded();
  state = null;
  wireEvents();
  render();
}
if (state?.liveMatch && !state.liveMatch.paused) {
  showTab("match");
  startLiveTimer();
}
