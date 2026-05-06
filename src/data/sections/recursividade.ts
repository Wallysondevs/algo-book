import { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "o-que-e-recursao",
    section: "recursividade",
    title: "O que é Recursão?",
    difficulty: "intermediario",
    subtitle: "A arte de resolver problemas chamando a si mesmo",
    intro: `A recursividade é um dos conceitos mais fascinantes e, ao mesmo tempo, desafiadores da programação. Imagine que você está diante de dois espelhos paralelos; a imagem de um reflete no outro, criando uma sequência infinita de reflexos que diminuem gradualmente. Na computação, a recursão funciona de forma similar: uma função chama a si mesma para resolver uma parte menor do problema original.

Uma analogia clássica para entender esse conceito são as Matrioskas, as famosas bonecas russas. Quando você abre uma boneca grande, encontra dentro dela uma versão idêntica, porém menor. Você continua abrindo as bonecas até chegar à última, que é sólida e não pode mais ser aberta. Esse processo de "abrir a próxima versão menor" é a chamada recursiva, e a boneca final é o que chamamos de caso base.

Diferente de um laço de repetição tradicional (como o 'for' ou 'while'), que executa um bloco de código repetidamente, a recursão cria uma nova instância da função a cada chamada. Cada uma dessas instâncias fica pausada na "pilha de execução" (call stack) até que a próxima termine seu trabalho, retornando o resultado para quem a chamou.

Dominar a recursividade exige uma mudança de mentalidade. Em vez de pensar em "como iterar sobre uma lista", começamos a pensar em "como este problema pode ser definido em termos de uma versão menor de si mesmo". É uma ferramenta poderosa para lidar com estruturas de dados complexas, como árvores e grafos, onde a navegação natural é recursiva.

No entanto, é preciso cautela. Assim como um labirinto sem saída, uma recursão mal projetada pode levar ao esgotamento da memória do computador, o famoso 'Stack Overflow'. Por isso, entender como controlar esse processo é fundamental para qualquer programador que deseja elevar seu nível técnico.`,
    codes: [
      {
        lang: "pseudocodigo",
        label: "Estrutura Básica de uma Função Recursiva",
        code: `Função recursiva(problema):
    Se problema é simples o suficiente (Caso Base):
        Retorne resultado direto
    Senão:
        Divida problema em partes menores
        Chame recursiva(parte_menor)
        Combine os resultados e retorne`
      },
      {
        lang: "python",
        label: "Exemplo Simples: Contagem Regressiva",
        code: `def contagem_regressiva(n):
    print(n)
    if n == 0: # Caso Base
        return
    else:
        contagem_regressiva(n - 1) # Chamada Recursiva

contagem_regressiva(5)`
      },
      {
        lang: "python",
        label: "Soma de Lista Recursiva",
        code: `def soma_lista(lista):
    if not lista: # Caso Base: lista vazia
        return 0
    else:
        # Soma o primeiro elemento com o resto da lista
        return lista[0] + soma_lista(lista[1:])

print(soma_lista([1, 2, 3, 4, 5]))`
      },
      {
        lang: "python",
        label: "Verificação de Palíndromo",
        code: `def eh_palindromo(palavra):
    if len(palavra) <= 1:
        return True
    if palavra[0] != palavra[-1]:
        return False
    return eh_palindromo(palavra[1:-1])`
      }
    ],
    points: [
      "Definição: Uma função que invoca a si mesma.",
      "Analogia: Matrioskas (bonecas russas) e espelhos paralelos.",
      "Estrutura: Composta por Caso Base e Caso Recursivo.",
      "Call Stack: Cada chamada ocupa um espaço na memória.",
      "Divisão e Conquista: Quebra problemas grandes em menores.",
      "Elegância: Muitas vezes resulta em código mais limpo que loops.",
      "Risco: Pode causar estouro de pilha se não houver condição de parada."
    ],
    alerts: [
      {
        type: "tip",
        content: "Sempre identifique o caso base antes de começar a escrever a lógica recursiva."
      },
      {
        type: "info",
        content: "A recursão é a base fundamental da Programação Funcional."
      },
      {
        type: "danger",
        content: "Recursão infinita causará um 'RecursionError' ou 'Stack Overflow', travando seu programa."
      }
    ]
  },
  {
    slug: "caso-base-recursivo",
    section: "recursividade",
    title: "Caso Base: Quando Parar",
    difficulty: "intermediario",
    subtitle: "Evitando o loop infinito da recursão",
    intro: `O caso base é o elemento mais crítico de qualquer algoritmo recursivo. Sem ele, a função continuaria chamando a si mesma indefinidamente, como um relógio que nunca para de tiquetaquear, até que o sistema operacional intervenha para interromper o processo por falta de recursos. Ele representa a condição de parada, o ponto onde o problema é tão pequeno que a resposta é óbvia.

Imagine que você está descendo uma escada no escuro. A recursão é o ato de dar um passo para baixo. O caso base é o momento em que seus pés tocam o chão firme. Se você não souber onde o chão está, continuará tentando descer para sempre. No código, o caso base geralmente é uma estrutura condicional simples que retorna um valor fixo.

Muitas vezes, um algoritmo recursivo pode ter mais de um caso base. Por exemplo, ao procurar um item em uma árvore, você para se encontrar o item (sucesso) ou se chegar a um nó vazio (falha). Ambos são condições que interrompem as chamadas recursivas e começam o processo de "desempilhar" os resultados.

A falta de um caso base claro é o erro número um de iniciantes. É comum esquecer de verificar se a entrada atingiu o limite mínimo ou, pior, criar uma lógica onde a entrada nunca se aproxima do caso base. Se você está subtraindo de um número para chegar a zero, mas por erro soma um valor, você nunca alcançará a saída.

Pensar no caso base primeiro ajuda a estruturar o pensamento lógico. Ele define os limites do seu problema e garante que sua jornada recursiva tenha um destino final seguro. É a âncora que mantém seu código estável em um mar de chamadas auto-referenciadas.`,
    codes: [
      {
        lang: "python",
        label: "O Erro Comum: Recursão Infinita",
        code: `# PERIGO: Não execute isto!
def recursao_infinita(n):
    print(n)
    return recursao_infinita(n - 1) # Cade o caso base?`
      },
      {
        lang: "python",
        label: "Caso Base em Busca Binária",
        code: `def busca_binaria(arr, alvo, baixo, alto):
    if baixo > alto: # Caso Base 1: Não encontrado
        return -1
    
    meio = (baixo + alto) // 2
    if arr[meio] == alvo: # Caso Base 2: Encontrado!
        return meio
    elif arr[meio] > alvo:
        return busca_binaria(arr, alvo, baixo, meio - 1)
    else:
        return busca_binaria(arr, alvo, meio + 1, alto)`
      },
      {
        lang: "python",
        label: "Cálculo de Potência",
        code: `def potencia(base, exp):
    if exp == 0: # Caso Base
        return 1
    return base * potencia(base, exp - 1)`
      }
    ],
    points: [
      "O Caso Base impede a recursão infinita.",
      "Representa a solução mais simples possível para o problema.",
      "Um algoritmo pode ter múltiplos casos base.",
      "Deve ser sempre a primeira coisa verificada na função.",
      "Garante que a pilha de execução (stack) seja liberada.",
      "Aproximação: Cada chamada recursiva deve levar a entrada mais perto do caso base.",
      "Erros de lógica no caso base são a causa principal de Stack Overflow."
    ],
    alerts: [
      {
        type: "danger",
        content: "Sem um caso base, o programa consumirá toda a memória da pilha e falhará."
      },
      {
        type: "warning",
        content: "Certifique-se de que o argumento da função mude a cada chamada para evitar ciclos."
      },
      {
        type: "info",
        content: "Em Python, o limite padrão de recursão é geralmente 1000 chamadas."
      }
    ]
  },
  {
    slug: "fatorial-recursivo",
    section: "recursividade",
    title: "Fatorial: O Clássico da Recursão",
    difficulty: "intermediario",
    subtitle: "Calculando n! através da auto-referência",
    intro: `O cálculo do fatorial é o "Hello World" da recursividade. Na matemática, o fatorial de um número natural 'n' (representado por n!) é o produto de todos os números inteiros positivos menores ou iguais a n. Por definição, o fatorial de 0 e de 1 é igual a 1. Esta definição matemática já é, por natureza, recursiva.

Para entender como isso se traduz em código, veja a relação: 5! = 5 * 4 * 3 * 2 * 1. Note que 4 * 3 * 2 * 1 é, na verdade, 4!. Portanto, podemos dizer que 5! = 5 * 4!. De forma geral, n! = n * (n-1)!. Esta é a essência da recursão: resolver o fatorial de 'n' dependendo do resultado do fatorial de 'n-1'.

Quando executamos o fatorial de 3 recursivamente, o computador primeiro tenta calcular 3 * fatorial(2). Para isso, ele precisa resolver fatorial(2), que é 2 * fatorial(1). Ao chegar em fatorial(1), atingimos o caso base, que retorna 1. Agora, a pilha começa a ser resolvida de volta: 2 * 1 retorna 2, e finalmente 3 * 2 retorna 6.

Este exemplo é excelente para visualizar a 'Call Stack'. Cada chamada de função 'fatorial' cria uma moldura (frame) na memória que armazena o valor atual de 'n'. Essas molduras ficam empilhadas umas sobre as outras. Somente quando o caso base é atingido é que essas molduras começam a ser removidas e os valores multiplicados.

Embora o fatorial possa ser facilmente resolvido com um laço 'for', a versão recursiva é muito mais próxima da definição matemática formal. Ela demonstra como a elegância do código pode refletir a lógica matemática pura, transformando uma fórmula complexa em poucas linhas de código legível.`,
    codes: [
      {
        lang: "pseudocodigo",
        label: "Lógica do Fatorial",
        code: `Função Fatorial(n):
    Se n é 0 ou 1:
        Retorne 1
    Senão:
        Retorne n * Fatorial(n - 1)`
      },
      {
        lang: "python",
        label: "Implementação em Python",
        code: `def fatorial(n):
    # Caso base: fatorial de 0 ou 1 é 1
    if n <= 1:
        return 1
    # Chamada recursiva
    return n * fatorial(n - 1)

print(fatorial(5)) # Saída: 120`
      },
      {
        lang: "python",
        label: "Rastreando a Execução (Trace)",
        code: `def fatorial_debug(n, nivel=0):
    espacos = "  " * nivel
    print(f"{espacos}Chamando fatorial({n})")
    if n <= 1:
        print(f"{espacos}Retornando 1")
        return 1
    res = n * fatorial_debug(n - 1, nivel + 1)
    print(f"{espacos}Retornando {res}")
    return res

fatorial_debug(3)`
      }
    ],
    points: [
      "Definição matemática: n! = n * (n-1)!.",
      "Caso Base: 0! = 1 e 1! = 1.",
      "O problema é reduzido a cada passo (n diminui).",
      "Visualização: Cada chamada 'espera' pela próxima.",
      "Resultado Final: O produto acumulado no retorno da pilha.",
      "Complexidade de Tempo: O(n).",
      "Complexidade de Espaço: O(n) devido à pilha de chamadas."
    ],
    alerts: [
      {
        type: "info",
        content: "Fatoriais crescem extremamente rápido. 20! já ultrapassa a capacidade de inteiros de 64 bits padrão."
      },
      {
        type: "tip",
        content: "Para números muito grandes, prefira a versão iterativa para evitar erros de limite de recursão."
      },
      {
        type: "success",
        content: "A recursão brilha em problemas que seguem definições matemáticas indutivas."
      }
    ]
  },
  {
    slug: "fibonacci-recursivo",
    section: "recursividade",
    title: "Sequência de Fibonacci",
    difficulty: "intermediario",
    subtitle: "A beleza e o custo da recursão dupla",
    intro: `A Sequência de Fibonacci é uma sucessão de números onde cada termo, a partir do terceiro, é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8, 13... Ela aparece em diversos fenômenos da natureza, desde a disposição das pétalas de flores até a espiral de galáxias. Matematicamente: Fib(n) = Fib(n-1) + Fib(n-2).

Diferente do fatorial, que faz apenas uma chamada recursiva por vez, Fibonacci faz duas. Isso cria uma estrutura de chamadas em forma de árvore. Para calcular Fib(5), o programa precisa calcular Fib(4) e Fib(3). Por sua vez, Fib(4) precisa de Fib(3) e Fib(2). Note que Fib(3) está sendo calculado repetidamente!

Essa redundância é o grande "calcanhar de Aquiles" da recursão simples para Fibonacci. O número de chamadas cresce exponencialmente à medida que 'n' aumenta. Calcular Fib(40) dessa forma pode levar segundos ou até minutos, pois o computador executa milhões de cálculos repetidos que ele já havia resolvido antes.

Apesar da ineficiência, o código recursivo de Fibonacci é um excelente exemplo didático. Ele mostra como problemas que dependem de múltiplos subproblemas podem ser expressos de forma concisa. É também a porta de entrada para conceitos avançados como 'Memoization' (guardar resultados já calculados) e Programação Dinâmica.

Entender Fibonacci recursivo nos ensina que nem sempre o código mais elegante é o mais performático. Como programadores, devemos equilibrar a clareza da recursão com as realidades da eficiência computacional, escolhendo a ferramenta certa para a escala do problema que estamos enfrentando.`,
    codes: [
      {
        lang: "python",
        label: "Implementação Recursiva Simples",
        code: `def fibonacci(n):
    if n <= 1: # Casos Base: Fib(0)=0, Fib(1)=1
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# Exemplo de uso:
for i in range(10):
    print(fibonacci(i), end=" ")`
      },
      {
        lang: "python",
        label: "Fibonacci com Memoization (Eficiente)",
        code: `cache = {}

def fib_eficiente(n):
    if n in cache:
        return cache[n]
    if n <= 1:
        return n
    
    cache[n] = fib_eficiente(n - 1) + fib_eficiente(n - 2)
    return cache[n]`
      }
    ],
    points: [
      "Definição: Soma dos dois termos anteriores.",
      "Casos Base: n=0 retorna 0, n=1 retorna 1.",
      "Recursão Dupla: Gera uma árvore de chamadas.",
      "Ineficiência: Realiza muitos cálculos redundantes.",
      "Complexidade Temporal: O(2^n) - Exponencial!",
      "Aplicação: Modelagem de crescimento populacional e padrões naturais.",
      "Melhoria: Pode ser otimizado com cache (memoization)."
    ],
    alerts: [
      {
        type: "warning",
        content: "Não tente calcular fibonacci(50) com a versão recursiva simples; seu computador pode travar."
      },
      {
        type: "tip",
        content: "A recursão dupla é comum em algoritmos que exploram árvores ou decisões binárias."
      },
      {
        type: "info",
        content: "A proporção entre números consecutivos de Fibonacci se aproxima da Razão Áurea (1.618...)."
      }
    ]
  },
  {
    slug: "torres-de-hanoi",
    section: "recursividade",
    title: "Torres de Hanói",
    difficulty: "intermediario",
    subtitle: "Resolvendo um enigma milenar com recursão",
    intro: `As Torres de Hanói é um quebra-cabeça clássico que consiste em três varetas e um número de discos de tamanhos diferentes. O objetivo é mover toda a pilha de discos da primeira vareta para a última, seguindo três regras: apenas um disco pode ser movido por vez, um disco maior nunca pode ficar sobre um menor, e você só pode mover o disco que estiver no topo.

Diz a lenda que em um templo em Hanói, monges trabalham para mover 64 discos de ouro. Quando terminarem, o mundo acabará. Felizmente, mover 64 discos levaria cerca de 585 bilhões de anos! No entanto, para nós programadores, o desafio é criar um algoritmo que gere os passos para qualquer número de discos.

A solução recursiva para Hanói é elegantemente simples: para mover N discos da Origem para o Destino usando o Auxiliar, você: 1. Move N-1 discos da Origem para o Auxiliar. 2. Move o disco maior diretamente para o Destino. 3. Move os N-1 discos do Auxiliar para o Destino.

Este problema demonstra perfeitamente a estratégia de "Dividir para Conquistar". Não tentamos resolver o movimento de todos os discos de uma vez. Em vez disso, reduzimos o problema a mover um disco a menos, repetidamente, até que reste apenas um disco para mover (nosso caso base).

Abaixo, veremos como esse pensamento se transforma em código e como os passos são executados para 3 discos, ilustrando a mecânica por trás da solução.`,
    codes: [
      {
        lang: "python",
        label: "Algoritmo das Torres de Hanói",
        code: `def hanoi(n, origem, destino, auxiliar):
    if n == 1: # Caso base: apenas um disco
        print(f"Mova disco 1 de {origem} para {destino}")
        return
    
    # Passo 1: Mover n-1 discos da origem para o auxiliar
    hanoi(n - 1, origem, auxiliar, destino)
    
    # Passo 2: Mover o disco n da origem para o destino
    print(f"Mova disco {n} de {origem} para {destino}")
    
    # Passo 3: Mover os n-1 discos do auxiliar para o destino
    hanoi(n - 1, auxiliar, destino, origem)

# Executando para 3 discos:
hanoi(3, 'A', 'C', 'B')`
      },
      {
        lang: "text",
        label: "Passo a Passo para N=3",
        code: `1. Mova disco 1 de A para C
2. Mova disco 2 de A para B
3. Mova disco 1 de C para B
4. Mova disco 3 de A para C (O maior chegou ao destino!)
5. Mova disco 1 de B para A
6. Mova disco 2 de B para C
7. Mova disco 1 de A para C`
      }
    ],
    points: [
      "Três regras: um disco por vez, maior nunca sobre menor, apenas topo.",
      "Estratégia: Usar uma haste auxiliar para manobrar os discos.",
      "Caso Base: Mover o disco 1 diretamente para o destino.",
      "Passos totais: 2^n - 1 movimentos.",
      "Recursão Tripla: Envolve duas chamadas recursivas e uma ação central.",
      "A lenda: 64 discos marcariam o fim do mundo.",
      "Visualização: O problema se auto-replica em escalas menores."
    ],
    alerts: [
      {
        type: "tip",
        content: "Tente resolver manualmente para 3 discos antes de olhar o código para entender a lógica."
      },
      {
        type: "info",
        content: "Este algoritmo é um exemplo clássico de complexidade exponencial O(2^n)."
      },
      {
        type: "success",
        content: "A recursão transforma um problema complexo de lógica em apenas 4 linhas de código."
      }
    ]
  },
  {
    slug: "recursao-vs-iteracao",
    section: "recursividade",
    title: "Recursão vs. Iteração: Quando Usar Qual",
    difficulty: "intermediario",
    subtitle: "Escolhendo a ferramenta certa para a performance",
    intro: `Todo problema que pode ser resolvido com recursão também pode ser resolvido com iteração (laços como for e while), e vice-versa. A escolha entre um e outro geralmente envolve uma troca entre clareza de código e eficiência de memória. Enquanto a recursão tende a ser mais elegante e próxima da lógica humana, a iteração é geralmente mais rápida e consome menos recursos.

A iteração é "plana". Ela usa uma única estrutura de controle para repetir ações, mantendo as variáveis no mesmo escopo. Já a recursão é "profunda". Cada chamada adiciona uma nova camada à memória. Se você precisa processar uma lista de milhões de itens, um loop é quase sempre preferível para evitar o esgotamento da pilha.

Por outro lado, imagine percorrer um sistema de arquivos com pastas dentro de pastas. Tentar fazer isso com loops exige que você gerencie manualmente uma lista de pastas pendentes. Com recursão, o código flui naturalmente: "para cada item na pasta, se for arquivo, processe; se for pasta, chame esta mesma função para ela".

Algumas linguagens, especialmente as funcionais como Haskell ou Elixir, são otimizadas para recursão através de uma técnica chamada 'Tail Call Optimization' (Otimização de Chamada de Cauda). Nelas, o custo da recursão pode ser igual ao de um loop. Em linguagens como Python ou Java, esse custo é mais elevado.

O segredo do bom programador é saber quando a legibilidade da recursão compensa o custo de performance. Para algoritmos de busca em árvores, grafos ou problemas de divisão e conquista (como QuickSort), a recursão é a rainha. Para contagens simples ou processamento linear, a iteração é a operária infalível.`,
    codes: [
      {
        lang: "python",
        label: "Fatorial Iterativo (Mais eficiente)",
        code: `def fatorial_iterativo(n):
    resultado = 1
    for i in range(2, n + 1):
        resultado *= i
    return resultado`
      },
      {
        lang: "python",
        label: "Fatorial Recursivo (Mais legível)",
        code: `def fatorial_recursivo(n):
    if n <= 1:
        return 1
    return n * fatorial_recursivo(n - 1)`
      }
    ],
    points: [
      "Recursão: Foco na clareza e definição do problema.",
      "Iteração: Foco na eficiência e controle de memória.",
      "Memória: Recursão usa a Call Stack; Iteração usa variáveis locais.",
      "Legibilidade: Recursão é melhor para estruturas hierárquicas.",
      "Performance: Iteração evita o overhead de chamadas de função.",
      "Tail Recursion: Uma otimização que transforma recursão em loop por baixo dos panos.",
      "Escolha: Use recursão para árvores/grafos; use loops para listas/arrays."
    ],
    alerts: [
      {
        type: "info",
        content: "Em Python, prefira iteração para grandes volumes de dados devido ao limite de recursão."
      },
      {
        type: "tip",
        content: "Se você está gerenciando sua própria pilha (stack) dentro de um loop, talvez a recursão fosse mais simples."
      },
      {
        type: "warning",
        content: "Sempre considere o custo de memória antes de implementar uma solução recursiva profunda."
      }
    ]
  }
];
