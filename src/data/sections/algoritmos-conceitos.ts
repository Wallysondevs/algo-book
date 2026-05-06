import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "o-que-e-algoritmo",
    section: "algoritmos-conceitos",
    title: "O que é um Algoritmo?",
    difficulty: "iniciante",
    subtitle: "A base de tudo: entenda como organizar o pensamento para resolver problemas.",
    intro: `Você já parou para pensar que sua vida é cheia de algoritmos, mesmo que você nunca tenha escrito uma única linha de código? Um algoritmo nada mais é do que uma receita para realizar uma tarefa. Imagine que você queira ensinar alguém que nunca cozinhou a fazer um simples ovo frito. Você não pode apenas dizer 'frite o ovo'. Você precisa detalhar: pegue a frigideira, coloque o óleo, acenda o fogo, quebre o ovo, espere alguns minutos e retire. Isso é um algoritmo: uma sequência finita de passos claros e bem definidos.\n\nNo mundo dos computadores, a ideia é exatamente a mesma. O computador é como aquele cozinheiro iniciante que segue ordens à risca. Ele não tem 'bom senso'. Se você esquecer de dizer para ele abrir a porta antes de passar por ela, ele tentará atravessar a madeira! Por isso, aprender algoritmos é aprender a ser extremamente preciso. É decompor um problema grande em pedacinhos tão pequenos que até uma máquina consiga entender e executar sem erros.\n\nPense no trajeto que você faz para o trabalho. Sem perceber, seu cérebro processa um algoritmo: 'Se o sinal estiver verde, siga; se estiver vermelho, pare'. 'Se houver trânsito na avenida principal, pegue o atalho'. Essas decisões lógicas são o coração do que chamamos de programação. Quando transformamos essas instruções em algo que o computador entende, criamos softwares, aplicativos e sites.\n\nA beleza dos algoritmos reside na sua universalidade. Um algoritmo para somar dois números é o mesmo, não importa se você está usando um supercomputador ou uma calculadora de bolso. A lógica é o que permanece constante, enquanto as ferramentas (as linguagens de programação) podem mudar. Por isso, focar em entender como construir um bom algoritmo é o passo mais importante para se tornar um grande desenvolvedor.\n\nNeste capítulo, vamos explorar como transformar pensamentos abstratos em passos concretos. Vamos aprender que não existe apenas uma maneira 'certa' de resolver um problema, mas sim maneiras mais ou menos eficientes. Prepare seu cérebro para olhar para o mundo como uma série de processos. A partir de agora, cada desafio que você encontrar será apenas um algoritmo esperando para ser escrito.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO OvoFrito\n  INICIO\n    Pegar a frigideira\n    Colocar óleo\n    Acender o fogo\n    Quebrar o ovo na frigideira\n    ESPERAR 3 minutos\n    Apagar o fogo\n    Retirar o ovo\n  FIM",
        label: "Um algoritmo da vida real"
      },
      {
        lang: "pseudocode",
        code: "/* \n  Visualização do fluxo:\n  [Início] -> [Passo 1] -> [Passo 2] -> [Fim]\n*/\nALGORITMO SomarDoisNumeros\n  INICIO\n    LEIA(numero1)\n    LEIA(numero2)\n    resultado <- numero1 + numero2\n    ESCREVA(resultado)\n  FIM",
        label: "Algoritmo matemático simples"
      },
      {
        lang: "python",
        code: "# Em Python, o processo é muito parecido com a nossa fala\n# Lendo os valores do usuário\nnum1 = int(input('Digite o primeiro número: '))\nnum2 = int(input('Digite o segundo número: '))\n\n# Realizando a operação\nresultado = num1 + num2\n\n# Mostrando o resultado na tela\nprint(f'A soma é: {resultado}')",
        label: "A mesma lógica escrita em Python"
      },
      {
        lang: "pseudocode",
        code: "ALGORITMO VerificarLampada\n  INICIO\n    SE a lampada estiver plugada ENTÃO\n      SE o bulbo estiver queimado ENTÃO\n        Trocar o bulbo\n      SENÃO\n        Comprar nova lampada\n      FIM SE\n    SENÃO\n      Plugar a lampada\n    FIM SE\n  FIM",
        label: "Algoritmo com tomada de decisão"
      }
    ],
    points: [
      "Um algoritmo é uma sequência finita de instruções para resolver um problema.",
      "O computador executa as ordens de forma literal, sem interpretação pessoal.",
      "A clareza é fundamental: cada passo deve ser simples e sem ambiguidades.",
      "Problemas complexos devem ser divididos em etapas menores (decomposição).",
      "Um mesmo problema pode ter vários algoritmos diferentes para resolvê-lo.",
      "A lógica precede a linguagem de programação; primeiro o plano, depois o código.",
      "Algoritmos possuem entrada (dados), processamento (passos) e saída (resultado)."
    ],
    alerts: [
      { type: "info", content: "A palavra 'Algoritmo' vem do nome do matemático persa Al-Khwarizmi, que viveu no século IX." },
      { type: "tip", content: "Antes de programar, tente escrever o passo a passo no papel. Isso economiza horas de correção de erros depois." },
      { type: "warning", content: "Um algoritmo infinito é um erro clássico. Garanta sempre que seu processo tenha um fim claro." }
    ]
  },
  {
    slug: "caracteristicas-algoritmo",
    section: "algoritmos-conceitos",
    title: "Características de um Bom Algoritmo",
    difficulty: "iniciante",
    subtitle: "Como diferenciar uma solução brilhante de uma que trará problemas.",
    intro: `Não basta apenas que um algoritmo 'funcione'. Para ser considerado um bom algoritmo, especialmente no contexto profissional, ele precisa seguir certos critérios de qualidade. Imagine que você escreveu um manual de instruções para montar um móvel. Se as instruções forem confusas, se faltarem peças ou se o processo levar dez vezes mais tempo do que o necessário, seu manual não é bom, mesmo que ao final o móvel fique em pé.\n\nA primeira característica essencial é a **Efetividade**. Cada passo do seu algoritmo deve ser executável por um humano ou máquina em um tempo finito. Não adianta dar uma ordem impossível, como 'calcule todos os números do infinito'. O computador precisa de limites claros para operar. Além disso, a **Finitude** garante que o programa não ficará rodando para sempre sem entregar um resultado.\n\nOutro ponto crucial é a **Ausência de Ambiguidade**. No dia a dia, dizemos coisas como 'coloque um pouco de sal'. Para um algoritmo, 'um pouco' é perigoso. Quanto exatamente? 5 gramas? Uma pitada? Um bom algoritmo define quantidades e ações de forma exata: 'Adicione 5g de sal'. Essa precisão evita que o computador tome caminhos inesperados que resultam nos famosos 'bugs'.\n\nA **Eficiência** também separa os veteranos dos iniciantes. Muitas vezes, existem dez formas de chegar ao mesmo resultado, mas uma delas usa menos memória e processamento. Pense em procurar um nome em uma lista telefônica de mil páginas. Você pode olhar página por página (lento) ou abrir no meio e decidir para qual lado ir (rápido). Um bom algoritmo busca sempre o caminho mais curto e inteligente.\n\nPor fim, temos a **Legibilidade**. Você não escreve código apenas para a máquina, mas também para outros seres humanos (e para o 'você do futuro'). Um algoritmo que ninguém consegue entender é uma bomba relógio. Usar nomes claros e organizar os passos de forma lógica facilita a manutenção e a evolução do seu software ao longo do tempo.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Exemplo de algoritmo RUIM (Ambíguo)\nALGORITMO IrParaEscola\n  Vá andando até ver uma árvore grande\n  Vire para o lado e siga em frente\n  Se cansar, pare um pouco\nFIM",
        label: "O perigo da ambiguidade"
      },
      {
        lang: "pseudocode",
        code: "// Exemplo de algoritmo BOM (Preciso)\nALGORITMO IrParaEscola\n  Ande por 500 metros na Rua A\n  Vire 90 graus à esquerda na Rua B\n  Ande mais 200 metros\nFIM",
        label: "A importância da precisão"
      },
      {
        lang: "python",
        code: "# Exemplo de eficiência: procurando um item\nlista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# Forma direta e eficiente em Python\nif 5 in lista:\n    print('Encontrei o 5!')\n\n# Um bom algoritmo usa as ferramentas certas da linguagem",
        label: "Eficiência em código real"
      },
      {
        lang: "pseudocode",
        code: "/*\n  Legibilidade: nomes que fazem sentido\n  LARGURA = 10\n  ALTURA = 5\n  AREA = LARGURA * ALTURA\n*/\nALGORITMO CalcularArea\n  DECLARE largura, altura, area: real\n  LEIA(largura)\n  LEIA(altura)\n  area <- largura * altura\n  ESCREVA(area)\nFIM",
        label: "Organização e nomes claros"
      }
    ],
    points: [
      "Finitude: Todo algoritmo deve chegar ao fim após um número de passos.",
      "Definição: Cada passo deve ser preciso e sem múltiplas interpretações.",
      "Entradas: O algoritmo deve receber dados externos (zero ou mais).",
      "Saídas: Deve produzir pelo menos um resultado ou ação como resposta.",
      "Efetividade: As instruções devem ser simples o suficiente para serem seguidas.",
      "Eficiência: Buscar o resultado usando o mínimo de recursos possível.",
      "Manutenibilidade: Código fácil de ler é mais fácil de consertar e melhorar."
    ],
    alerts: [
      { type: "danger", content: "A ambiguidade é a mãe de todos os bugs. Se o seu algoritmo permite duas interpretações, o computador escolherá a errada." },
      { type: "info", content: "Em empresas de tecnologia, o 'Code Review' é o processo onde outros programadores checam se seu algoritmo é bom e legível." },
      { type: "success", content: "Um código limpo (Clean Code) economiza milhares de reais em manutenção para as empresas." }
    ]
  },
  {
    slug: "pseudocodigo",
    section: "algoritmos-conceitos",
    title: "Pseudocódigo: Escrevendo Algoritmos em Português",
    difficulty: "iniciante",
    subtitle: "A ponte perfeita entre a sua ideia e o código real da máquina.",
    intro: `Aprender uma linguagem de programação como Python, C++ ou Java pode ser intimidador no começo devido a tantos pontos-e-vírgulas, chaves e termos em inglês. É aí que entra o **Pseudocódigo**. Como o nome sugere, é um 'falso código'. Ele não é entendido pelo computador, mas é perfeito para nós, humanos, organizarmos a nossa lógica sem nos preocuparmos com as regras rígidas de uma linguagem específica.\n\nImagine que o pseudocódigo é o rascunho de uma redação. Você se preocupa primeiro com a história e com o que quer dizer, e só depois revisa a gramática e a pontuação. No pseudocódigo, usamos termos em português como 'INICIO', 'FIM', 'SE', 'ENTÃO' e 'ESCREVA'. Isso permite que qualquer pessoa, mesmo sem saber programar, entenda a sequência de passos que você planejou para resolver um problema.\n\nUma das formas mais famosas de pseudocódigo no Brasil é o **Portugol** (Português Estruturado). Ele padroniza algumas palavras para que o rascunho fique bem próximo do que será o código final. Por exemplo, em vez de dizer 'mostre na tela o valor', usamos 'ESCREVA(valor)'. Essa transição suave ajuda o seu cérebro a se acostumar com a estrutura de controle que todas as linguagens profissionais utilizam.\n\nEscrever em pseudocódigo também é uma excelente ferramenta de comunicação. Em grandes equipes de engenharia, antes de começar um projeto complexo, os desenvolvedores muitas vezes rascunham a lógica em pseudocódigo em um quadro branco. Isso garante que todos concordam com a estratégia de solução antes de gastarem horas escrevendo código de verdade que pode estar logicamente errado.\n\nNeste capítulo, vamos adotar um padrão de pseudocódigo que você verá em muitos livros e cursos técnicos. O objetivo é que você se sinta confortável em expressar suas ideias de forma estruturada. Lembre-se: se você consegue escrever um bom pseudocódigo para resolver um problema, traduzi-lo para Python ou qualquer outra linguagem será a parte mais fácil da sua jornada.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO MediaEscolar\n  DECLARE nota1, nota2, media: REAL\n  ESCREVA('Digite a primeira nota:')\n  LEIA(nota1)\n  ESCREVA('Digite a segunda nota:')\n  LEIA(nota2)\n  \n  media <- (nota1 + nota2) / 2\n  \n  SE media >= 7 ENTÃO\n    ESCREVA('Aprovado!')\n  SENÃO\n    ESCREVA('Recuperação')\n  FIM SE\nFIM ALGORITMO",
        label: "Exemplo clássico de Portugol"
      },
      {
        lang: "python",
        code: "# Veja como o Python é quase uma tradução do pseudocódigo\nnota1 = float(input('Digite a primeira nota: '))\nnota2 = float(input('Digite a segunda nota: '))\n\nmedia = (nota1 + nota2) / 2\n\nif media >= 7:\n    print('Aprovado!')\nelse:\n    print('Recuperação')\n\n# A lógica permanece idêntica!",
        label: "Tradução para Python"
      },
      {
        lang: "pseudocode",
        code: "// Estrutura padrão de um Pseudocódigo\nALGORITMO [Nome]\n  [Declaração de Variáveis]\n  INICIO\n    [Comandos de Entrada]\n    [Processamento/Cálculos]\n    [Comandos de Saída]\n  FIM ALGORITMO",
        label: "Esqueleto de um algoritmo"
      },
      {
        lang: "pseudocode",
        code: "/* \n  ASCII ART representando o fluxo:\n  ENTRADA (Notas) -> PROCESSAMENTO (Média) -> SAÍDA (Aprovado?)\n*/\nALGORITMO DescontoLoja\n  DECLARE preco, precoFinal: REAL\n  LEIA(preco)\n  precoFinal <- preco * 0.90\n  ESCREVA('Com desconto de 10%: ', precoFinal)\nFIM",
        label: "Fluxo de processamento simples"
      }
    ],
    points: [
      "O pseudocódigo é uma ferramenta para humanos, não para máquinas.",
      "Não possui regras de sintaxe rígidas, facilitando o foco na lógica pura.",
      "Ajuda a planejar a solução antes de se preocupar com detalhes da linguagem.",
      "O Portugol é o padrão de pseudocódigo mais usado para ensino no Brasil.",
      "Facilita a identificação de erros de lógica logo no início do processo.",
      "É uma linguagem universal entre programadores de diferentes especialidades.",
      "Serve como documentação inicial para entender o que um programa faz."
    ],
    alerts: [
      { type: "tip", content: "Use nomes de variáveis que expliquem o que elas guardam, como 'soma' em vez de apenas 's'." },
      { type: "info", content: "Existem softwares como o VisuAlg que permitem 'rodar' pseudocódigos em Portugol." },
      { type: "warning", content: "Mesmo sendo 'livre', tente manter uma indentação (espaços no início da linha) organizada." }
    ]
  },
  {
    slug: "fluxogramas",
    section: "algoritmos-conceitos",
    title: "Fluxogramas: Visualizando o Fluxo",
    difficulty: "iniciante",
    subtitle: "Uma imagem vale mais que mil linhas de código.",
    intro: `Algumas pessoas aprendem melhor lendo textos, outras aprendem melhor vendo imagens. Os **Fluxogramas** são a representação visual dos algoritmos. Através de símbolos geométricos padronizados, conseguimos 'desenhar' o caminho que a informação percorre dentro de um programa. É como um mapa rodoviário que mostra onde o carro deve dobrar ou parar, mas para os seus dados.\n\nCada forma no fluxograma tem um significado especial. O **oval** representa o início ou o fim do processo. O **paralelogramo** é usado para entrada e saída de dados (quando o usuário digita algo ou o computador mostra um resultado). O **retângulo** é o lugar da ação, onde os cálculos e processamentos acontecem. E o mais importante: o **losango**, que representa a tomada de decisão. É nele que o fluxo se divide em dois caminhos, geralmente um para 'Sim' e outro para 'Não'.\n\nVisualizar um algoritmo através de um fluxograma ajuda a perceber 'becos sem saída' ou loops infinitos de forma muito mais rápida do que lendo texto. Se você segue as setas e acaba preso em um círculo eterno, sabe que tem um problema de lógica ali. Além disso, fluxogramas são excelentes para explicar processos complexos para pessoas que não são da área técnica, como clientes ou gerentes.\n\nAprender a desenhar esses fluxos treina seu cérebro para entender as bifurcações da lógica. Na programação, passamos muito tempo decidindo o que deve acontecer em cada cenário possível. O fluxograma nos obriga a pensar em todas as pernas do caminho, não apenas no 'caminho feliz' onde tudo funciona perfeitamente.\n\nNeste capítulo, vamos focar em como ler e criar esses diagramas. Veremos que, por trás de cada aplicativo sofisticado que você usa, existe um mapa lógico muito parecido com os que vamos desenhar aqui. Pegue um papel e uma caneta, pois desenhar o fluxo é muitas vezes o primeiro passo para resolver um desafio de lógica de alto nível.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Representação em texto de um Fluxograma básico\n(INÍCIO)\n   |\n[Ler Temperatura]\n   |\n< Está frio? > -- Sim --> [Vestir casaco]\n   |                        |\n  Não <---------------------+\n   |\n(FIM)",
        label: "Visualização de fluxo de decisão"
      },
      {
        lang: "pseudocode",
        code: "/* \n  Símbolos comuns:\n  ( ) -> Início/Fim\n  [ ] -> Processamento\n  / / -> Entrada/Saída\n  < > -> Decisão\n*/\nALGORITMO ExemploSimbolos\n  INICIO\n    LEIA(x)\n    x <- x * 2\n    ESCREVA(x)\n  FIM",
        label: "Correspondência entre símbolos e código"
      },
      {
        lang: "python",
        code: "# Um fluxograma de repetição em Python\ncontador = 1\nwhile contador <= 5:\n    print(f'Passo {contador}')\n    contador = contador + 1\n\n# O losango de decisão aqui é 'contador <= 5?'",
        label: "Bucle de repetição (Loop)"
      },
      {
        lang: "pseudocode",
        code: "ALGORITMO AcessoSistema\n  LEIA(senha)\n  SE senha == '123' ENTÃO\n    ESCREVA('Acesso Permitido')\n  SENÃO\n    ESCREVA('Senha Incorreta')\n  FIM SE\nFIM",
        label: "Fluxo de validação de senha"
      }
    ],
    points: [
      "Fluxogramas são diagramas que representam visualmente um algoritmo.",
      "Oval: Início e Fim do programa.",
      "Retângulo: Ações, cálculos e atribuições de valores.",
      "Losango: Pontos de decisão (Verdadeiro ou Falso).",
      "Paralelogramo: Entrada de dados do usuário e saída para a tela.",
      "Setas: Indicam o sentido obrigatório do fluxo de execução.",
      "Ajudam a identificar falhas lógicas e caminhos redundantes."
    ],
    alerts: [
      { type: "info", content: "Existem padrões internacionais (ISO) para os símbolos de fluxogramas, garantindo que qualquer programador no mundo os entenda." },
      { type: "tip", content: "Ferramentas online como Lucidchart ou Draw.io são ótimas para criar fluxogramas profissionais." },
      { type: "warning", content: "Sempre verifique se todas as setas levam a um ponto final. Setas 'soltas' indicam um algoritmo incompleto." }
    ]
  },
  {
    slug: "algoritmos-cotidiano",
    section: "algoritmos-conceitos",
    title: "Algoritmos no Cotidiano",
    difficulty: "iniciante",
    subtitle: "Descubra como você já é um mestre da lógica sem saber.",
    intro: `Nós tendemos a achar que algoritmos são coisas místicas que vivem dentro de servidores da Google ou da NASA. A realidade é muito mais pé no chão: você executa dezenas de algoritmos todos os dias, do momento em que acorda ao momento em que vai dormir. Escovar os dentes, trocar uma lâmpada ou fazer um Pix são tarefas que seguem uma lógica estrita de passos sucessivos.\n\nImagine o algoritmo de 'atravessar a rua'. Parece simples, mas seu cérebro faz um processamento complexo: 1. Chegar à beira da calçada. 2. Olhar para a esquerda. 3. Olhar para a direita. 4. Se não vier carro, atravesse. 5. Se vier carro, espere e volte ao passo 2. Se mudarmos a ordem para 'Atravesse e depois olhe', o resultado seria catastrófico. Isso prova que a **sequência** dos passos é tão importante quanto os passos em si.\n\nOutro exemplo fantástico é uma receita de bolo. Ela tem **Entradas** (ingredientes), um **Processamento** (misturar, bater, assar) e uma **Saída** (o bolo pronto). Se você pular a etapa de pré-aquecer o forno, ou se esquecer o fermento, a saída será diferente do esperado. Na programação, chamamos isso de erro de lógica: as instruções estão lá, mas a ordem ou os dados estão incorretos.\n\nOs sistemas de recomendação das redes sociais funcionam de forma parecida. O algoritmo 'observa' o que você curte (Entrada), processa seus interesses (Cálculo) e decide qual vídeo mostrar em seguida (Saída). Ao entender que tudo ao seu redor segue esse padrão, a programação deixa de ser algo 'de outro mundo' e passa a ser apenas uma extensão da forma como você já resolve problemas naturais.\n\nNeste capítulo, vamos treinar nosso olhar para identificar esses processos. Vamos aprender a descrever atividades comuns como se fôssemos computadores. Esse exercício de 'desautomatizar' nossas ações é o melhor treino possível para quem quer começar a programar de verdade, pois nos ensina a não ignorar os detalhes que parecem óbvios para nós, mas que são cruciais para a máquina.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO FazerCafe\n  INICIO\n    SE tem cafe em po? ENTÃO\n      Colocar no filtro\n    SENÃO\n      Ir ao mercado comprar\n    FIM SE\n    Esquentar agua\n    Despejar agua no filtro\n  FIM",
        label: "Lógica de decisão no café"
      },
      {
        lang: "pseudocode",
        code: "// Estrutura de repetição no cotidiano\nALGORITMO LavarLouça\n  ENQUANTO houver louça suja FAÇA\n    Pegar item\n    Passar esponja com sabão\n    Enxaguar\n    Colocar no escorredor\n  FIM ENQUANTO\nFIM",
        label: "Loop de tarefas repetitivas"
      },
      {
        lang: "python",
        code: "# Simulando uma escolha de transporte\ndef escolher_transporte(distancia):\n    if distancia < 1:\n        return 'Vá a pé'\n    elif distancia < 5:\n        return 'Vá de bicicleta'\n    else:\n        return 'Vá de carro'\n\nprint(escolher_transporte(10))",
        label: "Decisões cotidianas em Python"
      },
      {
        lang: "pseudocode",
        code: "/* \n  Algoritmo de Saque em Caixa Eletrônico:\n  1. Inserir cartão\n  2. Validar Senha\n  3. Escolher Valor\n  4. Verificar Saldo\n  5. Entregar Notas\n*/",
        label: "Exemplo de sistema financeiro"
      }
    ],
    points: [
      "Toda tarefa que pode ser descrita passo a passo é um algoritmo.",
      "A ordem dos passos altera o resultado final do processo.",
      "Algoritmos do dia a dia ajudam a entender conceitos como 'se' e 'enquanto'.",
      "Identificar padrões em tarefas comuns facilita a escrita de códigos complexos.",
      "Entradas, Processamento e Saída estão presentes em quase tudo o que fazemos.",
      "A lógica é uma ferramenta humana de organização de tarefas.",
      "Pensar como programador é detalhar o que parece óbvio."
    ],
    alerts: [
      { type: "success", content: "Se você sabe seguir uma receita de bolo, você já entende a base fundamental dos algoritmos." },
      { type: "tip", content: "Tente escrever o algoritmo de como você amarra o cadarço do sapato. Você verá que é mais complexo do que parece!" },
      { type: "info", content: "O termo 'algoritmo' se tornou popular com as redes sociais, mas ele existe desde a antiguidade." }
    ]
  },
  {
    slug: "primeiro-algoritmo",
    section: "algoritmos-conceitos",
    title: "Escrevendo seu Primeiro Algoritmo",
    difficulty: "iniciante",
    subtitle: "Do papel para a tela: o momento da verdade.",
    intro: `Chegou a hora de colocar tudo o que aprendemos em prática. Escrever o seu primeiro algoritmo oficial é um marco na vida de qualquer estudante de tecnologia. Não vamos começar criando um sistema complexo ou um jogo 3D; vamos começar com o clássico 'Olá Mundo' e evoluir para algo que interaja com você. O objetivo aqui é entender a estrutura: como começar, como processar uma informação e como mostrar o resultado.\n\nTodo programa começa com uma intenção clara. Vamos criar um pequeno assistente que pergunta o seu nome e te dá as boas-vindas. Parece simples? Sim, mas para o computador, isso envolve várias etapas: reservar um espaço na memória para o seu nome, esperar você digitar, capturar esses caracteres do teclado e, por fim, 'colar' o seu nome em uma mensagem de saudação predefinida.\n\nPara escrever esse algoritmo, usaremos o padrão que vimos nos capítulos anteriores. Primeiro, declaramos nossas 'variáveis' (falaremos mais sobre elas no próximo capítulo, mas pense nelas como caixinhas que guardam informações). Depois, usamos comandos de **Entrada** (LEIA) para pegar sua resposta e comandos de **Saída** (ESCREVA) para responder.\n\nA mágica acontece quando você vê que o computador está 'conversando' com você através das regras que *você* estabeleceu. Se você mudar a mensagem de 'Olá' para 'Bem-vindo, mestre', o computador obedecerá cegamente. Esse sentimento de controle sobre a máquina é o que motiva programadores a passarem horas resolvendo problemas cada vez maiores.\n\nNão se preocupe se esquecer algum detalhe da sintaxe agora. O importante é a lógica. Se você entende o fluxo do dado saindo do seu teclado, passando pelo processamento do programa e voltando para a tela, você já venceu a maior barreira de entrada na programação. Vamos lá?`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO MeuPrimeiroPrograma\n  DECLARE nome: TEXTO\n  INICIO\n    ESCREVA('Qual é o seu nome?')\n    LEIA(nome)\n    ESCREVA('Olá ', nome, ', seja bem-vindo ao mundo dos algoritmos!')\n  FIM",
        label: "Seu primeiro algoritmo interativo"
      },
      {
        lang: "python",
        code: "# O mesmo programa em Python\nnome = input('Qual é o seu nome? ')\nprint(f'Olá {nome}, seja bem-vindo ao mundo dos algoritmos!')\n\n# Simples, rápido e poderoso!",
        label: "Primeiro programa em Python"
      },
      {
        lang: "pseudocode",
        code: "// Somando com interação\nALGORITMO CalculadoraSimples\n  DECLARE n1, n2, soma: INTEIRO\n  INICIO\n    ESCREVA('Digite um numero:')\n    LEIA(n1)\n    ESCREVA('Digite outro:')\n    LEIA(n2)\n    soma <- n1 + n2\n    ESCREVA('O resultado da soma é: ', soma)\n  FIM",
        label: "Algoritmo de cálculo dinâmico"
      },
      {
        lang: "python",
        code: "# Calculadora em Python com comentários explicativos\nn1 = int(input('Digite um número: ')) # Lê texto e converte para número\nn2 = int(input('Digite outro: '))    # Lê o segundo número\n\nresultado = n1 + n2  # Processamento: soma os dois\n\nprint('A soma é:', resultado) # Saída: mostra na tela",
        label: "Calculadora em Python"
      }
    ],
    points: [
      "Todo algoritmo deve ter um início e um fim bem definidos.",
      "Variáveis servem para guardar informações que o usuário digita.",
      "O comando LEIA interrompe a execução para esperar a entrada do usuário.",
      "O comando ESCREVA mostra informações na tela para o usuário ver.",
      "O símbolo de atribuição (<- ou =) guarda um valor dentro de uma variável.",
      "As mensagens entre aspas (' ') são textos fixos que o computador não processa.",
      "A ordem dos comandos dita como a 'conversa' entre humano e máquina acontece."
    ],
    alerts: [
      { type: "success", content: "Parabéns! Você acabou de cruzar a linha de usuário para criador de tecnologia." },
      { type: "tip", content: "Tente mudar as mensagens do código acima e veja como o programa se comporta. Experimentar é a chave!" },
      { type: "warning", content: "Se você tentar somar uma palavra com um número, o computador dará um erro. Ele é muito rigoroso com os tipos de dados." }
    ]
  }
];
