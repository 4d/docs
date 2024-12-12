---
id: is-a-list
title: Is a list
slug: /commands/is-a-list
displayed_sidebar: docs
---

<!--REF #_command_.Is a list.Syntax-->**Is a list** ( *liste* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is a list.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| liste | Integer | &#8594;  | Référence de la liste à tester |
| Résultat | Boolean | &#8592; | Vrai si liste est une liste hiérarchique Faux si liste n'est pas une liste hiérarchique |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Is a list.Summary-->La fonction **Is a list** retourne VRAI si la valeur passée dans le paramètre *liste* est une référence valide à une liste hiérarchique.<!-- END REF--> Dans les autres cas, elle retourne FAUX.

#### Exemple

Reportez-vous à l'exemple de la commande [CLEAR LIST](clear-list.md).

