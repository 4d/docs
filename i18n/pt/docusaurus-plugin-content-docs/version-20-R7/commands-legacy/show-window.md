---
id: show-window
title: SHOW WINDOW
slug: /commands/show-window
displayed_sidebar: docs
---

<!--REF #_command_.SHOW WINDOW.Syntax-->**SHOW WINDOW** {( *janela* )}<!-- END REF-->
<!--REF #_command_.SHOW WINDOW.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594;  | Número de referência da janela ou processo atual da janela de primeiro plano, se omitido |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SHOW WINDOW.Summary-->O comando SHOW WINDOW permite mostrar a janela cujo número foi passado em *janela*.<!-- END REF--> Se for omitido este parâmetro, se mostrará a janela do primeiro plano do processo atual.  

Para utilizar o comando SHOW WINDOW, a janela deve ter sido ocultada utilizando o comando [HIDE WINDOW](hide-window.md). Se a janela já for visível, o comando não faz nada.

#### Exemplo 

Consulte o exemplo do comando [HIDE WINDOW](hide-window.md). 

#### Ver também 

[HIDE WINDOW](hide-window.md)  