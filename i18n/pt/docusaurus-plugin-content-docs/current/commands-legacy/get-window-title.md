---
id: get-window-title
title: Get window title
slug: /commands/get-window-title
displayed_sidebar: docs
---

<!--REF #_command_.Get window title.Syntax-->**Get window title** {( *janela* )} -> Resultado<!-- END REF-->
<!--REF #_command_.Get window title.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#x1F852; | Número de referência da Janela, ou a janela ativa do processo atual, se omitido |
| Resultado | Text | &#x1F850; | Título da janela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get window title.Summary-->O comando Get window title devolve o título da janela cujo número de referência se passa em *janela*.<!-- END REF--> Se a janela não existir, se devolve uma cadeia vazia.  

Se omitir o parâmetro *janela*, Get window title devolve o título da janela do primeiro plano do processo atual.

#### Exemplo 

Ver exemplo do comando [SET WINDOW TITLE](set-window-title.md).

#### Ver também 

[SET WINDOW TITLE](set-window-title.md)  