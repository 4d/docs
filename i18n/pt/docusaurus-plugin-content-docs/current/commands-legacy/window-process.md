---
id: window-process
title: Window process
slug: /commands/window-process
displayed_sidebar: docs
---

<!--REF #_command_.Window process.Syntax-->**Window process** {( *janela* )} : Integer<!-- END REF-->
<!--REF #_command_.Window process.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594;  | Número de referência da janela |
| Resultado | Integer | &#8592; | Número de referência do processo |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Window process.Summary-->O comando Window process devolve o número de processo que executa a janela cujo número de referência é passado em *janela*.<!-- END REF--> Se a janela não existir, o comando devolve *0 (zero)*.  

Se omitir o parâmetro *janela*, Window process devolve o número do processo da janela do primeiro plano do processo atual.

#### Ver também 

[Current process](current-process.md)  