---
id: next-window
title: Next window
slug: /commands/next-window
displayed_sidebar: docs
---

<!--REF #_command_.Next window.Syntax-->**Next window** ( *fenêtre* ) : Integer<!-- END REF-->
<!--REF #_command_.Next window.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fenêtre | Integer | &#8594;  | Numéro de référence de la fenêtre |
| Résultat | Integer | &#8592; | Numéro de référence de fenêtre |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Next window.Summary-->La commande **Next window** retourne le numéro de référence de la fenêtre située “derrière” la fenêtre dont vous avez passé le numéro de référence dans *fenêtre* (en fonction de l'ordre des fenêtres).<!-- END REF-->

#### Voir aussi 

[Frontmost window](frontmost-window.md)  