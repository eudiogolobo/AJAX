<?php
  //devolve as boas vindas ao utilizador com nome e apelido
  if(isset($_GET['a']) and isset($_GET['b'])  )  
  {
    $nome = $_GET['a'];
    $apelido = $_GET['b'];
    $frase_final = "Seja bem-vindo ao servidor ,Sr(a). $nome $apelido.";
  }

 echo $frase_final;


?>