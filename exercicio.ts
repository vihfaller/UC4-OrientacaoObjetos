/*
class Livro{
    autor:string = ''
    categoria:string = ''
    editora:string = ''
    classeIndicativa:number = 0
    numPagina:number = 0
    capitulo:number = 0
}

class Autor extends Livro{
   nome: string= ''
   livrosVendidos: number = 0 


}



class Leitor extends Livro{
    nome: string=''
    comprado:string=''

    Lido(sound: string): void;
    Lido(sound?: string): void;
 
    Lido(sound: string){
     if(sound===undefined){
         console.log('Amei!')
     }
     else{
         console.log('Não curti')
     }
    }
}

let leitor = new Leitor()
leitor.Lido()
leitor.Lido('mais ou menos')

--------------------------------------------------------------------------------------------------

class Casa{
    parede:number=0
    andare:number=0
    comodo:number=0
}

class Morador extends Casa{
    nome: string=''
    cpf: number=0

    Entrar(sound: string): void;
    Entrar(sound?: string): void;

    Entrar(sound:string){
        if (sound===undefined){
            console.log('Que Linda!')
        }
        else{
            console.log("É estranha...")
        }
    }
}

class Vendedor extends Casa{
    nome:string=''
    empresa:string=''

    Vender(sound:string): void;
    Vender(sound?: string): void;
}



let morador = new Morador()
morador.Entrar()
morador.Entrar('Não Gostei')
*/