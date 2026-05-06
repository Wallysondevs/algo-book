import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "o-que-e-variavel",
    section: "variaveis-tipos",
    title: "O que é uma Variável?",
    difficulty: "iniciante",
    subtitle: "Entenda o conceito de armazenamento de dados na memória do computador.",
    intro: `Imagine que você está organizando sua mudança para uma casa nova. Você tem dezenas de caixas de papelão e, para não se perder, você escreve um rótulo em cada uma: 'Livros', 'Utensílios de Cozinha', 'Roupas de Inverno'. Na programação, as **variáveis** funcionam exatamente como essas caixas rotuladas. Elas são espaços na memória do computador onde guardamos informações que precisaremos usar mais tarde.\n\nSem as variáveis, o computador seria como uma pessoa sem memória de curto prazo. Ele poderia fazer um cálculo agora, mas esqueceria o resultado no milissegundo seguinte. Quando dizemos que 'idade = 25', estamos pegando uma caixa, colocando o rótulo 'idade' nela e guardando o número 25 lá dentro. Sempre que o programa precisar saber a idade, ele vai até a caixa rotulada e olha o que tem dentro.\n\nUm ponto fundamental é que, como o próprio nome diz, o conteúdo de uma variável pode **variar**. Se hoje é seu aniversário, podemos abrir a caixa 'idade', jogar fora o 25 e colocar o 26 no lugar. O rótulo permanece o mesmo, mas a informação armazenada mudou. Isso permite que criemos programas dinâmicos que reagem a novas informações, como o saldo de uma conta bancária que diminui após uma compra.\n\nDar bons nomes às suas variáveis é uma das habilidades mais importantes de um programador. Imagine uma casa onde todas as caixas de mudança dizem apenas 'Coisa 1', 'Coisa 2'. Seria um caos encontrar o que você precisa! Por isso, em vez de chamar uma variável de 'x', preferimos nomes descritivos como 'preco_produto' ou 'nome_usuario'. Isso torna o código muito mais fácil de entender para qualquer pessoa.\n\nNeste capítulo, vamos aprender as regras para criar essas caixas. Veremos que o computador é muito organizado: ele gosta de saber exatamente o que será guardado em cada lugar. Assim como você não guardaria uma sopa em uma caixa de papelão furada, o computador exige que escolhamos o 'tipo' certo de variável para cada tipo de dado. Vamos começar essa jornada de organização agora!`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO ExemploVariavel\n  DECLARE nome: TEXTO\n  DECLARE idade: INTEIRO\n  INICIO\n    nome <- 'João'\n    idade <- 20\n    ESCREVA(nome, ' tem ', idade, ' anos.')\n    \n    // Mudando o valor (variando)\n    idade <- 21\n    ESCREVA('Agora ', nome, ' tem ', idade, ' anos.')\n  FIM",
        label: "Declarando e alterando variáveis"
      },
      {
        lang: "python",
        code: "# Em Python, não precisamos declarar o tipo antes\nnome = 'Maria'  # O Python entende que é um texto\nidade = 25      # O Python entende que é um número inteiro\n\nprint(f'{nome} tem {idade} anos.')\n\n# Alterando o valor\nidade = idade + 1\nprint(f'No próximo ano, {nome} terá {idade} anos.')",
        label: "Variáveis em Python"
      },
      {
        lang: "pseudocode",
        code: "// Analogia visual de variáveis\n[ nome  ] ----> 'Carlos'\n[ idade ] ----> 30\n[ saldo ] ----> 150.50",
        label: "Visualização de memória"
      },
      {
        lang: "python",
        code: "# Nomes bons vs Nomes ruins\na = 10 # Ruim: o que é 'a'?\ntotal_pontos = 10 # Bom: agora eu sei o que guardei!\n\nx = 'Rua 1' # Ruim\nendereco_entrega = 'Rua 1' # Bom",
        label: "Boas práticas de nomenclatura"
      }
    ],
    points: [
      "Variáveis são espaços na memória para armazenar dados temporariamente.",
      "Cada variável possui um nome (rótulo) e um valor (conteúdo).",
      "O valor de uma variável pode ser alterado durante a execução do programa.",
      "Nomes de variáveis devem ser descritivos para facilitar a leitura do código.",
      "Em muitas linguagens, é necessário declarar o tipo da variável antes de usá-la.",
      "A atribuição é o processo de colocar um valor dentro de uma variável.",
      "Variáveis permitem que o programa processe dados dinâmicos e interativos."
    ],
    alerts: [
      { type: "info", content: "A memória onde as variáveis ficam guardadas é a RAM, que é apagada quando o computador desliga." },
      { type: "tip", content: "Use o padrão 'snake_case' (como nome_completo) ou 'camelCase' (como nomeCompleto) para nomes compostos." },
      { type: "warning", content: "Não use espaços ou caracteres especiais (como @, #, !) nos nomes das suas variáveis." }
    ]
  },
  {
    slug: "tipos-de-dados",
    section: "variaveis-tipos",
    title: "Tipos de Dados",
    difficulty: "iniciante",
    subtitle: "Cada informação no seu devido lugar.",
    intro: `Voltando à nossa analogia das caixas de mudança, você sabe que não deve colocar itens frágeis, como taças de cristal, em uma caixa pesada cheia de ferramentas de ferro. Na programação, o computador também precisa saber que 'tipo' de informação ele está lidando para tratá-la da forma correta. Um número não é processado da mesma maneira que uma frase ou uma data.\n\nOs tipos mais comuns são os **Inteiros**, que guardam números sem casas decimais (como 1, 5, -10 ou 1000). Se você precisa de precisão, como no preço de um produto ou na temperatura corporal, usamos os números **Reais** (ou de Ponto Flutuante), que aceitam vírgulas (como 10.50 ou 37.2). É importante notar que, na programação internacional, usamos o ponto (.) em vez da vírgula para decimais.\n\nPara textos, usamos o tipo **Caractere** ou **Cadeia de Caracteres** (conhecido mundialmente como *String*). Uma string pode conter letras, números, espaços e símbolos. Para o computador, o número 123 como texto ('123') é apenas um desenho de caracteres, você não pode somá-lo matematicamente a outro número até que ele seja convertido.\n\nExiste também o tipo **Lógico** (ou *Booleano*), que é o mais simples e poderoso de todos. Ele só aceita dois valores: VERDADEIRO ou FALSO (True ou False). Pense nele como um interruptor de luz. Usamos esse tipo para responder perguntas dentro do programa: 'O usuário está logado?', 'A compra foi aprovada?', 'O jogo acabou?'.\n\nEntender os tipos de dados é crucial porque cada tipo tem 'superpoderes' diferentes. Você pode somar dois inteiros, mas não pode somar dois nomes. Você pode colocar uma frase inteira em maiúsculas, mas não faz sentido tentar fazer isso com o número 42. Ao dominar os tipos, você garante que seu programa não tentará fazer operações impossíveis, o que causaria erros fatais.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO TiposExemplo\n  DECLARE idade: INTEIRO\n  DECLARE preco: REAL\n  DECLARE nome: TEXTO\n  DECLARE ativo: LOGICO\n  \n  INICIO\n    idade <- 30\n    preco <- 29.99\n    nome <- 'Curso de Logica'\n    ativo <- VERDADEIRO\n  FIM",
        label: "Tipos básicos em Pseudocódigo"
      },
      {
        lang: "python",
        code: "# Em Python, o tipo é definido automaticamente (Tipagem Dinâmica)\nidade = 30        # int (inteiro)\npreco = 29.99     # float (real)\nnome = 'Logica'   # str (string/texto)\nativo = True      # bool (booleano/lógico)\n\n# Verificando o tipo em Python\nprint(type(idade))\nprint(type(preco))",
        label: "Tipos de dados em Python"
      },
      {
        lang: "pseudocode",
        code: "// Diferença entre número e texto\nn1 <- 10      // Inteiro\nn2 <- '10'    // Texto (String)\n\n// n1 + 5 = 15 (Funciona)\n// n2 + 5 = ERRO (Não se soma texto com número!)",
        label: "Cuidado com os tipos"
      },
      {
        lang: "python",
        code: "# Strings podem usar aspas simples ou duplas\nrua = 'Av. Paulista'\ncidade = \"São Paulo\"\n\n# Booleanos sempre começam com letra maiúscula em Python\nesta_chovendo = False\ntem_sol = True",
        label: "Sintaxe de tipos em Python"
      }
    ],
    points: [
      "Inteiros: Números inteiros positivos ou negativos (ex: 1, -5, 0).",
      "Reais (Float): Números com casas decimais (ex: 3.14, 100.0).",
      "Strings: Sequências de caracteres, sempre entre aspas (ex: 'Olá').",
      "Booleanos (Lógico): Valores binários, Verdadeiro ou Falso.",
      "O tipo de dado define quais operações podem ser feitas com ele.",
      "A escolha correta do tipo economiza memória e evita erros de cálculo.",
      "Muitas linguagens modernas detectam o tipo automaticamente (Tipagem Dinâmica)."
    ],
    alerts: [
      { type: "info", content: "O tipo 'Booleano' recebeu esse nome em homenagem ao matemático George Boole." },
      { type: "danger", content: "Tentar realizar operações matemáticas com tipos incompatíveis é a causa #1 de erros em programas iniciantes." },
      { type: "tip", content: "Sempre use ponto (.) para casas decimais no código, mesmo que em português usemos vírgula." }
    ]
  },
  {
    slug: "operadores-aritmeticos",
    section: "variaveis-tipos",
    title: "Operadores Aritméticos",
    difficulty: "iniciante",
    subtitle: "Fazendo contas como um computador.",
    intro: `O computador é, na sua essência, uma calculadora gigante e extremamente rápida. Os **Operadores Aritméticos** são os símbolos que usamos para dizer à máquina quais contas ela deve fazer. Você já conhece a maioria deles da escola: a soma (+), a subtração (-), a multiplicação (*) e a divisão (/). Mas na programação, temos alguns truques extras na manga.\n\nA multiplicação usa o asterisco (*) em vez do 'x' ou do ponto, porque o 'x' pode ser confundido com o nome de uma variável. A divisão usa a barra (/), e é importante lembrar que dividir por zero é um erro que 'quebra' o programa. Mas e se você quiser apenas o resto de uma divisão? Para isso, usamos o operador de **Módulo** (geralmente o símbolo %). Ele é muito útil para descobrir se um número é par ou ímpar.\n\nImagine que você tem 10 doces e quer dividir igualmente para 3 crianças. Cada uma ganha 3 doces e sobra 1. No mundo dos algoritmos, '10 / 3' resultaria em 3.33, mas '10 % 3' resultaria em 1 (o resto). Esse tipo de operação é fundamental para criar calendários, organizar filas ou fazer qualquer sistema que precise de ciclos repetitivos.\n\nAlém disso, temos a **Exponenciação** (elevar um número ao outro), que em Python é representada por dois asteriscos (**). E a **Divisão Inteira** (//), que descarta as casas decimais e retorna apenas o número inteiro do resultado. Esses operadores permitem que você manipule números de forma muito precisa para resolver qualquer desafio matemático.\n\nNeste capítulo, vamos praticar como combinar esses símbolos com nossas variáveis. Você verá que, ao criar uma expressão como 'total = preco * quantidade', você está dando uma instrução poderosa que o computador executará instantaneamente, não importa quão grandes sejam os números envolvidos.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO Operadores\n  DECLARE a, b, soma, resto: INTEIRO\n  INICIO\n    a <- 10\n    b <- 3\n    soma <- a + b    // 13\n    resto <- a % b   // 1 (Resto da divisão de 10 por 3)\n    ESCREVA('Soma: ', soma)\n    ESCREVA('Resto: ', resto)\n  FIM",
        label: "Operadores em Pseudocódigo"
      },
      {
        lang: "python",
        code: "# Cálculos em Python\na = 10\nb = 3\n\nprint(f'Soma: {a + b}')\nprint(f'Subtração: {a - b}')\nprint(f'Multiplicação: {a * b}')\nprint(f'Divisão: {a / b}')\nprint(f'Resto (Módulo): {a % b}')\nprint(f'Potência: {a ** b}') # 10 elevado a 3",
        label: "Operadores em Python"
      },
      {
        lang: "pseudocode",
        code: "// Descobrindo se um número é par\nSE (numero % 2 == 0) ENTÃO\n  ESCREVA('O numero é PAR')\nSENÃO\n  ESCREVA('O numero é IMPAR')\nFIM SE",
        label: "Uso prático do Módulo (%)"
      },
      {
        lang: "python",
        code: "# Divisão inteira vs Divisão normal\nprint(10 / 3)  # 3.3333333333333335\nprint(10 // 3) # 3 (Pega apenas a parte inteira)",
        label: "Tipos de divisão"
      }
    ],
    points: [
      "Soma (+): Adiciona dois valores.",
      "Subtração (-): Subtrai o segundo valor do primeiro.",
      "Multiplicação (*): Multiplica dois valores.",
      "Divisão (/): Divide o primeiro valor pelo segundo, gerando um número real.",
      "Módulo (%): Retorna o resto da divisão inteira entre dois números.",
      "Divisão Inteira (//): Retorna apenas a parte inteira do quociente.",
      "Exponenciação (**): Eleva um número à potência de outro."
    ],
    alerts: [
      { type: "warning", content: "A divisão por zero (x / 0) causará um erro fatal no seu programa. Sempre verifique o divisor!" },
      { type: "tip", content: "O operador % (módulo) é seu melhor amigo para verificar paridade e criar ciclos." },
      { type: "info", content: "A precisão dos números reais (float) pode ter pequenas variações devido à forma como o hardware processa binários." }
    ]
  },
  {
    slug: "operadores-relacionais",
    section: "variaveis-tipos",
    title: "Operadores Relacionais",
    difficulty: "iniciante",
    subtitle: "Comparando valores e tomando decisões.",
    intro: `Na vida, passamos o tempo todo comparando coisas: 'Este tênis é mais caro que o outro?', 'Minha nota foi suficiente para passar?', 'A porta está aberta ou fechada?'. Na programação, os **Operadores Relacionais** são os símbolos que nos permitem fazer essas perguntas ao computador. O resultado de qualquer comparação será sempre um valor lógico: **Verdadeiro** ou **Falso**.\n\nOs sinais básicos você já conhece: maior que (>), menor que (<), maior ou igual (>=) e menor ou igual (<=). Mas preste atenção no sinal de igualdade! Em quase todas as linguagens, um único sinal de igual (=) serve para **atribuir** um valor (guardar algo na caixa). Para **comparar** se dois valores são iguais, usamos dois sinais de igual seguidos (==). Esquecer isso é um dos erros mais comuns de quem está começando.\n\nTambém temos o operador 'diferente de', que geralmente é escrito como '!='. Ele serve para verificar se duas coisas não são iguais. Por exemplo, se quisermos garantir que um usuário não escolheu um nome de usuário que já existe, usamos o operador de diferença. É a base para todas as validações de segurança e lógica de negócios.\n\nImagine um sistema de cinema. A regra é: 'Se a idade for maior ou igual a 18, pode ver o filme de terror'. O computador executa a comparação 'idade >= 18'. Se você tem 20 anos, o resultado é **True** e você entra. Se tem 15, o resultado é **False** e o acesso é negado. Simples assim.\n\nNeste capítulo, vamos ver como essas comparações funcionam na prática. Elas são os alicerces das 'Estruturas de Decisão' que veremos mais adiante. Sem a capacidade de comparar, o computador seria apenas uma calculadora passiva; com os operadores relacionais, ele começa a ganhar 'inteligência' para escolher caminhos diferentes baseados nos dados.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO Comparacoes\n  DECLARE a, b: INTEIRO\n  INICIO\n    a <- 5\n    b <- 10\n    \n    ESCREVA(a == b)  // FALSO\n    ESCREVA(a != b)  // VERDADEIRO\n    ESCREVA(a < b)   // VERDADEIRO\n    ESCREVA(a >= 5)  // VERDADEIRO\n  FIM",
        label: "Relacionais em Pseudocódigo"
      },
      {
        lang: "python",
        code: "# Comparações em Python\nx = 7\ny = 7\n\nprint(x == y) # True (Igualdade)\nprint(x != y) # False (Diferença)\nprint(x > 5)  # True (Maior que)\nprint(x <= 6) # False (Menor ou igual a)",
        label: "Relacionais em Python"
      },
      {
        lang: "pseudocode",
        code: "// Exemplo de uso em decisão\nSE (saldo < valorCompra) ENTÃO\n  ESCREVA('Saldo Insuficiente')\nSENÃO\n  ESCREVA('Compra Aprovada')\nFIM SE",
        label: "Aplicação prática de comparação"
      },
      {
        lang: "python",
        code: "# Comparando textos (Strings)\nnome1 = 'Alice'\nnome2 = 'Bob'\n\nprint(nome1 == nome2) # False\nprint(nome1 < nome2)  # True (Ordem alfabética!)",
        label: "Comparando Strings"
      }
    ],
    points: [
      "Operadores relacionais sempre retornam um valor booleano (True/False).",
      "Igualdade (==): Verifica se dois valores são idênticos.",
      "Diferença (!=): Verifica se dois valores são distintos.",
      "Maior que (>) e Menor que (<): Comparações de magnitude.",
      "Maior ou igual (>=) e Menor ou igual (<=): Incluem o valor de referência.",
      "Importante: '=' é atribuição, '==' é comparação.",
      "Strings também podem ser comparadas (geralmente por ordem alfabética/ASCII)."
    ],
    alerts: [
      { type: "danger", content: "NUNCA use '=' quando quiser comparar dois valores. Isso mudará o valor da sua variável em vez de testá-la!" },
      { type: "info", content: "Ao comparar números reais (float), tenha cuidado com dízimas periódicas que podem causar resultados inesperados." },
      { type: "tip", content: "Você pode encadear comparações em algumas linguagens, como 10 < x < 20." }
    ]
  },
  {
    slug: "expressoes-e-precedencia",
    section: "variaveis-tipos",
    title: "Expressões e Precedência de Operadores",
    difficulty: "iniciante",
    subtitle: "A ordem dos fatores altera, sim, o produto (e o código!).",
    intro: `Quando misturamos vários operadores em uma mesma linha, como em 'resultado = 5 + 2 * 10', o computador não lê simplesmente da esquerda para a direita. Ele segue uma regra matemática rigorosa chamada **Precedência de Operadores**. Se você não conhecer essas regras, seu programa pode calcular valores completamente errados, e o pior: sem avisar que houve um erro.\n\nNa matemática e na programação, a multiplicação (*) e a divisão (/) têm prioridade sobre a soma (+) e a subtração (-). Portanto, no exemplo acima, o computador fará primeiro '2 * 10 = 20' e depois somará com o 5, resultando em 25. Se o seu objetivo era somar primeiro, você teria um problema sério.\n\nPara 'quebrar' essa regra e definir sua própria ordem, usamos os **parênteses ()**. Tudo o que estiver dentro de parênteses é calculado primeiro. Seguindo o exemplo, se escrevermos '(5 + 2) * 10', o resultado passa a ser 70. Os parênteses são a sua ferramenta de controle para garantir que a lógica do seu cálculo esteja correta.\n\nAlém dos operadores matemáticos, a precedência também vale para os operadores relacionais e lógicos. Geralmente, as contas matemáticas são feitas antes das comparações. Imagine a expressão: 'media >= 5 + 2'. O computador primeiro resolve '5 + 2 = 7' e só depois pergunta: 'A média é maior ou igual a 7?'. Entender essa hierarquia evita que você precise encher seu código de parênteses desnecessários, tornando-o mais limpo.\n\nNeste capítulo, vamos desvendar a 'fila de prioridades' do computador. Veremos como construir expressões complexas de forma segura e como ler o código de outros programadores sem se confundir com a ordem das operações. Lembre-se: na dúvida, use parênteses! Eles não custam nada e garantem sua paz de espírito.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO Precedencia\n  DECLARE x: REAL\n  INICIO\n    x <- 10 + 5 * 2    // Resulta em 20\n    x <- (10 + 5) * 2  // Resulta em 30\n    ESCREVA(x)\n  FIM",
        label: "Impacto dos parênteses"
      },
      {
        lang: "python",
        code: "# Ordem de execução em Python\n# 1. Parênteses\n# 2. Exponenciação\n# 3. Mult/Div\n# 4. Soma/Sub\n\nconta = 2 ** 3 * 2 + 1 # (8 * 2) + 1 = 17\nprint(conta)",
        label: "Hierarquia em Python"
      },
      {
        lang: "pseudocode",
        code: "// Expressão complexa\n// resultado <- (n1 + n2 + n3) / 3 >= 7\n// 1. Soma os números\n// 2. Divide por 3\n// 3. Compara se é maior ou igual a 7",
        label: "Lógica de média escolar"
      },
      {
        lang: "python",
        code: "# Exemplo prático de erro de iniciante\nsalario = 1000\nbonus = 200\n\n# Errado: divide apenas o bônus\nprint(salario + bonus / 2) # 1100.0\n\n# Certo: divide a soma\nprint((salario + bonus) / 2) # 600.0",
        label: "Evitando cálculos incorretos"
      }
    ],
    points: [
      "O computador segue uma hierarquia matemática fixa (PEMDAS).",
      "Multiplicação e Divisão ocorrem antes de Soma e Subtração.",
      "Parênteses têm a prioridade máxima e forçam a ordem de execução.",
      "Operadores de mesma prioridade são resolvidos da esquerda para a direita.",
      "Expressões matemáticas são resolvidas antes das comparações (relacionais).",
      "O uso excessivo de parênteses pode poluir o código, mas garante clareza.",
      "A precedência é a mesma na maioria das linguagens de programação modernas."
    ],
    alerts: [
      { type: "tip", content: "Na dúvida sobre a ordem, use parênteses. É melhor pecar pelo excesso de clareza do que pelo erro de cálculo." },
      { type: "info", content: "PEMDAS é um mnemônico: Parênteses, Expoentes, Multiplicação/Divisão, Adição/Subtração." },
      { type: "warning", content: "Cálculos financeiros exigem cuidado redobrado com a ordem das operações para evitar perdas de centavos." }
    ]
  },
  {
    slug: "conversao-tipos",
    section: "variaveis-tipos",
    title: "Conversão entre Tipos",
    difficulty: "iniciante",
    subtitle: "Mudando a natureza dos dados (Casting).",
    intro: `Lembra quando dissemos que o número 10 e o texto '10' são coisas diferentes para o computador? Pois bem, em muitos momentos você precisará transformar um no outro. Imagine que você está criando um formulário web. Tudo o que o usuário digita chega para o programa como **Texto (String)**. Se o usuário digitar a idade dele, você não poderá somar '+1' a esse valor até que o transforme em um **Inteiro**.\n\nEsse processo de transformação é chamado de **Conversão de Tipos** ou *Casting*. É como se você estivesse derretendo uma estátua de gelo (texto) para transformá-la em água líquida (número) para que ela possa fluir através dos seus cálculos. Se você tentar 'derreter' algo que não faz sentido, como o texto 'Abacaxi' para um número, o programa vai travar com um erro de conversão.\n\nA conversão pode ser **Explícita**, quando você comanda o computador a mudar o tipo, ou **Implícita**, quando a linguagem faz isso sozinha por conveniência. Por exemplo, se você somar um Inteiro (5) com um Real (2.5), a maioria das linguagens transformará o 5 em 5.0 automaticamente para que a conta possa ser feita com precisão. Isso nos poupa trabalho, mas exige atenção.\n\nOutro caso comum é transformar números em texto. Isso é muito útil para mostrar mensagens formatadas, como 'Seu saldo é R$ ' + valor. Aqui, o 'valor' que era um número real precisa virar texto para ser 'colado' (concatenado) com o restante da frase.\n\nNeste capítulo, vamos aprender as funções de conversão mais usadas, como 'inteiro()', 'real()' e 'texto()' em pseudocódigo, e seus equivalentes 'int()', 'float()' e 'str()' em Python. Saber converter dados é o que permite que seu programa interaja com o mundo real de forma robusta e sem erros de incompatibilidade.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO Conversao\n  DECLARE texto_idade: TEXTO\n  DECLARE idade: INTEIRO\n  INICIO\n    texto_idade <- '25'\n    idade <- PARA_INTEIRO(texto_idade)\n    idade <- idade + 1\n    ESCREVA(idade) // Agora é 26!\n  FIM",
        label: "Conversão em Pseudocódigo"
      },
      {
        lang: "python",
        code: "# Conversões em Python\nvalor_texto = '10.5'\n\n# String para Float\nvalor_real = float(valor_texto)\n\n# Float para Int (perde as casas decimais!)\nvalor_int = int(valor_real)\n\nprint(valor_int) # Mostra 10",
        label: "Conversões em Python"
      },
      {
        lang: "python",
        code: "# Número para Texto (muito usado em mensagens)\nidade = 20\nmensagem = 'Eu tenho ' + str(idade) + ' anos.'\nprint(mensagem)",
        label: "Convertendo para String"
      },
      {
        lang: "pseudocode",
        code: "// Erro de conversão\nDECLARE x: INTEIRO\nx <- PARA_INTEIRO('ABC') // Isso causará um ERRO CRÍTICO!",
        label: "O perigo da conversão inválida"
      }
    ],
    points: [
      "Casting é o nome técnico para a conversão de tipos de dados.",
      "Dados vindos do teclado/formulários geralmente chegam como String.",
      "Converter String para Número permite realizar cálculos matemáticos.",
      "Converter Número para String permite a exibição amigável de mensagens.",
      "A conversão de Real para Inteiro descarta as casas decimais (truncamento).",
      "Nem todo texto pode ser convertido para número (ex: 'Olá' -> erro).",
      "Linguagens de tipagem forte exigem conversão explícita para evitar erros."
    ],
    alerts: [
      { type: "danger", content: "Ao converter de Real para Inteiro, você perde informação (os decimais). Use com cautela!" },
      { type: "tip", content: "Em Python, use a função input() junto com int() para ler números: idade = int(input())." },
      { type: "info", content: "Linguagens como JavaScript tentam converter tudo sozinhas, o que às vezes causa comportamentos bizarros." }
    ]
  },
  {
    slug: "entrada-saida-dados",
    section: "variaveis-tipos",
    title: "Entrada e Saída de Dados",
    difficulty: "iniciante",
    subtitle: "Estabelecendo o diálogo entre humano e máquina.",
    intro: `Um programa que não recebe informações e não mostra resultados é como um livro trancado em um cofre: ele pode ser brilhante, mas ninguém consegue interagir com ele. A **Entrada e Saída de Dados** (conhecidas pela sigla I/O, do inglês *Input/Output*) são as portas de comunicação do seu software com o mundo exterior.\n\nA **Entrada** é como o programa 'ouve' ou 'lê'. Pode ser o que você digita no teclado, um clique no mouse, a leitura de um arquivo ou até os dados vindos de um sensor de temperatura. Em nossos estudos iniciais, usaremos o teclado como nossa principal fonte. O comando básico é o **LEIA**, que interrompe a execução do programa e fica 'esperando' pacientemente até que você digite algo e aperte Enter.\n\nA **Saída** é como o programa 'fala' ou 'escreve'. É a forma de mostrar os resultados do processamento para o usuário, seja em uma tela preta de terminal, em uma janela colorida ou imprimindo em papel. O comando clássico é o **ESCREVA** (ou *print* em Python). Ele pega o valor de uma variável ou um texto fixo e o 'cospe' para fora, permitindo que vejamos o que o computador está pensando.\n\nUm ciclo completo de um programa útil segue sempre este padrão: Entrada -> Processamento -> Saída. Você entra com seu peso e altura (Entrada), o programa calcula o seu IMC (Processamento) e mostra o resultado na tela (Saída). Sem essas portas, a lógica ficaria isolada e sem utilidade real.\n\nNeste capítulo final da seção, vamos aprender a criar essa interação. Veremos como formatar as saídas para que fiquem bonitas e legíveis, e como garantir que as entradas sejam capturadas corretamente. Dominar o I/O é o que transforma seus algoritmos teóricos em ferramentas práticas que as pessoas podem usar de verdade.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO Interacao\n  DECLARE nome: TEXTO\n  INICIO\n    ESCREVA('Olá! Qual seu nome?')\n    LEIA(nome)\n    ESCREVA('Prazer em te conhecer, ', nome)\n  FIM",
        label: "Ciclo de Entrada e Saída"
      },
      {
        lang: "python",
        code: "# I/O em Python\nnome = input('Digite seu nome: ') # Entrada\nidade = int(input('Sua idade: '))   # Entrada com conversão\n\n# Saída formatada (f-string)\nprint(f'Olá {nome}, você tem {idade} anos.')",
        label: "I/O em Python"
      },
      {
        lang: "pseudocode",
        code: "/* \n  Fluxo de Dados:\n  [Teclado] --LEIA--> (Variável) --ESCREVA--> [Monitor]\n*/",
        label: "Visualização do I/O"
      },
      {
        lang: "python",
        code: "# Saída de múltiplas linhas\nprint('Linha 1')\nprint('Linha 2')\n\n# Saída sem pular linha\nprint('Mesma ', end='')\nprint('linha')",
        label: "Truques de Saída"
      }
    ],
    points: [
      "Entrada (Input): Captura de dados externos para dentro do programa.",
      "Saída (Output): Exibição de informações processadas para o usuário.",
      "LEIA/input: Comandos que pausam o programa para aguardar o usuário.",
      "ESCREVA/print: Comandos que enviam dados para o dispositivo de saída.",
      "Interatividade: É o que torna os programas úteis para seres humanos.",
      "Concatenar: Nome técnico para 'juntar' textos e variáveis na saída.",
      "O terminal é a interface de entrada e saída mais básica e comum."
    ],
    alerts: [
      { type: "success", content: "Aprender a interagir com o usuário é o primeiro passo para criar apps e sites reais." },
      { type: "tip", content: "Sempre dê uma instrução clara no ESCREVA antes de um LEIA, para o usuário saber o que digitar." },
      { type: "info", content: "Existem saídas sonoras, visuais e até táteis (vibração) em dispositivos modernos." }
    ]
  }
];
