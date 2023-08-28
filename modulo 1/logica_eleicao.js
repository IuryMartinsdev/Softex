const prompt = require("prompt")
const colocacao = {
    candidato_x: 889,
    candidato_y: 847,
    candidato_z: 515,
    branco: 0,
    nulo: 0,
};

let finalizar = false;

while (!finalizar) {
    const voto = prompt("Digite em qual candidato deseja votar (1-x, 2-y, 3-z ou 4-Branco): ")
    
    if (!isNaN(voto)) {
        const votonum = parseInt(voto);
        
        switch (votonum) {
            case 1:
                colocacao.candidato_x++;
                break;
            case 2:
                colocacao.candidato_y++;
                break;
            case 3:
                colocacao.candidato_z++
                break;
            case 4:
                colocacao.branco++;
                break;
            default:
                colocacao.nulo++
                break;
        }
    } else {
        console.log("Voto inválido. Tente novamente");
         }
        const totalvotos = colocacao.candidato_x+colocacao.candidato_y+colocacao.candidato_z+colocacao.branco+colocacao.nulo
        console.log("Resultado da votação");
        console.log(`candidato_x: ${colocacao.candidato_x} votos`);
        console.log(`candidato_y: ${colocacao.candidato_y} votos`);
        console.log(`candidato_z: ${colocacao.candidato_z} votos`);
        console.log(`Votos em branco: ${colocacao.candidato_x} votos`)
        console.log(`Votos  anulados: ${colocacao.nulo}`)
        console.log(`Total de votos: ${totalvotos}`)
        
        let vencedor = "Nenhum candidato";
        let maiorvotos = 0;
        
        for (const candidato in colocacao) {
            if (colocacao[candidato] > maiorvotos && candidato !== "nulo") {
                vencedor = candidato;
                maiorvotos = colocacao[candidato];
                console.log(`Vencedor: ${vencedor}`)
            }
        }
}
console.log(`Vencedor: ${vencedor}`)
