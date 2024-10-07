---
id: screen-height
title: Screen height
slug: /commands/screen-height
displayed_sidebar: docs
---

<!--REF #_command_.Screen height.Syntax-->**Screen height** {( * )} -> Resultado<!-- END REF-->
<!--REF #_command_.Screen height.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#x1F852; | Windows: altura da janela da aplicação ou altura da tela se especificada * Macintosh: altura da tela principal |
| Resultado | Inteiro longo | &#x1F850; | Altura expressada em pixeles |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Screen height.Summary-->Em Windows, Screen height devolve a altura da janela da aplicação 4D (janela MDI).<!-- END REF--> Se passado o parâmetro opcional *\**, Screen height devolve a altura da tela.

Em Mac OS, Screen height devolve a altura da tela principal, ou seja a tela onde está localizada a barra de menus.

#### Ver também 

[SCREEN COORDINATES](screen-coordinates.md)  
[Screen width](screen-width.md)  