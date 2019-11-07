function Funcao() {
   var textoSemEspacos = (document.getElementById('ValorNome').value.replace(' ',''));
   textoSemEspacos = replace(' ', '');
   var num_caracteres = textoSemEspacos.length;
    document.getElementById('resultado').value =  'Seu Nome tem ' + num_caracteres + ' caracteres' ;

}

