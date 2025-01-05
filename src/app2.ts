function somma1(num1: number, num2 = 20): number{

    console.log(num1 + num2)
    return num1+num2
}

function somma2(num1: number, num2 = 20): void{

    console.log('any')

}

// tipoSomma1 e' di tipo Funzione (qualsiasi)
let tipoSomma1: Function
// ora e' di tipo somma1
tipoSomma1 = somma1

// qualsiasi funzione che si aspetta 2 arg number e restituisce number
let tipoFunzioneConQuestaFirma: (x: number, y: number) => number
tipoFunzioneConQuestaFirma = somma1 //ok
// tipoFunzioneConQuestaFirma = somma2 //ko, ha firma diversa

// funzione con callback, con funzione che restituisce void
function funzioneConCallback (x1: number, cb: (z: string)=>void){
    console.log('funzioneConCallback!!!')
    console.log('input: ' + x1)
    cb('-> callback: ' + x1.toString())
}


document.write("<H4>")
//document.writeln(tipoSomma1(11,5).toString())
document.write("<BR>")
//somma2(4)
funzioneConCallback(5, (p1: string)=>{
    console.log(p1)
    document.write(p1)
    document.write("<BR>")
})
funzioneConCallback(9, (p1: string)=>{
    console.log(p1)
    document.write(p1)
})

document.write("</H4>")



