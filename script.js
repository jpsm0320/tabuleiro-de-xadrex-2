const canvas = document.getElementById('tabuleiro');
const ctx = canvas.getContext('2d');
const tamanho = 740; // Aumentado de 480 para 640
const casas = 8;
const tamanhoCasa = tamanho / casas;
canvas.width = tamanho;
canvas.height = tamanho;

// Desenha o tabuleiro com cores tradicionais
function desenharTabuleiro() {
    for (let linha = 0; linha < casas; linha++) {
        for (let coluna = 0; coluna < casas; coluna++) {
            const cor = (linha + coluna) % 2 === 0 ? '#fff' : '#000'; // branco e preto

            ctx.fillStyle = cor;
            ctx.fillRect(coluna * tamanhoCasa, linha * tamanhoCasa, tamanhoCasa, tamanhoCasa);
        }
    }
}


const tabuleiro = [
    ['♜','♞','♝','♛','♚','♝','♞','♜'],
    ['♟','♟','♟','♟','♟','♟','♟','♟'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['♙','♙','♙','♙','♙','♙','♙','♙'],
    ['♖','♘','♗','♕','♔','♗','♘','♖']
];

function desenharPecas() {
    ctx.font = '48px Arial'; 
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let linha = 0; linha < casas; linha++) {
        for (let coluna = 0; coluna < casas; coluna++) {
            const peca = tabuleiro[linha][coluna];
            if (peca !== '') {
                const unicode = peca.charCodeAt(0);
                ctx.fillStyle = unicode >= 9818 ? 'blue' : 'red'; // Peças brancas em azul, pretas em vermelho
                ctx.fillText(peca, coluna * tamanhoCasa + tamanhoCasa / 2, linha * tamanhoCasa + tamanhoCasa / 2);
            }
        }
    }
}

desenharTabuleiro();
desenharPecas();
