
var nomes = ["Iury", "João", "Maria", "Pedro", "Luan", "Lucas", "Jose", "Miguel", "Laura", "Rafael"]
var idades = [25, 30, 22, 28, 33, 29, 24, 27, 31, 26]
var cores= ["Azul", "Verde", "Vermelho", "Roxo", "Amarelo", "Laranja", "Rosa", "Preto", "Branco", "Marrom"];

function imprimirListas() {
  console.log("Nomes:", nomes)
  console.log("Idades:", idades)
  console.log("Cores Favoritas:", cores)
}
console.log("Listas Iniciais:")
imprimirListas();

idades.splice(1,1,21)
cores.splice(4,1,"Branco")
console.log("\nListas após Modificações:")
imprimirListas()
