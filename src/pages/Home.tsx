import { Link } from "wouter";
import { sections, chapters, chapterMap } from "@/data/chapters";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <div className="inline-block text-6xl mb-4">🧠</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-algo-teal dark:text-algo-orange mb-4">
          Algoritmos e Lógica de Programação
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Um livro completo em português com <strong>{chapters.length} capítulos</strong> — do zero absoluto até estruturas de dados, ordenação e complexidade algorítmica. Para quem nunca programou na vida.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/c/bem-vindo-algoritmos" className="inline-flex items-center gap-2 bg-algo-teal hover:bg-algo-teal-dark text-white px-6 py-3 rounded-lg font-semibold shadow transition-colors">
            <BookOpen size={18} /> Começar do início
          </Link>
          <Link href="/c/o-que-e-algoritmo" className="inline-flex items-center gap-2 bg-algo-orange hover:bg-algo-orange-dark text-white px-6 py-3 rounded-lg font-semibold shadow transition-colors">
            O que é um algoritmo? <ArrowRight size={18} />
          </Link>
        </div>
      </motion.section>

      <section className="mb-14 bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-algo-orange">pseudocodigo.alg</span>
          <span className="text-xs text-slate-400">Pseudocódigo · Estilo Portugol</span>
        </div>
        <pre className="text-sm leading-relaxed font-mono overflow-x-auto"><code>{`ALGORITMO BuscaBinaria(vetor, alvo)
  inicio ← 0
  fim    ← tamanho(vetor) - 1

  ENQUANTO inicio <= fim FAÇA
    meio ← (inicio + fim) / 2

    SE vetor[meio] = alvo ENTÃO
      RETORNE meio          // encontrado!
    SENÃO SE vetor[meio] < alvo ENTÃO
      inicio ← meio + 1    // descarta metade esquerda
    SENÃO
      fim ← meio - 1       // descarta metade direita
    FIM SE
  FIM ENQUANTO

  RETORNE -1               // não encontrado
FIM ALGORITMO`}</code></pre>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          {sections.length} trilhas · {chapters.length} capítulos
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((s, i) => {
            const Icon = (Icons as any)[s.icon] || Icons.BookOpen;
            const first = s.chapterSlugs[0];
            const firstCh = first ? chapterMap[first] : null;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <Link href={firstCh ? `/c/${first}` : "/"} className="block h-full bg-white dark:bg-slate-800 border border-teal-100 dark:border-teal-900 rounded-xl p-5 hover:border-algo-teal hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-algo-teal/10 text-algo-teal dark:text-algo-orange rounded-lg">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs uppercase tracking-wide text-slate-500">
                      {s.chapterSlugs.length} capítulos
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-algo-teal dark:group-hover:text-algo-orange mb-1">
                    {s.label}
                  </h3>
                  {firstCh && (
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Começa com: <span className="text-slate-700 dark:text-slate-200">{firstCh.title}</span>
                    </p>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mt-16 text-center text-sm text-slate-500 dark:text-slate-400 pb-8">
        <p>
          Feito com 💚 por <a className="text-algo-teal dark:text-algo-orange font-semibold" href="https://github.com/Wallysondevs" target="_blank" rel="noreferrer">@Wallysondevs</a>
          {" · "}Código aberto no <a className="text-algo-teal dark:text-algo-orange font-semibold" href="https://github.com/Wallysondevs" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </section>
    </div>
  );
}
