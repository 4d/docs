---
id: is-field-number-valid
title: Is field number valid
slug: /commands/is-field-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is field number valid.Syntax-->**Is field number valid** ( numTable | ptrTable ; *numChamp* ) -> Résultat<!-- END REF-->
<!--REF #_command_.Is field number valid.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| numTable &#124; ptrTable | Entier long, Pointeur | &#x1F852; | Numéro de table ou Pointeur vers une table |
| numChamp | Entier long | &#x1F852; | Numéro de champ |
| Résultat | Booléen | &#x1F850; | Vrai = le champ existe dans la table, Faux = le champ n’existe pas dans la table |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is field number valid.Summary-->La commande **Is field number valid** retourne Vrai si le champ dont le numéro est passé dans *numChamp* existe dans la table dont le numéro ou le pointeur est passé dans le paramètre *numTable* ou *ptrTable*.<!-- END REF--> Si le champ n’existe pas, la commande retourne Faux. A noter que la commande retourne Faux si la table du champ se trouve dans la Corbeille de l’Explorateur.

Cette commande permet de détecter d’éventuelles suppressions de champs, ce qui crée des ruptures dans la séquence des numéros de champs.

#### Voir aussi 

[Get last table number](get-last-table-number.md)  
[Is table number valid](is-table-number-valid.md)  