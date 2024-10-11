//Não ficou tão claro pra mim se eu deveria utilizar gets() para armazenar os dados como da primeira atividade, então deixei dessa maneira com dados estáticos

const vitorias = 100;
const derrotas = 30;

function getRanking(win, lose) {
    const saldo = win - lose;
    let ranking;

    if (saldo <= 10) ranking = "Ferro";
    else if (saldo >= 11 && saldo <= 20) ranking = "Bronze";
    else if (saldo >= 21 && saldo <= 50) ranking = "Prata";
    else if (saldo >= 51 && saldo <= 80) ranking = "Ouro";
    else if (saldo >= 81 && saldo <= 90) ranking = "Diamante";
    else if (saldo >= 91 && saldo <= 100) ranking = "Lendário";
    else if (saldo >= 101) ranking = "Imortal";

    return ranking;
}

console.log('O Herói tem de saldo de ' + (vitorias - derrotas) + ' está no nível de ' + getRanking(vitorias, derrotas));