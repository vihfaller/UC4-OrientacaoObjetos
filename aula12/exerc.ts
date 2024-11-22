/*   Cenario 1

class Cliente{
    nome_empresa:string
    cnpj: number
    endereco: string
    telefone:number

    constructor(nome_empresa:string,
        cnpj:number,
        endereco:string,
        telefone:number
    )
    {
        this.nome_empresa = nome_empresa
        this.cnpj = cnpj
        this.endereco = endereco
        this.telefone = telefone
    }
}

class Veiculo{
    placa:number
    modelo:string
    capacidade:number
    tipoCarga:string
    status:string
}

class Pagamento{
    dinheiro:boolean
    cartao:boolean

    constructor(dinheiro:boolean,
        cartao:boolean
    ){
        this.dinheiro = dinheiro
        this.cartao = cartao
    }
}

class NotaFiscal{
    numero:number
    data:number
    cliente: Cliente
    item:string
    valor_total:number
    pagamento: Pagamento

    validarPagamento(pagamento:Pagamento){
        let validar = true
        pagamento.dinheiro(element=>{
            if(element === 'nota fiscal'){
                validar = true
            }
        })
    }
}


class ClienteContratante extends Cliente{
    produto_frequencia:string

}

class ClienteEsporadico extends Cliente{
    ultimaCompra:number
}

class Carga{
    peso:number
    volume:number
    tipo:string
    origem:string
    destino:string
    embarque:number
    entrega:number


}

class Motorista{
    nome:string
    cnh:number
    categoria:string
    experiencia:string

    constructor(nome:string,
        cnh:number,
        categoria:string,
        experiencia:string
    )
    {
        this.nome = nome
        this.cnh = cnh
        this.categoria = categoria
        this.experiencia = experiencia
    }
}

class Rota{
    origem:string
    destino:string
    distancia:number
    tempo_viagem:number
    veiculo: Veiculo

    constructor(origem:string,
        destino:string,
        distancia:number,
        tempo_viagem:number,
        veiculo: Veiculo
    )
    {
        this.origem = origem
        this.destino = destino
        this.distancia = distancia
        this.tempo_viagem = tempo_viagem
        this.veiculo = veiculo
    }
}

class Entrega{
    data:string
    hora:number
    cliente: Cliente
    carga: Carga
    veiculo: Veiculo
    motorista: Motorista
    status: string
    observacao:string

    constructor(data:string,
        hora:number,
        cliente: Cliente,
        carga: Carga,
        veiculo: Veiculo,
        motorista: Motorista,
        status:string,
        observacao:string
    )
    {
        this.carga = carga
        this.cliente = cliente
        this.data = data
        this.hora = hora
        this.motorista = motorista
        this.observacao = observacao
        this.status = status
        this.veiculo = veiculo
    }
}


let client = new Cliente('LoudiPoli',132465,'Rua Neves da Fontura,180',4586879)
let vehicle = new Veiculo()
let payment = new Pagamento(true,false)
let fiscal = new NotaFiscal()
let contratante = new ClienteContratante('LoudiPoli',132465,'Rua Neves da Fontura,180',4586879)
let esporadico = new ClienteEsporadico('Blabla',8549,'Rua Brasil,89',4846)
let carg = new Carga()
let driver = new Motorista('Carlinhos',879847,'C, CE','carga pesada')
let route = new Rota('Sao Leopoldo','Bento Gonçalves',88,90,new Veiculo())
let delivery = new Entrega('28/11/2024',11,new Cliente('LoudiPoli',132465,'Rua Neves da Fontura,180',4586879),new Carga(),new Veiculo(),new Motorista('Carlinhos',879847,'C, CE','carga pesada'),'em andamento','nenhuma')
*/

//   Cenario 2

class Funcionario{
    public nome:string
    private cpf:number
    public cargo:string
    private salario:number
    private comissionado: boolean
    private horista: number
    private assalariado: number

    constructor(nome:string,
        cpf:number,
        cargo:string,
        salario:number,
        comissionado:boolean,
        horista: number,
        assalariado: number 
    )
    {
        this.nome = nome
        this.cpf = cpf
        this.cargo = cargo
        this.salario = salario
        this.comissionado = comissionado
        this.horista = horista
        this.assalariado = assalariado
    }
}

class Ativo extends Funcionario{
    equipamento:string
    software:number

    constructor(equipamento:string,
        software:number
    )
    {
        this.equipamento = equipamento
        this.software = software
    }
}
