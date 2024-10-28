---
id: redraw-window
title: REDRAW WINDOW
slug: /commands/redraw-window
displayed_sidebar: docs
---

<!--REF #_command_.REDRAW WINDOW.Syntax-->**REDRAW WINDOW** {( *fenêtre* )}<!-- END REF-->
<!--REF #_command_.REDRAW WINDOW.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fenêtre | Integer | &#8594;  | Numéro de référence de la fenêtre ou Fenêtre de premier plan du process courant si omis |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.REDRAW WINDOW.Summary-->La commande **REDRAW WINDOW** provoque une mise à jour du contenu de la fenêtre dont le numéro de référence est passé dans *fenêtre*.<!-- END REF-->

Si vous omettez le paramètre *fenêtre*, **REDRAW WINDOW** s'appliquera à la fenêtre de premier plan du process courant.

**Note :** 4D gère automatiquement les mises à jour graphiques des fenêtres à chaque fois que vous déplacez, redimensionnez ou passez au premier plan une fenêtre ainsi qu'à chaque fois que vous changez le formulaire et/ou les valeurs affiché(e)s dans une fenêtre. Cette commande est rarement utilisée.

#### Voir aussi 

[ERASE WINDOW](erase-window.md)  