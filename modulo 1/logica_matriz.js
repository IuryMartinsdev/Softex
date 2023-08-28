var animais = [
    ["George","Rex","Sol"],
    ["Macaco","Cachorro","Gato"],
    ["5 anos","7 anos","4 anos"]
    ]
    
    var valores = ""
    for (var L = 0; L <= 2; L++) {
        for(var C = 0; C <=2; C++) {
            if(C < 2) {
                valores += animais [L] [C] + "\t | "
            } else{
                 valores += animais[L] [C] + "\n"
            }
        }
    }

alert(`Conteúdo da matriz:\n${valores}`)
