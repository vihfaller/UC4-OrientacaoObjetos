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

-------------------------------------------------------------------------------------------------

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


class Usuario{
    nome:string = 'Vitoria'
    valor:number = 50

}
class Pagamento{
    cartao:boolean;
    dinheiro:boolean

    constructor(cartao:boolean,
        dinheiro:boolean)
    {
        this.cartao = cartao
        this.dinheiro = dinheiro
    }
}

class Onibus extends Veiculo{
    bitrem: number = 5
    
    pagamento(pagamento: Pagamento, user: Usuario):string{
        return `Usuario ${user.nome} pagou ${this.bitrem} com ${pagamento.cartao}.`
    }

}

class Aviao extends Veiculo{
    asa:number = 2
    valor: number = 20

    pagamento(pagamento:Pagamento,user:Usuario):string{
        return `Usuario ${user.nome} pagou ${this.valor} com ${pagamento.dinheiro}`
    }
}

class Moto extends Veiculo{
    aros: number
    valor: number = 10

    pagamento(pagamento:Pagamento,user:Usuario):string{
        return `Usuario ${user.nome} pagou ${this.valor} com ${pagamento.cartao}`
    }
}

class Trem extends Veiculo{
    rodeiro: number
    valor: 15

    pagamento(pagamento:Pagamento,user:Usuario):string{
        return `Usuario ${user.nome} pagou ${this.valor} com ${pagamento.dinheiro}`
    }
}

let vehicle = new Veiculo (4,1234,8,90)
let bus = new Onibus(8,25846,50,60)
let airplane = new Aviao(2,456789,200,150)
let motorcycle = new Moto(2,5468,2,130)
let tremer = new Trem(12,45846,80,150)
let user1 = new Usuario()
user1.nome = 'Pedro'
let user2 = new Usuario()
user2.nome = 'Roberta'
let payment = new Pagamento(true,false)
let payment2 = new Pagamento(false,true)

console.log ()

---------------------------------------------------------------------------------

class Banco{
    taxa_Retorno:number=10
    risco:string='médio'
    liquidez:'mensal'
}
class Conta extends Banco{
    nome:string = ''
    saldo:number = 50000
}
class RendaFixa extends Conta{

}

class RendaVariavel extends Conta{

}

class Multimercado extends Conta{

}

let bank = new Banco()
let cont = new Conta()
let cont1 = new Conta()
cont1.nome = 'Luis'
let cont2 = new Conta()
cont2.nome = 'Vitoria'
let rendFixed = new RendaFixa()
let variavel = new RendaVariavel()
let mercardMulti = new Multimercado()
*/

class 