const imgButton = document.querySelector("#imgButton");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const messageLabel = document.querySelector(".message");

imgButton.addEventListener("click", handleImgButton);
btnReset.addEventListener("click", handleImgButton);

const messages = [
	"A sorte favorece os corajosos.",
	"Hoje é o amanhã pelo qual você se preocupou ontem.",
	"Grandes coisas estão por vir.",
	"Seja a mudança que você deseja ver no mundo.",
	"Um sorriso vale mais que mil palavras.",
	"Aja agora, não deixe para depois.",
	"A persistência leva à realização.",
	"Pequenas ações, grandes resultados.",
	"O aprendizado é um tesouro que seguirá seu dono em toda parte.",
	"A fé move montanhas.",
	"O sucesso é a soma de pequenos esforços repetidos dia após dia.",
	"A vida é 10% do que acontece e 90% de como você reage a isso.",
	"Siga o seu coração, mas leve o seu cérebro junto.",
	"O caminho para o sucesso é sempre em frente.",
	"Não há atalhos para lugares que valem a pena ir.",
	"Cada novo dia é uma nova oportunidade.",
	"Quanto mais você agradece, mais coisas boas acontecem.",
	"Siga seus sonhos; eles conhecem o caminho.",
	"O melhor momento para começar é agora.",
	"Você é mais forte do que pensa.",
	"A beleza está nos olhos de quem vê.",
	"A vida é curta, aproveite cada momento.",
	"Acredite em você mesmo e tudo será possível.",
	"A melhor maneira de prever o futuro é criá-lo.",
	"Não existe substituto para o trabalho árduo.",
	"O sucesso não é a chave para a felicidade; a felicidade é a chave para o sucesso.",
	"Cada nuvem tem um forro de prata.",
	"A paciência é amarga, mas seus frutos são doces.",
	"O otimismo é a fé em ação.",
	"A imaginação é mais importante que o conhecimento.",
	"A vida é uma aventura ousada ou não é nada.",
];

function handleImgButton() {
	toggle();
	messageLabel.innerText = messages[generateRandomNumber() - 1];
}

function toggle(e) {
	screen1.classList.toggle("hide");
	screen2.classList.toggle("hide");
}

function handleReset(e) {
	e.preventDefault();
	toggle();
}

function generateRandomNumber() {
	return Math.round(Math.random() * messages.length);
}
