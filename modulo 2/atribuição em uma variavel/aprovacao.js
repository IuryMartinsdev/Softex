class aprovacao{
    constructor(nota1,nota2,nota3)
    {
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.mediat = 0
        this.notafinal = ""
    }
    media(){
        this.mediat = (this.nota1 + this.nota2 + this.nota3)/3
        this.notafinal = this.mediat <= 7 ? "Reprovado" : "Aprovado"
        
    }
}

var aluno = new aprovacao(8,7,9)
aluno.media()
console.log(`A media da sua nota é ${aluno.mediat}. Você está ${aluno.notafinal}`)