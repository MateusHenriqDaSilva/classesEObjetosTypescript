interface TimePropriedades {
    nome: string;
    jogadores: string[];
}

class Time {
    nome: string
    jogadores: string[]
    constructor(argumentos: TimePropriedades) {
        this.nome = argumentos.nome
        this.jogadores = argumentos.jogadores
    }
    criarTime(): string {
        const jogadoresEmOrdemNumerica = this.jogadores.map((jogadores, posicao) => {
            return `<div>${posicao + 1} - ${jogadores}</div>`
        })
        return jogadoresEmOrdemNumerica.join(", ")
    }
}

interface PlacarPropriedades {
    timeDaCasa: Time;
    visitanteTime: Time;
    data: string;
}

class Placar {
    timeDaCasa: Time;
    visitanteTime: Time;
    data: string;

    constructor(argumentos: PlacarPropriedades) {
        this.timeDaCasa = argumentos.timeDaCasa
        this.visitanteTime = argumentos.visitanteTime
        this.data = argumentos.data
    }

    placarEmHtml(): string {
        return `
            <h1>${this.data}</h1>
            <h2>${this.timeDaCasa.nome}</h2>
            <div>${this.timeDaCasa.criarTime()}</div>
            <h2>${this.visitanteTime.nome}</h2>
            <div>${this.visitanteTime.criarTime()}</div>
        `
    }
}

const jogadoresFazeClan = ['rain', 'broky', 'olofmaister', 'karrigan', 'twisttz']
const fazeclan = new Time({ nome: 'Faze Clan', jogadores: jogadoresFazeClan })

const jogadoresLiquid = ['fallen', 'naf', 'elige', 'stewe', 'grim']
const liquid = new Time({ nome: 'Liquid', jogadores: jogadoresLiquid })

const placarDoJogo = new Placar({
    timeDaCasa: fazeclan,
    visitanteTime: liquid,
    data: '12/10/2021'
})

console.log(placarDoJogo.placarEmHtml())