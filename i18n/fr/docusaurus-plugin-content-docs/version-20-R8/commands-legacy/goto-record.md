---
id: goto-record
title: GOTO RECORD
slug: /commands/goto-record
displayed_sidebar: docs
---

<!--REF #_command_.GOTO RECORD.Syntax-->**GOTO RECORD** ( {*laTable* ;} *enregistrement* )<!-- END REF-->
<!--REF #_command_.GOTO RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de l'enregistrement de destination ou Table par défaut si ce paramètre est omis |
| enregistrement | Integer | &#8594;  | Numéro renvoyé par Numero enregistrement |

<!-- END REF-->

#### Description 

<!--REF #_command_.GOTO RECORD.Summary-->**GOTO RECORD** sélectionne l'enregistrement courant de *table*.<!-- END REF--> Le paramètre *enregistrement* est le numéro renvoyé par la fonction [Record number](record-number.md). Après l'exécution de cette commande, l'enregistrement est le seul de la sélection courante.

Si *enregistrement* est inférieur au plus petit numéro d'enregistrement ou supérieur au plus grand numéro d'enregistrement de la base, 4D génère un message d'erreur indiquant que le numéro est hors intervalle. Si *enregistrement* est égal au numéro d'un enregistrement supprimé, 4D retourne l'erreur -10503 et la sélection courante devient vide. 

#### Exemple 

Référez-vous à l'exemple de la commande [Record number](record-number.md).

#### Voir aussi 

*A propos des numéros d'enregistrements*  
[Record number](record-number.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 242 |
| Thread safe | &check; |
| Modifie les variables | error |
| Change la sélection courante ||


