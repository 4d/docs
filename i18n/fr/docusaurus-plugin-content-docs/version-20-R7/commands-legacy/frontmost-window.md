---
id: frontmost-window
title: Frontmost window
slug: /commands/frontmost-window
displayed_sidebar: docs
---

<!--REF #_command_.Frontmost window.Syntax-->**Frontmost window** {( * )} -> Résultat<!-- END REF-->
<!--REF #_command_.Frontmost window.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si omis = ignorer les fenêtres flottantes, Si spécifié = prendre en compte les fenêtres flottantes |
| Résultat | Integer | &#8592; | Numéro de référence de fenêtre |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Frontmost window.Summary-->La commande **Frontmost window** retourne le numéro de référence de la fenêtre actuellement située au premier plan.<!-- END REF-->

#### Voir aussi 

[Frontmost process](frontmost-process.md)  
[Next window](next-window.md)  