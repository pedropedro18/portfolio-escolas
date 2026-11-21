import { useState } from "react";
import "./App.css";

// ✏️ Edita estes dados com os teus
const LINKEDIN = "https://www.linkedin.com/in/pedro-tomas-227986355";
const CURRICULO = "/curriculo-teacher-pedro.pdf"; // coloca o PDF na pasta public/
const EMAIL = "pt8066545@email.com";

const razoes = [
  { titulo: "Todos os níveis CEFR", texto: "Leciono do A1 ao C2, para que uma só pessoa cubra várias turmas." },
  { titulo: "Planos prontos", texto: "Planos de aula, ebooks e cadernos de exercícios próprios, alinhados por nível." },
  { titulo: "Avaliação clara", texto: "Objetivos por nível e relatórios de progresso para alunos e encarregados." },
  { titulo: "Apoio digital", texto: "Aplicações de leitura, ditado e geração de aulas para praticar fora da sala." },
];

const disponibilidade = [
  ["Tipo de contrato", "Tempo inteiro, part-time ou por turmas"], // ✏️ ajusta
  ["Modalidade", "Presencial ou online"],
  ["Início", "Imediato"],
  ["Local", "Angola"],
];

const processo = [
  "Contacte-me pelo LinkedIn ou por email.",
  "Combinamos uma entrevista e, se quiser, uma aula-demonstração.",
  "Apresento o plano de trabalho para os níveis e turmas da escola.",
  "Início das aulas, com relatórios de progresso regulares.",
];

const metodologias = [
  {
    titulo: "Ensino comunicativo",
    resumo: "A aula gira em torno de falar e usar o inglês em situações reais.",
    detalhe:
      "Os alunos trabalham em pares e em grupos, com tarefas que exigem comunicar: entrevistas, role-plays, debates e resolução de problemas. O erro é tratado como parte da aprendizagem.",
  },
  {
    titulo: "Quadro CEFR (A1–C2)",
    resumo: "Objetivos claros por nível, do iniciante à proficiência.",
    detalhe:
      "Cada unidade parte de descritores CEFR: o que o aluno deve conseguir fazer no fim. Isto permite planear, avaliar e mostrar progresso de forma objetiva.",
  },
  {
    titulo: "Aprendizagem baseada em tarefas",
    resumo: "O aluno aprende ao concluir uma tarefa com resultado concreto.",
    detalhe:
      "Pré-tarefa, tarefa e análise da língua. O foco na gramática e no vocabulário surge depois da tentativa do aluno, a partir do que ele realmente precisou de dizer.",
  },
  {
    titulo: "Tecnologia na sala de aula",
    resumo: "Aplicações próprias para praticar leitura, ditado e vocabulário.",
    detalhe:
      "Uso ferramentas digitais que desenvolvi para treino de leitura em voz alta, ditado e geração de aulas por nível e tema, para que o aluno pratique também fora da sala.",
  },
];

const niveis = [
  ["A1", "Iniciante"],
  ["A2", "Elementar"],
  ["B1", "Intermédio"],
  ["B2", "Intermédio superior"],
  ["C1", "Avançado"],
  ["C2", "Proficiência"],
];

const materiais = [
  { titulo: "Ebooks por nível", texto: "Coleção completa A1–C2 com currículos alinhados por tema." },
  { titulo: "Cadernos de exercícios", texto: "Atividades de prática para cada unidade, prontas a imprimir." },
  { titulo: "Planos de aula", texto: "Estrutura por objetivo, atividades, materiais e avaliação." },
  { titulo: "Cartazes e recursos visuais", texto: "Material de apoio para a sala e para divulgação." },
];

const ferramentas = [
  { titulo: "Treino de leitura", texto: "Aplicação de leitura em voz alta com feedback." },
  { titulo: "Ditado automático", texto: "Ditado com voz em inglês, português e francês." },
  { titulo: "Gerador de aulas", texto: "Cria aulas por nível CEFR e tema, com PDF para descarregar." },
];

const formacao = [
  { titulo: "Formação de educadores Maple Bear", texto: "Metodologia de ensino bilingue e planeamento de aula." },
  // ✏️ Acrescenta aqui graus, certificados e cursos
];

const planoAula = [
  ["Aquecimento", "5 min", "Pergunta de ativação para introduzir o tema."],
  ["Apresentação", "10 min", "Língua nova em contexto, com exemplos do dia a dia."],
  ["Prática guiada", "15 min", "Exercícios controlados em pares."],
  ["Prática livre", "10 min", "Tarefa de comunicação com resultado concreto."],
  ["Feedback e fecho", "5 min", "Correção dos erros frequentes e síntese do que se aprendeu."],
];

