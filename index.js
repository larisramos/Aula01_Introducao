// Comentário em JavaScript em uma linha

/*
Comentário em várias 
linhas em bloco
*/

// atalho CTRL + : OU CTRL + /

/* Atalho ALT + SHIFT + a */

/*
var numero = 10
numero = 5
*/

//ferramenta de depuração 
// console.log(numero) // Como se fosse o print

/* 
TIPOS DE VARIAVEIS
String -> é um texto, ultizada as aspas para delimitar o seu conteudo (simples ou duplas)
*/

//var nome = "Larissa Ramos"
//console.log(typeof(nome)) // metodo Typeof retorna uma string com o tipo de variavel

// Number - Elementos numericos

/*
var numero2 = 20
console.log(typeof(numero2))

var numero3 = "20" //Com aspas vira String
console.log(typeof(numero3))

var numero4 = 8.5 //no javascrip nao faz distinção de inteiro para float, todos irao ser number
console.log(typeof(numero4))

*/


//Bolean
//Dois valores true ou false 

/*var estaQuente = false //true
console.log(typeof(estaQuente))
*/

/* 
CONSTANTES

São variaveis imutaveis
Este tipo de variavel não é possivel reatribuir outro valor para a mesma variavel durante o código.
*/

/* 
const pi = 3.1415
console.log(pi)
*/

/* 
TIPOS PRIMITIVOS
null undefined


var teste = null
console.log(typeof(teste))
*/

/* OPERADORES MATEMÁTICOS

Devem ser utilizados cin variaveis do tipo number
-> Adição +
-> Subtração - 
-> Multiplicação *
-> Divisao /
-> Resto %
-> Incremento ++
-> Decremento --
*/

/* 
var num1 = 9
var num2 = 2
console.log(num1 % num2)

*/

/* var num3 = 8
//num3 = num 3 + 1
//num3++
console.log (++num3) // se colocar num3++ ele resulta no valor iniciado
console.log (num3) ///alt + shift + tecla p/ baixo*/

/*var texto1 = "O quadrado 2 é igual a "
var quadradoDeDois = 2*2
console.log(texto1+quadradoDeDois)
*/


/* OPERADORES DE ATRIBUIÇÃO 

= 
+= Atribui a uma variavel o resultado da soma com o numero atribuido */

/*

var outroNum = 21
// outroNum = outroNum + 18
outroNum +=18
console.log(outroNum)
*/

/* 
ESTRUTURA DE DECISÃO

if/ else 
if -> SE
else -> SENÃO
*/

if (/* CONDIÇÃO */ true || false){
  //Escopo do bloco if
  // ele vai ser executado se a condição for verdadeira (true)
} else {
  // escopo bloco else
  // ele vai ser executadi se a condição for falsa (false)
}

// MULTIPLOS TESTES
// else if

if (/* CONDIÇÃO */ true || false){
  //Escopo do bloco if
  // ele vai ser executado se a condição for verdadeira (true)
} else if {
  // escopo bloco else
  // ele vai ser executadi se a condição2 for verdadeira (true)
} else {
  // escopo bloco else
  // ele vai ser executado se a condições anteriores forem falsas (false)
}
