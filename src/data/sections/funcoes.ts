import { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "por-que-funcoes",
    section: "funcoes",
    title: "Por que usar Funções?",
    difficulty: "iniciante",
    subtitle: "A arte de organizar e reutilizar código",
    intro: "Imagine que você é um chef de cozinha renomado. Para preparar um jantar completo, você não descreve cada movimento atômico (como 'mova a mão 10cm para a esquerda' ou 'feche os dedos no cabo da faca') toda vez que precisa picar uma cebola. Em vez disso, você tem um conceito mental chamado 'picar cebola'. Toda vez que a receita pede isso, você simplesmente executa esse conjunto de ações que já sabe de cor. Na programação, as funções são exatamente isso: blocos de construção que encapsulam uma tarefa específica sob um nome simples.\n\nSem funções, o código de um programa complexo seria como uma única e gigantesca lista de compras sem categorias. Se você precisasse calcular o imposto de um produto em dez lugares diferentes do seu sistema, teria que copiar e colar as mesmas linhas de cálculo dez vezes. Se a lei mudasse e o imposto aumentasse, você teria que procurar esses dez lugares e alterá-los um por um. Esse é o caminho mais rápido para criar bugs e dores de cabeça.\n\nA função introduz o conceito de abstração. Ao usar uma função chamada `calcular_imposto()`, você não precisa mais se preocupar com a fórmula matemática interna toda vez que a utiliza; você só se preocupa com o que ela faz. É como usar um controle remoto: você aperta o botão de 'ligar' sem precisar entender como os circuitos eletrônicos internos funcionam. Isso torna o código muito mais legível e fácil de entender, tanto para você quanto para outros programadores.\n\nAlém da organização, as funções promovem a reutilização. Uma função bem escrita para validar um CPF, por exemplo, pode ser usada em centenas de projetos diferentes sem precisar ser reescrita. É como ter uma caixa de ferramentas: você não fabrica uma chave de fenda toda vez que precisa apertar um parafuso; você simplesmente pega a que já tem pronta. Isso acelera drasticamente o processo de desenvolvimento de software.\n\nPor fim, funções facilitam o teste e a correção de erros. Se o cálculo do seu sistema está errado, e esse cálculo está centralizado em uma única função, você só precisa consertar aquele bloco de código. Uma vez corrigido na função, o erro desaparece de todo o sistema instantaneamente. As funções transformam um monólito de código em um conjunto de peças modulares, prontas para serem combinadas de infinitas maneiras para criar soluções poderosas e elegantes.",
    codes: [
      {
        lang: "python",
        label: "Código repetitivo (Sem funções)",
        code: "# Calculando área de vários círculos sem funções\narea1 = 3.14 * (5 ** 2)\nprint(f\"Área 1: {area1}\")\n\narea2 = 3.14 * (10 ** 2)\nprint(f\"Área 2: {area2}\")\n\narea3 = 3.14 * (2.5 ** 2)\nprint(f\"Área 3: {area3}\")"
      },
      {
        lang: "python",
        label: "Código organizado (Com funções)",
        code: "def calcular_area_circulo(raio):\n    return 3.14 * (raio ** 2)\n\nprint(f\"Área 1: {calcular_area_circulo(5)}\")\nprint(f\"Área 2: {calcular_area_circulo(10)}\")\nprint(f\"Área 3: {calcular_area_circulo(2.5)}\")"
      },
      {
        lang: "python",
        label: "Reutilização simples",
        code: "def saudar(nome):\n    print(f\"Olá, {nome}! Bem-vindo ao curso de algoritmos.\")\n\nsaudar(\"Alice\")\nsaudar(\"Bob\")"
      },
      {
        lang: "python",
        label: "Facilitando a manutenção",
        code: "# Se o formato da saudação mudar, alteramos apenas aqui\ndef saudar_estilizado(nome):\n    print(\"------------------\")\n    print(f\"  BEM-VINDO, {nome.upper()}!\")\n    print(\"------------------\")\n\nsaudar_estilizado(\"Carlos\")"
      },
      {
        lang: "python",
        label: "Abstração de lógica complexa",
        code: "def eh_par(numero):\n    return numero % 2 == 0\n\n# O código abaixo fica muito mais legível\nif eh_par(10):\n    print(\"O número é par!\")"
      }
    ],
    points: [
      "Funções evitam a repetição de código (princípio DRY - Don't Repeat Yourself).",
      "Permitem dividir problemas grandes em partes menores e gerenciáveis.",
      "Facilitam a leitura e compreensão do fluxo do programa.",
      "Centralizam a lógica, tornando a manutenção e correção de bugs muito mais rápida.",
      "Promovem a reutilização de código em diferentes partes de um projeto ou até em projetos distintos.",
      "Aumentam a testabilidade do software, permitindo validar partes isoladas.",
      "Ajudam a esconder detalhes complexos através da abstração."
    ],
    alerts: [
      {
        type: "tip",
        content: "Sempre dê nomes às funções que descrevam uma ação (verbos), como 'calcular_media' ou 'validar_senha'."
      },
      {
        type: "info",
        content: "Funções pequenas e focadas em apenas uma tarefa são melhores do que funções gigantescas que fazem 'tudo'."
      },
      {
        type: "success",
        content: "Aprender a usar funções é o primeiro passo para sair do nível básico e entrar no desenvolvimento profissional."
      }
    ]
  },
  {
    slug: "definindo-funcao",
    section: "funcoes",
    title: "Definindo uma Função",
    difficulty: "iniciante",
    subtitle: "A anatomia de um bloco de código nomeado",
    intro: "Criar uma função é como escrever o manual de instruções para uma tarefa que o computador ainda não sabe realizar. Para o computador, uma função definida é um novo 'verbo' que ele aprendeu a conjugar. A definição de uma função possui uma estrutura padrão que ajuda o interpretador a entender onde o bloco começa, o que ele precisa para trabalhar e onde ele termina. É como preencher um formulário oficial de registro de novas habilidades.\n\nO primeiro passo é a declaração, onde damos um nome à função e abrimos parênteses. O nome deve ser claro e autoexplicativo, pois ele será o ponto de referência para chamá-la no futuro. Pense no nome como o título de uma receita em um livro: 'Bolo de Cenoura'. Só de ler o título, você já sabe o que esperar daquele bloco de instruções. Se o nome for genérico como 'Funcao1', você terá dificuldades para entender seu código daqui a um mês.\n\nEm seguida, temos o corpo da função, que é o conjunto de comandos que serão executados quando a função for chamada. No Python, usamos a indentação (aquele recuo à esquerda) para dizer ao computador: 'Tudo o que estiver recuado pertence a esta função'. É como se a função fosse uma caixa, e as instruções estivessem guardadas lá dentro. Quando a indentação volta ao normal, a caixa se fecha e o código volta ao fluxo principal do programa.\n\nÉ importante distinguir a 'definição' da 'chamada' de uma função. Definir a função é como escrever a receita; nada acontece na sua cozinha apenas por você ter a receita guardada. A chamada da função é o ato de realmente ir para o fogão e seguir as instruções. Você pode definir uma função no início do seu arquivo e nunca usá-la, mas ela só terá utilidade quando você escrever o nome dela seguido de parênteses em algum lugar do código.\n\nPor fim, as funções podem ser definidas com ou sem informações de entrada. Algumas funções são autossuficientes, como uma função `limpar_tela()` que sempre faz a mesma coisa sem precisar de dados externos. Outras, como uma função `dobrar_valor()`, precisam de uma matéria-prima para trabalhar. Independentemente disso, a estrutura básica de definição permanece consistente, servindo como o alicerce para toda a lógica modular que você construirá.",
    codes: [
      {
        lang: "pseudocode",
        label: "Estrutura básica de uma função",
        code: "funcao saudar()\ninicio\n    escreva(\"Olá, mundo!\")\nfim\n\n// Chamada da função\nsaudar()"
      },
      {
        lang: "python",
        label: "Definição simples em Python",
        code: "def mostrar_menu():\n    print(\"--- MENU PRINCIPAL ---\")\n    print(\"1. Iniciar Jogo\")\n    print(\"2. Configurações\")\n    print(\"3. Sair\")\n\n# Chamando a função\nmostrar_menu()"
      },
      {
        lang: "python",
        label: "Função com múltiplas linhas",
        code: "def realizar_contagem():\n    print(\"Iniciando em...\")\n    for i in range(3, 0, -1):\n        print(i)\n    print(\"FOGO!\")\n\nrealizar_contagem()"
      },
      {
        lang: "python",
        label: "A ordem importa",
        code: "# Primeiro definimos\ndef minha_funcao():\n    print(\"Executando...\")\n\n# Depois chamamos\nminha_funcao()"
      },
      {
        lang: "python",
        label: "Funções dentro de funções",
        code: "def cabeçalho():\n    print(\"### SISTEMA ALGO-BOOK ###\")\n\ndef iniciar_app():\n    cabeçalho()\n    print(\"App carregado com sucesso.\")\n\niniciar_app()"
      }
    ],
    points: [
      "No Python, usamos a palavra-chave 'def' para iniciar a definição.",
      "O nome da função deve seguir as mesmas regras de nomenclatura de variáveis.",
      "Os parênteses após o nome são obrigatórios, mesmo se estiverem vazios.",
      "Os dois pontos (:) marcam o início do corpo da função.",
      "A indentação define quais linhas de código pertencem àquela função.",
      "Definir uma função não a executa; é necessário 'chamá-la' explicitamente.",
      "Funções devem ser definidas antes de serem chamadas no fluxo do código."
    ],
    alerts: [
      {
        type: "danger",
        content: "Esquecer a indentação em linguagens como Python resultará em um erro de sintaxe imediato."
      },
      {
        type: "warning",
        content: "Não tente usar uma função antes de ter escrito a definição dela (o comando 'def')."
      },
      {
        type: "info",
        content: "Em Python, o corpo de uma função vazia pode usar a palavra 'pass' para evitar erros enquanto você ainda não escreveu o código."
      }
    ]
  },
  {
    slug: "parametros-argumentos",
    section: "funcoes",
    title: "Parâmetros e Argumentos",
    difficulty: "iniciante",
    subtitle: "Enviando informações para dentro da função",
    intro: "Imagine uma máquina de suco. Se você apenas apertar o botão de ligar sem colocar nenhuma fruta dentro, a máquina não terá o que processar. Para que a função seja verdadeiramente útil e versátil, ela precisa receber 'matéria-prima' do mundo exterior. É aqui que entram os parâmetros e argumentos. Parâmetros são como os 'espaços vazios' na definição da máquina (ex: o bocal onde entra a fruta), e argumentos são os itens reais que você coloca lá (ex: uma laranja ou uma maçã).\n\nQuando definimos uma função como `calcular_media(nota1, nota2)`, os nomes dentro dos parênteses são os parâmetros. Eles funcionam como variáveis locais que só existem dentro daquela função. Elas dizem ao computador: 'Eu não sei quais serão os valores ainda, mas quando eles chegarem, eu os chamarei de nota1 e nota2'. Isso permite que a mesma função calcule a média para qualquer par de números que enviarmos.\n\nA passagem de argumentos acontece no momento da chamada: `calcular_media(7.5, 9.0)`. Aqui, o valor 7.5 é atribuído à `nota1` e 9.0 à `nota2`. É como se fosse um contrato: a ordem e a quantidade de informações enviadas devem corresponder exatamente ao que a função espera receber. Se a função pede dois números e você envia apenas um, o programa 'reclamará' que a informação está incompleta.\n\nExistem também os parâmetros com valores padrão (default). Imagine um forno que, por padrão, sempre liga a 180 graus a menos que você diga o contrário. Na programação, podemos definir `def assar(tempo, temperatura=180)`. Se chamarmos apenas `assar(30)`, a temperatura será automaticamente 180. Isso torna nossas funções mais flexíveis e fáceis de usar em casos comuns, permitindo personalização apenas quando necessário.\n\nPor fim, entender a diferença entre parâmetros e argumentos é fundamental para a comunicação entre diferentes partes do seu software. Os parâmetros definem a interface da função (o que ela precisa), enquanto os argumentos representam os dados reais em tempo de execução. Dominar essa troca de informações é o que permite criar sistemas onde pequenos componentes colaboram entre si para realizar tarefas complexas.",
    codes: [
      {
        lang: "python",
        label: "Função com um parâmetro",
        code: "def saudar_usuario(nome):\n    print(f\"Bem-vindo, {nome}!\")\n\nsaudar_usuario(\"Ricardo\")\nsaudar_usuario(\"Fernanda\")"
      },
      {
        lang: "python",
        label: "Múltiplos parâmetros",
        code: "def somar(a, b):\n    resultado = a + b\n    print(f\"A soma de {a} + {b} é {resultado}\")\n\nsomar(10, 5)\nsomar(2.5, 7.5)"
      },
      {
        lang: "python",
        label: "Parâmetros com valor padrão",
        code: "def criar_perfil(nome, status=\"Iniciante\"):\n    print(f\"Usuário: {nome} | Nível: {status}\")\n\ncriar_perfil(\"Ana\") # Usa o padrão\ncriar_perfil(\"Bruno\", \"Avançado\") # Sobrescreve o padrão"
      },
      {
        lang: "python",
        label: "Argumentos nomeados",
        code: "def descrever_pet(nome, especie):\n    print(f\"Meu {especie} se chama {nome}.\")\n\n# A ordem não importa se usarmos os nomes\ndescrever_pet(especie=\"Gato\", nome=\"Mingau\")"
      },
      {
        lang: "python",
        label: "Erro comum: número errado de argumentos",
        code: "def multiplicar(x, y):\n    return x * y\n\n# multiplicar(5) # Isto causaria um TypeError: missing 1 required positional argument"
      }
    ],
    points: [
      "Parâmetros são os nomes definidos na criação da função.",
      "Argumentos são os valores reais passados na chamada da função.",
      "A ordem dos argumentos importa na chamada (argumentos posicionais).",
      "Parâmetros default permitem omitir argumentos durante a chamada.",
      "Argumentos nomeados (keyword arguments) aumentam a clareza do código.",
      "O número de argumentos passados deve coincidir com o número de parâmetros esperados.",
      "Parâmetros funcionam como variáveis locais dentro da função."
    ],
    alerts: [
      {
        type: "tip",
        content: "Use parâmetros com nomes claros para que quem use sua função saiba exatamente o que enviar."
      },
      {
        type: "warning",
        content: "Parâmetros com valores padrão devem vir sempre DEPOIS dos parâmetros sem valores padrão."
      },
      {
        type: "info",
        content: "Em Python, você pode passar listas ou dicionários como argumentos para enviar muitos dados de uma vez."
      }
    ]
  },
  {
    slug: "retorno-funcao",
    section: "funcoes",
    title: "Retorno de Função",
    difficulty: "iniciante",
    subtitle: "Obtendo resultados de volta da execução",
    intro: "Muitas vezes, não queremos que a função apenas faça algo na tela (como imprimir uma mensagem), mas sim que ela calcule um valor e nos 'devolva' esse resultado para que possamos usá-lo em outros cálculos. Pense em uma calculadora: você digita os números e a operação, e ela te mostra um resultado. Esse resultado é o 'retorno'. Na programação, a palavra-chave `return` é o que permite que uma função envie um dado de volta para quem a chamou.\n\nImagine que você pede para um assistente calcular o total de uma conta. Ele faz os cálculos mentalmente e, ao terminar, ele te entrega um papel com o valor final. Se ele apenas gritasse o valor e fosse embora, você não conseguiria guardar esse número na sua carteira para pagar a conta depois. O `return` é esse ato de entregar o papel. Quando uma função retorna um valor, podemos armazenar esse valor em uma variável ou passá-lo diretamente para outra função.\n\nUm ponto crucial sobre o `return` é que ele encerra imediatamente a execução da função. Imagine que você está lendo uma lista de instruções e encontra a frase: 'Pegue o resultado e saia da sala'. Você não continuaria lendo as instruções seguintes, certo? Na programação é igual. Qualquer código escrito dentro da função após a linha do `return` será ignorado pelo computador. Por isso, o `return` costuma ser a última coisa que acontece em uma função bem estruturada.\n\nFunções também podem retornar diferentes tipos de dados: números, textos, booleanos (Verdadeiro/Falso) ou até mesmo listas e objetos complexos. Algumas funções podem até ter múltiplos comandos `return` dentro de estruturas condicionais (IF). Por exemplo, uma função de validação pode retornar `True` se os dados estiverem corretos ou `False` se encontrar algum erro. O computador executará apenas um desses `returns` por vez.\n\nPor fim, é importante entender que se uma função não possui um comando `return` explícito, em muitas linguagens (como Python), ela retorna silenciosamente um valor especial chamado `None`. É como se o assistente fizesse o trabalho mas não te entregasse nada no final. Aprender a usar retornos corretamente é o que permite criar fluxos de dados lógicos onde as funções se conectam como engrenagens em um motor.",
    codes: [
      {
        lang: "python",
        label: "Função com retorno simples",
        code: "def somar(a, b):\n    return a + b\n\nresultado = somar(5, 3)\nprint(f\"O resultado foi: {resultado}\")"
      },
      {
        lang: "python",
        label: "Usando retorno em cálculos",
        code: "def calcular_imposto(valor):\n    return valor * 0.15\n\npreco_produto = 100\nimposto = calcular_imposto(preco_produto)\npreco_final = preco_produto + imposto\n\nprint(f\"Preço Final: R${preco_final}\")"
      },
      {
        lang: "python",
        label: "Múltiplos pontos de retorno",
        code: "def verificar_idade(idade):\n    if idade >= 18:\n        return \"Maior de idade\"\n    else:\n        return \"Menor de idade\"\n\nstatus = verificar_idade(20)\nprint(status)"
      },
      {
        lang: "python",
        label: "O retorno encerra a função",
        code: "def exemplo_saida():\n    print(\"Esta linha será impressa.\")\n    return \"Saindo...\"\n    print(\"Esta linha NUNCA será impressa.\")\n\nmensagem = exemplo_saida()"
      },
      {
        lang: "python",
        label: "Retornando múltiplos valores (Tuplas)",
        code: "def min_max(lista):\n    return min(lista), max(lista)\n\nmenor, maior = min_max([10, 5, 20, 15])\nprint(f\"Menor: {menor}, Maior: {maior}\")"
      }
    ],
    points: [
      "A palavra-chave 'return' envia um valor de volta para o ponto de chamada.",
      "Uma função encerra sua execução assim que atinge um 'return'.",
      "O resultado de uma função pode ser armazenado em variáveis.",
      "Funções sem 'return' devolvem 'None' por padrão no Python.",
      "Podemos usar 'return' para sair de uma função antecipadamente em certas condições.",
      "É possível retornar estruturas de dados complexas como listas e dicionários.",
      "O retorno permite a composição de funções: o resultado de uma serve de entrada para outra."
    ],
    alerts: [
      {
        type: "warning",
        content: "Não confunda 'print' com 'return'. 'print' mostra na tela, 'return' envia o dado para o código."
      },
      {
        type: "tip",
        content: "Use o retorno para manter suas funções focadas em calcular resultados, deixando a exibição para o fluxo principal."
      },
      {
        type: "info",
        content: "Em Python, você pode retornar vários valores separados por vírgula, o que tecnicamente cria uma tupla."
      }
    ]
  },
  {
    slug: "escopo-variaveis",
    section: "funcoes",
    title: "Escopo de Variáveis",
    difficulty: "intermediario",
    subtitle: "Onde suas variáveis vivem e morrem",
    intro: "Imagine que você está em um grande prédio de escritórios. Algumas informações estão escritas no quadro de avisos do saguão de entrada (acessíveis a todos no prédio), enquanto outras estão escritas em um post-it dentro de uma sala trancada no 5º andar (acessíveis apenas a quem está naquela sala). Na programação, o 'Escopo' define essa visibilidade das variáveis. Variáveis criadas fora de qualquer função são as 'Globais', enquanto variáveis criadas dentro de uma função são as 'Locais'.\n\nO escopo local é fundamental para evitar conflitos. Imagine se todo programador no mundo usasse uma variável chamada `contador`. Se todas as variáveis fossem globais, o código de uma pessoa interferiria no de outra o tempo todo, causando um caos absoluto. Com o escopo local, a variável `x` dentro da `Função A` é completamente independente da variável `x` dentro da `Função B`. Elas nascem quando a função começa e 'morrem' (são apagadas da memória) quando a função termina.\n\nJá o escopo global deve ser usado com extrema cautela. Embora pareça conveniente ter uma variável acessível de qualquer lugar, isso torna o programa imprevisível. Se qualquer função pode alterar o valor de uma variável global, fica muito difícil rastrear quem a modificou e por quê. É como se alguém mudasse a informação no quadro de avisos do saguão sem avisar a ninguém; todos os outros funcionários ficariam confusos.\n\nEm Python, existe uma regra de 'olhar para fora'. Uma função pode ler o valor de uma variável global livremente. No entanto, se ela tentar modificar essa variável global, o Python criará automaticamente uma nova variável local com o mesmo nome, a menos que você diga explicitamente que quer usar a global (usando a palavra `global`). Esse comportamento protege o sistema de alterações acidentais em dados importantes.\n\nEntender o ciclo de vida das variáveis é o que diferencia um programador iniciante de um intermediário. Saber onde os dados estão disponíveis permite que você economize memória e escreva códigos muito mais seguros e modulares. Lembre-se sempre: quanto mais limitado for o alcance de uma variável, mais fácil será testar e manter o seu código a longo prazo.",
    codes: [
      {
        lang: "python",
        label: "Variável Local vs Global",
        code: "x = \"Eu sou global\" # Global\n\ndef minha_funcao():\n    x = \"Eu sou local\" # Local (cria uma nova variável interna)\n    print(f\"Dentro da função: {x}\")\n\nminha_funcao()\nprint(f\"Fora da função: {x}\")"
      },
      {
        lang: "python",
        label: "Lendo uma variável global",
        code: "nome_app = \"AlgoBook\"\n\ndef mostrar_nome():\n    # A função consegue 'enxergar' o que está fora\n    print(f\"Bem-vindo ao {nome_app}\")\n\nmostrar_nome()"
      },
      {
        lang: "python",
        label: "Modificando uma global (Palavra-chave global)",
        code: "contador = 0\n\ndef incrementar():\n    global contador\n    contador += 1\n\nincrementar()\nprint(contador) # Agora é 1"
      },
      {
        lang: "python",
        label: "Erro de variável local",
        code: "def calcular():\n    y = 10\n    return y * 2\n\ncalcular()\n# print(y) # Isto causaria NameError: name 'y' is not defined"
      },
      {
        lang: "python",
        label: "Parâmetros como escopo local",
        code: "def dobrar(numero):\n    # 'numero' só existe aqui dentro\n    return numero * 2\n\n# print(numero) # Erro! numero não existe fora da função."
      }
    ],
    points: [
      "Escopo local: Variáveis definidas dentro de uma função só existem nela.",
      "Escopo global: Variáveis definidas fora de funções são visíveis por todos.",
      "Variáveis locais são destruídas após o término da execução da função.",
      "Parâmetros de uma função sempre pertencem ao escopo local.",
      "Use a palavra-chave 'global' apenas quando for estritamente necessário modificar uma global.",
      "Conflitos de nomes (shadowing) ocorrem quando uma local tem o mesmo nome de uma global.",
      "Limitar o escopo das variáveis ajuda a reduzir bugs e economizar memória."
    ],
    alerts: [
      {
        type: "danger",
        content: "Evite o uso excessivo de variáveis globais! Elas tornam o código difícil de debugar e testar."
      },
      {
        type: "info",
        content: "Em Python, o escopo é definido por: Local, Enclosing (funções aninhadas), Global e Built-in (LEGB)."
      },
      {
        type: "tip",
        content: "Se precisar que uma função altere algo de fora, prefira passar o valor, processar e usar o 'return' em vez de usar globais."
      }
    ]
  },
  {
    slug: "funcoes-puras",
    section: "funcoes",
    title: "Funções Puras e Efeitos Colaterais",
    difficulty: "intermediario",
    subtitle: "Programação funcional e previsibilidade",
    intro: "No mundo da matemática, uma função como `f(x) = x + 2` é totalmente previsível: se você der o número 3, ela sempre devolverá 5. Ela não muda o clima lá fora, não altera o saldo da sua conta bancária e nem apaga arquivos no seu computador. Na programação, chamamos isso de 'Função Pura'. Uma função pura é aquela cujo resultado depende exclusivamente dos seus dados de entrada e que não causa nenhuma alteração no estado externo do programa.\n\nO oposto disso são os 'Efeitos Colaterais'. Uma função tem efeitos colaterais quando ela faz algo além de retornar um valor: imprimir no console, alterar uma variável global, salvar dados em um banco ou tocar um som. Embora efeitos colaterais sejam necessários (um programa que não imprime nada nem salva arquivos é inútil), o segredo de um bom código é isolá-los e minimizá-los o máximo possível.\n\nImagine que você está consertando um relógio. Se ao girar uma engrenagem (uma função), você acidentalmente derrubar uma peça do outro lado da mesa (efeito colateral), o conserto se tornará impossível. Funções puras são seguras porque você pode testá-las isoladamente sem medo de que elas 'quebrem' outras partes do sistema. Elas são como peças de LEGO que se encaixam perfeitamente sem grudar ou manchar as outras.\n\nOutra grande vantagem das funções puras é a 'Idempotência' e a facilidade de cache (memoização). Se você sabe que para a entrada 'A' a resposta é sempre 'B', o computador pode salvar essa resposta e nem precisar recalcular a função da próxima vez. Isso é a base para otimizações de performance em grandes sistemas de processamento de dados e em interfaces de usuário modernas.\n\nAprender a identificar e escrever funções puras é um divisor de águas na carreira de um desenvolvedor. Isso leva a um código mais limpo, mais fácil de testar (Unit Testing) e muito mais robusto contra bugs misteriosos que surgem de interações inesperadas entre diferentes partes do programa.",
    codes: [
      {
        lang: "python",
        label: "Exemplo de Função Pura",
        code: "def somar_puro(a, b):\n    # Depende apenas de a e b\n    # Não altera nada fora\n    return a + b\n\n# Sempre retornará 8 para as entradas 5 e 3\nprint(somar_puro(5, 3))"
      },
      {
        lang: "python",
        label: "Exemplo de Função Impura (Efeito Colateral)",
        code: "total = 0\n\ndef adicionar_ao_total(valor):\n    global total\n    total += valor # Altera estado externo!\n    print(f\"Total atualizado: {total}\") # Efeito de E/S\n    return total"
      },
      {
        lang: "python",
        label: "Por que funções puras são boas?",
        code: "def formatar_nome(nome):\n    # Transforma sem alterar a variável original\n    return nome.strip().capitalize()\n\noriginal = \"  joão  \"\nlimpo = formatar_nome(original)\n\nprint(f\"Original: '{original}'\") # Continua intacto\nprint(f\"Limpo: '{limpo}'\")"
      },
      {
        lang: "python",
        label: "Função impura com tempo (Imprevisível)",
        code: "import datetime\n\ndef obter_saudacao():\n    # Resultado muda conforme a hora do dia (Externo)\n    hora = datetime.datetime.now().hour\n    if hora < 12: return \"Bom dia\"\n    return \"Boa tarde\""
      },
      {
        lang: "python",
        label: "Isolando o efeito colateral",
        code: "def calcular_media_pura(notas):\n    return sum(notas) / len(notas)\n\n# O efeito (print) fica fora da lógica de cálculo\nnotas = [7, 8, 9]\nmedia = calcular_media_pura(notas)\nprint(f\"A média é {media}\")"
      }
    ],
    points: [
      "Funções puras sempre retornam o mesmo resultado para os mesmos argumentos.",
      "Funções puras não causam efeitos colaterais (não alteram nada fora delas).",
      "Efeitos colaterais incluem: alterar globais, imprimir na tela, escrever em arquivos.",
      "Código com funções puras é muito mais fácil de testar e depurar.",
      "Funções impuras tornam o estado do programa difícil de prever.",
      "O isolamento de efeitos colaterais é uma boa prática de arquitetura de software.",
      "Funções puras permitem otimizações como o cache de resultados."
    ],
    alerts: [
      {
        type: "success",
        content: "Tente escrever o máximo de funções puras possível. Deixe os efeitos colaterais para as bordas do seu programa."
      },
      {
        type: "info",
        content: "A Programação Funcional é um paradigma baseado quase inteiramente em funções puras."
      },
      {
        type: "tip",
        content: "Se uma função não retorna nada mas faz algo, ela certamente tem efeitos colaterais."
      }
    ]
  },
  {
    slug: "modularizacao",
    section: "funcoes",
    title: "Modularização: Dividindo para Conquistar",
    difficulty: "intermediario",
    subtitle: "Construindo sistemas complexos a partir de peças simples",
    intro: "O grande segredo para construir algo gigantesco, como um foguete ou um sistema operacional, não é ser um gênio que entende tudo de uma vez. O segredo é a modularização: quebrar o problema impossível em cem problemas pequenos e fáceis de resolver. Na programação, modularizar é o ato de organizar suas funções e códigos em 'módulos' ou arquivos separados, criando uma biblioteca de peças prontas para o seu projeto.\n\nImagine que você está montando um carro. Você não funde o metal do motor e costura o couro dos bancos ao mesmo tempo. Existem fábricas ou setores diferentes para cada parte. No software, você pode ter um módulo apenas para lidar com cálculos matemáticos, outro para gerenciar usuários e outro para tratar a exibição de dados. Cada um desses módulos contém funções relacionadas que trabalham juntas para um objetivo comum.\n\nA modularização permite o trabalho em equipe. Em uma empresa, um programador pode ficar responsável por criar todas as funções do módulo de 'Pagamentos', enquanto outro trabalha no módulo de 'Catálogo'. Como eles definiram previamente quais serão os nomes das funções e quais parâmetros elas recebem (as interfaces), as peças se encaixarão perfeitamente no final, mesmo tendo sido feitas por pessoas diferentes.\n\nOutro benefício vital é a facilidade de navegação. É muito mais fácil encontrar um erro em um arquivo de 50 linhas chamado `validacoes.py` do que em um arquivo único de 5.000 linhas contendo todo o código do sistema. Modularizar é como organizar seus livros em estantes por gênero, em vez de jogá-los todos em uma pilha no meio da sala. Você ganha clareza mental e agilidade.\n\nPor fim, a modularização promove a evolução constante. Se você decidir que quer trocar o modo como seu sistema envia e-mails, você só precisa alterar o módulo de `notificacoes.py`. O resto do sistema nem saberá que a mudança ocorreu, desde que a função continue recebendo os mesmos dados e devolvendo os mesmos resultados. Modularizar é, em última análise, a arte de tornar seu software flexível, sustentável e pronto para crescer.",
    codes: [
      {
        lang: "python",
        label: "Exemplo de Módulo (arquivo: uteis.py)",
        code: "# No arquivo uteis.py\ndef formatar_moeda(valor):\n    return f\"R$ {valor:,.2f}\"\n\ndef calcular_desconto(preco, pct):\n    return preco * (1 - pct/100)"
      },
      {
        lang: "python",
        label: "Importando e usando um módulo",
        code: "# No arquivo principal.py\nimport uteis\n\npreco = 1500.0\npreco_final = uteis.calcular_desconto(preco, 10)\nprint(uteis.formatar_moeda(preco_final))"
      },
      {
        lang: "python",
        label: "Importando funções específicas",
        code: "from math import sqrt, pi\n\n# Agora podemos usar direto, sem 'math.'\nprint(sqrt(25)) # 5.0\nprint(pi) # 3.1415..."
      },
      {
        lang: "python",
        label: "Organizando um projeto real",
        code: "# projeto/\n# ├── main.py\n# ├── banco_dados.py\n# └── interface.py\n\n# Cada arquivo cuida de uma responsabilidade única."
      },
      {
        lang: "python",
        label: "Evitando código de execução no import",
        code: "def main():\n    print(\"Este é o programa principal\")\n\nif __name__ == \"__main__\":\n    # Isso garante que o código só rode se executado diretamente\n    # e não quando importado como módulo\n    main()"
      }
    ],
    points: [
      "Modularização é a prática de dividir o código em partes independentes (módulos).",
      "Cada módulo deve ter uma responsabilidade clara e única (Single Responsibility).",
      "Facilita o reaproveitamento de código em múltiplos projetos.",
      "Permite que grandes equipes trabalhem simultaneamente no mesmo sistema.",
      "Torna a depuração e a manutenção muito mais eficientes e organizadas.",
      "Melhora a legibilidade ao reduzir o tamanho dos arquivos individuais.",
      "Módulos podem ser internos (criados por você) ou externos (bibliotecas)."
    ],
    alerts: [
      {
        type: "tip",
        content: "Crie um módulo chamado 'utils.py' para guardar aquelas funções pequenas que você usa em todo lugar."
      },
      {
        type: "info",
        content: "Em Python, qualquer arquivo .py pode ser usado como um módulo através do comando 'import'."
      },
      {
        type: "warning",
        content: "Evite 'importações circulares' (A importa B e B importa A), pois isso causa erros difíceis de resolver."
      }
    ]
  }
];
