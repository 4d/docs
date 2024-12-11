---
id: show-window
title: SHOW WINDOW
slug: /commands/show-window
displayed_sidebar: docs
---

<!--REF #_command_.SHOW WINDOW.Syntax-->**SHOW WINDOW** {( *fenêtre* )}<!-- END REF-->
<!--REF #_command_.SHOW WINDOW.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fenêtre | Integer | &#8594;  | Numéro de référence de la fenêtre ou Fenêtre de premier plan du process courant si omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.SHOW WINDOW.Summary-->La commande **SHOW WINDOW** permet d'afficher la fenêtre dont vous avez passé le numéro de référence dans *fenêtre* ou, si ce paramètre est omis, la fenêtre de premier plan du process courant.<!-- END REF-->

La fenêtre doit au préalable avoir été cachée à l'aide de la commande [HIDE WINDOW](hide-window.md). Si la fenêtre est déjà affichée, la commande ne fait rien.

#### Exemple 

Voir l'exemple de la commande [HIDE WINDOW](hide-window.md).

#### Voir aussi 

[HIDE WINDOW](hide-window.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 435 |
| Thread safe | &check; |
| Interdite sur le serveur ||


