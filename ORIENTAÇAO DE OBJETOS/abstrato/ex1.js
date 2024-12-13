var readline = require('readline-sync')

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(engine, loadCapacity, numberWheels) {
        this.engine = engine;
        this.loadCapacity = loadCapacity;
        this.numberWheels = numberWheels;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.driver = function () { return 'mototrista: Vitória'; };
    Car.prototype.license = function () { return 'O motorista possui a Carteira B'; };
    Car.prototype.som = function () {
        'Beh-Beh';
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Truck.prototype.driver = function () { return 'motorista: Lucas'; };
    Truck.prototype.license = function () { return 'O motorista possui a Carteira C'; };
    Truck.prototype.som = function () {
        'vrum vrum';
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motorcycle.prototype.driver = function () { return 'motorista: Vitor'; };
    Motorcycle.prototype.license = function () { return 'O motorista possui a Carteira A'; };
    Motorcycle.prototype.som = function () {
        'Bi-Bi';
    };
    return Motorcycle;
}(Vehicle));
var moto = new Motorcycle('160CC', 2, 2);
var caminhao = new Truck('2000CC', 5, 6);
var carro = new Car('400CC', 5, 4);

let escolha = Number(readline.question("Escolha de 1 a 3: "))
if (escolha == 1) {
    console.log(moto.driver());
    console.log(moto.license());
}
else if (escolha == 2) {
    console.log(caminhao.driver());
    console.log(caminhao.license());
}
else {
    console.log(carro.driver());
    console.log(carro.license());
}
