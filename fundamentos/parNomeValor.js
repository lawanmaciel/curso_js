// Par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exec(){
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}
// Objetos são grupos aninhados de pares nomq/valor
const cliente ={
    nomne: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua do cacete',
        numero: '132',
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)