import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "por-que-ordenar",
    section: "ordenacao",
    title: "Por que Ordenar Dados?",
    difficulty: "iniciante",
    subtitle: "Entenda a importância de organizar informações para a eficiência computacional.",
    intro: `Imagine entrar em uma biblioteca onde todos os milhares de livros estão jogados no chão, sem qualquer ordem. Se você estivesse procurando por uma obra específica, teria que olhar livro por livro, um por um, até ter a sorte de encontrá-lo. Esse cenário caótico ilustra perfeitamente por que a ordenação é um dos pilares fundamentais da computação. Sem ordem, o acesso à informação torna-se um processo lento, ineficiente e, muitas vezes, inviável conforme o volume de dados cresce.\n\nA ordenação é o processo de organizar itens em uma sequência específica, seja numérica, alfabética ou cronológica. No mundo digital, lidamos com volumes massivos de dados a cada segundo: transações bancárias, nomes em uma lista de contatos, posts em uma rede social ou resultados de uma busca no Google. Organizar esses dados não é apenas uma questão de estética visual, mas uma necessidade técnica para que algoritmos de busca e processamento funcionem com rapidez.\n\nUm dos maiores benefícios de manter dados ordenados é a possibilidade de usar algoritmos de busca muito mais rápidos. Como veremos nos próximos capítulos, procurar um nome em uma lista telefônica ordenada (usando busca binária) é infinitamente mais rápido do que procurar em uma lista bagunçada. A ordenação é, portanto, um pré-requisito para a alta performance em sistemas que precisam responder em milissegundos a milhões de usuários.\n\nAlém da velocidade de busca, a ordenação facilita a identificação de duplicatas e a união de diferentes conjuntos de dados. Quando os dados estão organizados, padrões emergem com mais clareza e o processamento em lote torna-se mais simples. Na prática, quase todos os sistemas complexos que utilizamos hoje — de bancos de dados a motores de renderização gráfica — dependem de alguma forma eficiente de ordenação de dados nos bastidores.\n\nAo longo desta seção, exploraremos diversos métodos para colocar ordem no caos. Veremos desde algoritmos simples e intuitivos, que funcionam bem para pequenos volumes, até técnicas sofisticadas de 'dividir para conquistar' usadas por grandes empresas de tecnologia. Aprender a escolher o algoritmo certo para cada situação é o que separa um programador comum de um engenheiro de software capaz de criar sistemas escaláveis e eficientes.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO ExemploOrdenacao\n  VAR lista = [5, 2, 9, 1, 5, 6]\n  ESCREVA('Desordenada:', lista)\n  lista.ORDENAR()\n  ESCREVA('Ordenada:', lista)\nFIM",
        label: "Conceito básico de ordenação"
      },
      {
        lang: "python",
        code: "# Em Python, ordenar uma lista é extremamente simples\nnumeros = [42, 10, 77, 1, 3, 9]\nnumeros.sort()\nprint(f'Lista organizada: {numeros}')\n\n# Também podemos criar uma nova lista ordenada\norganizada = sorted([5, 4, 3, 2, 1])",
        label: "Ordenação nativa em Python"
      },
      {
        lang: "pseudocode",
        code: "// Tipos de ordem comuns\nCrescente: [1, 2, 3, 4, 5]\nDecrescente: [5, 4, 3, 2, 1]\nAlfabética: ['Ana', 'Bruno', 'Caio']",
        label: "Tipos de sequências"
      },
      {
        lang: "python",
        code: "# Ordenando objetos complexos (ex: por idade)\nusuarios = [\n    {'nome': 'Alice', 'idade': 25},\n    {'nome': 'Bob', 'idade': 20}\n]\nusuarios.sort(key=lambda u: u['idade'])\nprint(usuarios)",
        label: "Ordenação com critérios personalizados"
      }
    ],
    points: [
      "A ordenação organiza dados em uma sequência lógica (numérica, alfabética, etc).",
      "É essencial para viabilizar algoritmos de busca de alta performance.",
      "Facilita a visualização e a compreensão humana de grandes conjuntos de dados.",
      "Reduz drasticamente o tempo necessário para encontrar itens específicos.",
      "Permite a detecção eficiente de duplicatas em coleções de dados.",
      "É a base para operações complexas em bancos de dados e sistemas de arquivos.",
      "Existem múltiplos algoritmos, cada um com seus pontos fortes e fracos."
    ],
    alerts: [
      { type: "info", content: "A maioria das linguagens modernas já possui funções de ordenação altamente otimizadas." },
      { type: "tip", content: "Sempre que precisar buscar dados repetidamente, considere ordená-los primeiro." },
      { type: "warning", content: "Ordenar dados tem um custo computacional. Às vezes, para poucos dados, não vale o esforço." }
    ]
  },
  {
    slug: "bubble-sort",
    section: "ordenacao",
    title: "Bubble Sort: A Bolha que Sobe",
    difficulty: "iniciante",
    subtitle: "O algoritmo mais intuitivo, onde os maiores valores 'flutuam' até the final.",
    intro: `O Bubble Sort, ou Ordenação por Bolha, recebe esse nome devido a uma analogia muito simples: imagine bolhas de ar subindo em um copo de refrigerante. As bolhas maiores e mais leves sobem para o topo mais rápido do que as menores. No algoritmo, os elementos 'mais pesados' (valores maiores) vão sendo empurrados para o final da lista a cada passagem, como se estivessem flutuando para suas posições corretas.\n\nA lógica de funcionamento consiste em percorrer a lista várias vezes. Em cada iteração, comparamos elementos adjacentes (vizinhos). Se o elemento da esquerda for maior que o da direita, eles trocam de lugar. Esse processo se repete até que nenhuma troca seja mais necessária, o que indica que a lista está perfeitamente organizada. É um método muito visual e fácil de entender, o que o torna ideal para quem está começando.\n\nImagine que você tem uma fila de pessoas de diferentes alturas e quer organizá-las da menor para a maior. Você começa do início da fila, compara a primeira pessoa com a segunda; se a primeira for mais alta, elas trocam de lugar. Depois compara a segunda com a terceira, e assim por diante. Ao final da primeira caminhada pela fila, você terá a certeza absoluta de que a pessoa mais alta de todas chegou à última posição.\n\nApesar de sua simplicidade didática, o Bubble Sort é conhecido por ser ineficiente em listas grandes. Como ele precisa realizar muitas comparações e trocas, o tempo de execução cresce quadraticamente com o número de elementos. No pior cenário, se a lista estiver totalmente invertida, ele terá que fazer um esforço hercúleo para mover cada elemento até sua posição final.\n\nAinda assim, o Bubble Sort tem seu valor. Ele é o que chamamos de algoritmo 'estável' (mantém a ordem relativa de elementos iguais) e 'in-place' (não precisa de memória extra significativa). É uma excelente ferramenta para introduzir o conceito de complexidade de algoritmos e a importância de pensar em eficiência antes de escrever o código.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO BubbleSort(vetor)\n  PARA i DE 0 ATÉ tamanho(vetor) - 1\n    PARA j DE 0 ATÉ tamanho(vetor) - i - 2\n      SE vetor[j] > vetor[j+1] ENTÃO\n        TROCAR(vetor[j], vetor[j+1])\n      FIM SE\n    FIM PARA\n  FIM PARA\nFIM",
        label: "Lógica do Bubble Sort"
      },
      {
        lang: "python",
        code: "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n    return arr",
        label: "Implementação em Python"
      },
      {
        lang: "pseudocode",
        code: "Execução passo a passo:\nPasso 1: [ 5 | 1 | 4 | 2 ]\nPasso 2: [ 1 | 4 | 2 | 5 ]  ← 5 está na posição certa\nPasso 3: [ 1 | 2 | 4 | 5 ]  ← 4 está na posição certa\nPasso 4: [ 1 | 2 | 4 | 5 ]  ← Finalizado",
        label: "Visualização ASCII"
      },
      {
        lang: "python",
        code: "# Versão otimizada com flag de troca\ndef bubble_sort_opt(arr):\n    n = len(arr)\n    for i in range(n):\n        swapped = False\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j+1]:\n                arr[j], arr[j+1] = arr[j+1], arr[j]\n                swapped = True\n        if not swapped: break\n    return arr",
        label: "Bubble Sort Otimizado"
      }
    ],
    points: [
      "Funciona através de comparações repetidas de elementos vizinhos.",
      "É um algoritmo simples de entender e implementar.",
      "A cada iteração completa, o maior elemento 'flutua' para sua posição final.",
      "A complexidade de tempo é O(n²) no pior e no caso médio.",
      "É um algoritmo estável, preservando a ordem de elementos iguais.",
      "Não requer memória extra (é um algoritmo 'in-place').",
      "É raramente usado na prática para grandes volumes devido à lentidão."
    ],
    alerts: [
      { type: "info", content: "O Bubble Sort é ótimo para ensinar lógica, mas evite usá-lo em produção com muitos dados." },
      { type: "tip", content: "A implementação pode ser melhorada usando uma 'flag' para parar se a lista já estiver ordenada." },
      { type: "warning", content: "Se a lista estiver em ordem inversa, o Bubble Sort fará o número máximo de trocas possível." }
    ]
  },
  {
    slug: "selection-sort",
    section: "ordenacao",
    title: "Selection Sort: Selecionando o Menor",
    difficulty: "iniciante",
    subtitle: "Busca o menor elemento e o coloca na frente, passo a passo.",
    intro: `O Selection Sort (Ordenação por Seleção) adota uma estratégia muito direta e humana para organizar dados. Imagine que você tem uma pilha de roupas bagunçadas e quer organizá-las por tamanho. Você olha para toda a pilha, encontra a menor peça e a coloca no início. Depois, olha para o que sobrou, encontra a próxima menor peça e a coloca logo após a primeira. Você repete esse processo de 'selecionar o menor' até que todas as roupas estejam em ordem.\n\nNo computador, o algoritmo divide a lista em duas partes imaginárias: uma sublista de itens já ordenados (à esquerda) e uma sublista de itens que ainda precisam ser organizados (à direita). A cada passo, o algoritmo percorre a parte não ordenada para encontrar o menor valor. Uma vez encontrado, esse valor é trocado de posição com o primeiro elemento da parte não ordenada.\n\nUma analogia clássica é a de um técnico de futebol organizando seus jogadores por altura. Ele percorre a fila inteira para achar o mais baixo e o troca de lugar com quem está na primeira posição. Depois, ele ignora o primeiro e percorre o restante da fila para achar o segundo mais baixo, trocando-o com a segunda posição. Ele continua até chegar ao final da fila.\n\nA principal vantagem do Selection Sort em relação ao Bubble Sort é que ele realiza muito menos trocas. Enquanto o Bubble Sort pode trocar elementos centenas de vezes, o Selection Sort faz no máximo 'n-1' trocas (uma para cada posição da lista). No entanto, o número de comparações continua sendo alto, o que o mantém na categoria de algoritmos O(n²).\n\nCuriosamente, o Selection Sort tem um desempenho muito previsível. Não importa se a lista já está quase ordenada ou totalmente bagunçada: ele sempre percorrerá todos os elementos para ter certeza de que encontrou o menor. Isso o torna menos eficiente que o Insertion Sort em listas quase ordenadas, mas sua simplicidade de trocas mínimas é uma característica interessante em contextos onde mover dados é caro.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO SelectionSort(vetor)\n  PARA i DE 0 ATÉ tamanho(vetor) - 1\n    indiceMenor = i\n    PARA j DE i + 1 ATÉ tamanho(vetor) - 1\n      SE vetor[j] < vetor[indiceMenor] ENTÃO\n        indiceMenor = j\n      FIM SE\n    FIM PARA\n    TROCAR(vetor[i], vetor[indiceMenor])\n  FIM PARA\nFIM",
        label: "Lógica do Selection Sort"
      },
      {
        lang: "python",
        code: "def selection_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        min_idx = i\n        for j in range(i + 1, n):\n            if arr[j] < arr[min_idx]:\n                min_idx = j\n        arr[i], arr[min_idx] = arr[min_idx], arr[i]\n    return arr",
        label: "Implementação em Python"
      },
      {
        lang: "pseudocode",
        code: "Execução passo a passo:\nPasso 1: [ 64 | 25 | 12 | 22 | 11 ]\nPasso 2: [ 11 | 25 | 12 | 22 | 64 ]  ← 11 está na posição certa\nPasso 3: [ 11 | 12 | 25 | 22 | 64 ]  ← 12 está na posição certa\nPasso 4: [ 11 | 12 | 22 | 25 | 64 ]  ← 22 está na posição certa",
        label: "Visualização ASCII"
      },
      {
        lang: "python",
        code: "# Exemplo com strings\nfrutas = ['Manga', 'Banana', 'Laranja', 'Abacaxi']\n# Após o selection sort: ['Abacaxi', 'Banana', 'Laranja', 'Manga']",
        label: "Ordenação Alfabética"
      }
    ],
    points: [
      "Baseia-se em encontrar repetidamente o menor elemento da parte não ordenada.",
      "Divide a lista em uma seção organizada e outra desorganizada.",
      "Realiza um número fixo de trocas (máximo n-1).",
      "Sua complexidade é sempre O(n²), independente do estado inicial da lista.",
      "Não é um algoritmo estável em sua implementação padrão.",
      "É muito simples de implementar e entender visualmente.",
      "Ideal para situações onde o custo de trocar elementos de lugar é muito alto."
    ],
    alerts: [
      { type: "info", content: "Diferente do Bubble Sort, o Selection Sort não melhora se a lista estiver quase ordenada." },
      { type: "tip", content: "Use o Selection Sort quando você precisar minimizar o número de escritas na memória." },
      { type: "warning", content: "Apesar de fazer poucas trocas, ele ainda faz o mesmo número de comparações que o Bubble Sort." }
    ]
  },
  {
    slug: "insertion-sort",
    section: "ordenacao",
    title: "Insertion Sort: Inserindo na Posição Certa",
    difficulty: "iniciante",
    subtitle: "Como organizar uma mão de cartas de baralho, um por um.",
    intro: `O Insertion Sort (Ordenação por Inserção) é o algoritmo que a maioria das pessoas usa intuitivamente para organizar uma mão de cartas de baralho. Imagine que você está recebendo cartas uma a uma. Você segura as cartas já ordenadas em sua mão esquerda e, ao receber uma nova carta com a mão direita, você a 'insere' na posição correta entre as que já possui, deslocando as outras para abrir espaço.\n\nNa prática computacional, o algoritmo percorre a lista da esquerda para a direita. Para cada novo elemento, ele olha para trás (para a esquerda, onde os itens já estão ordenados) e vai 'empurrando' os elementos maiores para a direita até encontrar o lugar exato onde o novo elemento deve ser encaixado. Esse processo continua até que o último item da lista tenha sido processado e inserido em seu devido lugar.\n\nEste método é extremamente eficiente para listas que já estão parcialmente ordenadas. Pense em uma lista de nomes onde apenas os dois últimos estão fora de ordem. O Insertion Sort resolveria isso quase instantaneamente, enquanto outros algoritmos poderiam perder tempo reprocessando tudo. Por isso, ele é frequentemente usado como parte de algoritmos mais complexos e modernos, como o Timsort (usado em Python e Java).\n\nOutra característica fascinante do Insertion Sort é que ele é um algoritmo 'online'. Isso significa que ele pode ordenar uma lista à medida que recebe novos dados, sem precisar ter a lista completa desde o início. Se você estiver recebendo um fluxo contínuo de dados e precisar mantê-los organizados em tempo real, o Insertion Sort é um excelente candidato.\n\nEmbora sua complexidade no pior caso ainda seja O(n²), na prática ele costuma superar o Bubble Sort e o Selection Sort em eficiência e velocidade para conjuntos de dados pequenos. Sua implementação é compacta, elegante e reflete muito bem como nós, seres humanos, lidamos com a organização física de objetos no nosso cotidiano.`,
    codes: [
      {
        lang: "pseudocode",
        code: "ALGORITMO InsertionSort(vetor)\n  PARA i DE 1 ATÉ tamanho(vetor) - 1\n    chave = vetor[i]\n    j = i - 1\n    ENQUANTO j >= 0 E vetor[j] > chave FAÇA\n      vetor[j + 1] = vetor[j]\n      j = j - 1\n    FIM ENQUANTO\n    vetor[j + 1] = chave\n  FIM PARA\nFIM",
        label: "Lógica do Insertion Sort"
      },
      {
        lang: "python",
        code: "def insertion_sort(arr):\n    for i in range(1, len(arr)):\n        key = arr[i]\n        j = i - 1\n        while j >= 0 and arr[j] > key:\n            arr[j + 1] = arr[j]\n            j -= 1\n        arr[j + 1] = key\n    return arr",
        label: "Implementação em Python"
      },
      {
        lang: "pseudocode",
        code: "Execução passo a passo:\nPasso 1: [ 12 | 11 | 13 | 5 | 6 ]\nPasso 2: [ 11 | 12 | 13 | 5 | 6 ]  ← 11 inserido antes de 12\nPasso 3: [ 11 | 12 | 13 | 5 | 6 ]  ← 13 já no lugar\nPasso 4: [ 5 | 11 | 12 | 13 | 6 ]   ← 5 inserido no início\nPasso 5: [ 5 | 6 | 11 | 12 | 13 ]   ← 6 inserido na posição certa",
        label: "Visualização ASCII"
      },
      {
        lang: "python",
        code: "# Prático: Mantendo uma lista ordenada\ndef add_sorted(lista, item):\n    lista.append(item)\n    return insertion_sort(lista)",
        label: "Uso prático (Ordenação Online)"
      }
    ],
    points: [
      "Funciona como a organização de cartas de baralho na mão.",
      "É muito eficiente para listas pequenas ou quase ordenadas.",
      "Algoritmo estável: não altera a ordem de elementos iguais.",
      "Pode ordenar dados à medida que eles chegam (algoritmo online).",
      "A complexidade no melhor caso (lista já ordenada) é O(n).",
      "No pior caso (lista invertida), a complexidade é O(n²).",
      "É a base para algoritmos de ordenação híbridos de alta performance."
    ],
    alerts: [
      { type: "success", content: "O Insertion Sort é um dos algoritmos mais rápidos para listas com menos de 20 elementos." },
      { type: "tip", content: "Se você sabe que sua lista já está quase pronta, o Insertion Sort é sua melhor escolha." },
      { type: "info", content: "Linguagens como Python usam o Timsort, que utiliza o Insertion Sort internamente." }
    ]
  },
  {
    slug: "merge-sort",
    section: "ordenacao",
    title: "Merge Sort: Dividir para Ordenar",
    difficulty: "intermediario",
    subtitle: "A força da estratégia de Dividir e Conquistar aplicada à ordenação.",
    intro: `O Merge Sort (Ordenação por Intercalação) é um exemplo brilhante da técnica 'Dividir para Conquistar'. Imagine que você tem uma pilha enorme de 1000 documentos para alfabetizar. Em vez de tentar organizar tudo sozinho, você divide a pilha ao meio e entrega 500 para um amigo e 500 para outro. Eles fazem o mesmo, dividindo até que cada pessoa tenha apenas um documento. Como um único documento já está 'ordenado', o trabalho real começa na volta: juntar (mesclar) dois grupos já ordenados em um grupo maior também ordenado.\n\nA mágica do Merge Sort acontece justamente na etapa de mesclagem (merge). Comparar dois baralhos de cartas que já estão em ordem é muito fácil: você olha para a carta do topo de cada um, pega a menor e a coloca na nova pilha. Você repete isso até esvaziar os dois baralhos. Por causa dessa lógica estruturada, o Merge Sort consegue manter um desempenho excelente mesmo com milhões de itens.\n\nDiferente dos algoritmos simples como o Bubble Sort, o Merge Sort não sofre tanto com listas bagunçadas ou invertidas. Seu tempo de execução é sempre garantido em O(n log n). Isso significa que, se você dobrar o número de itens, o tempo de execução não quadruplica, mas cresce de forma muito mais controlada. É por isso que ele é o preferido para ordenar grandes volumes de dados que não cabem inteiros na memória RAM (ordenação externa).\n\nNo entanto, toda essa eficiência tem um custo: memória. O Merge Sort precisa criar cópias temporárias dos dados durante o processo de mesclagem. Se você estiver trabalhando em um sistema com memória curtíssima, como um pequeno chip de sensor, talvez o Merge Sort não seja a melhor opção. Mas para aplicações web, desktops e servidores, ele é uma ferramenta poderosíssima.\n\nAprender o Merge Sort é também uma porta de entrada para entender a 'Recursividade'. O algoritmo chama a si mesmo para resolver subproblemas menores, uma técnica que parece mágica no início mas que se torna uma das ferramentas mais elegantes no arsenal de qualquer programador de alto nível.`,
    codes: [
      {
        lang: "python",
        code: "def merge_sort(arr):\n    if len(arr) <= 1: return arr\n    meio = len(arr) // 2\n    esq = merge_sort(arr[:meio])\n    dir = merge_sort(arr[meio:])\n    return merge(esq, dir)\n\ndef merge(esq, dir):\n    res = []\n    i = j = 0\n    while i < len(esq) and j < len(dir):\n        if esq[i] < dir[j]: res.append(esq[i]); i += 1\n        else: res.append(dir[j]); j += 1\n    res.extend(esq[i:]); res.extend(dir[j:])\n    return res",
        label: "Implementação em Python"
      },
      {
        lang: "pseudocode",
        code: "Execução passo a passo (Mesclagem):\nPasso 1: [ 12 | 34 ] + [ 10 | 25 ]\nPasso 2: [ 10 | ... ]  (10 < 12)\nPasso 3: [ 10 | 12 | ... ] (12 < 25)\nPasso 4: [ 10 | 12 | 25 | 34 ] ← Mesclagem completa",
        label: "Visualização ASCII"
      },
      {
        lang: "pseudocode",
        code: "DIVIDIR: [ 38 | 27 | 43 | 3 ] -> [ 38 | 27 ] e [ 43 | 3 ]\nCONQUISTAR: [ 27 | 38 ] e [ 3 | 43 ]\nMESCLAR: [ 3 | 27 | 38 | 43 ]",
        label: "Lógica Dividir e Conquistar"
      },
      {
        lang: "python",
        code: "# Merge sort é estável e ótimo para listas grandes\ndados = [38, 27, 43, 3, 9, 82, 10]\nprint(merge_sort(dados))",
        label: "Exemplo de Uso"
      }
    ],
    points: [
      "Utiliza a técnica 'Dividir para Conquistar' através de recursividade.",
      "Garante complexidade O(n log n) em todos os casos (melhor, médio e pior).",
      "É um algoritmo estável, ideal para preservar ordens secundárias.",
      "Necessita de espaço extra na memória para a etapa de mesclagem.",
      "Muito eficiente para grandes conjuntos de dados.",
      "Pode ser facilmente paralelizado (rodar em vários núcleos da CPU).",
      "É o algoritmo base para muitas funções de ordenação em sistemas reais."
    ],
    alerts: [
      { type: "info", content: "O Merge Sort é o 'padrão ouro' quando a estabilidade e o tempo garantido são cruciais." },
      { type: "warning", content: "Cuidado com o uso de memória: listas gigantescas podem causar erro de falta de espaço." },
      { type: "tip", content: "Tente entender primeiro a mesclagem de dois vetores pequenos para dominar o algoritmo." }
    ]
  },
  {
    slug: "quick-sort",
    section: "ordenacao",
    title: "Quick Sort: O Pivô Decisivo",
    difficulty: "intermediario",
    subtitle: "O algoritmo mais rápido na prática para a maioria dos casos.",
    intro: `O Quick Sort (Ordenação Rápida) é, como o nome sugere, um dos algoritmos mais velozes já inventados. Ele também usa a estratégia de 'Dividir para Conquistar', mas de uma forma diferente do Merge Sort. A ideia central aqui é o 'Pivô'. Imagine que você quer organizar uma turma de alunos por altura. Você escolhe um aluno aleatório (o Pivô) e diz: 'Quem for mais baixo que ele, vá para a esquerda; quem for mais alto, vá para a direita'.\n\nAo fazer isso, o Pivô agora está em sua posição correta e final! Você não precisa mais se preocupar com ele. Agora, você tem dois grupos menores para organizar: os da esquerda e os da direita. Você repete o processo escolhendo um novo pivô em cada grupo. É uma forma muito dinâmica de organizar, onde a lista vai se 'arrumando' em torno desses pontos de referência.\n\nPor que ele é tão rápido? Diferente do Merge Sort, o Quick Sort não precisa criar listas extras na memória o tempo todo; ele faz as trocas diretamente na lista original (in-place). Além disso, em processadores modernos, o tipo de acesso que ele faz à memória é muito otimizado para o sistema de cache, o que o torna uma verdadeira bala em termos de performance real.\n\nNo entanto, o Quick Sort tem um 'tendão de Aquiles'. Se você escolher sempre um pivô ruim (por exemplo, o menor elemento de uma lista que já está quase ordenada), ele pode se tornar tão lento quanto o Bubble Sort, atingindo O(n²). Por isso, existem técnicas avançadas para escolher o pivô, como pegar a média de três elementos aleatórios, para garantir que o algoritmo continue rápido.\n\nO Quick Sort é o motor por trás de muitas implementações de sistemas operacionais e bibliotecas de linguagens como C++ e Java. Entender o Quick Sort é entender como a escolha de uma estratégia inteligente (o pivô) pode transformar um problema gigante em uma série de problemas minúsculos resolvidos instantaneamente.`,
    codes: [
      {
        lang: "python",
        code: "def quick_sort(arr):\n    if len(arr) <= 1: return arr\n    pivo = arr[len(arr) // 2]\n    esq = [x for x in arr if x < pivo]\n    meio = [x for x in arr if x == pivo]\n    dir = [x for x in arr if x > pivo]\n    return quick_sort(esq) + meio + quick_sort(dir)",
        label: "Implementação em Python"
      },
      {
        lang: "pseudocode",
        code: "Execução passo a passo:\nPasso 1: [ 10 | 80 | 30 | 90 | 40 | 50 | 70 ]  (Pivô: 70)\nPasso 2: [ 10 | 30 | 40 | 50 ] + [ 70 ] + [ 80 | 90 ]\nPasso 3: [ 10 | 30 | 40 | 50 | 70 | 80 | 90 ]  ← 70 no lugar certo",
        label: "Visualização ASCII"
      },
      {
        lang: "pseudocode",
        code: "ALGORITMO Particionar(vetor, pivo)\n  PARA cada item ENTÃO\n    SE item < pivo ENTÃO move para ESQUERDA\n    SENÃO move para DIREITA",
        label: "Lógica do Particionamento"
      },
      {
        lang: "python",
        code: "def partition(arr, low, high):\n    pivot = arr[high]\n    i = low - 1\n    for j in range(low, high):\n        if arr[j] <= pivot:\n            i += 1\n            arr[i], arr[j] = arr[j], arr[i]\n    arr[i+1], arr[high] = arr[high], arr[i+1]\n    return i + 1",
        label: "Particionamento In-place"
      }
    ],
    points: [
      "Utiliza um elemento 'Pivô' para particionar a lista.",
      "É um dos algoritmos mais rápidos na prática para a maioria dos casos.",
      "Opera 'in-place', economizando memória significativamente.",
      "Complexidade média de O(n log n).",
      "No pior caso (pivô ruim), pode chegar a O(n²).",
      "Não é um algoritmo estável (a ordem de itens iguais pode mudar).",
      "Muito utilizado em bibliotecas padrão de diversas linguagens."
    ],
    alerts: [
      { type: "tip", content: "A escolha do pivô é o segredo para manter o Quick Sort rápido." },
      { type: "info", content: "Na maioria das situações reais, o Quick Sort supera o Merge Sort em velocidade." },
      { type: "danger", content: "Evite usar pivôs fixos (como sempre o primeiro elemento) se os dados puderem estar ordenados." }
    ]
  },
  {
    slug: "comparando-ordenacoes",
    section: "ordenacao",
    title: "Comparando os Algoritmos de Ordenação",
    difficulty: "intermediario",
    subtitle: "Qual algoritmo escolher para cada situação real?",
    intro: `Chegamos ao ponto crucial: com tantas opções, qual algoritmo eu devo usar no meu projeto? Não existe uma 'bala de prata' na programação. O melhor algoritmo depende totalmente do contexto: o tamanho da lista, se a memória é escassa, se a ordem original importa e se os dados já estão quase organizados. Escolher errado pode significar um programa que trava ou consome bateria excessiva do usuário.\n\nAlgoritmos O(n²), como Bubble, Selection e Insertion Sort, são ótimos para aprender e excelentes para listas muito pequenas (menos de 50 itens). Nessas escalas, a simplicidade deles os torna mais rápidos do que a complexidade dos algoritmos de 'dividir para conquistar'. O Insertion Sort, especificamente, é o rei das listas pequenas e das listas que já estão quase prontas.\n\nPara o mundo real de Big Data e aplicações web modernas, os algoritmos O(n log n) como Merge e Quick Sort são a regra. O Quick Sort costuma ser a escolha padrão pela sua velocidade bruta e baixo uso de memória. Já o Merge Sort é a escolha obrigatória quando você precisa de estabilidade (por exemplo, ordenar uma lista de compras por preço, mas mantendo a ordem alfabética que já existia).\n\nOutro fator importante é o ambiente de execução. Se você está programando para um microcontrolador minúsculo, o Selection Sort pode ser atraente por fazer poucas escritas na memória flash. Se você está em um servidor com muita RAM e muitos núcleos de CPU, o Merge Sort pode ser paralelizado para voar baixo. O segredo é entender as características de cada um para ter o discernimento técnico necessário.\n\nNesta conclusão, apresentamos uma visão consolidada das métricas de cada método. Lembre-se: o conhecimento técnico não é decorar códigos, mas entender os conceitos para tomar decisões inteligentes. Ao dominar essas comparações, você deixa de apenas 'codar' e passa a projetar soluções eficientes e profissionais.`,
    codes: [
      {
        lang: "pseudocode",
        code: "Comparação de Complexidade:\n- Bubble Sort: O(n²) - Lento, mas estável.\n- Selection Sort: O(n²) - Poucas trocas, mas instável.\n- Insertion Sort: O(n²) - Ótimo para pequenos/quase ordenados.\n- Merge Sort: O(n log n) - Rápido, estável, usa memória extra.\n- Quick Sort: O(n log n) - Muito rápido, in-place, instável.",
        label: "Resumo Técnico"
      },
      {
        lang: "python",
        code: "# Tabela de Complexidades (Informação)\n# Algoritmo | Melhor | Médio | Pior\n# Bubble    | O(n)   | O(n²)  | O(n²)\n# Quick     | O(n log n) | O(n log n) | O(n²)\n# Merge     | O(n log n) | O(n log n) | O(n log n)",
        label: "Métricas de Performance"
      },
      {
        lang: "pseudocode",
        code: "QUANDO USAR:\n- Lista < 20 itens: Insertion Sort\n- Precisa de estabilidade: Merge Sort\n- Memória é crítica: Quick Sort\n- Dados quase ordenados: Insertion Sort",
        label: "Guia de Decisão"
      },
      {
        lang: "python",
        code: "import time\n# Teste real de performance\nstart = time.time()\n# ... execução do algoritmo ...\nprint(f'Tempo gasto: {time.time() - start}s')",
        label: "Medindo Performance"
      }
    ],
    points: [
      "Algoritmos O(n²) são didáticos e bons para listas minúsculas.",
      "Insertion Sort brilha em listas quase ordenadas.",
      "Merge Sort é confiável, estável, mas consome mais memória.",
      "Quick Sort é o mais veloz no uso geral, mas tem um pior caso perigoso.",
      "Estabilidade é a capacidade de manter a ordem original de itens iguais.",
      "Algoritmos in-place economizam memória ao trocar elementos na mesma lista.",
      "Sempre prefira as funções nativas da linguagem, a menos que haja um motivo especial."
    ],
    alerts: [
      { type: "info", content: "Tabela de Complexidades:\n- Bubble: O(n²) médio, Estável: Sim\n- Selection: O(n²) médio, Estável: Não\n- Insertion: O(n²) médio, Estável: Sim\n- Merge: O(n log n) médio, Estável: Sim\n- Quick: O(n log n) médio, Estável: Não" },
      { type: "tip", content: "Se você estiver em dúvida, use a função .sort() da sua linguagem favorita." },
      { type: "warning", content: "Nunca use Bubble Sort em ambientes de produção com grandes volumes de dados." }
    ]
  }
];
