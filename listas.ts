//JavaScript
let l = [1,2,3];
console.log(l);

//TypeScript - tipagem
let l1:number[] = [2,3,4];
console.log(l1);

//Iteração - JavaScript
for(let i=0; i<l1.length; i++){
    console.log(i, l1[i])
}


//for..in
for(let i in l1){
    console.log(i, l1[i]);
}

//for..of - para quando precisa somente dos valores do l1
for(let elemento of l1){
    console.log(elemento);
}

//Operações sobre listas
let lista:number[] = [10,20,30,40];

//inserir elementos
lista.push(50);
console.log(lista);

//Remover elementos
lista.splice(2,3);
console.log(lista);