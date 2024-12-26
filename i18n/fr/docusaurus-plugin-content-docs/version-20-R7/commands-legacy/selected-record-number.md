---
id: selected-record-number
title: Selected record number
slug: /commands/selected-record-number
displayed_sidebar: docs
---

<!--REF #_command_.Selected record number.Syntax-->**Selected record number** {( *laTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Selected record number.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle retourner le numéro de l'enregistrement courant dans la sélection |
| Résultat | Integer | &#8592; | Numéro dans la sélection |

<!-- END REF-->

#### Description 

<!--REF #_command_.Selected record number.Summary-->**Selected record number** retourne la position de l'enregistrement courant dans la sélection courante de *laTable*.<!-- END REF-->

Si la sélection est non vide et si l'enregistrement courant en fait partie, **Selected record number** retourne une valeur comprise entre *1* et [Records in selection](records-in-selection.md). Si la sélection est vide ou s'il n'y a pas d'enregistrement courant, **Selected record number** retourne 0.

Le numéro de l'enregistrement dans la sélection est différent du numéro retourné par [Record number](record-number.md) ([Record number](record-number.md) retourne le numéro physique de l'enregistrement dans la table). Le numéro de l'enregistrement dans la sélection dépend de la sélection courante.

Pour plus de précisions sur les numéros d'enregistrements, reportez-vous à la section *A propos des numéros d'enregistrements*.

#### Exemple 

L'exemple suivant stocke le numéro de l'enregistrement courant de la sélection dans une variable :

```4d
  // Obtenir le numéro de l'enregistrement dans la sélection
 NumEnrCourant:=Selected record number([Personnes])
```

#### Voir aussi 

*A propos des numéros d'enregistrements*  
[GOTO SELECTED RECORD](goto-selected-record.md)  
[Records in selection](records-in-selection.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 246 |
| Thread safe | &check; |


