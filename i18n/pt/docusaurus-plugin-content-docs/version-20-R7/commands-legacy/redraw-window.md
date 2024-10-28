---
id: redraw-window
title: REDRAW WINDOW
slug: /commands/redraw-window
displayed_sidebar: docs
---

<!--REF #_command_.REDRAW WINDOW.Syntax-->**REDRAW WINDOW** {( *janela* )}<!-- END REF-->
<!--REF #_command_.REDRAW WINDOW.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594;  | Número de referência da Janela, ou a janela ativa do processo atual, se omitido |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.REDRAW WINDOW.Summary-->O comando REDRAW WINDOW provoca uma atualização do conteúdo da janela cujo número de referência é passado em janela.<!-- END REF-->  

Se omitir o parâmetro *janela*, REDRAW WINDOW aplica à janela do primeiro plano do processo atual.  
  
**Nota**: 4D administra automaticamente as atualizações gráficas das janelas cada vez que você mover, redimensionar ou passar ao primeiro plano uma janela, assim como quando você muda o formulário ou os valores mostrados na janela. Este comando se utiliza raramente.

#### Ver também 

[ERASE WINDOW](erase-window.md)  