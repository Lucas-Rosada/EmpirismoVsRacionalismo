let player1Side = null;
let player2Side = null;
let empirismoPos = 0;
let racionalismoPos = 0;
const centerPos = 9; // Posição final do tabuleiro (ajustada para 9 posições)

// Verifica se o arquivo JS está corretamente vinculado
console.log("Script carregado corretamente!");

// Dicionário de perguntas e alternativas - Empirismo
const perguntasEmpirismo = {
    "Qual filósofo é conhecido como o pai do empirismo?": {
        "A": "John Locke",
        "B": "René Descartes",
        "C": "Immanuel Kant",
        "D": "David Hume",
        correct: "A"
    },
    "Segundo o empirismo, qual é a principal fonte de conhecimento?": {
        "A": "Razão",
        "B": "Experiência",
        "C": "Intuição",
        "D": "Fé",
        correct: "B"
    },
    "Quem escreveu o 'Ensaio Sobre o Entendimento Humano'?": {
        "A": "George Berkeley",
        "B": "David Hume",
        "C": "John Locke",
        "D": "Aristóteles",
        correct: "C"
    },
    "O que é 'tábula rasa' no empirismo?": {
        "A": "Uma folha em branco",
        "B": "Uma forma de conhecimento inato",
        "C": "Um método filosófico",
        "D": "Uma teoria moral",
        correct: "A"
    },
    "Para Locke, como as ideias simples são formadas?": {
        "A": "Experiência",
        "B": "Razão",
        "C": "Observação",
        "D": "Conhecimento inato",
        correct: "A"
    },
    "Qual filósofo empirista argumentou que a realidade é apenas uma série de impressões?": {
        "A": "John Locke",
        "B": "David Hume",
        "C": "George Berkeley",
        "D": "Thomas Hobbes",
        correct: "B"
    },
    "Que filósofo empirista desafiou a ideia de causalidade?": {
        "A": "David Hume",
        "B": "René Descartes",
        "C": "John Locke",
        "D": "George Berkeley",
        correct: "A"
    },
    "Segundo o empirismo, podemos confiar em nossos sentidos?": {
        "A": "Sim, sempre",
        "B": "Não, apenas em parte",
        "C": "Sim, mas com cautela",
        "D": "Não, nunca",
        correct: "C"
    },
    "David Hume argumentava que não podemos saber nada com certeza. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "A"
    },
    "George Berkeley acreditava que a matéria existia sem percepção. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "B"
    },
    "Para os empiristas, as ideias são inatas. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "B"
    },
    "Locke acreditava que as ideias complexas são formadas a partir de ideias simples. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "A"
    },
    "Empirismo defende que o conhecimento vem da experiência. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "A"
    },
    "Empiristas acreditam que a razão é superior à experiência. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "B"
    }
};

// Dicionário de perguntas e alternativas - Racionalismo
const perguntasRacionalismo = {
    "Qual filósofo é conhecido como o pai do racionalismo moderno?": {
        "A": "Platão",
        "B": "René Descartes",
        "C": "Friedrich Nietzsche",
        "D": "Immanuel Kant",
        correct: "B"
    },
    "Segundo o racionalismo, qual é a principal fonte de conhecimento?": {
        "A": "Experiência",
        "B": "Razão",
        "C": "Intuição",
        "D": "Percepção sensorial",
        correct: "B"
    },
    "Quem escreveu 'Meditações Metafísicas'?": {
        "A": "Descartes",
        "B": "Aristóteles",
        "C": "John Locke",
        "D": "David Hume",
        correct: "A"
    },
    "O que Descartes quis dizer com 'Penso, logo existo'?": {
        "A": "O pensamento é a prova da existência",
        "B": "Tudo o que existe deve ser pensado",
        "C": "A percepção é a origem do pensamento",
        "D": "A razão é a única fonte de conhecimento",
        correct: "A"
    },
    "Quem desenvolveu a ideia de monadologia?": {
        "A": "Spinoza",
        "B": "Leibniz",
        "C": "Descartes",
        "D": "Kant",
        correct: "B"
    },
    "Qual filósofo racionalista acreditava que a realidade era composta de substâncias infinitas?": {
        "A": "Leibniz",
        "B": "Kant",
        "C": "Descartes",
        "D": "Spinoza",
        correct: "A"
    },
    "Spinoza acreditava que Deus e a natureza eram a mesma coisa. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "A"
    },
    "Racionalistas acreditam que o conhecimento é obtido apenas pela experiência. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "B"
    },
    "Descartes argumentava que a dúvida é o primeiro passo para o conhecimento. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "A"
    },
    "Racionalismo enfatiza a percepção sensorial como principal fonte de conhecimento. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "B"
    },
    "Os racionalistas defendem que as ideias são inatas. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "A"
    },
    "Racionalistas defendem que o conhecimento pode ser alcançado apenas pela lógica e razão. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "A"
    },
    "Racionalistas acreditam que o conhecimento é dependente da experiência. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "B"
    },
    "Descartes acreditava que a mente e o corpo são a mesma substância. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "B"
    },
    "Spinoza acreditava que existem várias substâncias no universo. Verdadeiro ou Falso?": {
        "A": "Verdadeiro",
        "B": "Falso",
        correct: "B"
    }
};

