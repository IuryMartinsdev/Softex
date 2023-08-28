class disciplina{
    constructor(matricula,nome,nota1,nota2,notatrabalho){
    this.matricula = matricula
    this.nome = nome
    this.nota1 = nota1
    this.nota2 = nota2
    this.notatrabalho = notatrabalho
    }
    media(){
        this.mediaprova = (this.nota1 + this.nota2)/2
        this.mediafinal = (this.mediaprova * 2.5 + this.notatrabalho * 2) / (2.5 + 2)
        return this.mediafinal.toFixed(1)
    }
    aprovacao(){
        this.final = this.media()
        if(this.final >= 6.5) {
            return "Aprovado"
        } else {
            this.aprovar = (6.5 - this.final) * 2
            return `Você precisa de ${this.aprovar.toFixed(1)} para ser aprovado`
        }
    }
}
var aluno = new disciplina(35487,"Iury",1,8,7)
console.log("N° da matricula:",aluno.matricula)
console.log("Nome do aluno:",aluno.nome)
console.log("Nota da primeira prova:",aluno.nota1)
console.log("Nota da segunda prova:",aluno.nota2)
console.log("Nota do trabalho", aluno.notatrabalho)
console.log("A media do aluno é:",aluno.media())
console.log(aluno.aprovacao())
