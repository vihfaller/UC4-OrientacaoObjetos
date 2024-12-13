

abstract class Vehicle{
    engine:string
    loadCapacity: number
    numberWheels: number

    constructor(
        engine: string,
        loadCapacity: number,
        numberWheels: number
    )
    {
        
        this.engine = engine
        this.loadCapacity = loadCapacity
        this.numberWheels = numberWheels
    }

    abstract driver(): string

    abstract license():string

    abstract som():void

}

class Car extends Vehicle{

    driver(){return 'mototrista: Vitória'}

    license(){return 'O motorista possui a Carteira B'}

    som(){'Beh-Beh'}
}

class Truck extends Vehicle{

    driver(){return 'motorista: Lucas'}

    license(){return 'O motorista possui a Carteira C'}

    som(){'vrum vrum'}
}

class Motorcycle extends Vehicle{

    driver(){return 'motorista: Vitor'}

    license(){return 'O motorista possui a Carteira A'}

    som(){'Bi-Bi'}
}

let moto = new Motorcycle ('160CC', 2, 2)

let caminhao = new Truck('2000CC', 5, 6)


let carro = new Car('400CC', 5, 4)


let escolha = 1

if(escolha == 1) {
    console.log (moto.driver())
    console.log (moto.license())
} else if(escolha == 2) {
    console.log (caminhao.driver())
    console.log (caminhao.license())
} else {
    console.log (carro.driver())
console.log (carro.license())
}
