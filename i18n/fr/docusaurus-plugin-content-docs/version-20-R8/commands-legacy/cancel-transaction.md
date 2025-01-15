---
id: cancel-transaction
title: CANCEL TRANSACTION
slug: /commands/cancel-transaction
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL TRANSACTION.Syntax-->**CANCEL TRANSACTION**<!-- END REF-->
<!--REF #_command_.CANCEL TRANSACTION.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.CANCEL TRANSACTION.Summary-->**CANCEL TRANSACTION** annule la transaction ouverte par la commande [START TRANSACTION](start-transaction.md) de niveau correspondant dans le process courant.<!-- END REF-->annule toutes les opérations exécutées sur les données et stockées pendant la transaction. 

**Note :** **CANCEL TRANSACTION** est sans effet sur les modifications éventuellement effectuées dans les enregistrements courants mais non stockées - elles restent affichées après l'exécution de la commande.

#### Voir aussi 

[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
[Transaction level](transaction-level.md)  
*Utiliser des transactions*  
[VALIDATE TRANSACTION](validate-transaction.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 241 |
| Thread safe | &check; |


