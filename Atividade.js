/* /* -> Peça ao usuário digitar algum texto no pelo prompt e depois mostre esse texto com todas as letras maiúsculas, com todas as letras minúsculas e depois escreva no console letra por letra do texto que o usuário digitou. (Utilize o método split para fazer esse último) */

const texto = prompt("Digite seu Texto aqui: ")
const tamanho = texto.split("")


console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
tamanho.forEach((letra )=>{
    console.log(letra)
})

 /* <-------------------------------------------------------------------------------------------------------------------------------> 
 -> Crie um programa que pergunta quantos números o usuário deseja digitar (tanto inteiro quanto decimal) e receba os números e armazene esses números em um array e depois mostre a soma total deles, a média deles, mostre cada valor em uma potência de 2 e faça a raíz quadrada e cúbica de cada um. */

 let quantidade = parseInt(prompt('Insira quantos valores você deseja digitar: '))
 let armazena = []
 let soma = 0


 for(let i =0 ; i<quantidade ; i++){
    let numero = parseFloat(prompt(`Digite o ${i+1}º número: `))
     armazena[i] = numero
   
     soma += armazena[i]

    console.log(`${armazena[i]} na potencia de 2 é: ${Math.pow(armazena[i],2)}`)

    console.log(`A raiz cubica de ${armazena[i]} é: ${Math.pow(armazena[i],1/3)}`)
}
console.log(armazena)
console.log(`A soma dos números é ${soma}`)
console.log(`A média dos números é ${soma/quantidade}`)

/* <-------------------------------------------------------------------------------------------------------------------------------> 
-> Peça ao usuário para digitar um número binário e o converta para decimal. */

let binario = prompt('Digite um número binario: ')
arrayBinario = binario.split("")
exp = 0
soma2 = 0


for(let i =arrayBinario.length-1 ; i >= 0 ; i--){
let num = parseInt(arrayBinario[i])
let pot = Math.pow(2,exp)
soma2 += num*pot
exp++
}

console.log(`O numero ${binario} em decimal fica ${soma2}`)