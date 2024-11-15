---
id: screen-width
title: Screen width
slug: /commands/screen-width
displayed_sidebar: docs
---

<!--REF #_command_.Screen width.Syntax-->**Screen width** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.Screen width.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Windows: largo da janela da aplicação ou altura da tela se especificada * Macintosh: largo da tela principal |
| Resultado | Integer | &#8592; | Largo expressado em pixeles |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Screen width.Summary-->Em Windows, Screen width devolve o largo da janela da aplicação 4D (janela MDI).<!-- END REF--> Se passado o parâmetro opcional *\**, Screen width devolve o largo da tela.  

Em Macintosh, Screen width devolve o largo da tela principal, ou seja o largo da tela que contém a barra de menus. 

#### Ver também 

[SCREEN COORDINATES](screen-coordinates.md)  
[Screen height](screen-height.md)  