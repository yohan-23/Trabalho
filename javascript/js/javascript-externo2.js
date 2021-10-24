function limpar(){
  var f=document.getElementById("frm");
  var n1 = f.n1;
  var n2 = f.n2;
  n1.value = "";
  n2.value = "";
}
// 7
function calc(e){
   
  var operacao = e.value;
  
  var n1=parseFloat(document.getElementById("n1").value);
  var n2=parseFloat(document.getElementById("n2").value);
  
  var calculo = 0;

  switch(operacao){
    case '+':
      calculo = n1 + n2;
      break;
    case '-':
      calculo = n1 - n2;
      break;
    case '*':
      calculo = n1 * n2;
      break;
    case '/':
      calculo = n1 / n2;
      break;
  }
  console.log(operacao)
  let resultado = document.getElementById('resultado')
  resultado.innerHTML = calculo
  
}
