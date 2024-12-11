---
id: wa-get-page-content
title: WA Get page content
slug: /commands/wa-get-page-content
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page content.Syntax-->**WA Get page content** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get page content.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| Resultado | Text | &#8592; | HTML source code |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA Get page content.Summary-->O comando WA Get page content retorna o código HTML da página atual ou da página que vai ser mostrada na área web designada pelos parâmetros *\** e *objeto*.<!-- END REF-->  

Este comando retorna uma string vazia se o conteúdo da página atual não estiver disponível.

#### Ver também 

[WA SET PAGE CONTENT](wa-set-page-content.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1038 |
| Thread-seguro | &check; |
| Proibido no servidor ||


