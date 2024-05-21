"use strict";
//Função de multiplicação
function calcularMultiplicacao(a, b) {
    const Multiplicacao = a * b;
    return Multiplicacao;
}
;
const resultado = calcularMultiplicacao(5, 8);
console.log(resultado);
//Função de saudação
function saudacao(nome) {
    return `Olá ${nome}`;
}
;
const seuNome = "Luiz";
const saudacaoSeuNome = saudacao(seuNome);
console.log(saudacaoSeuNome);
