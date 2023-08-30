class aprovacao{
    constructor(nota1,nota2){
    this.nota1 = nota1
    this.nota2 = nota2
    this.media = 0
    this.minima = 0
    }
    notamin(){
        this.media = (this.nota1 + this.nota2)/2
        this.minima = (7*3) - (this.nota1 + this.nota2)
    }
}
aluno = new aprovacao (6,8)
aluno.notamin()
console.log(`A sua media atual é ${aluno.media}. Você precisa tirar ${aluno.minima} na proxima prova.`)