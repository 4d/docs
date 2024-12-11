---
id: boolean-array-from-set
title: BOOLEAN ARRAY FROM SET
slug: /commands/boolean-array-from-set
displayed_sidebar: docs
---

<!--REF #_command_.BOOLEAN ARRAY FROM SET.Syntax-->**BOOLEAN ARRAY FROM SET** ( *tabBooléen* {; *ensemble*} )<!-- END REF-->
<!--REF #_command_.BOOLEAN ARRAY FROM SET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabBooléen | Boolean array | &#8592; | Tableau d'appartenance des enregistrements à l’ensemble |
| ensemble | Text | &#8594;  | Nom de l’ensemble ou Ensemble UserSet si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.BOOLEAN ARRAY FROM SET.Summary-->La commande **BOOLEAN ARRAY FROM SET** remplit un tableau de booléens indiquant si chaque enregistrement de la table à laquelle appartient *ensemble* fait ou non partie de l’ensemble.<!-- END REF-->

Les éléments du tableau sont ordonnés en fonction de l’ordre de création des enregistrements dans la table (numéros absolus). Si N est le nombre d’enregistrements de la table, l’élément 0 du tableau correspond à l’enregistrement n° 0, l’élément 1 du tableau correspond à l’enregistrement n° 1, etc. 

Chaque élément du tableau est mis à :

* Vrai si l’enregistrement correspondant fait partie de l’ensemble,
* Faux si l’enregistrement correspondant ne pas partie de l’ensemble.

Attention, le nombre total d’éléments du tableau *tabBooléen* n’est pas significatif. En effet, pour des raisons structurelles, il peut être différent du nombre d’enregistrements effectivement présents dans la table. Les éventuels éléments supplémentaires sont mis à Faux.

Si vous ne passez pas le paramètre *ensemble*, la commande utilisera l’ensemble système UserSet du process courant.

#### Voir aussi 

[CREATE SET FROM ARRAY](create-set-from-array.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 646 |
| Thread safe | &check; |
| Interdite sur le serveur ||


