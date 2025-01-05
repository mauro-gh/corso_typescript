function somma(a: number, b:number){
        return a+b
}
//console.log(somma(2,8))

let prova1: number = 10

// string
// number
// boolean
// object
// array
// tuple (lunghezza fissa), solo TS

const persona2 = {
        nome: 'luca',
        cognome: 'rossi'
    }
    
//console.log(persona2.nome);
//console.log(persona2.eta);

let persona3: object = {
        nome: 'luca',
        cognome: 'rossi'
}

//persona3.nome = 'aaa' //err


//oggetto con 3 proprieta'
let persona4: {
        nome: string;
        cognome: string;
        eta: number;
}

//definiamo ogetto
persona4 = {
        nome: "luca",
        cognome: "rossi",
        eta: 33
}

//funzione con 1 solo parametro di tipo oggetto
function getData(data: {id: number; user: string})
{
        console.log("data.id")
        console.log(data.id)
}
// chiamata funzione
const param = {id: 1321, user: "aaaa"}
getData(param)


// array con []
const arr1: number[] = [1,2,3]

// tupla array con dimensioni fisse, solo 2 numeri
const tuplaMassimo2Numeri: [number, number] = [1,2]

const tupla1 = {
        id: '',
        codice: '',
        players: ['mario1','luca', 'gianni'], //array
        solo2: tuplaMassimo2Numeri //tupla
}

tupla1.solo2 = [4,5]

console.log(tupla1)



// any solo TS
let qualsiasi: any
qualsiasi = true

// union solo TS
let stringa_o_numero_o_array: string | number | string[] = ["aaaa","bbb","ddd"];
let solonumeri_o_boolean: number | boolean = true ;
let solonumeri_o_boolean2: number | boolean = 2222 ;

solonumeri_o_boolean = 10      // ok
// solonumeri_o_boolean = '20' <-- err

// custom type (o alias) solo TS
// creo tipo
type Persona = {
        nome: string;
        cognome: string;
        eta: number;    
}
let persona: Persona;
persona = {
        nome: 'mario',
        cognome: 'rossi',
        eta: 30
}
function trovaPersona(p: Persona)
{
        console.log('Trovato!!: ' + p.nome + ' ' + p.cognome)
}
trovaPersona(persona)

type prova = string | number;
let a: prova = 333;

// enum solo TS
enum Ruolo {
        ADMIN,
        USER,
        GUEST = 999
}

const persona5 = {
        id: 22,
        ruolo: Ruolo.GUEST
}
const persona6 = {
        id: 23,
        ruolo: 999
}
