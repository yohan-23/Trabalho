/*
Construa uma página HTML que peça ao usuário uma temperatura em Fahrenheit, 
converta-a para graus Celsius e escreva o novo valor na tela utilizando HTML. 
A fórmula de conversão de Fahrenheit (F) para Celsius é C = ((F - 32) * 5) / 9. 
Exemplo: 100 Fahrenheit = 37,77 Celsius.
Exercício 4
*/

function calc(){
  
  var n1=parseFloat(document.getElementById("n1").value);

  var calculo =eval(((n1 - 32) * 5) / 9);
  
  let p = document.getElementById('paragrafo')
  p.innerHTML = 'Resultado: '+calculo
  
}

function limpar(){
  var f=document.getElementById("frm");
  var n1 = f.n1;
  n1.value = "";
}