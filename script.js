const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

const vidaC = pokemons.map((pokemon)=>{
  pokemon.vida = 100
  return  pokemon
}).filter((pokemon) =>{
  return pokemon.tipo === "fogo"
})
console.log(vidaC)








//usando só esse array

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//exercicio 1

// const tripl = (array) => {
//   const newarray = []
//   for (let numero of array) {
//     newarray.push(numero*3)

//   }
//  return newarray
// }
// console.log(tripl(array))




//exercicio 2

// const par = (array) => {
//   const novoarray = []
//   for(let i of array) {
//     if(i%2===0) {
//       novoarray.push(i)
//     }
//   }
//   return novoarray
// }

// console.log(par(array))



// //exercicios 3

// const multiRetPar = (array,funcao) => {
//   const newarray = []
//   for (let numero of array) {
//     newarray.push(numero*3)

//   }
//   let novoarray = funcao(newarray)
//   return novoarray
// }

// console.log(multiRetPar(array,par))


//exercicios 4


// const triplos = array.map( function(arr) {
//   return arr *3
// })
// console.log (triplos)

// const par = array.filter( function(arr) {
//   return arr%2===0 
// })  
// console.log (par)

//com arrow function

// const triplo = array.map((item,index,array) =>{
//   return item *3
// })
// console.log (triplo)


// const pares = array.filter((item) => {
//   return item%2===0 
// })  
// console.log (pares)