export default function App() {
  const [aberta, setAberta] = useState(0);

  return (
    <>
      <header className="topo">
        <div className="wrap barra">
          <span className="marca">Teacher Pedro</span>
          <nav aria-label="Principal">
            <a href="#porque">Porquê contratar</a>
            <a href="#metodologias">Metodologias</a>
            <a href="#materiais">Materiais</a>
            <a href="#plano">Plano de aula</a>
            <a href="#formacao">Formação</a>
            <a href="#curriculo">Currículo</a>
            <a href="#contacto">Contratar</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="inicio">
          <div className="wrap">
            <p className="sobretitulo">Professor de inglês disponível para contratação · Angola</p>
            <h1>Professor de inglês para a sua escola, do A1 ao C2.</h1>
            <p className="lead">
              Para coordenadores e direções pedagógicas: aqui encontra a minha
              metodologia, os materiais que já tenho prontos e a forma de me
              contratar, com currículo disponível para descarregar.
            </p>
            <div className="botoes">
              <a className="btn principal" href={CURRICULO} download>
                Descarregar currículo
              </a>
              <a className="btn secundario" href="#curriculo">
                Ver currículo
              </a>
            </div>
          </div>
        </section>

        <section id="porque" className="faixa">
          <div className="wrap">
            <h2>Porquê contratar</h2>
            <div className="grade">
              {razoes.map((r) => (
                <article className="cartao" key={r.titulo}>
                  <h3>{r.titulo}</h3>
                  <p>{r.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodologias">
          <div className="wrap">
            <h2>Metodologias</h2>
            <div className="acordeao">
              {metodologias.map((m, i) => (
                <div className="item" key={m.titulo}>
                  <button
                    className="cabeca"
                    aria-expanded={aberta === i}
                    onClick={() => setAberta(aberta === i ? -1 : i)}
                  >
                    <span>
                      <strong>{m.titulo}</strong>
                      <small>{m.resumo}</small>
                    </span>
                    <span className="sinal" aria-hidden="true">{aberta === i ? "−" : "+"}</span>
                  </button>
                  {aberta === i && <p className="corpo">{m.detalhe}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="niveis" className="faixa">
          <div className="wrap">
            <h2>Níveis que leciono</h2>
            <ul className="niveis">
              {niveis.map(([cod, nome]) => (
                <li key={cod}>
                  <b>{cod}</b>
                  <span>{nome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="materiais">
          <div className="wrap">
            <h2>Materiais didáticos</h2>
            <div className="grade">
              {materiais.map((m) => (
                <article className="cartao" key={m.titulo}>
                  <h3>{m.titulo}</h3>
                  <p>{m.texto}</p>
                </article>
              ))}
            </div>
            <h3 className="sub">Ferramentas digitais que desenvolvi</h3>
            <div className="grade">
              {ferramentas.map((f) => (
                <article className="cartao" key={f.titulo}>
                  <h3>{f.titulo}</h3>
                  <p>{f.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="plano" className="faixa">
          <div className="wrap">
            <h2>Exemplo de plano de aula (60 min)</h2>
            <ol className="plano">
              {planoAula.map(([fase, tempo, texto]) => (
                <li key={fase}>
                  <div>
                    <strong>{fase}</strong>
                    <span className="tempo">{tempo}</span>
                  </div>
                  <p>{texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="formacao">
          <div className="wrap">
            <h2>Formação</h2>
            <div className="grade">
              {formacao.map((f) => (
                <article className="cartao" key={f.titulo}>
                  <h3>{f.titulo}</h3>
                  <p>{f.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="curriculo" className="faixa">
          <div className="wrap">
            <h2>Currículo</h2>
            <p className="curriculo-texto">
              Consulte o meu currículo completo com formação e experiência
              como professor de inglês.
            </p>
            <div className="botoes">
              <a className="btn principal" href={CURRICULO} target="_blank" rel="noreferrer">
                Abrir currículo
              </a>
              <a className="btn secundario" href={CURRICULO} download="Curriculo-Teacher-Pedro.pdf">
                Descarregar PDF
              </a>
            </div>
            <div className="curriculo-pdf">
              <iframe
                src={`${CURRICULO}#view=FitH`}
                title="Currículo do Teacher Pedro"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section id="contacto" className="contacto">
          <div className="wrap">
            <h2>Como me contratar</h2>
            <dl className="disp">
              {disponibilidade.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <ol className="passos">
              {processo.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
            <div className="botoes">
              <a className="btn principal" href={LINKEDIN} target="_blank" rel="noreferrer">
                Convidar para entrevista
              </a>
              <a className="btn secundario" href={CURRICULO} download>
                Descarregar currículo
              </a>
            </div>
            <p className="email">
              Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Teacher Pedro</footer>
    </>
  );
}