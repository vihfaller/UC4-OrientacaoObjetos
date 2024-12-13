class Cliente{nome: string; fone:number; endereco:string; cpf: string
    constructor (nome:string, fone:number, endereco:string, cpf:string)
    {this.nome=nome, this.fone=fone, this.endereco=endereco, this.cpf=cpf}
}

class ClienteContratante extends Cliente{freteFrequente:boolean
    constructor (nome, fone, endereco,cpf, freteFrequente:boolean)
    {
        super(nome, fone, endereco, cpf)
        this.freteFrequente=freteFrequente
    }
}

class ClienteEsporadico extends Cliente{freteEsporadicamente:boolean
}

class Veiculo{placa:string; modelo:string; capacidadeCarga:number; tipoCarga: ['seca', 'refrigerada','perigosa']
}

class Pedido{pedido: string;cliente:Cliente[]=[]; carga: Carga[]=[]; entrega: Entrega[]=[]; motorista: Motorista[]=[]; rota: Rota[]=[]
    constructor(pedido:string, cliente: Cliente, carga: Carga, entrega: Entrega, motorista: Motorista, rota: Rota)
    {this.pedido=pedido}
}
    

class Carga{pedido: Pedido; peso:number; volume: number; tipo: string; origem: string; destino: string; dataeEmbarque:number; dataEntrega:number
    adicionarPedido(pedido: Pedido){this.pedido}
}

class Motorista{nome: string; cnh:boolean; categoria:string; experiencia: string; veiculoAtribuido: string
}

class Rota{origem:string; destino:string; distancia:number; tempoViagem:number; veiculosPercorreramRota:string
}

class Entrega{ data:number; hora:number; cliente:Cliente; carga:Carga; veiculo:Veiculo; motorista: Motorista; observacao:string;status: ['pendente', 'em andamento', 'entrega']
}

class NotaFiscal{ numero:number; dataEmissao:number; cliente: Cliente; item: Carga; valorTotal:number; formaPagamento:['cartao','dinheiro']
}

let customer = new Cliente('Vitoria', 213465, 'Saldanha da Gama', '268974156230')
let contracting = new ClienteContratante ('Lucas',123456, 'Joao Correa', '06589', true)
let sporadic = new ClienteEsporadico('Vitor', 8458485, 'Rua Brasil', '8474858')
let vehicle = new Veiculo ()
let load = new Carga ()
let driver = new Motorista ()
let route = new Rota ()
let delivery = new Entrega ()
let invoice = new NotaFiscal()
