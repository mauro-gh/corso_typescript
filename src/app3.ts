// classe ts
// con 2 proprieta, constructor e metodi

class Persona2{
    protected nome: string 
    protected cognome: string 
    constructor(
            _nome: string, 
            _cognome: string, 
            private eta: number = 0  //shorthand, non e' necessario dichiarare la prop!!
        ){
        this.nome = _nome,
        this.cognome = _cognome
    }


    presenta(): void{
        console.log(`Mi presento, sono ${this.nome} ${this.cognome} ho ${this.eta} anni`)
    }

    saluta(_persona: Persona2): void{
        console.log(`Arrivederci ${_persona.nome} ${_persona.cognome}`)
    }
}

let p1: Persona2 = new Persona2('mario','rossi',33)
let p2: Persona2 = new Persona2('marco','verdi', 44)

// p1.nome = 'altro_nome'  <--- ERR


p1.presenta()
p2.saluta(p1)
p2.presenta()
// passaggio di una classe come argomento del metodo saluta

// classi derivate
class Studente extends Persona2{

    constructor(
        _nome: string,
        _cognome: string,
        private materiaPref: string
    ){
            super(_nome, _cognome)            
    }
    
    presentastud(): void{
        console.log(`Sono lo studente ${this.nome} ${this.cognome} e adoro ${this.materiaPref} !`)
    }
}

let s1: Studente = new Studente('gino','studioso','storia')
s1.presenta()
s1.presentastud()




