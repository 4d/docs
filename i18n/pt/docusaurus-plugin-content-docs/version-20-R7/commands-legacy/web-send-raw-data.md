---
id: web-send-raw-data
title: WEB SEND RAW DATA
slug: /commands/web-send-raw-data
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND RAW DATA.Syntax-->**WEB SEND RAW DATA** ( *dados* {; *} )<!-- END REF-->
<!--REF #_command_.WEB SEND RAW DATA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| dados | Blob | &#8594;  | Dados HTTP a enviar |
| * | Operador | &#8594;  | Enviar em pedaços |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB SEND RAW DATA.Summary-->O comando \[**#current\_title\]** permite ao servidor web 4D enviar dados HTTP "brutos", os quais podem estar em pedaços.<!-- END REF-->  
  
O parâmetro *dados* contém as duas partes padrão de uma resposta HTTP, ou seja o cabeçalho e o corpo. Os dados são enviados sem formato prévio pelo servidor. Entretanto, 4D realiza um controle básico sobre o cabeçalho e o corpo da resposta com o fim de garantir que sejam válidos:  

* Se o cabeçalho estiver incompleto ou não cumpre com as especificações do protocolo HTTP, 4D o modifica como corresponde.
* Se a petição HTTP estiver incompleta, 4D adiciona a informação faltante. Se por exemplo desejar redirecionar a petição, deve escrever:

```HTML
   HTTP/1.1 302
   Location: http://...
```

Se apenas passar:

```HTML
   Location: http://...
```

4D vai completar a petição adicionando HTTP/1.1 302. 

O parâmetro opcional *\** permite especificar que a resposta se enviará “picotada”. O corte das respostas pode ser útil quando o servidor enviar uma resposta sem conhecer seu comprimento total (se, por exemplo, a resposta ainda não foi gerada). Todos os navegadores compatíveis HTTP/1.1-aceitam as respostas em pedaços.  
  
Se passar o parâmetro \*, o servidor web incluirá automaticamente o campo *transfer-encoding*: *chunked* no cabeçalho da resposta, se for necessário (pode manejar manualmente o cabeçalho da resposta, se assim preferir). 

O restante da resposta também será formatado para respeitar a sintaxe da opção chunked. As respostas picotadas contém apenas um cabeçalho e um número indefinido de corpos.

Todas as instruções **WEB SEND RAW DATA** que sigam a execução de **WEB SEND RAW DATA**(data;\*) dentro do mesmo método serão consideradas como parte da resposta (sem importar se contém o parâmetro *\**). O servidor coloca fim ao envio em blocos quando terminar a execução do método.  
  
**Nota**: se o cliente web não for compatível o protocolo HTTP/1.1, 4D converterá automaticamente a resposta ao formato compatível HTTP/1.0 (o envio não será em pedaços). Entretanto, neste caso, o resultado pode não corresponder a seus desejos. Portanto se recomenda testar se o navegador web compatível HTTP/1.1 e enviar uma resposta apropriada. Para fazer isso, pode utilizar um método deste tipo:  

```4d
 var $0 : Boolean
 ARRAY TEXT(arCampos;0)
 ARRAY TEXT(arValores;0)
 WEB GET HTTP HEADER(arCampos;arValores)
 $0:=False
 If(Size of array(arValores)>=3)
    If(Position("HTTP/1.1";arValores{3})>0)
       $0:=True // O navegador é compatível HTTP/1.1; $0 retorna True
    End if
 End if
```

Combinado com o novo comando [WEB GET HTTP BODY](web-get-http-body.md) e com os outros comandos do tema “Servidor web”, este comando completa o conjunto de ferramentas disponíveis para os desenvolvedores 4D para tratar de maneira completamente personalizada as conexões HTTP entrantes e saintes. Estas ferramentas são apresentadas no diagrama abaixo:  
  
![](../assets/en/commands/pict856016.en.png)

#### Exemplo 

Este exemplo ilustra o uso da opção chunked com o comando **WEB SEND RAW DATA**. Os dados (uma sequência de números) são enviadas em 100 pedaços gerados rapidamente em um loop. Lembre que o cabeçalho da resposta não está definido explicitamente: o comando o enviará automaticamente e inserirá o campo *transfer-encoding: chunked* nele se o parâmetro \* for utilizado.  
  
```4d
 var $cpt : Integer
 var $meu_blob : Blob
 var $saída : Text
 
 For($cpt;1;100)
    $saida:="["+String($cpt)+"]"
    TEXT TO BLOB($saida;$meu_blob;UTF8 text without length)
    WEB SEND RAW DATA($meu_blob;*)
 End for
```

#### Ver também 

[WEB GET HTTP BODY](web-get-http-body.md)  
[WEB GET HTTP HEADER](web-get-http-header.md)  