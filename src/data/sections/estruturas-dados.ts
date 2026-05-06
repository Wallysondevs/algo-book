import { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "intro-estruturas-dados",
    section: "estruturas-dados",
    title: "Por que Estruturas de Dados Importam?",
    difficulty: "iniciante",
    subtitle: "A organização por trás da eficiência",
    intro: `Imagine que você possui uma biblioteca com milhares de livros, mas todos estão jogados em uma pilha enorme no centro da sala. Para encontrar um título específico, você teria que revirar cada livro, um por um. Agora, imagine esses mesmos livros organizados em prateleiras, por ordem alfabética ou gênero. A diferença entre esses dois cenários é o que chamamos de Estrutura de Dados.

Estruturas de Dados são formas organizadas de armazenar, gerenciar e processar informações no computador. Assim como usamos gaveteiros para roupas, pastas para documentos e caixas para ferramentas, na programação escolhemos estruturas diferentes para resolver problemas específicos. A escolha correta pode transformar um programa lento e pesado em uma aplicação rápida e eficiente.

Pense em um organizador físico: uma pilha de pratos é ótima se você só precisa pegar o prato de cima. Uma fila de banco é justa para garantir que quem chegou primeiro seja atendido primeiro. Uma árvore genealógica é perfeita para mostrar hierarquias e descendências. Cada um desses objetos do mundo real possui um equivalente digital que os programadores utilizam diariamente.

Sem estruturas de dados adequadas, algoritmos complexos seriam impossíveis de implementar. Elas são os alicerces sobre os quais construímos softwares como redes sociais, motores de busca e sistemas bancários. Cada dado que inserimos na internet, seja uma mensagem ou uma transação, passa por diversas camadas de organização para chegar ao seu destino com segurança e velocidade.

Nesta seção, exploraremos as estruturas fundamentais que todo programador deve conhecer. Vamos entender como elas funcionam "por baixo do capô", comparando suas vantagens e desvantagens. Ao final, você terá a capacidade de olhar para um problema e saber exatamente qual "organizador digital" deve retirar da sua caixa de ferramentas.`,
    codes: [
      {
        lang: "pseudocodigo",
        label: "Exemplo de Armazenamento Simples (Array)",
        code: `Lista compras = ["Arroz", "Feijão", "Macarrão"]
Imprimir compras[0] # Acesso direto pelo índice`
      },
      {
        lang: "python",
        label: "Comparação de Acesso: Lista vs. Dicionário",
        code: `# Lista: bom para ordem, lento para busca por valor
lista = ["Alice", "Bob", "Charlie"]
# Dicionário: ótimo para busca rápida por chave
idades = {"Alice": 25, "Bob": 30, "Charlie": 35}

print(idades["Alice"]) # Acesso instantâneo`
      }
    ],
    points: [
      "Estruturas definem como os dados são organizados na memória.",
      "A escolha impacta diretamente a performance do algoritmo.",
      "Análogo a organizadores físicos: gavetas, pilhas e filas.",
      "Permitem operações como inserção, remoção, busca e ordenação.",
      "Diferentes estruturas resolvem diferentes gargalos de eficiência.",
      "São essenciais para lidar com grandes volumes de dados (Big Data).",
      "Combinar estruturas com algoritmos certos é o segredo do software de qualidade."
    ],
    alerts: [
      {
        type: "info",
        content: "A famosa frase de Linus Torvalds: 'Programadores ruins se preocupam com o código. Bons programadores se preocupam com estruturas de dados e seus relacionamentos'."
      },
      {
        type: "tip",
        content: "Sempre pergunte: 'O que farei mais com esses dados? Buscar? Inserir? Remover?' para escolher a melhor estrutura."
      },
      {
        type: "warning",
        content: "Usar a estrutura errada pode tornar seu programa centenas de vezes mais lento."
      }
    ]
  },
  {
    slug: "pilha-stack",
    section: "estruturas-dados",
    title: "Pilha (Stack): LIFO",
    difficulty: "iniciante",
    subtitle: "O último a entrar é o primeiro a sair",
    intro: `A Pilha, ou Stack em inglês, é uma estrutura de dados linear que segue o princípio LIFO (Last-In, First-Out). Isso significa que o último elemento inserido é obrigatoriamente o primeiro a ser removido. É exatamente como uma pilha de pratos em um restaurante: se você quiser o prato que está na base, precisa primeiro remover todos os que estão acima dele para evitar um desastre.

No dia a dia da computação, você usa pilhas constantemente sem perceber. O botão "Voltar" do seu navegador funciona como uma pilha: cada site visitado é "empilhado". Quando você clica em voltar, o site atual é removido e o anterior (que estava logo abaixo) aparece. O recurso de "Desfazer" (Ctrl+Z) em editores de texto também é um exemplo clássico de uso de pilhas.

Operacionalmente, uma pilha é muito simples. Temos basicamente duas ações principais: 'Push' (empilhar), que coloca um item no topo, e 'Pop' (desempilhar), que remove o item do topo. Também é comum termos a operação 'Peek' (espiar), que apenas olha qual é o elemento do topo sem removê-lo.

As pilhas são fundamentais para a execução de funções em quase todas as linguagens de programação. Quando uma função chama outra, o computador usa a "Pilha de Chamadas" (Call Stack) para lembrar onde deve retornar quando a função terminar. Se você empilhar funções demais sem liberá-las, ocorre o famoso erro de "Estouro de Pilha" (Stack Overflow).

A simplicidade da pilha é sua maior força. Ela garante uma ordem estrita e previsível de manipulação de dados, sendo a estrutura ideal para problemas que exigem reversão de estados ou processamento de estruturas aninhadas, como parênteses em expressões matemáticas.`,
    codes: [
      {
        lang: "text",
        label: "Representação Visual da Pilha",
        code: `Operação: Push(D)
   |   |        | D |  ← novo topo
   | C |        | C |
   | B |   =>   | B |
   | A |        | A |
   |___|        |___|
 (Antes)      (Depois)`
      },
      {
        lang: "python",
        label: "Implementação de Pilha usando Lista",
        code: `class Pilha:
    def __init__(self):
        self.itens = []

    def empilhar(self, item):
        self.itens.append(item)

    def desempilhar(self):
        if not self.esta_vazia():
            return self.itens.pop()
        return None

    def topo(self):
        return self.itens[-1] if self.itens else None

    def esta_vazia(self):
        return len(self.itens) == 0

p = Pilha()
p.empilhar("Livro A")
p.empilhar("Livro B")
print(p.desempilhar()) # Saída: "Livro B"`
      },
      {
        lang: "text",
        label: "ASCII Art: Pilha",
        code: `    |   |
    | C |  ← topo
    | B |
    | A |  ← base
    |___|`
      }
    ],
    points: [
      "Princípio LIFO: Last-In, First-Out.",
      "Acesso restrito: Apenas o elemento do topo é visível/removível.",
      "Operação Push: Adiciona ao topo.",
      "Operação Pop: Remove do topo.",
      "Operação Peek: Observa o topo sem remover.",
      "Uso comum: Botão voltar, Desfazer (Undo), Pilha de Chamadas.",
      "Complexidade: O(1) para inserção e remoção no topo."
    ],
    alerts: [
      {
        type: "info",
        content: "Complexidade: Push, Pop e Peek são todos O(1), ou seja, tempo constante."
      },
      {
        type: "tip",
        content: "Use pilhas sempre que precisar processar dados na ordem inversa à que foram recebidos."
      },
      {
        type: "warning",
        content: "Tentar fazer Pop em uma pilha vazia causará um erro conhecido como 'Stack Underflow'."
      }
    ]
  },
  {
    slug: "fila-queue",
    section: "estruturas-dados",
    title: "Fila (Queue): FIFO",
    difficulty: "iniciante",
    subtitle: "O primeiro a entrar é o primeiro a sair",
    intro: `A Fila, ou Queue, opera sob o princípio FIFO (First-In, First-Out). É a estrutura mais intuitiva do ponto de vista social: pense na fila de um banco ou de um supermercado. Quem chega primeiro deve ser atendido primeiro. Qualquer tentativa de remover alguém do meio da fila é considerada "furar fila" e viola a lógica da estrutura.

Diferente da pilha, onde as operações acontecem em apenas uma extremidade, na fila as coisas acontecem nas duas pontas. Novos elementos entram pelo "fundo" (Rear/Enqueue) e elementos antigos saem pela "frente" (Front/Dequeue). Essa característica a torna perfeita para qualquer sistema que precise gerenciar recursos compartilhados.

No mundo da tecnologia, as filas estão em toda parte. Uma impressora compartilhada usa uma fila para decidir qual documento imprimir primeiro. O sistema operacional usa filas para gerenciar processos que aguardam o uso da CPU. Até mesmo pacotes de dados viajando pela internet ficam em filas nos roteadores enquanto esperam sua vez de serem transmitidos.

A manipulação de uma fila requer cuidado com a performance. Se implementada de forma ingênua em um array, remover o primeiro elemento pode exigir que todos os outros sejam movidos uma posição para frente, o que é lento. Por isso, estruturas mais avançadas como listas ligadas ou buffers circulares são frequentemente usadas para manter a eficiência.

As filas garantem justiça e ordem. Elas são a espinha dorsal de sistemas de mensagens asíncronas e processamento em lote, permitindo que diferentes partes de um sistema se comuniquem de forma organizada, mesmo que operem em velocidades diferentes.`,
    codes: [
      {
        lang: "text",
        label: "Representação Visual da Fila",
        code: `Operação: Enqueue(D)
   Frente           Fundo
     [ A, B, C ]  <-- (Entrada)
     
   Resultado: [ A, B, C, D ]
   
Operação: Dequeue()
     [ A, B, C, D ]  --> (Saída)
     
   Resultado: [ B, C, D ]`
      },
      {
        lang: "python",
        label: "Implementação de Fila",
        code: `from collections import deque

class Fila:
    def __init__(self):
        self.itens = deque()

    def entrar(self, item):
        self.itens.append(item)

    def sair(self):
        if self.itens:
            return self.itens.popleft()
        return None

f = Fila()
f.entrar("Pessoa 1")
f.entrar("Pessoa 2")
print(f.sair()) # Saída: "Pessoa 1"`
      },
      {
        lang: "text",
        label: "ASCII Art: Fila",
        code: `Saída ← [ A | B | C | D ] ← Entrada
        Frente       Fundo`
      }
    ],
    points: [
      "Princípio FIFO: First-In, First-Out.",
      "Entrada pelo fundo (Enqueue).",
      "Saída pela frente (Dequeue).",
      "Mantém a ordem cronológica dos dados.",
      "Uso comum: Filas de impressão, processamento de tarefas, buffers.",
      "Justiça: Garante que nenhum dado espere indefinidamente (se a fila andar).",
      "Complexidade: O(1) para entrar e sair se bem implementada."
    ],
    alerts: [
      {
        type: "info",
        content: "Complexidade: Enqueue e Dequeue são O(1) quando usamos estruturas como listas duplamente ligadas."
      },
      {
        type: "tip",
        content: "Em Python, use 'collections.deque' para filas performáticas em vez de listas comuns."
      },
      {
        type: "success",
        content: "Filas são essenciais para desacoplar sistemas: um envia dados, o outro processa no seu tempo."
      }
    ]
  },
  {
    slug: "lista-ligada",
    section: "estruturas-dados",
    title: "Lista Ligada (Linked List)",
    difficulty: "iniciante",
    subtitle: "Dados conectados por elos",
    intro: `Arrays (ou listas tradicionais) são como casas em uma rua numerada: elas estão uma ao lado da outra em locais fixos da memória. Já uma Lista Ligada é como uma caça ao tesouro: cada item (nó) contém o dado e um "bilhete" (ponteiro) dizendo onde encontrar o próximo item. Os itens podem estar espalhados por qualquer lugar da memória, contanto que o elo entre eles não seja quebrado.

Essa estrutura é composta por pequenos blocos chamados "Nós". Cada nó tem duas partes: o valor que queremos guardar e o endereço do próximo nó. O primeiro nó é chamado de "Cabeça" (Head). Para chegar ao terceiro item, você obrigatoriamente tem que passar pelo primeiro e pelo segundo. Não há "atalhos" ou acesso direto pelo índice como nos arrays.

A grande vantagem das listas ligadas é a flexibilidade. Inserir ou remover um item no meio de um array exige mover milhares de outros itens para "abrir espaço". Em uma lista ligada, basta mudar para onde o "bilhete" do nó anterior aponta. É como mudar a ordem de vagões em um trem: você só precisa soltar os ganchos e reconectá-los.

Existem variações importantes: a Lista Simplesmente Ligada (aponta apenas para o próximo), a Lista Duplamente Ligada (cada nó conhece o próximo e o anterior) e a Lista Circular (o último aponta de volta para o primeiro). Cada uma oferece diferentes facilidades de navegação ao custo de um pouco mais de memória.

Embora o acesso aleatório seja lento, as listas ligadas são a base para construir outras estruturas complexas, como Pilhas e Filas dinâmicas. Elas brilham em situações onde o tamanho dos dados é desconhecido ou muda constantemente, permitindo que a memória seja usada de forma muito mais eficiente e fragmentada.`,
    codes: [
      {
        lang: "text",
        label: "Representação Visual de Nó",
        code: `+---------+      +---------+      +---------+
| Valor A |      | Valor B |      | Valor C |
| Proximo +----->| Proximo +----->| Proximo +-----> NULL
+---------+      +---------+      +---------+
  (Head)`
      },
      {
        lang: "python",
        label: "Estrutura Básica de um Nó",
        code: `class No:
    def __init__(self, dado):
        self.dado = dado
        self.proximo = None

class ListaLigada:
    def __init__(self):
        self.cabeca = None

    def inserir_inicio(self, dado):
        novo_no = No(dado)
        novo_no.proximo = self.cabeca
        self.cabeca = novo_no`
      },
      {
        lang: "text",
        label: "ASCII Art: Remoção de Nó",
        code: `Antes: [A] -> [B] -> [C]
Ação: Remover B
Passo: Fazer o 'proximo' de A apontar para C
Depois: [A] --------> [C] (B foi desconectado)`
      }
    ],
    points: [
      "Composta por nós (dado + ponteiro).",
      "Alocação dinâmica: Itens não precisam ser vizinhos na memória.",
      "Cabeça (Head): O ponto de entrada da lista.",
      "Inserção/Remoção: Muito rápidas se você já estiver no local (O(1)).",
      "Acesso: Lento (O(n)), pois exige percorrer a lista desde o início.",
      "Variações: Simples, Dupla e Circular.",
      "Memória: Usa mais memória que arrays (devido aos ponteiros)."
    ],
    alerts: [
      {
        type: "info",
        content: "Complexidade de Busca: O(n). Diferente de arrays, você não pode ir direto ao índice 100."
      },
      {
        type: "warning",
        content: "Cuidado com o 'Ponteiro Perdido': se você perder a referência da Cabeça, perderá toda a lista da memória."
      },
      {
        type: "tip",
        content: "Use Listas Ligadas quando a inserção/remoção frequente for mais importante que o acesso rápido por índice."
      }
    ]
  },
  {
    slug: "arvores-conceito",
    section: "estruturas-dados",
    title: "Árvores: Hierarquia de Dados",
    difficulty: "intermediario",
    subtitle: "Organizando dados em níveis",
    intro: `Diferente das pilhas e filas, que são lineares (um dado após o outro), as Árvores são estruturas de dados hierárquicas. Imagine o sistema de pastas do seu computador: a pasta "C:" contém várias pastas, que contêm subpastas e arquivos. Essa relação de "pai e filho" é a essência de uma árvore. Na natureza, as árvores crescem para cima; na computação, curiosamente, nós as desenhamos de cabeça para baixo.

O topo da árvore é chamado de Raiz (Root). Dela saem as ramificações que levam aos outros nós. Um nó que possui filhos é chamado de Pai, e os nós na base que não possuem descendentes são chamados de Folhas (Leaves). Cada conexão entre nós é chamada de Aresta. Essa organização permite representar relações complexas de subordinação e categoria.

As árvores são incrivelmente eficientes para buscas. Se você organizar seus dados seguindo certas regras (como "valores menores à esquerda, maiores à direita"), você pode descartar metade da árvore a cada passo da sua busca. É por isso que bancos de dados e sistemas de arquivos utilizam variações de árvores para encontrar informações entre milhões de registros em frações de segundo.

Além da organização de arquivos, árvores são usadas para representar a estrutura de documentos HTML (o DOM), processar expressões matemáticas e até em inteligência artificial para árvores de decisão. Elas permitem que o computador "pense" em categorias e subcategorias, refletindo como nós, humanos, frequentemente organizamos o conhecimento.

Explorar uma árvore exige algoritmos específicos de travessia. Você pode visitar os nós em diferentes ordens: profundidade (indo o mais longe possível em um ramo antes de voltar) ou largura (visitando todos os irmãos de um nível antes de descer). Dominar árvores é subir um degrau importante na maturidade como desenvolvedor.`,
    codes: [
      {
        lang: "text",
        label: "Anatomia de uma Árvore",
        code: `       [ Raiz ]          <-- Nível 0
       /      \\
    [Pai A] [Pai B]      <-- Nível 1
    /    \\       \\
 [Folha1][Folha2] [Folha3] <-- Nível 2`
      },
      {
        lang: "python",
        label: "Definição de um Nó de Árvore",
        code: `class NoArvore:
    def __init__(self, valor):
        self.valor = valor
        self.filhos = []

raiz = NoArvore("Documentos")
raiz.filhos.append(NoArvore("Trabalho"))
raiz.filhos.append(NoArvore("Fotos"))`
      }
    ],
    points: [
      "Estrutura Não-Linear e Hierárquica.",
      "Raiz (Root): O nó único no topo.",
      "Folhas (Leaves): Nós sem filhos na extremidade.",
      "Relação Pai-Filho: Define a subordinação.",
      "Caminho: Sequência de nós da raiz até um objetivo.",
      "Altura: O maior número de níveis da raiz até uma folha.",
      "Subárvore: Qualquer nó e seus descendentes formam uma árvore menor."
    ],
    alerts: [
      {
        type: "info",
        content: "A altura da árvore impacta diretamente a performance da busca."
      },
      {
        type: "tip",
        content: "Visualize a árvore de arquivos do seu computador para entender a hierarquia na prática."
      },
      {
        type: "warning",
        content: "Árvores desbalanceadas (muito longas para um lado) perdem sua vantagem de performance."
      }
    ]
  },
  {
    slug: "arvore-binaria",
    section: "estruturas-dados",
    title: "Árvore Binária de Busca",
    difficulty: "intermediario",
    subtitle: "Busca eficiente com divisões binárias",
    intro: `A Árvore Binária de Busca (BST - Binary Search Tree) é um tipo especial de árvore onde cada nó tem, no máximo, dois filhos: o da esquerda e o da direita. Mas o que a torna realmente poderosa é a sua regra de ordenação: para qualquer nó, todos os valores na sua subárvore esquerda são menores que o dele, e todos os valores na sua subárvore direita são maiores.

Essa regra transforma a árvore em uma máquina de busca veloz. Imagine que você procura o número 42. Você começa na raiz. Se a raiz for 50, você sabe instantaneamente que o 42 só pode estar no lado esquerdo. Com um único "olhar", você descartou metade dos dados. É o mesmo princípio da busca binária, mas aplicado em uma estrutura que aceita inserções dinâmicas facilmente.

As operações principais em uma BST são Inserir, Buscar e Remover. Ao inserir um novo valor, você "navega" pela árvore comparando o valor com cada nó até encontrar um espaço vazio (uma folha) que respeite a regra de ordenação. Isso mantém os dados sempre organizados sem a necessidade de reordenar tudo a cada nova entrada.

No entanto, as BSTs têm um ponto fraco: se você inserir dados já ordenados (como 1, 2, 3, 4, 5), a árvore se tornará apenas uma linha reta para a direita. Nesse estado, ela perde sua eficiência e se comporta como uma lista ligada. Para evitar isso, programadores usam versões "auto-balanceadas" como as Árvores AVL ou Red-Black, que se reorganizam sozinhas para ficarem sempre cheias e curtas.

Estudar Árvores Binárias é fundamental para entender como índices de bancos de dados funcionam. Elas são a ponte entre a simplicidade das listas e a complexidade dos sistemas de busca de alta performance que usamos hoje em dia.`,
    codes: [
      {
        lang: "text",
        label: "Exemplo de BST",
        code: `        [ 50 ]
       /      \\
    [ 30 ]  [ 70 ]
    /    \\  /    \\
  [20] [40][60] [80]
  
  (Tudo à esquerda de 50 é < 50)
  (Tudo à direita de 50 é > 50)`
      },
      {
        lang: "python",
        label: "Busca em Árvore Binária",
        code: `def buscar(raiz, alvo):
    # Caso Base: raiz é nula ou o valor é encontrado
    if raiz is None or raiz.valor == alvo:
        return raiz
    
    # Valor maior que a raiz
    if raiz.valor < alvo:
        return buscar(raiz.direita, alvo)
    
    # Valor menor que a raiz
    return buscar(raiz.esquerda, alvo)`
      },
      {
        lang: "python",
        label: "Inserção em BST",
        code: `class No:
    def __init__(self, chave):
        self.esquerda = None
        self.direita = None
        self.valor = chave

def inserir(raiz, chave):
    if raiz is None:
        return No(chave)
    if chave < raiz.valor:
        raiz.esquerda = inserir(raiz.esquerda, chave)
    else:
        raiz.direita = inserir(raiz.direita, chave)
    return raiz`
      }
    ],
    points: [
      "Cada nó tem no máximo 2 filhos.",
      "Esquerda: Valores menores que o nó pai.",
      "Direita: Valores maiores que o nó pai.",
      "Busca Eficiente: Média de O(log n).",
      "Inserção Dinâmica: Mantém a ordem durante o crescimento.",
      "Travessia em Ordem: Resulta nos dados perfeitamente ordenados.",
      "Risco: Pode ficar desbalanceada se os dados entrarem em ordem específica."
    ],
    alerts: [
      {
        type: "info",
        content: "Complexidade ideal: O(log n). No pior caso (desbalanceada): O(n)."
      },
      {
        type: "tip",
        content: "Para manter a árvore eficiente, estude sobre Árvores AVL ou Árvores Rubro-Negras."
      },
      {
        type: "success",
        content: "BSTs são a base para implementar conjuntos (Sets) e mapas (Maps) em muitas linguagens."
      }
    ]
  },
  {
    slug: "grafo-intro",
    section: "estruturas-dados",
    title: "Grafos: Conexões e Relacionamentos",
    difficulty: "intermediario",
    subtitle: "Modelando redes e conexões complexas",
    intro: `Se as árvores representam hierarquias, os Grafos representam redes. Em um grafo, qualquer ponto pode estar conectado a qualquer outro ponto. É a estrutura definitiva para modelar o mundo real: mapas de estradas, redes de amigos no Facebook, conexões entre neurônios ou links entre páginas da web (o que o Google usa para o seu ranking).

Um grafo é formado por dois componentes: Vértices (os pontos ou "nós") e Arestas (as linhas que conectam os pontos). As arestas podem ter direção (como uma rua de mão única) ou peso (como a distância em quilômetros entre duas cidades). Essa flexibilidade permite que grafos resolvam problemas que outras estruturas nem conseguem descrever.

Imagine o GPS do seu celular calculando a rota mais rápida. Ele vê as cidades como vértices e as estradas como arestas com pesos (tempo de trânsito). O algoritmo de busca em grafos navega por essas conexões para encontrar o caminho com a menor soma de pesos. É a matemática das conexões em sua forma mais pura e aplicada.

Existem duas formas principais de representar um grafo no computador: uma Matriz de Adjacência (uma tabela onde marcamos quem é vizinho de quem) ou uma Lista de Adjacência (onde cada vértice guarda uma lista de seus amigos). A escolha depende de quão "conectada" é a sua rede; se houver poucas conexões, a lista economiza muita memória.

Trabalhar com grafos abre as portas para resolver problemas complexos como detecção de fraudes bancárias (seguindo o rastro do dinheiro), recomendação de produtos em e-commerces ("quem comprou isso também comprou aquilo") e até a logística de entrega de mercadorias. É a estrutura de dados das grandes interconexões da era digital.`,
    codes: [
      {
        lang: "text",
        label: "Visualização de um Grafo",
        code: ` (A) --- (B)
  |    /  |
  |  (C)  |
  | /     |
 (D) --- (E)`
      },
      {
        lang: "python",
        label: "Grafo como Lista de Adjacência",
        code: `# Dicionário onde a chave é o vértice e o valor é a lista de vizinhos
grafo = {
    'A': ['B', 'D'],
    'B': ['A', 'C', 'E'],
    'C': ['B', 'D'],
    'D': ['A', 'C', 'E'],
    'E': ['B', 'D']
}`
      },
      {
        lang: "python",
        label: "Verificando Conexão",
        code: `def estao_conectados(grafo, v1, v2):
    return v2 in grafo.get(v1, [])

print(estao_conectados(grafo, 'A', 'B')) # True
print(estao_conectados(grafo, 'A', 'C')) # False`
      }
    ],
    points: [
      "Vértices: Os objetos ou pontos da rede.",
      "Arestas: As conexões entre os vértices.",
      "Direcionado vs Não-Direcionado: Indica se a conexão tem sentido único.",
      "Pesos: Valores atribuídos às arestas (custo, distância, tempo).",
      "Ciclo: Um caminho que volta ao ponto de partida.",
      "Adjacência: Quando dois vértices estão conectados diretamente.",
      "Aplicações: Redes Sociais, GPS, Internet, Logística."
    ],
    alerts: [
      {
        type: "info",
        content: "O famoso 'Problema do Caixeiro Viajante' é um desafio clássico de grafos."
      },
      {
        type: "tip",
        content: "Para encontrar o caminho mais curto, pesquise pelo Algoritmo de Dijkstra."
      },
      {
        type: "warning",
        content: "Grafos podem crescer muito rápido. O gerenciamento de memória é crítico em redes gigantes."
      }
    ]
  },
  {
    slug: "tabela-hash",
    section: "estruturas-dados",
    title: "Tabela Hash: Acesso Instantâneo",
    difficulty: "intermediario",
    subtitle: "O segredo por trás da busca ultrarrápida",
    intro: `A Tabela Hash (ou Tabela de Dispersão) é o "superpoder" da organização de dados. Imagine um guarda-volumes de um grande estádio. Quando você entrega sua bolsa, o atendente não a joga em qualquer lugar; ele usa uma regra baseada no seu nome para escolher um armário específico. Quando você volta, ele não precisa procurar em todos os armários; ele aplica a mesma regra ao seu nome e vai direto ao armário certo.

Na computação, essa "regra" é chamada de Função Hash. Ela pega uma chave (como um nome ou CPF) e a transforma em um número (o índice do array). Isso permite que o acesso aos dados seja feito em tempo constante, ou seja, não importa se você tem 10 ou 10 milhões de itens, o tempo para encontrar um valor é praticamente o mesmo.

No entanto, há um desafio: e se a Função Hash der o mesmo número para dois nomes diferentes? Isso é chamado de Colisão. Boas tabelas hash têm estratégias para lidar com isso, como criar uma pequena lista ligada dentro do armário ou procurar o próximo armário vazio. Uma função hash de qualidade é aquela que distribui os itens de forma bem espalhada para evitar esses conflitos.

Você usa tabelas hash o tempo todo. Em Python, elas são os 'Dicionários'; em JavaScript, os 'Objects' e 'Maps'. Elas são usadas para guardar senhas de forma segura (armazenando apenas o resultado do hash), gerenciar caches de sites e em quase todas as situações onde a velocidade de busca é a prioridade máxima.

A Tabela Hash sacrifica um pouco de memória (ela precisa de espaços vazios para funcionar bem) em troca de uma velocidade incomparável. É a escolha ideal quando você tem uma chave única e precisa recuperar informações associadas a ela no menor tempo possível.`,
    codes: [
      {
        lang: "text",
        label: "Conceito de Hash",
        code: `Chave: "Alice"  --> [ Função Hash ] --> Índice: 4
Chave: "Bob"    --> [ Função Hash ] --> Índice: 1

Array Interno:
[0] : null
[1] : { "Bob": "9999-0000" }
[2] : null
[3] : null
[4] : { "Alice": "8888-1111" }`
      },
      {
        lang: "python",
        label: "Exemplo Simples de Função Hash",
        code: `def minha_hash(texto, tamanho_tabela):
    # Soma os valores ASCII de cada caractere
    soma = sum(ord(c) for c in texto)
    return soma % tamanho_tabela

# "Alice" sempre resultará no mesmo índice para uma tabela de mesmo tamanho
print(minha_hash("Alice", 10))`
      },
      {
        lang: "python",
        label: "Dicionários (Hash Maps) em Python",
        code: `# A busca aqui é O(1) - tempo constante
contatos = {
    "Emergencia": "190",
    "Bombeiros": "193"
}

print(contatos["Emergencia"])`
      }
    ],
    points: [
      "Chave-Valor: Associa uma etiqueta única a um dado.",
      "Função Hash: Transforma a chave em um índice numérico.",
      "Acesso Direto: Busca, inserção e remoção em O(1) na média.",
      "Colisão: Quando duas chaves resultam no mesmo índice.",
      "Estratégias de Colisão: Encadeamento ou Endereçamento Aberto.",
      "Uso comum: Dicionários, Conjuntos, Caches, Segurança (Hashes).",
      "Eficiência: Depende de uma boa distribuição da função hash."
    ],
    alerts: [
      {
        type: "info",
        content: "A performance média é O(1), mas se houver muitas colisões pode cair para O(n)."
      },
      {
        type: "danger",
        content: "Nunca use funções hash simples (como MD5 ou SHA1) para armazenar senhas; use algoritmos específicos como BCrypt."
      },
      {
        type: "tip",
        content: "Mantenha sua tabela hash com pelo menos 25% de espaço livre para minimizar colisões."
      }
    ]
  }
];
