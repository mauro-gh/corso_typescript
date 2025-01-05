
// lo stesso di prima ma con classe e metodi astratti

abstract class Persona2Abstract{
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


    abstract saluta(_persona: Persona2): void
}


// classi derivate
class Studente2 extends Persona2Abstract{
    

    constructor(
        _nome: string,
        _cognome: string,
        private materiaPref: string
    ){
            super(_nome, _cognome)            
    }
    

    saluta(): void{
        console.log(`Sono lo studente ${this.nome} ${this.cognome} e adoro ${this.materiaPref} !`)
    }


}

// class singleton
class Preside{
    private static instance: Preside;
    private constructor (private nome: string, private cognome: string){}

    static getInstance(){
        if(Preside.instance){
            return this.instance
        }else
        {
            this.instance = new Preside('marco','verdi')
            return this.instance
        }
    }

    presentaPreside(){
        console.log(`Sono il preside dr. ${this.nome} ${this.cognome}`)
    }
    

}

let s2: Studente2 = new Studente2('gino','studioso','storia')
s2.saluta()

Preside.getInstance().presentaPreside()


