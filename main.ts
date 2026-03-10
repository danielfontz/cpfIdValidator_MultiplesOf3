// Valid e Calc de CPF
function calcularDigitosCpf(cpfBase:string): string {
    // Converte a string em um array de numeros
    const digitos: number[] = cpfBase.split('').map(Number);

    if (digitos.length !== 9) {
        throw new Error("A base do CPF DEVE conter 9 números.");
    }

    // Calc primeiro digito (DV1)
    let soma1: number = 0;
    let multiplicador1: number = 10;

    for (let i = 0; i < digitos.length; i++) {
        soma1 += digitos[i] * multiplicador1;
        multiplicador1--;
    }

    const resto1: number = soma1 % 11;
    const dv1: number = (resto1 === 0 || resto1 === 1) ? 0 : 11 - resto1;

    // Calc segundo digito (DV2)
    // Inclui o DV1 ao final da lista de numeros
    const cpfComDv1: number[] = [...digitos, dv1];
    let soma2: number = 0;
    let multiplicador2: number = 11;

    for (let i = 0; i < cpfComDv1.length; i++) {
        soma2 += cpfComDv1[i] * multiplicador2;
        multiplicador2--;
    }

    const resto2: number = soma2 % 11;
    const dv2: number = (resto2 === 0 || resto2 === 1) ? 0 : 11 - resto2;

    // Retorna o CPF completo (9 digitos base + DV1 + DV2)
    return `RESULTADO: Validador CPF:\n${cpfBase}${dv1}${dv2}`;
}

// Multiplos de 3 entre dois n°s
function imprimirMultiplosdeTres(num1:number, num2: number): void {
    // Ident menor e maior n
    const menor: number = Math.min(num1, num2);
    const maior: number = Math.max(num1, num2);
    
    // Array de armaz. multiplos
    const multiplos: number[] = [];

    // Percorrer todos os n°s.
    for (let i = menor; i <= maior; i++) {
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