import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


document.querySelector('#main-button').addEventListener('click', () => {

    var nomeCliente = document.querySelector('input#nome-cliente').value; // Pegando nome do cliente do formulario
    var depositoinicial = document.querySelector('input#deposito-inicial').value

    if (nomeCliente != "" && depositoinicial != "") {
        const cliente1 = new Cliente(nomeCliente); // Instanciando o objeto cliente na classe Cliente
        const contaCorrente1 = new ContaCorrente(cliente1, depositoinicial); // Instanciando o objeto contaCorrente na classe ContaCorrente

        // Escondendo form e botão depois do click
        const formContainer = document.querySelector('#formContainer');
        formContainer.classList.add('hide');

        // Exibindo a div principal depois do click
        const maindiv = document.querySelector('#maindiv');
        if (maindiv.style.opacity = "none") {
            maindiv.style.display = "block";
        }
        //Alterando titulo e texto
        const title = document.querySelector('#title');
        title.innerHTML = "Você criou uma conta com sucesso!"
        const texto = document.querySelector('#texto');
        texto.style.display = 'none';

        const nome = document.getElementsByTagName('span')[0];
        nome.innerHTML = contaCorrente1.cliente.nome;
        const agencia = document.getElementsByTagName('span')[1];
        agencia.innerHTML = contaCorrente1.agencia;
        const contaCorrente = document.getElementsByTagName('span')[2];
        contaCorrente.innerHTML = contaCorrente1.contaCorrente;
        const saldo = document.getElementsByTagName('span')[3];
        saldo.innerHTML = ('R$ ' + contaCorrente1.saldo);


        document.querySelector('#botao-enviar-saque').addEventListener('click', () => {
            var valorSacado = document.querySelector('input#valor-sacado').value;
            var tituloModal = document.querySelector('#titulo-modal');
            var saldoFinal = document.querySelector('#saldo-atualizado');
            var saque = document.querySelector('p#valor');

            if (contaCorrente1.sacar(valorSacado) == 0) {
                tituloModal.innerHTML = ('Saque não pode ser realizado!');
                saque.innerHTML = ('<p>Valor sacado é maior que o saldo atual. </p>');
                saldoFinal.innerHTML = ('<p>Saldo atualizado: R$ ' + contaCorrente1.saldo + '</p>')
            } else {
                tituloModal.innerHTML = ('Saque realizado com sucesso')
                saque.innerHTML = ('<p>Valor sacado: R$ ' + valorSacado + '</p>');
                saldoFinal.innerHTML = ('<p>Saldo atualizado: R$ ' + contaCorrente1.saldo + '</p>');
                saldo.innerHTML = ('R$ ' + contaCorrente1.saldo);
            }
        })

        document.querySelector('#botao-enviar-deposito').addEventListener('click', () => {
            var valorDepositado = document.querySelector('input#valor-depositado').value;
            var tituloModal = document.querySelector('#titulo-modal');
            var saldoFinal = document.querySelector('#saldo-atualizado');
            var deposito = document.querySelector('p#valor');

            if (contaCorrente1.depositar(valorDepositado) == 0) {
                tituloModal.innerHTML = ('Deposito não pode ser realizado!');
                deposito.innerHTML = ('<p>Valor depositado é menor que zero. </p>');
                saldoFinal.innerHTML = ('<p>Saldo atualizado: R$ ' + contaCorrente1.saldo + '</p>')
            } else {
                tituloModal.innerHTML = ('Deposito realizado com sucesso!');
                deposito.innerHTML = ('<p>Valor depositado: R$ ' + valorDepositado + '</p>');
                saldoFinal.innerHTML = ('<p>Saldo atualizado: R$ ' + contaCorrente1.saldo + '</p>')
                console.log(contaCorrente1.saldo);
                saldo.innerHTML = ('R$ ' + contaCorrente1.saldo);
            }
        })


    } else {
        alert('Preencha os dados corretamente')
    }


})