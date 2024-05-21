//Função de multiplicação

function calcularMultiplicacao (a: number, b: number): number {
    const Multiplicacao = a * b;
    return Multiplicacao;
};
const resultado = calcularMultiplicacao(5, 8);
console.log(resultado);

//Função de saudação

function saudacao(nome: string,): string {
    return `Olá ${nome}`;
};
const seuNome = "Luiz";
const saudacaoSeuNome = saudacao(seuNome);
console.log(saudacaoSeuNome);

