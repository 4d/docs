---
id: wa-get-last-url-error
title: WA GET LAST URL ERROR
slug: /commands/wa-get-last-url-error
displayed_sidebar: docs
---

<!--REF #_command_.WA GET LAST URL ERROR.Syntax-->**WA GET LAST URL ERROR** ( {* ;} *objeto* ; *url* ; *descriçao* ; *codigoErro* )<!-- END REF-->
<!--REF #_command_.WA GET LAST URL ERROR.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| url | Text | &#8592; | URL na origem do erro |
| descriçao | Text | &#8592; | Description of error (Mac OS) |
| codigoErro | Integer | &#8592; | Código de Erro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA GET LAST URL ERROR.Summary-->O comando WA GET LAST URL ERROR permite recuperar vários elementos de informação relacionados com o último erro ocorrido na área Web designada pelos parâmetros *\** e *objeto*.<!-- END REF-->  

Esta informação se retorna em três variáveis:

* *url*: URL provoca o erro.
* *descripção*: (Mac OS unicamente): um texto descreve o erro (se estiver disponível). Se não for possível associar um texto ao erro, se retorna uma cadeia vazia. Em Windows, este parâmetro sempre se retorna vazio.
* *codErro*: código do erro.
* * Se o código for >=400, é um erro relacionado com o protocolo HTTP. Para maior informação sobre este tipo de erro, consulte a seguinte direção:  
   *http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html*  
   * Do contrário, é um erro retornado pelo WebKit (Mac OS) ou ActiveX (Windows).
É recomendável chamar este comando dentro do marco do evento de formulário On URL Loading Error com o objetivo de conhecer a causa do erro que acaba de ocorrer.

#### Ver também 

[Form event code](../commands/form-event-code.md)"  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1034 |
| Thread-seguro | &cross; |


