---
id: window-process
title: Window process
slug: /commands/window-process
displayed_sidebar: docs
---

<!--REF #_command_.Window process.Syntax-->**Window process** {( *janela* )} -> Resultado<!-- END REF-->
<!--REF #_command_.Window process.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &srarr; | Número de referência da janela |
| Resultado | Integer | &larr; | Número de referência do processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Window process.Summary-->O comando Window process devolve o número de processo que executa a janela cujo número de referência é passado em *janela*.<!-- END REF--> Se a janela não existir, o comando devolve *0 (zero)*.  

Se omitir o parâmetro *janela*, Window process devolve o número do processo da janela do primeiro plano do processo atual.

#### Ver também 

[Current process](current-process.md)  