
//Atividade 01
function Operacoes() {

var valor1 = parseInt(document.getElementById('valor1').value);
var valor2 = parseInt(document.getElementById('valor2').value);

var somar		 = valor1 + valor2
var dividir		 = valor1 / valor2
var subtrair	 = valor1 - valor2
var multiplicar	 = valor1 * valor2

document.getElementById('resultado').value = 'OPERAÇÕES'+'\n'+'\n'+'Subtração: '+subtrair +'\n'+'Divisão: '+ dividir+'\n'+'Adição: '+ somar+'\n'+'Multiplicação: '+ multiplicar;

}
//Atividade 02
 function Numeros() {

 var v1 = parseInt(document.getElementById('valor1').value);
 var v2 = parseInt(document.getElementById('valor2').value);
 var v3 = parseInt(document.getElementById('valor3').value);


	var resultado1 = v1 + v2;
	var resultado2 = v2 - v1;
	var resultado3 = v3 * v1;
	var resultado4 = v3 + v2;
	var resultado5 = v3 - v2;
	var resultado6 = v1 + v2 + v3;
	document.getElementById('resultado').value = 'OPERAÇÕES'+'\n'+'\n'+'V1 + V2 = '+resultado1 +'\n'+'V1 - V1 = '+ resultado2+'\n'+'V3 * V1 = '+ resultado3+'\n'+'V3 + V2 = '+ resultado4+'\n'+'V3 - V2 = '+ resultado5+'\n'+'V1 + V2 + V3 = '+ resultado5;
}

//Atividade 03
 function Media() {

	var valor1 = parseInt(document.getElementById('valor1').value);
	var AnoAtual = new Date();
	var Ano = AnoAtual.getFullYear()

	var resultado = Ano - valor1;
	var ResultadoPossivel = resultado + 1
    document.getElementById('resultado').value = "Cara, tu deve ter uns "+ resultado +" ou "+ ResultadoPossivel + " por ai. ";
 }

//Atividade 04
 function Porcentagem() {

	var valor11 = parseInt(document.getElementById('valor1').value);
	
	 var Resultado11 = valor11 + (valor11 * (15.8/100))
     document.getElementById('resultado').value = "Valor acrescido de 15,8% é:   "+ Resultado11 ;
 }
 
 //Atividade 05
  function Triangulo() {

	var valor1B = parseInt(document.getElementById('valor1').value);
	var valor1A = parseInt(document.getElementById('valor2').value)
	
	 var Resultado = (valor1B * valor1A) / 2;
    document.getElementById('resultado').value = "A área do triângulo é:   "+ Resultado ;
 }
 
 
  //Atividade06
 function Empresa() {
	   
	var ValorNome 			 = (document.getElementById('ValorNome').value);
	var ValorHora  			 = parseFloat(document.getElementById('ValorHora').value);
	var ValorDependentes 	 = parseInt(document.getElementById('ValorDependentes').value);

	var SalarioHoras = (ValorHora * 32) + 40 * ValorDependentes;
	var SalarioInss  =  8.5 * (SalarioHoras / 100);
	var SalarioIR    =  5 * (SalarioHoras / 100);
	var SalarioFinal =  SalarioHoras -(SalarioHoras - SalarioInss);

	document.getElementById('resultado').value = "Funcionario: "+ ValorNome  + "\n" + "Total Dependentes: "+ ValorDependentes +"\n"+ "Horas Trabalhadas: "+ ValorHora +"\n" +"Salario Bruto: R$"+SalarioHoras +"\n"+ "Salario Limpo: R$"+SalarioFinal;

 }
 
 
 //Atividade07
