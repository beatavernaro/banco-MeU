import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia = 1001;
    contaCorrente = Math.floor(Math.random() * 1000001);
    saldo;
    cliente;

    constructor(nomeCliente, depositoInicial) {
        this.cliente = nomeCliente;
        this.saldo = depositoInicial;
    }

    set cliente(nomeCliente) {
        if (nomeCliente instanceof Cliente) {
            this.cliente = nomeCliente.nome;
        }
    }

    get agencia() {
        return this.agencia;
    }

    get cliente() {
        return this.cliente;
    }

    get saldo() {
        return this.saldo;
    }

    sacar(valorSacado) {
        if (this.saldo < valorSacado) {
            return 0;
        } else {
            this.saldo -= parseFloat(valorSacado);
            return valorSacado;
        }
    }

    depositar(valorDepositado) {
        if (valorDepositado <= 0) {
            return 0;
        }
        this.saldo = this.saldo + parseFloat(valorDepositado);
    }

}
