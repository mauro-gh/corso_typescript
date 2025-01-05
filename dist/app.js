"use strict";
function somma(a, b) {
    return a + b;
}
//console.log(somma(2,8))
let prova1 = 10;
// string
// number
// boolean
// object
// array
// tuple (lunghezza fissa), solo TS
const persona2 = {
    nome: 'luca',
    cognome: 'rossi'
};
//console.log(persona2.nome);
//console.log(persona2.eta);
let persona3 = {
    nome: 'luca',
    cognome: 'rossi'
};
//persona3.nome = 'aaa' //err
//oggetto con 3 proprieta'
let persona4;
//definiamo ogetto
persona4 = {
    nome: "luca",
    cognome: "rossi",
    eta: 33
};
//funzione con 1 solo parametro di tipo oggetto
function getData(data) {
    console.log("data.id");
    console.log(data.id);
}
// chiamata funzione
const param = { id: 1321, user: "aaaa" };
getData(param);
// array con []
const arr1 = [1, 2, 3];
// tupla array con dimensioni fisse, solo 2 numeri
const tuplaMassimo2Numeri = [1, 2];
const tupla1 = {
    id: '',
    codice: '',
    players: ['mario1', 'luca', 'gianni'], //array
    solo2: tuplaMassimo2Numeri //tupla
};
tupla1.solo2 = [4, 5];
console.log(tupla1);
// any solo TS
let qualsiasi;
qualsiasi = true;
// union solo TS
let stringa_o_numero_o_array = ["aaaa", "bbb", "ddd"];
let solonumeri_o_boolean = true;
let solonumeri_o_boolean2 = 2222;
solonumeri_o_boolean = 10; // ok
let persona;
persona = {
    nome: 'mario',
    cognome: 'rossi',
    eta: 30
};
function trovaPersona(p) {
    console.log('Trovato!!: ' + p.nome + ' ' + p.cognome);
}
trovaPersona(persona);
let a = 333;
// enum solo TS
var Ruolo;
(function (Ruolo) {
    Ruolo[Ruolo["ADMIN"] = 0] = "ADMIN";
    Ruolo[Ruolo["USER"] = 1] = "USER";
    Ruolo[Ruolo["GUEST"] = 999] = "GUEST";
})(Ruolo || (Ruolo = {}));
const persona5 = {
    id: 22,
    ruolo: Ruolo.GUEST
};
const persona6 = {
    id: 23,
    ruolo: 999
};
