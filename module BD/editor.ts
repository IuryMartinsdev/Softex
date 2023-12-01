class Editor {
    protected observers: Function[]

    constructor() {
        this.observers = []
    }

    open(): void {
        console.log("Editor aberto")
    }

    save(): void {
        console.log("Conteúdo salvo:")
    }

    addObserver(observer: Function): void {
        this.observers.push(observer)
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer()
        }
    }
}

class TextEditor extends Editor {
    private lines: string[]

    constructor() {
        super()
        this.lines = []
    }

    insertLine(lineNumber: number, text: string): void {
        if (lineNumber < 1 || lineNumber > this.lines.length + 1) {
            console.log("Linha inválida para inserção.")
            return;
        }

        this.lines.splice(lineNumber - 1, 0, text);
        console.log(`Linha ${lineNumber} inserida: ${text}`)
    }

    removeLine(lineNumber: number): void {
        if (lineNumber < 1 || lineNumber > this.lines.length) {
            console.log("Linha inválida para remoção.")
            return
        }

        const removedLine = this.lines.splice(lineNumber - 1, 1)[0]
        console.log(`Linha ${lineNumber} removida: ${removedLine}`)
    }

    saveAndPrintContent(): void {
        super.save()
        this.printContent()
    }

    printContent(): void {
        console.log(this.lines.join('\n'))
    }

    openEditor(): void {
        super.open()
        this.notifyObservers()
    }

    handleUserInput(): void {
        console.log('Digite as linhas de texto. Digite "EOF" para encerrar.')

        while (true) {
            const input = prompt()

            if (input && input.toLowerCase() === 'eof') {
                this.saveAndPrintContent()
                break
            } else {
                this.insertLine(this.lines.length + 1, input)
            }
        }

        this.openEditor()
    }
}

const textEditor = new TextEditor()

textEditor.addObserver(() => {
    console.log("Observador: Editor aberto. Realizar ações adicionais se necessário.")
})

textEditor.handleUserInput()
