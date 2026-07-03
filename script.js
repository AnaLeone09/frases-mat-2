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
                afirmacao: "chega rápido e faz um trajeto pequeno."
            },
            {
                texto: "de ônibu.s",
                afirmacao: "chega mais tarde e faz um trajeto mais longo."
            }
        ]
    },
    {
        enunciado: "O que você faz no final de semana?",
        alternativas: [
            {
                texto: "Vou para célula.",
                afirmacao: "Minha mãe me leva, faço a comunhão, como e volto embora."
            },
            {
                texto: "Vou para Chácara dos meus avós.",
                afirmacao: "faço um trajeto de uma hora com meus pais e aproveito o resto do dia tranquilamente com meus familiares."
            }
        ]
    },
    {
        enunciado: "O que ele fez ao chegar em destino?",
        alternativas: [
            {
                texto: "procurou por alguém",
                afirmacao: "olhando em todas as direções, procurando encontrar alguém."
            },
            {
                texto: "Refletiu sozinho",
                afirmacao: "observando sua volta, viu que não precisava de mais nada."
            }
        ]
    },
    {
        enunciado: "O que você faz no seu tempo livre?",
        alternativas: [
            {
                texto: "Assisto Tik Tok.",
                afirmacao: "Perco meu tempo procastinando no Tik Tok."
            },
            {
                texto: "Escuto podcast",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
