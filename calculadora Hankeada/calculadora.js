import { createInterface } from 'readline';

function calcularRank(nome, vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if (vitorias >= 101) {
        nivel = 'Imortal';
    }

    console.log(`O Herói ${nome} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

function obterDadosDoUsuario() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite o nome do jogador: ', (nome) => {
        rl.question('Digite o número de vitórias: ', (vitorias) => {
            rl.question('Digite o número de derrotas: ', (derrotas) => {
                calcularRank(nome, parseInt(vitorias, 10), parseInt(derrotas, 10));
                rl.close();
            });
        });
    });
}

// Exemplo de uso da função
obterDadosDoUsuario();