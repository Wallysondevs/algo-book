import { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "nomeacao-e-clareza",
    section: "boas-praticas",
    title: "Nomeação e Clareza: Código que se Lê",
    difficulty: "iniciante",
    subtitle: "Escreva código para humanos, não apenas para máquinas.",
    intro: `Escrever código é como cozinhar para um grande banquete. Se você deixar os temperos em potes sem etiqueta e as facas espalhadas pela bancada, a cozinha rapidamente se tornará um caos. No desenvolvimento de software, a clareza é o ingrediente principal que garante que sua "receita" possa ser seguida por outros chefs (ou por você mesmo no futuro).

Um dos pilares dessa clareza é a nomeação. Dar nomes a variáveis e funções é uma das tarefas mais difíceis e importantes na programação. Um nome ruim como 'x' ou 'data' é como um pote de tempero sem rótulo: você sabe que tem algo ali, mas não sabe o que é sem ter que provar (ou ler todo o código ao redor).

Nomes bons devem ser autoexplicativos. Em vez de 'var1', use 'quantidadeDeAlunosAprovados'. Em vez de 'f()', use 'calcularMediaSalarial()'. Quando o código é bem nomeado, ele se lê como um livro de receitas bem organizado, onde cada passo é claro e cada ingrediente tem seu propósito definido.

Pense no seu código como uma casa que você está construindo. Se você colocar as janelas no chão e a porta no telhado, a casa pode até ficar em pé, mas ninguém conseguirá morar nela. Organização e clareza transformam um amontoado de comandos em uma estrutura lógica e habitável por outros desenvolvedores.

Neste capítulo, aprenderemos a fugir dos nomes genéricos e a abraçar nomes que contam uma história. Veremos como a consistência e a intenção por trás de cada palavra escolhida podem reduzir drasticamente o tempo gasto tentando entender o que o programa faz. Afinal, passamos muito mais tempo lendo código do que escrevendo.`,
    codes: [
      {
        lang: "python",
        code: `# RUIM: Nomes genéricos e confusos
d = 10
v = 5
def f(a, b):
    return a * b
r = f(d, v)
print(r)`,
        label: "Exemplo de Nomeação Ruim"
      },
      {
        lang: "python",
        code: `# BOM: Nomes descritivos e claros
dias_trabalhados = 10
valor_diaria = 5
def calcular_pagamento_total(dias, valor):
    return dias * valor
pagamento_total = calcular_pagamento_total(dias_trabalhados, valor_diaria)
print(pagamento_total)`,
        label: "Exemplo de Nomeação Boa"
      },
      {
        lang: "python",
        code: `# RUIM: Abreviações excessivas
def g_u_info(u):
    p = u.p
    n = u.n
    return f"{n} ({p})"`,
        label: "Evite Abreviações Misteriosas"
      },
      {
        lang: "python",
        code: `# BOM: Termos completos e explícitos
def obter_informacoes_usuario(usuario):
    profissao = usuario.profissao
    nome = usuario.nome
    return f"{nome} ({profissao})"`,
        label: "Prefira Clareza sobre Brevidade"
      }
    ],
    points: [
      "Variáveis devem representar o 'o que' elas armazenam.",
      "Funções devem começar com verbos (ex: calcular, buscar, salvar).",
      "Evite abreviações que não sejam universais (ex: 'msg' é ok, 'usr_ctx_id' é ruim).",
      "Use um padrão consistente (camelCase ou snake_case).",
      "O código deve ser autoexplicativo o máximo possível.",
      "Nomes devem ser precisos: evite 'fazerTudo()' ou 'processar()'.",
      "Lembre-se: o próximo a ler seu código pode ser você mesmo daqui a 6 meses."
    ],
    alerts: [
      {
        type: "tip",
        content: "Se você precisa de um comentário para explicar o que uma variável faz, ela provavelmente tem um nome ruim."
      },
      {
        type: "info",
        content: "A maioria das empresas adota um 'Guia de Estilo' que define como os nomes devem ser escritos."
      },
      {
        type: "warning",
        content: "Nomes muito longos podem ser cansativos, mas nomes curtos e misteriosos são perigosos."
      }
    ]
  },
  {
    slug: "comentarios-documentacao",
    section: "boas-praticas",
    title: "Comentários e Documentação",
    difficulty: "iniciante",
    subtitle: "Explicando o 'porquê', não o 'como'.",
    intro: `Comentários no código são como as notas de rodapé em um livro técnico. Eles não devem repetir o que o texto principal já diz, mas sim oferecer contexto extra, explicar decisões difíceis ou avisar sobre perigos escondidos. Se o seu código é a receita, o comentário é a dica do chef: "não abra o forno nos primeiros 10 minutos".

Muitos iniciantes cometem o erro de comentar o óbvio. Escrever \`x = x + 1 # aumenta x em 1\` é como colocar uma etiqueta "porta" em uma porta. É redundante e polui o visual. Bons comentários focam no motivo por trás de uma lógica complexa: "usamos este ajuste de +1 para compensar o índice zero da lista externa".

A documentação vai um passo além. Ela é o manual de instruções do seu sistema. Enquanto os comentários vivem dentro do código, a documentação explica como as peças se encaixam e como outros desenvolvedores podem usar suas funções e classes sem precisar ler linha por linha da implementação.

Imagine que você está em uma biblioteca imensa. Sem um catálogo ou etiquetas nas estantes, você nunca encontraria o livro que precisa. A documentação serve como esse catálogo, permitindo que a equipe entenda a arquitetura e as regras de negócio do projeto de forma rápida e eficiente.

Neste capítulo, veremos a diferença entre comentários úteis e ruído visual. Aprenderemos padrões de documentação (como Docstrings em Python) que facilitam a vida de quem utiliza nosso código. Lembre-se: o objetivo final é reduzir a carga cognitiva de quem lê seu trabalho.`,
    codes: [
      {
        lang: "python",
        code: `# RUIM: Comentando o óbvio
total = a + b # Soma a e b e guarda em total
if total > 100: # Se total for maior que 100
    print("Caro") # Imprime caro`,
        label: "O que NÃO fazer com comentários"
      },
      {
        lang: "python",
        code: `# BOM: Explicando o motivo (o 'porquê')
# Aplicamos um desconto de 5% para pagamentos à vista
# conforme a regra de negócio definida na reunião de 10/05
if metodo_pagamento == "AVISTA":
    preco_final = preco_base * 0.95`,
        label: "Comentários que agregam valor"
      },
      {
        lang: "python",
        code: `def calcular_imc(peso, altura):
    """
    Calcula o Índice de Massa Corporal (IMC).
    
    Argumentos:
        peso (float): O peso da pessoa em kg.
        altura (float): A altura da pessoa em metros.
        
    Retorna:
        float: O valor do IMC calculado.
    """
    return peso / (altura ** 2)`,
        label: "Exemplo de Documentação (Docstring)"
      },
      {
        lang: "python",
        code: `# TODO: Implementar integração com a API de frete
# Este bloco é temporário até a chave da API ser liberada
valor_frete = 15.00`,
        label: "Usando Comentários de Tarefa (TODO)"
      }
    ],
    points: [
      "Não comente o óbvio; deixe o código falar por si.",
      "Use comentários para explicar decisões de design complexas.",
      "Mantenha os comentários atualizados (comentário mentiroso é pior que nenhum).",
      "Use Docstrings para documentar a finalidade de funções e classes.",
      "Utilize TODO para marcar pendências conhecidas.",
      "Evite 'bloqueios' de código comentado; use controle de versão (Git) para isso.",
      "Escreva comentários em linguagem clara e profissional."
    ],
    alerts: [
      {
        type: "danger",
        content: "Nunca deixe senhas, chaves de API ou dados sensíveis em comentários!"
      },
      {
        type: "info",
        content: "Bons nomes de funções reduzem drasticamente a necessidade de comentários."
      },
      {
        type: "tip",
        content: "Tente escrever seu código de forma tão clara que os comentários pareçam quase desnecessários."
      }
    ]
  },
  {
    slug: "depuracao-debugging",
    section: "boas-praticas",
    title: "Depuração: Encontrando e Corrigindo Erros",
    difficulty: "iniciante",
    subtitle: "A arte de ser um detetive do seu próprio código.",
    intro: `Depurar, ou "debuggar", é uma das habilidades mais valiosas que um programador pode ter. Erros são inevitáveis, mas a forma como você os encara faz toda a diferença. É como ser um médico diagnosticando um paciente: você observa os sintomas, testa hipóteses e busca a causa raiz para aplicar o remédio correto.

O termo "bug" surgiu quando uma mariposa real causou um curto-circuito em um dos primeiros computadores da história. Hoje, os bugs são geralmente erros de lógica, digitação ou premissas erradas sobre os dados. Depurar é o processo sistemático de rastrear onde o comportamento do programa diverge do esperado.

A técnica mais simples e famosa é o "Print Debugging". Consiste em espalhar comandos de impressão pelo código para ver os valores das variáveis em tempo real. É como colocar rastreadores em um rio para ver por onde a água está correndo e onde ela está ficando presa.

No entanto, existem ferramentas mais sofisticadas chamadas Debuggers. Elas permitem pausar a execução do programa em qualquer linha (Breakpoints) e inspecionar todo o estado da memória. É como ter um controle remoto que pode parar o tempo e permitir que você olhe dentro de cada engrenagem da máquina enquanto ela funciona.

Nesta seção, exploraremos estratégias para isolar problemas, entender mensagens de erro e utilizar ferramentas para corrigir falhas de forma eficiente. Aprender a depurar vai transformar seus momentos de frustração em momentos de descoberta e aprendizado.`,
    codes: [
      {
        lang: "python",
        code: `# Técnica: Print Debugging
def dividir_lista(valores, divisor):
    print(f"DEBUG: Iniciando divisão com divisor={divisor}")
    resultados = []
    for val in valores:
        print(f"DEBUG: Processando valor {val}")
        resultados.append(val / divisor)
    return resultados`,
        label: "Rastreamento com Print"
      },
      {
        lang: "python",
        code: `# Exemplo de Erro Comum: IndexError
# Se a lista estiver vazia, isso vai quebrar
def obter_primeiro(lista):
    try:
        return lista[0]
    except IndexError:
        print("ERRO: Tentativa de acessar item em lista vazia!")
        return None`,
        label: "Tratamento de Erros Básico"
      },
      {
        lang: "python",
        code: `# Técnica: Isolamento de Variáveis
# Verificando o estado antes de um cálculo crítico
preco = 100
desconto = "10" # Erro proposital: string em vez de int

print(f"Tipo de preco: {type(preco)}")
print(f"Tipo de desconto: {type(desconto)}")
# preco_final = preco - desconto # Isso causaria um erro de tipo`,
        label: "Inspeção de Tipos e Valores"
      },
      {
        lang: "python",
        code: `# Técnica: Rastreamento de Execução
def algoritimo_complexo(n):
    passo = 0
    while n > 1:
        passo += 1
        if n % 2 == 0: n //= 2
        else: n = 3 * n + 1
        print(f"Passo {passo}: n = {n}")
    return passo`,
        label: "Acompanhando o Fluxo de Loops"
      }
    ],
    points: [
      "Leia a mensagem de erro (Stack Trace) do início ao fim.",
      "Identifique a linha exata onde o programa parou.",
      "Use prints para verificar valores de variáveis importantes.",
      "Aprenda a usar Breakpoints no seu editor de código.",
      "Isole o problema: crie um exemplo pequeno que reproduza o erro.",
      "Explique o código para alguém (ou para um pato de borracha - Rubber Ducking).",
      "Verifique as premissas: as entradas da função são o que você espera?"
    ],
    alerts: [
      {
        type: "info",
        content: "Muitos bugs são causados por confusão entre tipos de dados (ex: somar texto com número)."
      },
      {
        type: "warning",
        content: "Lembre-se de remover seus 'prints de debug' antes de enviar o código final!"
      },
      {
        type: "tip",
        content: "Se estiver travado, faça uma pausa. Muitas vezes a solução surge quando você se afasta da tela."
      }
    ]
  },
  {
    slug: "refatoracao",
    section: "boas-praticas",
    title: "Refatoração: Melhorando sem Quebrar",
    difficulty: "iniciante",
    subtitle: "Limpando o código enquanto mantém suas funcionalidades.",
    intro: `Refatorar é o processo de reestruturar o código existente sem alterar seu comportamento externo. É como reformar uma casa: você troca a fiação velha, pinta as paredes e reorganiza os móveis para torná-la mais funcional e bonita, mas ela continua sendo a mesma casa, servindo ao mesmo propósito.

Na programação, o código tende a "apodrecer" com o tempo à medida que novas funcionalidades são adicionadas às pressas. Refatorar é a prática de combater essa entropia. Você remove duplicidades, simplifica lógicas complexas e melhora a nomeação, garantindo que o sistema permaneça fácil de manter e evoluir.

Uma regra de ouro da refatoração é: faça mudanças pequenas e constantes. Nunca tente refatorar um sistema inteiro de uma vez. É melhor melhorar uma função hoje, outra amanhã, sempre garantindo que tudo continue funcionando após cada pequena alteração.

O benefício da refatoração não é imediato para o usuário final — o programa fará a mesma coisa de antes. O ganho é para a equipe de desenvolvimento. Um código limpo e bem estruturado é mais rápido de ler, mais fácil de testar e muito menos propenso a novos bugs.

Neste capítulo, aprenderemos a identificar "cheiros de código" (code smells) — sinais de que algo precisa ser melhorado. Veremos como extrair trechos repetidos para funções e como simplificar condições complexas. Refatorar é um hábito de higiene que todo bom programador deve cultivar.`,
    codes: [
      {
        lang: "python",
        code: `# ANTES: Código repetido e confuso
def calcular_area():
    r1 = 10 * 20
    print(f"Area 1: {r1}")
    r2 = 5 * 15
    print(f"Area 2: {r2}")`,
        label: "Código antes da Refatoração"
      },
      {
        lang: "python",
        code: `# DEPOIS: Função extraída e reutilizável
def calcular_exibir_area(largura, altura, label):
    area = largura * altura
    print(f"Area {label}: {area}")
    return area

calcular_exibir_area(10, 20, "1")
calcular_exibir_area(5, 15, "2")`,
        label: "Código após a Refatoração"
      },
      {
        lang: "python",
        code: `# ANTES: Condição aninhada profunda
def pode_votar(idade, tem_titulo):
    if idade >= 16:
        if tem_titulo:
            return True
        else:
            return False
    else:
        return False`,
        label: "Lógica Complexa"
      },
      {
        lang: "python",
        code: `# DEPOIS: Simplificação com cláusula de guarda
def pode_votar_refatorado(idade, tem_titulo):
    return idade >= 16 and tem_titulo`,
        label: "Lógica Simplificada"
      }
    ],
    points: [
      "Refatorar NÃO deve mudar o que o código faz.",
      "Elimine a repetição (Princípio DRY - Don't Repeat Yourself).",
      "Quebre funções grandes em várias funções menores e específicas.",
      "Melhore nomes de variáveis que se tornaram obsoletos ou confusos.",
      "Remova código morto (partes que nunca são executadas).",
      "Sempre teste seu código após cada pequena alteração.",
      "Refatoração é um processo contínuo, não um evento único."
    ],
    alerts: [
      {
        type: "success",
        content: "Código refatorado é mais fácil de testar e menos propenso a bugs ocultos."
      },
      {
        type: "warning",
        content: "Não tente refatorar se você não tiver certeza de como o código original funciona."
      },
      {
        type: "info",
        content: "Muitos editores de código possuem ferramentas automáticas para ajudar na refatoração."
      }
    ]
  },
  {
    slug: "projeto-final",
    section: "boas-praticas",
    title: "Projeto Final: Sistema de Gerenciamento de Tarefas",
    difficulty: "iniciante",
    subtitle: "Consolidando todos os conhecimentos em um sistema real.",
    intro: `Chegamos ao ápice da nossa jornada! Para consolidar tudo o que aprendemos — desde variáveis e loops até complexidade e boas práticas — vamos construir um Sistema de Gerenciamento de Tarefas (Todo List). Este projeto é um clássico da programação porque envolve todas as operações fundamentais de qualquer software moderno.

Nosso sistema permitirá criar tarefas, listá-las, marcá-las como concluídas e até buscá-las pelo nome. Aplicaremos conceitos de busca para encontrar itens rapidamente e conceitos de ordenação para organizar as tarefas por prioridade. É aqui que a lógica se transforma em utilidade real.

Ao escrever este código, preste atenção na nomeação das funções, na organização das listas e na clareza dos comentários. Estaremos usando Python por sua legibilidade, mas a lógica que você verá aqui é universal e pode ser aplicada em qualquer linguagem, seja JavaScript, Java ou C#.

Este projeto também é uma oportunidade de praticar a depuração. Tente entender como cada função interage com a lista global de tarefas. Como garantimos que não tentaremos concluir uma tarefa que não existe? Como mantemos a lista organizada sem gastar processamento desnecessário?

Ao final, você terá em mãos um programa funcional e, mais importante, a compreensão de como cada peça de lógica que estudamos se encaixa para formar uma aplicação completa. Parabéns por chegar até aqui!`,
    codes: [
      {
        lang: "pseudocódigo",
        code: `Algoritmo GerenciadorDeTarefas
VAR
    tarefas: Vetor de Registros (nome, concluida, prioridade)
    opcao: Inteiro

INICIO
    ENQUANTO opcao != 0 FACA
        ExibirMenu()
        opcao <- LerOpcao()
        SE opcao == 1 ENTAO AdicionarTarefa()
        SE opcao == 2 ENTAO ListarTarefas()
        SE opcao == 3 ENTAO ConcluirTarefa()
        SE opcao == 4 ENTAO BuscarPorNome()
    FIM_ENQUANTO
FIM`,
        label: "Planejamento em Pseudocódigo"
      },
      {
        lang: "python",
        code: `# Sistema de Gerenciamento de Tarefas
# Aplicando: Variáveis, Listas, Funções, Loops e Condicionais

tarefas = [] # Lista global para armazenar dicionários de tarefas

def adicionar_tarefa(nome, prioridade=1):
    """Adiciona uma nova tarefa ao sistema."""
    nova_tarefa = {
        "nome": nome,
        "concluida": False,
        "prioridade": prioridade
    }
    tarefas.append(nova_tarefa)
    print(f"Tarefa '{nome}' adicionada com sucesso!")

def listar_tarefas():
    """Exibe todas as tarefas cadastradas, ordenadas por prioridade."""
    if not tarefas:
        print("Nenhuma tarefa cadastrada.")
        return

    # Ordenando por prioridade (Maior para menor) - O(n log n)
    tarefas_ordenadas = sorted(tarefas, key=lambda t: t['prioridade'], reverse=True)
    
    print("\\n--- LISTA DE TAREFAS ---")
    for idx, t in enumerate(tarefas_ordenadas):
        status = "[X]" if t['concluida'] else "[ ]"
        print(f"{idx + 1}. {status} {t['nome']} (Prioridade: {t['prioridade']})")

def marcar_concluida(nome_alvo):
    """Busca uma tarefa por nome e a marca como concluída - O(n)."""
    for t in tarefas:
        if t['nome'].lower() == nome_alvo.lower():
            t['concluida'] = True
            print(f"Tarefa '{t['nome']}' marcada como concluída!")
            return
    print("Tarefa não encontrada.")

def buscar_tarefa(termo):
    """Filtra tarefas que contenham o termo no nome."""
    encontradas = [t for t in tarefas if termo.lower() in t['nome'].lower()]
    if encontradas:
        print(f"\\nResultados para '{termo}':")
        for t in encontradas:
            print(f"- {t['nome']}")
    else:
        print("Nenhuma tarefa encontrada.")

# --- Demonstração de Uso ---
adicionar_tarefa("Estudar Algoritmos", prioridade=5)
adicionar_tarefa("Fazer compras", prioridade=2)
adicionar_tarefa("Lavar o carro", prioridade=1)

listar_tarefas()
marcar_concluida("Estudar Algoritmos")
buscar_tarefa("compras")
listar_tarefas()`,
        label: "Implementação Completa em Python"
      },
      {
        lang: "python",
        code: `# Exemplo de busca eficiente e remoção
def remover_concluidas():
    """Remove todas as tarefas que já foram feitas (Limpeza)."""
    global tarefas
    original_count = len(tarefas)
    tarefas = [t for t in tarefas if not t['concluida']]
    removidas = original_count - len(tarefas)
    print(f"{removidas} tarefas removidas.")`,
        label: "Funcionalidade Extra: Limpeza"
      },
      {
        lang: "python",
        code: `# Menu interativo simples
def menu():
    while True:
        print("\\n1. Add | 2. List | 3. Done | 4. Search | 0. Exit")
        op = input("Opção: ")
        if op == "1":
            nome = input("Nome: ")
            prio = int(input("Prio (1-5): "))
            adicionar_tarefa(nome, prio)
        elif op == "2":
            listar_tarefas()
        elif op == "0":
            break
        # ... outras opções ...`,
        label: "Estrutura de Interface via Console"
      }
    ],
    points: [
      "Use listas/arrays para armazenar coleções de dados.",
      "Dicionários (ou Objetos) são ótimos para representar entidades como 'Tarefa'.",
      "Funções devem ter uma única responsabilidade clara.",
      "Buscas lineares O(n) são simples de implementar e funcionam bem para listas pequenas.",
      "A ordenação melhora a usabilidade do sistema para o usuário final.",
      "Sempre valide as entradas do usuário para evitar erros inesperados.",
      "Mantenha o estado do seu programa organizado e consistente."
    ],
    alerts: [
      {
        type: "success",
        content: "Você acaba de construir um sistema completo! Este é o primeiro passo para criar apps maiores."
      },
      {
        type: "info",
        content: "Em sistemas reais, as tarefas seriam salvas em um Banco de Dados para não sumirem ao fechar o programa."
      },
      {
        type: "tip",
        content: "Tente adicionar uma data de entrega às tarefas como um desafio extra!"
      }
    ]
  }
];
