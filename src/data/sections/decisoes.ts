import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "if-else-conceito",
    section: "decisoes",
    title: "SE...ENTÃO...SENÃO: Tomando Decisões",
    difficulty: "iniciante",
    subtitle: "A base de toda lógica: como o programa escolhe caminhos diferentes.",
    intro: `Imagine que você está saindo de casa e olha para o céu. Se estiver nublado, você pega um guarda-chuva. Se não estiver, você sai apenas com a chave. Essa é uma decisão binária simples que tomamos o tempo todo. Na programação, chamamos isso de Estrutura de Decisão ou Condicional. É o momento em que o código deixa de ser uma lista linear de tarefas e passa a ter ramificações, como uma árvore ou uma estrada com bifurcações.\n\nSem a capacidade de decidir, os computadores seriam máquinas rígidas e inúteis. Um caixa eletrônico precisa decidir se libera o dinheiro baseado no saldo; um site precisa decidir se mostra o painel de controle baseado na senha digitada; até um jogo simples precisa decidir se o personagem 'morre' ou 'ganha pontos' dependendo da colisão. É o "SE" (IF) que transforma dados brutos em inteligência artificial e sistemas úteis.\n\nA estrutura básica funciona como uma pergunta de sim ou não. "O saldo é maior que o saque?". Se a resposta for VERDADEIRA, executamos um bloco de código específico (o ENTÃO). Se a resposta for FALSA, podemos simplesmente ignorar ou executar um caminho alternativo (o SENÃO). É importante entender que o computador nunca fará os dois caminhos ao mesmo tempo; ele escolhe um e descarta o outro para aquela execução específica.\n\nNa vida real, muitas vezes não percebemos o SENÃO (ELSE). Quando dizemos "Se chover, eu fico em casa", está implícito que, se NÃO chover, eu saio. Na programação, ser explícito sobre o que acontece no caso contrário é fundamental para evitar que o programa fique em um estado indefinido ou "pendurado". O SENÃO é a nossa rede de segurança, garantindo que sempre haja uma resposta, não importa o que aconteça.\n\nPense na lógica de decisão como o cérebro do seu algoritmo. Enquanto as variáveis são a memória e as operações matemáticas são os músculos, as condicionais são o julgamento. Dominar o SE...ENTÃO...SENÃO é o primeiro grande passo para deixar de ser um digitador de comandos e se tornar um verdadeiro criador de soluções lógicas complexas e dinâmicas.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Exemplo simples de decisão\nVAR idade: inteiro\nidade <- 18\n\nSE (idade >= 18) ENTÃO\n  ESCREVA(\"Maior de idade\")\nSENÃO\n  ESCREVA(\"Menor de idade\")\nFIM SE",
        label: "Verificação de maioridade"
      },
      {
        lang: "python",
        code: "# O mesmo exemplo em Python\nidade = 18\nif idade >= 18:\n    print(\"Maior de idade\")\nelse:\n    print(\"Menor de idade\")",
        label: "Sintaxe Python para IF/ELSE"
      },
      {
        lang: "pseudocode",
        code: "// Calculando desconto em uma compra\nVAR valor_total: real\nvalor_total <- 150.00\n\nSE (valor_total > 100.00) ENTÃO\n  ESCREVA(\"Você ganhou frete grátis!\")\nFIM SE",
        label: "Decisão simples (apenas SE)"
      },
      {
        lang: "python",
        code: "# Verificando se um número é par ou ímpar\nnumero = 7\nif numero % 2 == 0:\n    print(\"O número é par\")\nelse:\n    print(\"O número é ímpar\")",
        label: "Uso do operador de resto (%)"
      },
      {
        lang: "pseudocode",
        code: "// Validação de Senha\nVAR senha_digitada: texto\nVAR senha_correta: texto\nsenha_correta <- \"1234\"\n\nESCREVA(\"Digite sua senha:\")\nLEIA(senha_digitada)\n\nSE (senha_digitada == senha_correta) ENTÃO\n  ESCREVA(\"Acesso concedido\")\nSENÃO\n  ESCREVA(\"Acesso negado!\")\nFIM SE",
        label: "Exemplo de sistema de login"
      }
    ],
    points: [
      "Estruturas de decisão permitem que o programa escolha diferentes caminhos.",
      "O bloco SE (IF) só é executado se a condição for VERDADEIRA.",
      "O bloco SENÃO (ELSE) é opcional e roda se a condição for FALSA.",
      "A condição dentro do SE deve sempre resultar em um valor booleano (V ou F).",
      "Indentação (espaços no início da linha) é essencial para definir o que está dentro da decisão.",
      "Podemos usar operadores de comparação como ==, !=, >, <, >= e <=.",
      "Uma boa decisão evita que o programa processe dados inválidos ou perigosos."
    ],
    alerts: [
      { type: "info", content: "Em Python, não usamos 'FIM SE'. O que define o fim do bloco é a volta da indentação para a esquerda." },
      { type: "warning", content: "Cuidado: usar um único '=' em vez de '==' é um erro comum que tenta atribuir valor em vez de comparar." },
      { type: "tip", content: "Sempre teste os 'casos de borda'. Se a regra é >= 18, teste exatamente o número 18!" }
    ]
  },
  {
    slug: "if-else-aninhado",
    section: "decisoes",
    title: "IFs Aninhados: Decisões dentro de Decisões",
    difficulty: "iniciante",
    subtitle: "Como lidar com critérios que dependem de outros critérios anteriores.",
    intro: `Às vezes, uma única pergunta não é suficiente para resolver um problema. Imagine que você quer entrar em um clube. A primeira pergunta é: "Você é sócio?". Se a resposta for sim, vem a segunda pergunta: "Você pagou a mensalidade?". Se a resposta para a segunda também for sim, você entra. Isso é o que chamamos de Decisão Aninhada: um "SE" que vive dentro de outro "SE".\n\nEssa estrutura é como uma árvore de decisão com muitos galhos. Cada decisão que você toma abre um novo conjunto de sub-decisões possíveis. É muito comum em sistemas de segurança, onde primeiro verificamos se o usuário existe, depois se a senha está correta e, por fim, se ele tem permissão para acessar aquela página específica.\n\nO segredo para não se perder nos IFs aninhados é a organização visual. Na programação, chamamos isso de "indentação". Cada nível de decisão deve ser empurrado um pouco mais para a direita. Se você não fizer isso, seu código se tornará uma "massa de espaguete" impossível de ler, onde você não sabe mais qual SENÃO pertence a qual SE.\n\nApesar de poderosos, IFs aninhados devem ser usados com moderação. Se você começar a ter 5, 6 ou 10 níveis de profundidade, provavelmente seu código está ficando complexo demais para um ser humano entender. Existem técnicas para "achatar" essas decisões, mas primeiro é fundamental entender como elas funcionam na sua forma mais básica e direta.\n\nPense no aninhamento como um filtro fino. O primeiro SE filtra a maioria dos casos. O segundo SE atua apenas nos que passaram pelo primeiro, e assim por diante. É uma ferramenta de precisão cirúrgica para lidar com regras de negócio que possuem múltiplas camadas de exigência e detalhamento.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Verificação de acesso em camadas\nSE (usuario_existe) ENTÃO\n  SE (senha_correta) ENTÃO\n    ESCREVA(\"Bem-vindo!\")\n  SENÃO\n    ESCREVA(\"Senha inválida\")\n  FIM SE\nSENÃO\n  ESCREVA(\"Usuário não encontrado\")\nFIM SE",
        label: "Estrutura aninhada básica"
      },
      {
        lang: "python",
        code: "# Exemplo de clima e vestimenta\nesta_chovendo = True\ntem_guarda_chuva = False\n\nif esta_chovendo:\n    if tem_guarda_chuva:\n        print(\"Pode sair de casa!\")\n    else:\n        print(\"Melhor ficar em casa, você vai se molhar.\")\nelse:\n    print(\"Pode sair, o tempo está firme.\")",
        label: "Aninhamento em Python"
      },
      {
        lang: "pseudocode",
        code: "// Classificação de triângulos\nSE (ladoA == ladoB E ladoB == ladoC) ENTÃO\n  ESCREVA(\"Equilátero\")\nSENÃO\n  SE (ladoA == ladoB OU ladoB == ladoC OU ladoA == ladoC) ENTÃO\n    ESCREVA(\"Isósceles\")\n  SENÃO\n    ESCREVA(\"Escaleno\")\n  FIM SE\nFIM SE",
        label: "Lógica geométrica"
      },
      {
        lang: "python",
        code: "# Sistema de nota e frequência\nnota = 8.5\nfrequencia = 0.8\n\nif nota >= 7.0:\n    if frequencia >= 0.75:\n        print(\"Aprovado direto!\")\n    else:\n        print(\"Reprovado por falta\")\nelse:\n    print(\"Reprovado por nota\")",
        label: "Múltiplos critérios de aprovação"
      },
      {
        lang: "pseudocode",
        code: "// Caixa eletrônico simples\nSE (valor_saque <= saldo_conta) ENTÃO\n  SE (valor_saque <= limite_diario) ENTÃO\n    ESCREVA(\"Saque realizado com sucesso\")\n    saldo_conta <- saldo_conta - valor_saque\n  SENÃO\n    ESCREVA(\"Erro: Valor excede limite diário\")\n  FIM SE\nSENÃO\n  ESCREVA(\"Erro: Saldo insuficiente\")\nFIM SE",
        label: "Lógica de transação bancária"
      }
    ],
    points: [
      "Um IF aninhado é uma estrutura de decisão dentro de outra.",
      "O IF interno só é avaliado se o IF externo for VERDADEIRO.",
      "A indentação correta é vital para entender a hierarquia das decisões.",
      "Cada SE deve ter seu próprio FIM SE (em pseudocódigo).",
      "É útil para validar múltiplos requisitos em uma ordem específica.",
      "Evite aninhamentos muito profundos (mais de 3 ou 4 níveis).",
      "Um SENÃO sempre se refere ao SE mais próximo e no mesmo nível de indentação."
    ],
    alerts: [
      { type: "tip", content: "Se você tem muitos aninhamentos, tente usar operadores lógicos (E/OU) para simplificar a estrutura." },
      { type: "danger", content: "O erro do 'Else Órfão' ocorre quando você perde o controle de qual SE aquele SENÃO pertence. Cuidado!" },
      { type: "info", content: "Em Python, a indentação não é apenas estética, ela é parte obrigatória da sintaxe." }
    ]
  },
  {
    slug: "else-if-elif",
    section: "decisoes",
    title: "SENÃO SE: Múltiplas Condições",
    difficulty: "iniciante",
    subtitle: "Como escolher entre várias opções sem criar um labirinto de aninhamentos.",
    intro: `Imagine que você está em um semáforo. Ele não é apenas "verde ou não-verde". Ele tem três estados: Verde, Amarelo e Vermelho. Se tentássemos usar apenas IF/ELSE simples, teríamos que fazer algo como "Se for verde, siga; senão, se for amarelo, atenção; senão, pare". Para facilitar essa escada de opções, existe o SENÃO SE (ou ELSE IF).\n\nO SENÃO SE é perfeito para quando você tem várias alternativas mutuamente exclusivas. Ou seja, apenas UMA das opções pode ser verdadeira por vez. É como um cardápio de restaurante ou uma tabela de preços por faixa de idade: você se encaixa em apenas uma categoria e ignora todas as outras que vêm depois.\n\nA grande vantagem dessa estrutura sobre o aninhamento puro é a clareza. O código flui verticalmente, como uma lista. O computador testa a primeira condição; se falhar, pula para a segunda; se falhar, pula para a terceira. Assim que ele encontra uma que seja verdadeira, executa o código e pula direto para o final de toda a estrutura.\n\nIsso é muito eficiente porque o computador não perde tempo testando condições depois que já encontrou a correta. Imagine um sistema que converte notas de 0 a 100 em letras A, B, C, D e F. Se o aluno tirou 95, o programa vê que é "A" e nem olha para as outras regras. Isso economiza processamento e torna o código muito mais legível para outros programadores.\n\nNo final de uma cadeia de SENÃO SE, geralmente colocamos um SENÃO sozinho. Ele funciona como o nosso "caso padrão" ou "nenhuma das anteriores". Se o semáforo não está verde, nem amarelo, nem vermelho, talvez ele esteja quebrado! O último SENÃO serve para capturar esses erros inesperados ou tratar o resto dos casos de forma genérica.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Semáforo com SENÃO SE\nVAR cor: texto\ncor <- \"AMARELO\"\n\nSE (cor == \"VERDE\") ENTÃO\n  ESCREVA(\"Siga\")\nSENÃO SE (cor == \"AMARELO\") ENTÃO\n  ESCREVA(\"Atenção\")\nSENÃO SE (cor == \"VERMELHO\") ENTÃO\n  ESCREVA(\"Pare\")\nSENÃO\n  ESCREVA(\"Cor inválida / Farol quebrado\")\nFIM SE",
        label: "Exemplo clássico de múltiplas opções"
      },
      {
        lang: "python",
        code: "# Em Python usamos 'elif' (abreviação de else if)\nnota = 85\nif nota >= 90:\n    print(\"Conceito A\")\nelif nota >= 80:\n    print(\"Conceito B\")\nelif nota >= 70:\n    print(\"Conceito C\")\nelse:\n    print(\"Conceito F\")",
        label: "Escala de notas em Python"
      },
      {
        lang: "pseudocode",
        code: "// Calculando categoria de atleta\nVAR idade: inteiro\nidade <- 12\n\nSE (idade < 10) ENTÃO\n  ESCREVA(\"Mirim\")\nSENÃO SE (idade < 14) ENTÃO\n  ESCREVA(\"Infantil\")\nSENÃO SE (idade < 18) ENTÃO\n  ESCREVA(\"Juvenil\")\nSENÃO\n  ESCREVA(\"Adulto\")\nFIM SE",
        label: "Categorização por faixas"
      },
      {
        lang: "python",
        code: "# Saudação baseada na hora\nhora = 14\nif hora < 12:\n    print(\"Bom dia!\")\nelif hora < 18:\n    print(\"Boa tarde!\")\nelse:\n    print(\"Boa noite!\")",
        label: "Saudação dinâmica"
      },
      {
        lang: "pseudocode",
        code: "// Verificando o estado da água\nVAR temp: real\ntemp <- 105.0\n\nSE (temp <= 0) ENTÃO\n  ESCREVA(\"Sólido (Gelo)\")\nSENÃO SE (temp < 100) ENTÃO\n  ESCREVA(\"Líquido\")\nSENÃO\n  ESCREVA(\"Gasoso (Vapor)\")\nFIM SE",
        label: "Estados da matéria"
      }
    ],
    points: [
      "O SENÃO SE (ELSE IF) trata múltiplas condições em sequência.",
      "As condições são testadas na ordem em que aparecem no código.",
      "Apenas o primeiro bloco cuja condição for verdadeira será executado.",
      "Assim que um bloco é executado, todos os outros 'elif' são ignorados.",
      "O 'else' final é opcional e serve para o caso de nenhuma condição ser atendida.",
      "É mais limpo e legível do que usar vários IFs aninhados.",
      "Ideal para categorias, faixas numéricas e menus de opções."
    ],
    alerts: [
      { type: "info", content: "Em Python, o comando é 'elif', enquanto em C ou Java é 'else if'. O conceito é idêntico." },
      { type: "tip", content: "A ordem das condições importa muito! Coloque sempre a condição mais específica primeiro." },
      { type: "warning", content: "Se você usar vários 'if' seguidos em vez de 'elif', o programa pode entrar em mais de um bloco, o que geralmente é um erro." }
    ]
  },
  {
    slug: "switch-case",
    section: "decisoes",
    title: "ESCOLHA...CASO: Decisão por Valor",
    difficulty: "iniciante",
    subtitle: "Uma forma elegante de lidar com um valor que pode assumir várias identidades.",
    intro: `Imagine que você está em um elevador. Você aperta um botão para um andar específico. O elevador não precisa fazer uma pergunta complexa como "O andar é maior que 5?". Ele apenas olha para o número que você apertou e vai direto para lá. Na programação, quando temos uma variável que pode ter vários valores exatos e queremos fazer algo diferente para cada um, usamos o ESCOLHA...CASO (ou SWITCH...CASE).\n\nO ESCOLHA é como um grande balcão de triagem. Você chega com um valor na mão (por exemplo, o dia da semana) e o programa percorre uma lista de "casos" possíveis. "É segunda-feira?". "É terça-feira?". Quando ele encontra o par exato, ele executa a tarefa associada àquele dia. É muito mais limpo do que escrever sete IFs seguidos.\n\nEssa estrutura é especialmente útil para criar menus de sistemas. Se o usuário digitar '1', abre o cadastro; se digitar '2', exclui; se digitar '3', sai do programa. Fica muito fácil para quem lê o código entender quais são todas as opções disponíveis, pois elas ficam listadas de forma clara e organizada, uma abaixo da outra.\n\nUm detalhe importante é o comando "PARE" (ou BREAK). Na maioria das linguagens, se você não disser para o computador parar depois de encontrar o caso certo, ele pode continuar executando os códigos dos casos de baixo por acidente (o que chamamos de "fall-through"). É como se o elevador parasse no 3º andar, mas as portas não abrissem e ele seguisse para o 4º de qualquer jeito.\n\nTambém temos o caso "PADRÃO" (DEFAULT), que é o SENÃO do nosso ESCOLHA. Ele serve para quando o usuário digita algo que não está na lista. Se o elevador só vai até o 10º andar e você aperta o 15º, o "padrão" exibiria uma mensagem dizendo "Andar inválido". É a forma de garantir que o programa nunca fique perdido diante de uma entrada inesperada.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Menu de opções\nVAR opcao: inteiro\nLEIA(opcao)\n\nESCOLHA(opcao)\n  CASO 1:\n    ESCREVA(\"Iniciando Jogo\")\n    PARE\n  CASO 2:\n    ESCREVA(\"Opções\")\n    PARE\n  CASO 3:\n    ESCREVA(\"Saindo...\")\n    PARE\n  PADRÃO:\n    ESCREVA(\"Opção inválida\")\nFIM ESCOLHA",
        label: "Estrutura Switch básica"
      },
      {
        lang: "python",
        code: "# Python 3.10+ usa o comando 'match'\ndia_semana = 3\nmatch dia_semana:\n    case 1:\n        print(\"Domingo\")\n    case 2:\n        print(\"Segunda\")\n    case 3:\n        print(\"Terça\")\n    case _:\n        print(\"Outro dia\")",
        label: "Match/Case em Python moderno"
      },
      {
        lang: "pseudocode",
        code: "// Dias do mês (exemplo simplificado)\nESCOLHA(mes)\n  CASO \"Fevereiro\":\n    ESCREVA(\"28 ou 29 dias\")\n    PARE\n  CASO \"Abril\", \"Junho\", \"Setembro\", \"Novembro\":\n    ESCREVA(\"30 dias\")\n    PARE\n  PADRÃO:\n    ESCREVA(\"31 dias\")\nFIM ESCOLHA",
        label: "Agrupando casos"
      },
      {
        lang: "python",
        code: "# Exemplo de calculadora simples\noperacao = \"+\"\na, b = 10, 5\nmatch operacao:\n    case \"+\":\n        print(a + b)\n    case \"-\":\n        print(a - b)\n    case \"*\":\n        print(a * b)\n    case \"/\":\n        print(a / b if b != 0 else \"Erro div zero\")",
        label: "Calculadora com match"
      },
      {
        lang: "pseudocode",
        code: "// Tradutor de cores\nESCOLHA(cor_ingles)\n  CASO \"red\":   ESCREVA(\"Vermelho\")\n  CASO \"blue\":  ESCREVA(\"Azul\")\n  CASO \"green\": ESCREVA(\"Verde\")\n  PADRÃO:       ESCREVA(\"Cor desconhecida\")\nFIM ESCOLHA",
        label: "Tradução de valores"
      }
    ],
    points: [
      "O ESCOLHA...CASO testa uma variável contra vários valores constantes.",
      "É mais organizado que vários 'else if' quando comparamos uma única variável.",
      "O comando 'PARE' (break) evita que o código execute os casos seguintes.",
      "O caso 'PADRÃO' (default) captura valores que não foram listados.",
      "Pode-se agrupar vários casos para executar o mesmo bloco de código.",
      "Funciona melhor com tipos simples como Inteiros, Caracteres ou Strings.",
      "Não é adequado para comparações de faixas (ex: idade > 18) na maioria das línguas."
    ],
    alerts: [
      { type: "info", content: "O Python não teve 'switch' por décadas! O comando 'match' só foi adicionado recentemente na versão 3.10." },
      { type: "warning", content: "Esquecer o 'PARE' é um dos erros mais comuns e pode causar comportamentos muito estranhos no programa." },
      { type: "tip", content: "Use o Switch quando você tiver mais de 3 ou 4 valores possíveis para a mesma variável." }
    ]
  },
  {
    slug: "operador-ternario",
    section: "decisoes",
    title: "Operador Ternário: Decisão em Uma Linha",
    difficulty: "iniciante",
    subtitle: "O atalho para decisões rápidas e atribuições de valores.",
    intro: `Imagine que você está escrevendo um convite. Em vez de escrever todo um parágrafo "Se você for homem, use terno; se for mulher, use vestido", você simplesmente escreve "Traje: Terno (M) / Vestido (F)". É curto, direto e elegante. Na programação, o Operador Ternário faz exatamente isso para o nosso código.\n\nEle é chamado de "ternário" porque usa três partes: uma condição, o resultado se for verdadeiro, e o resultado se for falso. Tudo isso em uma única linha de código. É perfeito para situações simples onde você quer apenas decidir qual valor atribuir a uma variável baseando-se em uma regra rápida.\n\nPor exemplo, você quer definir se um aluno foi "Aprovado" ou "Reprovado" para exibir em uma tabela. Usar um IF/ELSE completo de quatro linhas para isso pode deixar seu código muito longo e poluído visualmente. Com o ternário, você resolve isso com uma clareza impressionante, deixando o código mais "limpo" e fácil de ler de uma só vez.\n\nNo entanto, como toda ferramenta poderosa, é preciso ter cuidado. Se você tentar colocar uma lógica muito complexa dentro de um ternário, ou aninhá-lo (colocar um ternário dentro de outro), seu código vai virar um hieróglifo impossível de decifrar. O objetivo do ternário é a SIMPLICIDADE. Se você precisar ler a linha duas vezes para entender o que ela faz, é melhor usar um IF tradicional.\n\nNo dia a dia do programador, o ternário é usado exaustivamente em interfaces de usuário (como sites e apps) para decidir se um botão deve ser azul ou vermelho, se um texto deve estar visível ou escondido, ou se o plural de uma palavra deve ser usado. É a "pincelada rápida" da lógica de programação.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Forma tradicional vs Ternário\n// Tradicional:\nSE (nota >= 7) ENTÃO status <- \"Aprovado\" SENÃO status <- \"Reprovado\"\n\n// Ternário (conceitual):\nstatus <- (nota >= 7) ? \"Aprovado\" : \"Reprovado\"",
        label: "Comparação de estilos"
      },
      {
        lang: "python",
        code: "# Em Python a ordem é diferente: VALOR_SE_VERDADEIRO if CONDICAO else VALOR_SE_FALSO\nidade = 20\nstatus = \"Adulto\" if idade >= 18 else \"Menor\"\nprint(status)",
        label: "Ternário em Python"
      },
      {
        lang: "pseudocode",
        code: "// Definindo o maior de dois números\nmaior <- (a > b) ? a : b",
        label: "Encontrando o maior valor"
      },
      {
        lang: "python",
        code: "# Exemplo com strings e formatação\nusuario = \"João\"\nmensagem = f\"Olá, {usuario if usuario else 'Visitante'}!\"\nprint(mensagem)",
        label: "Uso prático em textos"
      },
      {
        lang: "pseudocode",
        code: "// Par ou Ímpar rápido\ntipo <- (num % 2 == 0) ? \"Par\" : \"Ímpar\"",
        label: "Verificação rápida"
      }
    ],
    points: [
      "O operador ternário é uma forma compacta do IF...ELSE.",
      "Recebe esse nome por possuir 3 operandos (condição, v, f).",
      "É ideal para atribuições de valores simples e diretas.",
      "Melhora a legibilidade do código quando usado corretamente.",
      "Em muitas linguagens usa os símbolos '?' e ':'.",
      "Em Python usa a sintaxe 'X if COND else Y'.",
      "Deve ser evitado se a lógica for complexa ou envolver muitas etapas."
    ],
    alerts: [
      { type: "tip", content: "Use ternários para coisas simples. Se precisar de mais de uma linha de ação, use o IF tradicional." },
      { type: "danger", content: "Evite aninhar ternários. Isso é considerado uma má prática porque torna o código muito difícil de manter." },
      { type: "info", content: "O ternário sempre retorna um valor, por isso ele é usado geralmente em atribuições de variáveis." }
    ]
  },
  {
    slug: "decisoes-boas-praticas",
    section: "decisoes",
    title: "Boas Práticas em Estruturas de Decisão",
    difficulty: "iniciante",
    subtitle: "Como escrever condições limpas, eficientes e fáceis de manter.",
    intro: `Escrever um código que funciona é apenas metade do trabalho de um programador. A outra metade é escrever um código que outros seres humanos (incluindo você mesmo daqui a seis meses) consigam entender. Estruturas de decisão são os lugares onde a confusão mais gosta de se esconder. Um "if" mal escrito pode esconder bugs silenciosos por anos.\n\nUma das regras de ouro é a "Clareza sobre a Brevidade". Às vezes, tentamos ser inteligentes e escrever condições gigantescas em uma única linha usando muitos E e OU. Isso é um erro. É muito melhor quebrar uma condição complexa em várias variáveis intermediárias com nomes claros, como "eh_adulto" ou "possui_saldo_suficiente". O código se torna uma leitura fluida, quase como um livro.\n\nOutro conceito fundamental é o de "Cláusulas de Guarda" ou "Retorno Antecipado". Em vez de colocar todo o seu código principal dentro de um IF gigante (o que aumenta o aninhamento), você teste os casos de erro primeiro e "sai" da função imediatamente. Isso deixa o caminho principal do seu código limpo e encostado na margem esquerda, o que é muito mais fácil de seguir com os olhos.\n\nA consistência na indentação também não é negociável. Espaços e abas são os "parágrafos" do seu código. Sem eles, as estruturas de decisão perdem sua hierarquia visual e se tornam um bloco de texto sem sentido. Ferramentas modernas ajudam nisso, mas a disciplina mental de organizar o código enquanto escreve é o que diferencia um amador de um profissional.\n\nPor fim, lembre-se de sempre tratar o caso contrário. Mesmo que você ache que "isso nunca vai acontecer", coloque um SENÃO com uma mensagem de erro ou um valor padrão. O mundo real é cheio de imprevistos (quedas de conexão, entradas de dados bizarras) e seu código deve estar preparado para decidir o que fazer quando o impossível acontece.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// EVITE: Condição complexa e confusa\nSE (i > 18 E s > 2000 E n == \"Brasil\" E (c == VERDADEIRO OU d == VERDADEIRO)) ENTÃO ...\n\n// PREFIRA: Variáveis explicativas\nVAR eh_maior_de_idade <- (i > 18)\nVAR tem_renda_minima <- (s > 2000)\nVAR pode_receber_credito <- (c OU d)\n\nSE (eh_maior_de_idade E tem_renda_minima E pode_receber_credito) ENTÃO ...",
        label: "Clareza vs Complexidade"
      },
      {
        lang: "python",
        code: "# Exemplo de 'Cláusula de Guarda'\ndef processar_pagamento(valor, saldo):\n    if valor <= 0:\n        print(\"Erro: Valor inválido\")\n        return\n    \n    if valor > saldo:\n        print(\"Erro: Saldo insuficiente\")\n        return\n\n    # Caminho principal (limpo e sem aninhamento)\n    saldo -= valor\n    print(\"Pagamento realizado!\")",
        label: "Retorno antecipado"
      },
      {
        lang: "pseudocode",
        code: "// Sempre use chaves ou indentação clara\nSE (condicao) ENTÃO\n  comando1\n  comando2 // Fica claro que ambos dependem da condicao\nFIM SE",
        label: "Organização visual"
      },
      {
        lang: "python",
        code: "# Use booleanos de forma direta\n# EVITE: if esta_logado == True:\n# PREFIRA:\nesta_logado = True\nif esta_logado:\n    print(\"Acesso ok\")",
        label: "Uso idiomático de booleanos"
      },
      {
        lang: "pseudocode",
        code: "// Caso padrão em menus\nESCOLHA(opcao)\n  CASO 1: ...\n  PADRÃO: ESCREVA(\"Opção não reconhecida\")\nFIM ESCOLHA",
        label: "Tratamento de exceções"
      }
    ],
    points: [
      "Dê nomes claros para variáveis que guardam resultados de comparações.",
      "Evite aninhamentos excessivos usando 'cláusulas de guarda'.",
      "Mantenha a indentação consistente em todo o projeto.",
      "Não compare valores booleanos com '== True', use o valor diretamente.",
      "Coloque as condições mais prováveis ou mais simples no topo.",
      "Comente lógicas de decisão que sejam inevitavelmente complexas.",
      "Sempre considere o que acontece se nenhuma condição for atendida."
    ],
    alerts: [
      { type: "success", content: "Código limpo é código que parece prosa: fácil de ler e entender a intenção do autor." },
      { type: "info", content: "A maioria das empresas de tecnologia possui 'Guias de Estilo' que definem exatamente como usar IFs." },
      { type: "warning", content: "Se você precisar explicar seu IF com muitos comentários, talvez a lógica esteja confusa demais." }
    ]
  },
  {
    slug: "exercicios-decisao",
    section: "decisoes",
    title: "Exercícios Comentados: Decisão",
    difficulty: "iniciante",
    subtitle: "Pratique o que aprendeu com desafios reais e resoluções detalhadas.",
    intro: `A melhor forma de aprender a programar não é lendo, é fazendo. E, mais importante do que fazer, é entender por que sua solução funciona (ou por que ela falhou). Nesta seção, vamos encarar alguns problemas clássicos que testam sua capacidade de estruturar decisões lógicas.\n\nCada exercício abaixo simula uma situação do dia a dia. Vamos começar com cálculos simples de impostos, passar por validações de segurança e chegar a sistemas de classificação. O objetivo é que você tente resolver mentalmente ou no papel antes de olhar a solução comentada.\n\nPreste atenção especial aos "detalhes". Na programação, a diferença entre ">" e ">=" pode ser a diferença entre um sistema que funciona e um que trava no dia do pagamento. Pequenos detalhes de lógica são onde os programadores passam a maior parte do tempo depurando.\n\nAo analisar as respostas, não foque apenas no código. Olhe para a ESTRUTURA. Veja como organizamos os casos, como tratamos as exceções e como deixamos o código legível. A "elegância" de uma solução lógica está na sua simplicidade e robustez.\n\nVamos praticar? Pegue seu editor de texto ou seu caderno e vamos transformar essas situações em algoritmos inteligentes!`,
    codes: [
      {
        lang: "pseudocode",
        code: "// EXERCÍCIO 1: Cálculo de Multa de Trânsito\n// Se a velocidade for até 80, sem multa.\n// Se for entre 81 e 100, multa de R$ 130.\n// Se for acima de 100, multa de R$ 260.\n\nVAR vel: inteiro\nLEIA(vel)\n\nSE (vel <= 80) ENTÃO\n  ESCREVA(\"Isento\")\nSENÃO SE (vel <= 100) ENTÃO\n  ESCREVA(\"Multa de R$ 130,00\")\nSENÃO\n  ESCREVA(\"Multa de R$ 260,00\")\nFIM SE",
        label: "Resolução Exercício 1"
      },
      {
        lang: "python",
        code: "# EXERCÍCIO 2: Classificação de IMC\npeso = 70\naltura = 1.75\nimc = peso / (altura * altura)\n\nif imc < 18.5:\n    status = \"Abaixo do peso\"\nelif imc < 25:\n    status = \"Peso normal\"\nelif imc < 30:\n    status = \"Sobrepeso\"\nelse:\n    status = \"Obesidade\"\n\nprint(f\"Seu IMC é {imc:.2f}: {status}\")",
        label: "Resolução Exercício 2 (Python)"
      },
      {
        lang: "pseudocode",
        code: "// EXERCÍCIO 3: Verificador de Ano Bissexto\n// Regra: Divisível por 4 E (NÃO divisível por 100 OU divisível por 400)\n\nVAR ano: inteiro\nLEIA(ano)\n\nSE (ano % 4 == 0 E (ano % 100 != 0 OU ano % 400 == 0)) ENTÃO\n  ESCREVA(\"Bissexto\")\nSENÃO\n  ESCREVA(\"Não é bissexto\")\nFIM SE",
        label: "Resolução Exercício 3 (Lógica complexa)"
      },
      {
        lang: "python",
        code: "# EXERCÍCIO 4: Simulador de Login com Bloqueio\nusuario_bd = \"admin\"\nsenha_bd = \"123\"\n\ntentativa_user = input(\"Usuário: \")\ntentativa_senha = input(\"Senha: \")\n\nif tentativa_user == usuario_bd:\n    if tentativa_senha == senha_bd:\n        print(\"Logado com sucesso!\")\n    else:\n        print(\"Senha incorreta!\")\nelse:\n    print(\"Usuário não encontrado!\")",
        label: "Resolução Exercício 4 (Aninhamento)"
      },
      {
        lang: "pseudocode",
        code: "// ANÁLISE DE ERRO COMUM (O Erro do IF Independente)\n// ERRADO:\nSE (idade >= 18) ENTÃO ESCREVA(\"Adulto\") FIM SE\nSE (idade >= 60) ENTÃO ESCREVA(\"Idoso\") FIM SE\n// Se a idade for 65, ele escreverá AMBOS!\n\n// CORRETO:\nSE (idade >= 60) ENTÃO ESCREVA(\"Idoso\")\nSENÃO SE (idade >= 18) ENTÃO ESCREVA(\"Adulto\")\nSENÃO ESCREVA(\"Criança\")\nFIM SE",
        label: "Análise Crítica de Lógica"
      }
    ],
    points: [
      "Exercício 1: Use SENÃO SE para faixas de valores consecutivas.",
      "Exercício 2: O cálculo do IMC exige precisão e categorias bem definidas.",
      "Exercício 3: Problemas matemáticos exigem atenção redobrada aos parênteses.",
      "Exercício 4: Aninhamento é útil para dar mensagens de erro específicas.",
      "Sempre verifique se as condições são excludentes ou independentes.",
      "Teste seu código com os valores que estão 'no limite' (ex: exatamente 18).",
      "Mantenha as mensagens de saída claras e amigáveis para o usuário."
    ],
    alerts: [
      { type: "success", content: "Parabéns! Praticar com exercícios é a forma mais rápida de fixar a lógica na memória." },
      { type: "warning", content: "Atenção: A ordem dos IFs no exercício do IMC é crucial. Se inverter, o resultado sairá errado!" },
      { type: "tip", content: "Tente reescrever esses exercícios em seu computador e mude as regras para ver o que acontece." }
    ]
  }
];
