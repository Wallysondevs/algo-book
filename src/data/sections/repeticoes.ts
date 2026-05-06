import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "por-que-repeticoes",
    section: "repeticoes",
    title: "Por que Precisamos de Repetições?",
    difficulty: "iniciante",
    subtitle: "Entendendo como os computadores lidam com o trabalho chato e repetitivo.",
    intro: `Imagine que seu chefe te peça para escrever a frase "Não vou esquecer de salvar o arquivo" em um papel. Tudo bem, você faz isso em 10 segundos. Agora, imagine que ele peça para você escrever isso 10 mil vezes. Você provavelmente levaria dias, ficaria com a mão cansada e, com certeza, cometeria erros de português no meio do caminho. É aqui que entra o maior superpoder dos computadores: a Repetição (ou Loop).\n\nComputadores são máquinas incrivelmente obedientes e nunca ficam entediados. Eles podem repetir a mesma tarefa milhões de vezes por segundo sem reclamar e com precisão absoluta. Na programação, as estruturas de repetição servem para nos poupar desse trabalho braçal. Se você precisa processar uma lista de mil clientes ou verificar se mil arquivos estão corrompidos, você não escreve o código mil vezes; você escreve uma vez e diz ao computador: "Repita isso para cada item".\n\nEssa capacidade de automação é o que torna o software tão valioso. Pense em um aplicativo de música que toca uma lista de reprodução (playlist). Ele não tem um código fixo para cada música; ele tem um "loop" que diz: "Enquanto houver músicas na lista, toque a próxima". Quando a música acaba, o ciclo se repete. É uma lógica simples que permite lidar com uma quantidade infinita de dados.\n\nNa vida real, estamos cercados de loops. O batimento do seu coração é um loop que se repete enquanto você está vivo. O ciclo do dia e da noite é um loop. Lavar a louça é um loop: enquanto houver pratos sujos na pia, você pega um, esfrega, enxágua e coloca no escorredor. Entender repetições na programação é simplesmente aprender a descrever esses ciclos naturais de forma que a máquina entenda.\n\nNesta seção, vamos explorar como controlar essa "fome" do computador por repetir tarefas. Vamos aprender a dizer quando ele deve começar, o que ele deve fazer em cada ciclo e, o mais importante, quando ele deve parar. Afinal, um loop que nunca para é um dos problemas mais clássicos e perigosos da computação: o famoso "loop infinito". Prepare-se para deixar o trabalho chato para a máquina e focar na inteligência do seu algoritmo!`,
    codes: [
      {
        lang: "pseudocode",
        code: "// O trabalho manual (ruim)\nESCREVA(\"Olá\")\nESCREVA(\"Olá\")\nESCREVA(\"Olá\")\nESCREVA(\"Olá\")\nESCREVA(\"Olá\")",
        label: "Abordagem sem repetição"
      },
      {
        lang: "python",
        code: "# O poder da repetição (bom)\nfor i in range(5):\n    print(\"Olá\")",
        label: "Mesmo resultado com loop em Python"
      },
      {
        lang: "pseudocode",
        code: "// Processando uma lista de compras\nPARA CADA item NA lista_de_compras FAÇA\n  ESCREVA(\"Comprando \", item)\nFIM PARA",
        label: "Loop sobre uma coleção"
      },
      {
        lang: "python",
        code: "# Somando números de 1 a 100\nsoma = 0\nfor numero in range(1, 101):\n    soma = soma + numero\nprint(f\"A soma total é: {soma}\")",
        label: "Acumulando valores"
      },
      {
        lang: "pseudocode",
        code: "// Exemplo de relógio simples\nENQUANTO (tempo < 60) FAÇA\n  ESCREVA(tempo, \" segundos\")\n  tempo <- tempo + 1\nFIM ENQUANTO",
        label: "Contagem de tempo"
      }
    ],
    points: [
      "Repetições (loops) permitem executar o mesmo bloco de código várias vezes.",
      "Economizam tempo e evitam erros de digitação manual.",
      "São ideais para processar grandes volumes de dados (listas, bancos de dados).",
      "Um loop precisa de uma condição de saída para não rodar para sempre.",
      "O código dentro do loop é chamado de 'corpo' da repetição.",
      "Cada vez que o código é executado, chamamos de 'iteração'.",
      "Loops são fundamentais para automação de tarefas rotineiras."
    ],
    alerts: [
      { type: "info", content: "Antigamente, programadores tinham que usar 'GOTO' para repetir códigos. Os loops tornaram tudo muito mais seguro." },
      { type: "tip", content: "Pense no loop como um funcionário que faz exatamente o que você manda, quantas vezes você pedir." },
      { type: "warning", content: "Se a condição do seu loop nunca for falsa, você criará um loop infinito, que pode travar seu computador!" }
    ]
  },
  {
    slug: "loop-enquanto",
    section: "repeticoes",
    title: "ENQUANTO: Repetindo com Condição",
    difficulty: "iniciante",
    subtitle: "O loop mais flexível: continue fazendo enquanto algo for verdade.",
    intro: `O loop ENQUANTO (ou WHILE) é como a regra de um jogo: "Continue jogando enquanto você tiver vidas". Você não sabe de antemão quantas rodadas vai jogar; pode ser uma, dez ou mil. Tudo depende da condição ser verdadeira. É o tipo de repetição mais livre, pois o controle está totalmente baseado em uma pergunta de sim ou não que é feita antes de cada ciclo começar.\n\nImagine que você está enchendo um balde de água. A sua lógica é: "Enquanto o balde não estiver cheio, coloque mais uma caneca de água". Você não sabe quantas canecas serão necessárias exatamente (talvez a caneca varie de tamanho), mas você sabe o objetivo final. Na programação, usamos o ENQUANTO quando o número de repetições não é fixo, mas depende de algo que acontece durante o processo.\n\nUm exemplo clássico é ler a senha de um usuário. O programa diz: "Enquanto a senha digitada for incorreta, peça a senha novamente". Se o usuário acertar de primeira, o loop roda zero ou uma vez. Se ele errar dez vezes, o loop rodará dez vezes. Essa flexibilidade torna o ENQUANTO indispensável para lidar com entradas de dados externas e situações imprevisíveis.\n\nÉ fundamental que, dentro do corpo do loop, algo mude para que a condição eventualmente se torne falsa. No exemplo do balde, a quantidade de água aumenta a cada caneca. Se você esquecer de atualizar essa informação, o computador vai continuar tentando encher um balde que ele "pensa" estar sempre vazio, gerando o temido loop infinito. É como correr em uma esteira: se você não desligar o botão ou o tempo não acabar, você corre para sempre sem sair do lugar.\n\nDominar o ENQUANTO é aprender a confiar na lógica de estado do seu programa. Você define a meta e deixa que o computador execute a tarefa repetidamente até que o objetivo seja alcançado, adaptando-se a qualquer situação que surja no caminho.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Exemplo do balde de água\nVAR litros: inteiro\nlitros <- 0\n\nENQUANTO (litros < 10) FAÇA\n  ESCREVA(\"Colocando água... Total: \", litros)\n  litros <- litros + 1\nFIM ENQUANTO\nESCREVA(\"Balde cheio!\")",
        label: "Estrutura do Enquanto"
      },
      {
        lang: "python",
        code: "# Validação de entrada em Python\nsenha = \"\"\nwhile senha != \"1234\":\n    senha = input(\"Digite a senha correta: \")\nprint(\"Acesso autorizado!\")",
        label: "Loop baseado em entrada do usuário"
      },
      {
        lang: "pseudocode",
        code: "// Contador regressivo de lançamento\nVAR segundos: inteiro\nsegundos <- 10\n\nENQUANTO (segundos >= 0) FAÇA\n  ESCREVA(\"Lançamento em \", segundos)\n  segundos <- segundos - 1\nFIM ENQUANTO",
        label: "Contagem regressiva"
      },
      {
        lang: "python",
        code: "# Somando até atingir um limite\nsoma = 0\nwhile soma < 50:\n    valor = int(input(\"Digite um número para somar: \"))\n    soma += valor\n    print(f\"Soma atual: {soma}\")",
        label: "Acumulador dinâmico"
      },
      {
        lang: "pseudocode",
        code: "// Simulando um jogo simples\nVAR vidas: inteiro\nvidas <- 3\n\nENQUANTO (vidas > 0) FAÇA\n  ESCREVA(\"Você ainda está no jogo!\")\n  // Lógica que pode diminuir as vidas\n  vidas <- vidas - 1\nFIM ENQUANTO",
        label: "Lógica de jogo"
      }
    ],
    points: [
      "O loop ENQUANTO avalia a condição ANTES de executar o código.",
      "Se a condição for falsa logo de início, o código interno nunca é executado.",
      "É usado quando não sabemos exatamente quantas vezes o loop irá rodar.",
      "A variável de controle deve ser alterada dentro do loop.",
      "É ideal para menus, validação de senhas e leitura de arquivos.",
      "Cuidado com condições que nunca mudam (causam loops infinitos).",
      "Pode ser usado com qualquer expressão que resulte em verdadeiro ou falso."
    ],
    alerts: [
      { type: "danger", content: "Sempre garanta que existe um caminho para a condição se tornar FALSA, senão seu programa travará." },
      { type: "tip", content: "Use o ENQUANTO quando o fim da repetição depender de uma ação do usuário." },
      { type: "info", content: "Em Python, o loop 'while' pode ter um 'else' opcional que roda quando a condição se torna falsa." }
    ]
  },
  {
    slug: "loop-para",
    section: "repeticoes",
    title: "PARA: Repetindo um Número Fixo de Vezes",
    difficulty: "iniciante",
    subtitle: "O loop organizado: controle total sobre o início, o fim e o passo.",
    intro: `O loop PARA (ou FOR) é como uma ordem militar: "Soldado, dê 10 voltas no pátio!". Você já sabe exatamente quando começa, quando termina e sabe que cada volta conta como uma unidade. Ele é a estrutura de repetição preferida quando conhecemos de antemão o número de vezes que queremos executar uma tarefa.\n\nDiferente do ENQUANTO, que é mais "solto", o PARA concentra em uma única linha toda a burocracia do controle: a variável inicial, a condição de parada e como essa variável deve mudar a cada passo (incremento). Isso deixa o código muito mais limpo e diminui drasticamente as chances de você esquecer de atualizar o contador e criar um loop infinito por acidente.\n\nImagine que você quer imprimir a tabuada do 7. Você sabe que vai do 1 ao 10. O loop PARA é perfeito aqui: "PARA i de 1 ATÉ 10, mostre 7 x i". É direto ao ponto. Além de números, linguagens modernas permitem usar o PARA para percorrer itens de uma coleção, como os nomes em uma lista de convidados ou as fotos em uma galeria.\n\nOutro conceito legal do PARA é o "passo". Você não precisa contar de 1 em 1. Pode contar de 2 em 2 (apenas números pares), ou de 10 em 10, ou até de forma regressiva (de 100 até 0). É como um controle de cruzeiro para o seu algoritmo, onde você define a rota e o computador cuida da navegação precisa.\n\nNa prática, o PARA é o "pau para toda obra" do programador. Ele é usado para desenhar pixels na tela, calcular médias de notas, processar tabelas gigantes e muito mais. Se você consegue contar quantas vezes algo deve ser feito, o PARA é quase sempre a melhor escolha para o seu código.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Tabuada do 7\nPARA i DE 1 ATÉ 10 FAÇA\n  ESCREVA(\"7 x \", i, \" = \", 7 * i)\nFIM PARA",
        label: "Tabuada simples"
      },
      {
        lang: "python",
        code: "# O mesmo em Python (range vai de 1 até 10, o 11 não entra)\nfor i in range(1, 11):\n    print(f\"7 x {i} = {7 * i}\")",
        label: "For em Python com range"
      },
      {
        lang: "pseudocode",
        code: "// Contando apenas os pares de 0 a 20\nPARA i DE 0 ATÉ 20 PASSO 2 FAÇA\n  ESCREVA(i)\nFIM PARA",
        label: "Uso do Passo (incremento)"
      },
      {
        lang: "python",
        code: "# Percorrendo uma lista de nomes\nfrutas = [\"Maçã\", \"Banana\", \"Uva\"]\nfor fruta in frutas:\n    print(f\"Eu gosto de {fruta}\")",
        label: "Iterando sobre coleções"
      },
      {
        lang: "pseudocode",
        code: "// Contagem regressiva para o ano novo\nPARA i DE 10 ATÉ 0 PASSO -1 FAÇA\n  ESCREVA(i)\nFIM PARA\nESCREVA(\"FELIZ ANO NOVO!\")",
        label: "Loop regressivo"
      }
    ],
    points: [
      "O loop PARA é ideal quando sabemos o número de repetições antecipadamente.",
      "Ele agrupa inicialização, condição e incremento em um só lugar.",
      "A variável de controle (geralmente chamada de 'i') muda automaticamente.",
      "Pode ser usado para contar para frente, para trás ou em passos diferentes.",
      "Em linguagens modernas, é a forma padrão de percorrer listas e arrays.",
      "Evita erros comuns do loop ENQUANTO, como esquecer de incrementar o contador.",
      "É muito utilizado em cálculos matemáticos e estatísticos."
    ],
    alerts: [
      { type: "tip", content: "Em Python, o 'range(início, fim)' para um número antes do valor final. Fique atento!" },
      { type: "info", content: "A variável 'i' é uma convenção para 'índice' ou 'iteração'. Você pode usar qualquer nome." },
      { type: "success", content: "O loop PARA é geralmente mais rápido e seguro para percorrer sequências de números." }
    ]
  },
  {
    slug: "loop-repita-ate",
    section: "repeticoes",
    title: "REPITA...ATÉ: Execute Pelo Menos Uma Vez",
    difficulty: "iniciante",
    subtitle: "A garantia de que o bloco será executado antes da primeira pergunta.",
    intro: `O REPITA...ATÉ (ou DO...WHILE) é o loop do "primeiro faz, depois pergunta". Imagine que você está experimentando uma comida nova. Você não pergunta se gosta dela antes de provar; você prova primeiro e depois decide se quer continuar comendo. Essa é a essência desta estrutura: ela garante que o código dentro dela seja executado pelo menos uma vez, não importa o quê.\n\nNas outras estruturas que vimos (ENQUANTO e PARA), a pergunta é feita no início. Se a condição for falsa de cara, o código nem chega a rodar. No REPITA...ATÉ, a verificação fica no final. Isso é extremamente útil em situações como menus de sistema, onde você PRECISA mostrar as opções para o usuário pelo menos uma vez antes de verificar se ele quer sair.\n\nOutro uso comum é na validação de dados. Você pede para o usuário digitar um valor, e só DEPOIS de ele digitar é que você verifica se o valor é válido. Se for inválido, o loop repete e pede de novo. É uma forma muito natural de modelar interações humanas, onde a ação precede a validação.\n\nUm ponto de confusão comum é a lógica da pergunta. No Portugol, dizemos "Repita... ATÉ que a condição seja verdadeira" (ou seja, ele para quando for verdade). Em linguagens como C ou Java, dizemos "Faça... ENQUANTO a condição for verdadeira" (ele para quando for falso). Embora o nome mude, a ideia de testar no final é a mesma.\n\nMesmo que algumas linguagens (como Python) não tenham um comando "repita" nativo, podemos simular esse comportamento facilmente. Entender essa estrutura expande sua caixa de ferramentas lógicas, permitindo que você escolha a repetição que melhor se adapta ao fluxo natural dos dados no seu problema real.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Menu que aparece pelo menos uma vez\nREPITA\n  ESCREVA(\"1. Jogar\")\n  ESCREVA(\"2. Sair\")\n  LEIA(opcao)\nATÉ (opcao == 2)",
        label: "Exemplo de Menu"
      },
      {
        lang: "python",
        code: "# Simulando Do...While em Python\nwhile True:\n    numero = int(input(\"Digite um valor positivo: \"))\n    if numero > 0:\n        break\n    print(\"Erro! Tente novamente.\")",
        label: "Simulação de Repita em Python"
      },
      {
        lang: "pseudocode",
        code: "// Validação de nota\nREPITA\n  ESCREVA(\"Digite a nota (0-10):\")\n  LEIA(nota)\nATÉ (nota >= 0 E nota <= 10)",
        label: "Validação de dados"
      },
      {
        lang: "python",
        code: "# Outra forma de simular em Python\ncontinuar = True\nwhile continuar:\n    # Ação principal\n    print(\"Processando...\")\n    resp = input(\"Deseja repetir? (s/n): \")\n    if resp == 'n':\n        continuar = False",
        label: "Simulação com flag booleana"
      },
      {
        lang: "pseudocode",
        code: "// Sorteio de número\nREPITA\n  num <- SORTEAR(1, 100)\n  ESCREVA(\"Sorteado: \", num)\nATÉ (num % 7 == 0) // Para quando for múltiplo de 7",
        label: "Lógica de sorteio"
      }
    ],
    points: [
      "O REPITA...ATÉ garante ao menos uma execução do bloco de código.",
      "A condição de parada é avaliada somente no final do ciclo.",
      "Ideal para menus e diálogos que dependem da interação inicial do usuário.",
      "No Portugol, o loop para quando a condição se torna VERDADEIRA.",
      "Em muitas linguagens comerciais, usa-se 'do { ... } while (condicao)'.",
      "É útil para situações onde a variável de controle é criada dentro do loop.",
      "Evita a necessidade de repetir o código de entrada antes do loop."
    ],
    alerts: [
      { type: "warning", content: "Cuidado: No Portugol você diz até que seja VERDADE, no C você diz enquanto for VERDADE. As lógicas são invertidas!" },
      { type: "info", content: "Python não possui 'do-while' nativo por uma decisão de design da linguagem." },
      { type: "tip", content: "Use o REPITA quando você tiver certeza de que a tarefa deve rodar ao menos uma vez." }
    ]
  },
  {
    slug: "break-continue",
    section: "repeticoes",
    title: "PARE e CONTINUE: Controlando o Loop",
    difficulty: "iniciante",
    subtitle: "Como interromper ou pular etapas dentro de uma repetição.",
    intro: `Às vezes, um loop precisa de um pouco mais de "fineza" no seu controle. Imagine que você está procurando uma chave em uma gaveta com 100 itens. Você começa um loop para olhar um por um. Mas e se você achar a chave no item número 5? Você não vai continuar olhando os outros 95 itens, certo? Para isso, usamos o comando PARE (ou BREAK).\n\nO PARE é como um botão de emergência ou uma saída de incêndio: ele interrompe a repetição imediatamente e pula para a primeira linha de código após o loop. É essencial para eficiência, economizando processamento quando o nosso objetivo já foi alcançado ou quando algo deu muito errado e precisamos parar tudo.\n\nPor outro lado, imagine que você está lavando uma pilha de pratos, mas encontra um prato que está quebrado. Você não quer parar de lavar todos os pratos (PARE), você apenas quer pular aquele prato específico e ir para o próximo. Para isso, usamos o comando CONTINUE.\n\nO CONTINUE interrompe apenas a iteração ATUAL. Ele diz ao computador: "Ignore o que resta deste ciclo e volte para o início do loop para fazer o próximo item". É perfeito para ignorar dados inválidos, pular números ímpares em uma contagem ou evitar processar usuários que estão inativos, sem interromper o fluxo total da tarefa.\n\nDominar o PARE e o CONTINUE é o que separa um programador iniciante de um que escreve código inteligente e otimizado. Eles permitem que você crie repetições que não são robóticas, mas que conseguem reagir de forma específica a cada item ou situação encontrada durante o ciclo.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Usando PARE para busca eficiente\nPARA i DE 1 ATÉ 100 FAÇA\n  SE (lista[i] == \"Chave\") ENTÃO\n    ESCREVA(\"Achei no índice \", i)\n    PARE // Interrompe tudo\n  FIM SE\nFIM PARA",
        label: "Busca com interrupção"
      },
      {
        lang: "python",
        code: "# Usando continue para pular itens\nfor i in range(1, 6):\n    if i == 3:\n        print(\"Pulando o 3...\")\n        continue\n    print(f\"Processando número {i}\")",
        label: "Pulando iterações em Python"
      },
      {
        lang: "pseudocode",
        code: "// Filtro de números pares com continue\nPARA i DE 1 ATÉ 10 FAÇA\n  SE (i % 2 != 0) ENTÃO\n    CONTINUE // Volta para o topo do loop\n  FIM SE\n  ESCREVA(i, \" é par\")\nFIM PARA",
        label: "Uso do Continue"
      },
      {
        lang: "python",
        code: "# Loop infinito com saída controlada\nwhile True:\n    nome = input(\"Digite 'sair' para encerrar: \")\n    if nome.lower() == 'sair':\n        break\n    print(f\"Olá, {nome}!\")",
        label: "Break em loops infinitos"
      },
      {
        lang: "pseudocode",
        code: "// Validação complexa\nENQUANTO (VERDADEIRO) FAÇA\n  LEIA(v)\n  SE (v < 0) ENTÃO CONTINUE // Ignora negativos\n  SE (v == 0) ENTÃO PARE // Para no zero\n  soma <- soma + v\nFIM ENQUANTO",
        label: "Combinando os dois comandos"
      }
    ],
    points: [
      "O comando PARE (break) sai completamente do loop.",
      "O comando CONTINUE pula apenas para a próxima iteração do loop.",
      "PARE é fundamental para buscas e otimização de performance.",
      "CONTINUE é ideal para filtrar dados ou ignorar casos específicos.",
      "Ambos funcionam tanto em loops ENQUANTO quanto em loops PARA.",
      "O uso excessivo pode tornar o código difícil de seguir (use com moderação).",
      "Em loops aninhados, o PARE afeta apenas o loop mais interno."
    ],
    alerts: [
      { type: "info", content: "Em Python, você também tem o comando 'pass', que não faz nada (apenas preenche espaço), diferente do 'continue'." },
      { type: "warning", content: "Cuidado: abusar do 'break' pode esconder bugs onde a lógica de saída do loop deveria ser mais clara." },
      { type: "tip", content: "Pense no 'break' como um freio de mão e no 'continue' como um desvio de pista." }
    ]
  },
  {
    slug: "loops-aninhados",
    section: "repeticoes",
    title: "Loops Aninhados: Repetição dentro de Repetição",
    difficulty: "iniciante",
    subtitle: "Lidando com dimensões: como processar grades, tabelas e coordenadas.",
    intro: `Se um loop é poderoso, o que acontece quando colocamos um loop dentro de outro? Chamamos isso de Loops Aninhados. Imagine que você está pintando uma parede quadriculada. Para cada linha da parede (loop externo), você precisa percorrer cada quadradinho daquela linha (loop interno) para pintá-lo. É a forma como lidamos com qualquer coisa que tenha mais de uma dimensão.\n\nUm exemplo clássico do dia a dia é o relógio digital. Para cada HORA que passa (loop externo), o relógio precisa repetir 60 vezes a contagem dos MINUTOS (loop interno). E, para cada minuto, ele repete 60 vezes os SEGUNDOS. É uma engrenagem dentro da outra, onde a de dentro gira muito mais rápido que a de fora.\n\nNa programação, usamos isso o tempo todo para lidar com tabelas (como no Excel, onde temos linhas e colunas) ou imagens (que são grades de pixels). Se você quer processar uma foto de 1000x1000 pixels, você fará um loop de 1000 linhas e, dentro dele, outro loop de 1000 colunas, totalizando 1 milhão de operações de pintura.\n\nO segredo para entender loops aninhados é focar em um passo de cada vez. O loop de fora começa e "trava" na primeira posição. Então, o loop de dentro roda inteirinho até o fim. Só depois que o interno termina é que o de fora avança para a segunda posição, e o interno começa tudo de novo. É um processo metódico e muito repetitivo.\n\nApesar de úteis, é preciso ter cuidado com a performance. Se você tiver um loop de 1.000 dentro de outro de 1.000, você tem 1 milhão de voltas. Se colocar um terceiro nível de 1.000, você terá 1 bilhão! É muito fácil deixar um computador lento se você exagerar no aninhamento sem necessidade.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Gerando uma grade 3x3\nPARA linha DE 1 ATÉ 3 FAÇA\n  PARA coluna DE 1 ATÉ 3 FAÇA\n    ESCREVA(\"(\", linha, \",\", coluna, \") \")\n  FIM PARA\n  ESCREVA(\"\\n\") // Pula linha após terminar as colunas\nFIM PARA",
        label: "Grade de coordenadas"
      },
      {
        lang: "python",
        code: "# Tabuada completa (de 1 a 10)\nfor i in range(1, 11):\n    print(f\"Tabuada do {i}:\")\n    for j in range(1, 11):\n        print(f\"{i} x {j} = {i*j}\")\n    print(\"-\" * 10)",
        label: "Tabuadas aninhadas"
      },
      {
        lang: "pseudocode",
        code: "// Processando uma matriz (tabela)\nPARA i DE 1 ATÉ num_linhas FAÇA\n  PARA j DE 1 ATÉ num_colunas FAÇA\n    soma <- soma + tabela[i][j]\n  FIM PARA\nFIM PARA",
        label: "Soma de matriz"
      },
      {
        lang: "python",
        code: "# Desenhando um triângulo de asteriscos\nfor i in range(1, 6):\n    for j in range(i):\n        print(\"*\", end=\"\")\n    print() # Pula linha",
        label: "Lógica geométrica"
      },
      {
        lang: "pseudocode",
        code: "// Relógio simples\nPARA h DE 0 ATÉ 23 FAÇA\n  PARA m DE 0 ATÉ 59 FAÇA\n    ESCREVA(h, \":\", m)\n  FIM PARA\nFIM PARA",
        label: "Simulação de tempo"
      }
    ],
    points: [
      "Loops aninhados são loops colocados um dentro do corpo do outro.",
      "O loop interno completa todos os seus ciclos para cada volta do externo.",
      "São essenciais para percorrer matrizes, grades e coordenadas.",
      "Aumentam a complexidade e o tempo de execução rapidamente.",
      "Use nomes de variáveis diferentes para cada contador (ex: i, j, k).",
      "O loop 'mais interno' é o que executa mais vezes no total.",
      "A indentação correta é crucial para não se perder nos níveis de repetição."
    ],
    alerts: [
      { type: "danger", content: "Cuidado com o 'Custo Exponencial'. Loops aninhados demais podem travar sistemas com muitos dados." },
      { type: "tip", content: "Visualize loops aninhados como se fossem o hodômetro de um carro ou os ponteiros de um relógio." },
      { type: "info", content: "Muitos algoritmos de ordenação e busca em bancos de dados usam loops aninhados por baixo dos panos." }
    ]
  },
  {
    slug: "erros-comuns-loops",
    section: "repeticoes",
    title: "Erros Comuns em Loops e Como Evitá-los",
    difficulty: "iniciante",
    subtitle: "Aprenda a identificar e corrigir os problemas que tiram o sono dos iniciantes.",
    intro: `Escrever loops é como domar uma fera: se você não souber o que está fazendo, ela pode se voltar contra você. O erro mais famoso, claro, é o **Loop Infinito**. Ele acontece quando a condição de parada nunca é atingida. É o equivalente a dar uma instrução para alguém: "Ande até chegar no fim do mundo". Como o fim nunca chega, a pessoa (ou o computador) anda para sempre até desmaiar de exaustão (ou travar).\n\nOutro erro clássico é o **Erro por Um** (Off-by-one error). Sabe quando você quer contar até 10, mas o programa para no 9 ou vai até o 11? Isso acontece porque confundimos o uso de ">" com ">=" ou esquecemos que muitas linguagens de programação começam a contar do zero e não do um. É um detalhe minúsculo que causa bugs gigantescos em sistemas financeiros ou de segurança.\n\nTambém temos o problema de **Modificar a Lista durante o Loop**. Imagine que você está em uma fila e o segurança começa a tirar pessoas da fila enquanto tenta contar quantas têm. Ele vai se perder! Na programação, tentar apagar itens de uma lista enquanto você está percorrendo essa mesma lista gera resultados bizarros e, muitas vezes, erros fatais no programa.\n\nPor fim, existe o erro da **Variável de Controle Mal Gerenciada**. É quando você usa o mesmo nome de contador (como o famoso 'i') em dois loops aninhados diferentes, ou quando esquece de incrementar o contador dentro de um ENQUANTO. O computador fica confuso, os valores se atropelam e o resultado final é uma bagunça completa.\n\nNeste capítulo, vamos analisar esses erros de perto. Ver o erro e entender POR QUE ele aconteceu é a forma mais rápida de se tornar um programador maduro. Vamos transformar esses "vilões" da lógica em lições valiosas para que você escreva códigos muito mais sólidos e confiáveis.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// ERRO 1: Loop Infinito (Esquecer o incremento)\nVAR i: inteiro\ni <- 1\nENQUANTO (i <= 5) FAÇA\n  ESCREVA(i)\n  // i <- i + 1  <-- Faltou isso! O programa travará no 1\nFIM ENQUANTO",
        label: "Análise de Erro 1"
      },
      {
        lang: "python",
        code: "# ERRO 2: Erro por Um (Off-by-one)\n# Queremos imprimir de 1 a 10\nfor i in range(1, 10):\n    print(i) # Vai imprimir apenas até o 9!\n# Correção: usar range(1, 11)",
        label: "Análise de Erro 2"
      },
      {
        lang: "pseudocode",
        code: "// ERRO 3: Conflito de Variáveis em Aninhamento\nPARA i DE 1 ATÉ 3 FAÇA\n  PARA i DE 1 ATÉ 3 FAÇA // Usou 'i' de novo! Vai dar erro.\n    ESCREVA(i)\n  FIM PARA\nFIM PARA",
        label: "Análise de Erro 3"
      },
      {
        lang: "python",
        code: "# ERRO 4: Modificar lista durante o loop\nnumeros = [1, 2, 3, 4, 5]\nfor n in numeros:\n    if n % 2 == 0:\n        numeros.remove(n) # Isso vai pular itens e causar bugs!\n# Correção: Criar uma nova lista ou usar list comprehension",
        label: "Análise de Erro 4"
      },
      {
        lang: "pseudocode",
        code: "// EXERCÍCIO RESOLVIDO: Busca com Garantia\nVAR achou: logico\nachou <- FALSO\nPARA i DE 1 ATÉ 10 FAÇA\n  SE (lista[i] == alvo) ENTÃO\n    achou <- VERDADEIRO\n    PARE\n  FIM SE\nFIM PARA\n\nSE (achou) ENTÃO ESCREVA(\"Encontrado\") SENÃO ESCREVA(\"Não existe\")",
        label: "Lógica Correta de Busca"
      }
    ],
    points: [
      "Sempre verifique se a variável de controle é atualizada corretamente.",
      "Lembre-se: em programação, a contagem muitas vezes começa no ZERO.",
      "Use nomes de variáveis diferentes (i, j, k) para loops aninhados.",
      "Nunca remova itens de uma lista enquanto itera sobre ela.",
      "Teste seus loops com listas vazias e listas com apenas um item.",
      "Se o computador 'congelar', verifique se você não criou um loop infinito.",
      "O comando 'break' é um ótimo aliado para evitar repetições desnecessárias."
    ],
    alerts: [
      { type: "danger", content: "Erro por um (Off-by-one) é a causa de muitos vazamentos de memória e falhas de segurança reais." },
      { type: "warning", content: "Em Python, mudar o contador 'i' manualmente dentro de um 'for i in range' não afeta o loop. Cuidado!" },
      { type: "tip", content: "Se estiver inseguro, use um 'print' dentro do loop para ver o valor das variáveis em cada volta." }
    ]
  }
];
