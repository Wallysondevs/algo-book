import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "busca-linear",
    section: "busca",
    title: "Busca Linear: O Jeito Simples",
    difficulty: "iniciante",
    subtitle: "A forma mais básica de encontrar um item: olhar um por um.",
    intro: `Imagine que você perdeu a chave do seu carro em uma praia lotada. Não há nenhum padrão ou ordem na areia; você simplesmente precisa caminhar e olhar cada metro quadrado até encontrar o que procura. Isso é, em essência, a Busca Linear. É o algoritmo mais intuitivo que existe: começamos do primeiro elemento de uma lista e o comparamos com o que estamos procurando. Se não for ele, passamos para o segundo, depois para o terceiro, e assim sucessivamente até encontrar o alvo ou chegar ao fim da lista.\n\nA grande vantagem da Busca Linear é que ela não exige absolutamente nada dos dados. Eles podem estar em ordem, fora de ordem, de cabeça para baixo ou recém-criados. Se você tem uma coleção de dados bagunçada e precisa encontrar algo nela apenas uma vez, a Busca Linear é frequentemente a escolha mais prática porque não requer o esforço extra de organizar a lista antes da procura.\n\nNo entanto, essa simplicidade tem um preço alto conforme o volume de dados cresce. Se você tem 10 itens, encontrar o último levará 10 passos. Se você tem 1 bilhão de itens, poderá levar 1 bilhão de passos! Em computação, dizemos que sua complexidade é O(n), o que significa que o tempo de execução cresce na mesma proporção que o número de elementos. No pior cenário, você terá que percorrer a lista inteira para descobrir que o item nem sequer está lá.\n\nÉ o algoritmo que usamos no dia a dia para tarefas simples, como procurar um nome em uma lista de compras curta ou verificar se uma palavra existe em um parágrafo. Como ele é extremamente simples de implementar (geralmente apenas um laço 'para' ou 'enquanto'), ele é a base sobre a qual construímos nosso entendimento de como computadores vasculham informações na memória.\n\nAo longo deste capítulo, veremos como implementar essa busca de forma eficiente e quando ela, apesar de sua simplicidade, ainda é a melhor ferramenta para o trabalho. Aprenderemos que, em programação, nem sempre a solução mais complexa é a melhor; às vezes, a simplicidade da Busca Linear é exatamente o que um problema pequeno precisa.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO BuscaLinear(lista, alvo)\n  PARA CADA item NA lista FAÇA\n    SE item == alvo ENTÃO\n      RETORNAR verdadeiro\n    FIM SE\n  FIM PARA\n  RETORNAR falso\nFIM",
        label: "Lógica da Busca Linear"
      },
      {
        lang: "python",
        code: "def busca_linear(lista, alvo):\n    for i in range(len(lista)):\n        if lista[i] == alvo:\n            return i  # Retorna o índice onde foi encontrado\n    return -1  # Retorna -1 se não encontrar",
        label: "Implementação em Python"
      },
      {
        lang: "pseudocode",
        code: "Execução passo a passo (Alvo: 22):\nPasso 1: [ 64 | 34 | 25 | 12 | 22 ] -> 64 == 22? Não\nPasso 2: [ 64 | 34 | 25 | 12 | 22 ] -> 34 == 22? Não\nPasso 3: [ 64 | 34 | 25 | 12 | 22 ] -> 25 == 22? Não\nPasso 4: [ 64 | 34 | 25 | 12 | 22 ] -> 12 == 22? Não\nPasso 5: [ 64 | 34 | 25 | 12 | 22 ] -> 22 == 22? Sim! Encontrado no índice 4",
        label: "Visualização ASCII"
      },
      {
        lang: "python",
        code: "# Busca linear é útil para listas desordenadas\nfrutas = ['maçã', 'banana', 'uva', 'pera']\nif 'uva' in frutas:\n    print('Encontrei a uva!')",
        label: "Busca Linear Nativa em Python"
      }
    ],
    points: [
      "Verifica cada elemento da lista um por um, do início ao fim.",
      "Não exige que os dados estejam ordenados.",
      "Complexidade de tempo O(n): cresce linearmente com a lista.",
      "É muito simples de implementar e entender.",
      "Ideal para listas pequenas onde o custo de ordenar seria maior que o de buscar.",
      "No melhor caso (item na primeira posição), leva apenas 1 passo.",
      "No pior caso (item ausente ou no fim), percorre todos os N elementos."
    ],
    alerts: [
      { type: "info", content: "A Busca Linear é o único método possível se você não conhece nada sobre a organização dos dados." },
      { type: "tip", content: "Se você faz buscas frequentes na mesma lista, considere ordená-la para usar a Busca Binária." },
      { type: "warning", content: "Evite usar Busca Linear em bancos de dados gigantescos sem índices; isso deixará o sistema muito lento." }
    ]
  },
  {
    slug: "busca-binaria",
    section: "busca",
    title: "Busca Binária: Dividindo pela Metade",
    difficulty: "iniciante",
    subtitle: "A eficiência máxima ao buscar em dados já organizados.",
    intro: `A Busca Binária é um dos algoritmos mais elegantes e eficientes da computação. Pense em como você procura uma palavra em um dicionário impresso. Você não começa da página um. Você abre o livro mais ou menos no meio. Se a palavra que você quer vem antes, você descarta toda a metade de trás do livro e foca apenas na metade da frente. Você repete esse processo de 'dividir ao meio' sucessivamente.\n\nEsta estratégia de 'Dividir para Conquistar' permite encontrar um item em uma lista gigantesca com uma velocidade impressionante. Para uma lista de 1 milhão de itens, enquanto a Busca Linear poderia levar 1 milhão de passos, a Busca Binária resolve o problema em, no máximo, 20 passos! É uma diferença colossal que permite que sistemas modernos processem quantidades absurdas de dados instantaneamente.\n\nO requisito fundamental e obrigatório para a Busca Binária é que os dados estejam **ordenados**. Sem ordem, o algoritmo não tem como saber para qual lado deve seguir após a divisão. É por isso que passamos tanto tempo estudando algoritmos de ordenação: eles são o 'combustível' que permite que a Busca Binária funcione.\n\nEm termos técnicos, a Busca Binária tem complexidade O(log n). Isso significa que, mesmo que você dobre o tamanho da sua lista, você só adiciona um único passo extra ao processo de busca. É por isso que ela é a base de quase todos os sistemas de indexação de bancos de dados e motores de busca que usamos hoje em dia.\n\nDominar a lógica da Busca Binária é um marco na vida de qualquer programador. Ela ensina que a forma como estruturamos nossos dados (ordenando-os) tem um impacto direto e profundo na eficiência com que podemos recuperar informações. É a transição de 'força bruta' (linear) para a 'inteligência algorítmica' (binária).`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO BuscaBinaria(lista, alvo)\n  inicio = 0, fim = tamanho(lista) - 1\n  ENQUANTO inicio <= fim FAÇA\n    meio = (inicio + fim) / 2\n    SE lista[meio] == alvo ENTÃO RETORNAR meio\n    SE lista[meio] < alvo ENTÃO inicio = meio + 1\n    SENÃO fim = meio - 1\n  FIM ENQUANTO\n  RETORNAR -1\nFIM",
        label: "Lógica da Busca Binária"
      },
      {
        lang: "python",
        code: "def busca_binaria(arr, alvo):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == alvo:\n            return mid\n        elif arr[mid] < alvo:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1",
        label: "Implementação em Python"
      },
      {
        lang: "pseudocode",
        code: "Execução passo a passo (Alvo: 42):\nLista: [ 10 | 20 | 30 | 42 | 50 | 60 | 70 ]\nPasso 1: Meio é 42. 42 == 42? Sim! Encontrado no índice 3.\n\n(Se fosse Alvo 10):\nPasso 1: Meio 42. 10 < 42? Sim. Busca na esquerda [ 10 | 20 | 30 ]\nPasso 2: Meio 20. 10 < 20? Sim. Busca na esquerda [ 10 ]\nPasso 3: Meio 10. 10 == 10? Sim!",
        label: "Visualização ASCII"
      },
      {
        lang: "python",
        code: "import bisect\n# Python tem uma biblioteca nativa para isso!\nnumeros = [10, 20, 30, 40, 50]\nindice = bisect.bisect_left(numeros, 30)\nprint(f'O número 30 está no índice {indice}')",
        label: "Usando a biblioteca bisect"
      }
    ],
    points: [
      "Exige obrigatoriamente que a lista esteja ordenada.",
      "Funciona dividindo o espaço de busca pela metade a cada passo.",
      "Complexidade O(log n), tornando-a extremamente rápida para grandes listas.",
      "Reduz drasticamente o número de comparações necessárias.",
      "É a base para a criação de índices em bancos de dados.",
      "Pode ser implementada de forma iterativa (laços) ou recursiva.",
      "Para 1 bilhão de itens, leva no máximo 30 passos."
    ],
    alerts: [
      { type: "success", content: "A Busca Binária é uma das otimizações mais impactantes que você pode fazer em um código." },
      { type: "warning", content: "Se a lista não estiver ordenada, a Busca Binária retornará resultados errados ou falhará." },
      { type: "info", content: "O logaritmo de 1.000.000 na base 2 é aproximadamente 20. Por isso 20 passos bastam!" }
    ]
  },
  {
    slug: "busca-em-arvores",
    section: "busca",
    title: "Busca em Árvores Binárias",
    difficulty: "intermediario",
    subtitle: "Navegando em estruturas ramificadas para máxima performance.",
    intro: `Até agora, vimos buscas em listas 'chatas' (lineares). Mas e se organizássemos nossos dados como uma árvore genealógica? Uma Árvore Binária de Busca (BST) é uma estrutura onde cada 'nó' tem no máximo dois filhos. A regra é simples e poderosa: tudo o que é menor que o nó vai para a esquerda, e tudo o que é maior vai para a direita.\n\nBuscar em uma árvore dessas é como navegar em um labirinto onde as placas de sinalização são perfeitas. Em cada cruzamento (nó), você olha o valor: se o que você procura é menor, você segue pelo caminho da esquerda; se for maior, pela direita. Você nunca precisa olhar para o outro lado do labirinto, o que torna a busca incrivelmente veloz, mantendo a eficiência da busca binária mas com a vantagem de ser mais fácil de adicionar e remover itens.\n\nImagine uma biblioteca onde cada estante se divide em duas: 'Autores de A-M' e 'Autores de N-Z'. Dentro da primeira, outra divisão: 'A-F' e 'G-M'. Essa organização hierárquica é o que chamamos de busca em árvore. É uma forma natural de categorizar informações que permite encontrar um único dado entre milhões apenas seguindo algumas ramificações.\n\nAs árvores são fundamentais porque, ao contrário de uma lista ordenada (que é difícil de alterar sem bagunçar a ordem), as árvores permitem que novos dados sejam inseridos mantendo a estrutura de busca eficiente. É por isso que sistemas de arquivos de computadores e grandes bancos de dados usam variações complexas de árvores (como Árvores B+ ou AVL) para gerenciar seus dados.\n\nNeste capítulo, entenderemos como construir essa hierarquia e como percorrê-la. Veremos que uma árvore bem equilibrada é uma das ferramentas mais sofisticadas da ciência da computação, permitindo que a busca, a inserção e a remoção de dados aconteçam quase instantaneamente, independente de quão grande seja o conjunto de informações.`,
    codes: [
      {
        lang: "python",
        code: "class No:\n    def __init__(self, valor):\n        self.valor = valor\n        self.esq = None\n        self.dir = None\n\ndef buscar(raiz, alvo):\n    if raiz is None or raiz.valor == alvo:\n        return raiz\n    if alvo < raiz.valor:\n        return buscar(raiz.esq, alvo)\n    return buscar(raiz.dir, alvo)",
        label: "Busca em Árvore em Python"
      },
      {
        lang: "pseudocode",
        code: "Estrutura da Árvore:\n       [ 50 ]\n      /      \\\n   [ 30 ]   [ 70 ]\n   /    \\   /    \\\n [20]  [40] [60]  [80]\n\nBusca pelo 60:\n1. 60 > 50? Sim -> Vá para DIREITA\n2. 60 < 70? Sim -> Vá para ESQUERDA\n3. 60 == 60? Sim! Encontrado.",
        label: "Visualização de Hierarquia"
      },
      {
        lang: "pseudocode",
        code: "ALGORITMO Inserir(no, valor)\n  SE no é VAZIO ENTÃO RETORNAR novo No(valor)\n  SE valor < no.valor ENTÃO no.esq = Inserir(no.esq, valor)\n  SENÃO no.dir = Inserir(no.dir, valor)\n  RETORNAR no",
        label: "Mantendo a Ordem na Inserção"
      },
      {
        lang: "python",
        code: "# Exemplo de uso\nraiz = No(50)\ninserir(raiz, 30)\ninserir(raiz, 70)\nresultado = buscar(raiz, 70)\nprint(f'Encontrado: {resultado.valor}')",
        label: "Executando a Busca"
      }
    ],
    points: [
      "Cada nó tem um valor e até dois 'filhos' (esquerda e direita).",
      "Valores menores ficam à esquerda; valores maiores à direita.",
      "Permite busca, inserção e remoção eficientes (O(log n)).",
      "Evita a necessidade de reordenar toda a lista ao adicionar novos itens.",
      "A eficiência depende da árvore estar 'equilibrada'.",
      "É a estrutura base para sistemas de arquivos (como o do Windows/Linux).",
      "Pode ser percorrida de diferentes formas (pré-ordem, em-ordem, pós-ordem)."
    ],
    alerts: [
      { type: "info", content: "Uma árvore binária de busca 'em-ordem' sempre retorna os elementos ordenados!" },
      { type: "warning", content: "Se você inserir dados já ordenados em uma árvore simples, ela vira uma lista e perde a eficiência." },
      { type: "tip", content: "Árvores balanceadas (como AVL) se auto-ajustam para manter a busca sempre rápida." }
    ]
  },
  {
    slug: "busca-em-grafos",
    section: "busca",
    title: "Busca em Grafos: BFS e DFS",
    difficulty: "intermediario",
    subtitle: "Como o GPS encontra o melhor caminho e como o Facebook sugere amigos.",
    intro: `Nem todos os dados são listas ou árvores. Às vezes, as informações estão conectadas como uma teia de aranha ou um mapa de cidades. Para isso, usamos Grafos. Buscar em grafos é o que permite ao Google Maps encontrar a rota mais curta ou ao LinkedIn sugerir conexões. Existem duas formas principais de explorar esse emaranhado de conexões: a Busca em Largura (BFS) e a Busca em Profundidade (DFS).\n\nA **Busca em Largura (BFS)** funciona como uma gota de tinta caindo no papel: ela se espalha para todos os vizinhos imediatos primeiro, depois para os vizinhos dos vizinhos. É ideal para encontrar o caminho mais curto. Se você quer saber qual o menor número de voos entre São Paulo e Tóquio, a BFS é a sua ferramenta. Ela explora a 'vizinhança' de forma nivelada, garantindo que o primeiro caminho encontrado até o destino seja o mais curto em termos de conexões.\n\nJá a **Busca em Profundidade (DFS)** é como um explorador de cavernas que escolhe um túnel e segue por ele até o fim antes de voltar e tentar outro. Ela mergulha o mais fundo possível em uma ramificação. É excelente para resolver quebra-cabeças, encontrar a saída de um labirinto ou verificar se todos os pontos de uma rede estão conectados. Ela não garante o caminho mais curto, mas é muito eficiente em termos de memória e ótima para explorar todas as possibilidades.\n\nImagine que você está procurando um amigo em uma festa. Na BFS, você cumprimenta todos que estão na mesa ao seu redor, depois as pessoas nas mesas vizinhas. Na DFS, você começa a conversar com uma pessoa, ela te apresenta um amigo, que te apresenta outro, e você vai seguindo essa 'corrente' até não ter mais ninguém novo para conhecer, e só então volta para a sua mesa.\n\nDominar BFS e DFS é entrar no mundo da inteligência aplicada a redes. São esses algoritmos que rodam silenciosamente sempre que você usa um aplicativo de transporte, uma rede social ou até mesmo quando um vírus se espalha por uma rede de computadores. Entender grafos é entender a conectividade do mundo moderno.`,
    codes: [
      {
        lang: "python",
        code: "def bfs(grafo, inicio):\n    visitados = set([inicio])\n    fila = [inicio]\n    while fila:\n        vertice = fila.pop(0)\n        print(vertice)\n        for vizinho in grafo[vertice]:\n            if vizinho not in visitados:\n                visitados.add(vizinho)\n                fila.append(vizinho)",
        label: "BFS (Busca em Largura)"
      },
      {
        lang: "python",
        code: "def dfs(grafo, vertice, visitados=None):\n    if visitados is None: visitados = set()\n    visitados.add(vertice)\n    print(vertice)\n    for vizinho in grafo[vertice]:\n        if vizinho not in visitados:\n            dfs(grafo, vizinho, visitados)",
        label: "DFS (Busca em Profundidade)"
      },
      {
        lang: "pseudocode",
        code: "Exemplo de Grafo:\nA -- B -- D\n|    |\nC -- E\n\nOrdem BFS (partindo de A): A, B, C, D, E\nOrdem DFS (partindo de A): A, B, D, E, C",
        label: "Visualização de Grafo"
      },
      {
        lang: "pseudocode",
        code: "ALGORITMO BFS(origem)\n  Marcar origem como visitada\n  Inserir origem na FILA\n  ENQUANTO FILA não vazia\n    u = REMOVER da FILA\n    PARA CADA vizinho v de u\n      SE v não visitado ENTÃO marcar e inserir na FILA",
        label: "Lógica da BFS com Fila"
      }
    ],
    points: [
      "Grafos representam conjuntos de conexões (nós e arestas).",
      "BFS (Largura) usa uma FILA para explorar vizinhos próximos primeiro.",
      "DFS (Profundidade) usa uma PILHA (ou recursão) para ir fundo em um caminho.",
      "BFS é ideal para encontrar o caminho mais curto em grafos sem pesos.",
      "DFS é excelente para detecção de ciclos e ordenação topológica.",
      "Sempre é necessário manter um registro de 'visitados' para evitar loops infinitos.",
      "Aplicações reais: GPS, Redes Sociais, Recomendadores e Jogos."
    ],
    alerts: [
      { type: "tip", content: "Pense na BFS como um radar que se expande e na DFS como um fio de Ariadne em um labirinto." },
      { type: "info", content: "A maioria das redes sociais usa variações de BFS para sugerir 'pessoas que você talvez conheça'." },
      { type: "danger", content: "Cuidado com grafos circulares! Sem marcar os nós visitados, seu código rodará para sempre." }
    ]
  },
  {
    slug: "quando-usar-qual-busca",
    section: "busca",
    title: "Quando Usar Cada Algoritmo de Busca",
    difficulty: "intermediario",
    subtitle: "O guia definitivo para tomar a decisão correta no seu código.",
    intro: `Chegamos à parte prática: você tem um problema e precisa escolher a ferramenta certa. Usar o algoritmo errado pode não apenas deixar seu app lento, mas torná-lo impossível de usar. A escolha da busca correta depende de três perguntas fundamentais: Meus dados estão ordenados? Qual é o tamanho da minha coleção? E qual é a estrutura desses dados (lista, árvore ou rede)?\n\nA **Busca Linear** é sua 'faca de cozinha'. Ela serve para tudo que é pequeno. Se você tem uma lista de 50 estados brasileiros, não perca tempo ordenando-os para fazer uma busca binária; a linear resolverá em milionésimos de segundo e seu código ficará muito mais simples. Use-a sempre que os dados forem desordenados e a busca for ocasional.\n\nA **Busca Binária** é sua 'ferramenta de precisão'. Se você tem milhares de produtos em um e-commerce ou usuários em um sistema, mantenha-os ordenados e use a binária. O esforço inicial de ordenar se paga milhares de vezes na velocidade das buscas subsequentes. É a regra de ouro para eficiência em grandes volumes lineares.\n\nA **Busca em Árvores** é para sistemas dinâmicos. Se você está criando algo onde dados entram e saem a todo momento (como as ordens de compra de uma bolsa de valores), as árvores binárias de busca são superiores. Elas mantêm a eficiência da busca binária mas são muito mais rápidas para lidar com mudanças constantes do que uma lista estática.\n\nPor fim, use **BFS e DFS** quando o problema envolver relações e conexões. Se o desafio é 'qual o caminho entre A e B' ou 'como esses itens se conectam', você está no território dos grafos. Escolha BFS para proximidade e DFS para exploração total de possibilidades. Saber discernir entre essas situações é o que transforma um 'escritor de código' em um verdadeiro Engenheiro de Software.\n\nNeste guia, consolidamos os cenários reais para que você nunca mais tenha dúvida na hora de implementar uma funcionalidade de pesquisa. Lembre-se: o melhor algoritmo é aquele que resolve o problema com a máxima eficiência e a mínima complexidade necessária.`,
    codes: [
      {
        lang: "pseudocode",
        code: "Fluxograma de Decisão:\n1. Os dados estão em rede/conexões? -> Use GRAFOS (BFS/DFS)\n2. Os dados mudam o tempo todo? -> Use ÁRVORES\n3. A lista é pequena (< 100 itens)? -> Use LINEAR\n4. A lista é grande e ordenada? -> Use BINÁRIA",
        label: "Guia de Decisão Rápido"
      },
      {
        lang: "python",
        code: "# Exemplo Real: Pesquisa de CEP\n# Como o CEP é fixo e ordenado, a Busca Binária\n# é a escolha perfeita para encontrar o endereço instantaneamente.",
        label: "Exemplo: Sistema de Endereços"
      },
      {
        lang: "pseudocode",
        code: "COMPARAÇÃO DE TEMPO (n = 1 bilhão):\n- Busca Linear: ~1 segundo (1.000.000.000 ops)\n- Busca Binária: ~0.00000003 segundos (30 ops)\nA diferença é a velocidade da luz vs a velocidade de um caracol.",
        label: "Por que escolher certo importa"
      },
      {
        lang: "python",
        code: "# Dica: Sempre que possível, use as estruturas de dados\n# otimizadas da sua linguagem (Sets e Dicionários em Python\n# usam tabelas Hash, que são ainda mais rápidas que a busca binária!)",
        label: "Dica de Performance"
      }
    ],
    points: [
      "Busca Linear: Use para listas pequenas ou totalmente desordenadas.",
      "Busca Binária: Use para grandes volumes de dados que já estão ordenados.",
      "Árvores: Ideais para quando você precisa de buscas rápidas em dados que mudam sempre.",
      "BFS: Escolha quando precisar encontrar o caminho mais curto em uma rede.",
      "DFS: Use para explorar todas as opções ou verificar conectividade em sistemas.",
      "Tabelas Hash (Dicionários): Use quando precisar de busca instantânea por uma chave única.",
      "Considere o custo de ordenar antes de decidir pela busca binária."
    ],
    alerts: [
      { type: "info", content: "Cenário: Para encontrar um arquivo no seu computador, o sistema usa DFS e BFS nos diretórios." },
      { type: "tip", content: "Em entrevistas de emprego, sempre pergunte se os dados estão ordenados antes de propor uma solução." },
      { type: "success", content: "Parabéns! Você agora domina as principais estratégias para encontrar qualquer informação no mundo digital." }
    ]
  }
];
