class Usuario {
    constructor(email,senha) {
        this.email = email
        this.senha = senha + 2
    }
}
var usuario = new Usuario("Carlos@gmail.com",8)
console.log(`E-mail: ${usuario.email}`)
console.log(`Senha: ${usuario.senha}`)
