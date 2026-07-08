const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você vai para a escola?",
        alternativas: [
            {
                texto: "De carro.",
                afirmacao: "Chego rápido e faço um trajeto pequeno."
            },
            {
                texto: "de ônibus.",
                afirmacao: "Chego mais tarde e faço um trajeto mais longo."
            }
        ]
    },
    {
        enunciado: "O que você faz no final de semana?",
        alternativas: [
            {
                texto: "Vou para célula.",
                afirmacao: "Minha mãe me leva, faço a comunhão, me alimento e volto embora."
            },
            {
                texto: "Vou para Chácara dos meus avós.",
                afirmacao: "Faço um trajeto de uma hora com meus pais e aproveito o resto do dia tranquilamente com meus familiares."
            }
        ]
    },
    {
        enunciado: "Como você estuda para uma prova",
        alternativas: [
            {
                texto: "Estudo no dia anterior só.",
                afirmacao: "Fico com preguiça e acabo deixando pra estudar em cima da hora."
            },
            {
                texto: "Estudo antecipadamente.",
                afirmacao: "Estudo um pouco cada dia e consigo ir mais tranquila para prova."
            }
        ]
    },
    {
        enunciado: "O que vc faz no seu tempo livre?",
        alternativas: [
            {
                texto: "Assisto Tik Tok.",
                afirmacao: "Perco meu tempo procastinando no Tik Tok."
            },
            {
                texto: "Escuto podcast.",
                afirmacao:"Aproveito meu tempo aprendendo coisas novas e evoluindo."
            }
        ]
    },
    {
        enunciado: "O que você faz quando tem algum problema?",
        alternativas: [
            {
                texto: "Eu desisto logo.",
                afirmacao: "Perco oportunidades por não tentar resolver."
            },
            {
                texto: "Procuro uma solução.",
                afirmacao: "Aprendo com os desafios e ganho mais confiança. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em lugar qualquer...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
