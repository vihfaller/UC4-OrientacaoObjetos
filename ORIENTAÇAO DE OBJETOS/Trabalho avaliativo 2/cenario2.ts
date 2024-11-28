class Funcionario{
    funcionario:string
    sobrenome:string
    salario: number = 0

    constructor(nomeCompleto:string,
        salario:number,
        funcionario:string
    )
    {this.sobrenome=sobrenome; this.salario=salario; this.funcionario=funcionario}

    getName(){
        return this.funcionario
    }
}

class Pagamento{
    pix:boolean;
    dinheiro:boolean

    constructor(pix:boolean,
        dinheiro:boolean)
    {
        this.pix = pix
        this.dinheiro = dinheiro
    }
}

class Horista extends Funcionario{//salario de 1.000;;;; hrsMes/7= resultado * 4 = resultado *8
    pagamento(pagamento: Pagamento, funcionario: Funcionario):string{
        return `Usuario ${funcionario.sobrenome} pagou ${this.salario} com ${pagamento.pix}.`
    }
}

class Assalariado extends Funcionario{//salario de 3.000;;;;; 3.000/220
    private pagamento(pagamento: Pagamento, funcionario: Funcionario):string{
        return `Usuario ${funcionario.sobrenome} pagou ${this.salario} com ${pagamento.dinheiro}.`
    }
}

class Comissionado extends Funcionario{//salario de 4.895;;;;; totalVenda * porcentagem
    private pagamento(pagamento: Pagamento, funcionario: Funcionario):string{
        return `Usuario ${funcionario.sobrenome} pagou ${this.salario} com ${pagamento.pix}.`
    }
}

class Ativo{//salario de 3.000;;;;; ativo = passivo + patrimonio liquido
    equipamento:string
    software:number
    manutencao:string
}


setName('Vitoria')