const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu do treino do projeto social, Gabriel se depara com uma oportunidade: um olheiro de um grande clube europeu está na cidade para avaliar novos talentos e oferece um teste no exterior, mas Gabriel não tem dinheiro nem para as passagens. Qual o primeiro pensamento de Gabriel?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: ["Mesmo sentindo medo diante de um desafio enorme,", "Diante do medo e da incerteza,"],
                proxima: 1
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: ["Enxergando a oportunidade com muito otimismo,", "Tomado por um grande entusiasmo,"],
                proxima: 1
            }
        ]
    },
    {
        enunciado: "Sabendo das dificuldades financeiras da sua família, Gabriel precisa decidir como vai se preparar para essa oportunidade decisiva na sua carreira. O que Gabriel faz?",
        alternativas: [
            {
                texto: "Busca ajuda em rifas locais e pede apoio à comunidade para conseguir o valor das passagens e focar 100% nos treinos.",
                afirmacao: ["Gabriel buscou o apoio da sua comunidade para conseguir viajar e focar nos treinos.", "Contou com a união dos vizinhos para arrecadar o dinheiro necessário."],
                proxima: 2
            },
            {
                texto: "Aceita um trabalho em tempo integral fora do futebol para juntar o dinheiro sozinho, deixando os treinos em segundo plano.",
                afirmacao: ["Gabriel dividiu seu tempo com um trabalho em tempo integral para arcar com as despesas.", "Optou pela independência financeira imediata, encarando uma rotina dupla de trabalho."],
                proxima: 2
            }
        ]
    },
    {
        enunciado: "Após ser aprovado no teste e assinar seu primeiro contrato profissional, surge um debate sobre o uso da riqueza e o impacto dos atletas de sucesso em suas comunidades de origem. O que Gabriel faz?",
        alternativas: [
            {
                texto: "Defende a ideia de que o sucesso no futebol abre portas para transformar a vida da sua família e inspirar outros jovens da periferia.",
                afirmacao: ["Ao atingir o sucesso, defendeu o poder do esporte como ferramenta de transformação social.", "Sempre defendeu a importância de dar retorno à sua comunidade."],
                proxima: 3
            },
            {
                texto: "Preocupa-se com a pressão financeira e a responsabilidade de sustentar todos ao seu redor, defendendo um planejamento financeiro rigoroso.",
                afirmacao: ["Ao atingir o sucesso, manteve a cautela e focou em ter um planejamento financeiro rigoroso.", "Priorizou a segurança e a responsabilidade financeira no controle da sua carreira."],
                proxima: 3
            }
        ]
    },
    {
        enunciado: "Ao final da sua primeira temporada vitoriosa, Gabriel precisa decidir qual causa ou projeto vai apoiar no seu tempo livre para retribuir tudo o que conquistou. E agora?",
        alternativas: [
            {
                texto: "Criar uma escolinha de futebol gratuita em seu antigo bairro para apoiar novos talentos.",
                afirmacao: ["Decidiu criar uma escolinha de futebol gratuita em seu bairro natal. Em 2049, olhou para trás e percebeu que o futebol transformou sua vida e ajudou a construir um futuro brilhante para centenas de jovens.", "Fundou um projeto social no bairro onde cresceu. Anos mais tarde, orgulhava-se de ver vários jovens seguindo o mesmo caminho vitorioso."],
                proxima: null
            },
            {
                texto: "Investir na construção de um centro de treinamento moderno voltado apenas para atletas de alta performance.",
                afirmacao: ["Decidiu investir em infraestrutura de ponta para atletas. Em 2049, olhou para trás e orgulhou-se de ter saído da pobreza para se tornar uma grande referência de profissionalismo no esporte.", "Focou seus recursos na criação de um centro de alta performance, tornando-se uma grande referência no esporte mundial."],
                proxima: null
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual === null || atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual = opcaoSelecionada.proxima;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A Trajetória de Gabriel:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

mostraPergunta();