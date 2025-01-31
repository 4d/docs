---
id: wa-get-current-url
title: WA Get current URL
slug: /commands/wa-get-current-url
displayed_sidebar: docs
---

<!--REF #_command_.WA Get current URL.Syntax-->**WA Get current URL** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get current URL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| Resultado | Text | &#8592; | URL carregada na área web atualmente |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA Get current URL.Summary-->O comando WA Get current URL retorna a direção URL da página mostrada na área web designada pelos parâmetros \* e *objeto*.<!-- END REF-->   

Se a URL atual não estiver disponível, o comando retorna uma string vazia.  
  
Se a página web estiver carregada completamente, o valor retornado pela função é idêntico ao da variável "URL" associada com a área web. Se a página estiver no processo de ser carregada, os dois valores serão diferentes: a função retorna o URL completamente carregado e a variável contém a URL em processo de ser carregada.

#### Exemplo 

A página mostrada na URL "www.apple.com" e a página "www.4dhispano.com" está em processo de ser carregada:

```4d
 $url:=WA Get current URL(MyWArea) //devolve "http://www.apple.com"
  //A variável URL associada contém "http://www.4dhispano.com"
```

#### Ver também 

[WA OPEN URL](wa-open-url.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1025 |
| Thread-seguro | &cross; |


