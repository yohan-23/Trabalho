//passo 2
var pai = document.getElementById('resolution1');

var child_nodes = pai.childNodes;

var teste = child_nodes[1];

teste.style.backgroundColor = '#fdd';

var pai2 = document.getElementById('resolution2');
var child_nodes2 = pai2.childNodes;
var teste2 = child_nodes2[1];

teste2.innerHTML = '<p>Texto alinhas a esquerda</p>'
teste2.style.textAlign = 'left'

var quadrados = document.getElementsByClassName('square')

//4
teste.onmouseover = function(e){
  teste.style.border = '2px solid red '
}
teste2.onmouseover = function(e){
  teste2.style.border = '2px solid red '
}
teste.onmouseleave = function(e){
  teste.style.border = '0px '
}
teste2.onmouseleave = function(e){
  teste2.style.border = '0px'
}

//5

let botao = document.createElement('button')

botao.classList.add('btn')
botao.innerHTML = 'Clique aqui'
document.getElementById('resolution5').appendChild(botao)

//6
botao.addEventListener("click", () => {
  let quadrados = document.getElementsByClassName('square')
  for (var i = 0; i < quadrados.length; i++ ){
    quadrados[i].hidden = !quadrados[i].hidden 
  }
})
