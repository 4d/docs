---
id: php-get-full-response
title: PHP GET FULL RESPONSE
slug: /commands/php-get-full-response
displayed_sidebar: docs
---

<!--REF #_command_.PHP GET FULL RESPONSE.Syntax-->**PHP GET FULL RESPONSE** ( *stdOut* {; *etiquetaErr* ; *valoresErr*} {; *camposCabHttp* {; *valoresCabHttp*}} )<!-- END REF-->
<!--REF #_command_.PHP GET FULL RESPONSE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| stdOut | Text, Blob | &#8592; | Conteúdo do buffer stdOut |
| etiquetaErr | Text array | &#8592; | Etiquetas dos erros |
| valoresErr | Text array | &#8592; | Valores dos erros |
| camposCabHttp | Text array | &#8592; | Nome dos cabeçalhos HTTP |
| valoresCabHttp | Text array | &#8592; | Valores dos cabeçalhos HTTP |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


:::info Compatibilidade

**PHP está obsoleto em 4D**. Recomenda-se usar a classe [`4D.SystemWorker class`](../API/SystemWorkerClass.md).

:::

#### Descrição 

<!--REF #_command_.PHP GET FULL RESPONSE.Summary-->O comando PHP GET FULL RESPONSE permite obter informação adicional sobre a resposta devolvida pelo intérprete PHP.<!-- END REF--> Este comando é especialmente útil no caso de que ocorra um erro durante a execução do script.   
  
O script PHP pode escrever dados no buffer stdOut (eco, print, etc.) O comando devolvido diretamente os dados na variável *stdOut* e aplica os mesmos princípios de conversão descritos no comando [PHP Execute](php-execute.md "PHP Execute").  
  
Os arrays texto sincronizados *etiquetasErr* e *valoresErr* se preenchem quando a execução dos scripts PHP provoca erros. Estes arrays, em particular, proporcionam informação sobre a origem, o script e a línha de erro. Estes dois arrays são inseparáveis: se for passado *etiquetasErr*, se deve passar também *valoresErr*.   
  
Dado que os intercâmbios entre 4D e o intérprete PHP se realizam através de FastCGI, o intérprete PHP funciona como se fosse chamado por um servidor HTTP e portanto, envia cabeçalhos HTTP. Pode recuperar estes cabeçalhos e seus valores nos arrays *camposCabHttp* e *valoresCabHttp*.

#### Ver também 

[PHP Execute](php-execute.md)  
[PHP GET OPTION](php-get-option.md)  