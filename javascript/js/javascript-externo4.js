/* Construa uma página HTML que permita montar uma lista de compras. 
O usuário deverá informar a quantidade, unidade de medida (Kilograma, Unidade, Litro)
 e uma descrição do produto. O item deverá ser armazenado em um objeto que posteriormente
 será adicionado a um array. Em seguida utiliza o console para exibir a lista de itens */
//ex4
 class produtos {
   constructor(desc, qtd, medida){
     this.desc = desc;
     this.qtd = qtd;
     this.medida = medida;
   }
 }

 let lista = []
/*
 function salvar() {
   let vDesc = document.getElementById('descricao').value
   let vQtd = document.getElementById('quantidade').value
   let vUn = document.getElementById('UnidadeMedida').value

   let obj = new produtos(vDesc, vQtd, vUn)

   lista.push(obj)

   console.table(lista)
 }
*/
/*
function salvar() {
  let vDesc = document.getElementById('descricao').value
  let vQtd = document.getElementById('quantidade').value
  let vUn = document.getElementById('UnidadeMedida').value

  let obj = new produtos(vDesc, vQtd, vUn)

  lista.push(obj)

  console.table(lista)

  let ul = document.getElementById('ulista')     
  let linha = document.createElement('li');   
  linha.innerHTML = 'Prod: ' + obj.desc +', Qtd: ' + obj.qtd + ', Unidade de Medidade: ' + obj.medida     
  ul.appendChild(linha);
}
*/

function salvar() {
  let vDesc = document.getElementById('descricao').value
  let vQtd = document.getElementById('quantidade').value
  let vUn = document.getElementById('UnidadeMedida').value

  let obj = new produtos(vDesc, vQtd, vUn)

  lista.push(obj)

  console.table(lista)

  let ul = document.getElementById('ulista')     
  let linha = document.createElement('li');   
  linha.innerHTML = 'Prod: ' + obj.desc +', Qtd: ' + obj.qtd + ', Unidade de Medidade: ' + obj.medida     
  ul.appendChild(linha);

  let cb = document.createElement('input');
  cb.type = 'checkbox'
  cb.addEventListener('click', () => {
      if(cb.checked){
          linha.style.color = '#7fda00';
      }else{
          linha.style.color = '#f74f00';
      }
  })
  linha.appendChild(cb);
}



