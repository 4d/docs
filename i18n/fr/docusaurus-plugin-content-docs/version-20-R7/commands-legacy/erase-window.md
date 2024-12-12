---
id: erase-window
title: ERASE WINDOW
slug: /commands/erase-window
displayed_sidebar: docs
---

<!--REF #_command_.ERASE WINDOW.Syntax-->**ERASE WINDOW** {( *fenêtre* )}<!-- END REF-->
<!--REF #_command_.ERASE WINDOW.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fenêtre | Integer | &#8594;  | Numéro de référence de fenêtre ou Fenêtre au premier plan du process courant si ce paramètre est omis |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.ERASE WINDOW.Summary-->La commande **ERASE WINDOW** efface le contenu de la fenêtre dont vous avez passé la référence dans *fenêtre*.<!-- END REF--> 

Si vous omettez le paramètre *fenêtre*, **ERASE WINDOW** efface le contenu de la fenêtre de premier plan du process courant. 

Généralement, vous utiliserez **ERASE WINDOW** en combinaison avec [MESSAGE](message.md) et [GOTO XY](goto-xy.md). Dans ce cas, **ERASE WINDOW** efface le contenu de la fenêtre et place le curseur dans son angle supérieur gauche, c'est-à-dire à la position correspondant à [GOTO XY](goto-xy.md)(0; 0). 

Ne confondez pas **ERASE WINDOW**, qui efface le contenu d'une fenêtre, et [GOTO XY](goto-xy.md), qui supprime la fenêtre de l'écran.

#### Voir aussi 

[GOTO XY](goto-xy.md)  
[MESSAGE](message.md)  