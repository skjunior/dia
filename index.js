// this is a js file
// Sergio Krug Junior

let array //vazia não foi adicionado valor
console.log('a. ', array) 
array = null // foi adicionado um "valor" nulo a ela.
console.log('b. ', array)
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
console.log('c. ', array.length) // modtra a quantidade de itens dentro da array
let i = 0
console.log('d. ', array[i])
array[i+1] = 19
console.log('e. ', array) // mostra todos os iutens dentro de uma array
const valor = array[i+6]
console.log('f. ', valor)

// resposta 2
//"subinumônibusemmirrocos" 

let seuNome;
let seuEmail;
seuNome = prompt(`Como você se chama?`);
seuEmail = prompt(`Insira seu e-mail.`);
console.log(`O e-mail ` + seuEmail + ` foi cadastrado com sucesso. ` + `seja bem-vindo(a) ` + seuNome);

//resposta B2

let comidas = [`Coxinha`, `Lasanha`, `Pizza`, `Pastel`, `Xis`]
let prato;
console.log(comidas);
console.log("Essas são as minhas comidas preferidas:");
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);
console.log(comidas[5]);
prato = prompt("Qual sua comida favorita?");
console.log(comidas.replaceAll(`Lasanha`, ));

//resposta 3l

let listaDeTarefas = []
let tarefas = prompt("Liste 3 tarefas para o dia de hoje.");
console.log("Suas tarefas para hoje são:",tarefas.toString( [listaDeTarefas]));
let tarefaFeita = prompt("Entre 0,1 e 2, digite o numero de acordo com a terefa concluida.");
console.log(tarefas.slice(tarefaFeita, 1));
