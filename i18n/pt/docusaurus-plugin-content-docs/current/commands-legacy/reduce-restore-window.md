---
id: reduce-restore-window
title: REDUCE RESTORE WINDOW
slug: /commands/reduce-restore-window
displayed_sidebar: docs
---

<!--REF #_command_.REDUCE RESTORE WINDOW.Syntax-->**REDUCE RESTORE WINDOW** ( *janela* )<!-- END REF-->
<!--REF #_command_.REDUCE RESTORE WINDOW.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594;  | Número de referência de janela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.REDUCE RESTORE WINDOW.Summary-->O comando **REDUCE RESTORE WINDOW** reduz/expande a janela cujo número de referência foi passado em *janela d*esde a barra de tarefas em Windows ou no dock em macOS.<!-- END REF-->   
  
O comando muda o estado da janela:

* Se a janela estiver ativa, o comando reduz a janela à barra de tarefas ou ao dock.
* Se a janela estiver reduzida o comando restaura a janela a seu estado anterior.

**Nota:** em macOS, o comando é assíncrono.

#### Ver também 

[Is window reduced](is-window-reduced.md)  
[MAXIMIZE WINDOW](maximize-window.md)  
[MINIMIZE WINDOW](minimize-window.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1829 |
| Thread-seguro | &check; |
| Proibido no servidor ||


