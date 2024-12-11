---
id: erase-window
title: ERASE WINDOW
slug: /commands/erase-window
displayed_sidebar: docs
---

<!--REF #_command_.ERASE WINDOW.Syntax-->**ERASE WINDOW** {( *janela* )}<!-- END REF-->
<!--REF #_command_.ERASE WINDOW.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594;  | Número de referência da Janela, ou a janela ativa do processo atual, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ERASE WINDOW.Summary-->O comando ERASE WINDOW apaga o conteúdo da janela cujo número de referência se passa em janela.<!-- END REF-->  

Se omite o parâmetro *janela*, ERASE WINDOW apaga o conteúdo da *janela* do primeiro plano do processo atual.  
  
Geralmente, utilizará ERASE WINDOW em combinação com [MESSAGE](message.md) e [GOTO XY](goto-xy.md). Neste caso, ERASE WINDOW apaga o conteúdo da janela e coloca o cursor na esquina superior esquerda da janela, ou seja a posição correspondente a [GOTO XY](goto-xy.md) (0; 0).  
  
No confunda ERASE WINDOW , que apaga o conteúdo de uma janela, com [CLOSE WINDOW](close-window.md), que suprime a janela da tela.

#### Ver também 

[GOTO XY](goto-xy.md)  
[MESSAGE](message.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 160 |
| Thread-seguro | &check; |
| Proibido no servidor ||


