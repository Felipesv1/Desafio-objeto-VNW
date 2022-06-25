// Crie um objeto que receba ao menos três propriedades sobre você.

 let dados = {
    nome:'felipe',
    idade:18,
    time:'vasco' 
 }
 console.log(dados);

// Adicione uma nova propriedade sem alterar seu objeto inicial.

dados.nacionalidade = "brasileiro"
console.log(dados);

// Remova uma propriedade desse objeto.

delete dados.nacionalidade
console.log(dados);

//Mostre no console todas as propriedades desse objeto.
for (let prop in dados){
    console.log(prop);
}

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro =[
   {
         nome:'felipe',
         idade:18,
         telefone:21967208314,
         amigos:['joao','maria','jose','pedro']
   }
   ,
   {
         nome:'humberto',
         idade:25,
         telefone:40025922,
         amigos:['nolan','carlos','joaquim','kauê']


   }
   ,
   {
         nome:'joao',
         idade:15,
         telefone:21654735245,
         amigos:['mateus','jones','juan','lucas']
   }
   ,
   {
         nome:'maria',
         idade:22,
         telefone:21567488857,
         amigos:['hedley','agata','nicolas','victor']
   }
   ,
   {
         nome:'pedro',
         idade:30,
         telefone:21457866295,
         amigos:['getulio','stefano','herian','sidney']
      }
]
console.log(cadastro);

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[2].amigos[3]);
console.log(cadastro[3].amigos[2]);
console.log(cadastro[4].amigos[3]);