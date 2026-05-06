import { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "o-que-e-vetor",
    section: "vetores-matrizes",
    title: "O que é um Vetor (Array)?",
    difficulty: "iniciante",
    subtitle: "Entendendo a organização de dados em sequência",
    intro: "Imagine que você possui uma coleção de moedas raras e decide guardá-las em uma caixa. Se você tiver apenas uma ou duas moedas, caixas individuais funcionam bem. No entanto, quando sua coleção cresce para dezenas de itens, gerenciar dezenas de caixas separadas se torna um pesadelo logístico. Na programação, variáveis simples são como essas caixas individuais: cada uma guarda um valor. Quando precisamos armazenar muitos valores do mesmo tipo, como as notas de uma turma inteira, criar uma variável para cada aluno (nota1, nota2, nota3...) é ineficiente e propenso a erros.\n\nUm vetor, ou array, funciona como um organizador de gavetas em um armário. Em vez de ter móveis espalhados pela casa, você tem uma única estrutura vertical onde cada gaveta está empilhada sobre a outra. A beleza dessa organização é que você não precisa dar um nome diferente para cada gaveta; basta dizer 'esta é a gaveta número 0' ou 'aquela é a gaveta número 3'. No mundo dos algoritmos, o vetor é essa estrutura única que agrupa diversos valores sob um único nome, permitindo o acesso sistemático a cada um deles.\n\nCada 'gaveta' do nosso vetor tem um endereço específico que chamamos de índice. É crucial entender que, na maioria das linguagens de programação, a contagem começa do zero. Pense nisso como os andares de um prédio em alguns países: o térreo é o andar 0, o próximo é o 1, e assim por diante. Se você tem um vetor de 5 posições, seus índices serão 0, 1, 2, 3 e 4. Tentar acessar a posição 5 em um vetor de tamanho 5 resultaria em um erro, pois você estaria tentando abrir uma gaveta que não existe no móvel.\n\nAlém da organização, os vetores trazem homogeneidade. Isso significa que, geralmente, um vetor guarda elementos do mesmo tipo. Se você tem um vetor de números inteiros, espera-se que todas as posições guardem inteiros. Essa característica permite que o computador reserve um bloco contíguo de memória, tornando o acesso aos dados extremamente veloz. Imagine uma rua onde todas as casas têm o mesmo tamanho; se você souber onde a primeira casa começa, é muito fácil calcular exatamente onde a décima casa está localizada.\n\nPor fim, a grande vantagem dos vetores reside na capacidade de manipulação em massa. Como podemos acessar as posições usando números (índices), podemos usar variáveis para representar esses índices. Isso abre as portas para o uso de estruturas de repetição, onde um único loop pode processar milhares de informações em frações de segundo. O que antes exigiria centenas de linhas de código repetitivo agora pode ser resolvido com uma estrutura elegante e concisa.",
    codes: [
      {
        lang: "pseudocode",
        label: "Declaração de um vetor",
        code: "// Declaração de um vetor de 5 números reais\nnotas: vetor[0..4] de real\n\n// Atribuição de valores individuais\nnotas[0] <- 8.5\nnotas[1] <- 7.0\nnotas[2] <- 9.2\nnotas[3] <- 6.5\nnotas[4] <- 10.0"
      },
      {
        lang: "python",
        label: "Representação visual e inicialização em Python",
        code: "# Índice:  [0]  [1]  [2]  [3]  [4]\n# Vetor:   [ 8.5 ][ 7.0 ][ 9.2 ][ 6.5 ][ 10.0 ]\n\nnotas = [8.5, 7.0, 9.2, 6.5, 10.0]\n\nprint(f\"A primeira nota é: {notas[0]}\")\nprint(f\"A última nota é: {notas[4]}\")"
      },
      {
        lang: "python",
        label: "Acessando valores dinamicamente",
        code: "precos = [19.99, 45.00, 12.50, 89.90]\n\nindice = 2\nprint(f\"O preço na posição {indice} é {precos[indice]}\")\n# Saída: O preço na posição 2 é 12.5"
      },
      {
        lang: "python",
        label: "Modificando elementos do vetor",
        code: "frutas = [\"Maçã\", \"Banana\", \"Uva\"]\nprint(f\"Antes: {frutas}\")\n\n# Substituindo Banana por Morango\nfrutas[1] = \"Morango\"\nprint(f\"Depois: {frutas}\")"
      },
      {
        lang: "python",
        label: "Tamanho de um vetor",
        code: "itens = [10, 20, 30, 40, 50, 60]\ntamanho = len(itens)\n\nprint(f\"O vetor possui {tamanho} elementos.\")\nprint(f\"O último índice válido é {tamanho - 1}.\")"
      }
    ],
    points: [
      "Um vetor é uma estrutura de dados que armazena uma sequência de elementos do mesmo tipo.",
      "O acesso aos elementos é feito através de índices numéricos.",
      "A maioria das linguagens utiliza indexação baseada em zero (0-based).",
      "Vetores ocupam espaços contíguos na memória do computador.",
      "O tamanho de um vetor pode ser fixo (estático) ou variável (dinâmico), dependendo da linguagem.",
      "Tentar acessar um índice fora dos limites do vetor gera um erro de 'Index Out of Bounds'.",
      "Vetores facilitam o processamento de grandes volumes de dados de forma organizada."
    ],
    alerts: [
      {
        type: "warning",
        content: "Cuidado com o 'erro de um': se um vetor tem tamanho 10, o último índice é 9, não 10."
      },
      {
        type: "info",
        content: "Em Python, os vetores são chamados de 'Lists' e são extremamente flexíveis."
      },
      {
        type: "tip",
        content: "Use nomes de variáveis no plural para vetores (ex: 'nomes', 'valores') para indicar que guardam múltiplos itens."
      }
    ]
  },
  {
    slug: "operacoes-vetor",
    section: "vetores-matrizes",
    title: "Operações com Vetores",
    difficulty: "iniciante",
    subtitle: "Inserindo, removendo e buscando dados",
    intro: "Trabalhar com vetores vai muito além de apenas guardar valores; trata-se de gerenciar uma lista dinâmica de informações que muda conforme as necessidades do seu programa. Imagine uma fila de banco: pessoas chegam (inserção), pessoas saem após o atendimento (remoção) e, às vezes, precisamos verificar se alguém específico está na fila (busca). Essas operações fundamentais são o que tornam os vetores ferramentas poderosas para resolver problemas complexos do dia a dia.\n\nA inserção em um vetor pode acontecer de várias formas. Podemos adicionar um elemento ao final da lista, como alguém chegando ao fim da fila, ou podemos 'abrir espaço' no meio para inserir algo em uma posição específica. Esta última operação é mais custosa para o computador, pois ele precisa deslocar todos os elementos seguintes para a direita, como se todos em uma fila tivessem que dar um passo para trás para deixar alguém passar.\n\nJá a remoção segue uma lógica inversa. Quando tiramos um elemento do meio do vetor, ficamos com um 'buraco'. Para manter a integridade da sequência, os elementos à direita precisam ser deslocados para a esquerda, preenchendo o espaço vazio. É por isso que remover elementos do início ou do meio de grandes vetores pode ser mais lento do que remover apenas o último item, onde nenhum deslocamento é necessário.\n\nA busca é talvez a operação mais comum. Imagine procurar uma palavra em um dicionário que não está em ordem alfabética; você teria que olhar página por página, da primeira à última. No mundo dos vetores, chamamos isso de busca sequencial. Começamos no índice 0 e comparamos o valor desejado com cada posição até encontrar o que procuramos ou chegar ao fim do vetor.\n\nAlém dessas, existem operações de modificação e agregação. Podemos alterar o valor de uma posição específica diretamente se soubermos seu índice, ou percorrer todo o vetor para realizar cálculos, como somar todos os valores para obter uma média. Entender essas operações é como aprender as regras de um jogo: uma vez que você as domina, pode começar a construir estratégias e algoritmos muito mais eficientes para lidar com qualquer conjunto de dados.",
    codes: [
      {
        lang: "python",
        label: "Adicionando elementos (append)",
        code: "# Índice:  [0]  [1]  [2]\n# Vetor:   [ 10 ][ 20 ][ 30 ]\nnumeros = [10, 20, 30]\n\n# Adiciona ao final\nnumeros.append(40)\n\n# Índice:  [0]  [1]  [2]  [3]\n# Vetor:   [ 10 ][ 20 ][ 30 ][ 40 ]\nprint(numeros)"
      },
      {
        lang: "python",
        label: "Inserindo em posição específica",
        code: "cores = [\"verde\", \"azul\"]\n# insere \"amarelo\" no índice 1\ncores.insert(1, \"amarelo\")\n\n# Antes: [\"verde\", \"azul\"]\n# Depois: [\"verde\", \"amarelo\", \"azul\"]\nprint(cores)"
      },
      {
        lang: "python",
        label: "Removendo elementos",
        code: "lista = [100, 200, 300, 400]\n# Remove o último\nultimo = lista.pop()\n\n# Remove por valor\nlista.remove(200)\n\nprint(f\"Lista final: {lista}, Item removido: {ultimo}\")"
      },
      {
        lang: "python",
        label: "Buscando a posição de um item",
        code: "times = [\"Flamengo\", \"Vasco\", \"Palmeiras\"]\nposicao = times.index(\"Vasco\")\n\nprint(f\"O Vasco está na posição {posicao}\")"
      },
      {
        lang: "python",
        label: "Invertendo e Ordenando",
        code: "valores = [5, 2, 9, 1, 7]\nvalores.sort() # Ordena crescente\nprint(f\"Ordenado: {valores}\")\n\nvalores.reverse() # Inverte a ordem\nprint(f\"Invertido: {valores}\")"
      }
    ],
    points: [
      "A inserção ao final (append) é geralmente a operação mais rápida.",
      "Inserir ou remover no meio exige o deslocamento de outros elementos.",
      "A busca sequencial percorre o vetor do início ao fim (complexidade O(n)).",
      "A operação 'pop' remove e retorna o último elemento por padrão.",
      "A ordenação (sort) reorganiza os elementos seguindo um critério (ex: numérico).",
      "É possível verificar a existência de um item usando o operador 'in' no Python.",
      "Limpar um vetor remove todos os seus elementos de uma vez."
    ],
    alerts: [
      {
        type: "danger",
        content: "Tentar remover um item que não existe no vetor usando .remove() causará um erro em Python."
      },
      {
        type: "tip",
        content: "Se você precisa de performance e vai inserir/remover muito no início, considere outras estruturas como 'deque'."
      },
      {
        type: "info",
        content: "A busca em vetores ordenados pode ser muito mais rápida usando o algoritmo de Busca Binária."
      }
    ]
  },
  {
    slug: "percorrer-vetor",
    section: "vetores-matrizes",
    title: "Percorrendo um Vetor com Loops",
    difficulty: "iniciante",
    subtitle: "Automatizando o processamento de dados",
    intro: "A verdadeira magia da programação acontece quando combinamos vetores com loops. Imagine que você é um professor com uma lista de 50 notas de alunos e precisa calcular a média da turma. Somar uma por uma manualmente no código seria exaustivo e inflexível. Com um loop, você pode instruir o computador a 'visitar cada gaveta' do seu vetor de notas, pegar o valor lá dentro e adicioná-lo a um totalizador. Não importa se são 50, 5.000 ou 5 milhões de notas; o código continua curto e elegante.\n\nExistem duas formas principais de percorrer um vetor. A primeira é o percurso por índice. É como se você tivesse uma lista de endereços e fosse de casa em casa: 'Vou na casa 0, depois na casa 1, até a casa final'. Essa abordagem é útil quando você precisa saber em qual posição está ou quando precisa modificar o valor daquela posição específica durante o processo.\n\nA segunda forma é o percurso por elemento (ou 'for-each'). Imagine que você está apenas interessado no conteúdo das caixas, não no número da gaveta. Você diz ao computador: 'Para cada fruta na minha cesta de frutas, imprima o nome dela'. É uma sintaxe mais limpa e legível, ideal para situações onde você só precisa ler os dados, como exibir uma lista de nomes na tela.\n\nPercorrer vetores também nos permite realizar filtragens. Imagine uma lista de produtos e você quer encontrar apenas aqueles que custam menos de 10 reais. O loop visita cada item, um teste lógico (IF) verifica o preço, e se a condição for atendida, o item é processado ou adicionado a uma nova lista. É a base de como grandes sistemas filtram resultados de busca para nós.\n\nPor fim, a iteração nos permite encontrar extremos, como o maior ou o menor valor de uma sequência. Começamos assumindo que o primeiro item é o maior que vimos até agora. Ao percorrer o resto do vetor, comparamos cada novo item com o nosso 'campeão' atual. Se encontrarmos alguém maior, atualizamos nosso campeão. Ao final do loop, teremos percorrido todo o caminho e garantido o resultado correto, uma tarefa que seria humanamente impossível de fazer sem erros em volumes massivos de dados.",
    codes: [
      {
        lang: "pseudocode",
        label: "Somando elementos de um vetor",
        code: "soma <- 0\npara i de 0 ate 4 faca\n    soma <- soma + notas[i]\nfimpara\nmedia <- soma / 5"
      },
      {
        lang: "python",
        label: "Percurso por índice vs Por elemento",
        code: "# Índice:  [0]  [1]  [2]  [3]\n# Vetor:   [ 10 ][ 20 ][ 30 ][ 40 ]\nnumeros = [10, 20, 30, 40]\n\n# Por elemento (mais limpo)\nfor n in numeros:\n    print(f\"Valor: {n}\")\n\n# Por índice (acesso à posição)\nfor i in range(len(numeros)):\n    print(f\"Índice {i} contém o valor {numeros[i]}\")"
      },
      {
        lang: "python",
        label: "Encontrando o maior valor",
        code: "valores = [15, 42, 7, 88, 23]\nmaior = valores[0]\n\nfor v in valores:\n    if v > maior:\n        maior = v\n\nprint(f\"O maior valor encontrado foi: {maior}\")"
      },
      {
        lang: "python",
        label: "Filtrando dados em um novo vetor",
        code: "idades = [12, 25, 17, 30, 14, 19]\nmaiores_de_idade = []\n\nfor idade in idades:\n    if idade >= 18:\n        maiores_de_idade.append(idade)\n\nprint(f\"Apenas adultos: {maiores_de_idade}\")"
      },
      {
        lang: "python",
        label: "Calculando média de notas",
        code: "notas = [7.5, 8.0, 6.5, 9.0]\nsoma = 0\n\nfor nota in notas:\n    soma += nota\n\nmedia = soma / len(notas)\nprint(f\"Média da turma: {media:.2f}\")"
      }
    ],
    points: [
      "Loops permitem processar todos os elementos de um vetor de forma automática.",
      "O loop 'for' é o mais comum para percorrer sequências.",
      "O percurso por índice usa uma variável contadora (geralmente 'i').",
      "O percurso por elemento é chamado de 'for-each' e é mais legível.",
      "Sempre verifique se o vetor não está vazio antes de tentar acessar o índice 0.",
      "A função 'len()' ajuda a controlar o limite do loop para evitar erros de índice.",
      "Acumuladores e contadores são variáveis comuns usadas dentro de loops de vetores."
    ],
    alerts: [
      {
        type: "tip",
        content: "Em Python, use 'enumerate(lista)' se precisar tanto do índice quanto do valor no mesmo loop."
      },
      {
        type: "warning",
        content: "Evite modificar o tamanho de um vetor (adicionar ou remover itens) enquanto está percorrendo ele com um loop."
      },
      {
        type: "success",
        content: "Dominar loops em vetores é o passo mais importante para se tornar um programador eficiente."
      }
    ]
  },
  {
    slug: "o-que-e-matriz",
    section: "vetores-matrizes",
    title: "O que é uma Matriz?",
    difficulty: "iniciante",
    subtitle: "Dados organizados em grades de linhas e colunas",
    intro: "Se um vetor é como uma única linha de gavetas, uma matriz é como um armário inteiro cheio delas, organizado em linhas e colunas. Pense em uma planilha de Excel: você tem as linhas (horizontais) e as colunas (verticais). Para encontrar um dado específico, você não diz apenas 'está na posição 5', mas sim 'está na linha 3, coluna B'. Essa estrutura bidimensional é fundamental para representar dados que têm uma relação tabular ou espacial.\n\nA analogia do tabuleiro de xadrez é perfeita para entender matrizes. O tabuleiro é uma grade de 8x8. Cada casa é identificada por um par de coordenadas. Na programação, chamamos isso de matriz, e o acesso a cada 'casa' requer dois índices: o primeiro para a linha e o segundo para a coluna. Assim, `tabuleiro[0][0]` seria o canto superior esquerdo, enquanto `tabuleiro[7][7]` seria o canto inferior direito.\n\nMatrizes são, tecnicamente, 'vetores de vetores'. Imagine que você tem uma gaveta principal, e dentro dessa gaveta, existem outras divisórias menores. Ao abrir a primeira gaveta (índice de linha), você encontra uma sequência de espaços (índices de coluna). Essa percepção é importante porque nos ajuda a entender como o computador armazena esses dados na memória, muitas vezes linearizando a grade em uma longa sequência.\n\nAplicações de matrizes estão em toda parte. Mapas de jogos são frequentemente matrizes onde cada número representa um tipo de terreno (0 para grama, 1 para água). Imagens digitais são matrizes gigantescas onde cada elemento (pixel) guarda a cor daquela posição específica. Até mesmo o monitor onde você lê este texto organiza a luz em uma matriz de pontos luminosos.\n\nEntender matrizes abre portas para resolver problemas de maior complexidade. Elas permitem representar sistemas de equações, grades de horários semanais (onde linhas são dias e colunas são horas), ou até mesmo redes sociais complexas. Embora pareçam intimidadoras no início devido ao uso de dois índices, a lógica por trás delas é apenas uma extensão natural do que já aprendemos com os vetores.",
    codes: [
      {
        lang: "pseudocode",
        label: "Declaração de uma matriz 3x3",
        code: "// Matriz de inteiros com 3 linhas e 3 colunas\ngrade: matriz[0..2, 0..2] de inteiro\n\n// Atribuição individual\ngrade[0, 0] <- 1\ngrade[1, 1] <- 5\ngrade[2, 2] <- 9"
      },
      {
        lang: "python",
        label: "Representação visual de uma matriz em Python",
        code: "# Uma matriz 3x3 representada como lista de listas\n# Colunas: [0] [1] [2]\nmatriz = [\n    [1, 2, 3], # Linha 0\n    [4, 5, 6], # Linha 1\n    [7, 8, 9]  # Linha 2\n]\n\nprint(f\"Elemento no centro: {matriz[1][1]}\")\n# Saída: 5"
      },
      {
        lang: "python",
        label: "Acessando elementos de forma dinâmica",
        code: "matriz = [[10, 20], [30, 40]]\n\nlinha = 1\ncoluna = 0\nprint(f\"Valor na linha {linha}, coluna {coluna}: {matriz[linha][coluna]}\")\n# Saída: 30"
      },
      {
        lang: "python",
        label: "Criando uma matriz vazia (Exemplo: Tabuleiro)",
        code: "# Criando um tabuleiro 3x3 cheio de zeros\ntabuleiro = []\nfor i in range(3):\n    linha = [0] * 3\n    tabuleiro.append(linha)\n\nprint(tabuleiro)"
      },
      {
        lang: "python",
        label: "Matriz de Strings (Grade de nomes)",
        code: "sala = [\n    [\"Ana\", \"Bruno\"],\n    [\"Carla\", \"Diego\"]\n]\n\nprint(f\"Quem senta na linha 0, coluna 1? {sala[0][1]}\")"
      }
    ],
    points: [
      "Uma matriz é uma estrutura bidimensional (linhas e colunas).",
      "O acesso a um elemento requer dois índices: matriz[linha][coluna].",
      "Matrizes podem ser visualizadas como tabelas ou grades.",
      "Em muitas linguagens, matrizes são implementadas como 'vetores de vetores'.",
      "O primeiro índice geralmente se refere à linha e o segundo à coluna.",
      "Matrizes quadradas possuem o mesmo número de linhas e colunas.",
      "A diagonal principal de uma matriz quadrada é onde linha == coluna."
    ],
    alerts: [
      {
        type: "info",
        content: "Matrizes podem ter mais de duas dimensões (3D, 4D...), mas o uso além de 3D é raro em lógica básica."
      },
      {
        type: "warning",
        content: "Lembre-se: matriz[linha][coluna]. Inverter a ordem é um erro muito comum de iniciantes."
      },
      {
        type: "tip",
        content: "Pense em matrizes como mapas de coordenadas (X, Y) para facilitar a visualização mental."
      }
    ]
  },
  {
    slug: "operacoes-matriz",
    section: "vetores-matrizes",
    title: "Operações com Matrizes",
    difficulty: "iniciante",
    subtitle: "Manipulando grades de dados com loops aninhados",
    intro: "Processar uma matriz exige um nível a mais de abstração: o uso de loops dentro de loops, conhecidos como loops aninhados. Imagine que você precisa limpar todas as janelas de um prédio. O primeiro 'loop' faz você percorrer cada andar (linha). Para cada andar que você chega, o segundo 'loop' faz você percorrer cada janela daquele andar (coluna). Somente após limpar todas as janelas de um andar é que você sobe para o próximo. É exatamente assim que o computador processa uma matriz.\n\nA operação mais básica é o percurso completo. Usamos um contador `i` para as linhas e, dentro dele, um contador `j` para as colunas. Essa técnica permite que façamos coisas como somar todos os elementos da matriz, encontrar o maior valor global ou transformar todos os dados de uma vez (por exemplo, aplicar um filtro em uma imagem).\n\nOutra operação comum é o processamento por linha ou por coluna. Às vezes, você não quer a média de toda a matriz, mas sim a média de cada linha separadamente. Imagine uma matriz de notas onde cada linha representa um aluno e cada coluna uma prova. Ao fixar o índice da linha e variar apenas o da coluna, você calcula a média individual de cada estudante. Inversamente, ao fixar a coluna e variar a linha, você descobre qual foi a média da turma em uma prova específica.\n\nMatrizes também permitem operações matemáticas clássicas, como a transposição (transformar linhas em colunas e vice-versa) e a soma de matrizes. Para somar duas matrizes de mesmo tamanho, basta somar os elementos que ocupam a mesma posição `(i, j)`. É um processo repetitivo que demonstra perfeitamente por que computadores são tão superiores aos humanos em tarefas de cálculo sistemático.\n\nPor fim, matrizes são essenciais para detecção de colisões e caminhos em jogos. Ao verificar os elementos vizinhos de uma posição `(i, j)`, como `(i-1, j)` ou `(i, j+1)`, um algoritmo pode determinar se um personagem pode se mover para aquela direção ou se há um obstáculo no caminho. Entender essas operações de vizinhança é a base para algoritmos de inteligência artificial e processamento de imagens.",
    codes: [
      {
        lang: "pseudocode",
        label: "Percorrendo e exibindo uma matriz",
        code: "para i de 0 ate 2 faca\n    para j de 0 ate 2 faca\n        escreva matriz[i, j]\n    fimpara\n    pula_linha()\nfimpara"
      },
      {
        lang: "python",
        label: "Somando todos os elementos de uma matriz",
        code: "matriz = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\nsoma_total = 0\n\nfor linha in matriz:\n    for elemento in linha:\n        soma_total += elemento\n\nprint(f\"A soma de todos os itens é: {soma_total}\")"
      },
      {
        lang: "python",
        label: "Média por linha (Ex: Média de cada aluno)",
        code: "notas_alunos = [\n    [8.0, 7.0, 9.0], # Aluno 1\n    [6.0, 6.5, 7.0], # Aluno 2\n    [10.0, 9.5, 10.0] # Aluno 3\n]\n\nfor i in range(len(notas_alunos)):\n    soma_aluno = sum(notas_alunos[i])\n    media = soma_aluno / len(notas_alunos[i])\n    print(f\"Aluno {i+1} teve média {media:.1f}\")"
      },
      {
        lang: "python",
        label: "Buscando um valor na matriz",
        code: "procurado = 5\nencontrado = False\n\nfor i in range(3):\n    for j in range(3):\n        if matriz[i][j] == procurado:\n            print(f\"Valor {procurado} achado em ({i}, {j})\")\n            encontrado = True\n\nif not encontrado:\n    print(\"Valor não está na matriz.\")"
      },
      {
        lang: "python",
        label: "Modificando a Diagonal Principal",
        code: "m = [[0,0,0], [0,0,0], [0,0,0]]\n\nfor i in range(3):\n    m[i][i] = 1 # Define 1 onde linha == coluna\n\n# Resultado:\n# [1, 0, 0]\n# [0, 1, 0]\n# [0, 0, 1]\nfor linha in m: print(linha)"
      }
    ],
    points: [
      "Loops aninhados (nested loops) são a ferramenta padrão para manipular matrizes.",
      "O loop externo controla as linhas e o interno as colunas (ou vice-versa).",
      "Processar a diagonal principal exige apenas um loop (onde i == j).",
      "A soma de matrizes requer que ambas tenham as mesmas dimensões.",
      "Matrizes podem ser usadas para representar mapas, imagens e planilhas.",
      "Operações de vizinhança checam elementos ao redor de uma coordenada (i, j).",
      "A eficiência de um algoritmo de matriz geralmente é O(n*m), onde n e m são as dimensões."
    ],
    alerts: [
      {
        type: "tip",
        content: "Para imprimir uma matriz de forma bonita em Python, use loops ou a biblioteca 'numpy' para projetos maiores."
      },
      {
        type: "danger",
        content: "Cuidado com a confusão de índices! `matriz[j][i]` acessará dados de forma transposta se você não estiver atento."
      },
      {
        type: "info",
        content: "Muitas GPUs (placas de vídeo) são otimizadas especificamente para realizar estas operações em matrizes bilhões de vezes por segundo."
      }
    ]
  },
  {
    slug: "strings-como-vetores",
    section: "vetores-matrizes",
    title: "Strings como Vetores de Caracteres",
    difficulty: "iniciante",
    subtitle: "Entendendo que textos são sequências de símbolos",
    intro: "Você já parou para pensar em como o computador entende uma palavra? Para nós, 'ALGORITMO' é um conceito único, mas para a máquina, é apenas uma sequência de caracteres individuais colocados um após o outro. Na prática, uma String (texto) nada mais é do que um vetor de caracteres. Isso significa que tudo o que você aprendeu sobre vetores — índices, loops e acesso a posições — aplica-se diretamente à manipulação de textos.\n\nImagine uma pulseira de miçangas onde cada miçanga tem uma letra gravada. Se você quer saber qual é a primeira letra da palavra 'PYTHON', basta olhar para a miçanga no índice 0, que é 'P'. Se você quiser inverter a palavra, basta reorganizar as miçangas da última para a primeira. Essa visão 'granular' do texto permite que programadores realizem tarefas complexas, como validar se um e-mail possui o símbolo '@' ou transformar todas as letras em maiúsculas.\n\nComo as Strings se comportam como vetores, podemos usar loops para percorrê-las. Isso é útil para contar, por exemplo, quantas vogais existem em uma frase. O loop visita cada caractere, verifica se ele é 'a', 'e', 'i', 'o' ou 'u', e incrementa um contador caso positivo. É a base dos corretores ortográficos e sistemas de busca de texto que usamos diariamente.\n\nUm conceito importante é a imutabilidade em algumas linguagens. Enquanto em um vetor de números você pode facilmente trocar o valor da posição 2, em linguagens como Python e Java, você não pode trocar uma letra de uma String diretamente (ex: `texto[2] = 'X'` causaria erro). Em vez disso, você cria uma nova String com a alteração desejada. É como se, para trocar uma miçanga da pulseira, você tivesse que montar uma pulseira nova incluindo a miçanga diferente.\n\nPor fim, entender Strings como vetores permite trabalhar com subconjuntos de texto, o que chamamos de 'slicing' ou fatiamento. Se você tem a String 'UNIVERSIDADE' e quer apenas os 4 primeiros caracteres, você 'fatia' o vetor do índice 0 ao 3, obtendo 'UNIV'. Essa habilidade de decompor e recompor sequências de caracteres é uma das competências mais valiosas na manipulação de dados textuais e processamento de informações.",
    codes: [
      {
        lang: "python",
        label: "Acessando caracteres por índice",
        code: "palavra = \"LOGICA\"\n\n# Índice: [0][1][2][3][4][5]\n# Letra:  [ L ][ O ][ G ][ I ][ C ][ A ]\n\nprint(palavra[0]) # L\nprint(palavra[5]) # A"
      },
      {
        lang: "python",
        label: "Percorrendo uma String com loop",
        code: "nome = \"Python\"\nfor letra in nome:\n    print(letra.upper())"
      },
      {
        lang: "python",
        label: "Contando vogais em uma frase",
        code: "frase = \"Algoritmos sao legais\"\nvogais = \"aeiou\"\ncontador = 0\n\nfor char in frase.lower():\n    if char in vogais:\n        contador += 1\n\nprint(f\"A frase tem {contador} vogais.\")"
      },
      {
        lang: "python",
        label: "Invertendo uma String",
        code: "texto = \"REVERSE\"\ninvertido = \"\"\n\nfor i in range(len(texto) - 1, -1, -1):\n    invertido += texto[i]\n\nprint(invertido) # ESERVER"
      },
      {
        lang: "python",
        label: "Fatiamento (Slicing)",
        code: "email = \"contato@empresa.com\"\nusuario = email[:7] # Do início até o índice 6\ndominio = email[8:] # Do índice 8 até o fim\n\nprint(f\"Usuário: {usuario}, Domínio: {dominio}\")"
      }
    ],
    points: [
      "Strings são essencialmente vetores (listas) de caracteres.",
      "Cada caractere em uma String possui um índice, começando em 0.",
      "A função len() retorna o número de caracteres de uma String.",
      "Podemos percorrer Strings usando loops for e while.",
      "Em muitas linguagens, Strings são imutáveis (não podem ser alteradas in-place).",
      "O fatiamento (slicing) permite extrair partes de uma String facilmente.",
      "Operações de busca como 'find' ou 'in' verificam a existência de sub-strings."
    ],
    alerts: [
      {
        type: "info",
        content: "Espaços em branco e pontuação também contam como caracteres e ocupam um índice no vetor."
      },
      {
        type: "warning",
        content: "Em linguagens como C, você precisa de um caractere especial '\\0' no final para indicar o fim da String."
      },
      {
        type: "tip",
        content: "Use `.lower()` ou `.upper()` ao comparar caracteres para evitar problemas com letras maiúsculas/minúsculas."
      }
    ]
  }
];
