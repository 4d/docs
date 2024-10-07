---
id: get-window-title
title: Get window title
slug: /commands/get-window-title
displayed_sidebar: docs
---

<!--REF #_command_.Get window title.Syntax-->**Get window title** {( *fenêtre* )} -> Résultat<!-- END REF-->
<!--REF #_command_.Get window title.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fenêtre | Integer | &#x1F852; | Numéro de référence de la fenêtre ou Fenêtre de premier plan du process courant si omis |
| Résultat | Text | &#x1F850; | Titre de la fenêtre |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get window title.Summary-->La commande **Get window title** retourne le titre de la fenêtre dont le numéro de référence est passé dans *fenêtre*.<!-- END REF--> Si la fenêtre n'existe pas, une chaîne vide est retournée. 

Si vous omettez le paramètre *fenêtre*, **Get window title** retourne le titre de la fenêtre de premier plan du process courant.

#### Exemple 

Reportez-vous à l'exemple de la commande [SET WINDOW TITLE](set-window-title.md).

#### Voir aussi 

[SET WINDOW TITLE](set-window-title.md)  