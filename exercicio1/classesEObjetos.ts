class pessoa { // aqui estamos iniciando a classse 
    nome: string // aqui estamos criando o atributo da classe

    constructor(nome) { // permite que voce execute a configuracao para quando o objeto e criado
        this.nome = nome
    }

    leia() { // metodo que significa o comportamento ou movimento da classe 
        console.log(this.nome + "gostei de ler")
    }
}

const objeto = new pessoa('Mateus') // cria o objeto da classe e armazena em uma variavel para ser usado
objeto.leia() // chama o metodo do objeto