function Cidades() {
	   
	var ValorNome1 		 =         (document.getElementById('ValorNome1').value);
	var ValorHabitantes1 = parseFloat(document.getElementById('ValorHabitantes1').value);
	var ValorImpostos1 	 = parseInt(document.getElementById('ValorImpostos1').value);
	
	var ValorNome2 		 =         (document.getElementById('ValorNome2').value);
	var ValorHabitantes2 = parseFloat(document.getElementById('ValorHabitantes2').value);
	var ValorImpostos2 	 = parseInt(document.getElementById('ValorImpostos2').value);


   if (ValorHabitantes1 > ValorHabitantes2) {
	   if (ValorImpostos1 > ValorImpostos2){
		   document.getElementById('resultado').value = "A cidade com mais habitantes é "+ ValorNome1 +"\n" + "A cidade com mais arrecadação de impostos é "+ ValorNome1;
	   }else if (ValorImpostos1 < ValorImpostos2){
		   document.getElementById('resultado').value = "A cidade com mais habitantes é "+ ValorNome1 +"\n" + "A cidade com mais arrecadação de impostos é "+ ValorNome2;
	   }else if(ValorImpostos1 == ValorImpostos2){
		   document.getElementById('resultado').value = "A cidade com mais habitantes é "+ ValorNome1 +"\n" + "As cidades com mais arrecadação de impostos são "+ ValorNome2 +" e "+ ValorNome ;
	}
	
	if (ValorHabitantes1 < ValorHabitantes2) {
	   if (ValorImpostos1 < ValorImpostos2){
		   document.getElementById('resultado').value = "A cidade com mais habitantes é "+ ValorNome2 +"\n" + "A cidade com mais arrecadação de impostos é "+ ValorNome2;
	   }else if (ValorImpostos1 > ValorImpostos2){
		   document.getElementById('resultado').value = "A cidade com mais habitantes é "+ ValorNome2 +"\n" + "A cidade com mais arrecadação de impostos é "+ ValorNome2;
	   }else if (ValorImpostos1 == ValorImpostos2){
		   document.getElementById('resultado').value = "A cidade com mais habitantes é "+ ValorNome2 +"\n" + "As cidades com mais arrecadação de impostos são "+ ValorNome2 +" e "+ ValorNome;
	}
	}
	
	if (ValorHabitantes1 == ValorHabitantes2) {
	   if (ValorImpostos1 == ValorImpostos2){
		   document.getElementById('resultado').value = "As cidades com mais habitantes são "+ ValorNome2 +" e "+ ValorNome1 +"\n" + "As cidades com mais arrecadação de impostos são "+ ValorNome2 + " e "+ ValorNome1;
	   } else if (ValorImpostos1 > ValorImpostos2){
		   document.getElementById('resultado').value = "As cidades com mais habitantes são "+ ValorNome2 +" e "+ ValorNome1 +"\n" + "A cidade com mais arrecadação de impostos é "+ ValorNome1;
	   } else if(ValorImpostos1 < ValorImpostos2){
		   document.getElementById('resultado').value = "As cidades com mais habitantes são "+ ValorNome2 +" e "+ ValorNome1 +"\n" + "A cidade com mais arrecadação de impostos é "+ ValorNome2;
	   }
	}
}
}

//Atividade08
   function forca() {

	var valor1 = parseInt(document.getElementById('valor1').value);
	var valor2 = parseInt(document.getElementById('valor2').value);


   if (valor1 < valor2) {
   document.getElementById('resultado').value = "Capitão America é mais forte:   "+ valor2 ;
 
   }
     if (valor1 > valor2){		
     document.getElementById('resultado').value = "Homem de Ferro é mais forte:   "+ valor1 ;
	 }
 }
 
 //Atividade09
    function trio() {

	var valor1 = parseInt(document.getElementById('valor1').value);
	var valor2 = parseInt(document.getElementById('valor2').value);
	var valor3 = parseInt(document.getElementById('valor3').value);


   if (valor1 > valor2 || valor1 > valor3) {
		if (valor2 < valor3){
		document.getElementById('resultado').value = "Homem de Ferro é mais forte:   "+ valor1 + "\n" + "Capitão America é mais fraco:   "+ valor2;
		}else{
		document.getElementById('resultado').value = "Homem de Ferro é mais forte:   "+ valor1 + "\n" + "Thor é mais fraco:   "+ valor3;
		}
   }
      if (valor2 > valor1 || valor2 > valor3) {
		if (valor1 < valor3){
		document.getElementById('resultado').value = "Capitão America é mais forte:   "+ valor2 + "\n" + "Homem de ferro é mais fraco:   "+ valor1;
		}else{
		document.getElementById('resultado').value = "Capitão America é mais forte:   "+ valor2 + "\n" + "Thor é mais fraco:   "+ valor3;
		}
   }
         if (valor3 > valor1 || valor3 > valor2) {
		if (valor1 < valor2){
		document.getElementById('resultado').value = "Thor é mais forte:   "+ valor3 + "\n" + "Homem de ferro é mais fraco:   "+ valor1;
		}else{
		document.getElementById('resultado').value = "Thor é mais forte:   "+ valor2 + "\n" + "Capitão America é mais fraco:   "+ valor2;
		}
   }
 }
 
