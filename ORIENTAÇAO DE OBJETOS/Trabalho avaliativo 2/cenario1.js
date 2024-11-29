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
var Cliente = /** @class */ (function () {
    function Cliente(nome, fone, endereco, cpf) {
        this.nome = nome, this.fone = fone, this.endereco = endereco, this.cpf = cpf;
    }
    return Cliente;
}());
var ClienteContratante = /** @class */ (function (_super) {
    __extends(ClienteContratante, _super);
    function ClienteContratante(freteFrequente) {
        var _this = this;
        _this.freteFrequente = freteFrequente;
        return _this;
    }
    return ClienteContratante;
}(Cliente));
var ClienteEsporadico = /** @class */ (function (_super) {
    __extends(ClienteEsporadico, _super);
    function ClienteEsporadico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClienteEsporadico;
}(Cliente));
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    return Veiculo;
}());
var Pedido = /** @class */ (function () {
    function Pedido(pedido, cliente, carga, entrega, motorista, rota) {
        this.cliente = [];
        this.carga = [];
        this.entrega = [];
        this.motorista = [];
        this.rota = [];
        this.pedido = pedido;
    }
    return Pedido;
}());
var Carga = /** @class */ (function () {
    function Carga() {
    }
    Carga.prototype.adicionarPedido = function (pedido) { this.pedido.push(Carga); };
    return Carga;
}());
var Motorista = /** @class */ (function () {
    function Motorista() {
    }
    return Motorista;
}());
var Rota = /** @class */ (function () {
    function Rota() {
    }
    return Rota;
}());
var Entrega = /** @class */ (function () {
    function Entrega() {
    }
    return Entrega;
}());
var NotaFiscal = /** @class */ (function () {
    function NotaFiscal() {
    }
    return NotaFiscal;
}());
var customer = new Cliente('Vitoria', 213465, 'Saldanha da Gama', '268974156230');
var contracting = new ClienteContratante(true);
var sporadic = new ClienteEsporadico('Vitor', 8458485, 'Rua Brasil', '8474858');
var vehicle = new Veiculo();
var load = new Carga();
var driver = new Motorista();
var route = new Rota();
var delivery = new Entrega();
var invoice = new NotaFiscal();
Carga.adicionarpedido(Pedido);