// Função para atualizar o jogador que deve responder
function updateCurrentPlayerDisplay() {
    const currentPlayerText = currentPlayer === 'empirismo' ? "Jogador 1 (Empirismo)" : "Jogador 2 (Racionalismo)";
    document.getElementById("currentPlayerDisplay").textContent = `Jogador da vez: ${currentPlayerText}`;
}

// Iniciar o jogo após escolher os lados
document.getElementById("startGame").addEventListener("click", function () {
    player1Side = document.getElementById("player1Side").value;
    player2Side = document.getElementById("player2Side").value;
    
    // Verifica se ambos os jogadores escolheram lados diferentes
    if (player1Side === player2Side) {
        alert("Ambos os jogadores não podem escolher o mesmo lado. Escolha novamente.");
        return;
    }
    
    // Esconde a parte de configuração de jogadores e mostra o tabuleiro do jogo
    document.getElementById("player-setup").style.display = 'none'; // Esconder a seção de escolha
    document.getElementById("game-section").style.display = 'block'; // Mostrar o tabuleiro de jogo
    
    // Exibe uma mensagem de início com os lados escolhidos
    alert(`Jogador 1 escolheu ${player1Side}. Jogador 2 escolheu ${player2Side}. Boa sorte!`);
});

let currentPlayer = null;
let currentQuestion = null;

// Lógica para rolar o dado e mostrar a pergunta
document.getElementById("rollDice").addEventListener("click", function () {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    currentPlayer = diceRoll % 2 === 0 ? player1Side : player2Side;
    
    // Atualiza o jogador que deve responder
    updateCurrentPlayerDisplay();
    
    // Pergunta aleatória de acordo com o lado do jogador atual
    const perguntas = currentPlayer === 'empirismo' ? perguntasEmpirismo : perguntasRacionalismo;
    const perguntasChaves = Object.keys(perguntas);
    const perguntaSelecionada = perguntasChaves[Math.floor(Math.random() * perguntasChaves.length)];
    currentQuestion = perguntas[perguntaSelecionada]; // Armazena a pergunta atual

    // Exibe a pergunta e as alternativas
    let alternativas = `
        A) ${currentQuestion.A}<br>
        B) ${currentQuestion.B}<br>
        C) ${currentQuestion.C}<br>
        D) ${currentQuestion.D}
    `;
    document.getElementById("question").innerHTML = `Pergunta para ${currentPlayer === 'empirismo' ? 'Empirismo' : 'Racionalismo'}: ${perguntaSelecionada}<br><br>${alternativas}`;
});

// Enviar resposta e verificar se está correta
document.getElementById("submitAnswer").addEventListener("click", function () {
    const answer = document.getElementById("playerAnswer").value.toUpperCase();  // Obtém a resposta e converte para maiúsculas
    
    // Verifica se a resposta está correta
    if (answer === currentQuestion.correct) {
        if (currentPlayer === 'empirismo') {
            empirismoPos += 1;
            document.getElementById("empirismoPos").textContent = empirismoPos;
            document.getElementById(`cell${empirismoPos}`).style.backgroundColor = "blue";
            alert("Correto! Jogador Empirismo avança.");
        } else if (currentPlayer === 'racionalismo') {
            racionalismoPos += 1;
            document.getElementById("racionalismoPos").textContent = racionalismoPos;
            document.getElementById(`cell${racionalismoPos}`).style.backgroundColor = "red";
            alert("Correto! Jogador Racionalismo avança.");
        }
    } else {
        alert("Resposta incorreta! Nenhum jogador avança.");
    }

    // Verifica o vencedor
    if (empirismoPos === centerPos) {
        alert("Jogador 1 (Empirismo) venceu!");
    } else if (racionalismoPos === centerPos) {
        alert("Jogador 2 (Racionalismo) venceu!");
    }
});
