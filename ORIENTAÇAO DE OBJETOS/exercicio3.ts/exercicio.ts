/*
class Banco{
    saldo:number
    taxaJuro: number
    limiteSaque:number
    usuario: string

    constructor(saldo:number,
        taxaJuro:number,
        limiteSaque:number,
        usuario:string)
    {
        this.saldo = saldo
        this.taxaJuro =taxaJuro
        this.limiteSaque = limiteSaque
        this.usuario = usuario
    }


}



class Corrente extends Banco{

}

class Poupança extends Banco{

}

class Investimento extends Banco{

}




let banco = new Banco(1000,20,300,'Vitoria')
let corrente = new Corrente(1000,20,300,'Vitoria')
let poupanca = new Poupança (1000,20,300,'Vitoria')
let investimento = new Investimento (1000,20,300,'Vitoria')
*/

class Veiculo{
    roda:number;
    placa:number;
    capacidade:number;
    velocidade:number

    constructor (roda:number,
        placa:number,
        capacidade:number,
        velocidade:number)
    {
        this.roda = roda
        this.placa = placa
        this.capacidade = capacidade
        this.velocidade = velocidade
    }
}

class Onibus extends Veiculo{
    bitrem: boolean
}

class Aviao extends Veiculo{
    asa:number
}

class Bicicleta extends Veiculo{
    aros: number
}

class Trem extends Veiculo{
    rodeiro: number
}

