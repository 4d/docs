---
id: transaction-level
title: Transaction level
slug: /commands/transaction-level
displayed_sidebar: docs
---

<!--REF #_command_.Transaction level.Syntax-->**Transaction level**  : Integer<!-- END REF-->
<!--REF #_command_.Transaction level.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Niveau de transaction courant (0 si aucune transaction n’a été démarrée) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Transaction level.Summary-->La commande **Transaction level** retourne le niveau de transaction courant pour le process.<!-- END REF--> Cette commande prend en compte toutes les transactions du process courant, qu’elles aient été démarrées via le langage de 4D ou via le SQL.

#### Voir aussi 

[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
*Utiliser des transactions*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 961 |
| Thread safe | &check; |


