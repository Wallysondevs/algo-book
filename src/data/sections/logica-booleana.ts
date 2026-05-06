import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "verdadeiro-falso",
    section: "logica-booleana",
    title: "Verdadeiro e Falso: a Base de Tudo",
    difficulty: "iniciante",
    subtitle: "Como o mundo digital é construído sobre decisões simples de 'sim' ou 'não'.",
    intro: `Imagine que você é um segurança de uma festa muito rigorosa. Para cada pessoa que chega, você só pode responder uma de duas coisas: 'Pode entrar' ou 'Não pode entrar'. Não existe 'talvez' ou 'vou pensar'. No coração de todo computador, a realidade funciona exatamente assim. Tudo é reduzido a dois estados possíveis, que chamamos tecnicamente de valores BOOLEANOS: Verdadeiro (True) ou Falso (False).\n\nEste nome, 'Booleano', vem de um matemático chamado George Boole, que percebeu que poderíamos resolver problemas lógicos complexos usando apenas esses dois valores. Na vida real, usamos isso o tempo todo sem perceber. 'A luz está acesa?', 'Está chovendo?', 'Eu tenho dinheiro na conta?'. Todas essas são perguntas que podem ser respondidas com um simples sim ou não.\n\nNa programação, usamos esses valores para controlar o fluxo dos nossos programas. Se uma condição for verdadeira, o programa segue por um caminho; se for falsa, segue por outro. É como os trilhos de um trem que se dividem em dois: a alavanca da lógica booleana é o que decide para onde o trem vai. Sem isso, os computadores seriam apenas calculadoras gigantes que sempre fazem a mesma coisa, sem nunca se adaptar às situações.\n\nOs computadores usam eletricidade para representar esses valores. Presença de voltagem alta pode significar 'Verdadeiro', enquanto voltagem baixa significa 'Falso'. É por isso que dizemos que os computadores trabalham com zeros e uns. O 1 representa o verdadeiro (ligado) e o 0 representa o falso (desligado). Toda a complexidade da internet, dos jogos e dos aplicativos que usamos é construída empilhando bilhões dessas pequenas decisões de sim ou não.\n\nNeste capítulo, vamos aprender a identificar essas situações e como expressá-las de uma forma que o computador entenda. Você verá que, embora pareça simples demais, a capacidade de distinguir o verdadeiro do falso é o que permite que softwares tomem decisões inteligentes, como bloquear uma senha errada ou enviar uma notificação de mensagem nova.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Variáveis booleanas simples\nVAR tem_cafe: logico\nVAR esta_frio: logico\n\ntem_cafe <- VERDADEIRO\nesta_frio <- FALSO",
        label: "Declarando valores lógicos"
      },
      {
        lang: "python",
        code: "estou_vivo = True\nestou_cansado = False\n\nprint(type(estou_vivo)) # Saída: <class 'bool'>",
        label: "Booleanos em Python"
      },
      {
        lang: "pseudocode",
        code: "// Comparação que resulta em um booleano\nVAR idade: inteiro\nidade <- 20\n\nVAR eh_maior_de_idade: logico\neh_maior_de_idade <- (idade >= 18) // Isso será VERDADEIRO",
        label: "Resultados de comparações"
      },
      {
        lang: "python",
        code: "# Exemplos de comparações rápidas\nprint(10 > 5)  # True\nprint(3 == 4)  # False\nprint(5 != 5)  # False",
        label: "Operadores de comparação"
      }
    ],
    points: [
      "Valores booleanos podem ser apenas Verdadeiro ou Falso.",
      "O nome vem de George Boole, pioneiro da lógica matemática.",
      "Na máquina, 1 representa Verdadeiro e 0 representa Falso.",
      "Expressões de comparação (como > ou <) sempre resultam em um booleano.",
      "Booleanos são fundamentais para o controle de fluxo (tomada de decisão).",
      "Um computador não entende 'talvez'; tudo deve ser binário.",
      "Variáveis lógicas ocupam o menor espaço possível na memória."
    ],
    alerts: [
      { type: "info", content: "Em muitas linguagens, como Python, os valores booleanos começam com letra maiúscula: True e False." },
      { type: "tip", content: "Pense em booleanos como interruptores de luz: ou estão ligados, ou desligados." },
      { type: "warning", content: "Cuidado ao comparar textos: 'Sim' é diferente de 'sim' e pode gerar resultados falsos inesperados." }
    ]
  },
  {
    slug: "operadores-logicos",
    section: "logica-booleana",
    title: "Operadores Lógicos: E, OU, NÃO",
    difficulty: "iniciante",
    subtitle: "Combinando condições para criar regras de negócio complexas.",
    intro: `Agora que sabemos o que é verdadeiro e falso, precisamos aprender a combinar essas informações. Na vida real, raramente tomamos decisões baseadas em apenas um fator. Por exemplo, você só vai à praia se 'estiver sol' E 'for final de semana'. Se apenas uma dessas coisas for verdade (está sol, mas é segunda-feira), você não vai. Esse 'E' é o que chamamos de Operador Lógico.\n\nExistem três operadores fundamentais que você usará para o resto da sua vida como programador: E (AND), OU (OR) e NÃO (NOT). O operador **E** é exigente: ele só resulta em verdadeiro se TODOS os lados forem verdadeiros. É como um contrato onde você precisa assinar todas as páginas para ele ter validade.\n\nJá o operador **OU** é mais flexível, generoso. Ele resulta em verdadeiro se pelo menos UMA das condições for atendida. 'Eu vou viajar se ganhar na loteria OU se receber um bônus'. Se qualquer uma dessas coisas acontecer (ou ambas!), eu viajo. É o operador das alternativas.\n\nO operador **NÃO** é o do contra, o rebelde. Ele simplesmente inverte o valor atual. Se algo é verdadeiro, o NÃO o torna falso. Se é falso, o NÃO o torna verdadeiro. Parece bobagem, mas é extremamente útil para verificar se algo 'não aconteceu', como 'SE NÃO houver erros, prossiga'.\n\nDominar esses três operadores é como aprender a gramática de uma língua. Eles permitem que você crie frases complexas para o computador, definindo regras precisas para qualquer situação. 'Se o usuário digitou a senha correta E ele não está bloqueado E ele tem permissão de administrador, então deixe-o entrar'. Viu como combinamos três condições em uma só decisão? É aqui que a mágica da lógica realmente começa a brilhar.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Operador E (AND)\nSE (tem_ingresso E tem_documento) ENTÃO\n  EntrarNoShow()\nFIM SE",
        label: "Exemplo com E"
      },
      {
        lang: "pseudocode",
        code: "// Operador OU (OR)\nSE (aceita_cartao OU aceita_pix) ENTÃO\n  FazerCompra()\nFIM SE",
        label: "Exemplo com OU"
      },
      {
        lang: "python",
        code: "# Operadores em Python\ntem_fome = True\ntem_comida = False\n\nprint(tem_fome and tem_comida) # False\nprint(tem_fome or tem_comida)  # True\nprint(not tem_fome)            # False",
        label: "Operadores em Python"
      },
      {
        lang: "pseudocode",
        code: "// Combinação complexa\nSE (sol E (sabado OU domingo)) ENTÃO\n  IrPraia()\nFIM SE",
        label: "Combinando operadores com parênteses"
      }
    ],
    points: [
      "O operador E exige que todas as condições sejam verdadeiras.",
      "O operador OU exige que apenas uma das condições seja verdadeira.",
      "O operador NÃO inverte o valor lógico atual.",
      "Podemos combinar múltiplos operadores em uma única linha.",
      "O uso de parênteses é essencial para definir a ordem de avaliação.",
      "Expressões lógicas são avaliadas da esquerda para a direita (geralmente).",
      "Combinar operadores permite criar regras de segurança e fluxos complexos."
    ],
    alerts: [
      { type: "tip", content: "Sempre use parênteses para deixar claro quais condições devem ser avaliadas juntas. Isso evita bugs difíceis de encontrar." },
      { type: "warning", content: "No operador OU, se a primeira parte for verdadeira, o computador nem olha para a segunda em muitas linguagens (curto-circuito)." },
      { type: "info", content: "Em muitas linguagens, 'E' é representado por '&&', 'OU' por '||' e 'NÃO' por '!'." }
    ]
  },
  {
    slug: "tabela-verdade",
    section: "logica-booleana",
    title: "Tabela-Verdade",
    difficulty: "iniciante",
    subtitle: "A ferramenta matemática para prever todos os resultados possíveis.",
    intro: `Às vezes, as combinações de 'E', 'OU' e 'NÃO' ficam tão grandes que nossa cabeça começa a dar um nó. Como ter certeza de que cobrimos todos os casos? É aqui que entra a Tabela-Verdade. Ela é um mapa, uma tabela simples que lista todas as combinações possíveis de entradas e mostra qual será o resultado final para cada uma delas.\n\nImagine que você tem duas lâmpadas (A e B). Cada uma pode estar ligada (V) ou desligada (F). Existem apenas quatro combinações possíveis: ambas ligadas, ambas desligadas, ou uma ligada e a outra não. A Tabela-Verdade nos mostra o que acontece com o resultado final do circuito para cada um desses quatro estados. É uma forma visual e infalível de testar sua lógica antes mesmo de escrever o código.\n\nPara o operador **E**, a tabela é curta: só sai 'Verdadeiro' na linha onde todas as entradas são 'Verdadeiro'. Para o **OU**, a tabela mostra 'Verdadeiro' em quase todas as linhas, exceto naquela onde tudo é 'Falso'. Ter essas tabelas na mente (ou coladas na parede do quarto) ajuda muito quando você está tentando entender por que um programa não está entrando em um 'if' que você criou.\n\nConstruir tabelas-verdade é um exercício excelente para treinar o rigor mental. Na programação profissional, usamos isso para validar regras de negócio complexas. Por exemplo, em um sistema de descontos: 'O cliente ganha desconto se for a primeira compra OU se o valor for maior que 100 reais, DESDE QUE ele não use cupom de brinde'. Uma tabela-verdade ajudaria a garantir que o desconto não seja dado indevidamente.\n\nNeste capítulo, vamos desenhar essas tabelas juntos. Você verá que a lógica, embora pareça abstrata, é extremamente previsível e matemática. Uma vez que você entende o padrão das tabelas, você para de 'tentar a sorte' com o código e passa a saber exatamente o que vai acontecer em cada cenário possível.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Tabela Verdade do E (AND)\nA | B | A E B\n--|---|------\nV | V | V\nV | F | F\nF | V | F\nF | F | F",
        label: "Tabela do E"
      },
      {
        lang: "pseudocode",
        code: "// Tabela Verdade do OU (OR)\nA | B | A OU B\n--|---|-------\nV | V | V\nV | F | V\nF | V | V\nF | F | F",
        label: "Tabela do OU"
      },
      {
        lang: "pseudocode",
        code: "// Tabela do NÃO (NOT)\nA | NÃO A\n--|------\nV | F\nF | V",
        label: "Tabela do NÃO"
      },
      {
        lang: "python",
        code: "# Testando a tabela verdade via código\nfor A in [True, False]:\n    for B in [True, False]:\n        print(f'{A} AND {B} = {A and B}')",
        label: "Gerador de Tabela em Python"
      }
    ],
    points: [
      "A Tabela-Verdade mapeia todas as combinações de entrada possíveis.",
      "Para N condições, a tabela terá 2 elevado a N linhas.",
      "É a ferramenta definitiva para depurar lógica complexa.",
      "Ajuda a simplificar expressões lógicas redundantes.",
      "No operador E, o resultado é V apenas se todas as entradas forem V.",
      "No operador OU, o resultado é F apenas se todas as entradas forem F.",
      "O operador NÃO apenas inverte os valores de uma coluna."
    ],
    alerts: [
      { type: "info", content: "A Tabela-Verdade é usada tanto na programação quanto no design de chips de computador (hardware)." },
      { type: "tip", content: "Se você estiver confuso com um 'if' gigante, desenhe a tabela-verdade dele no papel." },
      { type: "success", content: "Dominar tabelas-verdade fará você escrever códigos com muito menos erros de lógica." }
    ]
  },
  {
    slug: "logica-proposicional",
    section: "logica-booleana",
    title: "Lógica Proposicional para Programadores",
    difficulty: "iniciante",
    subtitle: "Transformando frases do dia a dia em fórmulas que o computador entende.",
    intro: `A Lógica Proposicional é o ramo da lógica que estuda as proposições — frases que podem ser julgadas como verdadeiras ou falsas. No dia a dia, falamos de forma vaga e cheia de gírias, mas o computador precisa de clareza total. Aprender lógica proposicional é aprender a 'traduzir' os desejos do cliente ou as regras de um problema para uma linguagem matemática rigorosa.\n\nUma proposição simples é algo como: 'O arquivo existe'. Podemos chamar isso de P. Outra proposição: 'O usuário tem permissão'. Chamamos de Q. A lógica proposicional nos ensina a conectar essas letras usando os símbolos que vimos (E, OU, NÃO) para formar sentenças lógicas. É quase como álgebra, mas em vez de números, usamos fatos.\n\nUm conceito poderoso aqui é o da 'Implicação' (Se... então...). Na lógica, dizemos que 'P implica Q' (P -> Q). Por exemplo: 'Se a bateria está abaixo de 10%, então mostre um aviso'. Entender como essas implicações funcionam ajuda a estruturar o pensamento para criar algoritmos que respondem corretamente a eventos.\n\nOutro ponto importante são as Leis de De Morgan, que ensinam como negar combinações. Por exemplo, a negação de 'Sol E Calor' não é 'Chuva E Frio', mas sim 'NÃO Sol OU NÃO Calor'. Parece confuso? Isso é normal! Mas aprender essas regrinhas evita que você cometa erros clássicos na hora de inverter uma condição no seu código, um dos lugares onde os bugs mais gostam de se esconder.\n\nNeste capítulo, vamos praticar essa tradução. Vamos pegar frases comuns e transformá-las em 'fórmulas' lógicas. Ao final, você verá que programar nada mais é do que escrever uma longa sequência de proposições que levam o computador do ponto A ao ponto B com total segurança e previsibilidade.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Traduzindo Proposições\nP = 'Usuário Logado'\nQ = 'Possui Assinatura'\n\nRegra: P E Q (Acesso permitido apenas se ambos forem verdadeiros)",
        label: "Proposições Simples"
      },
      {
        lang: "python",
        code: "# Exemplo de De Morgan na prática\n# not (A and B) é o mesmo que (not A) or (not B)\n\nchuva = True\nguarda_chuva = False\n\nif not (chuva and guarda_chuva):\n    print('Você vai se molhar!')",
        label: "Leis de De Morgan"
      },
      {
        lang: "pseudocode",
        code: "// Implicação Lógica\nSE (sensor_movimento == ATIVADO) ENTÃO\n  disparar_alarme <- VERDADEIRO\nFIM SE",
        label: "Implicação (Se... então)"
      },
      {
        lang: "python",
        code: "# Equivalência Lógica\n# A -> B é o mesmo que (not A) or B\ntem_combustivel = False\ncarro_anda = False\n\n# Esta é uma forma lógica de expressar a relação\nprint((not tem_combustivel) or carro_anda)",
        label: "Equivalências"
      }
    ],
    points: [
      "Uma proposição é uma afirmação que pode ser Verdadeira ou Falsa.",
      "Proposições complexas são formadas por conectivos lógicos.",
      "A lógica proposicional ajuda a eliminar ambiguidades da linguagem humana.",
      "As Leis de De Morgan são cruciais para simplificar negações.",
      "A implicação (P -> Q) é a base das estruturas de decisão (IF).",
      "Equivalência lógica mostra que diferentes códigos podem fazer a mesma coisa.",
      "Traduzir o problema para lógica proposicional é o primeiro passo da codificação."
    ],
    alerts: [
      { type: "info", content: "A lógica proposicional é a mesma base usada em filosofia e direito para construir argumentos válidos." },
      { type: "warning", content: "Cuidado com o 'OU' na linguagem comum, que às vezes é exclusivo. Na lógica, o 'OU' padrão permite que ambos sejam verdadeiros." },
      { type: "tip", content: "Pratique converter regras de jogos de tabuleiro em fórmulas lógicas para treinar." }
    ]
  },
  {
    slug: "resolucao-problemas-logica",
    section: "logica-booleana",
    title: "Resolvendo Problemas com Lógica",
    difficulty: "iniciante",
    subtitle: "Estratégias práticas para encarar desafios e charadas lógicas.",
    intro: `Você já ouviu falar do desafio do lobo, do bode e do repolho? Um homem precisa atravessar um rio com os três, mas o barco só cabe ele e mais um. Se ele deixar o lobo sozinho com o bode, o lobo come o bode. Se deixar o bode com o repolho, o repolho vira janta. Resolver esse tipo de quebra-cabeça é puro treino de lógica de programação!\n\nA chave para resolver qualquer problema de lógica é o isolamento de variáveis e o teste de estados. Você precisa olhar para o cenário atual, listar as regras (restrições) e testar cada passo possível. Na programação, fazemos exatamente isso: definimos o estado inicial do sistema e as regras que ditam como esse estado pode mudar sem 'quebrar' o programa.\n\nUma técnica muito útil é a 'Redução ao Absurdo'. Você assume que algo é verdadeiro e segue o rastro de consequências. Se chegar a uma contradição impossível, então você sabe que aquela suposição inicial era falsa. Isso ajuda muito a encontrar erros no código: 'Se eu assumir que esta variável é sempre positiva, o que acontece quando o usuário digita zero? Ah, o programa trava. Então minha suposição estava errada'.\n\nOutra estratégia é a 'Decomposição'. Problemas grandes assustam, mas se você os quebrar em 10 problemas minúsculos, eles se tornam banais. No problema do rio, o 'problema grande' é atravessar tudo. O 'problema pequeno' é apenas: 'quem eu posso levar agora que não vai causar um desastre na margem que estou deixando?'.\n\nNeste capítulo, vamos encarar alguns desafios clássicos. Não para torturar sua mente, mas para mostrar que a lógica é uma musculatura que pode ser treinada. Quanto mais você resolve esses 'enigmas', mais fácil fica visualizar as rotas que os dados percorrem dentro de um software complexo. Vamos colocar a massa cinzenta para trabalhar!`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Desafio do Rio (Algoritmo de Atravessia)\nINICIO\n  Levar Bode\n  Voltar Sozinho\n  Levar Lobo\n  Voltar com Bode\n  Levar Repolho\n  Voltar Sozinho\n  Levar Bode\nFIM",
        label: "Solução do Enigma do Rio"
      },
      {
        lang: "pseudocode",
        code: "// Testando restrições\nFUNCAO SeguroNaMargem(item1, item2)\n  SE (item1 == 'Lobo' E item2 == 'Bode') ENTÃO RETORNE FALSO\n  SE (item1 == 'Bode' E item2 == 'Repolho') ENTÃO RETORNE FALSO\n  RETORNE VERDADEIRO\nFIM FUNCAO",
        label: "Verificador de Regras"
      },
      {
        lang: "python",
        code: "# Resolvendo via código (busca de solução)\ndef testar_cenario(margem_a, margem_b):\n    if 'Lobo' in margem_a and 'Bode' in margem_a:\n        return 'Bode comido!'\n    return 'Tudo ok!'",
        label: "Simulação de Estado"
      },
      {
        lang: "pseudocode",
        code: "// Estratégia de Divisão\n1. Entender o problema\n2. Listar restrições\n3. Testar passos pequenos\n4. Validar resultado final",
        label: "Passos para resolução"
      }
    ],
    points: [
      "Problemas complexos devem ser quebrados em partes menores.",
      "Identificar as restrições é o primeiro passo para a solução.",
      "Testar estados intermediários ajuda a não perder o rumo.",
      "A lógica de programação é como um músculo que precisa de exercício.",
      "O uso de diagramas e desenhos ajuda a visualizar a solução.",
      "A redução ao absurdo é ótima para encontrar falhas em regras.",
      "Saber o que NÃO fazer é tão importante quanto saber o que fazer."
    ],
    alerts: [
      { type: "tip", content: "Não tente resolver tudo de cabeça. Use papel e caneta para rascunhar os estados do problema." },
      { type: "info", content: "Muitas entrevistas de emprego em grandes empresas (como Google) usam esses enigmas de lógica." },
      { type: "danger", content: "Pular a fase de planejamento e ir direto para o código é a receita para o fracasso em problemas lógicos." }
    ]
  },
  {
    slug: "numeros-binarios",
    section: "logica-booleana",
    title: "Números Binários: a Linguagem da Máquina",
    difficulty: "iniciante",
    subtitle: "Como o computador conta usando apenas zeros e uns.",
    intro: `Nós, humanos, estamos acostumados com o sistema decimal (base 10), provavelmente porque temos dez dedos nas mãos. Contamos de 0 a 9 e, depois disso, 'subimos uma casa' para formar o 10. Mas o computador, como já vimos, só tem dois 'dedos' elétricos: ligado ou desligado. Por isso, ele usa o sistema BINÁRIO (base 2).\n\nEntender binário é como aprender a ler o DNA da computação. Em binário, cada posição de um número representa uma potência de 2 (1, 2, 4, 8, 16, 32...). Para formar o número 3, por exemplo, o computador pensa: 'Eu preciso de um 2 e de um 1'. Então o número 3 em binário é escrito como 11. O número 5 seria 101 (um 4, nenhum 2 e um 1).\n\nIsso pode parecer estranho no começo, mas é a forma mais eficiente e robusta de transmitir informação por cabos e circuitos. Sinais elétricos podem sofrer interferência; se tivéssemos 10 níveis de voltagem diferentes, seria fácil confundir um 7 com um 8. Mas com apenas 'tem energia' ou 'não tem energia', o erro é muito mais difícil de acontecer.\n\nCada um desses 0s ou 1s é chamado de **BIT** (Binary Digit). Quando juntamos 8 bits, formamos um **BYTE**. Um byte pode representar números de 0 a 255. E é com esses números que o computador representa tudo: cada letra do seu teclado tem um código numérico correspondente (como o código ASCII), e cada cor em um pixel é uma combinação de números binários para Vermelho, Verde e Azul.\n\nNeste capítulo final da seção, vamos aprender a fazer essas conversões básicas. Você verá que não é matemática de outro mundo, é apenas uma forma diferente de organizar as quantidades. Ao dominar isso, o 'véu' de mistério sobre como o hardware conversa com o software finalmente começará a desaparecer.`,
    codes: [
      {
        lang: "pseudocode",
        code: "// Tabela de Pesos Binários\n128 | 64 | 32 | 16 | 8 | 4 | 2 | 1\n----|----|----|----|---|---|---|---\n 0  | 0  | 0  | 0  | 1 | 0 | 1 | 0  => (8 + 2) = 10",
        label: "Convertendo Binário para Decimal"
      },
      {
        lang: "python",
        code: "# Convertendo números em Python\ndecimal = 10\nbinario = bin(decimal)\nprint(binario) # Saída: 0b1010",
        label: "Binários em Python"
      },
      {
        lang: "pseudocode",
        code: "// Contando em Binário\n0000 = 0\n0001 = 1\n0010 = 2\n0011 = 3\n0100 = 4",
        label: "Sequência Numérica"
      },
      {
        lang: "python",
        code: "# Operações Bitwise (Lógica direta nos bits)\na = 5  # (0101)\nb = 3  # (0011)\nprint(a & b) # Resultado: 1 (0001) - Operação E bit a bit",
        label: "Operações com Bits"
      }
    ],
    points: [
      "O sistema binário possui apenas dois dígitos: 0 e 1.",
      "Cada posição em um número binário vale o dobro da posição à direita.",
      "BIT é a menor unidade de informação (Binary Digit).",
      "BYTE é um conjunto de 8 BITS.",
      "Computadores usam binário pela robustez física dos sinais elétricos.",
      "Toda informação (texto, imagem, som) é convertida para binário no computador.",
      "Operações 'bitwise' permitem manipular bits individuais para ganho de performance."
    ],
    alerts: [
      { type: "info", content: "A palavra 'computador' vem de 'computar', que significa contar ou calcular. No fundo, tudo são números." },
      { type: "tip", content: "Para converter decimal para binário, vá dividindo por 2 e anote os restos." },
      { type: "warning", content: "Não confunda BIT (b minúsculo) com BYTE (B maiúsculo). 1 Byte = 8 Bits." }
    ]
  }
];
