import { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "o-que-e-complexidade",
    section: "complexidade",
    title: "O que é Complexidade Algorítmica?",
    difficulty: "intermediario",
    subtitle: "Entendendo o custo de execução dos seus programas.",
    intro: `Imagine que você precisa encontrar o nome de um amigo em uma lista de contatos. Se a lista tiver apenas 10 nomes, você pode lê-los um por um rapidamente. Mas e se a lista tivesse 1 bilhão de nomes? Ler um por um levaria anos! A complexidade algorítmica é o estudo de como o tempo de execução ou o uso de memória de um algoritmo cresce à medida que o tamanho dos dados de entrada aumenta.

Não medimos a complexidade em segundos ou milissegundos, pois isso dependeria do poder de processamento do computador. Em vez disso, medimos o número de operações fundamentais que o algoritmo realiza. É como comparar o esforço de ligar uma única lâmpada em um quarto versus o esforço de ligar todas as lâmpadas de um estádio de futebol, uma por uma.

Entender esse conceito é o que diferencia um programador iniciante de um engenheiro de software experiente. Um código pode funcionar perfeitamente com poucos dados, mas "travar" completamente quando escalado para milhares de usuários. Estudar complexidade nos permite prever esses desastres antes que eles aconteçam.

Pense na busca em uma lista telefônica física. Se você procurar folha por folha desde o início, seu esforço cresce linearmente com o tamanho do livro. Se o livro dobra de tamanho, seu tempo médio de busca também dobra. Mas se você usar a técnica de abrir no meio e descartar a metade onde o nome não está (busca binária), seu esforço cresce de forma muito mais lenta.

Neste capítulo, exploraremos como quantificar essa eficiência. Veremos que a escolha do algoritmo certo pode ser a diferença entre um sistema que responde instantaneamente e um que nunca termina sua execução. Prepare-se para olhar para o seu código não apenas como "algo que funciona", mas como algo que precisa ser eficiente.`,
    codes: [
      {
        lang: "python",
        code: `# Exemplo de crescimento linear O(n)
def busca_linear(lista, alvo):
    operacoes = 0
    for item in lista:
        operacoes += 1
        if item == alvo:
            return operacoes
    return operacoes

# Testando com tamanhos diferentes
n1 = 10
n2 = 1000
n3 = 1000000

print(f"Para N={n1}, máximo de operações: {n1}")
print(f"Para N={n2}, máximo de operações: {n2}")
print(f"Para N={n3}, máximo de operações: {n3}")`,
        label: "Busca Linear e o impacto de N"
      },
      {
        lang: "python",
        code: `# Comparando O(n) vs O(n^2)
def algoritmo_lento(n):
    ops = 0
    for i in range(n):
        for j in range(n):
            ops += 1
    return ops

n = 100
print(f"Para N={n}:")
print(f"O(n) faria {n} operações")
print(f"O(n^2) faz {algoritmo_lento(n)} operações")`,
        label: "Diferença entre Crescimento Linear e Quadrático"
      },
      {
        lang: "python",
        code: `# O impacto da escala real
# N=10:       O(n)=10,           O(n²)=100
# N=1.000:    O(n)=1.000,        O(n²)=1.000.000
# N=1.000.000:O(n)=1.000.000,    O(n²)=1.000.000.000.000

def demonstrar_escala():
    tamanhos = [10, 1000, 1000000]
    for n in tamanhos:
        print(f"N = {n:,}")
        print(f"  Linear O(n): {n:,} ops")
        print(f"  Quadrático O(n²): {n**2:,} ops")
        print("-" * 20)`,
        label: "Impacto da Escala com N Crescente"
      },
      {
        lang: "python",
        code: `# Algoritmo Constante O(1)
def primeiro_elemento(lista):
    if len(lista) > 0:
        return lista[0] # Sempre 1 operação, não importa o tamanho da lista
    return None`,
        label: "Exemplo de Complexidade Constante"
      }
    ],
    points: [
      "Complexidade não é medida em tempo real, mas em número de operações.",
      "O tamanho da entrada é geralmente representado pela letra 'n'.",
      "Algoritmos eficientes escalam melhor quando os dados aumentam.",
      "Um algoritmo 'lento' pode ser imperceptível com poucos dados.",
      "A análise foca no comportamento de longo prazo (assintótico).",
      "Escalabilidade é a capacidade de lidar com o aumento de carga.",
      "Escolher a estrutura de dados correta impacta a complexidade."
    ],
    alerts: [
      {
        type: "info",
        content: "A análise de complexidade ajuda a prever custos de infraestrutura em nuvem."
      },
      {
        type: "warning",
        content: "Um algoritmo O(n²) com N=1.000.000 pode levar dias para rodar em um PC comum."
      },
      {
        type: "tip",
        content: "Sempre questione: 'O que acontece se o volume de dados triplicar?' ao escrever um loop."
      }
    ]
  },
  {
    slug: "notacao-big-o",
    section: "complexidade",
    title: "Notação Big-O: A Linguagem da Eficiência",
    difficulty: "intermediario",
    subtitle: "Como os desenvolvedores descrevem o desempenho de forma universal.",
    intro: `A Notação Big-O é o padrão da indústria para descrever a complexidade de um algoritmo. Ela nos dá uma forma simplificada de dizer "no pior caso possível, quão rápido este algoritmo fica lento?". É uma ferramenta matemática que foca no que realmente importa quando os dados crescem, ignorando detalhes menores como constantes e termos de menor ordem.

Por exemplo, se um algoritmo faz 2n + 5 operações, dizemos que ele é O(n). Por que? Porque para valores gigantescos de 'n', o "+5" e o multiplicador "2" tornam-se irrelevantes perto do crescimento de 'n'. O Big-O foca na "forma" da curva de crescimento, não na posição exata dos pontos no gráfico.

Imagine que você está organizando uma biblioteca. Se você tem que olhar cada livro para encontrar um específico, sua estratégia é O(n). Se você contratar um assistente e cada um olhar metade, ainda é O(n), apenas com uma constante menor. A "natureza" do problema não mudou: o esforço ainda é proporcional ao número de livros.

Usamos o Big-O para classificar algoritmos em categorias de eficiência. Isso permite que programadores ao redor do mundo se comuniquem rapidamente: "Este algoritmo de ordenação é O(n log n)". Imediatamente, todos entendem que ele é significativamente melhor que um O(n²) para grandes volumes de dados.

Nesta seção, aprenderemos a identificar essas categorias no código. Veremos como loops aninhados geralmente indicam complexidades maiores e como operações simples de acesso a arrays são extremamente eficientes. Dominar o Big-O é como ganhar visão de raio-X sobre o seu código, enxergando gargalos antes mesmo de executar o programa.`,
    codes: [
      {
        lang: "python",
        code: `# O(1) - Constante
def check_top(stack):
    return stack[-1] if stack else None

# O(n) - Linear
def find_max(numbers):
    max_val = numbers[0]
    for n in numbers:
        if n > max_val:
            max_val = n
    return max_val`,
        label: "Exemplos de O(1) e O(n)"
      },
      {
        lang: "python",
        code: `# O(n^2) - Quadrático (Loops aninhados)
def has_duplicates(elements):
    for i in range(len(elements)):
        for j in range(i + 1, len(elements)):
            if elements[i] == elements[j]:
                return True
    return False`,
        label: "Identificando O(n²) através de loops"
      },
      {
        lang: "python",
        code: `# Simplificação do Big-O: O(2n + 3) vira O(n)
def process_data(data):
    # Loop 1: O(n)
    for x in data:
        print(x)
    
    # Loop 2: O(n)
    for x in data:
        print(x * 2)
    
    # Operações constantes: O(1)
    a = 1
    b = 2
    return a + b`,
        label: "Regras de Simplificação"
      },
      {
        lang: "python",
        code: `# O(log n) - Crescimento Logarítmico
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target: return mid
        if arr[mid] < target: low = mid + 1
        else: high = mid - 1
    return -1`,
        label: "Exemplo Clássico de O(log n)"
      }
    ],
    points: [
      "O Big-O descreve o limite superior do tempo de execução (pior caso).",
      "Ignoramos constantes (O(2n) vira O(n)).",
      "Ignoramos termos menores (O(n² + n) vira O(n²)).",
      "O(1) é o ideal: o tempo não muda com o tamanho dos dados.",
      "Loops aninhados geralmente multiplicam as complexidades.",
      "A escala logarítmica O(log n) é extremamente eficiente para buscas.",
      "O Big-O nos ajuda a escolher a melhor ferramenta para cada tarefa."
    ],
    alerts: [
      {
        type: "danger",
        content: "Cuidado com funções recursivas sem critério de parada claro; elas podem causar O(2^n)."
      },
      {
        type: "info",
        content: "A maioria das linguagens modernas já possui algoritmos O(n log n) embutidos para ordenação."
      },
      {
        type: "tip",
        content: "Para entender o Big-O de um código, conte quantos loops dependem do tamanho da entrada 'n'."
      }
    ]
  },
  {
    slug: "complexidades-comuns",
    section: "complexidade",
    title: "O(1), O(log n), O(n), O(n²) na Prática",
    difficulty: "intermediario",
    subtitle: "Exemplos reais das complexidades que você encontrará no dia a dia.",
    intro: `No dia a dia da programação, a maioria dos algoritmos que escrevemos ou utilizamos cai em algumas categorias comuns. Conhecer essas categorias é fundamental para tomar decisões rápidas de design. É como conhecer as marchas de um carro: você precisa saber quando usar cada uma para não forçar o motor ou perder velocidade.

A complexidade O(1), ou constante, é o sonho de todo programador. Significa que não importa se você tem 10 ou 10 trilhões de registros, a operação levará o mesmo tempo. Um exemplo é acessar um item em um array pelo seu índice ou inserir um elemento no topo de uma pilha.

Já a complexidade O(n), ou linear, é o "pão com manteiga". Se você precisa olhar cada item de uma lista uma vez, você está em O(n). É o que acontece na maioria dos loops simples. É previsível e geralmente aceitável para conjuntos de dados que cabem na memória.

Quando entramos em O(n²), o terreno fica perigoso. Algoritmos quadráticos costumam surgir de loops dentro de loops, como comparar cada item de uma lista com todos os outros itens. Eles funcionam bem para listas pequenas (ex: 100 itens), mas tornam-se proibitivos para listas grandes (ex: 1.000.000 de itens, resultando em 1 trilhão de operações).

Finalmente, o O(log n) é a mágica da computação eficiente. É o algoritmo de dividir para conquistar. Se você dobra o número de dados, o algoritmo faz apenas uma operação a mais. É por isso que bancos de dados conseguem encontrar sua conta em milissegundos no meio de milhões de clientes: eles usam estruturas de busca logarítmica.`,
    codes: [
      {
        lang: "python",
        code: "# O(1) - Acesso direto\ncores = ['vermelho', 'verde', 'azul']\ncor = cores[1] # Acesso instantâneo",
        label: "Prática: O(1)"
      },
      {
        lang: "python",
        code: "# O(n) - Percorrer lista\ndef imprimir_tudo(lista):\n    for item in lista:\n        print(item)",
        label: "Prática: O(n)"
      },
      {
        lang: "python",
        code: "# O(n^2) - Comparação par a par\ndef encontrar_pares_soma(lista, alvo):\n    for i in lista:\n        for j in lista:\n            if i + j == alvo:\n                return (i, j)",
        label: "Prática: O(n²)"
      },
      {
        lang: "python",
        code: "# O(log n) - Busca Binária Simplificada\nimport bisect\nlista_ordenada = [1, 3, 5, 7, 9, 11]\npos = bisect.bisect_left(lista_ordenada, 7) # Logarítmico",
        label: "Prática: O(log n)"
      }
    ],
    points: [
      "O(1): Acesso a arrays por índice, inserção em pilhas.",
      "O(log n): Busca binária, operações em árvores equilibradas.",
      "O(n): Busca linear, encontrar maior/menor elemento.",
      "O(n log n): Algoritmos eficientes de ordenação (Merge Sort, Quick Sort).",
      "O(n²): Bubble Sort, loops aninhados simples.",
      "O(2^n): Algoritmos de força bruta recursivos (ex: Fibonacci simples).",
      "Sempre tente mover seu algoritmo para uma categoria de complexidade inferior."
    ],
    alerts: [
      {
        type: "success",
        content: "Mover de O(n²) para O(n log n) pode salvar o desempenho de um sistema inteiro."
      },
      {
        type: "warning",
        content: "Cuidado: operações dentro de um loop O(n) que chamam outra função O(n) resultam em O(n²)."
      },
      {
        type: "info",
        content: "Estruturas de dados como HashMaps (Dicionários) oferecem busca O(1) na média."
      }
    ]
  },
  {
    slug: "complexidade-espaco",
    section: "complexidade",
    title: "Complexidade de Espaço",
    difficulty: "intermediario",
    subtitle: "Quanto de memória seu algoritmo consome?",
    intro: `Até agora, falamos muito sobre tempo, mas a memória é um recurso igualmente valioso. A complexidade de espaço mede quanta memória adicional um algoritmo precisa em relação ao tamanho da entrada. Às vezes, podemos trocar espaço por tempo: usamos mais memória para tornar o algoritmo mais rápido, ou vice-versa.

Imagine que você está organizando arquivos físicos. Você pode decidir criar uma cópia de cada documento para organizar por data e outra para organizar por nome. Isso economiza tempo de busca no futuro, mas exige o dobro de gavetas no armário. Na computação, criar listas extras, dicionários de cache ou pilhas de recursão consome espaço.

Um algoritmo com complexidade de espaço O(1) é aquele que usa uma quantidade fixa de memória extra, não importa o tamanho dos dados. Por exemplo, percorrer uma lista e somar os valores exige apenas uma variável para a soma. Já um algoritmo O(n) de espaço é aquele que cria uma nova lista do mesmo tamanho da original para armazenar resultados intermediários.

Em dispositivos com memória limitada, como sistemas embarcados ou celulares antigos, a complexidade de espaço pode ser até mais crítica que a de tempo. Um programa que consome toda a RAM disponível será encerrado pelo sistema operacional, independentemente de quão rápido ele seja.

A recursão é uma fonte comum de consumo de memória "escondida". Cada chamada de função adiciona um novo quadro na pilha de execução (call stack). Se você faz 1.000 chamadas recursivas, você está consumindo memória para manter o estado de todas elas simultaneamente, o que pode levar ao famoso erro de "Stack Overflow".`,
    codes: [
      {
        lang: "python",
        code: `# Espaço O(1) - Apenas variáveis simples
def soma_elementos(lista):
    total = 0 # Espaço fixo
    for x in lista:
        total += x
    return total`,
        label: "Complexidade de Espaço Constante"
      },
      {
        lang: "python",
        code: `# Espaço O(n) - Cria uma nova estrutura proporcional a N
def duplicar_lista(lista):
    nova_lista = []
    for x in lista:
        nova_lista.append(x * 2) # Espaço cresce com N
    return nova_lista`,
        label: "Complexidade de Espaço Linear"
      },
      {
        lang: "python",
        code: `# Espaço O(n) devido à recursão
def contagem_regressiva(n):
    if n <= 0: return
    contagem_regressiva(n - 1) # Cada chamada ocupa espaço na pilha`,
        label: "Espaço na Pilha de Recursão"
      },
      {
        lang: "python",
        code: `# Trade-off: Espaço por Tempo
def busca_rapida(lista):
    # Gastamos O(n) de espaço para criar um conjunto (set)
    # Mas ganhamos busca O(1) em vez de O(n)
    cache = set(lista)
    return cache`,
        label: "Troca de Espaço por Tempo"
      }
    ],
    points: [
      "Mede a memória extra necessária, excluindo a entrada original.",
      "O(1) de espaço é o uso de memória mais eficiente.",
      "Estruturas de dados auxiliares (listas, sets, dicts) aumentam o custo de espaço.",
      "Chamadas recursivas profundas consomem espaço na pilha (Stack).",
      "Otimizar para espaço pode, às vezes, tornar o código mais lento.",
      "Em processamento de Big Data, o espaço costuma ser o maior gargalo.",
      "In-place algorithms são aqueles que modificam os dados originais sem usar espaço extra."
    ],
    alerts: [
      {
        type: "warning",
        content: "Recursão profunda pode causar erros de falta de memória antes mesmo de terminar o cálculo."
      },
      {
        type: "tip",
        content: "Se a memória for um problema, tente processar os dados um por um em vez de carregar tudo em uma lista."
      },
      {
        type: "info",
        content: "A maioria das linguagens modernas possui coletores de lixo (Garbage Collectors) para ajudar a gerenciar a memória."
      }
    ]
  },
  {
    slug: "otimizando-algoritmos",
    section: "complexidade",
    title: "Otimizando Algoritmos: Do Lento ao Rápido",
    difficulty: "intermediario",
    subtitle: "Técnicas práticas para transformar código ineficiente.",
    intro: `Otimizar não é apenas fazer o código rodar mais rápido; é mudar a forma como o problema é resolvido. Muitas vezes, um "truque" matemático ou uma estrutura de dados diferente pode transformar um algoritmo que levaria horas em um que leva milissegundos. Es o processo de passar do "força bruta" para o "inteligente".

Pense em um quebra-cabeça de 1.000 peças. Se você tentar encaixar cada peça com todas as outras, fará quase 1 milhão de tentativas (O(n²)). Mas se você separar as peças pelas cores primeiro, você reduz drasticamente o número de comparações necessárias. Você usou uma estratégia de organização para otimizar o processo.

A técnica mais comum de otimização é evitar trabalho repetido. Se você já calculou algo, salve o resultado (Memoization) para não calcular de novo. Outra técnica poderosa é a ordenação: muitos problemas de busca tornam-se triviais se os dados estiverem ordenados.

Às vezes, a otimização vem de entender melhor as propriedades do problema. Se você quer saber se um número é par, você não precisa dividi-lo por todos os números menores que ele; basta olhar o último dígito. Otimização inteligente foca em atalhos lógicos que mantêm a correção do resultado.

Lembre-se da regra de ouro: "Otimização prematura é a raiz de todos os males". Antes de otimizar, certifique-se de que o código está correto e identifique onde está o verdadeiro gargalo. Use as ferramentas de análise de complexidade que aprendemos para garantir que você está atacando a parte certa do problema.`,
    codes: [
      {
        lang: "python",
        code: `# Lento: O(n^2)
def tem_duplicata_lento(lista):
    for i in range(len(lista)):
        for j in range(i + 1, len(lista)):
            if lista[i] == lista[j]:
                return True
    return False

# Rápido: O(n) usando Set
def tem_duplicata_rapido(lista):
    vistos = set()
    for item in lista:
        if item in vistos:
            return True
        vistos.add(item)
    return False`,
        label: "Otimizando busca de duplicatas"
      },
      {
        lang: "python",
        code: `# Otimização com Memoization (Fibonacci)
memo = {}
def fib(n):
    if n <= 1: return n
    if n not in memo:
        memo[n] = fib(n-1) + fib(n-2)
    return memo[n]`,
        label: "Evitando cálculos repetidos"
      },
      {
        lang: "python",
        code: `# Usando ordenação para otimizar
def encontrar_min_max(lista):
    # Em vez de dois loops, um único loop ou ordenação
    lista_ordenada = sorted(lista) # O(n log n)
    return lista_ordenada[0], lista_ordenada[-1]`,
        label: "Ordenação como ferramenta"
      },
      {
        lang: "python",
        code: `# Break Antecipado: Otimização de fluxo
def encontrar_item(lista, alvo):
    for item in lista:
        if item == alvo:
            return True # Para assim que encontra
    return False`,
        label: "Parada Antecipada"
      }
    ],
    points: [
      "Identifique gargalos antes de começar a otimizar.",
      "Troque loops aninhados por estruturas de dados como Sets ou Dicionários.",
      "Use Memoization para evitar cálculos redundantes em recursão.",
      "Aproveite dados já ordenados ou ordene-os se facilitar buscas futuras.",
      "Evite recriar objetos ou listas grandes dentro de loops intensos.",
      "Muitas vezes, a biblioteca padrão da linguagem já possui a versão mais otimizada.",
      "Mantenha o código legível: uma otimização extrema pode esconder bugs."
    ],
    alerts: [
      {
        type: "tip",
        content: "Um dicionário (HashMap) é quase sempre a resposta para transformar O(n²) em O(n)."
      },
      {
        type: "warning",
        content: "Não sacrifique a clareza do código por milissegundos de ganho, a menos que seja estritamente necessário."
      },
      {
        type: "success",
        content: "Otimizar um algoritmo no 'coração' de um sistema pode melhorar a experiência de todos os usuários."
      }
    ]
  }
];
