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
var Funcionario = /** @class */ (function () {
    function Funcionario(sobrenome, salario, funcionario) {
        this.salario = 0;
        this.sobrenome = sobrenome;
        this.salario = salario;
        this.funcionario = funcionario;
    }
    Funcionario.prototype.getName = function () {
        return this.funcionario;
    };
    return Funcionario;
}());
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    Pagamento.prototype.pagamento = function (chefe, empregado, método) {
        return "O funcion\u00E1rio ".concat(empregado.funcionario, " recebeu seu sal\u00E1rio no valor de R$").concat(método.pix, " por ").concat(chefe.nomeCompleto, ".");
    };
    Pagamento.prototype.setName = function () {
        return this.dinheiro;
        return this.pix;
    };
    Pagamento.prototype.getName = function () {
        return this.dinheiro;
        return this.pagamento;
    };
    return Pagamento;
}());
var Horista = /** @class */ (function (_super) {
    __extends(Horista, _super);
    function Horista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Horista;
}(Funcionario));
var Assalariado = /** @class */ (function (_super) {
    __extends(Assalariado, _super);
    function Assalariado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Assalariado;
}(Funcionario));
var Comissionado = /** @class */ (function (_super) {
    __extends(Comissionado, _super);
    function Comissionado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Comissionado;
}(Funcionario));
var Ativo = /** @class */ (function () {
    function Ativo(equipamento, software, manutencao) {
        this.equipamento = equipamento;
        this.software = software;
        this.manutencao = manutencao;
    }
    Ativo.prototype.aparelho1 = function (equip1, software, manut) {
        return "O aparelho ".concat(equip1.equipamento, " est\u00E1 com o software ").concat(this.software, " com a atualiza\u00E7\u00E3o ").concat(manut.manutencao, ".");
    };
    Ativo.prototype.aparelho2 = function (equip2, software, manut) {
        return "O aparelho ".concat(equip2.equipamento, " est\u00E1 com o software ").concat(this.software, " com a atualiza\u00E7\u00E3o ").concat(manut.manutencao, ".");
    };
    Ativo.prototype.aparelho3 = function (equip3, software, manut) {
        return "O aparelho ".concat(equip2.equipamento, " est\u00E1 com o software ").concat(this.software, " com a atualiza\u00E7\u00E3o ").concat(manut.manutencao, ".");
    };
    return Ativo;
}());
var Employer = /** @class */ (function (_super) {
    __extends(Employer, _super);
    function Employer(nome, sobrenome, cargo) {
        var _this = _super.call(this) || this;
        _this.nomeCompleto = nome;
        _this.cargo = cargo;
        return _this;
    }
    return Employer;
}(Pagamento));
var employee1 = new Funcionario('Lucas Petry', 3000, 'assalariado');
var employee2 = new Funcionario('Vitor Reis', 1000, 'Horista');
var employee3 = new Funcionario('Vitoria Bier', 4895, 'Comissionada');
var equip1 = new Ativo('PC', 10, 'Em progresso');
var equip2 = new Ativo('Notebook', 11, 'Concluído');
var equip3 = new Ativo('Tablet', 9, 'Não solicitado');
var payday = new Pagamento();
var boss = new Employer('Vitória', 'Faller', 'Diretora');
