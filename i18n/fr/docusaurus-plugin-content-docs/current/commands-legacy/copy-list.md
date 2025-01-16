---
id: copy-list
title: Copy list
slug: /commands/copy-list
displayed_sidebar: docs
---

<!--REF #_command_.Copy list.Syntax-->**Copy list** ( *liste* ) : Integer<!-- END REF-->
<!--REF #_command_.Copy list.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| liste | Integer | &#8594;  | Numéro de référence de la liste à copier |
| Résultat | Integer | &#8592; | Numéro de référence de la nouvelle liste |

<!-- END REF-->

#### Description 

<!--REF #_command_.Copy list.Summary-->La commande **Copy list** duplique la liste dont vous passez le numéro de référence dans le paramètre *liste* et retourne le numéro de référence de la nouvelle liste.<!-- END REF-->

Le contenu de la liste copiée est entièrement dupliqué. Une fois que vous en avez terminé avec la copie de la liste, appelez la commande [CLEAR LIST](clear-list.md) pour l'effacer.

#### Voir aussi 

[CLEAR LIST](clear-list.md)  
[Load list](load-list.md)  
[New list](new-list.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 626 |
| Thread safe | &cross; |


