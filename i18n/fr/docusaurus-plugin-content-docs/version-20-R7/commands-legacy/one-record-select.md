---
id: one-record-select
title: ONE RECORD SELECT
slug: /commands/one-record-select
displayed_sidebar: docs
---

<!--REF #_command_.ONE RECORD SELECT.Syntax-->**ONE RECORD SELECT** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.ONE RECORD SELECT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle réduire la sélection à un enregistrement |

<!-- END REF-->

#### Description 

<!--REF #_command_.ONE RECORD SELECT.Summary-->La commande **ONE RECORD SELECT** réduit la sélection courante de *laTable* à l'enregistrement courant.<!-- END REF--> S'il n'y a pas d'enregistrement courant ou si l'enregistrement courant n'est pas chargé en mémoire (cas particulier), **ONE RECORD SELECT** ne fait rien.

#### Note 

A l'origine, cette commande était utile pour "replacer" dans la sélection courante un enregistrement qui avait été empilé puis dépilé de la pile d'enregistrements pendant que la sélection de la table était modifiée. Cependant, puisque la commande [SET QUERY DESTINATION](set-query-destination.md) vous permet d'effectuer une recherche sans changer la sélection ni l'enregistrement courants de la table, vous n'avez plus besoin d'empiler et de dépiler un enregistrement courant pour effectuer une recherche sur sa table. Par conséquent, **ONE RECORD SELECT** est moins utile, à moins que vous ne souhaitiez expressément, pour une autre raison, réduire la sélection d'une table à l'enregistrement courant.

**Attention :** N'oubliez pas qu'un numéro d'enregistrement peut être réutilisé si l'enregistrement est supprimé et qu'un autre enregistrement est créé (voir *A propos des numéros d'enregistrements*).

#### Voir aussi 

[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  
*Présentation des Sélections Temporaires*  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  