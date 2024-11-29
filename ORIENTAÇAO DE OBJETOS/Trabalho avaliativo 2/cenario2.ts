class Funcionario{
    funcionario:string
    sobrenome:string
    salario: number = 0

    constructor(sobrenome:string,
        salario:number,
        funcionario:string
    )
    {this.sobrenome=sobrenome; this.salario=salario; this.funcionario=funcionario}

    getName(){
        return this.funcionario
    }
}

class Pagamento{
    pix:string;
    dinheiro:string
    
    public pagamento(chefe:Employer, empregado:Funcionario, método:Pagamento){
        return `O funcionário ${empregado.funcionario} recebeu seu salário no valor de R$${método.pix} por ${chefe.nomeCompleto}.`
    }

    setName(){
        return this.dinheiro
        return this.pix
    }

    getName(){
        return this.dinheiro
        return this.pagamento
    }
}
    

class Horista extends Funcionario{//salario de 1.000;;;; hrsMes/7= resultado * 4 = resultado *8
}

class Assalariado extends Funcionario{//salario de 3.000;;;;; 3.000/220
}

class Comissionado extends Funcionario{//salario de 4.895;;;;; totalVenda * porcentagem
}

class Ativo{//salario de 3.000;;;;; ativo = passivo + patrimonio liquido
    equipamento:string
    software:number
    manutencao:string

    constructor(equipamento:string, software:number, manutencao:string)
    {
        this.equipamento=equipamento
        this.software=software
        this.manutencao=manutencao
    }

    aparelho1(equip1:Ativo, software:Ativo, manut:Ativo){
         return `O aparelho ${equip1.equipamento} está com o software ${this.software} com a atualização ${manut.manutencao}.`}

    aparelho2(equip2:Ativo, software:Ativo, manut:Ativo){
         return `O aparelho ${equip2.equipamento} está com o software ${this.software} com a atualização ${manut.manutencao}.`}

    aparelho3(equip3:Ativo, software:Ativo, manut:Ativo){
        return `O aparelho ${equip2.equipamento} está com o software ${this.software} com a atualização ${manut.manutencao}.`}
}


class Employer extends Pagamento{
    nomeCompleto:string
    cargo:string

    constructor(nome:string,sobrenome:string,cargo:string)
    {super()
        this.nomeCompleto=nome
        this.cargo=cargo
    }
}




let employee1 = new Funcionario('Lucas Petry', 3000,'assalariado')
let employee2 = new Funcionario ('Vitor Reis', 1000, 'Horista')
let employee3 = new Funcionario ('Vitoria Bier', 4895,'Comissionada')


let equip1 = new Ativo ('PC',10,'Em progresso')
let equip2 = new Ativo ('Notebook', 11, 'Concluído')
let equip3 = new Ativo ('Tablet', 9, 'Não solicitado')


let payday = new Pagamento()


let boss = new Employer('Vitória','Faller','Diretora')



