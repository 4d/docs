---
id: wa-zoom-out
title: WA ZOOM OUT
slug: /commands/wa-zoom-out
displayed_sidebar: docs
---

<!--REF #_command_.WA ZOOM OUT.Syntax-->**WA ZOOM OUT** ( {* ;} *objeto* )<!-- END REF-->
<!--REF #_command_.WA ZOOM OUT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WA ZOOM OUT.Summary-->O comando WA ZOOM OUT reduz o tamanho do texto mostrado no área web designada pelos parâmetros *\** e *objeto*.<!-- END REF--> 

Em OS, o alcance deste comando é a sessão 4D: a configuração realizada por este comando não se conserva depois de fechar a aplicação 4D.  
  
Em Windows, o alcance deste comando é global: a configuração se conserva depois de fechar a aplicação 4D.

#### Ver também 

[WA ZOOM IN](wa-zoom-in.md)  