---
id: is-window-reduced
title: Is window reduced
slug: /commands/is-window-reduced
displayed_sidebar: docs
---

<!--REF #_command_.Is window reduced.Syntax-->**Is window reduced** ( *janela* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is window reduced.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594;  | Número de referência da janela |
| Resultado | Boolean | &#8592; | true se a janela for reduzida no taskbar ou no dock. Se não, false |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is window reduced.Summary-->O comando **Is window reduced** devolve **True** se a janela cujo número de referência se passar na *Janela* estiver atualmente reduzida na barra de tarefas (Windows) ou no dock (macOS), e **False** no caso contrário.<!-- END REF-->

#### Ver também 

[Is window maximized](is-window-maximized.md)  
[REDUCE RESTORE WINDOW](reduce-restore-window.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1831 |
| Thread-seguro | &cross; |


