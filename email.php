<?php
// VARIÁVEIS
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $mensagem = $_POST['mensagem'];
  $data = date('d/m/Y');
  $hora = date('H:i:s');
  $formatacao = "Nome: $nome \n\nMensagem: $mensagem \n\nData: $data \n\nHorário: $hora";

//ENVIAR
  // emails para quem será enviado o formulário
  $to = "afaicdi@hotmail.com";
  $subject = "Contato do Site";
 
  // É necessário indicar que o formato do e-mail é html
  $headers = "MIME-Version: 1.1 \r\n";
  $headers .= "Content-type: text/plain; charset=UTF-8 \r\n";
  $headers .= "From: $email \r\n"; // remetente
  $headers .= "Return-Path: $email \r\n"; // return-path

  $envio = mail($to, $subject, $formatacao, $headers);
   
  if($envio)
    echo "<script>alert('Email enviado com sucesso! Click no botão e você será redirecionado para a página principal.'); window.setTimeout(\"location.href='index.html';\", 1000);</script>";
  else
    echo "<script>alert('Infelizmente não foi possível enviar o email! Click no botão e você será redirecionado para a página principal.'); window.setTimeout(\"location.href='index.html';\", 1000);</script>";
?>