var menuPizzas = "==== Bem vindo a nossa pizzaria confira o cardápio abaixo ==== \n";
menuPizzas = menuPizzas + "código | sabor | preço\n";
menuPizzas += "1 - Mussarela - R$ 20,00\n";
menuPizzas += "2 - Calabresas - R$ 25,00\n";
menuPizzas += "3 - Marguerita - R$ 23,00\n";
menuPizzas += "4 - 4 Queijos - R$ 29,90\n";
menuPizzas += "5 - Baiana - R$ 22,50\n";
menuPizzas += "\n Digite o código da pizza escolhida:"

var menuBebidas = "==== Bem vindo confira o cardápio de bebidas abaixo ==== \n";
menuBebidas = menuBebidas +  "código | tipo | preço\n ";
menuBebidas += "1 - Refrigerante Lata - R$ 5.00\n";
menuBebidas += "2 - Refrigerante 2L - R$ 10.00\n";
menuBebidas += "3 - Agua - R$ 3.50\n";
menuBebidas += "4 - Suco - R$ 7.50\n";
menuBebidas += "\n Digite o código da bebida escolhida:"

var codigoPizza = parseInt(prompt(menuPizzas));
var quantidadePizza = parseInt(prompt("Quantas pizza deseja pedir:"));
var valorTotal = 0;

var codigoBebida = parseInt(prompt(menuBebidas));
var quantidadeBebida = parseInt(prompt("Quantas bebidas deseja pedir:"));
var valorTotalbebida = 0;

if(codigoPizza == 1){
    valorTotal = quantidadePizza * 20.00;
    console.log("A pizza escolhida foi " + codigoPizza);
}else if(codigoPizza == 2){
    valorTotal = quantidadePizza * 25.00;
    console.log("A pizza escolhida foi " + codigoPizza);
}else if(codigoPizza == 3){
    valorTotal = quantidadePizza * 23.00;
    console.log("A pizza escolhida foi " + codigoPizza);
}else if(codigoPizza == 4){
    valorTotal = quantidadePizza * 29.90;
    console.log("A pizza escolhida foi " + codigoPizza);
}else if(codigoPizza == 5){
    valorTotal = quantidadePizza * 22.50;
    console.log("A pizza escolhida foi " + codigoPizza);
}else {
    console.log("Código inválido");
}

console.log("Seu pedido da pizza [ " + codigoPizza);
console.log("foram pedidos [ " + quantidadePizza + " ] pizzas");
console.log("Total a pagar :R$" + valorTotal );

if(codigoBebida == 1){
valorTotalbebida = quantidadeBebida * 5.00;
console.log("A bebida escolhida foi " + codigoBebida);
}else if(codigoBebida == 2){
    valorTotalbebida = quantidadeBebida * 10.00;
console.log("A bebida escolhida foi " + codigoBebida);
}else if(codigoBebida == 3){
    valorTotalbebida = quantidadeBebida * 3.50;
console.log("A bebida escolhida foi " + codigoBebida);
}else if(codigoBebida == 4){
    valorTotalbebida = quantidadeBebida * 7.50;
console.log("A bebida escolhida foi " + codigoBebida);
}else{
    console.log("Código inválido");
}

console.log("Seu pedido da bebida [ " + codigoBebida);
console.log("foram pedidos [ " + quantidadeBebida + " ] bebidas");
console.log("Total a pagar :R$" + valorTotalbebida );

var totalConta = valorTotal + valorTotalbebida;
console.log("Total da conta :R$" + totalConta );