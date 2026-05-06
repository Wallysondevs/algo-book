import type { Chapter, Section } from './types';
import { chapters as s0 } from './sections/boas-vindas';
import { chapters as s1 } from './sections/logica-booleana';
import { chapters as s2 } from './sections/algoritmos-conceitos';
import { chapters as s3 } from './sections/variaveis-tipos';
import { chapters as s4 } from './sections/decisoes';
import { chapters as s5 } from './sections/repeticoes';
import { chapters as s6 } from './sections/vetores-matrizes';
import { chapters as s7 } from './sections/funcoes';
import { chapters as s8 } from './sections/recursividade';
import { chapters as s9 } from './sections/estruturas-dados';
import { chapters as s10 } from './sections/ordenacao';
import { chapters as s11 } from './sections/busca';
import { chapters as s12 } from './sections/complexidade';
import { chapters as s13 } from './sections/boas-praticas';

export type { Chapter, Section, Difficulty, AlertType, CodeSample, AlertSpec } from './types';

export const sections: Section[] = [
  {
    id: "boas-vindas",
    icon: "BookOpen",
    label: "Boas-vindas e Introdução",
    chapterSlugs: [
      "bem-vindo-algoritmos",
      "por-que-aprender-logica",
      "como-computadores-pensam",
      "ferramentas-necessarias",
      "como-usar-este-livro"
    ]
  },
  {
    id: "logica-booleana",
    icon: "Binary",
    label: "Lógica e Raciocínio Formal",
    chapterSlugs: [
      "verdadeiro-falso",
      "operadores-logicos",
      "tabela-verdade",
      "logica-proposicional",
      "resolucao-problemas-logica",
      "numeros-binarios"
    ]
  },
  {
    id: "algoritmos-conceitos",
    icon: "Workflow",
    label: "O que é um Algoritmo",
    chapterSlugs: [
      "o-que-e-algoritmo",
      "caracteristicas-algoritmo",
      "pseudocodigo",
      "fluxogramas",
      "algoritmos-cotidiano",
      "primeiro-algoritmo"
    ]
  },
  {
    id: "variaveis-tipos",
    icon: "Box",
    label: "Variáveis, Tipos e Operadores",
    chapterSlugs: [
      "o-que-e-variavel",
      "tipos-de-dados",
      "operadores-aritmeticos",
      "operadores-relacionais",
      "expressoes-e-precedencia",
      "conversao-tipos",
      "entrada-saida-dados"
    ]
  },
  {
    id: "decisoes",
    icon: "GitBranch",
    label: "Estruturas de Decisão",
    chapterSlugs: [
      "if-else-conceito",
      "if-else-aninhado",
      "else-if-elif",
      "switch-case",
      "operador-ternario",
      "decisoes-boas-praticas",
      "exercicios-decisao"
    ]
  },
  {
    id: "repeticoes",
    icon: "RefreshCw",
    label: "Estruturas de Repetição",
    chapterSlugs: [
      "por-que-repeticoes",
      "loop-enquanto",
      "loop-para",
      "loop-repita-ate",
      "break-continue",
      "loops-aninhados",
      "erros-comuns-loops"
    ]
  },
  {
    id: "vetores-matrizes",
    icon: "Table",
    label: "Vetores e Matrizes",
    chapterSlugs: [
      "o-que-e-vetor",
      "operacoes-vetor",
      "percorrer-vetor",
      "o-que-e-matriz",
      "operacoes-matriz",
      "strings-como-vetores"
    ]
  },
  {
    id: "funcoes",
    icon: "FunctionSquare",
    label: "Funções e Modularização",
    chapterSlugs: [
      "por-que-funcoes",
      "definindo-funcao",
      "parametros-argumentos",
      "retorno-funcao",
      "escopo-variaveis",
      "funcoes-puras",
      "modularizacao"
    ]
  },
  {
    id: "recursividade",
    icon: "Repeat",
    label: "Recursividade",
    chapterSlugs: [
      "o-que-e-recursao",
      "caso-base-recursivo",
      "fatorial-recursivo",
      "fibonacci-recursivo",
      "torres-de-hanoi",
      "recursao-vs-iteracao"
    ]
  },
  {
    id: "estruturas-dados",
    icon: "Database",
    label: "Estruturas de Dados",
    chapterSlugs: [
      "intro-estruturas-dados",
      "pilha-stack",
      "fila-queue",
      "lista-ligada",
      "arvores-conceito",
      "arvore-binaria",
      "grafo-intro",
      "tabela-hash"
    ]
  },
  {
    id: "ordenacao",
    icon: "ArrowDownUp",
    label: "Algoritmos de Ordenação",
    chapterSlugs: [
      "por-que-ordenar",
      "bubble-sort",
      "selection-sort",
      "insertion-sort",
      "merge-sort",
      "quick-sort",
      "comparando-ordenacoes"
    ]
  },
  {
    id: "busca",
    icon: "Search",
    label: "Algoritmos de Busca",
    chapterSlugs: [
      "busca-linear",
      "busca-binaria",
      "busca-em-arvores",
      "busca-em-grafos",
      "quando-usar-qual-busca"
    ]
  },
  {
    id: "complexidade",
    icon: "TrendingUp",
    label: "Complexidade Algorítmica",
    chapterSlugs: [
      "o-que-e-complexidade",
      "notacao-big-o",
      "complexidades-comuns",
      "complexidade-espaco",
      "otimizando-algoritmos"
    ]
  },
  {
    id: "boas-praticas",
    icon: "CheckCircle",
    label: "Boas Práticas e Projeto Final",
    chapterSlugs: [
      "nomeacao-e-clareza",
      "comentarios-documentacao",
      "depuracao-debugging",
      "refatoracao",
      "projeto-final"
    ]
  }
];

export const chapters: Chapter[] = [
  ...s0, ...s1, ...s2, ...s3, ...s4, ...s5, ...s6,
  ...s7, ...s8, ...s9, ...s10, ...s11, ...s12, ...s13
];

export const chapterMap: Record<string, Chapter> = Object.fromEntries(
  chapters.map(c => [c.slug, c])
);

export function chapterIndex(slug: string): number {
  return chapters.findIndex(c => c.slug === slug);
}
