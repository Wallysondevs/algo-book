import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "bem-vindo-algoritmos",
    section: "boas-vindas",
    title: "Bem-vindo ao Livro",
    difficulty: "iniciante",
    subtitle: "O que você vai aprender e como este livro vai te guiar do zero.",
    intro: `Seja muito bem-vindo ao fascinante mundo dos algoritmos! Se você já se perguntou como o seu celular sabe exatamente qual caminho sugerir no GPS ou como a Netflix parece conhecer seus gostos cinematográficos melhor que seus amigos, você já teve um contato indireto com o que vamos estudar aqui. Programação não é sobre decorar comandos mágicos ou ser um gênio da matemática; é sobre aprender a organizar o pensamento para resolver problemas de forma estruturada.\n\nImagine que você queira ensinar um alienígena a fazer um sanduíche de manteiga de amendoim. Você não pode simplesmente dizer 'faça um sanduíche'. Você precisa explicar como abrir o pote, pegar a faca, passar a manteiga no pão e fechar as fatias. Um algoritmo é exatamente isso: uma receita passo a passo que diz ao computador o que fazer. Este livro foi escrito para ser o seu guia nessa jornada, transformando você de um mero usuário de tecnologia em um criador de soluções.\n\nAo longo destas páginas, não vamos focar apenas em linguagens de programação complicadas, mas sim na 'lógica'. A lógica é o alicerce de qualquer prédio tecnológico. Sem uma boa base lógica, o código mais bonito do mundo desmorona como um castelo de cartas. Vamos aprender a decompor grandes desafios em pequenas tarefas gerenciáveis, uma habilidade que você usará não apenas no computador, mas em todas as áreas da sua vida.\n\nNossa abordagem será prática e visual. Acreditamos que a melhor maneira de aprender é fazendo, errando e corrigindo. Por isso, cada capítulo trará exemplos reais, analogias do cotidiano e exercícios que desafiarão sua mente de forma progressiva. Não tenha medo de não entender tudo de primeira. O aprendizado de algoritmos é como aprender um novo idioma ou tocar um instrumento musical: exige paciência, repetição e curiosidade.\n\nPrepare-se para ver o mundo de uma forma diferente. Ao final desta jornada, você não olhará mais para um software como algo misterioso, mas como uma sequência lógica de instruções que você também é capaz de criar. Vamos começar essa aventura transformando o 'complicado' em algo simples, um passo de cada vez. O futuro da tecnologia está em suas mãos, e tudo começa com um simples 'Olá, Mundo!'.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO OlaMundo\n  INICIO\n    ESCREVA('Olá, Mundo!')\n  FIM",
        label: "Seu primeiro algoritmo"
      },
      {
        lang: "pseudocode",
        code: "ALGORITMO PrepararCafe\n  INICIO\n    Pegar a chaleira\n    Colocar agua na chaleira\n    Acender o fogo\n    ESPERAR a agua ferver\n    Colocar o cafe no filtro\n    Despejar a agua quente\n  FIM",
        label: "Algoritmo da vida real"
      },
      {
        lang: "python",
        code: "print('Olá, Mundo!')\n# Em Python, o comando é direto e simples!",
        label: "O mesmo comando em Python"
      },
      {
        lang: "pseudocode",
        code: "/* Estrutura básica de um algoritmo */\nALGORITMO NomeDoPrograma\n  VARIAVEIS\n    mensagem: texto\n  INICIO\n    mensagem <- 'Aprendendo logica!'\n    ESCREVA(mensagem)\n  FIM",
        label: "Estrutura completa"
      }
    ],
    points: [
      "Algoritmos são sequências finitas de passos para resolver um problema.",
      "A lógica de programação é a base comum a todas as linguagens de software.",
      "Aprender a programar desenvolve o raciocínio analítico e a criatividade.",
      "Você não precisa de conhecimentos avançados em matemática para começar.",
      "O computador é 'burro': ele faz exatamente o que você manda, nem mais, nem menos.",
      "Errar faz parte do processo e é a melhor forma de descobrir como as coisas funcionam.",
      "Este livro usa uma linguagem simples para facilitar a compreensão de conceitos complexos."
    ],
    alerts: [
      { type: "info", content: "Não se preocupe com a sintaxe perfeita agora. O foco inicial é entender a lógica por trás da solução." },
      { type: "tip", content: "Tente explicar o que você aprendeu para alguém. Ensinar é uma das melhores formas de consolidar o conhecimento." },
      { type: "warning", content: "Evite pular capítulos. A lógica de programação é cumulativa: cada novo conceito depende do anterior." }
    ]
  },
  {
    slug: "por-que-aprender-logica",
    section: "boas-vindas",
    title: "Por que aprender Lógica de Programação?",
    difficulty: "iniciante",
    subtitle: "Entenda por que a lógica é o superpoder mais valioso do século XXI.",
    intro: `Vivemos em uma era onde quase tudo o que tocamos tem algum 'cérebro' digital. Do micro-ondas ao sistema financeiro global, o código está em toda parte. Aprender lógica de programação é como ganhar a chave para entender e moldar este mundo. Não se trata apenas de conseguir um emprego na área de TI, mas de adquirir uma nova forma de pensar que permite decompor problemas complexos em partes menores e mais fáceis de resolver.\n\nImagine que você tem um quebra-cabeça de 5000 peças. Sem lógica, você tentaria encaixar peças aleatoriamente, o que seria frustrante e ineficaz. Com uma abordagem algorítmica, você primeiro separa as bordas, depois agrupa por cores e então começa a montar. Essa capacidade de 'pensar computacionalmente' é o que torna os programadores tão eficientes na resolução de qualquer tipo de desafio, seja ele técnico ou não.\n\nAlém disso, a lógica de programação é a linguagem universal da tecnologia. Linguagens como Java, Python ou JavaScript vêm e vão, tornam-se populares e depois perdem espaço. No entanto, a lógica subjacente permanece a mesma há décadas. Se você entende como um laço de repetição ou uma condição funciona, você conseguirá aplicar esse conhecimento em qualquer nova linguagem que surja no futuro. É um investimento de conhecimento que nunca expira.\n\nOutro ponto fundamental é a autonomia. Em um mundo automatizado, quem entende de lógica deixa de ser apenas um consumidor passivo de ferramentas criadas por outros e passa a ter o poder de criar suas próprias ferramentas. Quer automatizar aquela planilha chata do trabalho? Quer criar um site para o seu negócio? A lógica é o que permite transformar uma ideia abstrata em um produto funcional e útil.\n\nPor fim, aprender lógica exercita a criatividade. Muitos pensam que programação é algo rígido e sem graça, mas é exatamente o oposto. Existem infinitas maneiras de resolver o mesmo problema, e encontrar a solução mais elegante e eficiente é um exercício criativo profundo. É como escrever uma poesia ou pintar um quadro, mas usando lógica e dados como suas tintas e pincéis. Vamos descobrir como libertar esse potencial criativo dentro de você.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Diferentes caminhos para o mesmo destino\nALGORITMO CaminhoA\n  Vá pela Rua Direita\n  Vire na primeira Esquerda\nFIM\n\nALGORITMO CaminhoB\n  Vá pela Avenida Central\n  Cruze a ponte\nFIM",
        label: "Múltiplas soluções para um problema"
      },
      {
        lang: "python",
        code: "def verificar_idade(idade):\n    if idade >= 18:\n        print('Pode entrar')\n    else:\n        print('Entrada proibida')\n\n# A lógica de decisão é universal",
        label: "Exemplo de tomada de decisão"
      },
      {
        lang: "pseudocode",
        code: "REPETIR 10 VEZES\n  Dar um passo para frente\n  Olhar para o lado\nFIM REPETIR",
        label: "Automatizando tarefas repetitivas"
      },
      {
        lang: "python",
        code: "# Um algoritmo simples de soma\nnum1 = 10\nnum2 = 20\nresultado = num1 + num2\nprint(f'O resultado é {resultado}')",
        label: "Processamento de dados"
      }
    ],
    points: [
      "A lógica é independente de linguagem de programação específica.",
      "Ajuda a resolver problemas do cotidiano de forma mais estruturada.",
      "É uma habilidade altamente valorizada em diversas profissões modernas.",
      "Permite a automação de tarefas repetitivas e cansativas.",
      "Desenvolve a paciência e a persistência diante de desafios.",
      "Proporciona uma base sólida para aprender qualquer nova tecnologia rapidamente.",
      "Transforma você de um usuário passivo em um criador ativo de tecnologia."
    ],
    alerts: [
      { type: "success", content: "Uma vez que você aprende a 'pensar' como programador, aprender novas linguagens se torna 10x mais fácil." },
      { type: "tip", content: "Pratique o 'pensamento computacional' no dia a dia: tente descrever os passos de tarefas simples como lavar louça." },
      { type: "info", content: "Grandes empresas valorizam mais a base lógica do candidato do que o conhecimento de uma ferramenta específica." }
    ]
  },
  {
    slug: "como-computadores-pensam",
    section: "boas-vindas",
    title: "Como os Computadores Pensam",
    difficulty: "iniciante",
    subtitle: "Desvendando o mistério por trás do processamento de informações.",
    intro: `Ao contrário do que os filmes de ficção científica sugerem, os computadores não 'pensam' da mesma maneira que nós. Eles não têm intuição, sentimentos ou a capacidade de entender nuances. Na verdade, um computador é como um assistente extremamente rápido, mas incrivelmente literal. Se você der uma instrução ambígua, ele ficará confuso ou fará algo totalmente inesperado. Ele só entende instruções explícitas e binárias.\n\nImagine uma sala cheia de interruptores de luz. Cada interruptor pode estar apenas em dois estados: ligado ou desligado. No nível mais básico, é assim que o computador armazena e processa tudo. Fotos, músicas e este texto que você está lendo são, para a máquina, apenas sequências gigantescas de zeros (desligado) e uns (ligado). A mágica acontece na forma como organizamos e interpretamos esses sinais em alta velocidade.\n\nO processador (CPU) é o coração desse sistema. Ele funciona seguindo um ciclo incansável: buscar uma instrução, decodificar o que ela pede e executá-la. Ele faz isso bilhões de vezes por segundo! Mas ele só sabe fazer operações básicas: somar números, comparar se um valor é maior que outro ou mover dados de um lugar para o outro. A complexidade do software que usamos nasce da combinação inteligente dessas operações simples.\n\nPara nos comunicarmos com essa máquina, criamos camadas de abstração. Escrever em binário seria impossível para humanos. Por isso, usamos linguagens de programação que agem como tradutores. Nós escrevemos comandos que parecem inglês ou português, e ferramentas especiais chamadas 'compiladores' ou 'interpretadores' transformam isso na linguagem que os circuitos do computador entendem.\n\nEntender esse processo é fundamental porque nos ensina a ser precisos. Quando um programa tem um 'bug' (um erro), geralmente não é porque o computador falhou, mas porque o programador deu uma instrução que não previa certa situação. Pensar como um computador significa aprender a ser extremamente detalhista e a considerar todas as possibilidades de um fluxo de informação.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// O que o computador vê vs O que nós vemos\nBinário: 01000001\nTexto: 'A'\n\nBinário: 01000010\nTexto: 'B'",
        label: "Representação de dados"
      },
      {
        lang: "pseudocode",
        code: "// O ciclo de processamento\nBUSCAR: Próxima instrução na memória\nDECODIFICAR: O que 'ADD' significa?\nEXECUTAR: Somar 2 + 2\nGUARDAR: Colocar o resultado 4 na memória",
        label: "Ciclo da CPU"
      },
      {
        lang: "python",
        code: "# Abstração: Nós escrevemos isso\nprint(5 + 5)\n\n# O computador processa sinais elétricos complexos\n# para resultar em 10",
        label: "Abstração de linguagem"
      },
      {
        lang: "pseudocode",
        code: "// Exemplo de precisão necessária\nSE (fome == verdadeiro) ENTÃO\n  Comer()\nSENÃO\n  ContinuarTrabalhando()\nFIM SE",
        label: "Lógica binária de decisão"
      }
    ],
    points: [
      "Computadores operam na base binária (0 e 1).",
      "Eles são executores de instruções extremamente rápidos, mas literais.",
      "A CPU segue o ciclo: Busca -> Decodificação -> Execução.",
      "Linguagens de programação servem de ponte entre humanos e máquinas.",
      "Abstração permite criar sistemas complexos a partir de operações simples.",
      "Bugs são, na maioria das vezes, falhas na instrução dada pelo humano.",
      "O computador não tem 'bom senso'; tudo deve ser explicitamente definido."
    ],
    alerts: [
      { type: "warning", content: "Nunca assuma que o computador 'entende' o que você quer. Ele faz apenas o que você escreveu." },
      { type: "info", content: "A unidade básica de informação é o BIT. Um conjunto de 8 BITS forma um BYTE." },
      { type: "tip", content: "Entender o hardware básico ajuda a escrever códigos mais eficientes no futuro." }
    ]
  },
  {
    slug: "ferramentas-necessarias",
    section: "boas-vindas",
    title: "Ferramentas Necessárias",
    difficulty: "iniciante",
    subtitle: "O que você precisa para começar a colocar a mão na massa.",
    intro: `Muitas pessoas acham que precisam de um computador de última geração, com várias telas e luzes coloridas, para começar a programar. A verdade é que você pode começar com quase qualquer coisa que tenha um teclado e acesso à internet. No início, nossas ferramentas mais importantes serão papel, caneta e o seu próprio cérebro. A lógica nasce no papel antes de ir para o código.\n\nPara transformar seus pensamentos em programas executáveis, precisaremos de um 'Editor de Código'. Pense nele como um processador de texto (como o Word), mas turbinado com funções que ajudam a encontrar erros e colorir palavras-chave para facilitar a leitura. O Visual Studio Code (VS Code) é atualmente o favorito da maioria dos programadores por ser gratuito e muito poderoso, mas existem alternativas mais leves se você tiver um computador antigo.\n\nAlém do editor, precisaremos de um ambiente para rodar o código. Se você for usar Python, precisará instalar o interpretador Python no seu sistema. Se preferir começar apenas com lógica pura, existem simuladores online de 'Portugol' (um pseudocódigo em português) que permitem testar seus algoritmos diretamente no navegador, sem precisar instalar nada.\n\nOutra ferramenta indispensável é o Terminal (ou Prompt de Comando). Aquela telinha preta com letras verdes que você vê nos filmes de hackers. Não se assuste! Ela é apenas uma forma de conversar diretamente com o sistema operacional através de texto. Aprender alguns comandos básicos do terminal fará você se sentir muito mais no controle da sua máquina e facilitará a automação de muitas tarefas.\n\nPor fim, a ferramenta mais importante de todas é a Internet e as comunidades de programadores. Sites como Stack Overflow, documentações oficiais e fóruns serão seus melhores amigos. Ninguém decora tudo; a habilidade de saber pesquisar e ler erros é o que diferencia um bom programador. Neste livro, ensinaremos como usar essas ferramentas de forma estratégica para que você nunca fique travado por muito tempo.`,
    codes: [
      {
        lang: "bash",
        code: "# Exemplo de comandos básicos no terminal\nls          # Listar arquivos\ncd pastas   # Entrar em uma pasta\npython app.py # Rodar um programa Python",
        label: "Comandos de Terminal"
      },
      {
        lang: "python",
        code: "# Verificando se o Python está instalado\nimport sys\nprint(f'Versão do Python: {sys.version}')",
        label: "Checagem de Ambiente"
      },
      {
        lang: "pseudocode",
        code: "// Sua primeira ferramenta: O Fluxograma\n[Início] -> (Tem Sol?) --Sim--> [Ir para Praia]\n            |             \n           Não\n            | \n      [Ficar em Casa] -> [Fim]",
        label: "Visualização lógica"
      },
      {
        lang: "pseudocode",
        code: "/* Configuração mínima recomendada */\n1. Editor de Texto (VS Code)\n2. Navegador Web (Chrome/Firefox)\n3. Interpretador (Python/Nodejs)\n4. Curiosidade e Paciência",
        label: "Checklist de Ferramentas"
      }
    ],
    points: [
      "Você não precisa de um computador potente para aprender lógica.",
      "O VS Code é a ferramenta padrão da indústria para edição de código.",
      "Ambientes online (IDEs Web) permitem programar sem instalações complexas.",
      "O Terminal é uma ferramenta poderosa para gerenciar seus projetos.",
      "Aprender a ler mensagens de erro é uma habilidade técnica crucial.",
      "O papel e a caneta continuam sendo ótimos para rascunhar algoritmos.",
      "Saber pesquisar no Google e em documentações é 50% do trabalho do programador."
    ],
    alerts: [
      { type: "tip", content: "Comece com ferramentas simples. Não gaste horas configurando o editor perfeito agora." },
      { type: "info", content: "A maioria das ferramentas de programação profissionais são gratuitas e de código aberto." },
      { type: "danger", content: "Cuidado ao copiar e colar comandos do terminal que você não entende completamente." }
    ]
  },
  {
    slug: "como-usar-este-livro",
    section: "boas-vindas",
    title: "Como Usar Este Livro",
    difficulty: "iniciante",
    subtitle: "Dicas estratégicas para aproveitar cada gota deste conteúdo.",
    intro: `Este livro não foi feito para ser lido como um romance, do começo ao fim em uma tarde. Ele foi projetado para ser um companheiro de estudo interativo. A melhor forma de aprender programação é através da 'prática ativa'. Isso significa que sempre que você encontrar um exemplo de código, você não deve apenas olhar para ele, mas sim tentar reescrevê-lo, modificá-lo e ver o que acontece quando você muda uma peça.\n\nNós estruturamos o conteúdo de forma modular. Cada capítulo foca em um conceito fundamental. Recomendamos que você siga a ordem sugerida, pois os conceitos de variáveis, por exemplo, são essenciais para entender estruturas de decisão, que por sua vez são necessárias para entender laços de repetição. Tentar pular etapas é como tentar construir o telhado de uma casa antes de levantar as paredes.\n\nFique atento aos diferentes tipos de alertas espalhados pelo texto. Eles são suas 'placas de sinalização'. Alertas de **Dica (tip)** oferecem atalhos e boas práticas. Alertas de **Atenção (warning)** ou **Perigo (danger)** servem para avisar sobre armadilhas comuns onde muitos iniciantes costumam tropeçar. E os alertas de **Informação (info)** trazem curiosidades e detalhes técnicos extras para os mais curiosos.\n\nAo final de cada seção, você encontrará uma lista de pontos-chave. Use-os como um checklist de revisão. Se você ler um ponto e não souber explicar o que ele significa, vale a pena voltar e reler aquela parte do capítulo. A repetição é a mãe da retenção, especialmente em temas abstratos como a lógica. Não tenha pressa; cada pessoa tem seu próprio ritmo de aprendizado.\n\nPor último, queremos incentivar a experimentação. Se você tiver uma ideia de como melhorar um algoritmo apresentado aqui, tente! O computador não vai quebrar se o seu código estiver errado. Na verdade, ver o código 'quebrando' é uma das experiências mais educativas que você pode ter. Estamos aqui para guiar seus primeiros passos, mas a jornada de descoberta é inteiramente sua. Vamos começar?`,
    codes: [
      {
        lang: "pseudocode",
        code: "PROCEDIMENTO EstudarCapitulo\n  Ler a introdução\n  Digitar os exemplos de código\n  Fazer os exercícios\n  SE (entendeu?) ENTÃO\n    Passar para o próximo\n  SENÃO\n    Reler e pesquisar dúvidas\n  FIM SE\nFIM PROCEDIMENTO",
        label: "Algoritmo de estudo"
      },
      {
        lang: "pseudocode",
        code: "// Legenda dos Alertas\n[TIP] -> Dicas práticas\n[INFO] -> Conceitos extras\n[WARNING] -> Evite erros comuns\n[DANGER] -> Cuidado com falhas críticas",
        label: "Entendendo os símbolos"
      },
      {
        lang: "python",
        code: "# Prática ativa: não apenas leia, digite!\nx = 10\ny = 20\n# O que acontece se eu mudar para x = 'texto'?\nprint(x + y)",
        label: "Dica de experimentação"
      },
      {
        lang: "pseudocode",
        code: "OBJETIVO FINAL:\n- Compreender a lógica\n- Resolver problemas\n- Criar seus próprios algoritmos",
        label: "Seu mapa de progresso"
      }
    ],
    points: [
      "Leia atentamente as explicações antes de pular para o código.",
      "Sempre digite os exemplos em vez de apenas copiar e colar.",
      "Use os alertas como guia para evitar erros clássicos de iniciante.",
      "Respeite a ordem dos capítulos para uma base sólida.",
      "Revise os pontos-chave antes de avançar para um novo tema.",
      "Não tenha medo de errar: o erro é o melhor professor na programação.",
      "Mantenha um caderno ou arquivo de anotações com suas próprias palavras."
    ],
    alerts: [
      { type: "tip", content: "Tente explicar o conceito de cada capítulo para si mesmo em voz alta." },
      { type: "info", content: "Este livro utiliza pseudocódigo e Python por serem as formas mais amigáveis de aprender lógica." },
      { type: "success", content: "Parabéns por começar! O primeiro passo é sempre o mais importante." }
    ]
  }
];