//Atividade10

   function Mortes() {
	   
	var valorNome1 = (document.getElementById('valorNome1').value);
	var valor1 	   = parseInt(document.getElementById('valor1').value);
	var valorNome2 = (document.getElementById('valorNome2').value);
	var valor2     = parseInt(document.getElementById('valor2').value);


   if (valor1 < valor2) {
   document.getElementById('resultado').value =  "O time " + valorNome1 + " matou mais, com "+valor2 +" mortes.";
 
   }else{		
     document.getElementById('resultado').value =  "O time " + valorNome2 + " matou mais, com "+valor1 +" mortes." ;
	
	 }
	 if (valor1 == valor2){
		 document.getElementById('resultado').value =  "Houve empate!! "+ "\n"+"Ambos os times: " + valorNome2 +" e "+valorNome1 + " mataram "+valor1 ;
	 }
		 
 }
 
//Atividade11
function JoiaDaAlma(){
	var Valor1 	   = parseInt(document.getElementById('Valor1').value);
	var total = Valor1 / 2;
	if(Valor1 % 2 == 0){
		document.getElementById('resultado').value =  "PAR " + "\n" + " Quem pula é a natasha" ;
	}else{
		document.getElementById('resultado').value =  "IMPAR " + "\n" + " Quem pula é o clint " ;
	}
	 
 }
 
 
 //Atividade12
function Ordem(){
	var Valor1 	   = parseInt(document.getElementById('Valor1').value);
	var Valor2 	   = parseInt(document.getElementById('Valor2').value);
	var Valor3 	   = parseInt(document.getElementById('Valor3').value);
	var Valores = [];
	
	var i = 1
	Valores[i] = Valor1;
	var i = 2
	Valores[i] = Valor2;
	var i = 3
	Valores[i] = Valor3;
	
	Valores.sort();

	for (var i = 0; i < 3; i++) {
	    console.log(Valores[i]);
	}
 }
 
 //Atividade13
function MediaEscola(){
	var ValorNome  = (document.getElementById('ValorNome').value);
	var Valor1	   = parseFloat(document.getElementById('Valor2').value);
	var Valor2	   = parseFloat(document.getElementById('Valor2').value);
	var Valor3	   = parseFloat(document.getElementById('Valor3').value);
	var Faltas	   = parseFloat(document.getElementById('Faltas').value);
	
		

		var media = (Valor1 + Valor2 + Valor3)/3 ; 

		document.getElementById('resultado1').value =  "Aluno: " + ValorNome + "\n" + " Sua média é " + media ; 

		if ( Faltas < 27) 
		{ if ( media > 5){
		    document.getElementById('resultado2').value =  "Aprovado "; 
			} else {
				document.getElementById('resultado2').value =  "Reprovado"
			
			}
		}else{
			document.getElementById('resultado2').value =  "Reprovado por falta "
		}
		document.body.background = 'top.gif';						
			
			
 }

 //Atividade14
function Calculadora(){
	var Valor1	   = parseFloat(document.getElementById('Valor1').value);
	var Valor2	   = parseFloat(document.getElementById('Valor2').value);
	var Operacao   = (document.getElementById('resultado2').value);
	var resultado
	
	switch(Operacao){
		case '+':
			resultado = Valor1 + Valor2;
			document.getElementById('resultado3').value = Valor2 + " = " + resultado;
			break;
		case '-':
			 resultado = Valor1 - Valor2;
			document.getElementById('resultado3').value = Valor2 + " = " + resultado;
			break;
		case 'x':
			 resultado = Valor1 * Valor2;
			document.getElementById('resultado3').value = Valor2 + " = " + resultado;
			break;
		case '%':
			resultado = Valor1 / Valor2;
			document.getElementById('resultado3').value = Valor2 + " = " + resultado;
			break;
	}		
 }
 function Mais(){
	var Valor1	   = parseFloat(document.getElementById('Valor1').value);
	document.getElementById('resultado1').value = Valor1
    document.getElementById('resultado2').value ="+"
 }
  function Menos(){
	var Valor1	   = parseFloat(document.getElementById('Valor1').value);
	document.getElementById('resultado1').value = Valor1
    document.getElementById('resultado2').value ="-"
 }
  function Vezes(){
	var Valor1	   = parseFloat(document.getElementById('Valor1').value);
	document.getElementById('resultado1').value = Valor1
    document.getElementById('resultado2').value ="x"
 }
  function Divide(){
	var Valor1	   = parseFloat(document.getElementById('Valor1').value);
	document.getElementById('resultado1').value = Valor1
    document.getElementById('resultado2').value ="%"
 }
 
 