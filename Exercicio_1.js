function ClassificarIdade(idade) {
    if (!isNaN(idade) && idade < 0) {
        console.log("Idade inválida.");
    } else if (idade < 12) {
        console.log("Criança");
    } else if (idade < 17) {
        console.log("Adolecente");
    } else if (idade < 59) {
        console.log("Adulto");
    } else if (idade > 60) {
        console.log("Você é um idoso.");
    }
}
ClassificarIdade("sim")