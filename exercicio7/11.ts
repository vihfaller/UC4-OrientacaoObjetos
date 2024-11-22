class Itembiblioteca{
    titulo:string='';
    dataPubli:number=0;
}

class Livro extends Itembiblioteca{
    autor: string = "";
    isbn:number = 0;
    pagina:number = 0;
    genero: string = ""
    obterInfos:string=''
}

class Revista extends Itembiblioteca{
    editora: string = '';
    isnn: number = 0;
    numEdicoe: number = 0;
    obterInfos: string=''
}

class Usuario{
    nome:string='';
    matricula:number=0;
    tipo:string='';
    itensEmprestado:string=''
    
    cadastrarLivro() {
        let retirada:number=0;
        let devolucao:number=0;
        let livro:string=''
    }

    cadastrarRevista(){
        let retirada:number=0;
        let devolucao:number=0;
        let revista: string=''
    }

    cadastrarUsuario(){
        let nome: string='';
        let nascimento:number=0;
        let endereco:string='';
        let telefone:number=0
    }

    cadastrarEmprestimo(){
        let emprestado:string='';
        let categoria:string='';
        let pagina:number=0;
        let dataEmprestimo:number=0
    }
}


let itemBiblioteca = new Itembiblioteca()
let livro = new Livro()
let revista = new Revista()
let usuario = new Usuario()

//----------------------------------------------------------------------

class Animal{
    nome:string='';
    idade:number=0;
    especie:string=''
    raca:string='';
    peso: number=0
}

class Mamifero extends Animal{
    pelagem:string='';
    amamenta:string=''

    Som(sound:string):void;
    Som(sound?:string):void;

    Som(sound:string){
        if(sound === undefined){
            console.log('Muuuuu')
        }
        else{
            console.log('Miau Miau')
        }
    }

    cadastrarMamifero(){
        let alimentacao:string='';
        let brincar:string='';
        let ambiente:string=''
    }
}

class Ave extends Animal{
    envergaduraAsa:number=0;
    tipoBico:string='';
    tipoAquario: string=''

    Som(sound:string):void;
    Som(sound?:string):void;

    Som(sound:string){
        if(sound === undefined){
            console.log('Cocoricó')
        }
        else{
            console.log('Piu Piu')
        }
    }

    cadastrarAve(){
        let alimentacao:string='';
        let brincar:string='';
        let ambiente:string=''
    }
}

class Peixe extends Animal{
    tamanhoAquario:number=0;
    tipoAlimentacao: string=''

    Som(sound:string):void;
    Som(sound?:string):void;

    Som(sound:string){
        if(sound === undefined){
            console.log('BluBluBlu')
        }
        else{
            console.log('GlubiGlubi')
        }
    }

    cadastrarPeixe(){
        let alimentacao: string='';
        let brincar:string='';
        let ambiente:string=''
    }
}


let animal = new Animal()
let mamifero = new Mamifero()
let ave = new Ave()
let peixe = new Peixe()

//---------------------------------------------------

class Forma{
    nome:string='';
    cor:string=''
}

class Circulo extends Forma{
    raio:number=0

    calcularArea(){
        return 3.14*(this.raio*this.raio)
    }
}

class Retangulo extends Forma{
    base:number=0;
    altura:number=0

    calcularArea(){
        return this.base*this.altura
    }
}

class Triangulo extends Forma{
    base:number=0;
    altura:number=0

    calcularArea(){
        return (this.base*this.altura)/2
    }
}


let forma = new Forma()
let circulo = new Circulo()
let retangulo = new Retangulo()
let triangulo = new Triangulo()


