var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Valid e Calc de CPF
function calcularDigitosCpf(cpfBase) {
    // Converte a string em um array de numeros
    var digitos = cpfBase.split('').map(Number);
    if (digitos.length !== 9) {
        throw new Error("A base do CPF DEVE conter 9 números.");
    }
    // Calc primeiro digito (DV1)
    var soma1 = 0;
    var multiplicador1 = 10;
    for (var i = 0; i < digitos.length; i++) {
        soma1 += digitos[i] * multiplicador1;
        multiplicador1--;
    }
    var resto1 = soma1 % 11;
    var dv1 = (resto1 === 0 || resto1 === 1) ? 0 : 11 - resto1;
    // Calc segundo digito (DV2)
    // Inclui o DV1 ao final da lista de numeros
    var cpfComDv1 = __spreadArray(__spreadArray([], digitos, true), [dv1], false);
    var soma2 = 0;
    var multiplicador2 = 11;
    for (var i = 0; i < cpfComDv1.length; i++) {
        soma2 += cpfComDv1[i] * multiplicador2;
        multiplicador2--;
    }
    var resto2 = soma2 % 11;
    var dv2 = (resto2 === 0 || resto2 === 1) ? 0 : 11 - resto2;
    // Retorna o CPF completo (9 digitos base + DV1 + DV2)
    return "RESULTADO: Validador CPF:\n".concat(cpfBase).concat(dv1).concat(dv2);
}
// Multiplos de 3 entre dois n°s
function imprimirMultiplosdeTres(num1, num2) {
    // Ident menor e maior n
    var menor = Math.min(num1, num2);
    var maior = Math.max(num1, num2);
    // Array de armaz. multiplos
    var multiplos = [];
    // Percorrer todos os n°s.
    for (var i = menor; i <= maior; i++) {
        if (i % 3 === 0) {
            multiplos.push(i);
        }
    }
    // Resultado
    console.log("RESULTADO: Multiplos de 3: ");
    console.log(multiplos.join(", "));
}
// Testes:
// CPF                      Insira o n° de CPF
console.log(calcularDigitosCpf("891388350")); // Retornará "89138835037"
// Multiplos de 3      N°s de x a y
imprimirMultiplosdeTres(0, 10); // Retornara "0, 3, 6, 9"
